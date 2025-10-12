[youtubei.js](../../../../README.md) / [YTMusic](../README.md) / Recap

# Class: Recap

Defined in: [src/parser/ytmusic/Recap.ts:19](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Recap.ts#L19)

## Constructors

### Constructor

> **new Recap**(`response`, `actions`): `Recap`

Defined in: [src/parser/ytmusic/Recap.ts:26](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Recap.ts#L26)

#### Parameters

##### response

[`ApiResponse`](../../../../interfaces/ApiResponse.md)

##### actions

[`Actions`](../../../../classes/Actions.md)

#### Returns

`Recap`

## Properties

### header?

> `optional` **header**: [`MusicHeader`](../../YTNodes/classes/MusicHeader.md) \| [`HighlightsCarousel`](../../YTNodes/classes/HighlightsCarousel.md)

Defined in: [src/parser/ytmusic/Recap.ts:23](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Recap.ts#L23)

***

### sections?

> `optional` **sections**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`ItemSection`](../../YTNodes/classes/ItemSection.md) \| [`Message`](../../YTNodes/classes/Message.md) \| [`MusicCarouselShelf`](../../YTNodes/classes/MusicCarouselShelf.md)\>

Defined in: [src/parser/ytmusic/Recap.ts:24](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Recap.ts#L24)

## Accessors

### page

#### Get Signature

> **get** **page**(): [`IBrowseResponse`](../../../../type-aliases/IBrowseResponse.md)

Defined in: [src/parser/ytmusic/Recap.ts:60](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Recap.ts#L60)

##### Returns

[`IBrowseResponse`](../../../../type-aliases/IBrowseResponse.md)

## Methods

### getPlaylist()

> **getPlaylist**(): `Promise`\<[`Playlist`](Playlist.md)\>

Defined in: [src/parser/ytmusic/Recap.ts:47](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Recap.ts#L47)

Retrieves recap playlist.

#### Returns

`Promise`\<[`Playlist`](Playlist.md)\>
