[youtubei.js](../../../README.md) / [APIResponseTypes](../README.md) / IRawPlayerConfig

# Interface: IRawPlayerConfig

## Properties

### audioConfig

> **audioConfig**: `object`

#### enablePerFormatLoudness

> **enablePerFormatLoudness**: `boolean`

#### loudnessDb?

> `optional` **loudnessDb**: `number`

#### perceptualLoudnessDb?

> `optional` **perceptualLoudnessDb**: `number`

#### Defined in

[src/parser/types/RawResponse.ts:1547](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/types/RawResponse.ts#L1547)

***

### mediaCommonConfig

> **mediaCommonConfig**: `object`

#### dynamicReadaheadConfig?

> `optional` **dynamicReadaheadConfig**: `object`

#### dynamicReadaheadConfig.maxReadAheadMediaTimeMs

> **maxReadAheadMediaTimeMs**: `number`

#### dynamicReadaheadConfig.minReadAheadMediaTimeMs

> **minReadAheadMediaTimeMs**: `number`

#### dynamicReadaheadConfig.readAheadGrowthRateMs

> **readAheadGrowthRateMs**: `number`

#### mediaUstreamerRequestConfig?

> `optional` **mediaUstreamerRequestConfig**: `object`

#### mediaUstreamerRequestConfig.videoPlaybackUstreamerConfig

> **videoPlaybackUstreamerConfig**: `string`

#### Defined in

[src/parser/types/RawResponse.ts:1555](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/types/RawResponse.ts#L1555)

***

### streamSelectionConfig

> **streamSelectionConfig**: `object`

#### maxBitrate

> **maxBitrate**: `string`

#### Defined in

[src/parser/types/RawResponse.ts:1552](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/types/RawResponse.ts#L1552)
