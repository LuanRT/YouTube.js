[youtubei.js](../../../README.md) / [Types](../README.md) / NextEndpointOptions

# Type Alias: NextEndpointOptions

> **NextEndpointOptions**: `object`

## Type declaration

### client?

> `optional` **client**: [`InnerTubeClient`](InnerTubeClient.md)

The client to use.

### continuation?

> `optional` **continuation**: `string`

The continuation token. Mostly used for pagination.

### params?

> `optional` **params**: `string`

Protobuf parameters.

### playlist\_id?

> `optional` **playlist\_id**: `string`

The playlist associated with the video.

### playlist\_index?

> `optional` **playlist\_index**: `number`

The playlist index.

### video\_id?

> `optional` **video\_id**: `string`

The video ID.

## Defined in

[src/types/Endpoints.ts:64](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/types/Endpoints.ts#L64)
