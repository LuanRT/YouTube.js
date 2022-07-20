# Browser Usage Example

YouTube.js works in the browser!

## How to use

To use YouTube.js in the browser you must proxy requests through your own server. You can see our simple reference implementation in Deno in `examples/browser/proxy/deno.ts`.

Once the proxy is set up you need to tell Innertube about it when instantiating it.

```ts
import { Innertube } from "youtubei.js/build/browser";

const yt = await Innertube.create({
    browser_proxy: {
        host: "localhost",
        schema: 'http',
    }
})
```

after that you can use the library as normal.

## Example

We've got a full example in `examples/browser/web` using vite.
