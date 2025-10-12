> ⚠️ **Warning:** This example is outdated.  
> Please check out [kira](https://github.com/LuanRT/kira) or [sabr-shaka-example](https://github.com/LuanRT/googlevideo/tree/main/examples/sabr-shaka-example) for up-to-date browser usage.

# Browser Usage
To use YouTube.js in the browser you must proxy requests through your own server. You can see our simple reference implementation in Deno in `examples/browser/proxy/deno.ts`.

## Example
**NOTE**: Build the library before running the examples.

Web application:

```shell
cd examples/browser/web
npm install
npm run dev
```

Proxy:
  
```shell
deno run --allow-net --allow-read examples/browser/proxy/deno.ts
```