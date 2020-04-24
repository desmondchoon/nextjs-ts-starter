# NextJS Typescript Starter

## Packages
- MobX
- MaterialUI
- esm
- ExpressJS

## How to?
### Starting a dev instance
If using Yarn:
```
  yarn run dev
```

If using npm
```
  npm run dev
```

## Configuration
### MobX
The mobx store is set up to consolidate all stores into a single props.
Navigating to `./store/index.ts`, you will find the store initialization code which imports and exports all initialized store.
You will find the passing of mobx store property via the mobx `Provider` component in the `_app.ts` within `./pages`.

You can also send initial props into the mobx stores, which can be accessed through the `constructor()` method of the store which is found in `_app.ts` file:
```
    this.mobxStore = isServer
      ? props.initialMobxState
      : initializeStore({
        /**Your initial props here */
      })
```
