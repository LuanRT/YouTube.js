[youtubei.js](../README.md) / ParsedResponse

# Type Alias: ParsedResponse\<T\>

> **ParsedResponse**\<`T`\>: `T` *extends* `"/player"` ? [`IPlayerResponse`](../namespaces/APIResponseTypes/type-aliases/IPlayerResponse.md) : `T` *extends* `"/search"` ? [`ISearchResponse`](../namespaces/APIResponseTypes/type-aliases/ISearchResponse.md) : `T` *extends* `"/browse"` ? [`IBrowseResponse`](../namespaces/APIResponseTypes/type-aliases/IBrowseResponse.md) : `T` *extends* `"/next"` ? [`INextResponse`](../namespaces/APIResponseTypes/type-aliases/INextResponse.md) : `T` *extends* `"/updated_metadata"` ? [`IUpdatedMetadataResponse`](../namespaces/APIResponseTypes/type-aliases/IUpdatedMetadataResponse.md) : `T` *extends* `"/navigation/resolve_url"` ? [`IResolveURLResponse`](../namespaces/APIResponseTypes/type-aliases/IResolveURLResponse.md) : `T` *extends* `"/notification/get_notification_menu"` ? [`IGetNotificationsMenuResponse`](../namespaces/APIResponseTypes/type-aliases/IGetNotificationsMenuResponse.md) : [`IParsedResponse`](../namespaces/APIResponseTypes/interfaces/IParsedResponse.md)

## Type Parameters

• **T**

## Defined in

[src/core/Actions.ts:21](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/Actions.ts#L21)
