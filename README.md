# nuxt

> Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## Dokku deployment

```
dokku mongo:create my-db-name
dokku mongo:link my-db-name my-nuxt-app
dokku mongo:promote my-db-name my-nuxt-app
dokku config:set my-nuxt-app NPM_CONFIG_PRODUCTION=false
dokku config:set my-nuxt-app HOST=0.0.0.0 NODE_ENV=production
```