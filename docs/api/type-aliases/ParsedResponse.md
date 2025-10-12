[youtubei.js](../README.md) / ParsedResponse

# Type Alias: ParsedResponse\<T\>

> **ParsedResponse**\<`T`\> = `T` *extends* `"/player"` ? [`IPlayerResponse`](IPlayerResponse.md) : `T` *extends* `"/search"` ? [`ISearchResponse`](ISearchResponse.md) : `T` *extends* `"/browse"` ? [`IBrowseResponse`](IBrowseResponse.md) : `T` *extends* `"/next"` ? [`INextResponse`](INextResponse.md) : `T` *extends* `"/updated_metadata"` ? [`IUpdatedMetadataResponse`](IUpdatedMetadataResponse.md) : `T` *extends* `"/navigation/resolve_url"` ? [`IResolveURLResponse`](IResolveURLResponse.md) : `T` *extends* `"/notification/get_notification_menu"` ? [`IGetNotificationsMenuResponse`](IGetNotificationsMenuResponse.md) : `T` *extends* `"/att/get"` ? [`IGetChallengeResponse`](IGetChallengeResponse.md) : [`IParsedResponse`](../interfaces/IParsedResponse.md)

Defined in: [src/core/Actions.ts:35](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/core/Actions.ts#L35)

## Type Parameters

### T

`T`
