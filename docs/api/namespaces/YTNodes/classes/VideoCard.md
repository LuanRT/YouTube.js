[youtubei.js](../../../README.md) / [YTNodes](../README.md) / VideoCard

# Class: VideoCard

## Extends

- [`Video`](Video.md)

## Constructors

### new VideoCard()

> **new VideoCard**(`data`): [`VideoCard`](VideoCard.md)

#### Parameters

• **data**: [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

#### Returns

[`VideoCard`](VideoCard.md)

#### Overrides

[`Video`](Video.md).[`constructor`](Video.md#constructors)

#### Defined in

[src/parser/classes/VideoCard.ts:12](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/VideoCard.ts#L12)

## Properties

### author

> **author**: [`Author`](../../Misc/classes/Author.md)

#### Inherited from

[`Video`](Video.md).[`author`](Video.md#author)

#### Defined in

[src/parser/classes/Video.ts:27](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L27)

***

### badges

> **badges**: [`MetadataBadge`](MetadataBadge.md)[]

#### Inherited from

[`Video`](Video.md).[`badges`](Video.md#badges)

#### Defined in

[src/parser/classes/Video.ts:28](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L28)

***

### byline\_text?

> `optional` **byline\_text**: [`Text`](../../Misc/classes/Text.md)

#### Overrides

[`Video`](Video.md).[`byline_text`](Video.md#byline_text)

#### Defined in

[src/parser/classes/VideoCard.ts:10](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/VideoCard.ts#L10)

***

### description\_snippet?

> `optional` **description\_snippet**: [`Text`](../../Misc/classes/Text.md)

#### Inherited from

[`Video`](Video.md).[`description_snippet`](Video.md#description_snippet)

#### Defined in

[src/parser/classes/Video.ts:18](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L18)

***

### duration

> **duration**: `object`

#### seconds

> **seconds**: `number`

#### text

> **text**: `string`

#### Inherited from

[`Video`](Video.md).[`duration`](Video.md#duration)

#### Defined in

[src/parser/classes/Video.ts:34](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L34)

***

### endpoint

> **endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

#### Inherited from

[`Video`](Video.md).[`endpoint`](Video.md#endpoint)

#### Defined in

[src/parser/classes/Video.ts:29](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L29)

***

### expandable\_metadata

> **expandable\_metadata**: `null` \| [`ExpandableMetadata`](ExpandableMetadata.md)

#### Inherited from

[`Video`](Video.md).[`expandable_metadata`](Video.md#expandable_metadata)

#### Defined in

[src/parser/classes/Video.ts:23](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L23)

***

### id

> **id**: `string`

#### Inherited from

[`Video`](Video.md).[`id`](Video.md#id)

#### Defined in

[src/parser/classes/Video.ts:16](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L16)

***

### is\_watched

> **is\_watched**: `boolean`

#### Inherited from

[`Video`](Video.md).[`is_watched`](Video.md#is_watched)

#### Defined in

[src/parser/classes/Video.ts:39](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L39)

***

### menu

> **menu**: `null` \| [`Menu`](Menu.md)

#### Inherited from

[`Video`](Video.md).[`menu`](Video.md#menu)

#### Defined in

[src/parser/classes/Video.ts:40](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L40)

***

### metadata\_text?

> `optional` **metadata\_text**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/VideoCard.ts:9](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/VideoCard.ts#L9)

***

### published

> **published**: [`Text`](../../Misc/classes/Text.md)

#### Inherited from

[`Video`](Video.md).[`published`](Video.md#published)

#### Defined in

[src/parser/classes/Video.ts:30](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L30)

***

### rich\_thumbnail?

> `optional` **rich\_thumbnail**: [`YTNode`](../../Helpers/classes/YTNode.md)

#### Inherited from

[`Video`](Video.md).[`rich_thumbnail`](Video.md#rich_thumbnail)

#### Defined in

[src/parser/classes/Video.ts:26](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L26)

***

### search\_video\_result\_entity\_key?

> `optional` **search\_video\_result\_entity\_key**: `string`

#### Inherited from

[`Video`](Video.md).[`search_video_result_entity_key`](Video.md#search_video_result_entity_key)

#### Defined in

[src/parser/classes/Video.ts:42](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L42)

***

### short\_view\_count

> **short\_view\_count**: [`Text`](../../Misc/classes/Text.md)

#### Inherited from

[`Video`](Video.md).[`short_view_count`](Video.md#short_view_count)

#### Defined in

[src/parser/classes/Video.ts:32](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L32)

***

### show\_action\_menu

> **show\_action\_menu**: `boolean`

#### Inherited from

[`Video`](Video.md).[`show_action_menu`](Video.md#show_action_menu)

#### Defined in

[src/parser/classes/Video.ts:38](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L38)

***

### snippets?

> `optional` **snippets**: `object`[]

#### Inherited from

[`Video`](Video.md).[`snippets`](Video.md#snippets)

#### Defined in

[src/parser/classes/Video.ts:19](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L19)

***

### thumbnail\_overlays

> **thumbnail\_overlays**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

#### Inherited from

[`Video`](Video.md).[`thumbnail_overlays`](Video.md#thumbnail_overlays)

#### Defined in

[src/parser/classes/Video.ts:25](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L25)

***

### thumbnails

> **thumbnails**: [`Thumbnail`](../../Misc/classes/Thumbnail.md)[]

#### Inherited from

[`Video`](Video.md).[`thumbnails`](Video.md#thumbnails)

#### Defined in

[src/parser/classes/Video.ts:24](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L24)

***

### title

> **title**: [`Text`](../../Misc/classes/Text.md)

#### Inherited from

[`Video`](Video.md).[`title`](Video.md#title)

#### Defined in

[src/parser/classes/Video.ts:17](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L17)

***

### type

> `readonly` **type**: `string`

#### Inherited from

[`Video`](Video.md).[`type`](Video.md#type)

#### Defined in

[src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L8)

***

### upcoming?

> `optional` **upcoming**: `Date`

#### Inherited from

[`Video`](Video.md).[`upcoming`](Video.md#upcoming)

#### Defined in

[src/parser/classes/Video.ts:33](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L33)

***

### view\_count

> **view\_count**: [`Text`](../../Misc/classes/Text.md)

#### Inherited from

[`Video`](Video.md).[`view_count`](Video.md#view_count)

#### Defined in

[src/parser/classes/Video.ts:31](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L31)

***

### type

> `static` **type**: `string` = `'VideoCard'`

#### Overrides

[`Video`](Video.md).[`type`](Video.md#type-1)

#### Defined in

[src/parser/classes/VideoCard.ts:7](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/VideoCard.ts#L7)

## Accessors

### best\_thumbnail

> `get` **best\_thumbnail**(): `undefined` \| [`Thumbnail`](../../Misc/classes/Thumbnail.md)

#### Returns

`undefined` \| [`Thumbnail`](../../Misc/classes/Thumbnail.md)

#### Inherited from

[`Video`](Video.md).[`best_thumbnail`](Video.md#best_thumbnail)

#### Defined in

[src/parser/classes/Video.ts:132](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L132)

***

### description

> `get` **description**(): `string`

#### Returns

`string`

#### Inherited from

[`Video`](Video.md).[`description`](Video.md#description)

#### Defined in

[src/parser/classes/Video.ts:101](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L101)

***

### has\_captions

> `get` **has\_captions**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`Video`](Video.md).[`has_captions`](Video.md#has_captions)

#### Defined in

[src/parser/classes/Video.ts:128](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L128)

***

### is\_4k

> `get` **is\_4k**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`Video`](Video.md).[`is_4k`](Video.md#is_4k)

#### Defined in

[src/parser/classes/Video.ts:124](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L124)

***

### is\_live

> `get` **is\_live**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`Video`](Video.md).[`is_live`](Video.md#is_live)

#### Defined in

[src/parser/classes/Video.ts:109](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L109)

***

### is\_premiere

> `get` **is\_premiere**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`Video`](Video.md).[`is_premiere`](Video.md#is_premiere)

#### Defined in

[src/parser/classes/Video.ts:120](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L120)

***

### is\_upcoming

> `get` **is\_upcoming**(): `undefined` \| `boolean`

#### Returns

`undefined` \| `boolean`

#### Inherited from

[`Video`](Video.md).[`is_upcoming`](Video.md#is_upcoming)

#### Defined in

[src/parser/classes/Video.ts:116](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/Video.ts#L116)

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

[`Video`](Video.md).[`as`](Video.md#as)

#### Defined in

[src/parser/helpers.ts:38](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L38)

***

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is VideoCard & { [k in string]: R }`

Check for a key without asserting the type.

#### Type Parameters

• **T** *extends* `string`

• **R** = `any`

#### Parameters

• **key**: `T`

The key to check

#### Returns

`this is VideoCard & { [k in string]: R }`

Whether the node has the key

#### Inherited from

[`Video`](Video.md).[`hasKey`](Video.md#haskey)

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

[`Video`](Video.md).[`is`](Video.md#is)

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

[`Video`](Video.md).[`key`](Video.md#key)

#### Defined in

[src/parser/helpers.ts:60](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L60)
