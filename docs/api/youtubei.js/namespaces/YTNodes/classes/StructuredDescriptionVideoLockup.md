[youtubei.js](../../../../README.md) / [YTNodes](../README.md) / StructuredDescriptionVideoLockup

# Class: StructuredDescriptionVideoLockup

Defined in: [src/parser/classes/StructuredDescriptionVideoLockup.ts:7](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/classes/StructuredDescriptionVideoLockup.ts#L7)

## Extends

- [`YTNode`](../../Helpers/classes/YTNode.md)

## Constructors

### Constructor

> **new StructuredDescriptionVideoLockup**(`data`): `StructuredDescriptionVideoLockup`

Defined in: [src/parser/classes/StructuredDescriptionVideoLockup.ts:25](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/classes/StructuredDescriptionVideoLockup.ts#L25)

#### Parameters

##### data

[`RawNode`](../../../../type-aliases/RawNode.md)

#### Returns

`StructuredDescriptionVideoLockup`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`constructor`](../../Helpers/classes/YTNode.md#constructor)

## Properties

### aspect\_ratio?

> `optional` **aspect\_ratio?**: `number`

Defined in: [src/parser/classes/StructuredDescriptionVideoLockup.ts:22](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/classes/StructuredDescriptionVideoLockup.ts#L22)

***

### disable\_navigation\_endpoint

> **disable\_navigation\_endpoint**: `boolean`

Defined in: [src/parser/classes/StructuredDescriptionVideoLockup.ts:17](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/classes/StructuredDescriptionVideoLockup.ts#L17)

***

### endpoint

> **endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

Defined in: [src/parser/classes/StructuredDescriptionVideoLockup.ts:14](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/classes/StructuredDescriptionVideoLockup.ts#L14)

***

### is\_live\_video

> **is\_live\_video**: `boolean`

Defined in: [src/parser/classes/StructuredDescriptionVideoLockup.ts:16](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/classes/StructuredDescriptionVideoLockup.ts#L16)

***

### length\_text?

> `optional` **length\_text?**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/StructuredDescriptionVideoLockup.ts:15](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/classes/StructuredDescriptionVideoLockup.ts#L15)

***

### max\_lines\_metadata\_details?

> `optional` **max\_lines\_metadata\_details?**: `number`

Defined in: [src/parser/classes/StructuredDescriptionVideoLockup.ts:20](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/classes/StructuredDescriptionVideoLockup.ts#L20)

***

### max\_lines\_short\_byline\_text?

> `optional` **max\_lines\_short\_byline\_text?**: `number`

Defined in: [src/parser/classes/StructuredDescriptionVideoLockup.ts:19](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/classes/StructuredDescriptionVideoLockup.ts#L19)

***

### max\_lines\_title?

> `optional` **max\_lines\_title?**: `number`

Defined in: [src/parser/classes/StructuredDescriptionVideoLockup.ts:18](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/classes/StructuredDescriptionVideoLockup.ts#L18)

***

### metadata\_details?

> `optional` **metadata\_details?**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/StructuredDescriptionVideoLockup.ts:13](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/classes/StructuredDescriptionVideoLockup.ts#L13)

***

### short\_byline\_text?

> `optional` **short\_byline\_text?**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/StructuredDescriptionVideoLockup.ts:12](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/classes/StructuredDescriptionVideoLockup.ts#L12)

***

### thumbnail

> **thumbnail**: [`Thumbnail`](../../Misc/classes/Thumbnail.md)[]

Defined in: [src/parser/classes/StructuredDescriptionVideoLockup.ts:10](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/classes/StructuredDescriptionVideoLockup.ts#L10)

***

### thumbnail\_overlays

> **thumbnail\_overlays**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

Defined in: [src/parser/classes/StructuredDescriptionVideoLockup.ts:23](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/classes/StructuredDescriptionVideoLockup.ts#L23)

***

### thumbnail\_width?

> `optional` **thumbnail\_width?**: `number`

Defined in: [src/parser/classes/StructuredDescriptionVideoLockup.ts:21](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/classes/StructuredDescriptionVideoLockup.ts#L21)

***

### title

> **title**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/StructuredDescriptionVideoLockup.ts:11](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/classes/StructuredDescriptionVideoLockup.ts#L11)

***

### type

> `readonly` **type**: `string`

Defined in: [src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/helpers.ts#L8)

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

***

### type

> `static` **type**: `string` = `'StructuredDescriptionVideoLockup'`

Defined in: [src/parser/classes/StructuredDescriptionVideoLockup.ts:8](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/classes/StructuredDescriptionVideoLockup.ts#L8)

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type-1)

## Methods

### as()

> **as**\<`T`, `K`\>(...`types`): `InstanceType`\<`K`\[`number`\]\>

Defined in: [src/parser/helpers.ts:29](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/helpers.ts#L29)

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

> **hasKey**\<`T`, `R`\>(`key`): `this is StructuredDescriptionVideoLockup & { [k in string]: R }`

Defined in: [src/parser/helpers.ts:41](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/helpers.ts#L41)

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

`this is StructuredDescriptionVideoLockup & { [k in string]: R }`

Whether the node has the key

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`hasKey`](../../Helpers/classes/YTNode.md#haskey)

***

### is()

> **is**\<`T`, `K`\>(...`types`): `this is InstanceType<K[number]>`

Defined in: [src/parser/helpers.ts:19](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/helpers.ts#L19)

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

Defined in: [src/parser/helpers.ts:51](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/helpers.ts#L51)

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
