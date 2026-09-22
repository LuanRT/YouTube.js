[youtubei.js](../../../../README.md) / [YT](../README.md) / FilteredChannelList

# Class: FilteredChannelList

Defined in: [src/parser/youtube/Channel.ts:458](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/youtube/Channel.ts#L458)

## Extends

- [`FilterableFeed`](../../Mixins/classes/FilterableFeed.md)\<[`IBrowseResponse`](../../../../type-aliases/IBrowseResponse.md)\>

## Constructors

### Constructor

> **new FilteredChannelList**(`actions`, `data`, `already_parsed?`): `FilteredChannelList`

Defined in: [src/parser/youtube/Channel.ts:463](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/youtube/Channel.ts#L463)

#### Parameters

##### actions

[`Actions`](../../../../classes/Actions.md)

##### data

[`ApiResponse`](../../../../interfaces/ApiResponse.md) \| [`IBrowseResponse`](../../../../type-aliases/IBrowseResponse.md)

##### already\_parsed?

`boolean` = `false`

#### Returns

`FilteredChannelList`

#### Overrides

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`constructor`](../../Mixins/classes/FilterableFeed.md#constructor)

## Properties

### contents?

> `optional` **contents?**: [`OpenPopupAction`](../../YTNodes/classes/OpenPopupAction.md) \| [`AppendContinuationItemsAction`](../../../../classes/AppendContinuationItemsAction.md) \| [`ReloadContinuationItemsCommand`](../../../../classes/ReloadContinuationItemsCommand.md) \| [`NavigateAction`](../../../../classes/NavigateAction.md) \| [`ShowMiniplayerCommand`](../../../../classes/ShowMiniplayerCommand.md)

Defined in: [src/parser/youtube/Channel.ts:461](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/youtube/Channel.ts#L461)

***

### filter?

> `optional` **filter?**: [`ListItemView`](../../YTNodes/classes/ListItemView.md) \| [`ChipView`](../../YTNodes/classes/ChipView.md)

Defined in: [src/parser/youtube/Channel.ts:459](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/youtube/Channel.ts#L459)

***

### secondary\_filter?

> `optional` **secondary\_filter?**: [`ChipView`](../../YTNodes/classes/ChipView.md)

Defined in: [src/parser/youtube/Channel.ts:460](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/youtube/Channel.ts#L460)

## Accessors

### actions

#### Get Signature

> **get** **actions**(): [`Actions`](../../../../classes/Actions.md)

Defined in: [src/core/mixins/Feed.ts:183](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/mixins/Feed.ts#L183)

##### Returns

[`Actions`](../../../../classes/Actions.md)

#### Inherited from

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`actions`](../../Mixins/classes/FilterableFeed.md#actions)

***

### channels

#### Get Signature

> **get** **channels**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`Channel`](../../YTNodes/classes/Channel.md) \| [`GridChannel`](../../YTNodes/classes/GridChannel.md)\>

Defined in: [src/core/mixins/Feed.ts:129](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/mixins/Feed.ts#L129)

Get all the channels in the feed

##### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`Channel`](../../YTNodes/classes/Channel.md) \| [`GridChannel`](../../YTNodes/classes/GridChannel.md)\>

#### Inherited from

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`channels`](../../Mixins/classes/FilterableFeed.md#channels)

***

### filter\_nodes

#### Get Signature

> **get** **filter\_nodes**(): `FilterNodes`

Defined in: [src/core/mixins/FilterableFeed.ts:31](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/mixins/FilterableFeed.ts#L31)

Returns the InnerTube renderer nodes representing filters.

##### Returns

`FilterNodes`

#### Inherited from

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`filter_nodes`](../../Mixins/classes/FilterableFeed.md#filter_nodes)

***

### filters

#### Get Signature

> **get** **filters**(): `string`[]

Defined in: [src/core/mixins/FilterableFeed.ts:78](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/mixins/FilterableFeed.ts#L78)

Returns the available primary filters as strings.

##### Returns

`string`[]

#### Inherited from

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`filters`](../../Mixins/classes/FilterableFeed.md#filters)

***

### has\_continuation

#### Get Signature

> **get** **has\_continuation**(): `boolean`

Defined in: [src/core/mixins/Feed.ts:197](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/mixins/Feed.ts#L197)

Checks if the feed has continuation.

##### Returns

`boolean`

#### Inherited from

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`has_continuation`](../../Mixins/classes/FilterableFeed.md#has_continuation)

***

### memo

#### Get Signature

> **get** **memo**(): [`Memo`](../../Helpers/classes/Memo.md)

Defined in: [src/core/mixins/Feed.ts:140](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/mixins/Feed.ts#L140)

##### Returns

[`Memo`](../../Helpers/classes/Memo.md)

#### Inherited from

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`memo`](../../Mixins/classes/FilterableFeed.md#memo)

***

### page

#### Get Signature

> **get** **page**(): `T`

Defined in: [src/core/mixins/Feed.ts:190](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/mixins/Feed.ts#L190)

Get the original page data

##### Returns

`T`

#### Inherited from

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`page`](../../Mixins/classes/FilterableFeed.md#page)

***

### page\_contents

#### Get Signature

> **get** **page\_contents**(): [`SectionList`](../../YTNodes/classes/SectionList.md) \| [`MusicQueue`](../../YTNodes/classes/MusicQueue.md) \| [`RichGrid`](../../YTNodes/classes/RichGrid.md) \| [`ReloadContinuationItemsCommand`](../../../../classes/ReloadContinuationItemsCommand.md)

Defined in: [src/core/mixins/Feed.ts:147](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/mixins/Feed.ts#L147)

Returns contents from the page.

##### Returns

[`SectionList`](../../YTNodes/classes/SectionList.md) \| [`MusicQueue`](../../YTNodes/classes/MusicQueue.md) \| [`RichGrid`](../../YTNodes/classes/RichGrid.md) \| [`ReloadContinuationItemsCommand`](../../../../classes/ReloadContinuationItemsCommand.md)

#### Inherited from

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`page_contents`](../../Mixins/classes/FilterableFeed.md#page_contents)

***

### playlists

#### Get Signature

> **get** **playlists**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`GridPlaylist`](../../YTNodes/classes/GridPlaylist.md) \| [`GridShow`](../../YTNodes/classes/GridShow.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`Playlist`](../../YTNodes/classes/Playlist.md)\>

Defined in: [src/core/mixins/Feed.ts:136](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/mixins/Feed.ts#L136)

Get all playlists in the feed

##### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`GridPlaylist`](../../YTNodes/classes/GridPlaylist.md) \| [`GridShow`](../../YTNodes/classes/GridShow.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`Playlist`](../../YTNodes/classes/Playlist.md)\>

#### Inherited from

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`playlists`](../../Mixins/classes/FilterableFeed.md#playlists)

***

### posts

#### Get Signature

> **get** **posts**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`BackstagePost`](../../YTNodes/classes/BackstagePost.md) \| [`Post`](../../YTNodes/classes/Post.md) \| [`SharedPost`](../../YTNodes/classes/SharedPost.md)\>

Defined in: [src/core/mixins/Feed.ts:122](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/mixins/Feed.ts#L122)

Get all the community posts in the feed

##### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`BackstagePost`](../../YTNodes/classes/BackstagePost.md) \| [`Post`](../../YTNodes/classes/Post.md) \| [`SharedPost`](../../YTNodes/classes/SharedPost.md)\>

#### Inherited from

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`posts`](../../Mixins/classes/FilterableFeed.md#posts)

***

### secondary\_contents

#### Get Signature

> **get** **secondary\_contents**(): [`SectionList`](../../YTNodes/classes/SectionList.md) \| [`BrowseFeedActions`](../../YTNodes/classes/BrowseFeedActions.md) \| [`ProfileColumn`](../../YTNodes/classes/ProfileColumn.md) \| [`SecondarySearchContainer`](../../YTNodes/classes/SecondarySearchContainer.md) \| `null`

Defined in: [src/core/mixins/Feed.ts:171](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/mixins/Feed.ts#L171)

Returns secondary contents from the page.

##### Returns

[`SectionList`](../../YTNodes/classes/SectionList.md) \| [`BrowseFeedActions`](../../YTNodes/classes/BrowseFeedActions.md) \| [`ProfileColumn`](../../YTNodes/classes/ProfileColumn.md) \| [`SecondarySearchContainer`](../../YTNodes/classes/SecondarySearchContainer.md) \| `null`

#### Inherited from

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`secondary_contents`](../../Mixins/classes/FilterableFeed.md#secondary_contents)

***

### secondary\_filters

#### Get Signature

> **get** **secondary\_filters**(): `string`[]

Defined in: [src/core/mixins/FilterableFeed.ts:92](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/mixins/FilterableFeed.ts#L92)

Returns the available secondary filters as strings.

##### Returns

`string`[]

#### Inherited from

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`secondary_filters`](../../Mixins/classes/FilterableFeed.md#secondary_filters)

***

### shelves

#### Get Signature

> **get** **shelves**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`ReelShelf`](../../YTNodes/classes/ReelShelf.md) \| [`RichShelf`](../../YTNodes/classes/RichShelf.md) \| [`Shelf`](../../YTNodes/classes/Shelf.md)\>

Defined in: [src/core/mixins/Feed.ts:157](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/mixins/Feed.ts#L157)

Returns all segments/sections from the page.

##### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`ReelShelf`](../../YTNodes/classes/ReelShelf.md) \| [`RichShelf`](../../YTNodes/classes/RichShelf.md) \| [`Shelf`](../../YTNodes/classes/Shelf.md)\>

#### Inherited from

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`shelves`](../../Mixins/classes/FilterableFeed.md#shelves)

***

### videos

#### Get Signature

> **get** **videos**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`CompactVideo`](../../YTNodes/classes/CompactVideo.md) \| [`GridVideo`](../../YTNodes/classes/GridVideo.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`PlaylistPanelVideo`](../../YTNodes/classes/PlaylistPanelVideo.md) \| [`PlaylistVideo`](../../YTNodes/classes/PlaylistVideo.md) \| [`ReelItem`](../../YTNodes/classes/ReelItem.md) \| [`ShortsLockupView`](../../YTNodes/classes/ShortsLockupView.md) \| [`Video`](../../YTNodes/classes/Video.md) \| [`WatchCardCompactVideo`](../../YTNodes/classes/WatchCardCompactVideo.md)\>

Defined in: [src/core/mixins/Feed.ts:115](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/mixins/Feed.ts#L115)

Get all the videos in the feed

##### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`CompactVideo`](../../YTNodes/classes/CompactVideo.md) \| [`GridVideo`](../../YTNodes/classes/GridVideo.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`PlaylistPanelVideo`](../../YTNodes/classes/PlaylistPanelVideo.md) \| [`PlaylistVideo`](../../YTNodes/classes/PlaylistVideo.md) \| [`ReelItem`](../../YTNodes/classes/ReelItem.md) \| [`ShortsLockupView`](../../YTNodes/classes/ShortsLockupView.md) \| [`Video`](../../YTNodes/classes/Video.md) \| [`WatchCardCompactVideo`](../../YTNodes/classes/WatchCardCompactVideo.md)\>

#### Inherited from

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`videos`](../../Mixins/classes/FilterableFeed.md#videos)

## Methods

### applyFilter()

> **applyFilter**(`filter`, `secondaryFilter?`): `Promise`\<`FilteredChannelList`\>

Defined in: [src/parser/youtube/Channel.ts:505](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/youtube/Channel.ts#L505)

Applies given filter to the list.

#### Parameters

##### filter

`string` \| [`ListItemView`](../../YTNodes/classes/ListItemView.md) \| [`ChipCloudChip`](../../YTNodes/classes/ChipCloudChip.md) \| [`ChipView`](../../YTNodes/classes/ChipView.md)

The filter to apply

##### secondaryFilter?

`string` \| [`ChipView`](../../YTNodes/classes/ChipView.md)

#### Returns

`Promise`\<`FilteredChannelList`\>

***

### getContinuation()

> **getContinuation**(): `Promise`\<`FilteredChannelList`\>

Defined in: [src/parser/youtube/Channel.ts:510](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/youtube/Channel.ts#L510)

Retrieves next batch of contents and returns a new [Feed](../../Mixins/classes/Feed.md) object.

#### Returns

`Promise`\<`FilteredChannelList`\>

#### Overrides

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`getContinuation`](../../Mixins/classes/FilterableFeed.md#getcontinuation)

***

### getContinuationData()

> **getContinuationData**(): `Promise`\<[`IBrowseResponse`](../../../../type-aliases/IBrowseResponse.md) \| `undefined`\>

Defined in: [src/core/mixins/Feed.ts:204](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/mixins/Feed.ts#L204)

Retrieves continuation data as it is.

#### Returns

`Promise`\<[`IBrowseResponse`](../../../../type-aliases/IBrowseResponse.md) \| `undefined`\>

#### Inherited from

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`getContinuationData`](../../Mixins/classes/FilterableFeed.md#getcontinuationdata)

***

### getFilteredFeed()

> **getFilteredFeed**(`filter`, `secondaryFilter?`): `Promise`\<[`Feed`](../../Mixins/classes/Feed.md)\<[`IBrowseResponse`](../../../../type-aliases/IBrowseResponse.md)\>\>

Defined in: [src/core/mixins/FilterableFeed.ts:99](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/mixins/FilterableFeed.ts#L99)

Applies given filter and returns a new [Feed](../../Mixins/classes/Feed.md) object.

#### Parameters

##### filter

`string` \| [`ListItemView`](../../YTNodes/classes/ListItemView.md) \| [`ChipCloudChip`](../../YTNodes/classes/ChipCloudChip.md) \| [`ChipView`](../../YTNodes/classes/ChipView.md)

##### secondaryFilter?

`string` \| [`ChipView`](../../YTNodes/classes/ChipView.md)

#### Returns

`Promise`\<[`Feed`](../../Mixins/classes/Feed.md)\<[`IBrowseResponse`](../../../../type-aliases/IBrowseResponse.md)\>\>

#### Inherited from

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`getFilteredFeed`](../../Mixins/classes/FilterableFeed.md#getfilteredfeed)

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

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`getShelf`](../../Mixins/classes/FilterableFeed.md#getshelf)

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

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`getPlaylistsFromMemo`](../../Mixins/classes/FilterableFeed.md#getplaylistsfrommemo)

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

[`FilterableFeed`](../../Mixins/classes/FilterableFeed.md).[`getVideosFromMemo`](../../Mixins/classes/FilterableFeed.md#getvideosfrommemo)
