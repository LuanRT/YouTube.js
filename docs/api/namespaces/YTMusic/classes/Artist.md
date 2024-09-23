[youtubei.js](../../../README.md) / [YTMusic](../README.md) / Artist

# Class: Artist

## Constructors

### new Artist()

> **new Artist**(`response`, `actions`): [`Artist`](Artist.md)

#### Parameters

• **response**: [`ApiResponse`](../../../interfaces/ApiResponse.md)

• **actions**: [`Actions`](../../../classes/Actions.md)

#### Returns

[`Artist`](Artist.md)

#### Defined in

[src/parser/ytmusic/Artist.ts:23](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/ytmusic/Artist.ts#L23)

## Properties

### header?

> `optional` **header**: [`MusicImmersiveHeader`](../../YTNodes/classes/MusicImmersiveHeader.md) \| [`MusicVisualHeader`](../../YTNodes/classes/MusicVisualHeader.md) \| [`MusicHeader`](../../YTNodes/classes/MusicHeader.md)

#### Defined in

[src/parser/ytmusic/Artist.ts:20](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/ytmusic/Artist.ts#L20)

***

### sections

> **sections**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`MusicCarouselShelf`](../../YTNodes/classes/MusicCarouselShelf.md) \| [`MusicShelf`](../../YTNodes/classes/MusicShelf.md)\>

#### Defined in

[src/parser/ytmusic/Artist.ts:21](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/ytmusic/Artist.ts#L21)

## Accessors

### page

> `get` **page**(): [`IBrowseResponse`](../../APIResponseTypes/type-aliases/IBrowseResponse.md)

#### Returns

[`IBrowseResponse`](../../APIResponseTypes/type-aliases/IBrowseResponse.md)

#### Defined in

[src/parser/ytmusic/Artist.ts:55](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/ytmusic/Artist.ts#L55)

## Methods

### getAllSongs()

> **getAllSongs**(): `Promise`\<`undefined` \| [`MusicPlaylistShelf`](../../YTNodes/classes/MusicPlaylistShelf.md)\>

#### Returns

`Promise`\<`undefined` \| [`MusicPlaylistShelf`](../../YTNodes/classes/MusicPlaylistShelf.md)\>

#### Defined in

[src/parser/ytmusic/Artist.ts:35](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/ytmusic/Artist.ts#L35)
