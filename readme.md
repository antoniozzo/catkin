# CatKin

React/Redux + Webpack 3 template with server-side-rendering and code-splitting thanks to [Universal Component](https://github.com/faceyspacey/react-universal-component) and [Redux First Router](https://github.com/faceyspacey/redux-first-router). Cred goes to [James Gillmore](https://github.com/faceyspacey) for providing these awesome libraries. This template also has support for static site generation á la [Next.js](https://github.com/zeit/next.js/).

## Table of contents

* [What does it contain?](#what-does-it-contain)
* [Installing](#installing)
* [Developing](#developing)
* [Building](#building)
* [Serving](#serving)
* [All npm scripts](#all-npm-scripts)

## What does it contain?

* [React](https://github.com/facebook/react)/[Redux](https://github.com/reactjs/redux)
* [Webpack 3](https://github.com/webpack/webpack)
* [Storybook](https://github.com/storybooks/storybook) - develop components in isolation from the application
* [Universal Component](https://github.com/faceyspacey/react-universal-component) - load parts of the application asynchronously
* [Redux First Router](https://github.com/faceyspacey/redux-first-router) - handle route changes/state the same way as any other Redux action
* [Webpack Hot Server Middleware](https://github.com/60frames/webpack-hot-server-middleware) - no `/build` folder during development, the server code is kept and re-built in memory
* [Animated Transition Group](https://github.com/faceyspacey/animated-transition-group) - nice transitions between views with loading/error states
* [Redux Actions](https://github.com/reduxactions/redux-actions) - create Redux actions/reducers in a simple way
* [Redux Saga](https://github.com/redux-saga/redux-saga) - handles side effects and data preloading
* And some other stuff...

## Installing

```
$ yarn install
```

## Developing

Application
```
$ yarn develop
```

Storybook
```
$ yarn storybook
```

## Building

Building universal application
```
$ yarn build:server
```

Building static served html files
```
$ yarn build:static
```

## Serving

With server-side rendering
```
$ yarn serve
```

With static html files
```
$ yarn serve:static
```

## All npm scripts

* `start` - alias for `serve`
* `serve` - serve the built application in production mode
* `serve:static` - serve the html files and assets as a static site
* `develop` - start the application in development mode
* `storybook` - start storybook for development
* `build` - build the client & server assets
* `build:client` - build the client assets only
* `build:server` - build the server assets only
* `build:static` - build the static html files and assets
* `build:storybook` - build the storybook
* `test` - run tests with jest
* `test:cover` - run tests with jest and give a coverage report
