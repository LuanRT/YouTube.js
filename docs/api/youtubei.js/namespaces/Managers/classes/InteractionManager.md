[youtubei.js](../../../../README.md) / [Managers](../README.md) / InteractionManager

# Class: InteractionManager

Defined in: [src/core/managers/InteractionManager.ts:7](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/managers/InteractionManager.ts#L7)

## Constructors

### Constructor

> **new InteractionManager**(`actions`): `InteractionManager`

Defined in: [src/core/managers/InteractionManager.ts:10](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/managers/InteractionManager.ts#L10)

#### Parameters

##### actions

[`Actions`](../../../../classes/Actions.md)

#### Returns

`InteractionManager`

## Methods

### comment()

> **comment**(`video_id`, `text`): `Promise`\<[`ApiResponse`](../../../../interfaces/ApiResponse.md)\>

Defined in: [src/core/managers/InteractionManager.ts:119](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/managers/InteractionManager.ts#L119)

Posts a comment on a given video.

#### Parameters

##### video\_id

`string`

The video ID

##### text

`string`

The comment text

#### Returns

`Promise`\<[`ApiResponse`](../../../../interfaces/ApiResponse.md)\>

***

### dislike()

> **dislike**(`video_id`): `Promise`\<[`ApiResponse`](../../../../interfaces/ApiResponse.md)\>

Defined in: [src/core/managers/InteractionManager.ts:38](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/managers/InteractionManager.ts#L38)

Dislikes a given video.

#### Parameters

##### video\_id

`string`

The video ID

#### Returns

`Promise`\<[`ApiResponse`](../../../../interfaces/ApiResponse.md)\>

***

### like()

> **like**(`video_id`): `Promise`\<[`ApiResponse`](../../../../interfaces/ApiResponse.md)\>

Defined in: [src/core/managers/InteractionManager.ts:18](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/managers/InteractionManager.ts#L18)

Likes a given video.

#### Parameters

##### video\_id

`string`

The video ID

#### Returns

`Promise`\<[`ApiResponse`](../../../../interfaces/ApiResponse.md)\>

***

### removeRating()

> **removeRating**(`video_id`): `Promise`\<[`ApiResponse`](../../../../interfaces/ApiResponse.md)\>

Defined in: [src/core/managers/InteractionManager.ts:58](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/managers/InteractionManager.ts#L58)

Removes a like/dislike.

#### Parameters

##### video\_id

`string`

The video ID

#### Returns

`Promise`\<[`ApiResponse`](../../../../interfaces/ApiResponse.md)\>

***

### setNotificationPreferences()

> **setNotificationPreferences**(`channel_id`, `type`): `Promise`\<[`ApiResponse`](../../../../interfaces/ApiResponse.md)\>

Defined in: [src/core/managers/InteractionManager.ts:174](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/managers/InteractionManager.ts#L174)

Changes notification preferences for a given channel.
Only works with channels you are subscribed to.

#### Parameters

##### channel\_id

`string`

The channel ID.

##### type

The notification type.

`"PERSONALIZED"` | `"ALL"` | `"NONE"`

#### Returns

`Promise`\<[`ApiResponse`](../../../../interfaces/ApiResponse.md)\>

***

### subscribe()

> **subscribe**(`channel_id`): `Promise`\<[`ApiResponse`](../../../../interfaces/ApiResponse.md)\>

Defined in: [src/core/managers/InteractionManager.ts:78](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/managers/InteractionManager.ts#L78)

Subscribes to the given channel.

#### Parameters

##### channel\_id

`string`

The channel ID

#### Returns

`Promise`\<[`ApiResponse`](../../../../interfaces/ApiResponse.md)\>

***

### translate()

> **translate**(`text`, `target_language`, `args`): `Promise`\<\{ `data`: [`IRawResponse`](../../../../interfaces/IRawResponse.md); `status_code`: `number`; `success`: `boolean`; `translated_content`: `any`; \}\>

Defined in: [src/core/managers/InteractionManager.ts:151](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/managers/InteractionManager.ts#L151)

Translates a given text using YouTube's comment translation feature.

#### Parameters

##### text

`string`

The text to translate

##### target\_language

`string`

an ISO language code

##### args

optional arguments

###### comment_id?

`string`

###### video_id?

`string`

#### Returns

`Promise`\<\{ `data`: [`IRawResponse`](../../../../interfaces/IRawResponse.md); `status_code`: `number`; `success`: `boolean`; `translated_content`: `any`; \}\>

***

### unsubscribe()

> **unsubscribe**(`channel_id`): `Promise`\<[`ApiResponse`](../../../../interfaces/ApiResponse.md)\>

Defined in: [src/core/managers/InteractionManager.ts:98](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/managers/InteractionManager.ts#L98)

Unsubscribes from the given channel.

#### Parameters

##### channel\_id

`string`

The channel ID

#### Returns

`Promise`\<[`ApiResponse`](../../../../interfaces/ApiResponse.md)\>
