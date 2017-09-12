# CatKin

React/Redux + Webpack 3 template with server-side-rendering and code-splitting thanks to [Universal Component](https://github.com/faceyspacey/react-universal-component) and [Redux First Router](https://github.com/faceyspacey/redux-first-router). Cred goes to [James Gillmore](https://github.com/faceyspacey) for providing these awesome libraries. This template also has support for static site generation á la [Next.js](https://github.com/zeit/next.js/).

## Table of contents

* [What does it contain?](#what-does-it-contain)
* [Installing](#installing)
* [Developing](#developing)
* [Building](#building)
* [Serving](#serving)
* [All npm scripts](#all-npm-scripts)
* [Project structure](#project-structure)

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

## Project structure

* `config/`
* `---- storybook/`
* `---- ---- addons.js` - Storybook addons, check the [Storybook addon gallery](https://storybook.js.org/addons/addon-gallery/) for more
* `---- ---- config.js` - config for loading Storybook stories
* `---- ---- webpack.config.js` - extending Storybook Webpack config with requirements from the app
* `---- env.js` - stores `process.env` vars and default values
* `---- icons.js` - settings for generating favicons for all browsers
* `---- loaders.js` - add/remove/modify Webpack loaders used in all Webpack configs
* `---- paths.js` - path settings for building and fetching files
* `---- postcss.js` - add/remove/modify postcss plugins, uses [Import](https://github.com/postcss/postcss-import), [Nested](https://github.com/postcss/postcss-nested) and [CSSNext](https://github.com/MoOx/postcss-cssnext) for now
* `---- variables.js` - css variables and custom media queries to be served in the css files
* `---- webpack.base.js` - base Webpack config that is extended by the following configs
* `---- webpack.client.js` - Webpack config for browser assets
* `---- webpack.server.js` - Webpack config for the node server
* `---- webpack.static.js` - Webpack config for generating a static site
* `entries/`
* `---- client.js` - Webpack entry for the client script, renders the React application in the browser
* `---- server.js` - Webpack entry for the server script, builds a script used for server-side rendering and static site generation
* `server/`
* `---- development.js` - [Express](http://expressjs.com/) middlewares used in development, stuff like the hot middleware for client and server scripts
* `---- production.js` - [Express](http://expressjs.com/) setup for the live enviroment, uses the transpiled server script for server-side rendering
* `source/`
* `---- assets/`
* `---- ---- favicon.png` - this image will be used to generate all the favicons
* `---- ---- styles.css` - holds the global css, only use basic selectors here
* `---- components/` - stateless components
* `---- ---- [ComponentName]/`
* `---- ---- ---- index.js` - the stateless component
* `---- ---- ---- stories.js` - Storybook stories for the component
* `---- ---- ---- styles.css` - local css imported and used within the stateless component
* `---- layouts/` - stateless components that render `props.children` within itself
* `---- ---- [LayoutName]/`
* `---- ---- ---- index.js` - the stateless component
* `---- ---- ---- stories.js` - Storybook stories for the component
* `---- ---- ---- styles.css` - local css imported and used within the stateless component
* `---- state/`
* `---- ---- middleware.js` - apply Redux middleware here
* `---- ---- persist.js` - local storage utilites
* `---- ---- reducers.js` - functions for injecting and removing reducers, also setup global reducers
* `---- ---- routes.js` - route management for [Redux First Router](https://github.com/faceyspacey/redux-first-router) and component/reducer/saga dynamic imports for [Universal Component](https://github.com/faceyspacey/react-universal-component)
* `---- ---- sagas.js` - functions for injecting, running and cancel sagas
* `---- ---- store.js` - creates the Redux store combining middlewares, reducers and sagas
* `---- utilities/`
* `---- ---- debug.js` - function for debug logging, uses [Debug](https://github.com/visionmedia/debug)
* `---- ---- propTypes.js` - prop-types shape configurations for common use
* `---- views/` - stateless components that render `props.children` within itself
* `---- ---- [ViewName]/`
* `---- ---- ---- actions.js` - Redux actions
* `---- ---- ---- index.js` - the "[connected](https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options)" stateless component
* `---- ---- ---- reducer.js` - reducing component props instead of `setState`, can be injected on route load, check `source/state/routes.js`
* `---- ---- ---- sagas.js` - sagas to handle component events and their side effects, can be injected on route load, check `source/state/routes.js`
* `---- ---- ---- selectors.js` - [Reselect](https://github.com/reactjs/reselect) selectors for props population
* `---- ---- ---- styles.css` - local css imported and used within the component
* `.babelrc`
* `.editorconfig`
* `.env` - your local env vars, should not be tracked
* `.env.example` - default env vars, to be cloned to `.env` before development
* `.eslint` - extends airbnb preset with the major changes, 4 space indent and no semicolons
* `.gitignore`
* `index.js` - the main [Express](http://expressjs.com/) server
* `package.json`
* `yarn.lock`
