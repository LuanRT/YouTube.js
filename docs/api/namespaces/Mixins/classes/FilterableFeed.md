[youtubei.js](../../../README.md) / [Mixins](../README.md) / FilterableFeed

# Class: FilterableFeed\<T\>

## Extends

- [`Feed`](Feed.md)\<`T`\>

## Extended by

- [`HomeFeed`](../../YT/classes/HomeFeed.md)
- [`HashtagFeed`](../../YT/classes/HashtagFeed.md)
- [`FilteredChannelList`](../../YT/classes/FilteredChannelList.md)

## Type Parameters

• **T** *extends* [`IParsedResponse`](../../APIResponseTypes/interfaces/IParsedResponse.md)

## Constructors

### new FilterableFeed()

> **new FilterableFeed**\<`T`\>(`actions`, `data`, `already_parsed`): [`FilterableFeed`](FilterableFeed.md)\<`T`\>

#### Parameters

• **actions**: [`Actions`](../../../classes/Actions.md)

• **data**: [`ApiResponse`](../../../interfaces/ApiResponse.md) \| `T`

• **already\_parsed**: `boolean` = `false`

#### Returns

[`FilterableFeed`](FilterableFeed.md)\<`T`\>

#### Overrides

[`Feed`](Feed.md).[`constructor`](Feed.md#constructors)

#### Defined in

[src/core/mixins/FilterableFeed.ts:13](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/core/mixins/FilterableFeed.ts#L13)

## Accessors

### actions

> `get` **actions**(): [`Actions`](../../../classes/Actions.md)

#### Returns

[`Actions`](../../../classes/Actions.md)

#### Inherited from

[`Feed`](Feed.md).[`actions`](Feed.md#actions)

#### Defined in

[src/core/mixins/Feed.ts:181](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/core/mixins/Feed.ts#L181)

***

### channels

> `get` **channels**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`Channel`](../../YTNodes/classes/Channel.md) \| [`GridChannel`](../../YTNodes/classes/GridChannel.md)\>

Get all the channels in the feed

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`Channel`](../../YTNodes/classes/Channel.md) \| [`GridChannel`](../../YTNodes/classes/GridChannel.md)\>

#### Inherited from

[`Feed`](Feed.md).[`channels`](Feed.md#channels)

#### Defined in

[src/core/mixins/Feed.ts:126](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/core/mixins/Feed.ts#L126)

***

### filter\_chips

> `get` **filter\_chips**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`ChipCloudChip`](../../YTNodes/classes/ChipCloudChip.md)\>

Returns the filter chips.

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`ChipCloudChip`](../../YTNodes/classes/ChipCloudChip.md)\>

#### Defined in

[src/core/mixins/FilterableFeed.ts:20](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/core/mixins/FilterableFeed.ts#L20)

***

### filters

> `get` **filters**(): `string`[]

Returns available filters.

#### Returns

`string`[]

#### Defined in

[src/core/mixins/FilterableFeed.ts:38](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/core/mixins/FilterableFeed.ts#L38)

***

### has\_continuation

> `get` **has\_continuation**(): `boolean`

Checks if the feed has continuation.

#### Returns

`boolean`

#### Inherited from

[`Feed`](Feed.md).[`has_continuation`](Feed.md#has_continuation)

#### Defined in

[src/core/mixins/Feed.ts:195](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/core/mixins/Feed.ts#L195)

***

### memo

> `get` **memo**(): [`Memo`](../../Helpers/classes/Memo.md)

#### Returns

[`Memo`](../../Helpers/classes/Memo.md)

#### Inherited from

[`Feed`](Feed.md).[`memo`](Feed.md#memo)

#### Defined in

[src/core/mixins/Feed.ts:137](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/core/mixins/Feed.ts#L137)

***

### page

> `get` **page**(): `T`

Get the original page data

#### Returns

`T`

#### Inherited from

[`Feed`](Feed.md).[`page`](Feed.md#page)

#### Defined in

[src/core/mixins/Feed.ts:188](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/core/mixins/Feed.ts#L188)

***

### page\_contents

> `get` **page\_contents**(): [`ReloadContinuationItemsCommand`](../../../classes/ReloadContinuationItemsCommand.md) \| [`SectionList`](../../YTNodes/classes/SectionList.md) \| [`MusicQueue`](../../YTNodes/classes/MusicQueue.md) \| [`RichGrid`](../../YTNodes/classes/RichGrid.md)

Returns contents from the page.

#### Returns

[`ReloadContinuationItemsCommand`](../../../classes/ReloadContinuationItemsCommand.md) \| [`SectionList`](../../YTNodes/classes/SectionList.md) \| [`MusicQueue`](../../YTNodes/classes/MusicQueue.md) \| [`RichGrid`](../../YTNodes/classes/RichGrid.md)

#### Inherited from

[`Feed`](Feed.md).[`page_contents`](Feed.md#page_contents)

#### Defined in

[src/core/mixins/Feed.ts:144](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/core/mixins/Feed.ts#L144)

***

### playlists

> `get` **playlists**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`GridPlaylist`](../../YTNodes/classes/GridPlaylist.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`Playlist`](../../YTNodes/classes/Playlist.md)\>

Get all playlists in the feed

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`GridPlaylist`](../../YTNodes/classes/GridPlaylist.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`Playlist`](../../YTNodes/classes/Playlist.md)\>

#### Inherited from

[`Feed`](Feed.md).[`playlists`](Feed.md#playlists)

#### Defined in

[src/core/mixins/Feed.ts:133](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/core/mixins/Feed.ts#L133)

***

### posts

> `get` **posts**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`BackstagePost`](../../YTNodes/classes/BackstagePost.md) \| [`Post`](../../YTNodes/classes/Post.md) \| [`SharedPost`](../../YTNodes/classes/SharedPost.md)\>

Get all the community posts in the feed

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`BackstagePost`](../../YTNodes/classes/BackstagePost.md) \| [`Post`](../../YTNodes/classes/Post.md) \| [`SharedPost`](../../YTNodes/classes/SharedPost.md)\>

#### Inherited from

[`Feed`](Feed.md).[`posts`](Feed.md#posts)

#### Defined in

[src/core/mixins/Feed.ts:119](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/core/mixins/Feed.ts#L119)

***

### secondary\_contents

> `get` **secondary\_contents**(): `null` \| [`SectionList`](../../YTNodes/classes/SectionList.md) \| [`BrowseFeedActions`](../../YTNodes/classes/BrowseFeedActions.md) \| [`ProfileColumn`](../../YTNodes/classes/ProfileColumn.md) \| [`SecondarySearchContainer`](../../YTNodes/classes/SecondarySearchContainer.md)

Returns secondary contents from the page.

#### Returns

`null` \| [`SectionList`](../../YTNodes/classes/SectionList.md) \| [`BrowseFeedActions`](../../YTNodes/classes/BrowseFeedActions.md) \| [`ProfileColumn`](../../YTNodes/classes/ProfileColumn.md) \| [`SecondarySearchContainer`](../../YTNodes/classes/SecondarySearchContainer.md)

#### Inherited from

[`Feed`](Feed.md).[`secondary_contents`](Feed.md#secondary_contents)

#### Defined in

[src/core/mixins/Feed.ts:169](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/core/mixins/Feed.ts#L169)

***

### shelves

> `get` **shelves**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`ReelShelf`](../../YTNodes/classes/ReelShelf.md) \| [`RichShelf`](../../YTNodes/classes/RichShelf.md) \| [`Shelf`](../../YTNodes/classes/Shelf.md)\>

Returns all segments/sections from the page.

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`ReelShelf`](../../YTNodes/classes/ReelShelf.md) \| [`RichShelf`](../../YTNodes/classes/RichShelf.md) \| [`Shelf`](../../YTNodes/classes/Shelf.md)\>

#### Inherited from

[`Feed`](Feed.md).[`shelves`](Feed.md#shelves)

#### Defined in

[src/core/mixins/Feed.ts:155](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/core/mixins/Feed.ts#L155)

***

### videos

> `get` **videos**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`CompactVideo`](../../YTNodes/classes/CompactVideo.md) \| [`GridVideo`](../../YTNodes/classes/GridVideo.md) \| [`PlaylistPanelVideo`](../../YTNodes/classes/PlaylistPanelVideo.md) \| [`PlaylistVideo`](../../YTNodes/classes/PlaylistVideo.md) \| [`ReelItem`](../../YTNodes/classes/ReelItem.md) \| [`ShortsLockupView`](../../YTNodes/classes/ShortsLockupView.md) \| [`Video`](../../YTNodes/classes/Video.md) \| [`WatchCardCompactVideo`](../../YTNodes/classes/WatchCardCompactVideo.md)\>

Get all the videos in the feed

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`CompactVideo`](../../YTNodes/classes/CompactVideo.md) \| [`GridVideo`](../../YTNodes/classes/GridVideo.md) \| [`PlaylistPanelVideo`](../../YTNodes/classes/PlaylistPanelVideo.md) \| [`PlaylistVideo`](../../YTNodes/classes/PlaylistVideo.md) \| [`ReelItem`](../../YTNodes/classes/ReelItem.md) \| [`ShortsLockupView`](../../YTNodes/classes/ShortsLockupView.md) \| [`Video`](../../YTNodes/classes/Video.md) \| [`WatchCardCompactVideo`](../../YTNodes/classes/WatchCardCompactVideo.md)\>

#### Inherited from

[`Feed`](Feed.md).[`videos`](Feed.md#videos)

#### Defined in

[src/core/mixins/Feed.ts:112](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/core/mixins/Feed.ts#L112)

## Methods

### getContinuation()

> **getContinuation**(): `Promise`\<[`Feed`](Feed.md)\<`T`\>\>

Retrieves next batch of contents and returns a new [Feed](Feed.md) object.

#### Returns

`Promise`\<[`Feed`](Feed.md)\<`T`\>\>

#### Inherited from

[`Feed`](Feed.md).[`getContinuation`](Feed.md#getcontinuation)

#### Defined in

[src/core/mixins/Feed.ts:219](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/core/mixins/Feed.ts#L219)

***

### getContinuationData()

> **getContinuationData**(): `Promise`\<`undefined` \| `T`\>

Retrieves continuation data as it is.

#### Returns

`Promise`\<`undefined` \| `T`\>

#### Inherited from

[`Feed`](Feed.md).[`getContinuationData`](Feed.md#getcontinuationdata)

#### Defined in

[src/core/mixins/Feed.ts:202](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/core/mixins/Feed.ts#L202)

***

### getFilteredFeed()

> **getFilteredFeed**(`filter`): `Promise`\<[`Feed`](Feed.md)\<`T`\>\>

Applies given filter and returns a new [Feed](Feed.md) object.

#### Parameters

• **filter**: `string` \| [`ChipCloudChip`](../../YTNodes/classes/ChipCloudChip.md)

#### Returns

`Promise`\<[`Feed`](Feed.md)\<`T`\>\>

#### Defined in

[src/core/mixins/FilterableFeed.ts:45](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/core/mixins/FilterableFeed.ts#L45)

***

### getShelf()

> **getShelf**(`title`): `undefined` \| [`ReelShelf`](../../YTNodes/classes/ReelShelf.md) \| [`RichShelf`](../../YTNodes/classes/RichShelf.md) \| [`Shelf`](../../YTNodes/classes/Shelf.md)

Finds shelf by title.

#### Parameters

• **title**: `string`

#### Returns

`undefined` \| [`ReelShelf`](../../YTNodes/classes/ReelShelf.md) \| [`RichShelf`](../../YTNodes/classes/RichShelf.md) \| [`Shelf`](../../YTNodes/classes/Shelf.md)

#### Inherited from

[`Feed`](Feed.md).[`getShelf`](Feed.md#getshelf)

#### Defined in

[src/core/mixins/Feed.ts:162](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/core/mixins/Feed.ts#L162)

***

### getPlaylistsFromMemo()

> `static` **getPlaylistsFromMemo**(`memo`): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`GridPlaylist`](../../YTNodes/classes/GridPlaylist.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`Playlist`](../../YTNodes/classes/Playlist.md)\>

Get all playlists on a given page via memo

#### Parameters

• **memo**: [`Memo`](../../Helpers/classes/Memo.md)

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`GridPlaylist`](../../YTNodes/classes/GridPlaylist.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`Playlist`](../../YTNodes/classes/Playlist.md)\>

#### Inherited from

[`Feed`](Feed.md).[`getPlaylistsFromMemo`](Feed.md#getplaylistsfrommemo)

#### Defined in

[src/core/mixins/Feed.ts:94](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/core/mixins/Feed.ts#L94)

***

### getVideosFromMemo()

> `static` **getVideosFromMemo**(`memo`): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`CompactVideo`](../../YTNodes/classes/CompactVideo.md) \| [`GridVideo`](../../YTNodes/classes/GridVideo.md) \| [`PlaylistPanelVideo`](../../YTNodes/classes/PlaylistPanelVideo.md) \| [`PlaylistVideo`](../../YTNodes/classes/PlaylistVideo.md) \| [`ReelItem`](../../YTNodes/classes/ReelItem.md) \| [`ShortsLockupView`](../../YTNodes/classes/ShortsLockupView.md) \| [`Video`](../../YTNodes/classes/Video.md) \| [`WatchCardCompactVideo`](../../YTNodes/classes/WatchCardCompactVideo.md)\>

Get all videos on a given page via memo

#### Parameters

• **memo**: [`Memo`](../../Helpers/classes/Memo.md)

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`CompactVideo`](../../YTNodes/classes/CompactVideo.md) \| [`GridVideo`](../../YTNodes/classes/GridVideo.md) \| [`PlaylistPanelVideo`](../../YTNodes/classes/PlaylistPanelVideo.md) \| [`PlaylistVideo`](../../YTNodes/classes/PlaylistVideo.md) \| [`ReelItem`](../../YTNodes/classes/ReelItem.md) \| [`ShortsLockupView`](../../YTNodes/classes/ShortsLockupView.md) \| [`Video`](../../YTNodes/classes/Video.md) \| [`WatchCardCompactVideo`](../../YTNodes/classes/WatchCardCompactVideo.md)\>

#### Inherited from

[`Feed`](Feed.md).[`getVideosFromMemo`](Feed.md#getvideosfrommemo)

#### Defined in

[src/core/mixins/Feed.ts:78](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/core/mixins/Feed.ts#L78)
