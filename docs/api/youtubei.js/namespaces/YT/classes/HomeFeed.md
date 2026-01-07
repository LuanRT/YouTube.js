[youtubei.js](../../../../README.md) / [YT](../README.md) / HomeFeed

# Class: HomeFeed

Defined in: [src/parser/youtube/HomeFeed.ts:10](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/HomeFeed.ts#L10)

## Extends

- [`FilterableFeed`](../../Mixins/classes/FilterableFeed.md)\<[`IBrowseResponse`](../../../../type-aliases/IBrowseResponse.md)\>

## Constructors

### Constructor

> **new HomeFeed**(`actions`, `data`, `already_parsed`): `HomeFeed`

Defined in: [src/parser/youtube/HomeFeed.ts:14](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/HomeFeed.ts#L14)

#### Parameters

##### actions

[`Actions`](../../../../classes/Actions.md)

##### data

[`ApiResponse`](../../../../interfaces/ApiResponse.md) | [`IBrowseResponse`](../../../../type-aliases/IBrowseResponse.md)

##### already\_parsed

`boolean` = `false`

#### Returns

`HomeFeed`

#### Overrides

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`constructor`](../../Mixins/classes/FilterableFeed.md#constructor)

## Properties

### contents?

> `optional` **contents**: [`RichGrid`](../../YTNodes/classes/RichGrid.md) \| [`AppendContinuationItemsAction`](../../../../classes/AppendContinuationItemsAction.md) \| [`ReloadContinuationItemsCommand`](../../../../classes/ReloadContinuationItemsCommand.md)

Defined in: [src/parser/youtube/HomeFeed.ts:11](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/HomeFeed.ts#L11)

***

### header?

> `optional` **header**: [`FeedTabbedHeader`](../../YTNodes/classes/FeedTabbedHeader.md)

Defined in: [src/parser/youtube/HomeFeed.ts:12](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/HomeFeed.ts#L12)

## Accessors

### actions

#### Get Signature

> **get** **actions**(): [`Actions`](../../../../classes/Actions.md)

Defined in: [src/core/mixins/Feed.ts:181](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/mixins/Feed.ts#L181)

##### Returns

[`Actions`](../../../../classes/Actions.md)

#### Inherited from

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`actions`](../../Mixins/classes/FilterableFeed.md#actions)

***

### channels

#### Get Signature

> **get** **channels**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`Channel`](../../YTNodes/classes/Channel.md) \| [`GridChannel`](../../YTNodes/classes/GridChannel.md)\>

Defined in: [src/core/mixins/Feed.ts:126](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/mixins/Feed.ts#L126)

Get all the channels in the feed

##### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`Channel`](../../YTNodes/classes/Channel.md) \| [`GridChannel`](../../YTNodes/classes/GridChannel.md)\>

#### Inherited from

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`channels`](../../Mixins/classes/FilterableFeed.md#channels)

***

### filter\_chips

#### Get Signature

> **get** **filter\_chips**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`ChipCloudChip`](../../YTNodes/classes/ChipCloudChip.md)\>

Defined in: [src/core/mixins/FilterableFeed.ts:20](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/mixins/FilterableFeed.ts#L20)

Returns the filter chips.

##### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`ChipCloudChip`](../../YTNodes/classes/ChipCloudChip.md)\>

#### Inherited from

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`filter_chips`](../../Mixins/classes/FilterableFeed.md#filter_chips)

***

### filters

#### Get Signature

> **get** **filters**(): `string`[]

Defined in: [src/core/mixins/FilterableFeed.ts:38](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/mixins/FilterableFeed.ts#L38)

Returns available filters.

##### Returns

`string`[]

#### Inherited from

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`filters`](../../Mixins/classes/FilterableFeed.md#filters)

***

### has\_continuation

#### Get Signature

> **get** **has\_continuation**(): `boolean`

Defined in: [src/core/mixins/Feed.ts:195](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/mixins/Feed.ts#L195)

Checks if the feed has continuation.

##### Returns

`boolean`

#### Inherited from

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`has_continuation`](../../Mixins/classes/FilterableFeed.md#has_continuation)

***

### memo

#### Get Signature

> **get** **memo**(): [`Memo`](../../Helpers/classes/Memo.md)

Defined in: [src/core/mixins/Feed.ts:137](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/mixins/Feed.ts#L137)

##### Returns

[`Memo`](../../Helpers/classes/Memo.md)

#### Inherited from

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`memo`](../../Mixins/classes/FilterableFeed.md#memo)

***

### page

#### Get Signature

> **get** **page**(): `T`

Defined in: [src/core/mixins/Feed.ts:188](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/mixins/Feed.ts#L188)

Get the original page data

##### Returns

`T`

#### Inherited from

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`page`](../../Mixins/classes/FilterableFeed.md#page)

***

### page\_contents

#### Get Signature

> **get** **page\_contents**(): [`SectionList`](../../YTNodes/classes/SectionList.md) \| [`MusicQueue`](../../YTNodes/classes/MusicQueue.md) \| [`RichGrid`](../../YTNodes/classes/RichGrid.md) \| [`ReloadContinuationItemsCommand`](../../../../classes/ReloadContinuationItemsCommand.md)

Defined in: [src/core/mixins/Feed.ts:144](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/mixins/Feed.ts#L144)

Returns contents from the page.

##### Returns

[`SectionList`](../../YTNodes/classes/SectionList.md) \| [`MusicQueue`](../../YTNodes/classes/MusicQueue.md) \| [`RichGrid`](../../YTNodes/classes/RichGrid.md) \| [`ReloadContinuationItemsCommand`](../../../../classes/ReloadContinuationItemsCommand.md)

#### Inherited from

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`page_contents`](../../Mixins/classes/FilterableFeed.md#page_contents)

***

### playlists

#### Get Signature

> **get** **playlists**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`GridPlaylist`](../../YTNodes/classes/GridPlaylist.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`Playlist`](../../YTNodes/classes/Playlist.md)\>

Defined in: [src/core/mixins/Feed.ts:133](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/mixins/Feed.ts#L133)

Get all playlists in the feed

##### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`GridPlaylist`](../../YTNodes/classes/GridPlaylist.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`Playlist`](../../YTNodes/classes/Playlist.md)\>

#### Inherited from

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`playlists`](../../Mixins/classes/FilterableFeed.md#playlists)

***

### posts

#### Get Signature

> **get** **posts**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`BackstagePost`](../../YTNodes/classes/BackstagePost.md) \| [`Post`](../../YTNodes/classes/Post.md) \| [`SharedPost`](../../YTNodes/classes/SharedPost.md)\>

Defined in: [src/core/mixins/Feed.ts:119](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/mixins/Feed.ts#L119)

Get all the community posts in the feed

##### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`BackstagePost`](../../YTNodes/classes/BackstagePost.md) \| [`Post`](../../YTNodes/classes/Post.md) \| [`SharedPost`](../../YTNodes/classes/SharedPost.md)\>

#### Inherited from

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`posts`](../../Mixins/classes/FilterableFeed.md#posts)

***

### secondary\_contents

#### Get Signature

> **get** **secondary\_contents**(): [`SectionList`](../../YTNodes/classes/SectionList.md) \| [`BrowseFeedActions`](../../YTNodes/classes/BrowseFeedActions.md) \| [`ProfileColumn`](../../YTNodes/classes/ProfileColumn.md) \| [`SecondarySearchContainer`](../../YTNodes/classes/SecondarySearchContainer.md) \| `null`

Defined in: [src/core/mixins/Feed.ts:169](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/mixins/Feed.ts#L169)

Returns secondary contents from the page.

##### Returns

[`SectionList`](../../YTNodes/classes/SectionList.md) \| [`BrowseFeedActions`](../../YTNodes/classes/BrowseFeedActions.md) \| [`ProfileColumn`](../../YTNodes/classes/ProfileColumn.md) \| [`SecondarySearchContainer`](../../YTNodes/classes/SecondarySearchContainer.md) \| `null`

#### Inherited from

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`secondary_contents`](../../Mixins/classes/FilterableFeed.md#secondary_contents)

***

### shelves

#### Get Signature

> **get** **shelves**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`ReelShelf`](../../YTNodes/classes/ReelShelf.md) \| [`RichShelf`](../../YTNodes/classes/RichShelf.md) \| [`Shelf`](../../YTNodes/classes/Shelf.md)\>

Defined in: [src/core/mixins/Feed.ts:155](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/mixins/Feed.ts#L155)

Returns all segments/sections from the page.

##### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`ReelShelf`](../../YTNodes/classes/ReelShelf.md) \| [`RichShelf`](../../YTNodes/classes/RichShelf.md) \| [`Shelf`](../../YTNodes/classes/Shelf.md)\>

#### Inherited from

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`shelves`](../../Mixins/classes/FilterableFeed.md#shelves)

***

### videos

#### Get Signature

> **get** **videos**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`CompactVideo`](../../YTNodes/classes/CompactVideo.md) \| [`GridVideo`](../../YTNodes/classes/GridVideo.md) \| [`PlaylistPanelVideo`](../../YTNodes/classes/PlaylistPanelVideo.md) \| [`PlaylistVideo`](../../YTNodes/classes/PlaylistVideo.md) \| [`ReelItem`](../../YTNodes/classes/ReelItem.md) \| [`ShortsLockupView`](../../YTNodes/classes/ShortsLockupView.md) \| [`Video`](../../YTNodes/classes/Video.md) \| [`WatchCardCompactVideo`](../../YTNodes/classes/WatchCardCompactVideo.md)\>

Defined in: [src/core/mixins/Feed.ts:112](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/mixins/Feed.ts#L112)

Get all the videos in the feed

##### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`CompactVideo`](../../YTNodes/classes/CompactVideo.md) \| [`GridVideo`](../../YTNodes/classes/GridVideo.md) \| [`PlaylistPanelVideo`](../../YTNodes/classes/PlaylistPanelVideo.md) \| [`PlaylistVideo`](../../YTNodes/classes/PlaylistVideo.md) \| [`ReelItem`](../../YTNodes/classes/ReelItem.md) \| [`ShortsLockupView`](../../YTNodes/classes/ShortsLockupView.md) \| [`Video`](../../YTNodes/classes/Video.md) \| [`WatchCardCompactVideo`](../../YTNodes/classes/WatchCardCompactVideo.md)\>

#### Inherited from

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`videos`](../../Mixins/classes/FilterableFeed.md#videos)

## Methods

### applyFilter()

> **applyFilter**(`filter`): `Promise`\<`HomeFeed`\>

Defined in: [src/parser/youtube/HomeFeed.ts:24](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/HomeFeed.ts#L24)

Applies given filter to the feed. Use [filters](HashtagFeed.md#filters) to get available filters.

#### Parameters

##### filter

Filter to apply.

`string` | [`ChipCloudChip`](../../YTNodes/classes/ChipCloudChip.md)

#### Returns

`Promise`\<`HomeFeed`\>

***

### getContinuation()

> **getContinuation**(): `Promise`\<`HomeFeed`\>

Defined in: [src/parser/youtube/HomeFeed.ts:32](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/HomeFeed.ts#L32)

Retrieves next batch of contents.

#### Returns

`Promise`\<`HomeFeed`\>

#### Overrides

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`getContinuation`](../../Mixins/classes/FilterableFeed.md#getcontinuation)

***

### getContinuationData()

> **getContinuationData**(): `Promise`\<[`IBrowseResponse`](../../../../type-aliases/IBrowseResponse.md) \| `undefined`\>

Defined in: [src/core/mixins/Feed.ts:202](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/mixins/Feed.ts#L202)

Retrieves continuation data as it is.

#### Returns

`Promise`\<[`IBrowseResponse`](../../../../type-aliases/IBrowseResponse.md) \| `undefined`\>

#### Inherited from

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`getContinuationData`](../../Mixins/classes/FilterableFeed.md#getcontinuationdata)

***

### getFilteredFeed()

> **getFilteredFeed**(`filter`): `Promise`\<[`Feed`](../../Mixins/classes/Feed.md)\<[`IBrowseResponse`](../../../../type-aliases/IBrowseResponse.md)\>\>

Defined in: [src/core/mixins/FilterableFeed.ts:45](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/mixins/FilterableFeed.ts#L45)

Applies given filter and returns a new [Feed](../../Mixins/classes/Feed.md) object.

#### Parameters

##### filter

`string` | [`ChipCloudChip`](../../YTNodes/classes/ChipCloudChip.md)

#### Returns

`Promise`\<[`Feed`](../../Mixins/classes/Feed.md)\<[`IBrowseResponse`](../../../../type-aliases/IBrowseResponse.md)\>\>

#### Inherited from

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`getFilteredFeed`](../../Mixins/classes/FilterableFeed.md#getfilteredfeed)

***

### getShelf()

> **getShelf**(`title`): [`ReelShelf`](../../YTNodes/classes/ReelShelf.md) \| [`RichShelf`](../../YTNodes/classes/RichShelf.md) \| [`Shelf`](../../YTNodes/classes/Shelf.md) \| `undefined`

Defined in: [src/core/mixins/Feed.ts:162](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/mixins/Feed.ts#L162)

Finds shelf by title.

#### Parameters

##### title

`string`

#### Returns

[`ReelShelf`](../../YTNodes/classes/ReelShelf.md) \| [`RichShelf`](../../YTNodes/classes/RichShelf.md) \| [`Shelf`](../../YTNodes/classes/Shelf.md) \| `undefined`

#### Inherited from

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`getShelf`](../../Mixins/classes/FilterableFeed.md#getshelf)

***

### getPlaylistsFromMemo()

> `static` **getPlaylistsFromMemo**(`memo`): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`GridPlaylist`](../../YTNodes/classes/GridPlaylist.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`Playlist`](../../YTNodes/classes/Playlist.md)\>

Defined in: [src/core/mixins/Feed.ts:94](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/mixins/Feed.ts#L94)

Get all playlists on a given page via memo

#### Parameters

##### memo

[`Memo`](../../Helpers/classes/Memo.md)

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`GridPlaylist`](../../YTNodes/classes/GridPlaylist.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`Playlist`](../../YTNodes/classes/Playlist.md)\>

#### Inherited from

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`getPlaylistsFromMemo`](../../Mixins/classes/FilterableFeed.md#getplaylistsfrommemo)

***

### getVideosFromMemo()

> `static` **getVideosFromMemo**(`memo`): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`CompactVideo`](../../YTNodes/classes/CompactVideo.md) \| [`GridVideo`](../../YTNodes/classes/GridVideo.md) \| [`PlaylistPanelVideo`](../../YTNodes/classes/PlaylistPanelVideo.md) \| [`PlaylistVideo`](../../YTNodes/classes/PlaylistVideo.md) \| [`ReelItem`](../../YTNodes/classes/ReelItem.md) \| [`ShortsLockupView`](../../YTNodes/classes/ShortsLockupView.md) \| [`Video`](../../YTNodes/classes/Video.md) \| [`WatchCardCompactVideo`](../../YTNodes/classes/WatchCardCompactVideo.md)\>

Defined in: [src/core/mixins/Feed.ts:78](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/mixins/Feed.ts#L78)

Get all videos on a given page via memo

#### Parameters

##### memo

[`Memo`](../../Helpers/classes/Memo.md)

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`CompactVideo`](../../YTNodes/classes/CompactVideo.md) \| [`GridVideo`](../../YTNodes/classes/GridVideo.md) \| [`PlaylistPanelVideo`](../../YTNodes/classes/PlaylistPanelVideo.md) \| [`PlaylistVideo`](../../YTNodes/classes/PlaylistVideo.md) \| [`ReelItem`](../../YTNodes/classes/ReelItem.md) \| [`ShortsLockupView`](../../YTNodes/classes/ShortsLockupView.md) \| [`Video`](../../YTNodes/classes/Video.md) \| [`WatchCardCompactVideo`](../../YTNodes/classes/WatchCardCompactVideo.md)\>

#### Inherited from

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`getVideosFromMemo`](../../Mixins/classes/FilterableFeed.md#getvideosfrommemo)
