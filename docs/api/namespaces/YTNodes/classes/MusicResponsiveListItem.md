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

[src/parser/classes/MusicResponsiveListItem.ts:77](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/classes/MusicResponsiveListItem.ts#L77)

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

[src/parser/classes/MusicResponsiveListItem.ts:44](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/classes/MusicResponsiveListItem.ts#L44)

***

### artists?

> `optional` **artists**: `object`[]

#### Defined in

[src/parser/classes/MusicResponsiveListItem.ts:50](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/classes/MusicResponsiveListItem.ts#L50)

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

[src/parser/classes/MusicResponsiveListItem.ts:69](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/classes/MusicResponsiveListItem.ts#L69)

***

### authors?

> `optional` **authors**: `object`[]

#### Defined in

[src/parser/classes/MusicResponsiveListItem.ts:57](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/classes/MusicResponsiveListItem.ts#L57)

***

### badges?

> `optional` **badges**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

#### Defined in

[src/parser/classes/MusicResponsiveListItem.ts:33](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/classes/MusicResponsiveListItem.ts#L33)

***

### duration?

> `optional` **duration**: `object`

#### seconds

> **seconds**: `number`

#### text

> **text**: `string`

#### Defined in

[src/parser/classes/MusicResponsiveListItem.ts:39](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/classes/MusicResponsiveListItem.ts#L39)

***

### endpoint?

> `optional` **endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

#### Defined in

[src/parser/classes/MusicResponsiveListItem.ts:29](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/classes/MusicResponsiveListItem.ts#L29)

***

### fixed\_columns

> **fixed\_columns**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`MusicResponsiveListItemFixedColumn`](MusicResponsiveListItemFixedColumn.md)\>

#### Defined in

[src/parser/classes/MusicResponsiveListItem.ts:27](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/classes/MusicResponsiveListItem.ts#L27)

***

### flex\_columns

> **flex\_columns**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`MusicResponsiveListItemFlexColumn`](MusicResponsiveListItemFlexColumn.md)\>

#### Defined in

[src/parser/classes/MusicResponsiveListItem.ts:26](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/classes/MusicResponsiveListItem.ts#L26)

***

### id?

> `optional` **id**: `string`

#### Defined in

[src/parser/classes/MusicResponsiveListItem.ts:37](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/classes/MusicResponsiveListItem.ts#L37)

***

### index?

> `optional` **index**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/MusicResponsiveListItem.ts:31](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/classes/MusicResponsiveListItem.ts#L31)

***

### item\_count?

> `optional` **item\_count**: `string`

#### Defined in

[src/parser/classes/MusicResponsiveListItem.ts:74](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/classes/MusicResponsiveListItem.ts#L74)

***

### item\_type

> **item\_type**: `undefined` \| `"endpoint"` \| `"unknown"` \| `"video"` \| `"playlist"` \| `"album"` \| `"artist"` \| `"library_artist"` \| `"non_music_track"` \| `"song"` \| `"podcast_show"`

#### Defined in

[src/parser/classes/MusicResponsiveListItem.ts:30](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/classes/MusicResponsiveListItem.ts#L30)

***

### menu?

> `optional` **menu**: `null` \| [`Menu`](Menu.md)

#### Defined in

[src/parser/classes/MusicResponsiveListItem.ts:34](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/classes/MusicResponsiveListItem.ts#L34)

***

### name?

> `optional` **name**: `string`

#### Defined in

[src/parser/classes/MusicResponsiveListItem.ts:63](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/classes/MusicResponsiveListItem.ts#L63)

***

### overlay?

> `optional` **overlay**: `null` \| [`MusicItemThumbnailOverlay`](MusicItemThumbnailOverlay.md)

#### Defined in

[src/parser/classes/MusicResponsiveListItem.ts:35](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/classes/MusicResponsiveListItem.ts#L35)

***

### song\_count?

> `optional` **song\_count**: `string`

#### Defined in

[src/parser/classes/MusicResponsiveListItem.ts:66](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/classes/MusicResponsiveListItem.ts#L66)

***

### subscribers?

> `optional` **subscribers**: `string`

#### Defined in

[src/parser/classes/MusicResponsiveListItem.ts:65](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/classes/MusicResponsiveListItem.ts#L65)

***

### subtitle?

> `optional` **subtitle**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/MusicResponsiveListItem.ts:64](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/classes/MusicResponsiveListItem.ts#L64)

***

### thumbnail?

> `optional` **thumbnail**: `null` \| [`MusicThumbnail`](MusicThumbnail.md)

#### Defined in

[src/parser/classes/MusicResponsiveListItem.ts:32](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/classes/MusicResponsiveListItem.ts#L32)

***

### title?

> `optional` **title**: `string`

#### Defined in

[src/parser/classes/MusicResponsiveListItem.ts:38](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/classes/MusicResponsiveListItem.ts#L38)

***

### type

> `readonly` **type**: `string`

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

#### Defined in

[src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/helpers.ts#L8)

***

### views?

> `optional` **views**: `string`

#### Defined in

[src/parser/classes/MusicResponsiveListItem.ts:56](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/classes/MusicResponsiveListItem.ts#L56)

***

### year?

> `optional` **year**: `string`

#### Defined in

[src/parser/classes/MusicResponsiveListItem.ts:75](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/classes/MusicResponsiveListItem.ts#L75)

***

### type

> `static` **type**: `string` = `'MusicResponsiveListItem'`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type-1)

#### Defined in

[src/parser/classes/MusicResponsiveListItem.ts:24](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/classes/MusicResponsiveListItem.ts#L24)

## Accessors

### thumbnails

> `get` **thumbnails**(): [`Thumbnail`](../../Misc/classes/Thumbnail.md)[]

#### Returns

[`Thumbnail`](../../Misc/classes/Thumbnail.md)[]

#### Defined in

[src/parser/classes/MusicResponsiveListItem.ts:334](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/classes/MusicResponsiveListItem.ts#L334)

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

[src/parser/helpers.ts:29](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/helpers.ts#L29)

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

[src/parser/helpers.ts:41](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/helpers.ts#L41)

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

[src/parser/helpers.ts:19](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/helpers.ts#L19)

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

[src/parser/helpers.ts:51](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/helpers.ts#L51)
