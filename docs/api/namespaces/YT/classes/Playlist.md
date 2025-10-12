[youtubei.js](../../../README.md) / [YT](../README.md) / Playlist

# Class: Playlist

## Extends

- [`Feed`](../../Mixins/classes/Feed.md)\<[`IBrowseResponse`](../../APIResponseTypes/type-aliases/IBrowseResponse.md)\>

## Constructors

### new Playlist()

> **new Playlist**(`actions`, `data`, `already_parsed`): [`Playlist`](Playlist.md)

#### Parameters

• **actions**: [`Actions`](../../../classes/Actions.md)

• **data**: [`ApiResponse`](../../../interfaces/ApiResponse.md) \| [`IBrowseResponse`](../../APIResponseTypes/type-aliases/IBrowseResponse.md)

• **already\_parsed**: `boolean` = `false`

#### Returns

[`Playlist`](Playlist.md)

#### Overrides

[`Feed`](../../Mixins/classes/Feed.md).[`constructor`](../../Mixins/classes/Feed.md#constructors)

#### Defined in

[src/parser/youtube/Playlist.ts:32](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/youtube/Playlist.ts#L32)

## Properties

### endpoint?

> `optional` **endpoint**: [`NavigationEndpoint`](../../YTNodes/classes/NavigationEndpoint.md)

#### Defined in

[src/parser/youtube/Playlist.ts:29](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/youtube/Playlist.ts#L29)

***

### info

> **info**: `object`

#### author

> **author**: [`Author`](../../Misc/classes/Author.md)

#### can\_delete

> **can\_delete**: `boolean` = `header.can_delete`

#### can\_reorder

> **can\_reorder**: `boolean` = `video_list.can_reorder`

#### can\_share

> **can\_share**: `boolean` = `header.can_share`

#### description?

> `optional` **description**: `string`

#### is\_editable

> **is\_editable**: `boolean` = `video_list.is_editable`

#### last\_updated

> **last\_updated**: `string`

#### privacy

> **privacy**: `string` = `header.privacy`

#### subtitle

> **subtitle**: `null` \| [`Text`](../../Misc/classes/Text.md)

#### thumbnails

> **thumbnails**: [`Thumbnail`](../../Misc/classes/Thumbnail.md)[]

#### title?

> `optional` **title**: `string`

#### total\_items

> **total\_items**: `string`

#### type?

> `readonly` `optional` **type**: `string`

#### views

> **views**: `string`

#### Defined in

[src/parser/youtube/Playlist.ts:27](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/youtube/Playlist.ts#L27)

***

### menu

> **menu**: [`YTNode`](../../Helpers/classes/YTNode.md)

#### Defined in

[src/parser/youtube/Playlist.ts:28](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/youtube/Playlist.ts#L28)

***

### messages

> **messages**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`Message`](../../YTNodes/classes/Message.md)\>

#### Defined in

[src/parser/youtube/Playlist.ts:30](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/youtube/Playlist.ts#L30)

## Accessors

### actions

> `get` **actions**(): [`Actions`](../../../classes/Actions.md)

#### Returns

[`Actions`](../../../classes/Actions.md)

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`actions`](../../Mixins/classes/Feed.md#actions)

#### Defined in

[src/core/mixins/Feed.ts:181](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/core/mixins/Feed.ts#L181)

***

### channels

> `get` **channels**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`Channel`](../../YTNodes/classes/Channel.md) \| [`GridChannel`](../../YTNodes/classes/GridChannel.md)\>

Get all the channels in the feed

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`Channel`](../../YTNodes/classes/Channel.md) \| [`GridChannel`](../../YTNodes/classes/GridChannel.md)\>

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`channels`](../../Mixins/classes/Feed.md#channels)

#### Defined in

[src/core/mixins/Feed.ts:126](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/core/mixins/Feed.ts#L126)

***

### has\_continuation

> `get` **has\_continuation**(): `boolean`

Checks if the feed has continuation.

#### Returns

`boolean`

#### Overrides

[`Feed`](../../Mixins/classes/Feed.md).[`has_continuation`](../../Mixins/classes/Feed.md#has_continuation)

#### Defined in

[src/parser/youtube/Playlist.ts:73](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/youtube/Playlist.ts#L73)

***

### items

> `get` **items**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`PlaylistVideo`](../../YTNodes/classes/PlaylistVideo.md) \| [`ReelItem`](../../YTNodes/classes/ReelItem.md) \| [`ShortsLockupView`](../../YTNodes/classes/ShortsLockupView.md)\>

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`PlaylistVideo`](../../YTNodes/classes/PlaylistVideo.md) \| [`ReelItem`](../../YTNodes/classes/ReelItem.md) \| [`ShortsLockupView`](../../YTNodes/classes/ShortsLockupView.md)\>

#### Defined in

[src/parser/youtube/Playlist.ts:69](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/youtube/Playlist.ts#L69)

***

### memo

> `get` **memo**(): [`Memo`](../../Helpers/classes/Memo.md)

#### Returns

[`Memo`](../../Helpers/classes/Memo.md)

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`memo`](../../Mixins/classes/Feed.md#memo)

#### Defined in

[src/core/mixins/Feed.ts:137](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/core/mixins/Feed.ts#L137)

***

### page

> `get` **page**(): `T`

Get the original page data

#### Returns

`T`

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`page`](../../Mixins/classes/Feed.md#page)

#### Defined in

[src/core/mixins/Feed.ts:188](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/core/mixins/Feed.ts#L188)

***

### page\_contents

> `get` **page\_contents**(): [`SectionList`](../../YTNodes/classes/SectionList.md) \| [`MusicQueue`](../../YTNodes/classes/MusicQueue.md) \| [`RichGrid`](../../YTNodes/classes/RichGrid.md) \| [`ReloadContinuationItemsCommand`](../../../classes/ReloadContinuationItemsCommand.md)

Returns contents from the page.

#### Returns

[`SectionList`](../../YTNodes/classes/SectionList.md) \| [`MusicQueue`](../../YTNodes/classes/MusicQueue.md) \| [`RichGrid`](../../YTNodes/classes/RichGrid.md) \| [`ReloadContinuationItemsCommand`](../../../classes/ReloadContinuationItemsCommand.md)

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`page_contents`](../../Mixins/classes/Feed.md#page_contents)

#### Defined in

[src/core/mixins/Feed.ts:144](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/core/mixins/Feed.ts#L144)

***

### playlists

> `get` **playlists**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`GridPlaylist`](../../YTNodes/classes/GridPlaylist.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`Playlist`](../../YTNodes/classes/Playlist.md)\>

Get all playlists in the feed

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`GridPlaylist`](../../YTNodes/classes/GridPlaylist.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`Playlist`](../../YTNodes/classes/Playlist.md)\>

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`playlists`](../../Mixins/classes/Feed.md#playlists)

#### Defined in

[src/core/mixins/Feed.ts:133](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/core/mixins/Feed.ts#L133)

***

### posts

> `get` **posts**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`BackstagePost`](../../YTNodes/classes/BackstagePost.md) \| [`Post`](../../YTNodes/classes/Post.md) \| [`SharedPost`](../../YTNodes/classes/SharedPost.md)\>

Get all the community posts in the feed

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`BackstagePost`](../../YTNodes/classes/BackstagePost.md) \| [`Post`](../../YTNodes/classes/Post.md) \| [`SharedPost`](../../YTNodes/classes/SharedPost.md)\>

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`posts`](../../Mixins/classes/Feed.md#posts)

#### Defined in

[src/core/mixins/Feed.ts:119](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/core/mixins/Feed.ts#L119)

***

### secondary\_contents

> `get` **secondary\_contents**(): `null` \| [`SectionList`](../../YTNodes/classes/SectionList.md) \| [`BrowseFeedActions`](../../YTNodes/classes/BrowseFeedActions.md) \| [`ProfileColumn`](../../YTNodes/classes/ProfileColumn.md) \| [`SecondarySearchContainer`](../../YTNodes/classes/SecondarySearchContainer.md)

Returns secondary contents from the page.

#### Returns

`null` \| [`SectionList`](../../YTNodes/classes/SectionList.md) \| [`BrowseFeedActions`](../../YTNodes/classes/BrowseFeedActions.md) \| [`ProfileColumn`](../../YTNodes/classes/ProfileColumn.md) \| [`SecondarySearchContainer`](../../YTNodes/classes/SecondarySearchContainer.md)

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`secondary_contents`](../../Mixins/classes/Feed.md#secondary_contents)

#### Defined in

[src/core/mixins/Feed.ts:169](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/core/mixins/Feed.ts#L169)

***

### shelves

> `get` **shelves**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`ReelShelf`](../../YTNodes/classes/ReelShelf.md) \| [`RichShelf`](../../YTNodes/classes/RichShelf.md) \| [`Shelf`](../../YTNodes/classes/Shelf.md)\>

Returns all segments/sections from the page.

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`ReelShelf`](../../YTNodes/classes/ReelShelf.md) \| [`RichShelf`](../../YTNodes/classes/RichShelf.md) \| [`Shelf`](../../YTNodes/classes/Shelf.md)\>

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`shelves`](../../Mixins/classes/Feed.md#shelves)

#### Defined in

[src/core/mixins/Feed.ts:155](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/core/mixins/Feed.ts#L155)

***

### videos

> `get` **videos**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`CompactVideo`](../../YTNodes/classes/CompactVideo.md) \| [`GridVideo`](../../YTNodes/classes/GridVideo.md) \| [`PlaylistPanelVideo`](../../YTNodes/classes/PlaylistPanelVideo.md) \| [`PlaylistVideo`](../../YTNodes/classes/PlaylistVideo.md) \| [`ReelItem`](../../YTNodes/classes/ReelItem.md) \| [`ShortsLockupView`](../../YTNodes/classes/ShortsLockupView.md) \| [`Video`](../../YTNodes/classes/Video.md) \| [`WatchCardCompactVideo`](../../YTNodes/classes/WatchCardCompactVideo.md)\>

Get all the videos in the feed

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`CompactVideo`](../../YTNodes/classes/CompactVideo.md) \| [`GridVideo`](../../YTNodes/classes/GridVideo.md) \| [`PlaylistPanelVideo`](../../YTNodes/classes/PlaylistPanelVideo.md) \| [`PlaylistVideo`](../../YTNodes/classes/PlaylistVideo.md) \| [`ReelItem`](../../YTNodes/classes/ReelItem.md) \| [`ShortsLockupView`](../../YTNodes/classes/ShortsLockupView.md) \| [`Video`](../../YTNodes/classes/Video.md) \| [`WatchCardCompactVideo`](../../YTNodes/classes/WatchCardCompactVideo.md)\>

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`videos`](../../Mixins/classes/Feed.md#videos)

#### Defined in

[src/core/mixins/Feed.ts:112](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/core/mixins/Feed.ts#L112)

## Methods

### getContinuation()

> **getContinuation**(): `Promise`\<[`Playlist`](Playlist.md)\>

Retrieves next batch of contents and returns a new [Feed](../../Mixins/classes/Feed.md) object.

#### Returns

`Promise`\<[`Playlist`](Playlist.md)\>

#### Overrides

[`Feed`](../../Mixins/classes/Feed.md).[`getContinuation`](../../Mixins/classes/Feed.md#getcontinuation)

#### Defined in

[src/parser/youtube/Playlist.ts:101](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/youtube/Playlist.ts#L101)

***

### getContinuationData()

> **getContinuationData**(): `Promise`\<`undefined` \| [`IBrowseResponse`](../../APIResponseTypes/type-aliases/IBrowseResponse.md)\>

Retrieves continuation data as it is.

#### Returns

`Promise`\<`undefined` \| [`IBrowseResponse`](../../APIResponseTypes/type-aliases/IBrowseResponse.md)\>

#### Overrides

[`Feed`](../../Mixins/classes/Feed.md).[`getContinuationData`](../../Mixins/classes/Feed.md#getcontinuationdata)

#### Defined in

[src/parser/youtube/Playlist.ts:82](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/youtube/Playlist.ts#L82)

***

### getShelf()

> **getShelf**(`title`): `undefined` \| [`ReelShelf`](../../YTNodes/classes/ReelShelf.md) \| [`RichShelf`](../../YTNodes/classes/RichShelf.md) \| [`Shelf`](../../YTNodes/classes/Shelf.md)

Finds shelf by title.

#### Parameters

• **title**: `string`

#### Returns

`undefined` \| [`ReelShelf`](../../YTNodes/classes/ReelShelf.md) \| [`RichShelf`](../../YTNodes/classes/RichShelf.md) \| [`Shelf`](../../YTNodes/classes/Shelf.md)

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`getShelf`](../../Mixins/classes/Feed.md#getshelf)

#### Defined in

[src/core/mixins/Feed.ts:162](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/core/mixins/Feed.ts#L162)

***

### getPlaylistsFromMemo()

> `static` **getPlaylistsFromMemo**(`memo`): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`GridPlaylist`](../../YTNodes/classes/GridPlaylist.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`Playlist`](../../YTNodes/classes/Playlist.md)\>

Get all playlists on a given page via memo

#### Parameters

• **memo**: [`Memo`](../../Helpers/classes/Memo.md)

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`GridPlaylist`](../../YTNodes/classes/GridPlaylist.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`Playlist`](../../YTNodes/classes/Playlist.md)\>

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`getPlaylistsFromMemo`](../../Mixins/classes/Feed.md#getplaylistsfrommemo)

#### Defined in

[src/core/mixins/Feed.ts:94](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/core/mixins/Feed.ts#L94)

***

### getVideosFromMemo()

> `static` **getVideosFromMemo**(`memo`): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`CompactVideo`](../../YTNodes/classes/CompactVideo.md) \| [`GridVideo`](../../YTNodes/classes/GridVideo.md) \| [`PlaylistPanelVideo`](../../YTNodes/classes/PlaylistPanelVideo.md) \| [`PlaylistVideo`](../../YTNodes/classes/PlaylistVideo.md) \| [`ReelItem`](../../YTNodes/classes/ReelItem.md) \| [`ShortsLockupView`](../../YTNodes/classes/ShortsLockupView.md) \| [`Video`](../../YTNodes/classes/Video.md) \| [`WatchCardCompactVideo`](../../YTNodes/classes/WatchCardCompactVideo.md)\>

Get all videos on a given page via memo

#### Parameters

• **memo**: [`Memo`](../../Helpers/classes/Memo.md)

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`CompactVideo`](../../YTNodes/classes/CompactVideo.md) \| [`GridVideo`](../../YTNodes/classes/GridVideo.md) \| [`PlaylistPanelVideo`](../../YTNodes/classes/PlaylistPanelVideo.md) \| [`PlaylistVideo`](../../YTNodes/classes/PlaylistVideo.md) \| [`ReelItem`](../../YTNodes/classes/ReelItem.md) \| [`ShortsLockupView`](../../YTNodes/classes/ShortsLockupView.md) \| [`Video`](../../YTNodes/classes/Video.md) \| [`WatchCardCompactVideo`](../../YTNodes/classes/WatchCardCompactVideo.md)\>

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`getVideosFromMemo`](../../Mixins/classes/Feed.md#getvideosfrommemo)

#### Defined in

[src/core/mixins/Feed.ts:78](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/core/mixins/Feed.ts#L78)
