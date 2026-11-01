[youtubei.js](../README.md) / IRawPlayerConfig

# Interface: IRawPlayerConfig

Defined in: [src/parser/types/RawResponse.ts:1546](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/types/RawResponse.ts#L1546)

## Properties

### audioConfig

> **audioConfig**: `object`

Defined in: [src/parser/types/RawResponse.ts:1547](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/types/RawResponse.ts#L1547)

#### enablePerFormatLoudness

> **enablePerFormatLoudness**: `boolean`

#### loudnessDb?

> `optional` **loudnessDb?**: `number`

#### perceptualLoudnessDb?

> `optional` **perceptualLoudnessDb?**: `number`

***

### mediaCommonConfig

> **mediaCommonConfig**: `object`

Defined in: [src/parser/types/RawResponse.ts:1555](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/types/RawResponse.ts#L1555)

#### dynamicReadaheadConfig?

> `optional` **dynamicReadaheadConfig?**: `object`

##### dynamicReadaheadConfig.maxReadAheadMediaTimeMs

> **maxReadAheadMediaTimeMs**: `number`

##### dynamicReadaheadConfig.minReadAheadMediaTimeMs

> **minReadAheadMediaTimeMs**: `number`

##### dynamicReadaheadConfig.readAheadGrowthRateMs

> **readAheadGrowthRateMs**: `number`

#### mediaUstreamerRequestConfig?

> `optional` **mediaUstreamerRequestConfig?**: `object`

##### mediaUstreamerRequestConfig.videoPlaybackUstreamerConfig

> **videoPlaybackUstreamerConfig**: `string`

***

### streamSelectionConfig

> **streamSelectionConfig**: `object`

Defined in: [src/parser/types/RawResponse.ts:1552](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/types/RawResponse.ts#L1552)

#### maxBitrate

> **maxBitrate**: `string`
