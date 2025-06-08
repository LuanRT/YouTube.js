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

[src/types/FormatUtils.ts:35](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/types/FormatUtils.ts#L35)

***

### codec?

> `optional` **codec**: `string`

Video or audio codec, e.g. 'avc', 'vp9', 'av01' for video, 'opus', 'mp4a' for audio

#### Inherited from

[`FormatOptions`](FormatOptions.md).[`codec`](FormatOptions.md#codec)

#### Defined in

[src/types/FormatUtils.ts:31](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/types/FormatUtils.ts#L31)

***

### format?

> `optional` **format**: `string`

File format, use 'any' to download any format

#### Inherited from

[`FormatOptions`](FormatOptions.md).[`format`](FormatOptions.md#format)

#### Defined in

[src/types/FormatUtils.ts:27](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/types/FormatUtils.ts#L27)

***

### itag?

> `optional` **itag**: `number`

Video or audio itag

#### Inherited from

[`FormatOptions`](FormatOptions.md).[`itag`](FormatOptions.md#itag)

#### Defined in

[src/types/FormatUtils.ts:11](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/types/FormatUtils.ts#L11)

***

### language?

> `optional` **language**: `string`

Language code, defaults to 'original'.

#### Inherited from

[`FormatOptions`](FormatOptions.md).[`language`](FormatOptions.md#language)

#### Defined in

[src/types/FormatUtils.ts:23](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/types/FormatUtils.ts#L23)

***

### quality?

> `optional` **quality**: `string`

Video quality; 360p, 720p, 1080p, etc... also accepts 'best' and 'bestefficiency'.

#### Inherited from

[`FormatOptions`](FormatOptions.md).[`quality`](FormatOptions.md#quality)

#### Defined in

[src/types/FormatUtils.ts:15](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/types/FormatUtils.ts#L15)

***

### range?

> `optional` **range**: `object`

Download range, indicates which bytes should be downloaded.

#### end

> **end**: `number`

#### start

> **start**: `number`

#### Defined in

[src/types/FormatUtils.ts:42](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/types/FormatUtils.ts#L42)

***

### type?

> `optional` **type**: `"video"` \| `"audio"` \| `"video+audio"`

Download type, can be: video, audio or video+audio

#### Inherited from

[`FormatOptions`](FormatOptions.md).[`type`](FormatOptions.md#type)

#### Defined in

[src/types/FormatUtils.ts:19](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/types/FormatUtils.ts#L19)
