[youtubei.js](../../../../README.md) / [YTMusic](../README.md) / Playlist

# Class: Playlist

Defined in: [src/parser/ytmusic/Playlist.ts:22](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Playlist.ts#L22)

## Constructors

### Constructor

> **new Playlist**(`response`, `actions`): `Playlist`

Defined in: [src/parser/ytmusic/Playlist.ts:34](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Playlist.ts#L34)

#### Parameters

##### response

[`ApiResponse`](../../../../interfaces/ApiResponse.md)

##### actions

[`Actions`](../../../../classes/Actions.md)

#### Returns

`Playlist`

## Properties

### background?

> `optional` **background**: [`MusicThumbnail`](../../YTNodes/classes/MusicThumbnail.md)

Defined in: [src/parser/ytmusic/Playlist.ts:29](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Playlist.ts#L29)

***

### contents?

> `optional` **contents**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`ContinuationItem`](../../YTNodes/classes/ContinuationItem.md) \| [`MusicResponsiveListItem`](../../YTNodes/classes/MusicResponsiveListItem.md)\>

Defined in: [src/parser/ytmusic/Playlist.ts:28](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Playlist.ts#L28)

***

### header?

> `optional` **header**: [`MusicDetailHeader`](../../YTNodes/classes/MusicDetailHeader.md) \| [`MusicResponsiveHeader`](../../YTNodes/classes/MusicResponsiveHeader.md) \| [`MusicEditablePlaylistDetailHeader`](../../YTNodes/classes/MusicEditablePlaylistDetailHeader.md)

Defined in: [src/parser/ytmusic/Playlist.ts:27](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Playlist.ts#L27)

## Accessors

### has\_continuation

#### Get Signature

> **get** **has\_continuation**(): `boolean`

Defined in: [src/parser/ytmusic/Playlist.ts:163](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Playlist.ts#L163)

##### Returns

`boolean`

***

### items

#### Get Signature

> **get** **items**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`ContinuationItem`](../../YTNodes/classes/ContinuationItem.md) \| [`MusicResponsiveListItem`](../../YTNodes/classes/MusicResponsiveListItem.md)\>

Defined in: [src/parser/ytmusic/Playlist.ts:159](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Playlist.ts#L159)

##### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`ContinuationItem`](../../YTNodes/classes/ContinuationItem.md) \| [`MusicResponsiveListItem`](../../YTNodes/classes/MusicResponsiveListItem.md)\>

***

### page

#### Get Signature

> **get** **page**(): [`IBrowseResponse`](../../../../type-aliases/IBrowseResponse.md)

Defined in: [src/parser/ytmusic/Playlist.ts:155](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Playlist.ts#L155)

##### Returns

[`IBrowseResponse`](../../../../type-aliases/IBrowseResponse.md)

## Methods

### getContinuation()

> **getContinuation**(): `Promise`\<`Playlist`\>

Defined in: [src/parser/ytmusic/Playlist.ts:64](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Playlist.ts#L64)

Retrieves playlist items continuation.

#### Returns

`Promise`\<`Playlist`\>

***

### getRelated()

> **getRelated**(): `Promise`\<[`MusicCarouselShelf`](../../YTNodes/classes/MusicCarouselShelf.md)\>

Defined in: [src/parser/ytmusic/Playlist.ts:85](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Playlist.ts#L85)

Retrieves related playlists

#### Returns

`Promise`\<[`MusicCarouselShelf`](../../YTNodes/classes/MusicCarouselShelf.md)\>

***

### getSuggestions()

> **getSuggestions**(`refresh`): `Promise`\<[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`MusicResponsiveListItem`](../../YTNodes/classes/MusicResponsiveListItem.md)\>\>

Defined in: [src/parser/ytmusic/Playlist.ts:114](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Playlist.ts#L114)

#### Parameters

##### refresh

`boolean` = `true`

#### Returns

`Promise`\<[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`MusicResponsiveListItem`](../../YTNodes/classes/MusicResponsiveListItem.md)\>\>
