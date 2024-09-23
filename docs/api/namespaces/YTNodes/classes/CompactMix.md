[youtubei.js](../../../README.md) / [YTNodes](../README.md) / CompactMix

# Class: CompactMix

## Extends

- [`Playlist`](Playlist.md)

## Constructors

### new CompactMix()

> **new CompactMix**(`data`): [`CompactMix`](CompactMix.md)

#### Parameters

• **data**: [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

#### Returns

[`CompactMix`](CompactMix.md)

#### Overrides

[`Playlist`](Playlist.md).[`constructor`](Playlist.md#constructors)

#### Defined in

[src/parser/classes/CompactMix.ts:7](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/CompactMix.ts#L7)

## Properties

### author

> **author**: [`Text`](../../Misc/classes/Text.md) \| [`Author`](../../Misc/classes/Author.md)

#### Inherited from

[`Playlist`](Playlist.md).[`author`](Playlist.md#author)

#### Defined in

[src/parser/classes/Playlist.ts:15](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/Playlist.ts#L15)

***

### badges

> **badges**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

#### Inherited from

[`Playlist`](Playlist.md).[`badges`](Playlist.md#badges)

#### Defined in

[src/parser/classes/Playlist.ts:23](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/Playlist.ts#L23)

***

### endpoint

> **endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

#### Inherited from

[`Playlist`](Playlist.md).[`endpoint`](Playlist.md#endpoint)

#### Defined in

[src/parser/classes/Playlist.ts:24](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/Playlist.ts#L24)

***

### first\_videos

> **first\_videos**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

#### Inherited from

[`Playlist`](Playlist.md).[`first_videos`](Playlist.md#first_videos)

#### Defined in

[src/parser/classes/Playlist.ts:20](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/Playlist.ts#L20)

***

### id

> **id**: `string`

#### Inherited from

[`Playlist`](Playlist.md).[`id`](Playlist.md#id)

#### Defined in

[src/parser/classes/Playlist.ts:13](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/Playlist.ts#L13)

***

### menu

> **menu**: [`YTNode`](../../Helpers/classes/YTNode.md)

#### Inherited from

[`Playlist`](Playlist.md).[`menu`](Playlist.md#menu)

#### Defined in

[src/parser/classes/Playlist.ts:22](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/Playlist.ts#L22)

***

### share\_url

> **share\_url**: `null` \| `string`

#### Inherited from

[`Playlist`](Playlist.md).[`share_url`](Playlist.md#share_url)

#### Defined in

[src/parser/classes/Playlist.ts:21](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/Playlist.ts#L21)

***

### thumbnail\_overlays

> **thumbnail\_overlays**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

#### Inherited from

[`Playlist`](Playlist.md).[`thumbnail_overlays`](Playlist.md#thumbnail_overlays)

#### Defined in

[src/parser/classes/Playlist.ts:25](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/Playlist.ts#L25)

***

### thumbnail\_renderer?

> `optional` **thumbnail\_renderer**: [`PlaylistCustomThumbnail`](PlaylistCustomThumbnail.md) \| [`PlaylistVideoThumbnail`](PlaylistVideoThumbnail.md)

#### Inherited from

[`Playlist`](Playlist.md).[`thumbnail_renderer`](Playlist.md#thumbnail_renderer)

#### Defined in

[src/parser/classes/Playlist.ts:17](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/Playlist.ts#L17)

***

### thumbnails

> **thumbnails**: [`Thumbnail`](../../Misc/classes/Thumbnail.md)[]

#### Inherited from

[`Playlist`](Playlist.md).[`thumbnails`](Playlist.md#thumbnails)

#### Defined in

[src/parser/classes/Playlist.ts:16](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/Playlist.ts#L16)

***

### title

> **title**: [`Text`](../../Misc/classes/Text.md)

#### Inherited from

[`Playlist`](Playlist.md).[`title`](Playlist.md#title)

#### Defined in

[src/parser/classes/Playlist.ts:14](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/Playlist.ts#L14)

***

### type

> `readonly` **type**: `string`

#### Inherited from

[`Playlist`](Playlist.md).[`type`](Playlist.md#type)

#### Defined in

[src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L8)

***

### video\_count

> **video\_count**: [`Text`](../../Misc/classes/Text.md)

#### Inherited from

[`Playlist`](Playlist.md).[`video_count`](Playlist.md#video_count)

#### Defined in

[src/parser/classes/Playlist.ts:18](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/Playlist.ts#L18)

***

### video\_count\_short

> **video\_count\_short**: [`Text`](../../Misc/classes/Text.md)

#### Inherited from

[`Playlist`](Playlist.md).[`video_count_short`](Playlist.md#video_count_short)

#### Defined in

[src/parser/classes/Playlist.ts:19](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/Playlist.ts#L19)

***

### view\_playlist?

> `optional` **view\_playlist**: [`Text`](../../Misc/classes/Text.md)

#### Inherited from

[`Playlist`](Playlist.md).[`view_playlist`](Playlist.md#view_playlist)

#### Defined in

[src/parser/classes/Playlist.ts:26](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/Playlist.ts#L26)

***

### type

> `static` **type**: `string` = `'CompactMix'`

#### Overrides

[`Playlist`](Playlist.md).[`type`](Playlist.md#type-1)

#### Defined in

[src/parser/classes/CompactMix.ts:5](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/CompactMix.ts#L5)

## Methods

### as()

> **as**\<`T`, `K`\>(...`types`): `InstanceType`\<`K`\[`number`\]\>

Cast to one of the given types.

#### Type Parameters

• **T** *extends* [`YTNode`](../../Helpers/classes/YTNode.md)

• **K** *extends* [`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)\<`T`\>[]

#### Parameters

• ...**types**: `K`

#### Returns

`InstanceType`\<`K`\[`number`\]\>

#### Inherited from

[`Playlist`](Playlist.md).[`as`](Playlist.md#as)

#### Defined in

[src/parser/helpers.ts:35](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L35)

***

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is CompactMix & { [k in string]: R }`

Check for a key without asserting the type.

#### Type Parameters

• **T** *extends* `string`

• **R** = `any`

#### Parameters

• **key**: `T`

The key to check

#### Returns

`this is CompactMix & { [k in string]: R }`

Whether the node has the key

#### Inherited from

[`Playlist`](Playlist.md).[`hasKey`](Playlist.md#haskey)

#### Defined in

[src/parser/helpers.ts:47](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L47)

***

### is()

> **is**\<`T`, `K`\>(...`types`): `this is InstanceType<K[number]>`

Check if the node is of the given type.

#### Type Parameters

• **T** *extends* [`YTNode`](../../Helpers/classes/YTNode.md)

• **K** *extends* [`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)\<`T`\>[]

#### Parameters

• ...**types**: `K`

The type to check

#### Returns

`this is InstanceType<K[number]>`

whether the node is of the given type

#### Inherited from

[`Playlist`](Playlist.md).[`is`](Playlist.md#is)

#### Defined in

[src/parser/helpers.ts:28](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L28)

***

### key()

> **key**\<`T`, `R`\>(`key`): [`Maybe`](../../Helpers/classes/Maybe.md)

Assert that the node has the given key and return it.

#### Type Parameters

• **T** *extends* `string`

• **R** = `any`

#### Parameters

• **key**: `T`

The key to check

#### Returns

[`Maybe`](../../Helpers/classes/Maybe.md)

The value of the key wrapped in a Maybe

#### Throws

If the node does not have the key

#### Inherited from

[`Playlist`](Playlist.md).[`key`](Playlist.md#key)

#### Defined in

[src/parser/helpers.ts:57](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L57)
