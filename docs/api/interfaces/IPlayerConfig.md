[youtubei.js](../README.md) / IPlayerConfig

# Interface: IPlayerConfig

Defined in: [src/parser/types/ParsedResponse.ts:111](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/types/ParsedResponse.ts#L111)

## Properties

### audio\_config

> **audio\_config**: `object`

Defined in: [src/parser/types/ParsedResponse.ts:112](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/types/ParsedResponse.ts#L112)

#### enable\_per\_format\_loudness

> **enable\_per\_format\_loudness**: `boolean`

#### loudness\_db?

> `optional` **loudness\_db**: `number`

#### perceptual\_loudness\_db?

> `optional` **perceptual\_loudness\_db**: `number`

***

### media\_common\_config

> **media\_common\_config**: `object`

Defined in: [src/parser/types/ParsedResponse.ts:120](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/types/ParsedResponse.ts#L120)

#### dynamic\_readahead\_config

> **dynamic\_readahead\_config**: `object`

##### dynamic\_readahead\_config.max\_read\_ahead\_media\_time\_ms

> **max\_read\_ahead\_media\_time\_ms**: `number`

##### dynamic\_readahead\_config.min\_read\_ahead\_media\_time\_ms

> **min\_read\_ahead\_media\_time\_ms**: `number`

##### dynamic\_readahead\_config.read\_ahead\_growth\_rate\_ms

> **read\_ahead\_growth\_rate\_ms**: `number`

#### media\_ustreamer\_request\_config?

> `optional` **media\_ustreamer\_request\_config**: `object`

##### media\_ustreamer\_request\_config.video\_playback\_ustreamer\_config?

> `optional` **video\_playback\_ustreamer\_config**: `string`

***

### stream\_selection\_config

> **stream\_selection\_config**: `object`

Defined in: [src/parser/types/ParsedResponse.ts:117](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/types/ParsedResponse.ts#L117)

#### max\_bitrate

> **max\_bitrate**: `string`
