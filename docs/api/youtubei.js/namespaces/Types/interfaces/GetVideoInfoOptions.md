[youtubei.js](../../../../README.md) / [Types](../README.md) / GetVideoInfoOptions

# Interface: GetVideoInfoOptions

Defined in: [src/types/GetVideoInfoOptions.ts:3](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/types/GetVideoInfoOptions.ts#L3)

## Extended by

- [`FormatOptions`](FormatOptions.md)

## Properties

### client?

> `optional` **client**: [`InnerTubeClient`](../type-aliases/InnerTubeClient.md)

Defined in: [src/types/GetVideoInfoOptions.ts:7](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/types/GetVideoInfoOptions.ts#L7)

InnerTube client.

***

### po\_token?

> `optional` **po\_token**: `string`

Defined in: [src/types/GetVideoInfoOptions.ts:12](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/types/GetVideoInfoOptions.ts#L12)

Proof of Origin token, bound to the video ID being requested.
If not provided, session bound token will be used.
