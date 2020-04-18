import * as React from 'react';
import { observer, inject } from 'mobx-react';
import ExampleStore from '../store/example-store'

export interface HomeProps {
  store?: {
    exampleStore: ExampleStore
  }
}

export interface HomeState {

}

@observer
@inject('store')
class Home extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
  }
  render() {
    const { exampleStore } = this.props.store;
    return (
      <>
        <h1>Hello world!</h1>
        <h2>{exampleStore.test}</h2>
      </>
    );
  }
}

export default Home;