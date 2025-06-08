[youtubei.js](../../../README.md) / [YTNodes](../README.md) / CompactVideo

# Class: CompactVideo

## Extends

- [`YTNode`](../../Helpers/classes/YTNode.md)

## Constructors

### new CompactVideo()

> **new CompactVideo**(`data`): [`CompactVideo`](CompactVideo.md)

#### Parameters

• **data**: [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

#### Returns

[`CompactVideo`](CompactVideo.md)

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`constructor`](../../Helpers/classes/YTNode.md#constructors)

#### Defined in

[src/parser/classes/CompactVideo.ts:35](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/CompactVideo.ts#L35)

## Properties

### author

> **author**: [`Author`](../../Misc/classes/Author.md)

#### Defined in

[src/parser/classes/CompactVideo.ts:19](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/CompactVideo.ts#L19)

***

### badges

> **badges**: [`MetadataBadge`](MetadataBadge.md)[]

#### Defined in

[src/parser/classes/CompactVideo.ts:25](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/CompactVideo.ts#L25)

***

### endpoint?

> `optional` **endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

#### Defined in

[src/parser/classes/CompactVideo.ts:27](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/CompactVideo.ts#L27)

***

### is\_watched

> **is\_watched**: `boolean`

#### Defined in

[src/parser/classes/CompactVideo.ts:30](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/CompactVideo.ts#L30)

***

### length\_text?

> `optional` **length\_text**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/CompactVideo.ts:29](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/CompactVideo.ts#L29)

***

### long\_byline\_text?

> `optional` **long\_byline\_text**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/CompactVideo.ts:23](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/CompactVideo.ts#L23)

***

### menu

> **menu**: `null` \| [`Menu`](Menu.md)

#### Defined in

[src/parser/classes/CompactVideo.ts:28](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/CompactVideo.ts#L28)

***

### published?

> `optional` **published**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/CompactVideo.ts:24](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/CompactVideo.ts#L24)

***

### rich\_thumbnail?

> `optional` **rich\_thumbnail**: [`YTNode`](../../Helpers/classes/YTNode.md)

#### Defined in

[src/parser/classes/CompactVideo.ts:17](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/CompactVideo.ts#L17)

***

### service\_endpoint?

> `optional` **service\_endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

#### Defined in

[src/parser/classes/CompactVideo.ts:32](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/CompactVideo.ts#L32)

***

### service\_endpoints?

> `optional` **service\_endpoints**: [`NavigationEndpoint`](NavigationEndpoint.md)[]

#### Defined in

[src/parser/classes/CompactVideo.ts:31](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/CompactVideo.ts#L31)

***

### short\_byline\_text?

> `optional` **short\_byline\_text**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/CompactVideo.ts:22](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/CompactVideo.ts#L22)

***

### short\_view\_count?

> `optional` **short\_view\_count**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/CompactVideo.ts:21](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/CompactVideo.ts#L21)

***

### style?

> `optional` **style**: `"COMPACT_VIDEO_STYLE_TYPE_UNKNOWN"` \| `"COMPACT_VIDEO_STYLE_TYPE_NORMAL"` \| `"COMPACT_VIDEO_STYLE_TYPE_PROMINENT_THUMBNAIL"` \| `"COMPACT_VIDEO_STYLE_TYPE_HERO"`

#### Defined in

[src/parser/classes/CompactVideo.ts:33](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/CompactVideo.ts#L33)

***

### thumbnail\_overlays

> **thumbnail\_overlays**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

#### Defined in

[src/parser/classes/CompactVideo.ts:26](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/CompactVideo.ts#L26)

***

### thumbnails

> **thumbnails**: [`Thumbnail`](../../Misc/classes/Thumbnail.md)[]

#### Defined in

[src/parser/classes/CompactVideo.ts:16](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/CompactVideo.ts#L16)

***

### title

> **title**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/CompactVideo.ts:18](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/CompactVideo.ts#L18)

***

### type

> `readonly` **type**: `string`

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

#### Defined in

[src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/helpers.ts#L8)

***

### video\_id

> **video\_id**: `string`

#### Defined in

[src/parser/classes/CompactVideo.ts:15](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/CompactVideo.ts#L15)

***

### view\_count?

> `optional` **view\_count**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/CompactVideo.ts:20](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/CompactVideo.ts#L20)

***

### type

> `static` **type**: `string` = `'CompactVideo'`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type-1)

#### Defined in

[src/parser/classes/CompactVideo.ts:13](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/CompactVideo.ts#L13)

## Accessors

### best\_thumbnail

> `get` **best\_thumbnail**(): [`Thumbnail`](../../Misc/classes/Thumbnail.md)

#### Returns

[`Thumbnail`](../../Misc/classes/Thumbnail.md)

#### Defined in

[src/parser/classes/CompactVideo.ts:96](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/CompactVideo.ts#L96)

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

[src/parser/classes/CompactVideo.ts:87](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/CompactVideo.ts#L87)

***

### id

> `get` **id**(): `string`

#### Deprecated

Use [`video_id`](CompactVideo.md#video_id) instead.

#### Returns

`string`

#### Defined in

[src/parser/classes/CompactVideo.ts:83](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/CompactVideo.ts#L83)

***

### is\_fundraiser

> `get` **is\_fundraiser**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/classes/CompactVideo.ts:100](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/CompactVideo.ts#L100)

***

### is\_live

> `get` **is\_live**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/classes/CompactVideo.ts:104](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/CompactVideo.ts#L104)

***

### is\_new

> `get` **is\_new**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/classes/CompactVideo.ts:111](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/CompactVideo.ts#L111)

***

### is\_premiere

> `get` **is\_premiere**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/classes/CompactVideo.ts:115](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/CompactVideo.ts#L115)

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

[src/parser/helpers.ts:29](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/helpers.ts#L29)

***

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is CompactVideo & { [k in string]: R }`

Check for a key without asserting the type.

#### Type Parameters

• **T** *extends* `string`

• **R** = `any`

#### Parameters

• **key**: `T`

The key to check

#### Returns

`this is CompactVideo & { [k in string]: R }`

Whether the node has the key

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`hasKey`](../../Helpers/classes/YTNode.md#haskey)

#### Defined in

[src/parser/helpers.ts:41](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/helpers.ts#L41)

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

[src/parser/helpers.ts:19](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/helpers.ts#L19)

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

[src/parser/helpers.ts:51](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/helpers.ts#L51)
