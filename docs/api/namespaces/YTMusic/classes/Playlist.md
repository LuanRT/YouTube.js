[youtubei.js](../../../README.md) / [YTMusic](../README.md) / Playlist

# Class: Playlist

## Constructors

### new Playlist()

> **new Playlist**(`response`, `actions`): [`Playlist`](Playlist.md)

#### Parameters

• **response**: [`ApiResponse`](../../../interfaces/ApiResponse.md)

• **actions**: [`Actions`](../../../classes/Actions.md)

#### Returns

[`Playlist`](Playlist.md)

#### Defined in

[src/parser/ytmusic/Playlist.ts:34](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/ytmusic/Playlist.ts#L34)

## Properties

### background?

> `optional` **background**: [`MusicThumbnail`](../../YTNodes/classes/MusicThumbnail.md)

#### Defined in

[src/parser/ytmusic/Playlist.ts:29](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/ytmusic/Playlist.ts#L29)

***

### contents?

> `optional` **contents**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`ContinuationItem`](../../YTNodes/classes/ContinuationItem.md) \| [`MusicResponsiveListItem`](../../YTNodes/classes/MusicResponsiveListItem.md)\>

#### Defined in

[src/parser/ytmusic/Playlist.ts:28](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/ytmusic/Playlist.ts#L28)

***

### header?

> `optional` **header**: [`MusicDetailHeader`](../../YTNodes/classes/MusicDetailHeader.md) \| [`MusicResponsiveHeader`](../../YTNodes/classes/MusicResponsiveHeader.md) \| [`MusicEditablePlaylistDetailHeader`](../../YTNodes/classes/MusicEditablePlaylistDetailHeader.md)

#### Defined in

[src/parser/ytmusic/Playlist.ts:27](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/ytmusic/Playlist.ts#L27)

## Accessors

### has\_continuation

> `get` **has\_continuation**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/ytmusic/Playlist.ts:163](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/ytmusic/Playlist.ts#L163)

***

### items

> `get` **items**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`ContinuationItem`](../../YTNodes/classes/ContinuationItem.md) \| [`MusicResponsiveListItem`](../../YTNodes/classes/MusicResponsiveListItem.md)\>

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`ContinuationItem`](../../YTNodes/classes/ContinuationItem.md) \| [`MusicResponsiveListItem`](../../YTNodes/classes/MusicResponsiveListItem.md)\>

#### Defined in

[src/parser/ytmusic/Playlist.ts:159](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/ytmusic/Playlist.ts#L159)

***

### page

> `get` **page**(): [`IBrowseResponse`](../../APIResponseTypes/type-aliases/IBrowseResponse.md)

#### Returns

[`IBrowseResponse`](../../APIResponseTypes/type-aliases/IBrowseResponse.md)

#### Defined in

[src/parser/ytmusic/Playlist.ts:155](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/ytmusic/Playlist.ts#L155)

## Methods

### getContinuation()

> **getContinuation**(): `Promise`\<[`Playlist`](Playlist.md)\>

Retrieves playlist items continuation.

#### Returns

`Promise`\<[`Playlist`](Playlist.md)\>

#### Defined in

[src/parser/ytmusic/Playlist.ts:64](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/ytmusic/Playlist.ts#L64)

***

### getRelated()

> **getRelated**(): `Promise`\<[`MusicCarouselShelf`](../../YTNodes/classes/MusicCarouselShelf.md)\>

Retrieves related playlists

#### Returns

`Promise`\<[`MusicCarouselShelf`](../../YTNodes/classes/MusicCarouselShelf.md)\>

#### Defined in

[src/parser/ytmusic/Playlist.ts:85](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/ytmusic/Playlist.ts#L85)

***

### getSuggestions()

> **getSuggestions**(`refresh`): `Promise`\<[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`MusicResponsiveListItem`](../../YTNodes/classes/MusicResponsiveListItem.md)\>\>

#### Parameters

• **refresh**: `boolean` = `true`

#### Returns

`Promise`\<[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`MusicResponsiveListItem`](../../YTNodes/classes/MusicResponsiveListItem.md)\>\>

#### Defined in

[src/parser/ytmusic/Playlist.ts:114](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/ytmusic/Playlist.ts#L114)
