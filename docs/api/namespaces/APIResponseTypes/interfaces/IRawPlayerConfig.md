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

[src/parser/types/RawResponse.ts:20](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/types/RawResponse.ts#L20)

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

[src/parser/types/RawResponse.ts:28](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/types/RawResponse.ts#L28)

***

### streamSelectionConfig

> **streamSelectionConfig**: `object`

#### maxBitrate

> **maxBitrate**: `string`

#### Defined in

[src/parser/types/RawResponse.ts:25](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/types/RawResponse.ts#L25)
