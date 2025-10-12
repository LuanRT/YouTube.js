[youtubei.js](../../../../README.md) / [YTNodes](../README.md) / GuideSubscriptionsSection

# Class: GuideSubscriptionsSection

Defined in: [src/parser/classes/GuideSubscriptionsSection.ts:3](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/GuideSubscriptionsSection.ts#L3)

## Extends

- [`GuideSection`](GuideSection.md)

## Constructors

### Constructor

> **new GuideSubscriptionsSection**(`data`): `GuideSubscriptionsSection`

Defined in: [src/parser/classes/GuideSection.ts:12](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/GuideSection.ts#L12)

#### Parameters

##### data

[`RawNode`](../../../../type-aliases/RawNode.md)

#### Returns

`GuideSubscriptionsSection`

#### Inherited from

[`GuideSection`](GuideSection.md).[`constructor`](GuideSection.md#constructor)

## Properties

### items

> **items**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

Defined in: [src/parser/classes/GuideSection.ts:10](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/GuideSection.ts#L10)

#### Inherited from

[`GuideSection`](GuideSection.md).[`items`](GuideSection.md#items)

***

### title?

> `optional` **title**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/GuideSection.ts:9](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/GuideSection.ts#L9)

#### Inherited from

[`GuideSection`](GuideSection.md).[`title`](GuideSection.md#title)

***

### type

> `readonly` **type**: `string`

Defined in: [src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L8)

#### Inherited from

[`GuideSection`](GuideSection.md).[`type`](GuideSection.md#type)

***

### type

> `static` **type**: `string` = `'GuideSubscriptionsSection'`

Defined in: [src/parser/classes/GuideSubscriptionsSection.ts:4](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/GuideSubscriptionsSection.ts#L4)

#### Overrides

[`GuideSection`](GuideSection.md).[`type`](GuideSection.md#type-1)

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

[`GuideSection`](GuideSection.md).[`as`](GuideSection.md#as)

***

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is GuideSubscriptionsSection & { [k in string]: R }`

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

`this is GuideSubscriptionsSection & { [k in string]: R }`

Whether the node has the key

#### Inherited from

[`GuideSection`](GuideSection.md).[`hasKey`](GuideSection.md#haskey)

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

[`GuideSection`](GuideSection.md).[`is`](GuideSection.md#is)

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

[`GuideSection`](GuideSection.md).[`key`](GuideSection.md#key)
