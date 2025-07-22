[youtubei.js](../../../README.md) / [YTNodes](../README.md) / Video

# Class: Video

## Extends

- [`YTNode`](../../Helpers/classes/YTNode.md)

## Extended by

- [`VideoCard`](VideoCard.md)

## Constructors

### new Video()

> **new Video**(`data`): [`Video`](Video.md)

#### Parameters

• **data**: [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

#### Returns

[`Video`](Video.md)

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`constructor`](../../Helpers/classes/YTNode.md#constructors)

#### Defined in

[src/parser/classes/Video.ts:43](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/Video.ts#L43)

## Properties

### additional\_metadatas?

> `optional` **additional\_metadatas**: [`Text`](../../Misc/classes/Text.md)[]

#### Defined in

[src/parser/classes/Video.ts:22](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/Video.ts#L22)

***

### author

> **author**: [`Author`](../../Misc/classes/Author.md)

#### Defined in

[src/parser/classes/Video.ts:26](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/Video.ts#L26)

***

### badges

> **badges**: [`MetadataBadge`](MetadataBadge.md)[]

#### Defined in

[src/parser/classes/Video.ts:27](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/Video.ts#L27)

***

### byline\_text?

> `optional` **byline\_text**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/Video.ts:37](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/Video.ts#L37)

***

### description\_snippet?

> `optional` **description\_snippet**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/Video.ts:19](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/Video.ts#L19)

***

### endpoint?

> `optional` **endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

#### Defined in

[src/parser/classes/Video.ts:28](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/Video.ts#L28)

***

### expandable\_metadata

> **expandable\_metadata**: `null` \| [`ExpandableMetadata`](ExpandableMetadata.md)

#### Defined in

[src/parser/classes/Video.ts:21](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/Video.ts#L21)

***

### is\_watched

> **is\_watched**: `boolean`

#### Defined in

[src/parser/classes/Video.ts:35](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/Video.ts#L35)

***

### length\_text?

> `optional` **length\_text**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/Video.ts:33](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/Video.ts#L33)

***

### menu

> **menu**: `null` \| [`Menu`](Menu.md)

#### Defined in

[src/parser/classes/Video.ts:36](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/Video.ts#L36)

***

### published?

> `optional` **published**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/Video.ts:29](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/Video.ts#L29)

***

### rich\_thumbnail?

> `optional` **rich\_thumbnail**: [`YTNode`](../../Helpers/classes/YTNode.md)

#### Defined in

[src/parser/classes/Video.ts:25](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/Video.ts#L25)

***

### search\_video\_result\_entity\_key?

> `optional` **search\_video\_result\_entity\_key**: `string`

#### Defined in

[src/parser/classes/Video.ts:38](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/Video.ts#L38)

***

### service\_endpoint?

> `optional` **service\_endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

#### Defined in

[src/parser/classes/Video.ts:40](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/Video.ts#L40)

***

### service\_endpoints?

> `optional` **service\_endpoints**: [`NavigationEndpoint`](NavigationEndpoint.md)[]

#### Defined in

[src/parser/classes/Video.ts:39](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/Video.ts#L39)

***

### short\_view\_count?

> `optional` **short\_view\_count**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/Video.ts:31](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/Video.ts#L31)

***

### show\_action\_menu

> **show\_action\_menu**: `boolean`

#### Defined in

[src/parser/classes/Video.ts:34](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/Video.ts#L34)

***

### snippets?

> `optional` **snippets**: `object`[]

#### Defined in

[src/parser/classes/Video.ts:20](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/Video.ts#L20)

***

### style?

> `optional` **style**: `"VIDEO_STYLE_TYPE_UNKNOWN"` \| `"VIDEO_STYLE_TYPE_NORMAL"` \| `"VIDEO_STYLE_TYPE_POST"` \| `"VIDEO_STYLE_TYPE_SUB"` \| `"VIDEO_STYLE_TYPE_LIVE_POST"` \| `"VIDEO_STYLE_TYPE_FULL_BLEED_ISOLATED"` \| `"VIDEO_STYLE_TYPE_WITH_EXPANDED_METADATA"`

#### Defined in

[src/parser/classes/Video.ts:41](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/Video.ts#L41)

***

### thumbnail\_overlays

> **thumbnail\_overlays**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

#### Defined in

[src/parser/classes/Video.ts:24](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/Video.ts#L24)

***

### thumbnails

> **thumbnails**: [`Thumbnail`](../../Misc/classes/Thumbnail.md)[]

#### Defined in

[src/parser/classes/Video.ts:23](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/Video.ts#L23)

***

### title

> **title**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/Video.ts:17](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/Video.ts#L17)

***

### type

> `readonly` **type**: `string`

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

#### Defined in

[src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/helpers.ts#L8)

***

### untranslated\_title?

> `optional` **untranslated\_title**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/Video.ts:18](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/Video.ts#L18)

***

### upcoming?

> `optional` **upcoming**: `Date`

#### Defined in

[src/parser/classes/Video.ts:32](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/Video.ts#L32)

***

### video\_id

> **video\_id**: `string`

#### Defined in

[src/parser/classes/Video.ts:16](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/Video.ts#L16)

***

### view\_count?

> `optional` **view\_count**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/Video.ts:30](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/Video.ts#L30)

***

### type

> `static` **type**: `string` = `'Video'`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type-1)

#### Defined in

[src/parser/classes/Video.ts:14](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/Video.ts#L14)

## Accessors

### best\_thumbnail

> `get` **best\_thumbnail**(): `undefined` \| [`Thumbnail`](../../Misc/classes/Thumbnail.md)

#### Returns

`undefined` \| [`Thumbnail`](../../Misc/classes/Thumbnail.md)

#### Defined in

[src/parser/classes/Video.ts:148](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/Video.ts#L148)

***

### description

> `get` **description**(): `string`

#### Returns

`string`

#### Defined in

[src/parser/classes/Video.ts:119](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/Video.ts#L119)

***

### duration

> `get` **duration**(): `object`

#### Returns

`object`

##### seconds

> **seconds**: `number`

##### text

> **text**: `undefined` \| `string` = `length_text`

#### Defined in

[src/parser/classes/Video.ts:152](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/Video.ts#L152)

***

### has\_captions

> `get` **has\_captions**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/classes/Video.ts:144](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/Video.ts#L144)

***

### id

> `get` **id**(): `string`

#### Deprecated

Use [`video_id`](Video.md#video_id) instead.

#### Returns

`string`

#### Defined in

[src/parser/classes/Video.ts:115](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/Video.ts#L115)

***

### is\_4k

> `get` **is\_4k**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/classes/Video.ts:140](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/Video.ts#L140)

***

### is\_live

> `get` **is\_live**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/classes/Video.ts:125](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/Video.ts#L125)

***

### is\_premiere

> `get` **is\_premiere**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/classes/Video.ts:136](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/Video.ts#L136)

***

### is\_upcoming

> `get` **is\_upcoming**(): `undefined` \| `boolean`

#### Returns

`undefined` \| `boolean`

#### Defined in

[src/parser/classes/Video.ts:132](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/Video.ts#L132)

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

[src/parser/helpers.ts:29](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/helpers.ts#L29)

***

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is Video & { [k in string]: R }`

Check for a key without asserting the type.

#### Type Parameters

• **T** *extends* `string`

• **R** = `any`

#### Parameters

• **key**: `T`

The key to check

#### Returns

`this is Video & { [k in string]: R }`

Whether the node has the key

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`hasKey`](../../Helpers/classes/YTNode.md#haskey)

#### Defined in

[src/parser/helpers.ts:41](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/helpers.ts#L41)

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

[src/parser/helpers.ts:19](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/helpers.ts#L19)

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

[src/parser/helpers.ts:51](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/helpers.ts#L51)
