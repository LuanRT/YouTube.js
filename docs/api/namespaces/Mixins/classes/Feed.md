[youtubei.js](../../../README.md) / [Mixins](../README.md) / Feed

# Class: Feed\<T\>

## Extended by

- [`FilterableFeed`](FilterableFeed.md)
- [`TabbedFeed`](TabbedFeed.md)
- [`History`](../../YT/classes/History.md)
- [`Library`](../../YT/classes/Library.md)
- [`Playlist`](../../YT/classes/Playlist.md)
- [`Search`](../../YT/classes/Search.md)
- [`ChannelListContinuation`](../../YT/classes/ChannelListContinuation.md)
- [`Channel`](../../YTKids/classes/Channel.md)
- [`HomeFeed`](../../YTKids/classes/HomeFeed.md)
- [`Search`](../../YTKids/classes/Search.md)

## Type Parameters

• **T** *extends* [`IParsedResponse`](../../APIResponseTypes/interfaces/IParsedResponse.md) = [`IParsedResponse`](../../APIResponseTypes/interfaces/IParsedResponse.md)

## Constructors

### new Feed()

> **new Feed**\<`T`\>(`actions`, `response`, `already_parsed`): [`Feed`](Feed.md)\<`T`\>

#### Parameters

• **actions**: [`Actions`](../../../classes/Actions.md)

• **response**: [`ApiResponse`](../../../interfaces/ApiResponse.md) \| [`IParsedResponse`](../../APIResponseTypes/interfaces/IParsedResponse.md)

• **already\_parsed**: `boolean` = `false`

#### Returns

[`Feed`](Feed.md)\<`T`\>

#### Defined in

[src/core/mixins/Feed.ts:47](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/core/mixins/Feed.ts#L47)

## Accessors

### actions

> `get` **actions**(): [`Actions`](../../../classes/Actions.md)

#### Returns

[`Actions`](../../../classes/Actions.md)

#### Defined in

[src/core/mixins/Feed.ts:181](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/core/mixins/Feed.ts#L181)

***

### channels

> `get` **channels**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`Channel`](../../YTNodes/classes/Channel.md) \| [`GridChannel`](../../YTNodes/classes/GridChannel.md)\>

Get all the channels in the feed

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`Channel`](../../YTNodes/classes/Channel.md) \| [`GridChannel`](../../YTNodes/classes/GridChannel.md)\>

#### Defined in

[src/core/mixins/Feed.ts:126](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/core/mixins/Feed.ts#L126)

***

### has\_continuation

> `get` **has\_continuation**(): `boolean`

Checks if the feed has continuation.

#### Returns

`boolean`

#### Defined in

[src/core/mixins/Feed.ts:195](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/core/mixins/Feed.ts#L195)

***

### memo

> `get` **memo**(): [`Memo`](../../Helpers/classes/Memo.md)

#### Returns

[`Memo`](../../Helpers/classes/Memo.md)

#### Defined in

[src/core/mixins/Feed.ts:137](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/core/mixins/Feed.ts#L137)

***

### page

> `get` **page**(): `T`

Get the original page data

#### Returns

`T`

#### Defined in

[src/core/mixins/Feed.ts:188](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/core/mixins/Feed.ts#L188)

***

### page\_contents

> `get` **page\_contents**(): [`ReloadContinuationItemsCommand`](../../../classes/ReloadContinuationItemsCommand.md) \| [`SectionList`](../../YTNodes/classes/SectionList.md) \| [`MusicQueue`](../../YTNodes/classes/MusicQueue.md) \| [`RichGrid`](../../YTNodes/classes/RichGrid.md)

Returns contents from the page.

#### Returns

[`ReloadContinuationItemsCommand`](../../../classes/ReloadContinuationItemsCommand.md) \| [`SectionList`](../../YTNodes/classes/SectionList.md) \| [`MusicQueue`](../../YTNodes/classes/MusicQueue.md) \| [`RichGrid`](../../YTNodes/classes/RichGrid.md)

#### Defined in

[src/core/mixins/Feed.ts:144](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/core/mixins/Feed.ts#L144)

***

### playlists

> `get` **playlists**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`GridPlaylist`](../../YTNodes/classes/GridPlaylist.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`Playlist`](../../YTNodes/classes/Playlist.md)\>

Get all playlists in the feed

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`GridPlaylist`](../../YTNodes/classes/GridPlaylist.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`Playlist`](../../YTNodes/classes/Playlist.md)\>

#### Defined in

[src/core/mixins/Feed.ts:133](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/core/mixins/Feed.ts#L133)

***

### posts

> `get` **posts**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`BackstagePost`](../../YTNodes/classes/BackstagePost.md) \| [`Post`](../../YTNodes/classes/Post.md) \| [`SharedPost`](../../YTNodes/classes/SharedPost.md)\>

Get all the community posts in the feed

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`BackstagePost`](../../YTNodes/classes/BackstagePost.md) \| [`Post`](../../YTNodes/classes/Post.md) \| [`SharedPost`](../../YTNodes/classes/SharedPost.md)\>

#### Defined in

[src/core/mixins/Feed.ts:119](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/core/mixins/Feed.ts#L119)

***

### secondary\_contents

> `get` **secondary\_contents**(): `null` \| [`SectionList`](../../YTNodes/classes/SectionList.md) \| [`BrowseFeedActions`](../../YTNodes/classes/BrowseFeedActions.md) \| [`ProfileColumn`](../../YTNodes/classes/ProfileColumn.md) \| [`SecondarySearchContainer`](../../YTNodes/classes/SecondarySearchContainer.md)

Returns secondary contents from the page.

#### Returns

`null` \| [`SectionList`](../../YTNodes/classes/SectionList.md) \| [`BrowseFeedActions`](../../YTNodes/classes/BrowseFeedActions.md) \| [`ProfileColumn`](../../YTNodes/classes/ProfileColumn.md) \| [`SecondarySearchContainer`](../../YTNodes/classes/SecondarySearchContainer.md)

#### Defined in

[src/core/mixins/Feed.ts:169](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/core/mixins/Feed.ts#L169)

***

### shelves

> `get` **shelves**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`ReelShelf`](../../YTNodes/classes/ReelShelf.md) \| [`RichShelf`](../../YTNodes/classes/RichShelf.md) \| [`Shelf`](../../YTNodes/classes/Shelf.md)\>

Returns all segments/sections from the page.

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`ReelShelf`](../../YTNodes/classes/ReelShelf.md) \| [`RichShelf`](../../YTNodes/classes/RichShelf.md) \| [`Shelf`](../../YTNodes/classes/Shelf.md)\>

#### Defined in

[src/core/mixins/Feed.ts:155](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/core/mixins/Feed.ts#L155)

***

### videos

> `get` **videos**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`CompactVideo`](../../YTNodes/classes/CompactVideo.md) \| [`GridVideo`](../../YTNodes/classes/GridVideo.md) \| [`PlaylistPanelVideo`](../../YTNodes/classes/PlaylistPanelVideo.md) \| [`PlaylistVideo`](../../YTNodes/classes/PlaylistVideo.md) \| [`ReelItem`](../../YTNodes/classes/ReelItem.md) \| [`ShortsLockupView`](../../YTNodes/classes/ShortsLockupView.md) \| [`Video`](../../YTNodes/classes/Video.md) \| [`WatchCardCompactVideo`](../../YTNodes/classes/WatchCardCompactVideo.md)\>

Get all the videos in the feed

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`CompactVideo`](../../YTNodes/classes/CompactVideo.md) \| [`GridVideo`](../../YTNodes/classes/GridVideo.md) \| [`PlaylistPanelVideo`](../../YTNodes/classes/PlaylistPanelVideo.md) \| [`PlaylistVideo`](../../YTNodes/classes/PlaylistVideo.md) \| [`ReelItem`](../../YTNodes/classes/ReelItem.md) \| [`ShortsLockupView`](../../YTNodes/classes/ShortsLockupView.md) \| [`Video`](../../YTNodes/classes/Video.md) \| [`WatchCardCompactVideo`](../../YTNodes/classes/WatchCardCompactVideo.md)\>

#### Defined in

[src/core/mixins/Feed.ts:112](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/core/mixins/Feed.ts#L112)

## Methods

### getContinuation()

> **getContinuation**(): `Promise`\<[`Feed`](Feed.md)\<`T`\>\>

Retrieves next batch of contents and returns a new [Feed](Feed.md) object.

#### Returns

`Promise`\<[`Feed`](Feed.md)\<`T`\>\>

#### Defined in

[src/core/mixins/Feed.ts:219](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/core/mixins/Feed.ts#L219)

***

### getContinuationData()

> **getContinuationData**(): `Promise`\<`undefined` \| `T`\>

Retrieves continuation data as it is.

#### Returns

`Promise`\<`undefined` \| `T`\>

#### Defined in

[src/core/mixins/Feed.ts:202](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/core/mixins/Feed.ts#L202)

***

### getShelf()

> **getShelf**(`title`): `undefined` \| [`ReelShelf`](../../YTNodes/classes/ReelShelf.md) \| [`RichShelf`](../../YTNodes/classes/RichShelf.md) \| [`Shelf`](../../YTNodes/classes/Shelf.md)

Finds shelf by title.

#### Parameters

• **title**: `string`

#### Returns

`undefined` \| [`ReelShelf`](../../YTNodes/classes/ReelShelf.md) \| [`RichShelf`](../../YTNodes/classes/RichShelf.md) \| [`Shelf`](../../YTNodes/classes/Shelf.md)

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

#### Defined in

[src/core/mixins/Feed.ts:78](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/core/mixins/Feed.ts#L78)
