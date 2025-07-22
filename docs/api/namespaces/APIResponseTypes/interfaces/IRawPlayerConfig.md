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

[src/parser/types/RawResponse.ts:1547](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/RawResponse.ts#L1547)

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

[src/parser/types/RawResponse.ts:1555](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/RawResponse.ts#L1555)

***

### streamSelectionConfig

> **streamSelectionConfig**: `object`

#### maxBitrate

> **maxBitrate**: `string`

#### Defined in

[src/parser/types/RawResponse.ts:1552](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/RawResponse.ts#L1552)
