[youtubei.js](../../../README.md) / [Types](../README.md) / FormatOptions

# Interface: FormatOptions

## Extends

- [`GetVideoInfoOptions`](GetVideoInfoOptions.md)

## Extended by

- [`DownloadOptions`](DownloadOptions.md)

## Properties

### client?

> `optional` **client**: [`InnerTubeClient`](../type-aliases/InnerTubeClient.md)

InnerTube client.

#### Inherited from

[`GetVideoInfoOptions`](GetVideoInfoOptions.md).[`client`](GetVideoInfoOptions.md#client)

#### Defined in

[src/types/GetVideoInfoOptions.ts:7](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/types/GetVideoInfoOptions.ts#L7)

***

### codec?

> `optional` **codec**: `string`

Video or audio codec, e.g. 'avc', 'vp9', 'av01' for video, 'opus', 'mp4a' for audio

#### Defined in

[src/types/FormatUtils.ts:31](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/types/FormatUtils.ts#L31)

***

### format?

> `optional` **format**: `string`

File format, use 'any' to download any format

#### Defined in

[src/types/FormatUtils.ts:27](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/types/FormatUtils.ts#L27)

***

### itag?

> `optional` **itag**: `number`

Video or audio itag

#### Defined in

[src/types/FormatUtils.ts:11](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/types/FormatUtils.ts#L11)

***

### language?

> `optional` **language**: `string`

Language code, defaults to 'original'.

#### Defined in

[src/types/FormatUtils.ts:23](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/types/FormatUtils.ts#L23)

***

### po\_token?

> `optional` **po\_token**: `string`

Proof of Origin token, bound to the video ID being requested.
If not provided, session bound token will be used.

#### Inherited from

[`GetVideoInfoOptions`](GetVideoInfoOptions.md).[`po_token`](GetVideoInfoOptions.md#po_token)

#### Defined in

[src/types/GetVideoInfoOptions.ts:12](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/types/GetVideoInfoOptions.ts#L12)

***

### quality?

> `optional` **quality**: `string`

Video quality; 360p, 720p, 1080p, etc... also accepts 'best' and 'bestefficiency'.

#### Defined in

[src/types/FormatUtils.ts:15](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/types/FormatUtils.ts#L15)

***

### type?

> `optional` **type**: `"video"` \| `"audio"` \| `"video+audio"`

Download type, can be: video, audio or video+audio

#### Defined in

[src/types/FormatUtils.ts:19](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/types/FormatUtils.ts#L19)
