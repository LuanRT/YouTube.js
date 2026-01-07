[youtubei.js](../../../../README.md) / [Managers](../README.md) / PlaylistManager

# Class: PlaylistManager

Defined in: [src/core/managers/PlaylistManager.ts:8](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/managers/PlaylistManager.ts#L8)

## Constructors

### Constructor

> **new PlaylistManager**(`actions`): `PlaylistManager`

Defined in: [src/core/managers/PlaylistManager.ts:11](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/managers/PlaylistManager.ts#L11)

#### Parameters

##### actions

[`Actions`](../../../../classes/Actions.md)

#### Returns

`PlaylistManager`

## Methods

### addToLibrary()

> **addToLibrary**(`playlist_id`): `Promise`\<[`ApiResponse`](../../../../interfaces/ApiResponse.md)\>

Defined in: [src/core/managers/PlaylistManager.ts:73](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/managers/PlaylistManager.ts#L73)

Adds a given playlist to the library of a user.

#### Parameters

##### playlist\_id

`string`

The playlist ID.

#### Returns

`Promise`\<[`ApiResponse`](../../../../interfaces/ApiResponse.md)\>

***

### addVideos()

> **addVideos**(`playlist_id`, `video_ids`): `Promise`\<\{ `action_result`: `any`; `playlist_id`: `string`; \}\>

Defined in: [src/core/managers/PlaylistManager.ts:114](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/managers/PlaylistManager.ts#L114)

Adds videos to a given playlist.

#### Parameters

##### playlist\_id

`string`

The playlist ID.

##### video\_ids

`string`[]

An array of video IDs to add to the playlist.

#### Returns

`Promise`\<\{ `action_result`: `any`; `playlist_id`: `string`; \}\>

***

### create()

> **create**(`title`, `video_ids`): `Promise`\<\{ `data`: `any`; `playlist_id?`: `string`; `status_code`: `number`; `success`: `boolean`; \}\>

Defined in: [src/core/managers/PlaylistManager.ts:20](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/managers/PlaylistManager.ts#L20)

Creates a playlist.

#### Parameters

##### title

`string`

The title of the playlist.

##### video\_ids

`string`[]

An array of video IDs to add to the playlist.

#### Returns

`Promise`\<\{ `data`: `any`; `playlist_id?`: `string`; `status_code`: `number`; `success`: `boolean`; \}\>

***

### delete()

> **delete**(`playlist_id`): `Promise`\<\{ `data`: `any`; `playlist_id`: `string`; `status_code`: `number`; `success`: `boolean`; \}\>

Defined in: [src/core/managers/PlaylistManager.ts:47](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/managers/PlaylistManager.ts#L47)

Deletes a given playlist.

#### Parameters

##### playlist\_id

`string`

The playlist ID.

#### Returns

`Promise`\<\{ `data`: `any`; `playlist_id`: `string`; `status_code`: `number`; `success`: `boolean`; \}\>

***

### moveVideo()

> **moveVideo**(`playlist_id`, `moved_video_id`, `predecessor_video_id`): `Promise`\<\{ `action_result`: `any`; `playlist_id`: `string`; \}\>

Defined in: [src/core/managers/PlaylistManager.ts:194](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/managers/PlaylistManager.ts#L194)

Moves a video to a new position within a given playlist.

#### Parameters

##### playlist\_id

`string`

The playlist ID.

##### moved\_video\_id

`string`

The video ID to move.

##### predecessor\_video\_id

`string`

The video ID to move the moved video before.

#### Returns

`Promise`\<\{ `action_result`: `any`; `playlist_id`: `string`; \}\>

***

### removeFromLibrary()

> **removeFromLibrary**(`playlist_id`): `Promise`\<[`ApiResponse`](../../../../interfaces/ApiResponse.md)\>

Defined in: [src/core/managers/PlaylistManager.ts:93](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/managers/PlaylistManager.ts#L93)

Remove a given playlist to the library of a user.

#### Parameters

##### playlist\_id

`string`

The playlist ID.

#### Returns

`Promise`\<[`ApiResponse`](../../../../interfaces/ApiResponse.md)\>

***

### removeVideos()

> **removeVideos**(`playlist_id`, `video_ids`, `use_set_video_ids`): `Promise`\<\{ `action_result`: `any`; `playlist_id`: `string`; \}\>

Defined in: [src/core/managers/PlaylistManager.ts:144](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/managers/PlaylistManager.ts#L144)

Removes videos from a given playlist.

#### Parameters

##### playlist\_id

`string`

The playlist ID.

##### video\_ids

`string`[]

An array of video IDs to remove from the playlist.

##### use\_set\_video\_ids

`boolean` = `false`

Option to remove videos using set video IDs.

#### Returns

`Promise`\<\{ `action_result`: `any`; `playlist_id`: `string`; \}\>

***

### setDescription()

> **setDescription**(`playlist_id`, `description`): `Promise`\<\{ `action_result`: `any`; `playlist_id`: `string`; \}\>

Defined in: [src/core/managers/PlaylistManager.ts:282](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/managers/PlaylistManager.ts#L282)

Sets the description for the given playlist.

#### Parameters

##### playlist\_id

`string`

The playlist ID.

##### description

`string`

The description to use for the playlist.

#### Returns

`Promise`\<\{ `action_result`: `any`; `playlist_id`: `string`; \}\>

***

### setName()

> **setName**(`playlist_id`, `name`): `Promise`\<\{ `action_result`: `any`; `playlist_id`: `string`; \}\>

Defined in: [src/core/managers/PlaylistManager.ts:255](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/managers/PlaylistManager.ts#L255)

Sets the name for the given playlist.

#### Parameters

##### playlist\_id

`string`

The playlist ID.

##### name

`string`

The name / title to use for the playlist.

#### Returns

`Promise`\<\{ `action_result`: `any`; `playlist_id`: `string`; \}\>
