[youtubei.js](../../../README.md) / [YTNodes](../README.md) / LiveChatTickerPaidMessageItem

# Class: LiveChatTickerPaidMessageItem

## Extends

- [`YTNode`](../../Helpers/classes/YTNode.md)

## Constructors

### new LiveChatTickerPaidMessageItem()

> **new LiveChatTickerPaidMessageItem**(`data`): [`LiveChatTickerPaidMessageItem`](LiveChatTickerPaidMessageItem.md)

#### Parameters

• **data**: [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

#### Returns

[`LiveChatTickerPaidMessageItem`](LiveChatTickerPaidMessageItem.md)

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`constructor`](../../Helpers/classes/YTNode.md#constructors)

#### Defined in

[src/parser/classes/livechat/items/LiveChatTickerPaidMessageItem.ts:25](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/livechat/items/LiveChatTickerPaidMessageItem.ts#L25)

## Properties

### amount?

> `optional` **amount**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/livechat/items/LiveChatTickerPaidMessageItem.ts:14](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/livechat/items/LiveChatTickerPaidMessageItem.ts#L14)

***

### amount\_text\_color

> **amount\_text\_color**: `number`

#### Defined in

[src/parser/classes/livechat/items/LiveChatTickerPaidMessageItem.ts:15](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/livechat/items/LiveChatTickerPaidMessageItem.ts#L15)

***

### animation\_origin

> **animation\_origin**: `string`

#### Defined in

[src/parser/classes/livechat/items/LiveChatTickerPaidMessageItem.ts:22](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/livechat/items/LiveChatTickerPaidMessageItem.ts#L22)

***

### author

> **author**: [`Author`](../../Misc/classes/Author.md)

#### Defined in

[src/parser/classes/livechat/items/LiveChatTickerPaidMessageItem.ts:13](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/livechat/items/LiveChatTickerPaidMessageItem.ts#L13)

***

### duration\_sec

> **duration\_sec**: `number`

#### Defined in

[src/parser/classes/livechat/items/LiveChatTickerPaidMessageItem.ts:18](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/livechat/items/LiveChatTickerPaidMessageItem.ts#L18)

***

### end\_background\_color

> **end\_background\_color**: `number`

#### Defined in

[src/parser/classes/livechat/items/LiveChatTickerPaidMessageItem.ts:17](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/livechat/items/LiveChatTickerPaidMessageItem.ts#L17)

***

### full\_duration\_sec

> **full\_duration\_sec**: `number`

#### Defined in

[src/parser/classes/livechat/items/LiveChatTickerPaidMessageItem.ts:19](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/livechat/items/LiveChatTickerPaidMessageItem.ts#L19)

***

### id

> **id**: `string`

#### Defined in

[src/parser/classes/livechat/items/LiveChatTickerPaidMessageItem.ts:12](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/livechat/items/LiveChatTickerPaidMessageItem.ts#L12)

***

### open\_engagement\_panel\_command

> **open\_engagement\_panel\_command**: [`NavigationEndpoint`](NavigationEndpoint.md)

#### Defined in

[src/parser/classes/livechat/items/LiveChatTickerPaidMessageItem.ts:23](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/livechat/items/LiveChatTickerPaidMessageItem.ts#L23)

***

### show\_item

> **show\_item**: [`YTNode`](../../Helpers/classes/YTNode.md)

#### Defined in

[src/parser/classes/livechat/items/LiveChatTickerPaidMessageItem.ts:20](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/livechat/items/LiveChatTickerPaidMessageItem.ts#L20)

***

### show\_item\_endpoint

> **show\_item\_endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

#### Defined in

[src/parser/classes/livechat/items/LiveChatTickerPaidMessageItem.ts:21](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/livechat/items/LiveChatTickerPaidMessageItem.ts#L21)

***

### start\_background\_color

> **start\_background\_color**: `number`

#### Defined in

[src/parser/classes/livechat/items/LiveChatTickerPaidMessageItem.ts:16](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/livechat/items/LiveChatTickerPaidMessageItem.ts#L16)

***

### type

> `readonly` **type**: `string`

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

#### Defined in

[src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L8)

***

### type

> `static` **type**: `string` = `'LiveChatTickerPaidMessageItem'`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type-1)

#### Defined in

[src/parser/classes/livechat/items/LiveChatTickerPaidMessageItem.ts:10](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/livechat/items/LiveChatTickerPaidMessageItem.ts#L10)

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

> **hasKey**\<`T`, `R`\>(`key`): `this is LiveChatTickerPaidMessageItem & { [k in string]: R }`

Check for a key without asserting the type.

#### Type Parameters

• **T** *extends* `string`

• **R** = `any`

#### Parameters

• **key**: `T`

The key to check

#### Returns

`this is LiveChatTickerPaidMessageItem & { [k in string]: R }`

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
