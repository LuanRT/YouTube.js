[youtubei.js](../../../../README.md) / [YTNodes](../README.md) / MusicResponsiveListItem

# Class: MusicResponsiveListItem

Defined in: [src/parser/classes/MusicResponsiveListItem.ts:23](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicResponsiveListItem.ts#L23)

## Extends

- [`YTNode`](../../Helpers/classes/YTNode.md)

## Constructors

### Constructor

> **new MusicResponsiveListItem**(`data`): `MusicResponsiveListItem`

Defined in: [src/parser/classes/MusicResponsiveListItem.ts:77](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicResponsiveListItem.ts#L77)

#### Parameters

##### data

[`RawNode`](../../../../type-aliases/RawNode.md)

#### Returns

`MusicResponsiveListItem`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`constructor`](../../Helpers/classes/YTNode.md#constructor)

## Properties

### album?

> `optional` **album**: `object`

Defined in: [src/parser/classes/MusicResponsiveListItem.ts:44](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicResponsiveListItem.ts#L44)

#### endpoint?

> `optional` **endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

#### id?

> `optional` **id**: `string`

#### name

> **name**: `string`

***

### artists?

> `optional` **artists**: `object`[]

Defined in: [src/parser/classes/MusicResponsiveListItem.ts:50](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicResponsiveListItem.ts#L50)

#### channel\_id?

> `optional` **channel\_id**: `string`

#### endpoint?

> `optional` **endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

#### name

> **name**: `string`

***

### author?

> `optional` **author**: `object`

Defined in: [src/parser/classes/MusicResponsiveListItem.ts:69](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicResponsiveListItem.ts#L69)

#### channel\_id?

> `optional` **channel\_id**: `string`

#### endpoint?

> `optional` **endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

#### name

> **name**: `string`

***

### authors?

> `optional` **authors**: `object`[]

Defined in: [src/parser/classes/MusicResponsiveListItem.ts:57](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicResponsiveListItem.ts#L57)

#### channel\_id?

> `optional` **channel\_id**: `string`

#### endpoint?

> `optional` **endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

#### name

> **name**: `string`

***

### badges?

> `optional` **badges**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

Defined in: [src/parser/classes/MusicResponsiveListItem.ts:33](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicResponsiveListItem.ts#L33)

***

### duration?

> `optional` **duration**: `object`

Defined in: [src/parser/classes/MusicResponsiveListItem.ts:39](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicResponsiveListItem.ts#L39)

#### seconds

> **seconds**: `number`

#### text

> **text**: `string`

***

### endpoint?

> `optional` **endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

Defined in: [src/parser/classes/MusicResponsiveListItem.ts:29](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicResponsiveListItem.ts#L29)

***

### fixed\_columns

> **fixed\_columns**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`MusicResponsiveListItemFixedColumn`](MusicResponsiveListItemFixedColumn.md)\>

Defined in: [src/parser/classes/MusicResponsiveListItem.ts:27](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicResponsiveListItem.ts#L27)

***

### flex\_columns

> **flex\_columns**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`MusicResponsiveListItemFlexColumn`](MusicResponsiveListItemFlexColumn.md)\>

Defined in: [src/parser/classes/MusicResponsiveListItem.ts:26](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicResponsiveListItem.ts#L26)

***

### id?

> `optional` **id**: `string`

Defined in: [src/parser/classes/MusicResponsiveListItem.ts:37](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicResponsiveListItem.ts#L37)

***

### index?

> `optional` **index**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/MusicResponsiveListItem.ts:31](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicResponsiveListItem.ts#L31)

***

### item\_count?

> `optional` **item\_count**: `string`

Defined in: [src/parser/classes/MusicResponsiveListItem.ts:74](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicResponsiveListItem.ts#L74)

***

### item\_type

> **item\_type**: `"endpoint"` \| `"unknown"` \| `"video"` \| `"playlist"` \| `"album"` \| `"artist"` \| `"library_artist"` \| `"non_music_track"` \| `"song"` \| `"podcast_show"` \| `undefined`

Defined in: [src/parser/classes/MusicResponsiveListItem.ts:30](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicResponsiveListItem.ts#L30)

***

### menu?

> `optional` **menu**: [`Menu`](Menu.md) \| `null`

Defined in: [src/parser/classes/MusicResponsiveListItem.ts:34](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicResponsiveListItem.ts#L34)

***

### name?

> `optional` **name**: `string`

Defined in: [src/parser/classes/MusicResponsiveListItem.ts:63](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicResponsiveListItem.ts#L63)

***

### overlay?

> `optional` **overlay**: [`MusicItemThumbnailOverlay`](MusicItemThumbnailOverlay.md) \| `null`

Defined in: [src/parser/classes/MusicResponsiveListItem.ts:35](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicResponsiveListItem.ts#L35)

***

### song\_count?

> `optional` **song\_count**: `string`

Defined in: [src/parser/classes/MusicResponsiveListItem.ts:66](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicResponsiveListItem.ts#L66)

***

### subscribers?

> `optional` **subscribers**: `string`

Defined in: [src/parser/classes/MusicResponsiveListItem.ts:65](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicResponsiveListItem.ts#L65)

***

### subtitle?

> `optional` **subtitle**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/MusicResponsiveListItem.ts:64](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicResponsiveListItem.ts#L64)

***

### thumbnail?

> `optional` **thumbnail**: [`MusicThumbnail`](MusicThumbnail.md) \| `null`

Defined in: [src/parser/classes/MusicResponsiveListItem.ts:32](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicResponsiveListItem.ts#L32)

***

### title?

> `optional` **title**: `string`

Defined in: [src/parser/classes/MusicResponsiveListItem.ts:38](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicResponsiveListItem.ts#L38)

***

### type

> `readonly` **type**: `string`

Defined in: [src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L8)

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

***

### views?

> `optional` **views**: `string`

Defined in: [src/parser/classes/MusicResponsiveListItem.ts:56](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicResponsiveListItem.ts#L56)

***

### year?

> `optional` **year**: `string`

Defined in: [src/parser/classes/MusicResponsiveListItem.ts:75](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicResponsiveListItem.ts#L75)

***

### type

> `static` **type**: `string` = `'MusicResponsiveListItem'`

Defined in: [src/parser/classes/MusicResponsiveListItem.ts:24](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicResponsiveListItem.ts#L24)

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type-1)

## Accessors

### thumbnails

#### Get Signature

> **get** **thumbnails**(): [`Thumbnail`](../../Misc/classes/Thumbnail.md)[]

Defined in: [src/parser/classes/MusicResponsiveListItem.ts:334](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MusicResponsiveListItem.ts#L334)

##### Returns

[`Thumbnail`](../../Misc/classes/Thumbnail.md)[]

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

[`YTNode`](../../Helpers/classes/YTNode.md).[`as`](../../Helpers/classes/YTNode.md#as)

***

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is MusicResponsiveListItem & { [k in string]: R }`

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

`this is MusicResponsiveListItem & { [k in string]: R }`

Whether the node has the key

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`hasKey`](../../Helpers/classes/YTNode.md#haskey)

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

[`YTNode`](../../Helpers/classes/YTNode.md).[`is`](../../Helpers/classes/YTNode.md#is)

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

[`YTNode`](../../Helpers/classes/YTNode.md).[`key`](../../Helpers/classes/YTNode.md#key)
