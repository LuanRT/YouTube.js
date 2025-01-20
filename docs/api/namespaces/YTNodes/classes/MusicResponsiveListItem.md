[youtubei.js](../../../README.md) / [YTNodes](../README.md) / MusicResponsiveListItem

# Class: MusicResponsiveListItem

## Extends

- [`YTNode`](../../Helpers/classes/YTNode.md)

## Constructors

### new MusicResponsiveListItem()

> **new MusicResponsiveListItem**(`data`): [`MusicResponsiveListItem`](MusicResponsiveListItem.md)

#### Parameters

• **data**: [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

#### Returns

[`MusicResponsiveListItem`](MusicResponsiveListItem.md)

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`constructor`](../../Helpers/classes/YTNode.md#constructors)

#### Defined in

[src/parser/classes/MusicResponsiveListItem.ts:76](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicResponsiveListItem.ts#L76)

## Properties

### album?

> `optional` **album**: `object`

#### endpoint?

> `optional` **endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

#### id?

> `optional` **id**: `string`

#### name

> **name**: `string`

#### Defined in

[src/parser/classes/MusicResponsiveListItem.ts:43](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicResponsiveListItem.ts#L43)

***

### artists?

> `optional` **artists**: `object`[]

#### Defined in

[src/parser/classes/MusicResponsiveListItem.ts:49](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicResponsiveListItem.ts#L49)

***

### author?

> `optional` **author**: `object`

#### channel\_id?

> `optional` **channel\_id**: `string`

#### endpoint?

> `optional` **endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

#### name

> **name**: `string`

#### Defined in

[src/parser/classes/MusicResponsiveListItem.ts:68](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicResponsiveListItem.ts#L68)

***

### authors?

> `optional` **authors**: `object`[]

#### Defined in

[src/parser/classes/MusicResponsiveListItem.ts:56](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicResponsiveListItem.ts#L56)

***

### badges

> **badges**: `undefined` \| [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

#### Defined in

[src/parser/classes/MusicResponsiveListItem.ts:32](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicResponsiveListItem.ts#L32)

***

### duration?

> `optional` **duration**: `object`

#### seconds

> **seconds**: `number`

#### text

> **text**: `string`

#### Defined in

[src/parser/classes/MusicResponsiveListItem.ts:38](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicResponsiveListItem.ts#L38)

***

### endpoint?

> `optional` **endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

#### Defined in

[src/parser/classes/MusicResponsiveListItem.ts:28](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicResponsiveListItem.ts#L28)

***

### fixed\_columns

> **fixed\_columns**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`MusicResponsiveListItemFixedColumn`](MusicResponsiveListItemFixedColumn.md)\>

#### Defined in

[src/parser/classes/MusicResponsiveListItem.ts:22](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicResponsiveListItem.ts#L22)

***

### flex\_columns

> **flex\_columns**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`MusicResponsiveListItemFlexColumn`](MusicResponsiveListItemFlexColumn.md)\>

#### Defined in

[src/parser/classes/MusicResponsiveListItem.ts:21](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicResponsiveListItem.ts#L21)

***

### id?

> `optional` **id**: `string`

#### Defined in

[src/parser/classes/MusicResponsiveListItem.ts:36](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicResponsiveListItem.ts#L36)

***

### index?

> `optional` **index**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/MusicResponsiveListItem.ts:30](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicResponsiveListItem.ts#L30)

***

### item\_count?

> `optional` **item\_count**: `string`

#### Defined in

[src/parser/classes/MusicResponsiveListItem.ts:73](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicResponsiveListItem.ts#L73)

***

### item\_type

> **item\_type**: `undefined` \| `"unknown"` \| `"endpoint"` \| `"playlist"` \| `"album"` \| `"artist"` \| `"library_artist"` \| `"non_music_track"` \| `"video"` \| `"song"` \| `"podcast_show"`

#### Defined in

[src/parser/classes/MusicResponsiveListItem.ts:29](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicResponsiveListItem.ts#L29)

***

### menu?

> `optional` **menu**: `null` \| [`Menu`](Menu.md)

#### Defined in

[src/parser/classes/MusicResponsiveListItem.ts:33](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicResponsiveListItem.ts#L33)

***

### name?

> `optional` **name**: `string`

#### Defined in

[src/parser/classes/MusicResponsiveListItem.ts:62](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicResponsiveListItem.ts#L62)

***

### overlay?

> `optional` **overlay**: `null` \| [`MusicItemThumbnailOverlay`](MusicItemThumbnailOverlay.md)

#### Defined in

[src/parser/classes/MusicResponsiveListItem.ts:34](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicResponsiveListItem.ts#L34)

***

### song\_count?

> `optional` **song\_count**: `string`

#### Defined in

[src/parser/classes/MusicResponsiveListItem.ts:65](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicResponsiveListItem.ts#L65)

***

### subscribers?

> `optional` **subscribers**: `string`

#### Defined in

[src/parser/classes/MusicResponsiveListItem.ts:64](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicResponsiveListItem.ts#L64)

***

### subtitle?

> `optional` **subtitle**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/MusicResponsiveListItem.ts:63](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicResponsiveListItem.ts#L63)

***

### thumbnail?

> `optional` **thumbnail**: `null` \| [`MusicThumbnail`](MusicThumbnail.md)

#### Defined in

[src/parser/classes/MusicResponsiveListItem.ts:31](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicResponsiveListItem.ts#L31)

***

### title?

> `optional` **title**: `string`

#### Defined in

[src/parser/classes/MusicResponsiveListItem.ts:37](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicResponsiveListItem.ts#L37)

***

### type

> `readonly` **type**: `string`

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

#### Defined in

[src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L8)

***

### views?

> `optional` **views**: `string`

#### Defined in

[src/parser/classes/MusicResponsiveListItem.ts:55](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicResponsiveListItem.ts#L55)

***

### year?

> `optional` **year**: `string`

#### Defined in

[src/parser/classes/MusicResponsiveListItem.ts:74](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicResponsiveListItem.ts#L74)

***

### type

> `static` **type**: `string` = `'MusicResponsiveListItem'`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type-1)

#### Defined in

[src/parser/classes/MusicResponsiveListItem.ts:19](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicResponsiveListItem.ts#L19)

## Accessors

### thumbnails

> `get` **thumbnails**(): [`Thumbnail`](../../Misc/classes/Thumbnail.md)[]

#### Returns

[`Thumbnail`](../../Misc/classes/Thumbnail.md)[]

#### Defined in

[src/parser/classes/MusicResponsiveListItem.ts:333](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/MusicResponsiveListItem.ts#L333)

## Methods

### as()

> **as**\<`T`, `K`\>(...`types`): `InstanceType`\<`K`\[`number`\]\>

Cast to one of the given types.

#### Type Parameters

• **T** *extends* [`YTNode`](../../Helpers/classes/YTNode.md)

• **K** *extends* [`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)\<`T`\>[]

#### Parameters

• ...**types**: `K`

The types to cast to

#### Returns

`InstanceType`\<`K`\[`number`\]\>

The node cast to one of the given types

#### Throws

If the node is not of the given type

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`as`](../../Helpers/classes/YTNode.md#as)

#### Defined in

[src/parser/helpers.ts:38](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L38)

***

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is MusicResponsiveListItem & { [k in string]: R }`

Check for a key without asserting the type.

#### Type Parameters

• **T** *extends* `string`

• **R** = `any`

#### Parameters

• **key**: `T`

The key to check

#### Returns

`this is MusicResponsiveListItem & { [k in string]: R }`

Whether the node has the key

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`hasKey`](../../Helpers/classes/YTNode.md#haskey)

#### Defined in

[src/parser/helpers.ts:50](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L50)

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

[`YTNode`](../../Helpers/classes/YTNode.md).[`is`](../../Helpers/classes/YTNode.md#is)

#### Defined in

[src/parser/helpers.ts:28](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L28)

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

[`YTNode`](../../Helpers/classes/YTNode.md).[`key`](../../Helpers/classes/YTNode.md#key)

#### Defined in

[src/parser/helpers.ts:60](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L60)
