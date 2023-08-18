# Platform Support

YouTube.js is designed to be as platform agnostic as possible. To achieve this, we require all platforms wishing to use YouTube.js to provide a few shims around the platform's native APIs.

## Supported Platforms

We provide shims for the following platforms:

- Modern Browsers
- Node.js
- Deno

## Contributing Support for a New Platform

If you wish to bring YouTube.js to another platform, you will need to provide the following shims as specified by the `PlatformShim` type:

- `runtime`: String name of the platform.
- `info`: Object containing the package information read from `package.json`.
  - `version`: The version of the package.
  - `bugs_url`: The URL to the package's bug tracker.
  - `repository_url`: The URL to the package's repository.
- `server`: Boolean indicating whether the platform is a server or not. Used for setting some additional headers not possible on a web browser.
- `Cache`: Class that implements the `ICache` interface using the platform's native APIs.
- `sha1hash(data: string)`: Function that takes a string and returns a SHA-1 hash of it.
- `uuidv4()`: Function that returns a UUIDv4 string.
- `eval(code: string, env: Record<string, VMPrimative>)`: Function to evaluate untrusted javascript script and return the result.
- `fetch`: WHATWG Fetch API implementation.
- `Headers`: Headers implementation.
- `Request`: Request implementation.
- `Response`: Response implementation.
- `FormData`: FormData implementation.
- `File`: File implementation.
- `ReadableStream`: ReadableStream implementation.

An entry point for the platform should be added in the `src/platform` directory and should be formatted as follows:

```ts
import { Platform } from '../utils/Utils.js';
import { PlatformShim } from "../types";
import { ICache } from '../types/Cache.js';

class Cache implements ICache {
  // ...
}

Platform.load({
    // ... shims
});

export * from './lib.js';
import Innertube from './lib.js';
export default Innertube;
```
