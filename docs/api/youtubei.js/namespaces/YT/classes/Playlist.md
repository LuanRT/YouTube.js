[youtubei.js](../../../../README.md) / [YT](../README.md) / Playlist

# Class: Playlist

Defined in: [src/parser/youtube/Playlist.ts:30](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/youtube/Playlist.ts#L30)

## Extends

- [`Feed`](../../Mixins/classes/Feed.md)\<[`IBrowseResponse`](../../../../type-aliases/IBrowseResponse.md)\>

## Constructors

### Constructor

> **new Playlist**(`actions`, `data`, `already_parsed?`): `Playlist`

Defined in: [src/parser/youtube/Playlist.ts:36](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/youtube/Playlist.ts#L36)

#### Parameters

##### actions

[`Actions`](../../../../classes/Actions.md)

##### data

[`ApiResponse`](../../../../interfaces/ApiResponse.md) \| [`IBrowseResponse`](../../../../type-aliases/IBrowseResponse.md)

##### already\_parsed?

`boolean` = `false`

#### Returns

`Playlist`

#### Overrides

[`Feed`](../../Mixins/classes/Feed.md).[`constructor`](../../Mixins/classes/Feed.md#constructor)

## Properties

### endpoint?

> `optional` **endpoint?**: [`NavigationEndpoint`](../../YTNodes/classes/NavigationEndpoint.md)

Defined in: [src/parser/youtube/Playlist.ts:33](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/youtube/Playlist.ts#L33)

***

### info

> **info**: `object`

Defined in: [src/parser/youtube/Playlist.ts:31](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/youtube/Playlist.ts#L31)

#### author

> **author**: [`Author`](../../Misc/classes/Author.md)

#### can\_delete

> **can\_delete**: `boolean` = `header.can_delete`

#### can\_reorder

> **can\_reorder**: `boolean` = `video_list.can_reorder`

#### can\_share

> **can\_share**: `boolean` = `header.can_share`

#### description?

> `optional` **description?**: `string`

#### is\_editable

> **is\_editable**: `boolean` = `video_list.is_editable`

#### last\_updated

> **last\_updated**: `string`

#### privacy

> **privacy**: `string` = `header.privacy`

#### subtitle

> **subtitle**: [`Text`](../../Misc/classes/Text.md) \| `null`

#### thumbnails

> **thumbnails**: [`Thumbnail`](../../Misc/classes/Thumbnail.md)[]

#### title?

> `optional` **title?**: `string`

#### total\_items

> **total\_items**: `string`

#### type?

> `readonly` `optional` **type?**: `string`

#### views

> **views**: `string`

***

### menu

> **menu**: [`YTNode`](../../Helpers/classes/YTNode.md)

Defined in: [src/parser/youtube/Playlist.ts:32](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/youtube/Playlist.ts#L32)

***

### messages

> **messages**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`Message`](../../YTNodes/classes/Message.md)\>

Defined in: [src/parser/youtube/Playlist.ts:34](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/youtube/Playlist.ts#L34)

## Accessors

### actions

#### Get Signature

> **get** **actions**(): [`Actions`](../../../../classes/Actions.md)

Defined in: [src/core/mixins/Feed.ts:183](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/mixins/Feed.ts#L183)

##### Returns

[`Actions`](../../../../classes/Actions.md)

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`actions`](../../Mixins/classes/Feed.md#actions)

***

### channels

#### Get Signature

> **get** **channels**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`Channel`](../../YTNodes/classes/Channel.md) \| [`GridChannel`](../../YTNodes/classes/GridChannel.md)\>

Defined in: [src/core/mixins/Feed.ts:129](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/mixins/Feed.ts#L129)

Get all the channels in the feed

##### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`Channel`](../../YTNodes/classes/Channel.md) \| [`GridChannel`](../../YTNodes/classes/GridChannel.md)\>

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`channels`](../../Mixins/classes/Feed.md#channels)

***

### has\_continuation

#### Get Signature

> **get** **has\_continuation**(): `boolean`

Defined in: [src/parser/youtube/Playlist.ts:94](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/youtube/Playlist.ts#L94)

Checks if the feed has continuation.

##### Returns

`boolean`

#### Overrides

[`Feed`](../../Mixins/classes/Feed.md).[`has_continuation`](../../Mixins/classes/Feed.md#has_continuation)

***

### items

#### Get Signature

> **get** **items**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`LockupView`](../../YTNodes/classes/LockupView.md) \| [`PlaylistVideo`](../../YTNodes/classes/PlaylistVideo.md) \| [`ReelItem`](../../YTNodes/classes/ReelItem.md) \| [`ShortsLockupView`](../../YTNodes/classes/ShortsLockupView.md)\>

Defined in: [src/parser/youtube/Playlist.ts:90](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/youtube/Playlist.ts#L90)

##### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`LockupView`](../../YTNodes/classes/LockupView.md) \| [`PlaylistVideo`](../../YTNodes/classes/PlaylistVideo.md) \| [`ReelItem`](../../YTNodes/classes/ReelItem.md) \| [`ShortsLockupView`](../../YTNodes/classes/ShortsLockupView.md)\>

***

### memo

#### Get Signature

> **get** **memo**(): [`Memo`](../../Helpers/classes/Memo.md)

Defined in: [src/core/mixins/Feed.ts:140](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/mixins/Feed.ts#L140)

##### Returns

[`Memo`](../../Helpers/classes/Memo.md)

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`memo`](../../Mixins/classes/Feed.md#memo)

***

### page

#### Get Signature

> **get** **page**(): `T`

Defined in: [src/core/mixins/Feed.ts:190](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/mixins/Feed.ts#L190)

Get the original page data

##### Returns

`T`

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`page`](../../Mixins/classes/Feed.md#page)

***

### page\_contents

#### Get Signature

> **get** **page\_contents**(): [`SectionList`](../../YTNodes/classes/SectionList.md) \| [`MusicQueue`](../../YTNodes/classes/MusicQueue.md) \| [`RichGrid`](../../YTNodes/classes/RichGrid.md) \| [`ReloadContinuationItemsCommand`](../../../../classes/ReloadContinuationItemsCommand.md)

Defined in: [src/core/mixins/Feed.ts:147](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/mixins/Feed.ts#L147)

Returns contents from the page.

##### Returns

[`SectionList`](../../YTNodes/classes/SectionList.md) \| [`MusicQueue`](../../YTNodes/classes/MusicQueue.md) \| [`RichGrid`](../../YTNodes/classes/RichGrid.md) \| [`ReloadContinuationItemsCommand`](../../../../classes/ReloadContinuationItemsCommand.md)

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`page_contents`](../../Mixins/classes/Feed.md#page_contents)

***

### playlists

#### Get Signature

> **get** **playlists**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`GridPlaylist`](../../YTNodes/classes/GridPlaylist.md) \| [`GridShow`](../../YTNodes/classes/GridShow.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`Playlist`](../../YTNodes/classes/Playlist.md)\>

Defined in: [src/core/mixins/Feed.ts:136](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/mixins/Feed.ts#L136)

Get all playlists in the feed

##### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`GridPlaylist`](../../YTNodes/classes/GridPlaylist.md) \| [`GridShow`](../../YTNodes/classes/GridShow.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`Playlist`](../../YTNodes/classes/Playlist.md)\>

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`playlists`](../../Mixins/classes/Feed.md#playlists)

***

### posts

#### Get Signature

> **get** **posts**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`BackstagePost`](../../YTNodes/classes/BackstagePost.md) \| [`Post`](../../YTNodes/classes/Post.md) \| [`SharedPost`](../../YTNodes/classes/SharedPost.md)\>

Defined in: [src/core/mixins/Feed.ts:122](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/mixins/Feed.ts#L122)

Get all the community posts in the feed

##### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`BackstagePost`](../../YTNodes/classes/BackstagePost.md) \| [`Post`](../../YTNodes/classes/Post.md) \| [`SharedPost`](../../YTNodes/classes/SharedPost.md)\>

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`posts`](../../Mixins/classes/Feed.md#posts)

***

### secondary\_contents

#### Get Signature

> **get** **secondary\_contents**(): [`SectionList`](../../YTNodes/classes/SectionList.md) \| [`BrowseFeedActions`](../../YTNodes/classes/BrowseFeedActions.md) \| [`ProfileColumn`](../../YTNodes/classes/ProfileColumn.md) \| [`SecondarySearchContainer`](../../YTNodes/classes/SecondarySearchContainer.md) \| `null`

Defined in: [src/core/mixins/Feed.ts:171](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/mixins/Feed.ts#L171)

Returns secondary contents from the page.

##### Returns

[`SectionList`](../../YTNodes/classes/SectionList.md) \| [`BrowseFeedActions`](../../YTNodes/classes/BrowseFeedActions.md) \| [`ProfileColumn`](../../YTNodes/classes/ProfileColumn.md) \| [`SecondarySearchContainer`](../../YTNodes/classes/SecondarySearchContainer.md) \| `null`

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`secondary_contents`](../../Mixins/classes/Feed.md#secondary_contents)

***

### shelves

#### Get Signature

> **get** **shelves**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`ReelShelf`](../../YTNodes/classes/ReelShelf.md) \| [`RichShelf`](../../YTNodes/classes/RichShelf.md) \| [`Shelf`](../../YTNodes/classes/Shelf.md)\>

Defined in: [src/core/mixins/Feed.ts:157](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/mixins/Feed.ts#L157)

Returns all segments/sections from the page.

##### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`ReelShelf`](../../YTNodes/classes/ReelShelf.md) \| [`RichShelf`](../../YTNodes/classes/RichShelf.md) \| [`Shelf`](../../YTNodes/classes/Shelf.md)\>

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`shelves`](../../Mixins/classes/Feed.md#shelves)

***

### videos

#### Get Signature

> **get** **videos**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`CompactVideo`](../../YTNodes/classes/CompactVideo.md) \| [`GridVideo`](../../YTNodes/classes/GridVideo.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`PlaylistPanelVideo`](../../YTNodes/classes/PlaylistPanelVideo.md) \| [`PlaylistVideo`](../../YTNodes/classes/PlaylistVideo.md) \| [`ReelItem`](../../YTNodes/classes/ReelItem.md) \| [`ShortsLockupView`](../../YTNodes/classes/ShortsLockupView.md) \| [`Video`](../../YTNodes/classes/Video.md) \| [`WatchCardCompactVideo`](../../YTNodes/classes/WatchCardCompactVideo.md)\>

Defined in: [src/core/mixins/Feed.ts:115](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/mixins/Feed.ts#L115)

Get all the videos in the feed

##### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`CompactVideo`](../../YTNodes/classes/CompactVideo.md) \| [`GridVideo`](../../YTNodes/classes/GridVideo.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`PlaylistPanelVideo`](../../YTNodes/classes/PlaylistPanelVideo.md) \| [`PlaylistVideo`](../../YTNodes/classes/PlaylistVideo.md) \| [`ReelItem`](../../YTNodes/classes/ReelItem.md) \| [`ShortsLockupView`](../../YTNodes/classes/ShortsLockupView.md) \| [`Video`](../../YTNodes/classes/Video.md) \| [`WatchCardCompactVideo`](../../YTNodes/classes/WatchCardCompactVideo.md)\>

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`videos`](../../Mixins/classes/Feed.md#videos)

## Methods

### getCollaborators()

> **getCollaborators**(): `Promise`\<[`IShowEngagementPanelResponse`](../../../../type-aliases/IShowEngagementPanelResponse.md)\>

Defined in: [src/parser/youtube/Playlist.ts:73](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/youtube/Playlist.ts#L73)

#### Returns

`Promise`\<[`IShowEngagementPanelResponse`](../../../../type-aliases/IShowEngagementPanelResponse.md)\>

***

### getContinuation()

> **getContinuation**(): `Promise`\<`Playlist`\>

Defined in: [src/parser/youtube/Playlist.ts:122](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/youtube/Playlist.ts#L122)

Retrieves next batch of contents and returns a new [Feed](../../Mixins/classes/Feed.md) object.

#### Returns

`Promise`\<`Playlist`\>

#### Overrides

[`Feed`](../../Mixins/classes/Feed.md).[`getContinuation`](../../Mixins/classes/Feed.md#getcontinuation)

***

### getContinuationData()

> **getContinuationData**(): `Promise`\<[`IBrowseResponse`](../../../../type-aliases/IBrowseResponse.md) \| `undefined`\>

Defined in: [src/parser/youtube/Playlist.ts:103](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/youtube/Playlist.ts#L103)

Retrieves continuation data as it is.

#### Returns

`Promise`\<[`IBrowseResponse`](../../../../type-aliases/IBrowseResponse.md) \| `undefined`\>

#### Overrides

[`Feed`](../../Mixins/classes/Feed.md).[`getContinuationData`](../../Mixins/classes/Feed.md#getcontinuationdata)

***

### getShelf()

> **getShelf**(`title`): [`ReelShelf`](../../YTNodes/classes/ReelShelf.md) \| [`RichShelf`](../../YTNodes/classes/RichShelf.md) \| [`Shelf`](../../YTNodes/classes/Shelf.md) \| `undefined`

Defined in: [src/core/mixins/Feed.ts:164](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/mixins/Feed.ts#L164)

Finds shelf by title.

#### Parameters

##### title

`string`

#### Returns

[`ReelShelf`](../../YTNodes/classes/ReelShelf.md) \| [`RichShelf`](../../YTNodes/classes/RichShelf.md) \| [`Shelf`](../../YTNodes/classes/Shelf.md) \| `undefined`

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`getShelf`](../../Mixins/classes/Feed.md#getshelf)

***

### getPlaylistsFromMemo()

> `static` **getPlaylistsFromMemo**(`memo`): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`GridPlaylist`](../../YTNodes/classes/GridPlaylist.md) \| [`GridShow`](../../YTNodes/classes/GridShow.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`Playlist`](../../YTNodes/classes/Playlist.md)\>

Defined in: [src/core/mixins/Feed.ts:97](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/mixins/Feed.ts#L97)

Get all playlists on a given page via memo

#### Parameters

##### memo

[`Memo`](../../Helpers/classes/Memo.md)

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`GridPlaylist`](../../YTNodes/classes/GridPlaylist.md) \| [`GridShow`](../../YTNodes/classes/GridShow.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`Playlist`](../../YTNodes/classes/Playlist.md)\>

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`getPlaylistsFromMemo`](../../Mixins/classes/Feed.md#getplaylistsfrommemo)

***

### getVideosFromMemo()

> `static` **getVideosFromMemo**(`memo`): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`CompactVideo`](../../YTNodes/classes/CompactVideo.md) \| [`GridVideo`](../../YTNodes/classes/GridVideo.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`PlaylistPanelVideo`](../../YTNodes/classes/PlaylistPanelVideo.md) \| [`PlaylistVideo`](../../YTNodes/classes/PlaylistVideo.md) \| [`ReelItem`](../../YTNodes/classes/ReelItem.md) \| [`ShortsLockupView`](../../YTNodes/classes/ShortsLockupView.md) \| [`Video`](../../YTNodes/classes/Video.md) \| [`WatchCardCompactVideo`](../../YTNodes/classes/WatchCardCompactVideo.md)\>

Defined in: [src/core/mixins/Feed.ts:80](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/mixins/Feed.ts#L80)

Get all videos on a given page via memo

#### Parameters

##### memo

[`Memo`](../../Helpers/classes/Memo.md)

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`CompactVideo`](../../YTNodes/classes/CompactVideo.md) \| [`GridVideo`](../../YTNodes/classes/GridVideo.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`PlaylistPanelVideo`](../../YTNodes/classes/PlaylistPanelVideo.md) \| [`PlaylistVideo`](../../YTNodes/classes/PlaylistVideo.md) \| [`ReelItem`](../../YTNodes/classes/ReelItem.md) \| [`ShortsLockupView`](../../YTNodes/classes/ShortsLockupView.md) \| [`Video`](../../YTNodes/classes/Video.md) \| [`WatchCardCompactVideo`](../../YTNodes/classes/WatchCardCompactVideo.md)\>

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`getVideosFromMemo`](../../Mixins/classes/Feed.md#getvideosfrommemo)
