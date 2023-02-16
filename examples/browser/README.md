# Browser Usage Example

YouTube.js works in the browser!

## Usage

To use YouTube.js in the browser you must proxy requests through your own server. You can see our simple reference implementation in Deno in `examples/browser/proxy/deno.ts`.

We'll use our own fetch implementation to proxy requests through our server. This is a simple example, but you can use any fetch implementation you want.

```ts
import { Innertube } from "youtubei.js/build/browser";

const yt = await Innertube.create({
    fetch: async (input, init) => {
        // url
        const url = typeof input === 'string'
            ? new URL(input)
            : input instanceof URL
            ? input
            : new URL(input.url);

        // transform the url for use with our proxy
        url.searchParams.set('__host', url.host);
        url.host = 'localhost:8080';
        url.protocol = 'http';

        const headers = init?.headers
            ? new Headers(init.headers)
            : input instanceof Request
            ? input.headers
            : new Headers();

        // now serialize the headers
        url.searchParams.set('__headers', JSON.stringify([...headers]));

        // copy over the request
        const request = new Request(
            url,
            input instanceof Request ? input : undefined,
        );

        headers.delete('user-agent');

        // fetch the url
        return fetch(request, init ? {
            ...init,
            headers
        } : {
            headers
        });
    },
    cache: new UniversalCache(),
});
```

After that, you can use the library as normal.

## Example

We've got a full example in `examples/browser/web` using vite.

If you don't want to run the example yourself, you can see it in action here: [ytjsexample.pages.dev](https://ytjsexample.pages.dev/).