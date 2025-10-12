[youtubei.js](../../../../README.md) / [FormatUtils](../README.md) / toDash

# Function: toDash()

> **toDash**(`streaming_data?`, `is_post_live_dvr?`, `url_transformer?`, `format_filter?`, `cpn?`, `player?`, `actions?`, `storyboards?`, `caption_tracks?`, `options?`): `Promise`\<`string`\>

Defined in: [src/utils/DashManifest.tsx:290](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/utils/DashManifest.tsx#L290)

## Parameters

### streaming\_data?

[`IStreamingData`](../../../../interfaces/IStreamingData.md)

### is\_post\_live\_dvr?

`boolean` = `false`

### url\_transformer?

[`URLTransformer`](../../Types/type-aliases/URLTransformer.md) = `...`

### format\_filter?

[`FormatFilter`](../../Types/type-aliases/FormatFilter.md)

### cpn?

`string`

### player?

[`Player`](../../../../classes/Player.md)

### actions?

[`Actions`](../../../../classes/Actions.md)

### storyboards?

[`PlayerStoryboardSpec`](../../YTNodes/classes/PlayerStoryboardSpec.md) | [`PlayerLiveStoryboardSpec`](../../YTNodes/classes/PlayerLiveStoryboardSpec.md)

### caption\_tracks?

`CaptionTrackData`[]

### options?

`StreamingInfoOptions`

## Returns

`Promise`\<`string`\>
