[youtubei.js](../../../README.md) / [Types](../README.md) / FormatOptions

# Interface: FormatOptions

## Extended by

- [`DownloadOptions`](DownloadOptions.md)

## Properties

### client?

> `optional` **client**: [`InnerTubeClient`](../type-aliases/InnerTubeClient.md)

InnerTube client.

#### Defined in

[src/types/FormatUtils.ts:27](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/types/FormatUtils.ts#L27)

***

### format?

> `optional` **format**: `string`

File format, use 'any' to download any format

#### Defined in

[src/types/FormatUtils.ts:23](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/types/FormatUtils.ts#L23)

***

### language?

> `optional` **language**: `string`

Language code, defaults to 'original'.

#### Defined in

[src/types/FormatUtils.ts:19](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/types/FormatUtils.ts#L19)

***

### quality?

> `optional` **quality**: `string`

Video quality; 360p, 720p, 1080p, etc... also accepts 'best' and 'bestefficiency'.

#### Defined in

[src/types/FormatUtils.ts:11](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/types/FormatUtils.ts#L11)

***

### type?

> `optional` **type**: `"video"` \| `"audio"` \| `"video+audio"`

Download type, can be: video, audio or video+audio

#### Defined in

[src/types/FormatUtils.ts:15](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/types/FormatUtils.ts#L15)
