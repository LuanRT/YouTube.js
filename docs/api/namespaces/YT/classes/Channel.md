[youtubei.js](../../../README.md) / [YT](../README.md) / Channel

# Class: Channel

## Extends

- [`TabbedFeed`](../../Mixins/classes/TabbedFeed.md)\<[`IBrowseResponse`](../../APIResponseTypes/type-aliases/IBrowseResponse.md)\>

## Constructors

### new Channel()

> **new Channel**(`actions`, `data`, `already_parsed`): [`Channel`](Channel.md)

#### Parameters

• **actions**: [`Actions`](../../../classes/Actions.md)

• **data**: [`ApiResponse`](../../../interfaces/ApiResponse.md) \| [`IBrowseResponse`](../../APIResponseTypes/type-aliases/IBrowseResponse.md)

• **already\_parsed**: `boolean` = `false`

#### Returns

[`Channel`](Channel.md)

#### Overrides

[`TabbedFeed`](../../Mixins/classes/TabbedFeed.md).[`constructor`](../../Mixins/classes/TabbedFeed.md#constructors)

#### Defined in

[src/parser/youtube/Channel.ts:42](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/Channel.ts#L42)

## Properties

### current\_tab?

> `optional` **current\_tab**: [`Tab`](../../YTNodes/classes/Tab.md) \| [`ExpandableTab`](../../YTNodes/classes/ExpandableTab.md)

#### Defined in

[src/parser/youtube/Channel.ts:40](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/Channel.ts#L40)

***

### header?

> `optional` **header**: [`C4TabbedHeader`](../../YTNodes/classes/C4TabbedHeader.md) \| [`CarouselHeader`](../../YTNodes/classes/CarouselHeader.md) \| [`InteractiveTabbedHeader`](../../YTNodes/classes/InteractiveTabbedHeader.md) \| [`PageHeader`](../../YTNodes/classes/PageHeader.md)

#### Defined in

[src/parser/youtube/Channel.ts:37](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/Channel.ts#L37)

***

### metadata

> **metadata**: `object`

#### android\_appindexing\_link?

> `optional` **android\_appindexing\_link**: `string`

#### android\_deep\_link?

> `optional` **android\_deep\_link**: `string`

#### android\_package?

> `optional` **android\_package**: `string`

#### app\_name?

> `optional` **app\_name**: `string`

#### available\_countries?

> `optional` **available\_countries**: `string`[]

#### avatar?

> `optional` **avatar**: [`Thumbnail`](../../Misc/classes/Thumbnail.md)[]

#### description?

> `optional` **description**: `string`

#### external\_id?

> `optional` **external\_id**: `string`

#### ios\_app\_arguments?

> `optional` **ios\_app\_arguments**: `string`

#### ios\_app\_store\_id?

> `optional` **ios\_app\_store\_id**: `string`

#### ios\_appindexing\_link?

> `optional` **ios\_appindexing\_link**: `string`

#### is\_family\_safe?

> `optional` **is\_family\_safe**: `boolean`

#### is\_unlisted?

> `optional` **is\_unlisted**: `boolean`

#### keywords?

> `optional` **keywords**: `string`[]

#### music\_artist\_name?

> `optional` **music\_artist\_name**: `string`

#### noindex?

> `optional` **noindex**: `string`

#### og\_type?

> `optional` **og\_type**: `string`

#### rss\_url?

> `optional` **rss\_url**: `string`

#### schema\_dot\_org\_type?

> `optional` **schema\_dot\_org\_type**: `string`

#### site\_name?

> `optional` **site\_name**: `string`

#### tags?

> `optional` **tags**: `string`[]

#### thumbnail?

> `optional` **thumbnail**: [`Thumbnail`](../../Misc/classes/Thumbnail.md)[]

#### title?

> `optional` **title**: `string`

#### twitter\_card\_type?

> `optional` **twitter\_card\_type**: `string`

#### twitter\_site\_handle?

> `optional` **twitter\_site\_handle**: `string`

#### type?

> `readonly` `optional` **type**: `string`

#### url?

> `optional` **url**: `string`

#### url\_applinks\_android?

> `optional` **url\_applinks\_android**: `string`

#### url\_applinks\_ios?

> `optional` **url\_applinks\_ios**: `string`

#### url\_applinks\_web?

> `optional` **url\_applinks\_web**: `string`

#### url\_canonical?

> `optional` **url\_canonical**: `string`

#### url\_twitter\_android?

> `optional` **url\_twitter\_android**: `string`

#### url\_twitter\_ios?

> `optional` **url\_twitter\_ios**: `string`

#### vanity\_channel\_url?

> `optional` **vanity\_channel\_url**: `string`

#### Defined in

[src/parser/youtube/Channel.ts:38](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/Channel.ts#L38)

***

### subscribe\_button?

> `optional` **subscribe\_button**: [`SubscribeButton`](../../YTNodes/classes/SubscribeButton.md)

#### Defined in

[src/parser/youtube/Channel.ts:39](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/Channel.ts#L39)

## Accessors

### actions

> `get` **actions**(): [`Actions`](../../../classes/Actions.md)

#### Returns

[`Actions`](../../../classes/Actions.md)

#### Inherited from

[`TabbedFeed`](../../Mixins/classes/TabbedFeed.md).[`actions`](../../Mixins/classes/TabbedFeed.md#actions)

#### Defined in

[src/core/mixins/Feed.ts:178](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/Feed.ts#L178)

***

### channels

> `get` **channels**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`Channel`](../../YTNodes/classes/Channel.md) \| [`GridChannel`](../../YTNodes/classes/GridChannel.md)\>

Get all the channels in the feed

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`Channel`](../../YTNodes/classes/Channel.md) \| [`GridChannel`](../../YTNodes/classes/GridChannel.md)\>

#### Inherited from

[`TabbedFeed`](../../Mixins/classes/TabbedFeed.md).[`channels`](../../Mixins/classes/TabbedFeed.md#channels)

#### Defined in

[src/core/mixins/Feed.ts:123](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/Feed.ts#L123)

***

### content\_type\_filters

> `get` **content\_type\_filters**(): `string`[]

#### Returns

`string`[]

#### Defined in

[src/parser/youtube/Channel.ts:151](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/Channel.ts#L151)

***

### filters

> `get` **filters**(): `string`[]

#### Returns

`string`[]

#### Defined in

[src/parser/youtube/Channel.ts:142](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/Channel.ts#L142)

***

### has\_about

> `get` **has\_about**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/youtube/Channel.ts:280](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/Channel.ts#L280)

***

### has\_community

> `get` **has\_community**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/youtube/Channel.ts:276](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/Channel.ts#L276)

***

### has\_continuation

> `get` **has\_continuation**(): `boolean`

Checks if the feed has continuation.

#### Returns

`boolean`

#### Inherited from

[`TabbedFeed`](../../Mixins/classes/TabbedFeed.md).[`has_continuation`](../../Mixins/classes/TabbedFeed.md#has_continuation)

#### Defined in

[src/core/mixins/Feed.ts:192](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/Feed.ts#L192)

***

### has\_home

> `get` **has\_home**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/youtube/Channel.ts:248](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/Channel.ts#L248)

***

### has\_live\_streams

> `get` **has\_live\_streams**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/youtube/Channel.ts:260](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/Channel.ts#L260)

***

### has\_playlists

> `get` **has\_playlists**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/youtube/Channel.ts:272](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/Channel.ts#L272)

***

### has\_podcasts

> `get` **has\_podcasts**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/youtube/Channel.ts:268](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/Channel.ts#L268)

***

### has\_releases

> `get` **has\_releases**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/youtube/Channel.ts:264](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/Channel.ts#L264)

***

### has\_search

> `get` **has\_search**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/youtube/Channel.ts:287](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/Channel.ts#L287)

***

### has\_shorts

> `get` **has\_shorts**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/youtube/Channel.ts:256](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/Channel.ts#L256)

***

### has\_videos

> `get` **has\_videos**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/youtube/Channel.ts:252](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/Channel.ts#L252)

***

### memo

> `get` **memo**(): [`Memo`](../../Helpers/classes/Memo.md)

#### Returns

[`Memo`](../../Helpers/classes/Memo.md)

#### Inherited from

[`TabbedFeed`](../../Mixins/classes/TabbedFeed.md).[`memo`](../../Mixins/classes/TabbedFeed.md#memo)

#### Defined in

[src/core/mixins/Feed.ts:134](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/Feed.ts#L134)

***

### page

> `get` **page**(): `T`

Get the original page data

#### Returns

`T`

#### Inherited from

[`TabbedFeed`](../../Mixins/classes/TabbedFeed.md).[`page`](../../Mixins/classes/TabbedFeed.md#page)

#### Defined in

[src/core/mixins/Feed.ts:185](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/Feed.ts#L185)

***

### page\_contents

> `get` **page\_contents**(): [`ReloadContinuationItemsCommand`](../../../classes/ReloadContinuationItemsCommand.md) \| [`SectionList`](../../YTNodes/classes/SectionList.md) \| [`MusicQueue`](../../YTNodes/classes/MusicQueue.md) \| [`RichGrid`](../../YTNodes/classes/RichGrid.md)

Returns contents from the page.

#### Returns

[`ReloadContinuationItemsCommand`](../../../classes/ReloadContinuationItemsCommand.md) \| [`SectionList`](../../YTNodes/classes/SectionList.md) \| [`MusicQueue`](../../YTNodes/classes/MusicQueue.md) \| [`RichGrid`](../../YTNodes/classes/RichGrid.md)

#### Inherited from

[`TabbedFeed`](../../Mixins/classes/TabbedFeed.md).[`page_contents`](../../Mixins/classes/TabbedFeed.md#page_contents)

#### Defined in

[src/core/mixins/Feed.ts:141](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/Feed.ts#L141)

***

### playlists

> `get` **playlists**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`GridPlaylist`](../../YTNodes/classes/GridPlaylist.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`Playlist`](../../YTNodes/classes/Playlist.md)\>

Get all playlists in the feed

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`GridPlaylist`](../../YTNodes/classes/GridPlaylist.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`Playlist`](../../YTNodes/classes/Playlist.md)\>

#### Inherited from

[`TabbedFeed`](../../Mixins/classes/TabbedFeed.md).[`playlists`](../../Mixins/classes/TabbedFeed.md#playlists)

#### Defined in

[src/core/mixins/Feed.ts:130](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/Feed.ts#L130)

***

### posts

> `get` **posts**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`BackstagePost`](../../YTNodes/classes/BackstagePost.md) \| [`Post`](../../YTNodes/classes/Post.md) \| [`SharedPost`](../../YTNodes/classes/SharedPost.md)\>

Get all the community posts in the feed

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`BackstagePost`](../../YTNodes/classes/BackstagePost.md) \| [`Post`](../../YTNodes/classes/Post.md) \| [`SharedPost`](../../YTNodes/classes/SharedPost.md)\>

#### Inherited from

[`TabbedFeed`](../../Mixins/classes/TabbedFeed.md).[`posts`](../../Mixins/classes/TabbedFeed.md#posts)

#### Defined in

[src/core/mixins/Feed.ts:116](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/Feed.ts#L116)

***

### secondary\_contents

> `get` **secondary\_contents**(): `undefined` \| [`SuperParsedResult`](../../Helpers/classes/SuperParsedResult.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

Returns secondary contents from the page.

#### Returns

`undefined` \| [`SuperParsedResult`](../../Helpers/classes/SuperParsedResult.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

#### Inherited from

[`TabbedFeed`](../../Mixins/classes/TabbedFeed.md).[`secondary_contents`](../../Mixins/classes/TabbedFeed.md#secondary_contents)

#### Defined in

[src/core/mixins/Feed.ts:166](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/Feed.ts#L166)

***

### shelves

> `get` **shelves**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`ReelShelf`](../../YTNodes/classes/ReelShelf.md) \| [`RichShelf`](../../YTNodes/classes/RichShelf.md) \| [`Shelf`](../../YTNodes/classes/Shelf.md)\>

Returns all segments/sections from the page.

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`ReelShelf`](../../YTNodes/classes/ReelShelf.md) \| [`RichShelf`](../../YTNodes/classes/RichShelf.md) \| [`Shelf`](../../YTNodes/classes/Shelf.md)\>

#### Inherited from

[`TabbedFeed`](../../Mixins/classes/TabbedFeed.md).[`shelves`](../../Mixins/classes/TabbedFeed.md#shelves)

#### Defined in

[src/core/mixins/Feed.ts:152](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/Feed.ts#L152)

***

### sort\_filters

> `get` **sort\_filters**(): `string`[]

#### Returns

`string`[]

#### Defined in

[src/parser/youtube/Channel.ts:146](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/Channel.ts#L146)

***

### tabs

> `get` **tabs**(): `string`[]

#### Returns

`string`[]

#### Inherited from

[`TabbedFeed`](../../Mixins/classes/TabbedFeed.md).[`tabs`](../../Mixins/classes/TabbedFeed.md#tabs)

#### Defined in

[src/core/mixins/TabbedFeed.ts:19](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/TabbedFeed.ts#L19)

***

### title

> `get` **title**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[`TabbedFeed`](../../Mixins/classes/TabbedFeed.md).[`title`](../../Mixins/classes/TabbedFeed.md#title)

#### Defined in

[src/core/mixins/TabbedFeed.ts:55](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/TabbedFeed.ts#L55)

***

### videos

> `get` **videos**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`Video`](../../YTNodes/classes/Video.md) \| [`CompactVideo`](../../YTNodes/classes/CompactVideo.md) \| [`GridVideo`](../../YTNodes/classes/GridVideo.md) \| [`PlaylistPanelVideo`](../../YTNodes/classes/PlaylistPanelVideo.md) \| [`PlaylistVideo`](../../YTNodes/classes/PlaylistVideo.md) \| [`ReelItem`](../../YTNodes/classes/ReelItem.md) \| [`ShortsLockupView`](../../YTNodes/classes/ShortsLockupView.md) \| [`WatchCardCompactVideo`](../../YTNodes/classes/WatchCardCompactVideo.md)\>

Get all the videos in the feed

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`Video`](../../YTNodes/classes/Video.md) \| [`CompactVideo`](../../YTNodes/classes/CompactVideo.md) \| [`GridVideo`](../../YTNodes/classes/GridVideo.md) \| [`PlaylistPanelVideo`](../../YTNodes/classes/PlaylistPanelVideo.md) \| [`PlaylistVideo`](../../YTNodes/classes/PlaylistVideo.md) \| [`ReelItem`](../../YTNodes/classes/ReelItem.md) \| [`ShortsLockupView`](../../YTNodes/classes/ShortsLockupView.md) \| [`WatchCardCompactVideo`](../../YTNodes/classes/WatchCardCompactVideo.md)\>

#### Inherited from

[`TabbedFeed`](../../Mixins/classes/TabbedFeed.md).[`videos`](../../Mixins/classes/TabbedFeed.md#videos)

#### Defined in

[src/core/mixins/Feed.ts:109](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/Feed.ts#L109)

## Methods

### applyContentTypeFilter()

> **applyContentTypeFilter**(`content_type_filter`): `Promise`\<[`Channel`](Channel.md)\>

Applies given content type filter to the list. Use [content_type_filters](Channel.md#content_type_filters) to get available filters.

#### Parameters

• **content\_type\_filter**: `string`

The content type filter to apply

#### Returns

`Promise`\<[`Channel`](Channel.md)\>

#### Defined in

[src/parser/youtube/Channel.ts:123](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/Channel.ts#L123)

***

### applyFilter()

> **applyFilter**(`filter`): `Promise`\<[`FilteredChannelList`](FilteredChannelList.md)\>

Applies given filter to the list. Use [filters](Channel.md#filters) to get available filters.

#### Parameters

• **filter**: `string` \| [`ChipCloudChip`](../../YTNodes/classes/ChipCloudChip.md)

The filter to apply

#### Returns

`Promise`\<[`FilteredChannelList`](FilteredChannelList.md)\>

#### Defined in

[src/parser/youtube/Channel.ts:72](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/Channel.ts#L72)

***

### applySort()

> **applySort**(`sort`): `Promise`\<[`Channel`](Channel.md)\>

Applies given sort filter to the list. Use [sort_filters](Channel.md#sort_filters) to get available filters.

#### Parameters

• **sort**: `string`

The sort filter to apply

#### Returns

`Promise`\<[`Channel`](Channel.md)\>

#### Defined in

[src/parser/youtube/Channel.ts:100](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/Channel.ts#L100)

***

### getAbout()

> **getAbout**(): `Promise`\<[`ChannelAboutFullMetadata`](../../YTNodes/classes/ChannelAboutFullMetadata.md) \| [`AboutChannel`](../../YTNodes/classes/AboutChannel.md)\>

Retrieves the about page.
Note that this does not return a new [Channel](Channel.md) object.

#### Returns

`Promise`\<[`ChannelAboutFullMetadata`](../../YTNodes/classes/ChannelAboutFullMetadata.md) \| [`AboutChannel`](../../YTNodes/classes/AboutChannel.md)\>

#### Defined in

[src/parser/youtube/Channel.ts:200](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/Channel.ts#L200)

***

### getCommunity()

> **getCommunity**(): `Promise`\<[`Channel`](Channel.md)\>

#### Returns

`Promise`\<[`Channel`](Channel.md)\>

#### Defined in

[src/parser/youtube/Channel.ts:191](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/Channel.ts#L191)

***

### getContinuation()

> **getContinuation**(): `Promise`\<[`ChannelListContinuation`](ChannelListContinuation.md)\>

Retrieves next batch of contents and returns a new [Feed](../../Mixins/classes/Feed.md) object.

#### Returns

`Promise`\<[`ChannelListContinuation`](ChannelListContinuation.md)\>

#### Overrides

[`TabbedFeed`](../../Mixins/classes/TabbedFeed.md).[`getContinuation`](../../Mixins/classes/TabbedFeed.md#getcontinuation)

#### Defined in

[src/parser/youtube/Channel.ts:291](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/Channel.ts#L291)

***

### getContinuationData()

> **getContinuationData**(): `Promise`\<`undefined` \| [`IBrowseResponse`](../../APIResponseTypes/type-aliases/IBrowseResponse.md)\>

Retrieves continuation data as it is.

#### Returns

`Promise`\<`undefined` \| [`IBrowseResponse`](../../APIResponseTypes/type-aliases/IBrowseResponse.md)\>

#### Inherited from

[`TabbedFeed`](../../Mixins/classes/TabbedFeed.md).[`getContinuationData`](../../Mixins/classes/TabbedFeed.md#getcontinuationdata)

#### Defined in

[src/core/mixins/Feed.ts:199](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/Feed.ts#L199)

***

### getHome()

> **getHome**(): `Promise`\<[`Channel`](Channel.md)\>

#### Returns

`Promise`\<[`Channel`](Channel.md)\>

#### Defined in

[src/parser/youtube/Channel.ts:156](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/Channel.ts#L156)

***

### getLiveStreams()

> **getLiveStreams**(): `Promise`\<[`Channel`](Channel.md)\>

#### Returns

`Promise`\<[`Channel`](Channel.md)\>

#### Defined in

[src/parser/youtube/Channel.ts:171](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/Channel.ts#L171)

***

### getPlaylists()

> **getPlaylists**(): `Promise`\<[`Channel`](Channel.md)\>

#### Returns

`Promise`\<[`Channel`](Channel.md)\>

#### Defined in

[src/parser/youtube/Channel.ts:186](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/Channel.ts#L186)

***

### getPodcasts()

> **getPodcasts**(): `Promise`\<[`Channel`](Channel.md)\>

#### Returns

`Promise`\<[`Channel`](Channel.md)\>

#### Defined in

[src/parser/youtube/Channel.ts:181](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/Channel.ts#L181)

***

### getReleases()

> **getReleases**(): `Promise`\<[`Channel`](Channel.md)\>

#### Returns

`Promise`\<[`Channel`](Channel.md)\>

#### Defined in

[src/parser/youtube/Channel.ts:176](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/Channel.ts#L176)

***

### getShelf()

> **getShelf**(`title`): `undefined` \| [`ReelShelf`](../../YTNodes/classes/ReelShelf.md) \| [`RichShelf`](../../YTNodes/classes/RichShelf.md) \| [`Shelf`](../../YTNodes/classes/Shelf.md)

Finds shelf by title.

#### Parameters

• **title**: `string`

#### Returns

`undefined` \| [`ReelShelf`](../../YTNodes/classes/ReelShelf.md) \| [`RichShelf`](../../YTNodes/classes/RichShelf.md) \| [`Shelf`](../../YTNodes/classes/Shelf.md)

#### Inherited from

[`TabbedFeed`](../../Mixins/classes/TabbedFeed.md).[`getShelf`](../../Mixins/classes/TabbedFeed.md#getshelf)

#### Defined in

[src/core/mixins/Feed.ts:159](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/Feed.ts#L159)

***

### getShorts()

> **getShorts**(): `Promise`\<[`Channel`](Channel.md)\>

#### Returns

`Promise`\<[`Channel`](Channel.md)\>

#### Defined in

[src/parser/youtube/Channel.ts:166](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/Channel.ts#L166)

***

### getTabByName()

> **getTabByName**(`title`): `Promise`\<[`TabbedFeed`](../../Mixins/classes/TabbedFeed.md)\<[`IBrowseResponse`](../../APIResponseTypes/type-aliases/IBrowseResponse.md)\>\>

#### Parameters

• **title**: `string`

#### Returns

`Promise`\<[`TabbedFeed`](../../Mixins/classes/TabbedFeed.md)\<[`IBrowseResponse`](../../APIResponseTypes/type-aliases/IBrowseResponse.md)\>\>

#### Inherited from

[`TabbedFeed`](../../Mixins/classes/TabbedFeed.md).[`getTabByName`](../../Mixins/classes/TabbedFeed.md#gettabbyname)

#### Defined in

[src/core/mixins/TabbedFeed.ts:23](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/TabbedFeed.ts#L23)

***

### getTabByURL()

> **getTabByURL**(`url`): `Promise`\<[`TabbedFeed`](../../Mixins/classes/TabbedFeed.md)\<[`IBrowseResponse`](../../APIResponseTypes/type-aliases/IBrowseResponse.md)\>\>

#### Parameters

• **url**: `string`

#### Returns

`Promise`\<[`TabbedFeed`](../../Mixins/classes/TabbedFeed.md)\<[`IBrowseResponse`](../../APIResponseTypes/type-aliases/IBrowseResponse.md)\>\>

#### Inherited from

[`TabbedFeed`](../../Mixins/classes/TabbedFeed.md).[`getTabByURL`](../../Mixins/classes/TabbedFeed.md#gettabbyurl)

#### Defined in

[src/core/mixins/TabbedFeed.ts:37](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/TabbedFeed.ts#L37)

***

### getVideos()

> **getVideos**(): `Promise`\<[`Channel`](Channel.md)\>

#### Returns

`Promise`\<[`Channel`](Channel.md)\>

#### Defined in

[src/parser/youtube/Channel.ts:161](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/Channel.ts#L161)

***

### hasTabWithURL()

> **hasTabWithURL**(`url`): `boolean`

#### Parameters

• **url**: `string`

#### Returns

`boolean`

#### Inherited from

[`TabbedFeed`](../../Mixins/classes/TabbedFeed.md).[`hasTabWithURL`](../../Mixins/classes/TabbedFeed.md#hastabwithurl)

#### Defined in

[src/core/mixins/TabbedFeed.ts:51](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/TabbedFeed.ts#L51)

***

### search()

> **search**(`query`): `Promise`\<[`Channel`](Channel.md)\>

Searches within the channel.

#### Parameters

• **query**: `string`

#### Returns

`Promise`\<[`Channel`](Channel.md)\>

#### Defined in

[src/parser/youtube/Channel.ts:237](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/Channel.ts#L237)

***

### getPlaylistsFromMemo()

> `static` **getPlaylistsFromMemo**(`memo`): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`GridPlaylist`](../../YTNodes/classes/GridPlaylist.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`Playlist`](../../YTNodes/classes/Playlist.md)\>

Get all playlists on a given page via memo

#### Parameters

• **memo**: [`Memo`](../../Helpers/classes/Memo.md)

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`GridPlaylist`](../../YTNodes/classes/GridPlaylist.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`Playlist`](../../YTNodes/classes/Playlist.md)\>

#### Inherited from

[`TabbedFeed`](../../Mixins/classes/TabbedFeed.md).[`getPlaylistsFromMemo`](../../Mixins/classes/TabbedFeed.md#getplaylistsfrommemo)

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

[`TabbedFeed`](../../Mixins/classes/TabbedFeed.md).[`getVideosFromMemo`](../../Mixins/classes/TabbedFeed.md#getvideosfrommemo)

#### Defined in

[src/core/mixins/Feed.ts:75](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/mixins/Feed.ts#L75)
