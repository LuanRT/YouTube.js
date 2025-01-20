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

[src/core/managers/InteractionManager.ts:10](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/managers/InteractionManager.ts#L10)

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

[src/core/managers/InteractionManager.ts:119](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/managers/InteractionManager.ts#L119)

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

[src/core/managers/InteractionManager.ts:38](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/managers/InteractionManager.ts#L38)

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

[src/core/managers/InteractionManager.ts:18](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/managers/InteractionManager.ts#L18)

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

[src/core/managers/InteractionManager.ts:58](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/managers/InteractionManager.ts#L58)

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

[src/core/managers/InteractionManager.ts:174](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/managers/InteractionManager.ts#L174)

***

### subscribe()

> **subscribe**(`channel_id`): `Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

Subscribes to the given channel.

#### Parameters

• **channel\_id**: `string`

The channel ID

#### Returns

`Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

#### Defined in

[src/core/managers/InteractionManager.ts:78](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/managers/InteractionManager.ts#L78)

***

### translate()

> **translate**(`text`, `target_language`, `args`): `Promise`\<`object`\>

Translates a given text using YouTube's comment translation feature.

#### Parameters

• **text**: `string`

The text to translate

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

[src/core/managers/InteractionManager.ts:151](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/managers/InteractionManager.ts#L151)

***

### unsubscribe()

> **unsubscribe**(`channel_id`): `Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

Unsubscribes from the given channel.

#### Parameters

• **channel\_id**: `string`

The channel ID

#### Returns

`Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

#### Defined in

[src/core/managers/InteractionManager.ts:98](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/managers/InteractionManager.ts#L98)
