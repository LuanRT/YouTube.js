[youtubei.js](../../../../README.md) / [YTNodes](../README.md) / CompactVideo

# Class: CompactVideo

Defined in: [src/parser/classes/CompactVideo.ts:12](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/CompactVideo.ts#L12)

## Extends

- [`YTNode`](../../Helpers/classes/YTNode.md)

## Constructors

### Constructor

> **new CompactVideo**(`data`): `CompactVideo`

Defined in: [src/parser/classes/CompactVideo.ts:35](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/CompactVideo.ts#L35)

#### Parameters

##### data

[`RawNode`](../../../../type-aliases/RawNode.md)

#### Returns

`CompactVideo`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`constructor`](../../Helpers/classes/YTNode.md#constructor)

## Properties

### author

> **author**: [`Author`](../../Misc/classes/Author.md)

Defined in: [src/parser/classes/CompactVideo.ts:19](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/CompactVideo.ts#L19)

***

### badges

> **badges**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`MetadataBadge`](MetadataBadge.md)\>

Defined in: [src/parser/classes/CompactVideo.ts:25](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/CompactVideo.ts#L25)

***

### endpoint?

> `optional` **endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

Defined in: [src/parser/classes/CompactVideo.ts:27](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/CompactVideo.ts#L27)

***

### is\_watched

> **is\_watched**: `boolean`

Defined in: [src/parser/classes/CompactVideo.ts:30](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/CompactVideo.ts#L30)

***

### length\_text?

> `optional` **length\_text**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/CompactVideo.ts:29](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/CompactVideo.ts#L29)

***

### long\_byline\_text?

> `optional` **long\_byline\_text**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/CompactVideo.ts:23](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/CompactVideo.ts#L23)

***

### menu

> **menu**: [`Menu`](Menu.md) \| `null`

Defined in: [src/parser/classes/CompactVideo.ts:28](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/CompactVideo.ts#L28)

***

### published?

> `optional` **published**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/CompactVideo.ts:24](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/CompactVideo.ts#L24)

***

### rich\_thumbnail?

> `optional` **rich\_thumbnail**: [`YTNode`](../../Helpers/classes/YTNode.md)

Defined in: [src/parser/classes/CompactVideo.ts:17](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/CompactVideo.ts#L17)

***

### service\_endpoint?

> `optional` **service\_endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

Defined in: [src/parser/classes/CompactVideo.ts:32](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/CompactVideo.ts#L32)

***

### service\_endpoints?

> `optional` **service\_endpoints**: [`NavigationEndpoint`](NavigationEndpoint.md)[]

Defined in: [src/parser/classes/CompactVideo.ts:31](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/CompactVideo.ts#L31)

***

### short\_byline\_text?

> `optional` **short\_byline\_text**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/CompactVideo.ts:22](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/CompactVideo.ts#L22)

***

### short\_view\_count?

> `optional` **short\_view\_count**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/CompactVideo.ts:21](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/CompactVideo.ts#L21)

***

### style?

> `optional` **style**: `"COMPACT_VIDEO_STYLE_TYPE_UNKNOWN"` \| `"COMPACT_VIDEO_STYLE_TYPE_NORMAL"` \| `"COMPACT_VIDEO_STYLE_TYPE_PROMINENT_THUMBNAIL"` \| `"COMPACT_VIDEO_STYLE_TYPE_HERO"`

Defined in: [src/parser/classes/CompactVideo.ts:33](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/CompactVideo.ts#L33)

***

### thumbnail\_overlays

> **thumbnail\_overlays**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

Defined in: [src/parser/classes/CompactVideo.ts:26](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/CompactVideo.ts#L26)

***

### thumbnails

> **thumbnails**: [`Thumbnail`](../../Misc/classes/Thumbnail.md)[]

Defined in: [src/parser/classes/CompactVideo.ts:16](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/CompactVideo.ts#L16)

***

### title

> **title**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/CompactVideo.ts:18](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/CompactVideo.ts#L18)

***

### type

> `readonly` **type**: `string`

Defined in: [src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L8)

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

***

### video\_id

> **video\_id**: `string`

Defined in: [src/parser/classes/CompactVideo.ts:15](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/CompactVideo.ts#L15)

***

### view\_count?

> `optional` **view\_count**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/CompactVideo.ts:20](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/CompactVideo.ts#L20)

***

### type

> `static` **type**: `string` = `'CompactVideo'`

Defined in: [src/parser/classes/CompactVideo.ts:13](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/CompactVideo.ts#L13)

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type-1)

## Accessors

### best\_thumbnail

#### Get Signature

> **get** **best\_thumbnail**(): [`Thumbnail`](../../Misc/classes/Thumbnail.md)

Defined in: [src/parser/classes/CompactVideo.ts:96](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/CompactVideo.ts#L96)

##### Returns

[`Thumbnail`](../../Misc/classes/Thumbnail.md)

***

### duration

#### Get Signature

> **get** **duration**(): `object`

Defined in: [src/parser/classes/CompactVideo.ts:87](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/CompactVideo.ts#L87)

##### Returns

`object`

###### seconds

> **seconds**: `number`

###### text

> **text**: `string` \| `undefined` = `length_text`

***

### id

#### Get Signature

> **get** **id**(): `string`

Defined in: [src/parser/classes/CompactVideo.ts:83](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/CompactVideo.ts#L83)

##### Deprecated

Use [`video_id`](#video_id) instead.

##### Returns

`string`

***

### is\_fundraiser

#### Get Signature

> **get** **is\_fundraiser**(): `boolean`

Defined in: [src/parser/classes/CompactVideo.ts:100](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/CompactVideo.ts#L100)

##### Returns

`boolean`

***

### is\_live

#### Get Signature

> **get** **is\_live**(): `boolean`

Defined in: [src/parser/classes/CompactVideo.ts:104](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/CompactVideo.ts#L104)

##### Returns

`boolean`

***

### is\_new

#### Get Signature

> **get** **is\_new**(): `boolean`

Defined in: [src/parser/classes/CompactVideo.ts:111](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/CompactVideo.ts#L111)

##### Returns

`boolean`

***

### is\_premiere

#### Get Signature

> **get** **is\_premiere**(): `boolean`

Defined in: [src/parser/classes/CompactVideo.ts:115](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/CompactVideo.ts#L115)

##### Returns

`boolean`

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

> **hasKey**\<`T`, `R`\>(`key`): `this is CompactVideo & { [k in string]: R }`

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

`this is CompactVideo & { [k in string]: R }`

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
