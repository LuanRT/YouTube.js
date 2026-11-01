[youtubei.js](../../../../README.md) / [YT](../README.md) / History

# Class: History

Defined in: [src/parser/youtube/History.ts:23](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/youtube/History.ts#L23)

## Extends

- [`Feed`](../../Mixins/classes/Feed.md)\<[`IBrowseResponse`](../../../../type-aliases/IBrowseResponse.md)\>

## Constructors

### Constructor

> **new History**(`actions`, `data`, `already_parsed?`): `History`

Defined in: [src/parser/youtube/History.ts:27](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/youtube/History.ts#L27)

#### Parameters

##### actions

[`Actions`](../../../../classes/Actions.md)

##### data

[`ApiResponse`](../../../../interfaces/ApiResponse.md) \| [`IBrowseResponse`](../../../../type-aliases/IBrowseResponse.md)

##### already\_parsed?

`boolean` = `false`

#### Returns

`History`

#### Overrides

[`Feed`](../../Mixins/classes/Feed.md).[`constructor`](../../Mixins/classes/Feed.md#constructor)

## Properties

### feed\_actions

> **feed\_actions**: [`BrowseFeedActions`](../../YTNodes/classes/BrowseFeedActions.md)

Defined in: [src/parser/youtube/History.ts:25](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/youtube/History.ts#L25)

***

### sections

> **sections**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`ItemSection`](../../YTNodes/classes/ItemSection.md)\>

Defined in: [src/parser/youtube/History.ts:24](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/youtube/History.ts#L24)

## Accessors

### actions

#### Get Signature

> **get** **actions**(): [`Actions`](../../../../classes/Actions.md)

Defined in: [src/core/mixins/Feed.ts:184](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/core/mixins/Feed.ts#L184)

##### Returns

[`Actions`](../../../../classes/Actions.md)

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`actions`](../../Mixins/classes/Feed.md#actions)

***

### channels

#### Get Signature

> **get** **channels**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`Channel`](../../YTNodes/classes/Channel.md) \| [`GridChannel`](../../YTNodes/classes/GridChannel.md)\>

Defined in: [src/core/mixins/Feed.ts:130](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/core/mixins/Feed.ts#L130)

Get all the channels in the feed

##### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`Channel`](../../YTNodes/classes/Channel.md) \| [`GridChannel`](../../YTNodes/classes/GridChannel.md)\>

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`channels`](../../Mixins/classes/Feed.md#channels)

***

### has\_continuation

#### Get Signature

> **get** **has\_continuation**(): `boolean`

Defined in: [src/core/mixins/Feed.ts:198](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/core/mixins/Feed.ts#L198)

Checks if the feed has continuation.

##### Returns

`boolean`

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`has_continuation`](../../Mixins/classes/Feed.md#has_continuation)

***

### memo

#### Get Signature

> **get** **memo**(): [`Memo`](../../Helpers/classes/Memo.md)

Defined in: [src/core/mixins/Feed.ts:141](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/core/mixins/Feed.ts#L141)

##### Returns

[`Memo`](../../Helpers/classes/Memo.md)

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`memo`](../../Mixins/classes/Feed.md#memo)

***

### page

#### Get Signature

> **get** **page**(): `T`

Defined in: [src/core/mixins/Feed.ts:191](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/core/mixins/Feed.ts#L191)

Get the original page data

##### Returns

`T`

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`page`](../../Mixins/classes/Feed.md#page)

***

### page\_contents

#### Get Signature

> **get** **page\_contents**(): [`SectionList`](../../YTNodes/classes/SectionList.md) \| [`MusicQueue`](../../YTNodes/classes/MusicQueue.md) \| [`RichGrid`](../../YTNodes/classes/RichGrid.md) \| [`Message`](../../YTNodes/classes/Message.md) \| [`ReloadContinuationItemsCommand`](../../../../classes/ReloadContinuationItemsCommand.md)

Defined in: [src/core/mixins/Feed.ts:148](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/core/mixins/Feed.ts#L148)

Returns contents from the page.

##### Returns

[`SectionList`](../../YTNodes/classes/SectionList.md) \| [`MusicQueue`](../../YTNodes/classes/MusicQueue.md) \| [`RichGrid`](../../YTNodes/classes/RichGrid.md) \| [`Message`](../../YTNodes/classes/Message.md) \| [`ReloadContinuationItemsCommand`](../../../../classes/ReloadContinuationItemsCommand.md)

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`page_contents`](../../Mixins/classes/Feed.md#page_contents)

***

### playlists

#### Get Signature

> **get** **playlists**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`GridPlaylist`](../../YTNodes/classes/GridPlaylist.md) \| [`GridShow`](../../YTNodes/classes/GridShow.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`Playlist`](../../YTNodes/classes/Playlist.md)\>

Defined in: [src/core/mixins/Feed.ts:137](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/core/mixins/Feed.ts#L137)

Get all playlists in the feed

##### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`GridPlaylist`](../../YTNodes/classes/GridPlaylist.md) \| [`GridShow`](../../YTNodes/classes/GridShow.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`Playlist`](../../YTNodes/classes/Playlist.md)\>

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`playlists`](../../Mixins/classes/Feed.md#playlists)

***

### posts

#### Get Signature

> **get** **posts**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`BackstagePost`](../../YTNodes/classes/BackstagePost.md) \| [`Post`](../../YTNodes/classes/Post.md) \| [`SharedPost`](../../YTNodes/classes/SharedPost.md)\>

Defined in: [src/core/mixins/Feed.ts:123](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/core/mixins/Feed.ts#L123)

Get all the community posts in the feed

##### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`BackstagePost`](../../YTNodes/classes/BackstagePost.md) \| [`Post`](../../YTNodes/classes/Post.md) \| [`SharedPost`](../../YTNodes/classes/SharedPost.md)\>

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`posts`](../../Mixins/classes/Feed.md#posts)

***

### secondary\_contents

#### Get Signature

> **get** **secondary\_contents**(): [`SectionList`](../../YTNodes/classes/SectionList.md) \| [`BrowseFeedActions`](../../YTNodes/classes/BrowseFeedActions.md) \| [`ProfileColumn`](../../YTNodes/classes/ProfileColumn.md) \| [`SecondarySearchContainer`](../../YTNodes/classes/SecondarySearchContainer.md) \| `null`

Defined in: [src/core/mixins/Feed.ts:172](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/core/mixins/Feed.ts#L172)

Returns secondary contents from the page.

##### Returns

[`SectionList`](../../YTNodes/classes/SectionList.md) \| [`BrowseFeedActions`](../../YTNodes/classes/BrowseFeedActions.md) \| [`ProfileColumn`](../../YTNodes/classes/ProfileColumn.md) \| [`SecondarySearchContainer`](../../YTNodes/classes/SecondarySearchContainer.md) \| `null`

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`secondary_contents`](../../Mixins/classes/Feed.md#secondary_contents)

***

### shelves

#### Get Signature

> **get** **shelves**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`ReelShelf`](../../YTNodes/classes/ReelShelf.md) \| [`RichShelf`](../../YTNodes/classes/RichShelf.md) \| [`Shelf`](../../YTNodes/classes/Shelf.md)\>

Defined in: [src/core/mixins/Feed.ts:158](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/core/mixins/Feed.ts#L158)

Returns all segments/sections from the page.

##### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`ReelShelf`](../../YTNodes/classes/ReelShelf.md) \| [`RichShelf`](../../YTNodes/classes/RichShelf.md) \| [`Shelf`](../../YTNodes/classes/Shelf.md)\>

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`shelves`](../../Mixins/classes/Feed.md#shelves)

***

### videos

#### Get Signature

> **get** **videos**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`CompactVideo`](../../YTNodes/classes/CompactVideo.md) \| [`GridVideo`](../../YTNodes/classes/GridVideo.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`PlaylistPanelVideo`](../../YTNodes/classes/PlaylistPanelVideo.md) \| [`PlaylistVideo`](../../YTNodes/classes/PlaylistVideo.md) \| [`ReelItem`](../../YTNodes/classes/ReelItem.md) \| [`ShortsLockupView`](../../YTNodes/classes/ShortsLockupView.md) \| [`Video`](../../YTNodes/classes/Video.md) \| [`WatchCardCompactVideo`](../../YTNodes/classes/WatchCardCompactVideo.md)\>

Defined in: [src/core/mixins/Feed.ts:116](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/core/mixins/Feed.ts#L116)

Get all the videos in the feed

##### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`CompactVideo`](../../YTNodes/classes/CompactVideo.md) \| [`GridVideo`](../../YTNodes/classes/GridVideo.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`PlaylistPanelVideo`](../../YTNodes/classes/PlaylistPanelVideo.md) \| [`PlaylistVideo`](../../YTNodes/classes/PlaylistVideo.md) \| [`ReelItem`](../../YTNodes/classes/ReelItem.md) \| [`ShortsLockupView`](../../YTNodes/classes/ShortsLockupView.md) \| [`Video`](../../YTNodes/classes/Video.md) \| [`WatchCardCompactVideo`](../../YTNodes/classes/WatchCardCompactVideo.md)\>

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`videos`](../../Mixins/classes/Feed.md#videos)

## Methods

### getContinuation()

> **getContinuation**(): `Promise`\<`History`\>

Defined in: [src/parser/youtube/History.ts:36](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/youtube/History.ts#L36)

Retrieves next batch of contents.

#### Returns

`Promise`\<`History`\>

#### Overrides

[`Feed`](../../Mixins/classes/Feed.md).[`getContinuation`](../../Mixins/classes/Feed.md#getcontinuation)

***

### getContinuationData()

> **getContinuationData**(): `Promise`\<[`IBrowseResponse`](../../../../type-aliases/IBrowseResponse.md) \| `undefined`\>

Defined in: [src/core/mixins/Feed.ts:205](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/core/mixins/Feed.ts#L205)

Retrieves continuation data as it is.

#### Returns

`Promise`\<[`IBrowseResponse`](../../../../type-aliases/IBrowseResponse.md) \| `undefined`\>

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`getContinuationData`](../../Mixins/classes/Feed.md#getcontinuationdata)

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

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`getShelf`](../../Mixins/classes/Feed.md#getshelf)

***

### removeVideo()

> **removeVideo**(`video_id`, `pages_to_load?`): `Promise`\<[`ApiResponse`](../../../../interfaces/ApiResponse.md) \| `undefined`\>

Defined in: [src/parser/youtube/History.ts:64](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/youtube/History.ts#L64)

Removes a video from watch history.

#### Parameters

##### video\_id

`string`

##### pages\_to\_load?

`number` = `1`

#### Returns

`Promise`\<[`ApiResponse`](../../../../interfaces/ApiResponse.md) \| `undefined`\>

***

### search()

> **search**(`query`): `Promise`\<`History`\>

Defined in: [src/parser/youtube/History.ts:47](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/youtube/History.ts#L47)

Searches the watch history feed using the feed actions search box.

#### Parameters

##### query

`string`

The search query.

#### Returns

`Promise`\<`History`\>

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

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`getPlaylistsFromMemo`](../../Mixins/classes/Feed.md#getplaylistsfrommemo)

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

#### Inherited from

[`Feed`](../../Mixins/classes/Feed.md).[`getVideosFromMemo`](../../Mixins/classes/Feed.md#getvideosfrommemo)
