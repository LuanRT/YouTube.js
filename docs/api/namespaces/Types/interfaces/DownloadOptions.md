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

[src/types/FormatUtils.ts:27](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/types/FormatUtils.ts#L27)

***

### format?

> `optional` **format**: `string`

File format, use 'any' to download any format

#### Inherited from

[`FormatOptions`](FormatOptions.md).[`format`](FormatOptions.md#format)

#### Defined in

[src/types/FormatUtils.ts:23](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/types/FormatUtils.ts#L23)

***

### language?

> `optional` **language**: `string`

Language code, defaults to 'original'.

#### Inherited from

[`FormatOptions`](FormatOptions.md).[`language`](FormatOptions.md#language)

#### Defined in

[src/types/FormatUtils.ts:19](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/types/FormatUtils.ts#L19)

***

### quality?

> `optional` **quality**: `string`

Video quality; 360p, 720p, 1080p, etc... also accepts 'best' and 'bestefficiency'.

#### Inherited from

[`FormatOptions`](FormatOptions.md).[`quality`](FormatOptions.md#quality)

#### Defined in

[src/types/FormatUtils.ts:11](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/types/FormatUtils.ts#L11)

***

### range?

> `optional` **range**: `object`

Download range, indicates which bytes should be downloaded.

#### end

> **end**: `number`

#### start

> **start**: `number`

#### Defined in

[src/types/FormatUtils.ts:34](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/types/FormatUtils.ts#L34)

***

### type?

> `optional` **type**: `"video"` \| `"audio"` \| `"video+audio"`

Download type, can be: video, audio or video+audio

#### Inherited from

[`FormatOptions`](FormatOptions.md).[`type`](FormatOptions.md#type)

#### Defined in

[src/types/FormatUtils.ts:15](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/types/FormatUtils.ts#L15)
