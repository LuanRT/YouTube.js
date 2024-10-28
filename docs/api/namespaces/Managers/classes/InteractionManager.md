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

[src/core/managers/InteractionManager.ts:16](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/core/managers/InteractionManager.ts#L16)

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

[src/core/managers/InteractionManager.ts:122](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/core/managers/InteractionManager.ts#L122)

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

[src/core/managers/InteractionManager.ts:43](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/core/managers/InteractionManager.ts#L43)

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

[src/core/managers/InteractionManager.ts:24](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/core/managers/InteractionManager.ts#L24)

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

[src/core/managers/InteractionManager.ts:62](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/core/managers/InteractionManager.ts#L62)

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

[src/core/managers/InteractionManager.ts:181](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/core/managers/InteractionManager.ts#L181)

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

[src/core/managers/InteractionManager.ts:81](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/core/managers/InteractionManager.ts#L81)

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

[src/core/managers/InteractionManager.ts:154](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/core/managers/InteractionManager.ts#L154)

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

[src/core/managers/InteractionManager.ts:101](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/core/managers/InteractionManager.ts#L101)
