[youtubei.js](../../../README.md) / [APIResponseTypes](../README.md) / IPlayerConfig

# Interface: IPlayerConfig

## Properties

### audio\_config

> **audio\_config**: `object`

#### enable\_per\_format\_loudness

> **enable\_per\_format\_loudness**: `boolean`

#### loudness\_db?

> `optional` **loudness\_db**: `number`

#### perceptual\_loudness\_db?

> `optional` **perceptual\_loudness\_db**: `number`

#### Defined in

[src/parser/types/ParsedResponse.ts:109](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/types/ParsedResponse.ts#L109)

***

### media\_common\_config

> **media\_common\_config**: `object`

#### dynamic\_readahead\_config

> **dynamic\_readahead\_config**: `object`

#### dynamic\_readahead\_config.max\_read\_ahead\_media\_time\_ms

> **max\_read\_ahead\_media\_time\_ms**: `number`

#### dynamic\_readahead\_config.min\_read\_ahead\_media\_time\_ms

> **min\_read\_ahead\_media\_time\_ms**: `number`

#### dynamic\_readahead\_config.read\_ahead\_growth\_rate\_ms

> **read\_ahead\_growth\_rate\_ms**: `number`

#### media\_ustreamer\_request\_config?

> `optional` **media\_ustreamer\_request\_config**: `object`

#### media\_ustreamer\_request\_config.video\_playback\_ustreamer\_config?

> `optional` **video\_playback\_ustreamer\_config**: `string`

#### Defined in

[src/parser/types/ParsedResponse.ts:117](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/types/ParsedResponse.ts#L117)

***

### stream\_selection\_config

> **stream\_selection\_config**: `object`

#### max\_bitrate

> **max\_bitrate**: `string`

#### Defined in

[src/parser/types/ParsedResponse.ts:114](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/types/ParsedResponse.ts#L114)
