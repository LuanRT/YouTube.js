[youtubei.js](../../../../README.md) / [YTMusic](../README.md) / Artist

# Class: Artist

Defined in: [src/parser/ytmusic/Artist.ts:16](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Artist.ts#L16)

## Constructors

### Constructor

> **new Artist**(`response`, `actions`): `Artist`

Defined in: [src/parser/ytmusic/Artist.ts:23](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Artist.ts#L23)

#### Parameters

##### response

[`ApiResponse`](../../../../interfaces/ApiResponse.md)

##### actions

[`Actions`](../../../../classes/Actions.md)

#### Returns

`Artist`

## Properties

### header?

> `optional` **header**: [`MusicImmersiveHeader`](../../YTNodes/classes/MusicImmersiveHeader.md) \| [`MusicVisualHeader`](../../YTNodes/classes/MusicVisualHeader.md) \| [`MusicHeader`](../../YTNodes/classes/MusicHeader.md)

Defined in: [src/parser/ytmusic/Artist.ts:20](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Artist.ts#L20)

***

### sections

> **sections**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`MusicCarouselShelf`](../../YTNodes/classes/MusicCarouselShelf.md) \| [`MusicShelf`](../../YTNodes/classes/MusicShelf.md)\>

Defined in: [src/parser/ytmusic/Artist.ts:21](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Artist.ts#L21)

## Accessors

### page

#### Get Signature

> **get** **page**(): [`IBrowseResponse`](../../../../type-aliases/IBrowseResponse.md)

Defined in: [src/parser/ytmusic/Artist.ts:53](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Artist.ts#L53)

##### Returns

[`IBrowseResponse`](../../../../type-aliases/IBrowseResponse.md)

## Methods

### getAllSongs()

> **getAllSongs**(): `Promise`\<[`MusicPlaylistShelf`](../../YTNodes/classes/MusicPlaylistShelf.md) \| `undefined`\>

Defined in: [src/parser/ytmusic/Artist.ts:35](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Artist.ts#L35)

#### Returns

`Promise`\<[`MusicPlaylistShelf`](../../YTNodes/classes/MusicPlaylistShelf.md) \| `undefined`\>
