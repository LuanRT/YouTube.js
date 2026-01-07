[youtubei.js](../../../../README.md) / [YTMusic](../README.md) / Album

# Class: Album

Defined in: [src/parser/ytmusic/Album.ts:15](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Album.ts#L15)

## Constructors

### Constructor

> **new Album**(`response`): `Album`

Defined in: [src/parser/ytmusic/Album.ts:24](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Album.ts#L24)

#### Parameters

##### response

[`ApiResponse`](../../../../interfaces/ApiResponse.md)

#### Returns

`Album`

## Properties

### background?

> `optional` **background**: [`MusicThumbnail`](../../YTNodes/classes/MusicThumbnail.md)

Defined in: [src/parser/ytmusic/Album.ts:21](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Album.ts#L21)

***

### contents

> **contents**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`MusicResponsiveListItem`](../../YTNodes/classes/MusicResponsiveListItem.md)\>

Defined in: [src/parser/ytmusic/Album.ts:19](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Album.ts#L19)

***

### header?

> `optional` **header**: [`MusicDetailHeader`](../../YTNodes/classes/MusicDetailHeader.md) \| [`MusicResponsiveHeader`](../../YTNodes/classes/MusicResponsiveHeader.md)

Defined in: [src/parser/ytmusic/Album.ts:18](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Album.ts#L18)

***

### sections

> **sections**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`MusicCarouselShelf`](../../YTNodes/classes/MusicCarouselShelf.md)\>

Defined in: [src/parser/ytmusic/Album.ts:20](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Album.ts#L20)

***

### url?

> `optional` **url**: `string`

Defined in: [src/parser/ytmusic/Album.ts:22](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Album.ts#L22)

## Accessors

### page

#### Get Signature

> **get** **page**(): [`IBrowseResponse`](../../../../type-aliases/IBrowseResponse.md)

Defined in: [src/parser/ytmusic/Album.ts:37](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/ytmusic/Album.ts#L37)

##### Returns

[`IBrowseResponse`](../../../../type-aliases/IBrowseResponse.md)
