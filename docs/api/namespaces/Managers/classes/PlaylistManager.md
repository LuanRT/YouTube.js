[youtubei.js](../../../README.md) / [Managers](../README.md) / PlaylistManager

# Class: PlaylistManager

## Constructors

### new PlaylistManager()

> **new PlaylistManager**(`actions`): [`PlaylistManager`](PlaylistManager.md)

#### Parameters

• **actions**: [`Actions`](../../../classes/Actions.md)

#### Returns

[`PlaylistManager`](PlaylistManager.md)

#### Defined in

[src/core/managers/PlaylistManager.ts:14](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/managers/PlaylistManager.ts#L14)

## Methods

### addVideos()

> **addVideos**(`playlist_id`, `video_ids`): `Promise`\<`object`\>

Adds videos to a given playlist.

#### Parameters

• **playlist\_id**: `string`

The playlist ID.

• **video\_ids**: `string`[]

An array of video IDs to add to the playlist.

#### Returns

`Promise`\<`object`\>

##### action\_result

> **action\_result**: `any`

##### playlist\_id

> **playlist\_id**: `string`

#### Defined in

[src/core/managers/PlaylistManager.ts:73](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/managers/PlaylistManager.ts#L73)

***

### create()

> **create**(`title`, `video_ids`): `Promise`\<`object`\>

Creates a playlist.

#### Parameters

• **title**: `string`

The title of the playlist.

• **video\_ids**: `string`[]

An array of video IDs to add to the playlist.

#### Returns

`Promise`\<`object`\>

##### data

> **data**: `any`

##### playlist\_id?

> `optional` **playlist\_id**: `string`

##### status\_code

> **status\_code**: `number`

##### success

> **success**: `boolean`

#### Defined in

[src/core/managers/PlaylistManager.ts:23](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/managers/PlaylistManager.ts#L23)

***

### delete()

> **delete**(`playlist_id`): `Promise`\<`object`\>

Deletes a given playlist.

#### Parameters

• **playlist\_id**: `string`

The playlist ID.

#### Returns

`Promise`\<`object`\>

##### data

> **data**: `any`

##### playlist\_id

> **playlist\_id**: `string`

##### status\_code

> **status\_code**: `number`

##### success

> **success**: `boolean`

#### Defined in

[src/core/managers/PlaylistManager.ts:48](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/managers/PlaylistManager.ts#L48)

***

### moveVideo()

> **moveVideo**(`playlist_id`, `moved_video_id`, `predecessor_video_id`): `Promise`\<`object`\>

Moves a video to a new position within a given playlist.

#### Parameters

• **playlist\_id**: `string`

The playlist ID.

• **moved\_video\_id**: `string`

The video ID to move.

• **predecessor\_video\_id**: `string`

The video ID to move the moved video before.

#### Returns

`Promise`\<`object`\>

##### action\_result

> **action\_result**: `any`

##### playlist\_id

> **playlist\_id**: `string`

#### Defined in

[src/core/managers/PlaylistManager.ts:156](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/managers/PlaylistManager.ts#L156)

***

### removeVideos()

> **removeVideos**(`playlist_id`, `video_ids`, `use_set_video_ids`): `Promise`\<`object`\>

Removes videos from a given playlist.

#### Parameters

• **playlist\_id**: `string`

The playlist ID.

• **video\_ids**: `string`[]

An array of video IDs to remove from the playlist.

• **use\_set\_video\_ids**: `boolean` = `false`

Option to remove videos using set video IDs.

#### Returns

`Promise`\<`object`\>

##### action\_result

> **action\_result**: `any`

##### playlist\_id

> **playlist\_id**: `string`

#### Defined in

[src/core/managers/PlaylistManager.ts:101](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/managers/PlaylistManager.ts#L101)

***

### setDescription()

> **setDescription**(`playlist_id`, `description`): `Promise`\<`object`\>

Sets the description for the given playlist.

#### Parameters

• **playlist\_id**: `string`

The playlist ID.

• **description**: `string`

The description to use for the playlist.

#### Returns

`Promise`\<`object`\>

##### action\_result

> **action\_result**: `any`

##### playlist\_id

> **playlist\_id**: `string`

#### Defined in

[src/core/managers/PlaylistManager.ts:239](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/managers/PlaylistManager.ts#L239)

***

### setName()

> **setName**(`playlist_id`, `name`): `Promise`\<`object`\>

Sets the name (title) for the given playlist.

#### Parameters

• **playlist\_id**: `string`

The playlist ID.

• **name**: `string`

The name / title to use for the playlist.

#### Returns

`Promise`\<`object`\>

##### action\_result

> **action\_result**: `any`

##### playlist\_id

> **playlist\_id**: `string`

#### Defined in

[src/core/managers/PlaylistManager.ts:211](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/managers/PlaylistManager.ts#L211)
