[youtubei.js](../../../../README.md) / [YTNodes](../README.md) / CompactPlaylist

# Class: CompactPlaylist

Defined in: [src/parser/classes/CompactPlaylist.ts:4](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/CompactPlaylist.ts#L4)

## Extends

- [`Playlist`](Playlist.md)

## Constructors

### Constructor

> **new CompactPlaylist**(`data`): `CompactPlaylist`

Defined in: [src/parser/classes/CompactPlaylist.ts:7](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/CompactPlaylist.ts#L7)

#### Parameters

##### data

[`RawNode`](../../../../type-aliases/RawNode.md)

#### Returns

`CompactPlaylist`

#### Overrides

[`Playlist`](Playlist.md).[`constructor`](Playlist.md#constructor)

## Properties

### author

> **author**: [`Text`](../../Misc/classes/Text.md) \| [`Author`](../../Misc/classes/Author.md)

Defined in: [src/parser/classes/Playlist.ts:15](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Playlist.ts#L15)

#### Inherited from

[`Playlist`](Playlist.md).[`author`](Playlist.md#author)

***

### badges

> **badges**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

Defined in: [src/parser/classes/Playlist.ts:23](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Playlist.ts#L23)

#### Inherited from

[`Playlist`](Playlist.md).[`badges`](Playlist.md#badges)

***

### endpoint

> **endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

Defined in: [src/parser/classes/Playlist.ts:24](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Playlist.ts#L24)

#### Inherited from

[`Playlist`](Playlist.md).[`endpoint`](Playlist.md#endpoint)

***

### first\_videos

> **first\_videos**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

Defined in: [src/parser/classes/Playlist.ts:20](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Playlist.ts#L20)

#### Inherited from

[`Playlist`](Playlist.md).[`first_videos`](Playlist.md#first_videos)

***

### id

> **id**: `string`

Defined in: [src/parser/classes/Playlist.ts:13](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Playlist.ts#L13)

#### Inherited from

[`Playlist`](Playlist.md).[`id`](Playlist.md#id)

***

### menu

> **menu**: [`YTNode`](../../Helpers/classes/YTNode.md)

Defined in: [src/parser/classes/Playlist.ts:22](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Playlist.ts#L22)

#### Inherited from

[`Playlist`](Playlist.md).[`menu`](Playlist.md#menu)

***

### share\_url

> **share\_url**: `string` \| `null`

Defined in: [src/parser/classes/Playlist.ts:21](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Playlist.ts#L21)

#### Inherited from

[`Playlist`](Playlist.md).[`share_url`](Playlist.md#share_url)

***

### thumbnail\_overlays

> **thumbnail\_overlays**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

Defined in: [src/parser/classes/Playlist.ts:25](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Playlist.ts#L25)

#### Inherited from

[`Playlist`](Playlist.md).[`thumbnail_overlays`](Playlist.md#thumbnail_overlays)

***

### thumbnail\_renderer?

> `optional` **thumbnail\_renderer**: [`PlaylistCustomThumbnail`](PlaylistCustomThumbnail.md) \| [`PlaylistVideoThumbnail`](PlaylistVideoThumbnail.md)

Defined in: [src/parser/classes/Playlist.ts:17](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Playlist.ts#L17)

#### Inherited from

[`Playlist`](Playlist.md).[`thumbnail_renderer`](Playlist.md#thumbnail_renderer)

***

### thumbnails

> **thumbnails**: [`Thumbnail`](../../Misc/classes/Thumbnail.md)[]

Defined in: [src/parser/classes/Playlist.ts:16](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Playlist.ts#L16)

#### Inherited from

[`Playlist`](Playlist.md).[`thumbnails`](Playlist.md#thumbnails)

***

### title

> **title**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/Playlist.ts:14](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Playlist.ts#L14)

#### Inherited from

[`Playlist`](Playlist.md).[`title`](Playlist.md#title)

***

### type

> `readonly` **type**: `string`

Defined in: [src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L8)

#### Inherited from

[`Playlist`](Playlist.md).[`type`](Playlist.md#type)

***

### video\_count

> **video\_count**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/Playlist.ts:18](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Playlist.ts#L18)

#### Inherited from

[`Playlist`](Playlist.md).[`video_count`](Playlist.md#video_count)

***

### video\_count\_short

> **video\_count\_short**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/Playlist.ts:19](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Playlist.ts#L19)

#### Inherited from

[`Playlist`](Playlist.md).[`video_count_short`](Playlist.md#video_count_short)

***

### view\_playlist?

> `optional` **view\_playlist**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/Playlist.ts:26](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Playlist.ts#L26)

#### Inherited from

[`Playlist`](Playlist.md).[`view_playlist`](Playlist.md#view_playlist)

***

### type

> `static` **type**: `string` = `'CompactPlaylist'`

Defined in: [src/parser/classes/CompactPlaylist.ts:5](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/CompactPlaylist.ts#L5)

#### Overrides

[`Playlist`](Playlist.md).[`type`](Playlist.md#type-1)

## Methods

### as()

> **as**\<`T`, `K`\>(...`types`): `InstanceType`\<`K`\[`number`\]\>

Defined in: [src/parser/helpers.ts:29](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L29)

Cast to one of the given types.

#### Type Parameters

##### T

`T` *extends* [`YTNode`](../../Helpers/classes/YTNode.md)

##### K

`K` *extends* [`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)\<`T`\>[]

#### Parameters

##### types

...`K`

The types to cast to

#### Returns

`InstanceType`\<`K`\[`number`\]\>

The node cast to one of the given types

#### Throws

If the node is not of the given type

#### Inherited from

[`Playlist`](Playlist.md).[`as`](Playlist.md#as)

***

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is CompactPlaylist & { [k in string]: R }`

Defined in: [src/parser/helpers.ts:41](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L41)

Check for a key without asserting the type.

#### Type Parameters

##### T

`T` *extends* `string`

##### R

`R` = `any`

#### Parameters

##### key

`T`

The key to check

#### Returns

`this is CompactPlaylist & { [k in string]: R }`

Whether the node has the key

#### Inherited from

[`Playlist`](Playlist.md).[`hasKey`](Playlist.md#haskey)

***

### is()

> **is**\<`T`, `K`\>(...`types`): `this is InstanceType<K[number]>`

Defined in: [src/parser/helpers.ts:19](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L19)

Check if the node is of the given type.

#### Type Parameters

##### T

`T` *extends* [`YTNode`](../../Helpers/classes/YTNode.md)

##### K

`K` *extends* [`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)\<`T`\>[]

#### Parameters

##### types

...`K`

The type to check

#### Returns

`this is InstanceType<K[number]>`

whether the node is of the given type

#### Inherited from

[`Playlist`](Playlist.md).[`is`](Playlist.md#is)

***

### key()

> **key**\<`T`, `R`\>(`key`): [`Maybe`](../../Helpers/classes/Maybe.md)

Defined in: [src/parser/helpers.ts:51](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L51)

Assert that the node has the given key and return it.

#### Type Parameters

##### T

`T` *extends* `string`

##### R

`R` = `any`

#### Parameters

##### key

`T`

The key to check

#### Returns

[`Maybe`](../../Helpers/classes/Maybe.md)

The value of the key wrapped in a Maybe

#### Throws

If the node does not have the key

#### Inherited from

[`Playlist`](Playlist.md).[`key`](Playlist.md#key)
