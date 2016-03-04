<img alt="Este.js" src="https://cloud.githubusercontent.com/assets/66249/6515265/b91f0fb8-c388-11e4-857e-c90902e0b7a1.png" width="200">



## Prerequisites

- [node.js](http://nodejs.org) (Node 5 with npm 3 is required).
- [gulp](http://gulpjs.com/) (`npm install -g gulp`)

If you are using different node versions on your machine, use [nvm](https://github.com/creationix/nvm) to manage them.

## Start Development

- run `gulp`
- point your browser to [localhost:8000](http://localhost:8000)
- build something beautiful

React Native: [facebook.github.io/react-native/docs/getting-started.html](https://facebook.github.io/react-native/docs/getting-started.html)

## Dev Tasks

- `gulp` run web app in development mode
- `gulp -p` run web app in production mode
- `gulp mocha` run mocha unit tests
- `gulp mocha-watch` continuous test running for TDD
- `gulp eslint` eslint
- `gulp eslint --fix` fix some eslint issues

## Production Tasks

- `gulp build -p` build app for production, for example for [Heroku](https://dashboard.heroku.com/)
- `npm test` run all checks and tests
- `node src/server` start app, remember to set NODE_ENV and SERVER_URL
- `gulp to-html` render app to HTML for static hosting like [Firebase](https://www.firebase.com/features.html#features-hosting)


