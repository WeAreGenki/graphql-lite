<!-- markdownlint-disable first-line-h1 -->

[![Build status](https://img.shields.io/circleci/project/github/WeAreGenki/graphql-lite.svg)](https://circleci.com/gh/WeAreGenki/graphql-lite)
[![Coverage status](https://img.shields.io/codecov/c/github/WeAreGenki/graphql-lite.svg)](https://codecov.io/gh/WeAreGenki/graphql-lite)
[![NPM version](https://img.shields.io/npm/v/graphql-lite.svg)](https://www.npmjs.com/package/graphql-lite)
[![Licence](https://img.shields.io/npm/l/graphql-lite.svg)](https://github.com/WeAreGenki/graphql-lite/blob/master/LICENCE)

# GraphQL Lite Client

**NOTE: This is a work in progress and not yet ready for real use.**

🍃 Lightweight GraphQL client which combines Rollup build-time parsing, transforming, and tree-shaking of queries, and run-time client-side network requests. The goal is to have the most lightweight and performant GraphQL client run-time.

Similar projects:

- <https://github.com/prisma/graphql-request>
- <https://github.com/octokit/graphql.js>
- <https://github.com/apollographql/graphql-tag>

## Quick start

Install:

```sh
yarn add graphql-lite graphql
```

Setup in `rollup.config.js`:

```ts
import { graphql } from 'graphql-lite';

export default {
  plugins: [graphql()],
};
```

Use:

```ts
import { parse, request } from 'graphql-lite';

// TODO: Add usage example
```

## Browser compatibility

TODO: Add note about this package using native `fetch` and how to add a polyfill for old browser and node compatibility.

```sh
yarn add isomorphic-unfetch
```

TODO: Add note that is very old browser support is required, you need to also polyfill `Promise`.

## Changelog

See [CHANGELOG](CHANGELOG.md).

## Licence

`graphql-lite` is an Apache-2.0 licensed open source project. See [LICENCE](https://github.com/WeAreGenki/graphql-lite/blob/master/LICENCE).

---

© 2018 [We Are Genki](https://wearegenki.com)
