[youtubei.js](../../../README.md) / [Mixins](../README.md) / TabbedFeed

# Class: TabbedFeed\<T\>

## Extends

- [`Feed`](Feed.md)\<`T`\>

## Extended by

- [`Channel`](../../YT/classes/Channel.md)

## Type Parameters

• **T** *extends* [`IParsedResponse`](../../APIResponseTypes/interfaces/IParsedResponse.md)

## Constructors

### new TabbedFeed()

> **new TabbedFeed**\<`T`\>(`actions`, `data`, `already_parsed`): [`TabbedFeed`](TabbedFeed.md)\<`T`\>

#### Parameters

• **actions**: [`Actions`](../../../classes/Actions.md)

• **data**: [`ApiResponse`](../../../interfaces/ApiResponse.md) \| [`IParsedResponse`](../../APIResponseTypes/interfaces/IParsedResponse.md)

• **already\_parsed**: `boolean` = `false`

#### Returns

[`TabbedFeed`](TabbedFeed.md)\<`T`\>

#### Overrides

[`Feed`](Feed.md).[`constructor`](Feed.md#constructors)

#### Defined in

[src/core/mixins/TabbedFeed.ts:13](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/TabbedFeed.ts#L13)

## Accessors

### actions

> `get` **actions**(): [`Actions`](../../../classes/Actions.md)

#### Returns

[`Actions`](../../../classes/Actions.md)

#### Inherited from

[`Feed`](Feed.md).[`actions`](Feed.md#actions)

#### Defined in

[src/core/mixins/Feed.ts:178](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/Feed.ts#L178)

***

### channels

> `get` **channels**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`Channel`](../../YTNodes/classes/Channel.md) \| [`GridChannel`](../../YTNodes/classes/GridChannel.md)\>

Get all the channels in the feed

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`Channel`](../../YTNodes/classes/Channel.md) \| [`GridChannel`](../../YTNodes/classes/GridChannel.md)\>

#### Inherited from

[`Feed`](Feed.md).[`channels`](Feed.md#channels)

#### Defined in

[src/core/mixins/Feed.ts:123](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/Feed.ts#L123)

***

### has\_continuation

> `get` **has\_continuation**(): `boolean`

Checks if the feed has continuation.

#### Returns

`boolean`

#### Inherited from

[`Feed`](Feed.md).[`has_continuation`](Feed.md#has_continuation)

#### Defined in

[src/core/mixins/Feed.ts:192](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/Feed.ts#L192)

***

### memo

> `get` **memo**(): [`Memo`](../../Helpers/classes/Memo.md)

#### Returns

[`Memo`](../../Helpers/classes/Memo.md)

#### Inherited from

[`Feed`](Feed.md).[`memo`](Feed.md#memo)

#### Defined in

[src/core/mixins/Feed.ts:134](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/Feed.ts#L134)

***

### page

> `get` **page**(): `T`

Get the original page data

#### Returns

`T`

#### Inherited from

[`Feed`](Feed.md).[`page`](Feed.md#page)

#### Defined in

[src/core/mixins/Feed.ts:185](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/Feed.ts#L185)

***

### page\_contents

> `get` **page\_contents**(): [`ReloadContinuationItemsCommand`](../../../classes/ReloadContinuationItemsCommand.md) \| [`SectionList`](../../YTNodes/classes/SectionList.md) \| [`MusicQueue`](../../YTNodes/classes/MusicQueue.md) \| [`RichGrid`](../../YTNodes/classes/RichGrid.md)

Returns contents from the page.

#### Returns

[`ReloadContinuationItemsCommand`](../../../classes/ReloadContinuationItemsCommand.md) \| [`SectionList`](../../YTNodes/classes/SectionList.md) \| [`MusicQueue`](../../YTNodes/classes/MusicQueue.md) \| [`RichGrid`](../../YTNodes/classes/RichGrid.md)

#### Inherited from

[`Feed`](Feed.md).[`page_contents`](Feed.md#page_contents)

#### Defined in

[src/core/mixins/Feed.ts:141](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/Feed.ts#L141)

***

### playlists

> `get` **playlists**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`GridPlaylist`](../../YTNodes/classes/GridPlaylist.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`Playlist`](../../YTNodes/classes/Playlist.md)\>

Get all playlists in the feed

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`GridPlaylist`](../../YTNodes/classes/GridPlaylist.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`Playlist`](../../YTNodes/classes/Playlist.md)\>

#### Inherited from

[`Feed`](Feed.md).[`playlists`](Feed.md#playlists)

#### Defined in

[src/core/mixins/Feed.ts:130](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/Feed.ts#L130)

***

### posts

> `get` **posts**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`BackstagePost`](../../YTNodes/classes/BackstagePost.md) \| [`Post`](../../YTNodes/classes/Post.md) \| [`SharedPost`](../../YTNodes/classes/SharedPost.md)\>

Get all the community posts in the feed

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`BackstagePost`](../../YTNodes/classes/BackstagePost.md) \| [`Post`](../../YTNodes/classes/Post.md) \| [`SharedPost`](../../YTNodes/classes/SharedPost.md)\>

#### Inherited from

[`Feed`](Feed.md).[`posts`](Feed.md#posts)

#### Defined in

[src/core/mixins/Feed.ts:116](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/Feed.ts#L116)

***

### secondary\_contents

> `get` **secondary\_contents**(): `undefined` \| [`SuperParsedResult`](../../Helpers/classes/SuperParsedResult.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

Returns secondary contents from the page.

#### Returns

`undefined` \| [`SuperParsedResult`](../../Helpers/classes/SuperParsedResult.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

#### Inherited from

[`Feed`](Feed.md).[`secondary_contents`](Feed.md#secondary_contents)

#### Defined in

[src/core/mixins/Feed.ts:166](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/Feed.ts#L166)

***

### shelves

> `get` **shelves**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`ReelShelf`](../../YTNodes/classes/ReelShelf.md) \| [`RichShelf`](../../YTNodes/classes/RichShelf.md) \| [`Shelf`](../../YTNodes/classes/Shelf.md)\>

Returns all segments/sections from the page.

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`ReelShelf`](../../YTNodes/classes/ReelShelf.md) \| [`RichShelf`](../../YTNodes/classes/RichShelf.md) \| [`Shelf`](../../YTNodes/classes/Shelf.md)\>

#### Inherited from

[`Feed`](Feed.md).[`shelves`](Feed.md#shelves)

#### Defined in

[src/core/mixins/Feed.ts:152](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/Feed.ts#L152)

***

### tabs

> `get` **tabs**(): `string`[]

#### Returns

`string`[]

#### Defined in

[src/core/mixins/TabbedFeed.ts:19](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/TabbedFeed.ts#L19)

***

### title

> `get` **title**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/core/mixins/TabbedFeed.ts:55](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/TabbedFeed.ts#L55)

***

### videos

> `get` **videos**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`Video`](../../YTNodes/classes/Video.md) \| [`CompactVideo`](../../YTNodes/classes/CompactVideo.md) \| [`GridVideo`](../../YTNodes/classes/GridVideo.md) \| [`PlaylistPanelVideo`](../../YTNodes/classes/PlaylistPanelVideo.md) \| [`PlaylistVideo`](../../YTNodes/classes/PlaylistVideo.md) \| [`ReelItem`](../../YTNodes/classes/ReelItem.md) \| [`ShortsLockupView`](../../YTNodes/classes/ShortsLockupView.md) \| [`WatchCardCompactVideo`](../../YTNodes/classes/WatchCardCompactVideo.md)\>

Get all the videos in the feed

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`Video`](../../YTNodes/classes/Video.md) \| [`CompactVideo`](../../YTNodes/classes/CompactVideo.md) \| [`GridVideo`](../../YTNodes/classes/GridVideo.md) \| [`PlaylistPanelVideo`](../../YTNodes/classes/PlaylistPanelVideo.md) \| [`PlaylistVideo`](../../YTNodes/classes/PlaylistVideo.md) \| [`ReelItem`](../../YTNodes/classes/ReelItem.md) \| [`ShortsLockupView`](../../YTNodes/classes/ShortsLockupView.md) \| [`WatchCardCompactVideo`](../../YTNodes/classes/WatchCardCompactVideo.md)\>

#### Inherited from

[`Feed`](Feed.md).[`videos`](Feed.md#videos)

#### Defined in

[src/core/mixins/Feed.ts:109](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/Feed.ts#L109)

## Methods

### getContinuation()

> **getContinuation**(): `Promise`\<[`Feed`](Feed.md)\<`T`\>\>

Retrieves next batch of contents and returns a new [Feed](Feed.md) object.

#### Returns

`Promise`\<[`Feed`](Feed.md)\<`T`\>\>

#### Inherited from

[`Feed`](Feed.md).[`getContinuation`](Feed.md#getcontinuation)

#### Defined in

[src/core/mixins/Feed.ts:216](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/Feed.ts#L216)

***

### getContinuationData()

> **getContinuationData**(): `Promise`\<`undefined` \| `T`\>

Retrieves continuation data as it is.

#### Returns

`Promise`\<`undefined` \| `T`\>

#### Inherited from

[`Feed`](Feed.md).[`getContinuationData`](Feed.md#getcontinuationdata)

#### Defined in

[src/core/mixins/Feed.ts:199](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/Feed.ts#L199)

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

[src/core/mixins/Feed.ts:159](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/Feed.ts#L159)

***

### getTabByName()

> **getTabByName**(`title`): `Promise`\<[`TabbedFeed`](TabbedFeed.md)\<`T`\>\>

#### Parameters

• **title**: `string`

#### Returns

`Promise`\<[`TabbedFeed`](TabbedFeed.md)\<`T`\>\>

#### Defined in

[src/core/mixins/TabbedFeed.ts:23](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/TabbedFeed.ts#L23)

***

### getTabByURL()

> **getTabByURL**(`url`): `Promise`\<[`TabbedFeed`](TabbedFeed.md)\<`T`\>\>

#### Parameters

• **url**: `string`

#### Returns

`Promise`\<[`TabbedFeed`](TabbedFeed.md)\<`T`\>\>

#### Defined in

[src/core/mixins/TabbedFeed.ts:37](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/TabbedFeed.ts#L37)

***

### hasTabWithURL()

> **hasTabWithURL**(`url`): `boolean`

#### Parameters

• **url**: `string`

#### Returns

`boolean`

#### Defined in

[src/core/mixins/TabbedFeed.ts:51](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/TabbedFeed.ts#L51)

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

[src/core/mixins/Feed.ts:91](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/Feed.ts#L91)

***

### getVideosFromMemo()

> `static` **getVideosFromMemo**(`memo`): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`Video`](../../YTNodes/classes/Video.md) \| [`CompactVideo`](../../YTNodes/classes/CompactVideo.md) \| [`GridVideo`](../../YTNodes/classes/GridVideo.md) \| [`PlaylistPanelVideo`](../../YTNodes/classes/PlaylistPanelVideo.md) \| [`PlaylistVideo`](../../YTNodes/classes/PlaylistVideo.md) \| [`ReelItem`](../../YTNodes/classes/ReelItem.md) \| [`ShortsLockupView`](../../YTNodes/classes/ShortsLockupView.md) \| [`WatchCardCompactVideo`](../../YTNodes/classes/WatchCardCompactVideo.md)\>

Get all videos on a given page via memo

#### Parameters

• **memo**: [`Memo`](../../Helpers/classes/Memo.md)

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`Video`](../../YTNodes/classes/Video.md) \| [`CompactVideo`](../../YTNodes/classes/CompactVideo.md) \| [`GridVideo`](../../YTNodes/classes/GridVideo.md) \| [`PlaylistPanelVideo`](../../YTNodes/classes/PlaylistPanelVideo.md) \| [`PlaylistVideo`](../../YTNodes/classes/PlaylistVideo.md) \| [`ReelItem`](../../YTNodes/classes/ReelItem.md) \| [`ShortsLockupView`](../../YTNodes/classes/ShortsLockupView.md) \| [`WatchCardCompactVideo`](../../YTNodes/classes/WatchCardCompactVideo.md)\>

#### Inherited from

[`Feed`](Feed.md).[`getVideosFromMemo`](Feed.md#getvideosfrommemo)

#### Defined in

[src/core/mixins/Feed.ts:75](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/Feed.ts#L75)
