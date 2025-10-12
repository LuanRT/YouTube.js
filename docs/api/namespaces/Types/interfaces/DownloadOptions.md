[youtubei.js](../../../README.md) / [Types](../README.md) / DownloadOptions

# Interface: DownloadOptions

## Extends

- [`FormatOptions`](FormatOptions.md)

## Properties

### client?

> `optional` **client**: [`InnerTubeClient`](../type-aliases/InnerTubeClient.md)

InnerTube client.

#### Inherited from

[`FormatOptions`](FormatOptions.md).[`client`](FormatOptions.md#client)

#### Defined in

[src/types/GetVideoInfoOptions.ts:7](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/types/GetVideoInfoOptions.ts#L7)

***

### codec?

> `optional` **codec**: `string`

Video or audio codec, e.g. 'avc', 'vp9', 'av01' for video, 'opus', 'mp4a' for audio

#### Inherited from

[`FormatOptions`](FormatOptions.md).[`codec`](FormatOptions.md#codec)

#### Defined in

[src/types/FormatUtils.ts:31](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/types/FormatUtils.ts#L31)

***

### format?

> `optional` **format**: `string`

File format, use 'any' to download any format

#### Inherited from

[`FormatOptions`](FormatOptions.md).[`format`](FormatOptions.md#format)

#### Defined in

[src/types/FormatUtils.ts:27](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/types/FormatUtils.ts#L27)

***

### itag?

> `optional` **itag**: `number`

Video or audio itag

#### Inherited from

[`FormatOptions`](FormatOptions.md).[`itag`](FormatOptions.md#itag)

#### Defined in

[src/types/FormatUtils.ts:11](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/types/FormatUtils.ts#L11)

***

### language?

> `optional` **language**: `string`

Language code, defaults to 'original'.

#### Inherited from

[`FormatOptions`](FormatOptions.md).[`language`](FormatOptions.md#language)

#### Defined in

[src/types/FormatUtils.ts:23](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/types/FormatUtils.ts#L23)

***

### po\_token?

> `optional` **po\_token**: `string`

Proof of Origin token, bound to the video ID being requested.
If not provided, session bound token will be used.

#### Inherited from

[`FormatOptions`](FormatOptions.md).[`po_token`](FormatOptions.md#po_token)

#### Defined in

[src/types/GetVideoInfoOptions.ts:12](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/types/GetVideoInfoOptions.ts#L12)

***

### quality?

> `optional` **quality**: `string`

Video quality; 360p, 720p, 1080p, etc... also accepts 'best' and 'bestefficiency'.

#### Inherited from

[`FormatOptions`](FormatOptions.md).[`quality`](FormatOptions.md#quality)

#### Defined in

[src/types/FormatUtils.ts:15](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/types/FormatUtils.ts#L15)

***

### range?

> `optional` **range**: `object`

Download range, indicates which bytes should be downloaded.

#### end

> **end**: `number`

#### start

> **start**: `number`

#### Defined in

[src/types/FormatUtils.ts:38](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/types/FormatUtils.ts#L38)

***

### type?

> `optional` **type**: `"video"` \| `"audio"` \| `"video+audio"`

Download type, can be: video, audio or video+audio

#### Inherited from

[`FormatOptions`](FormatOptions.md).[`type`](FormatOptions.md#type)

#### Defined in

[src/types/FormatUtils.ts:19](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/types/FormatUtils.ts#L19)
