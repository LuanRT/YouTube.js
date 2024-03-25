Making the `Youtube.js` work in React-Native involves polyfilling number of APIs and using MMKV as an underlying storage for cache.
Below configuration is tested with `"react-native": "0.73.2`

Following polyfills are required to be installed:

```
"base-64": "^1.0.0",
"event-target-polyfill": "^0.0.4",
"react-native-mmkv": "^2.11.0",
"react-native-url-polyfill": "^2.0.0",
"text-encoding-polyfill": "^0.6.7",
"web-streams-polyfill": "^3.3.2"
```

And following `devDependencies`:
```
"@types/base-64": "^1.0.2",
"@babel/plugin-syntax-import-attributes": "^7.23.3",
"@babel/plugin-transform-export-namespace-from": "^7.23.4",
```

Adding `unstable_enablePackageExports: true` flag to Metro is required as well, because `Youtube.js` uses package exports feature in `package.json`.

`metro.config.js`:
```js
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const config = {
  resolver: {
    sourceExts: ['jsx', 'js', 'ts', 'tsx', 'cjs', 'json', 'd.ts'],
    unstable_enablePackageExports: true,
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
```

`babel.config.js`:
```js
module.exports = {
  plugins: [
    ['@babel/plugin-syntax-import-attributes', {deprecatedAssertSyntax: true}],
    '@babel/plugin-transform-export-namespace-from',
  ],
  presets: ['module:@react-native/babel-preset'],
};
```

Below is the sample file that loads all of the polyfills, makes `MMKV` storage globally available (to be used by `Cache` in `Youtube.js`) and inits the `Innertube` instance.

```typescript
// === START ===  Making Youtube.js work
import 'event-target-polyfill';
import 'web-streams-polyfill';
import 'text-encoding-polyfill';
import 'react-native-url-polyfill/auto';
import {decode, encode} from 'base-64';

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

import {MMKV} from 'react-native-mmkv';
// @ts-expect-error to avoid typings' fuss
global.mmkvStorage = MMKV as any;

// See https://github.com/nodejs/node/issues/40678#issuecomment-1126944677
class CustomEvent extends Event {
  #detail;

  constructor(type: string, options?: CustomEventInit<any[]>) {
    super(type, options);
    this.#detail = options?.detail ?? null;
  }

  get detail() {
    return this.#detail;
  }
}

global.CustomEvent = CustomEvent as any;

// === END === Making Youtube.js work

import Innertube, {UniversalCache} from 'youtubei.js';

let innertube: Promise<Innertube> = Innertube.create({
  cache: new UniversalCache(false),
  generate_session_locally: true,
});

export default innertube;

```
