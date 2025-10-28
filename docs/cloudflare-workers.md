# Cloudflare Workers and Edge Runtimes

- **Entrypoint**: `youtubei.js/cf-worker`
- **Status**: Public and supported. Exported via `package.json` and bundled in releases.
- **Where it runs**: Cloudflare Workers and other edge runtimes with Web-standard globals (`fetch`, `Request`, `Response`, `Headers`, `FormData`, `ReadableStream`, `caches`, `crypto.randomUUID`).

## Usage

```ts
import { Innertube } from 'youtubei.js/cf-worker';

export async function createYouTubeClient() {
  return await Innertube.create({
    // Optionally provide a custom fetch (e.g., to add a proxy or headers)
    // fetch: myCustomFetch
  });
}
```

- The API surface is identical to the default entrypoint; only the platform shim differs.
- An example Worker project is available at `examples/cloudflare-worker/`.

## Notes and limitations

- **Cookies/credentials**: The Workers entrypoint does not set `credentials: 'include'` on requests. If you need cookies or specific headers, provide a custom `fetch`.
- **Cache**: Uses the platform `caches` API for the library cache.
- **Node.js APIs**: Not available in this runtime; only Web APIs are used.

## When to use this

- Prefer this entrypoint in Cloudflare Workers or similar edge environments. For Node.js, import from `youtubei.js` (default) or the `node` export handled via conditional exports.
