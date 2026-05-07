[youtubei.js](../../../../README.md) / [YT](../README.md) / Channel

# Class: Channel

Defined in: [src/parser/youtube/Channel.ts:46](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/youtube/Channel.ts#L46)

## Extends

- [`TabbedFeed`](../../Mixins/classes/TabbedFeed.md)\<[`IBrowseResponse`](../../../../type-aliases/IBrowseResponse.md)\>

## Constructors

### Constructor

> **new Channel**(`actions`, `data`, `already_parsed?`): `Channel`

Defined in: [src/parser/youtube/Channel.ts:54](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/youtube/Channel.ts#L54)

#### Parameters

##### actions

[`Actions`](../../../../classes/Actions.md)

##### data

[`ApiResponse`](../../../../interfaces/ApiResponse.md) | [`IBrowseResponse`](../../../../type-aliases/IBrowseResponse.md)

##### already\_parsed?

`boolean` = `false`

#### Returns

`Channel`

#### Overrides

[`TabbedFeed`](../../Mixins/classes/TabbedFeed.md).[`constructor`](../../Mixins/classes/TabbedFeed.md#constructor)

## Properties

### current\_tab?

> `optional` **current\_tab**: [`Tab`](../../YTNodes/classes/Tab.md) \| [`ExpandableTab`](../../YTNodes/classes/ExpandableTab.md)

Defined in: [src/parser/youtube/Channel.ts:50](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/youtube/Channel.ts#L50)

***

### header?

> `optional` **header**: [`C4TabbedHeader`](../../YTNodes/classes/C4TabbedHeader.md) \| [`CarouselHeader`](../../YTNodes/classes/CarouselHeader.md) \| [`InteractiveTabbedHeader`](../../YTNodes/classes/InteractiveTabbedHeader.md) \| [`PageHeader`](../../YTNodes/classes/PageHeader.md)

Defined in: [src/parser/youtube/Channel.ts:47](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/youtube/Channel.ts#L47)

***

### metadata

> **metadata**: `object`

Defined in: [src/parser/youtube/Channel.ts:48](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/youtube/Channel.ts#L48)

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

***

### subscribe\_button?

> `optional` **subscribe\_button**: [`SubscribeButton`](../../YTNodes/classes/SubscribeButton.md)

Defined in: [src/parser/youtube/Channel.ts:49](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/youtube/Channel.ts#L49)

## Accessors

### actions

#### Get Signature

> **get** **actions**(): [`Actions`](../../../../classes/Actions.md)

Defined in: [src/core/mixins/Feed.ts:181](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/mixins/Feed.ts#L181)

##### Returns

[`Actions`](../../../../classes/Actions.md)

#### Inherited from

[`TabbedFeed`](../../Mixins/classes/TabbedFeed.md).[`actions`](../../Mixins/classes/TabbedFeed.md#actions)

***

### channels

#### Get Signature

> **get** **channels**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`Channel`](../../YTNodes/classes/Channel.md) \| [`GridChannel`](../../YTNodes/classes/GridChannel.md)\>

Defined in: [src/core/mixins/Feed.ts:127](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/mixins/Feed.ts#L127)

Get all the channels in the feed

##### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`Channel`](../../YTNodes/classes/Channel.md) \| [`GridChannel`](../../YTNodes/classes/GridChannel.md)\>

#### Inherited from

[`TabbedFeed`](../../Mixins/classes/TabbedFeed.md).[`channels`](../../Mixins/classes/TabbedFeed.md#channels)

***

### content\_type\_filters

#### Get Signature

> **get** **content\_type\_filters**(): `string`[]

Defined in: [src/parser/youtube/Channel.ts:274](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/youtube/Channel.ts#L274)

##### Returns

`string`[]

***

### filter\_nodes

#### Get Signature

> **get** **filter\_nodes**(): `FilterNodes`

Defined in: [src/parser/youtube/Channel.ts:199](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/youtube/Channel.ts#L199)

Returns the InnerTube renderer nodes representing filters.

##### Returns

`FilterNodes`

***

### filters

#### Get Signature

> **get** **filters**(): `string`[]

Defined in: [src/parser/youtube/Channel.ts:246](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/youtube/Channel.ts#L246)

Returns the available primary filters as strings.

##### Returns

`string`[]

***

### has\_about

#### Get Signature

> **get** **has\_about**(): `boolean`

Defined in: [src/parser/youtube/Channel.ts:412](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/youtube/Channel.ts#L412)

##### Returns

`boolean`

***

### has\_community

#### Get Signature

> **get** **has\_community**(): `boolean`

Defined in: [src/parser/youtube/Channel.ts:408](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/youtube/Channel.ts#L408)

##### Returns

`boolean`

***

### has\_continuation

#### Get Signature

> **get** **has\_continuation**(): `boolean`

Defined in: [src/core/mixins/Feed.ts:195](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/mixins/Feed.ts#L195)

Checks if the feed has continuation.

##### Returns

`boolean`

#### Inherited from

[`TabbedFeed`](../../Mixins/classes/TabbedFeed.md).[`has_continuation`](../../Mixins/classes/TabbedFeed.md#has_continuation)

***

### has\_courses

#### Get Signature

> **get** **has\_courses**(): `boolean`

Defined in: [src/parser/youtube/Channel.ts:400](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/youtube/Channel.ts#L400)

##### Returns

`boolean`

***

### has\_home

#### Get Signature

> **get** **has\_home**(): `boolean`

Defined in: [src/parser/youtube/Channel.ts:376](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/youtube/Channel.ts#L376)

##### Returns

`boolean`

***

### has\_live\_streams

#### Get Signature

> **get** **has\_live\_streams**(): `boolean`

Defined in: [src/parser/youtube/Channel.ts:388](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/youtube/Channel.ts#L388)

##### Returns

`boolean`

***

### has\_playlists

#### Get Signature

> **get** **has\_playlists**(): `boolean`

Defined in: [src/parser/youtube/Channel.ts:404](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/youtube/Channel.ts#L404)

##### Returns

`boolean`

***

### has\_podcasts

#### Get Signature

> **get** **has\_podcasts**(): `boolean`

Defined in: [src/parser/youtube/Channel.ts:396](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/youtube/Channel.ts#L396)

##### Returns

`boolean`

***

### has\_releases

#### Get Signature

> **get** **has\_releases**(): `boolean`

Defined in: [src/parser/youtube/Channel.ts:392](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/youtube/Channel.ts#L392)

##### Returns

`boolean`

***

### has\_search

#### Get Signature

> **get** **has\_search**(): `boolean`

Defined in: [src/parser/youtube/Channel.ts:419](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/youtube/Channel.ts#L419)

##### Returns

`boolean`

***

### has\_shorts

#### Get Signature

> **get** **has\_shorts**(): `boolean`

Defined in: [src/parser/youtube/Channel.ts:384](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/youtube/Channel.ts#L384)

##### Returns

`boolean`

***

### has\_videos

#### Get Signature

> **get** **has\_videos**(): `boolean`

Defined in: [src/parser/youtube/Channel.ts:380](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/youtube/Channel.ts#L380)

##### Returns

`boolean`

***

### memo

#### Get Signature

> **get** **memo**(): [`Memo`](../../Helpers/classes/Memo.md)

Defined in: [src/core/mixins/Feed.ts:138](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/mixins/Feed.ts#L138)

##### Returns

[`Memo`](../../Helpers/classes/Memo.md)

#### Inherited from

[`TabbedFeed`](../../Mixins/classes/TabbedFeed.md).[`memo`](../../Mixins/classes/TabbedFeed.md#memo)

***

### page

#### Get Signature

> **get** **page**(): `T`

Defined in: [src/core/mixins/Feed.ts:188](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/mixins/Feed.ts#L188)

Get the original page data

##### Returns

`T`

#### Inherited from

[`TabbedFeed`](../../Mixins/classes/TabbedFeed.md).[`page`](../../Mixins/classes/TabbedFeed.md#page)

***

### page\_contents

#### Get Signature

> **get** **page\_contents**(): [`SectionList`](../../YTNodes/classes/SectionList.md) \| [`MusicQueue`](../../YTNodes/classes/MusicQueue.md) \| [`RichGrid`](../../YTNodes/classes/RichGrid.md) \| [`ReloadContinuationItemsCommand`](../../../../classes/ReloadContinuationItemsCommand.md)

Defined in: [src/core/mixins/Feed.ts:145](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/mixins/Feed.ts#L145)

Returns contents from the page.

##### Returns

[`SectionList`](../../YTNodes/classes/SectionList.md) \| [`MusicQueue`](../../YTNodes/classes/MusicQueue.md) \| [`RichGrid`](../../YTNodes/classes/RichGrid.md) \| [`ReloadContinuationItemsCommand`](../../../../classes/ReloadContinuationItemsCommand.md)

#### Inherited from

[`TabbedFeed`](../../Mixins/classes/TabbedFeed.md).[`page_contents`](../../Mixins/classes/TabbedFeed.md#page_contents)

***

### playlists

#### Get Signature

> **get** **playlists**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`GridPlaylist`](../../YTNodes/classes/GridPlaylist.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`Playlist`](../../YTNodes/classes/Playlist.md)\>

Defined in: [src/core/mixins/Feed.ts:134](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/mixins/Feed.ts#L134)

Get all playlists in the feed

##### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`GridPlaylist`](../../YTNodes/classes/GridPlaylist.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`Playlist`](../../YTNodes/classes/Playlist.md)\>

#### Inherited from

[`TabbedFeed`](../../Mixins/classes/TabbedFeed.md).[`playlists`](../../Mixins/classes/TabbedFeed.md#playlists)

***

### posts

#### Get Signature

> **get** **posts**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`BackstagePost`](../../YTNodes/classes/BackstagePost.md) \| [`Post`](../../YTNodes/classes/Post.md) \| [`SharedPost`](../../YTNodes/classes/SharedPost.md)\>

Defined in: [src/core/mixins/Feed.ts:120](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/mixins/Feed.ts#L120)

Get all the community posts in the feed

##### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`BackstagePost`](../../YTNodes/classes/BackstagePost.md) \| [`Post`](../../YTNodes/classes/Post.md) \| [`SharedPost`](../../YTNodes/classes/SharedPost.md)\>

#### Inherited from

[`TabbedFeed`](../../Mixins/classes/TabbedFeed.md).[`posts`](../../Mixins/classes/TabbedFeed.md#posts)

***

### secondary\_contents

#### Get Signature

> **get** **secondary\_contents**(): [`SectionList`](../../YTNodes/classes/SectionList.md) \| [`BrowseFeedActions`](../../YTNodes/classes/BrowseFeedActions.md) \| [`ProfileColumn`](../../YTNodes/classes/ProfileColumn.md) \| [`SecondarySearchContainer`](../../YTNodes/classes/SecondarySearchContainer.md) \| `null`

Defined in: [src/core/mixins/Feed.ts:169](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/mixins/Feed.ts#L169)

Returns secondary contents from the page.

##### Returns

[`SectionList`](../../YTNodes/classes/SectionList.md) \| [`BrowseFeedActions`](../../YTNodes/classes/BrowseFeedActions.md) \| [`ProfileColumn`](../../YTNodes/classes/ProfileColumn.md) \| [`SecondarySearchContainer`](../../YTNodes/classes/SecondarySearchContainer.md) \| `null`

#### Inherited from

[`TabbedFeed`](../../Mixins/classes/TabbedFeed.md).[`secondary_contents`](../../Mixins/classes/TabbedFeed.md#secondary_contents)

***

### secondary\_filters

#### Get Signature

> **get** **secondary\_filters**(): `string`[]

Defined in: [src/parser/youtube/Channel.ts:265](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/youtube/Channel.ts#L265)

Returns the available secondary filters as strings. 

---

NOTE: 
Not all channels have secondary filters!

##### Returns

`string`[]

***

### shelves

#### Get Signature

> **get** **shelves**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`ReelShelf`](../../YTNodes/classes/ReelShelf.md) \| [`RichShelf`](../../YTNodes/classes/RichShelf.md) \| [`Shelf`](../../YTNodes/classes/Shelf.md)\>

Defined in: [src/core/mixins/Feed.ts:155](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/mixins/Feed.ts#L155)

Returns all segments/sections from the page.

##### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`ReelShelf`](../../YTNodes/classes/ReelShelf.md) \| [`RichShelf`](../../YTNodes/classes/RichShelf.md) \| [`Shelf`](../../YTNodes/classes/Shelf.md)\>

#### Inherited from

[`TabbedFeed`](../../Mixins/classes/TabbedFeed.md).[`shelves`](../../Mixins/classes/TabbedFeed.md#shelves)

***

### sort\_filters

#### Get Signature

> **get** **sort\_filters**(): `string`[]

Defined in: [src/parser/youtube/Channel.ts:269](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/youtube/Channel.ts#L269)

##### Returns

`string`[]

***

### tabs

#### Get Signature

> **get** **tabs**(): `string`[]

Defined in: [src/core/mixins/TabbedFeed.ts:19](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/mixins/TabbedFeed.ts#L19)

##### Returns

`string`[]

#### Inherited from

[`TabbedFeed`](../../Mixins/classes/TabbedFeed.md).[`tabs`](../../Mixins/classes/TabbedFeed.md#tabs)

***

### title

#### Get Signature

> **get** **title**(): `string` \| `undefined`

Defined in: [src/core/mixins/TabbedFeed.ts:55](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/mixins/TabbedFeed.ts#L55)

##### Returns

`string` \| `undefined`

#### Inherited from

[`TabbedFeed`](../../Mixins/classes/TabbedFeed.md).[`title`](../../Mixins/classes/TabbedFeed.md#title)

***

### videos

#### Get Signature

> **get** **videos**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`CompactVideo`](../../YTNodes/classes/CompactVideo.md) \| [`GridVideo`](../../YTNodes/classes/GridVideo.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`PlaylistPanelVideo`](../../YTNodes/classes/PlaylistPanelVideo.md) \| [`PlaylistVideo`](../../YTNodes/classes/PlaylistVideo.md) \| [`ReelItem`](../../YTNodes/classes/ReelItem.md) \| [`ShortsLockupView`](../../YTNodes/classes/ShortsLockupView.md) \| [`Video`](../../YTNodes/classes/Video.md) \| [`WatchCardCompactVideo`](../../YTNodes/classes/WatchCardCompactVideo.md)\>

Defined in: [src/core/mixins/Feed.ts:113](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/mixins/Feed.ts#L113)

Get all the videos in the feed

##### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`CompactVideo`](../../YTNodes/classes/CompactVideo.md) \| [`GridVideo`](../../YTNodes/classes/GridVideo.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`PlaylistPanelVideo`](../../YTNodes/classes/PlaylistPanelVideo.md) \| [`PlaylistVideo`](../../YTNodes/classes/PlaylistVideo.md) \| [`ReelItem`](../../YTNodes/classes/ReelItem.md) \| [`ShortsLockupView`](../../YTNodes/classes/ShortsLockupView.md) \| [`Video`](../../YTNodes/classes/Video.md) \| [`WatchCardCompactVideo`](../../YTNodes/classes/WatchCardCompactVideo.md)\>

#### Inherited from

[`TabbedFeed`](../../Mixins/classes/TabbedFeed.md).[`videos`](../../Mixins/classes/TabbedFeed.md#videos)

## Methods

### applyContentTypeFilter()

> **applyContentTypeFilter**(`content_type_filter`): `Promise`\<`Channel`\>

Defined in: [src/parser/youtube/Channel.ts:177](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/youtube/Channel.ts#L177)

Applies given content type filter to the list. Use [content\_type\_filters](#content_type_filters) to get available filters.

#### Parameters

##### content\_type\_filter

`string`

The content type filter to apply

#### Returns

`Promise`\<`Channel`\>

***

### applyFilter()

> **applyFilter**(`primaryFilter`, `secondaryFilter?`): `Promise`\<[`FilteredChannelList`](FilteredChannelList.md)\>

Defined in: [src/parser/youtube/Channel.ts:101](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/youtube/Channel.ts#L101)

Applies a filter to the channel list. [filters](#filters), [secondary\_filters](#secondary_filters), and [filter\_nodes](#filter_nodes) can be used to get available filters.

#### Parameters

##### primaryFilter

The primary filter to apply. Can be a string representing the filter name,
a [ChipView](../../YTNodes/classes/ChipView.md) instance, or a [ListItemView](../../YTNodes/classes/ListItemView.md) instance.

`string` | [`ListItemView`](../../YTNodes/classes/ListItemView.md) | [`ChipView`](../../YTNodes/classes/ChipView.md)

##### secondaryFilter?

An optional secondary filter to apply after the primary filter.
Can be a string representing the filter name or a [ChipView](../../YTNodes/classes/ChipView.md) instance.

`string` | [`ChipView`](../../YTNodes/classes/ChipView.md)

#### Returns

`Promise`\<[`FilteredChannelList`](FilteredChannelList.md)\>

#### Example

```ts
// Apply a primary filter by name.
const filtered = await videos.applyFilter('Oldest');

// Apply a primary and secondary filter by name.
const filtered = await videos.applyFilter('Oldest', 'Members only');

// Since we're using `filtered`, the following will return the latest members-only videos, 
// unless the secondary filter is explicitly changed.
const latestMembersOnly = await filtered.applyFilter('Latest');
```

***

### applySort()

> **applySort**(`sortFilter`): `Promise`\<`Channel`\>

Defined in: [src/parser/youtube/Channel.ts:154](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/youtube/Channel.ts#L154)

Applies a sort filter to the list. Use [sort\_filters](#sort_filters) to get available filters.

#### Parameters

##### sortFilter

`string`

The sort filter to apply

#### Returns

`Promise`\<`Channel`\>

***

### getAbout()

> **getAbout**(): `Promise`\<[`ChannelAboutFullMetadata`](../../YTNodes/classes/ChannelAboutFullMetadata.md) \| [`AboutChannel`](../../YTNodes/classes/AboutChannel.md)\>

Defined in: [src/parser/youtube/Channel.ts:328](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/youtube/Channel.ts#L328)

Retrieves the about page.
Note that this does not return a new Channel object.

#### Returns

`Promise`\<[`ChannelAboutFullMetadata`](../../YTNodes/classes/ChannelAboutFullMetadata.md) \| [`AboutChannel`](../../YTNodes/classes/AboutChannel.md)\>

***

### getCommunity()

> **getCommunity**(): `Promise`\<`Channel`\>

Defined in: [src/parser/youtube/Channel.ts:319](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/youtube/Channel.ts#L319)

#### Returns

`Promise`\<`Channel`\>

***

### getContinuation()

> **getContinuation**(): `Promise`\<[`ChannelListContinuation`](ChannelListContinuation.md)\>

Defined in: [src/parser/youtube/Channel.ts:423](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/youtube/Channel.ts#L423)

Retrieves next batch of contents and returns a new [Feed](../../Mixins/classes/Feed.md) object.

#### Returns

`Promise`\<[`ChannelListContinuation`](ChannelListContinuation.md)\>

#### Overrides

[`TabbedFeed`](../../Mixins/classes/TabbedFeed.md).[`getContinuation`](../../Mixins/classes/TabbedFeed.md#getcontinuation)

***

### getContinuationData()

> **getContinuationData**(): `Promise`\<[`IBrowseResponse`](../../../../type-aliases/IBrowseResponse.md) \| `undefined`\>

Defined in: [src/core/mixins/Feed.ts:202](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/mixins/Feed.ts#L202)

Retrieves continuation data as it is.

#### Returns

`Promise`\<[`IBrowseResponse`](../../../../type-aliases/IBrowseResponse.md) \| `undefined`\>

#### Inherited from

[`TabbedFeed`](../../Mixins/classes/TabbedFeed.md).[`getContinuationData`](../../Mixins/classes/TabbedFeed.md#getcontinuationdata)

***

### getCourses()

> **getCourses**(): `Promise`\<`Channel`\>

Defined in: [src/parser/youtube/Channel.ts:309](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/youtube/Channel.ts#L309)

#### Returns

`Promise`\<`Channel`\>

***

### getHome()

> **getHome**(): `Promise`\<`Channel`\>

Defined in: [src/parser/youtube/Channel.ts:279](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/youtube/Channel.ts#L279)

#### Returns

`Promise`\<`Channel`\>

***

### getLiveStreams()

> **getLiveStreams**(): `Promise`\<`Channel`\>

Defined in: [src/parser/youtube/Channel.ts:294](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/youtube/Channel.ts#L294)

#### Returns

`Promise`\<`Channel`\>

***

### getPlaylists()

> **getPlaylists**(): `Promise`\<`Channel`\>

Defined in: [src/parser/youtube/Channel.ts:314](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/youtube/Channel.ts#L314)

#### Returns

`Promise`\<`Channel`\>

***

### getPodcasts()

> **getPodcasts**(): `Promise`\<`Channel`\>

Defined in: [src/parser/youtube/Channel.ts:304](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/youtube/Channel.ts#L304)

#### Returns

`Promise`\<`Channel`\>

***

### getReleases()

> **getReleases**(): `Promise`\<`Channel`\>

Defined in: [src/parser/youtube/Channel.ts:299](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/youtube/Channel.ts#L299)

#### Returns

`Promise`\<`Channel`\>

***

### getShelf()

> **getShelf**(`title`): [`ReelShelf`](../../YTNodes/classes/ReelShelf.md) \| [`RichShelf`](../../YTNodes/classes/RichShelf.md) \| [`Shelf`](../../YTNodes/classes/Shelf.md) \| `undefined`

Defined in: [src/core/mixins/Feed.ts:162](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/mixins/Feed.ts#L162)

Finds shelf by title.

#### Parameters

##### title

`string`

#### Returns

[`ReelShelf`](../../YTNodes/classes/ReelShelf.md) \| [`RichShelf`](../../YTNodes/classes/RichShelf.md) \| [`Shelf`](../../YTNodes/classes/Shelf.md) \| `undefined`

#### Inherited from

[`TabbedFeed`](../../Mixins/classes/TabbedFeed.md).[`getShelf`](../../Mixins/classes/TabbedFeed.md#getshelf)

***

### getShorts()

> **getShorts**(): `Promise`\<`Channel`\>

Defined in: [src/parser/youtube/Channel.ts:289](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/youtube/Channel.ts#L289)

#### Returns

`Promise`\<`Channel`\>

***

### getTabByName()

> **getTabByName**(`title`): `Promise`\<[`TabbedFeed`](../../Mixins/classes/TabbedFeed.md)\<[`IBrowseResponse`](../../../../type-aliases/IBrowseResponse.md)\>\>

Defined in: [src/core/mixins/TabbedFeed.ts:23](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/mixins/TabbedFeed.ts#L23)

#### Parameters

##### title

`string`

#### Returns

`Promise`\<[`TabbedFeed`](../../Mixins/classes/TabbedFeed.md)\<[`IBrowseResponse`](../../../../type-aliases/IBrowseResponse.md)\>\>

#### Inherited from

[`TabbedFeed`](../../Mixins/classes/TabbedFeed.md).[`getTabByName`](../../Mixins/classes/TabbedFeed.md#gettabbyname)

***

### getTabByURL()

> **getTabByURL**(`url`): `Promise`\<[`TabbedFeed`](../../Mixins/classes/TabbedFeed.md)\<[`IBrowseResponse`](../../../../type-aliases/IBrowseResponse.md)\>\>

Defined in: [src/core/mixins/TabbedFeed.ts:37](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/mixins/TabbedFeed.ts#L37)

#### Parameters

##### url

`string`

#### Returns

`Promise`\<[`TabbedFeed`](../../Mixins/classes/TabbedFeed.md)\<[`IBrowseResponse`](../../../../type-aliases/IBrowseResponse.md)\>\>

#### Inherited from

[`TabbedFeed`](../../Mixins/classes/TabbedFeed.md).[`getTabByURL`](../../Mixins/classes/TabbedFeed.md#gettabbyurl)

***

### getVideos()

> **getVideos**(): `Promise`\<`Channel`\>

Defined in: [src/parser/youtube/Channel.ts:284](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/youtube/Channel.ts#L284)

#### Returns

`Promise`\<`Channel`\>

***

### hasTabWithURL()

> **hasTabWithURL**(`url`): `boolean`

Defined in: [src/core/mixins/TabbedFeed.ts:51](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/mixins/TabbedFeed.ts#L51)

#### Parameters

##### url

`string`

#### Returns

`boolean`

#### Inherited from

[`TabbedFeed`](../../Mixins/classes/TabbedFeed.md).[`hasTabWithURL`](../../Mixins/classes/TabbedFeed.md#hastabwithurl)

***

### search()

> **search**(`query`): `Promise`\<`Channel`\>

Defined in: [src/parser/youtube/Channel.ts:365](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/youtube/Channel.ts#L365)

Searches within the channel.

#### Parameters

##### query

`string`

#### Returns

`Promise`\<`Channel`\>

***

### getPlaylistsFromMemo()

> `static` **getPlaylistsFromMemo**(`memo`): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`GridPlaylist`](../../YTNodes/classes/GridPlaylist.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`Playlist`](../../YTNodes/classes/Playlist.md)\>

Defined in: [src/core/mixins/Feed.ts:95](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/mixins/Feed.ts#L95)

Get all playlists on a given page via memo

#### Parameters

##### memo

[`Memo`](../../Helpers/classes/Memo.md)

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`GridPlaylist`](../../YTNodes/classes/GridPlaylist.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`Playlist`](../../YTNodes/classes/Playlist.md)\>

#### Inherited from

[`TabbedFeed`](../../Mixins/classes/TabbedFeed.md).[`getPlaylistsFromMemo`](../../Mixins/classes/TabbedFeed.md#getplaylistsfrommemo)

***

### getVideosFromMemo()

> `static` **getVideosFromMemo**(`memo`): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`CompactVideo`](../../YTNodes/classes/CompactVideo.md) \| [`GridVideo`](../../YTNodes/classes/GridVideo.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`PlaylistPanelVideo`](../../YTNodes/classes/PlaylistPanelVideo.md) \| [`PlaylistVideo`](../../YTNodes/classes/PlaylistVideo.md) \| [`ReelItem`](../../YTNodes/classes/ReelItem.md) \| [`ShortsLockupView`](../../YTNodes/classes/ShortsLockupView.md) \| [`Video`](../../YTNodes/classes/Video.md) \| [`WatchCardCompactVideo`](../../YTNodes/classes/WatchCardCompactVideo.md)\>

Defined in: [src/core/mixins/Feed.ts:78](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/mixins/Feed.ts#L78)

Get all videos on a given page via memo

#### Parameters

##### memo

[`Memo`](../../Helpers/classes/Memo.md)

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`CompactVideo`](../../YTNodes/classes/CompactVideo.md) \| [`GridVideo`](../../YTNodes/classes/GridVideo.md) \| [`LockupView`](../../YTNodes/classes/LockupView.md) \| [`PlaylistPanelVideo`](../../YTNodes/classes/PlaylistPanelVideo.md) \| [`PlaylistVideo`](../../YTNodes/classes/PlaylistVideo.md) \| [`ReelItem`](../../YTNodes/classes/ReelItem.md) \| [`ShortsLockupView`](../../YTNodes/classes/ShortsLockupView.md) \| [`Video`](../../YTNodes/classes/Video.md) \| [`WatchCardCompactVideo`](../../YTNodes/classes/WatchCardCompactVideo.md)\>

#### Inherited from

[`TabbedFeed`](../../Mixins/classes/TabbedFeed.md).[`getVideosFromMemo`](../../Mixins/classes/TabbedFeed.md#getvideosfrommemo)
