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

[src/parser/ytmusic/Playlist.ts:32](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytmusic/Playlist.ts#L32)

## Properties

### background?

> `optional` **background**: [`MusicThumbnail`](../../YTNodes/classes/MusicThumbnail.md)

#### Defined in

[src/parser/ytmusic/Playlist.ts:27](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytmusic/Playlist.ts#L27)

***

### contents?

> `optional` **contents**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`MusicResponsiveListItem`](../../YTNodes/classes/MusicResponsiveListItem.md)\>

#### Defined in

[src/parser/ytmusic/Playlist.ts:26](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytmusic/Playlist.ts#L26)

***

### header?

> `optional` **header**: [`MusicDetailHeader`](../../YTNodes/classes/MusicDetailHeader.md) \| [`MusicResponsiveHeader`](../../YTNodes/classes/MusicResponsiveHeader.md) \| [`MusicEditablePlaylistDetailHeader`](../../YTNodes/classes/MusicEditablePlaylistDetailHeader.md)

#### Defined in

[src/parser/ytmusic/Playlist.ts:25](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytmusic/Playlist.ts#L25)

## Accessors

### has\_continuation

> `get` **has\_continuation**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/ytmusic/Playlist.ts:151](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytmusic/Playlist.ts#L151)

***

### items

> `get` **items**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`MusicResponsiveListItem`](../../YTNodes/classes/MusicResponsiveListItem.md)\>

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`MusicResponsiveListItem`](../../YTNodes/classes/MusicResponsiveListItem.md)\>

#### Defined in

[src/parser/ytmusic/Playlist.ts:147](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytmusic/Playlist.ts#L147)

***

### page

> `get` **page**(): [`IBrowseResponse`](../../APIResponseTypes/type-aliases/IBrowseResponse.md)

#### Returns

[`IBrowseResponse`](../../APIResponseTypes/type-aliases/IBrowseResponse.md)

#### Defined in

[src/parser/ytmusic/Playlist.ts:143](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytmusic/Playlist.ts#L143)

## Methods

### getContinuation()

> **getContinuation**(): `Promise`\<[`Playlist`](Playlist.md)\>

Retrieves playlist items continuation.

#### Returns

`Promise`\<[`Playlist`](Playlist.md)\>

#### Defined in

[src/parser/ytmusic/Playlist.ts:58](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytmusic/Playlist.ts#L58)

***

### getRelated()

> **getRelated**(): `Promise`\<[`MusicCarouselShelf`](../../YTNodes/classes/MusicCarouselShelf.md)\>

Retrieves related playlists

#### Returns

`Promise`\<[`MusicCarouselShelf`](../../YTNodes/classes/MusicCarouselShelf.md)\>

#### Defined in

[src/parser/ytmusic/Playlist.ts:73](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytmusic/Playlist.ts#L73)

***

### getSuggestions()

> **getSuggestions**(`refresh`): `Promise`\<[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`MusicResponsiveListItem`](../../YTNodes/classes/MusicResponsiveListItem.md)\>\>

#### Parameters

• **refresh**: `boolean` = `true`

#### Returns

`Promise`\<[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`MusicResponsiveListItem`](../../YTNodes/classes/MusicResponsiveListItem.md)\>\>

#### Defined in

[src/parser/ytmusic/Playlist.ts:102](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytmusic/Playlist.ts#L102)
