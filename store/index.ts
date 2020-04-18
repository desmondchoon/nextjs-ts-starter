import { useStaticRendering } from 'mobx-react'

/**Stores */
import ExampleStore from './example-store'

const isServer = !process.browser
useStaticRendering(isServer)

class Store {
    exampleStore: ExampleStore
    constructor(props: Object) {
        this.exampleStore = new ExampleStore(props);
    }
}

let store = null

export function initializeStore(initialData: Object) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return new Store(initialData)
  }
  if (store === null) {
    store = new Store(initialData)
  }
  return store
}