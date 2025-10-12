[youtubei.js](../../../../README.md) / [Types](../README.md) / FormatOptions

# Interface: FormatOptions

Defined in: [src/types/FormatUtils.ts:7](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/types/FormatUtils.ts#L7)

## Extends

- [`GetVideoInfoOptions`](GetVideoInfoOptions.md)

## Extended by

- [`DownloadOptions`](DownloadOptions.md)

## Properties

### client?

> `optional` **client**: [`InnerTubeClient`](../type-aliases/InnerTubeClient.md)

Defined in: [src/types/GetVideoInfoOptions.ts:7](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/types/GetVideoInfoOptions.ts#L7)

InnerTube client.

#### Inherited from

[`GetVideoInfoOptions`](GetVideoInfoOptions.md).[`client`](GetVideoInfoOptions.md#client)

***

### codec?

> `optional` **codec**: `string`

Defined in: [src/types/FormatUtils.ts:31](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/types/FormatUtils.ts#L31)

Video or audio codec, e.g. 'avc', 'vp9', 'av01' for video, 'opus', 'mp4a' for audio

***

### format?

> `optional` **format**: `string`

Defined in: [src/types/FormatUtils.ts:27](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/types/FormatUtils.ts#L27)

File format, use 'any' to download any format

***

### itag?

> `optional` **itag**: `number`

Defined in: [src/types/FormatUtils.ts:11](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/types/FormatUtils.ts#L11)

Video or audio itag

***

### language?

> `optional` **language**: `string`

Defined in: [src/types/FormatUtils.ts:23](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/types/FormatUtils.ts#L23)

Language code, defaults to 'original'.

***

### po\_token?

> `optional` **po\_token**: `string`

Defined in: [src/types/GetVideoInfoOptions.ts:12](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/types/GetVideoInfoOptions.ts#L12)

Proof of Origin token, bound to the video ID being requested.
If not provided, session bound token will be used.

#### Inherited from

[`GetVideoInfoOptions`](GetVideoInfoOptions.md).[`po_token`](GetVideoInfoOptions.md#po_token)

***

### quality?

> `optional` **quality**: `string`

Defined in: [src/types/FormatUtils.ts:15](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/types/FormatUtils.ts#L15)

Video quality; 360p, 720p, 1080p, etc... also accepts 'best' and 'bestefficiency'.

***

### type?

> `optional` **type**: `"video"` \| `"audio"` \| `"video+audio"`

Defined in: [src/types/FormatUtils.ts:19](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/types/FormatUtils.ts#L19)

Download type, can be: video, audio or video+audio
