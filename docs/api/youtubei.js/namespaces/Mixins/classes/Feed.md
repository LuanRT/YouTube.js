[youtubei.js](../../../../README.md) / [Mixins](../README.md) / Feed

# Class: Feed\<T\>

Defined in: [src/core/mixins/Feed.ts:43](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/core/mixins/Feed.ts#L43)

## Extended by

- [`ChannelListContinuation`](../../YT/classes/ChannelListContinuation.md)
- [`FilterableFeed`](FilterableFeed.md)
- [`TabbedFeed`](TabbedFeed.md)
- [`History`](../../YT/classes/History.md)
- [`Library`](../../YT/classes/Library.md)
- [`Playlist`](../../YT/classes/Playlist.md)
- [`Search`](../../YT/classes/Search.md)
- [`Channel`](../../YTKids/classes/Channel.md)
- [`HomeFeed`](../../YTKids/classes/HomeFeed.md)
- [`Search`](../../YTKids/classes/Search.md)

## Type Parameters

### T

`T` *extends* [`IParsedResponse`](../../../../interfaces/IParsedResponse.md) = [`IParsedResponse`](../../../../interfaces/IParsedResponse.md)

## Constructors

### Constructor

> **new Feed**\<`T`\>(`actions`, `response`, `already_parsed?`): `Feed`\<`T`\>

Defined in: [src/core/mixins/Feed.ts:50](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/core/mixins/Feed.ts#L50)

#### Parameters

##### actions

[`Actions`](../../../../classes/Actions.md)

##### response

[`IParsedResponse`](../../../../interfaces/IParsedResponse.md) \| [`ApiResponse`](../../../../interfaces/ApiResponse.md)

##### already\_parsed?

`boolean` = `false`

#### Returns

`Feed`\<`T`\>

## Accessors

### actions

#### Get Signature

> **get** **actions**(): [`Actions`](../../../../classes/Actions.md)

Defined in: [src/core/mixins/Feed.ts:184](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/core/mixins/Feed.ts#L184)

##### Returns

[`Actions`](../../../../classes/Actions.md)

***

### channels

#### Get Signature

> **get** **channels**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`Channel`](../../YTNodes/classes/Channel.md) \| [`GridChannel`](../../YTNodes/classes/GridChannel.md)\>

Defined in: [src/core/mixins/Feed.ts:130](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/core/mixins/Feed.ts#L130)

Get all the channels in the feed

##### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`Channel`](../../YTNodes/classes/Channel.md) \| [`GridChannel`](../../YTNodes/classes/GridChannel.md)\>

***

### has\_continuation

#### Get Signature

> **get** **has\_continuation**(): `boolean`

Defined in: [src/core/mixins/Feed.ts:198](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/core/mixins/Feed.ts#L198)

Checks if the feed has continuation.

##### Returns

`boolean`

***

### memo

#### Get Signature

> **get** **memo**(): [`Memo`](../../Helpers/classes/Memo.md)

Defined in: [src/core/mixins/Feed.ts:141](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/core/mixins/Feed.ts#L141)

##### Returns

[`Memo`](../../Helpers/classes/Memo.md)

***

### page

#### Get Signature

> **get** **page**(): `T`

Defined in: [src/core/mixins/Feed.ts:191](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/core/mixins/Feed.ts#L191)

Get the original page data

##### Returns

`T`

***

### page\_contents

#### Get Signature

> **get** **page\_contents**(): [`SectionList`](../../YTNodes/classes/SectionList.md) \| [`MusicQueue`](../../YTNodes/classes/MusicQueue.md) \| [`RichGrid`](../../YTNodes/classes/RichGrid.md) \| [`Message`](../../YTNodes/classes/Message.md) \| [`ReloadContinuationItemsCommand`](../../../../classes/ReloadContinuationItemsCommand.md)

Defined in: [src/core/mixins/Feed.ts:148](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/core/mixins/Feed.ts#L148)

Returns contents from the page.

##### Returns

[`SectionList`](../../YTNodes/classes/SectionList.md) \| [`MusicQueue`](../../YTNodes/classes/MusicQueue.md) \| [`RichGrid`](../../YTNodes/classes/RichGrid.md) \| [`Message`](../../YTNodes/classes/Message.md) \| [`ReloadContinuationItemsCommand`](../../../../classes/ReloadContinuationItemsCommand.md)

***

### playlists

#### Get Signature

> **get** **playlists**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`GridPlaylist`](../../YTNodes/classes/GridPlaylist.md) \| [`GridShow`](../../YTNodes/classes/GridShow.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`Playlist`](../../YTNodes/classes/Playlist.md)\>

Defined in: [src/core/mixins/Feed.ts:137](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/core/mixins/Feed.ts#L137)

Get all playlists in the feed

##### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`GridPlaylist`](../../YTNodes/classes/GridPlaylist.md) \| [`GridShow`](../../YTNodes/classes/GridShow.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`Playlist`](../../YTNodes/classes/Playlist.md)\>

***

### posts

#### Get Signature

> **get** **posts**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`BackstagePost`](../../YTNodes/classes/BackstagePost.md) \| [`Post`](../../YTNodes/classes/Post.md) \| [`SharedPost`](../../YTNodes/classes/SharedPost.md)\>

Defined in: [src/core/mixins/Feed.ts:123](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/core/mixins/Feed.ts#L123)

Get all the community posts in the feed

##### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`BackstagePost`](../../YTNodes/classes/BackstagePost.md) \| [`Post`](../../YTNodes/classes/Post.md) \| [`SharedPost`](../../YTNodes/classes/SharedPost.md)\>

***

### secondary\_contents

#### Get Signature

> **get** **secondary\_contents**(): [`SectionList`](../../YTNodes/classes/SectionList.md) \| [`BrowseFeedActions`](../../YTNodes/classes/BrowseFeedActions.md) \| [`ProfileColumn`](../../YTNodes/classes/ProfileColumn.md) \| [`SecondarySearchContainer`](../../YTNodes/classes/SecondarySearchContainer.md) \| `null`

Defined in: [src/core/mixins/Feed.ts:172](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/core/mixins/Feed.ts#L172)

Returns secondary contents from the page.

##### Returns

[`SectionList`](../../YTNodes/classes/SectionList.md) \| [`BrowseFeedActions`](../../YTNodes/classes/BrowseFeedActions.md) \| [`ProfileColumn`](../../YTNodes/classes/ProfileColumn.md) \| [`SecondarySearchContainer`](../../YTNodes/classes/SecondarySearchContainer.md) \| `null`

***

### shelves

#### Get Signature

> **get** **shelves**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`ReelShelf`](../../YTNodes/classes/ReelShelf.md) \| [`RichShelf`](../../YTNodes/classes/RichShelf.md) \| [`Shelf`](../../YTNodes/classes/Shelf.md)\>

Defined in: [src/core/mixins/Feed.ts:158](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/core/mixins/Feed.ts#L158)

Returns all segments/sections from the page.

##### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`ReelShelf`](../../YTNodes/classes/ReelShelf.md) \| [`RichShelf`](../../YTNodes/classes/RichShelf.md) \| [`Shelf`](../../YTNodes/classes/Shelf.md)\>

***

### videos

#### Get Signature

> **get** **videos**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`CompactVideo`](../../YTNodes/classes/CompactVideo.md) \| [`GridVideo`](../../YTNodes/classes/GridVideo.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`PlaylistPanelVideo`](../../YTNodes/classes/PlaylistPanelVideo.md) \| [`PlaylistVideo`](../../YTNodes/classes/PlaylistVideo.md) \| [`ReelItem`](../../YTNodes/classes/ReelItem.md) \| [`ShortsLockupView`](../../YTNodes/classes/ShortsLockupView.md) \| [`Video`](../../YTNodes/classes/Video.md) \| [`WatchCardCompactVideo`](../../YTNodes/classes/WatchCardCompactVideo.md)\>

Defined in: [src/core/mixins/Feed.ts:116](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/core/mixins/Feed.ts#L116)

Get all the videos in the feed

##### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`CompactVideo`](../../YTNodes/classes/CompactVideo.md) \| [`GridVideo`](../../YTNodes/classes/GridVideo.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`PlaylistPanelVideo`](../../YTNodes/classes/PlaylistPanelVideo.md) \| [`PlaylistVideo`](../../YTNodes/classes/PlaylistVideo.md) \| [`ReelItem`](../../YTNodes/classes/ReelItem.md) \| [`ShortsLockupView`](../../YTNodes/classes/ShortsLockupView.md) \| [`Video`](../../YTNodes/classes/Video.md) \| [`WatchCardCompactVideo`](../../YTNodes/classes/WatchCardCompactVideo.md)\>

## Methods

### getContinuation()

> **getContinuation**(): `Promise`\<`Feed`\<`T`\>\>

Defined in: [src/core/mixins/Feed.ts:222](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/core/mixins/Feed.ts#L222)

Retrieves next batch of contents and returns a new Feed object.

#### Returns

`Promise`\<`Feed`\<`T`\>\>

***

### getContinuationData()

> **getContinuationData**(): `Promise`\<`T` \| `undefined`\>

Defined in: [src/core/mixins/Feed.ts:205](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/core/mixins/Feed.ts#L205)

Retrieves continuation data as it is.

#### Returns

`Promise`\<`T` \| `undefined`\>

***

### getShelf()

> **getShelf**(`title`): [`ReelShelf`](../../YTNodes/classes/ReelShelf.md) \| [`RichShelf`](../../YTNodes/classes/RichShelf.md) \| [`Shelf`](../../YTNodes/classes/Shelf.md) \| `undefined`

Defined in: [src/core/mixins/Feed.ts:165](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/core/mixins/Feed.ts#L165)

Finds shelf by title.

#### Parameters

##### title

`string`

#### Returns

[`ReelShelf`](../../YTNodes/classes/ReelShelf.md) \| [`RichShelf`](../../YTNodes/classes/RichShelf.md) \| [`Shelf`](../../YTNodes/classes/Shelf.md) \| `undefined`

***

### getPlaylistsFromMemo()

> `static` **getPlaylistsFromMemo**(`memo`): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`GridPlaylist`](../../YTNodes/classes/GridPlaylist.md) \| [`GridShow`](../../YTNodes/classes/GridShow.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`Playlist`](../../YTNodes/classes/Playlist.md)\>

Defined in: [src/core/mixins/Feed.ts:98](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/core/mixins/Feed.ts#L98)

Get all playlists on a given page via memo

#### Parameters

##### memo

[`Memo`](../../Helpers/classes/Memo.md)

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`GridPlaylist`](../../YTNodes/classes/GridPlaylist.md) \| [`GridShow`](../../YTNodes/classes/GridShow.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`Playlist`](../../YTNodes/classes/Playlist.md)\>

***

### getVideosFromMemo()

> `static` **getVideosFromMemo**(`memo`): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`CompactVideo`](../../YTNodes/classes/CompactVideo.md) \| [`GridVideo`](../../YTNodes/classes/GridVideo.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`PlaylistPanelVideo`](../../YTNodes/classes/PlaylistPanelVideo.md) \| [`PlaylistVideo`](../../YTNodes/classes/PlaylistVideo.md) \| [`ReelItem`](../../YTNodes/classes/ReelItem.md) \| [`ShortsLockupView`](../../YTNodes/classes/ShortsLockupView.md) \| [`Video`](../../YTNodes/classes/Video.md) \| [`WatchCardCompactVideo`](../../YTNodes/classes/WatchCardCompactVideo.md)\>

Defined in: [src/core/mixins/Feed.ts:81](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/core/mixins/Feed.ts#L81)

Get all videos on a given page via memo

#### Parameters

##### memo

[`Memo`](../../Helpers/classes/Memo.md)

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`CompactVideo`](../../YTNodes/classes/CompactVideo.md) \| [`GridVideo`](../../YTNodes/classes/GridVideo.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`PlaylistPanelVideo`](../../YTNodes/classes/PlaylistPanelVideo.md) \| [`PlaylistVideo`](../../YTNodes/classes/PlaylistVideo.md) \| [`ReelItem`](../../YTNodes/classes/ReelItem.md) \| [`ShortsLockupView`](../../YTNodes/classes/ShortsLockupView.md) \| [`Video`](../../YTNodes/classes/Video.md) \| [`WatchCardCompactVideo`](../../YTNodes/classes/WatchCardCompactVideo.md)\>
