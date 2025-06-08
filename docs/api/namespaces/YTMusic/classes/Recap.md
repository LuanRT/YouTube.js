[youtubei.js](../../../README.md) / [YTMusic](../README.md) / Recap

# Class: Recap

## Constructors

### new Recap()

> **new Recap**(`response`, `actions`): [`Recap`](Recap.md)

#### Parameters

• **response**: [`ApiResponse`](../../../interfaces/ApiResponse.md)

• **actions**: [`Actions`](../../../classes/Actions.md)

#### Returns

[`Recap`](Recap.md)

#### Defined in

[src/parser/ytmusic/Recap.ts:26](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytmusic/Recap.ts#L26)

## Properties

### header?

> `optional` **header**: [`MusicHeader`](../../YTNodes/classes/MusicHeader.md) \| [`HighlightsCarousel`](../../YTNodes/classes/HighlightsCarousel.md)

#### Defined in

[src/parser/ytmusic/Recap.ts:23](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytmusic/Recap.ts#L23)

***

### sections?

> `optional` **sections**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`ItemSection`](../../YTNodes/classes/ItemSection.md) \| [`Message`](../../YTNodes/classes/Message.md) \| [`MusicCarouselShelf`](../../YTNodes/classes/MusicCarouselShelf.md)\>

#### Defined in

[src/parser/ytmusic/Recap.ts:24](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytmusic/Recap.ts#L24)

## Accessors

### page

> `get` **page**(): [`IBrowseResponse`](../../APIResponseTypes/type-aliases/IBrowseResponse.md)

#### Returns

[`IBrowseResponse`](../../APIResponseTypes/type-aliases/IBrowseResponse.md)

#### Defined in

[src/parser/ytmusic/Recap.ts:60](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytmusic/Recap.ts#L60)

## Methods

### getPlaylist()

> **getPlaylist**(): `Promise`\<[`Playlist`](Playlist.md)\>

Retrieves recap playlist.

#### Returns

`Promise`\<[`Playlist`](Playlist.md)\>

#### Defined in

[src/parser/ytmusic/Recap.ts:47](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/ytmusic/Recap.ts#L47)
