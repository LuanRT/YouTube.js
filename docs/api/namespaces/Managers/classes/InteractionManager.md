[youtubei.js](../../../README.md) / [Managers](../README.md) / InteractionManager

# Class: InteractionManager

## Constructors

### new InteractionManager()

> **new InteractionManager**(`actions`): [`InteractionManager`](InteractionManager.md)

#### Parameters

• **actions**: [`Actions`](../../../classes/Actions.md)

#### Returns

[`InteractionManager`](InteractionManager.md)

#### Defined in

[src/core/managers/InteractionManager.ts:16](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/managers/InteractionManager.ts#L16)

## Methods

### comment()

> **comment**(`video_id`, `text`): `Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

Posts a comment on a given video.

#### Parameters

• **video\_id**: `string`

The video ID

• **text**: `string`

The comment text

#### Returns

`Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

#### Defined in

[src/core/managers/InteractionManager.ts:127](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/managers/InteractionManager.ts#L127)

***

### dislike()

> **dislike**(`video_id`): `Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

Dislikes a given video.

#### Parameters

• **video\_id**: `string`

The video ID

#### Returns

`Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

#### Defined in

[src/core/managers/InteractionManager.ts:44](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/managers/InteractionManager.ts#L44)

***

### like()

> **like**(`video_id`): `Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

Likes a given video.

#### Parameters

• **video\_id**: `string`

The video ID

#### Returns

`Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

#### Defined in

[src/core/managers/InteractionManager.ts:24](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/managers/InteractionManager.ts#L24)

***

### removeRating()

> **removeRating**(`video_id`): `Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

Removes a like/dislike.

#### Parameters

• **video\_id**: `string`

The video ID

#### Returns

`Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

#### Defined in

[src/core/managers/InteractionManager.ts:64](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/managers/InteractionManager.ts#L64)

***

### setNotificationPreferences()

> **setNotificationPreferences**(`channel_id`, `type`): `Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

Changes notification preferences for a given channel.
Only works with channels you are subscribed to.

#### Parameters

• **channel\_id**: `string`

The channel ID.

• **type**: `"PERSONALIZED"` \| `"ALL"` \| `"NONE"`

The notification type.

#### Returns

`Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

#### Defined in

[src/core/managers/InteractionManager.ts:188](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/managers/InteractionManager.ts#L188)

***

### subscribe()

> **subscribe**(`channel_id`): `Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

Subscribes to a given channel.

#### Parameters

• **channel\_id**: `string`

The channel ID

#### Returns

`Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

#### Defined in

[src/core/managers/InteractionManager.ts:84](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/managers/InteractionManager.ts#L84)

***

### translate()

> **translate**(`text`, `target_language`, `args`): `Promise`\<`object`\>

Translates a given text using YouTube's comment translate feature.

#### Parameters

• **text**: `string`

• **target\_language**: `string`

an ISO language code

• **args** = `{}`

optional arguments

• **args.comment\_id?**: `string`

• **args.video\_id?**: `string`

#### Returns

`Promise`\<`object`\>

##### data

> **data**: [`IRawResponse`](../../APIResponseTypes/interfaces/IRawResponse.md) = `response.data`

##### status\_code

> **status\_code**: `number` = `response.status_code`

##### success

> **success**: `boolean` = `response.success`

##### translated\_content

> **translated\_content**: `any` = `mutation.translatedContent.content`

#### Defined in

[src/core/managers/InteractionManager.ts:160](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/managers/InteractionManager.ts#L160)

***

### unsubscribe()

> **unsubscribe**(`channel_id`): `Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

Unsubscribes from a given channel.

#### Parameters

• **channel\_id**: `string`

The channel ID

#### Returns

`Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

#### Defined in

[src/core/managers/InteractionManager.ts:105](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/managers/InteractionManager.ts#L105)
