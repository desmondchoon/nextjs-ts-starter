import App from 'next/app'
import React from 'react'
import Head from 'next/head';

/**
 * Everything related to Material UI
 */
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';

/**
 * Everything related to Mobx
 */
import { initializeStore } from '../store';
import { Provider } from 'mobx-react'

export interface MyAppProps {
  initialMobxState: any,
  pageProps: any,
  Component: any,
  router: any
}

export interface MyAppState {

}

class MyApp extends App<MyAppProps, MyAppState> {
  mobxStore: any
  pageContext: any

  static async getInitialProps(appContext) {
    // Get or Create the store with `undefined` as initialState
    // This allows you to set a custom default initialState
    const mobxStore = initializeStore({})
    // Provide the store to getInitialProps of pages
    appContext.ctx.mobxStore = mobxStore

    let appProps = await App.getInitialProps(appContext)

    return {  
      ...appProps,
      initialMobxState: mobxStore
    }
  }


  constructor(props: MyAppProps) {
    super(props);
    const isServer = !process.browser
    this.mobxStore = isServer
      ? props.initialMobxState
      : initializeStore({
        /**Your initial props here */
      })
  }
  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>Next.js TypeScript Example</title>
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Provider store={this.mobxStore}>
            <Component pageContext={this.pageContext} {...pageProps} />
          </Provider>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default MyApp;