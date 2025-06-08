[youtubei.js](../../../README.md) / [YTNodes](../README.md) / LiveChatBanner

# Class: LiveChatBanner

## Extends

- [`YTNode`](../../Helpers/classes/YTNode.md)

## Constructors

### new LiveChatBanner()

> **new LiveChatBanner**(`data`): [`LiveChatBanner`](LiveChatBanner.md)

#### Parameters

• **data**: [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

#### Returns

[`LiveChatBanner`](LiveChatBanner.md)

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`constructor`](../../Helpers/classes/YTNode.md#constructors)

#### Defined in

[src/parser/classes/livechat/items/LiveChatBanner.ts:20](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/livechat/items/LiveChatBanner.ts#L20)

## Properties

### action\_id

> **action\_id**: `string`

#### Defined in

[src/parser/classes/livechat/items/LiveChatBanner.ts:11](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/livechat/items/LiveChatBanner.ts#L11)

***

### background\_type?

> `optional` **background\_type**: `string`

#### Defined in

[src/parser/classes/livechat/items/LiveChatBanner.ts:15](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/livechat/items/LiveChatBanner.ts#L15)

***

### banner\_properties\_auto\_collapse\_delay\_seconds?

> `optional` **banner\_properties\_auto\_collapse\_delay\_seconds**: `string`

#### Defined in

[src/parser/classes/livechat/items/LiveChatBanner.ts:18](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/livechat/items/LiveChatBanner.ts#L18)

***

### banner\_properties\_is\_ephemeral?

> `optional` **banner\_properties\_is\_ephemeral**: `boolean`

#### Defined in

[src/parser/classes/livechat/items/LiveChatBanner.ts:17](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/livechat/items/LiveChatBanner.ts#L17)

***

### banner\_type

> **banner\_type**: `string`

#### Defined in

[src/parser/classes/livechat/items/LiveChatBanner.ts:16](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/livechat/items/LiveChatBanner.ts#L16)

***

### contents

> **contents**: [`YTNode`](../../Helpers/classes/YTNode.md)

#### Defined in

[src/parser/classes/livechat/items/LiveChatBanner.ts:10](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/livechat/items/LiveChatBanner.ts#L10)

***

### header

> **header**: `null` \| [`LiveChatBannerHeader`](LiveChatBannerHeader.md)

#### Defined in

[src/parser/classes/livechat/items/LiveChatBanner.ts:9](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/livechat/items/LiveChatBanner.ts#L9)

***

### is\_stackable

> **is\_stackable**: `boolean`

#### Defined in

[src/parser/classes/livechat/items/LiveChatBanner.ts:14](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/livechat/items/LiveChatBanner.ts#L14)

***

### target\_id

> **target\_id**: `string`

#### Defined in

[src/parser/classes/livechat/items/LiveChatBanner.ts:13](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/livechat/items/LiveChatBanner.ts#L13)

***

### type

> `readonly` **type**: `string`

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

#### Defined in

[src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L8)

***

### viewer\_is\_creator?

> `optional` **viewer\_is\_creator**: `boolean`

#### Defined in

[src/parser/classes/livechat/items/LiveChatBanner.ts:12](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/livechat/items/LiveChatBanner.ts#L12)

***

### type

> `static` **type**: `string` = `'LiveChatBanner'`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type-1)

#### Defined in

[src/parser/classes/livechat/items/LiveChatBanner.ts:7](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/livechat/items/LiveChatBanner.ts#L7)

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

> **hasKey**\<`T`, `R`\>(`key`): `this is LiveChatBanner & { [k in string]: R }`

Check for a key without asserting the type.

#### Type Parameters

• **T** *extends* `string`

• **R** = `any`

#### Parameters

• **key**: `T`

The key to check

#### Returns

`this is LiveChatBanner & { [k in string]: R }`

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
