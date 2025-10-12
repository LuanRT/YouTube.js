[youtubei.js](../../../README.md) / [Types](../README.md) / GetVideoInfoOptions

# Interface: GetVideoInfoOptions

## Extended by

- [`FormatOptions`](FormatOptions.md)

## Properties

### client?

> `optional` **client**: [`InnerTubeClient`](../type-aliases/InnerTubeClient.md)

InnerTube client.

#### Defined in

[src/types/GetVideoInfoOptions.ts:7](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/types/GetVideoInfoOptions.ts#L7)

***

### po\_token?

> `optional` **po\_token**: `string`

Proof of Origin token, bound to the video ID being requested.
If not provided, session bound token will be used.

#### Defined in

[src/types/GetVideoInfoOptions.ts:12](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/types/GetVideoInfoOptions.ts#L12)
