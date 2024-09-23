[youtubei.js](../../../README.md) / [YTNodes](../README.md) / LiveChatTickerPaidStickerItem

# Class: LiveChatTickerPaidStickerItem

## Extends

- [`LiveChatTickerPaidMessageItem`](LiveChatTickerPaidMessageItem.md)

## Constructors

### new LiveChatTickerPaidStickerItem()

> **new LiveChatTickerPaidStickerItem**(`data`): [`LiveChatTickerPaidStickerItem`](LiveChatTickerPaidStickerItem.md)

#### Parameters

• **data**: [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

#### Returns

[`LiveChatTickerPaidStickerItem`](LiveChatTickerPaidStickerItem.md)

#### Inherited from

[`LiveChatTickerPaidMessageItem`](LiveChatTickerPaidMessageItem.md).[`constructor`](LiveChatTickerPaidMessageItem.md#constructors)

#### Defined in

[src/parser/classes/livechat/items/LiveChatTickerPaidMessageItem.ts:20](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/livechat/items/LiveChatTickerPaidMessageItem.ts#L20)

## Properties

### amount

> **amount**: [`Text`](../../Misc/classes/Text.md)

#### Inherited from

[`LiveChatTickerPaidMessageItem`](LiveChatTickerPaidMessageItem.md).[`amount`](LiveChatTickerPaidMessageItem.md#amount)

#### Defined in

[src/parser/classes/livechat/items/LiveChatTickerPaidMessageItem.ts:13](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/livechat/items/LiveChatTickerPaidMessageItem.ts#L13)

***

### author

> **author**: [`Author`](../../Misc/classes/Author.md)

#### Inherited from

[`LiveChatTickerPaidMessageItem`](LiveChatTickerPaidMessageItem.md).[`author`](LiveChatTickerPaidMessageItem.md#author)

#### Defined in

[src/parser/classes/livechat/items/LiveChatTickerPaidMessageItem.ts:12](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/livechat/items/LiveChatTickerPaidMessageItem.ts#L12)

***

### duration\_sec

> **duration\_sec**: `string`

#### Inherited from

[`LiveChatTickerPaidMessageItem`](LiveChatTickerPaidMessageItem.md).[`duration_sec`](LiveChatTickerPaidMessageItem.md#duration_sec)

#### Defined in

[src/parser/classes/livechat/items/LiveChatTickerPaidMessageItem.ts:14](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/livechat/items/LiveChatTickerPaidMessageItem.ts#L14)

***

### full\_duration\_sec

> **full\_duration\_sec**: `string`

#### Inherited from

[`LiveChatTickerPaidMessageItem`](LiveChatTickerPaidMessageItem.md).[`full_duration_sec`](LiveChatTickerPaidMessageItem.md#full_duration_sec)

#### Defined in

[src/parser/classes/livechat/items/LiveChatTickerPaidMessageItem.ts:15](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/livechat/items/LiveChatTickerPaidMessageItem.ts#L15)

***

### id

> **id**: `string`

#### Inherited from

[`LiveChatTickerPaidMessageItem`](LiveChatTickerPaidMessageItem.md).[`id`](LiveChatTickerPaidMessageItem.md#id)

#### Defined in

[src/parser/classes/livechat/items/LiveChatTickerPaidMessageItem.ts:18](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/livechat/items/LiveChatTickerPaidMessageItem.ts#L18)

***

### show\_item

> **show\_item**: [`YTNode`](../../Helpers/classes/YTNode.md)

#### Inherited from

[`LiveChatTickerPaidMessageItem`](LiveChatTickerPaidMessageItem.md).[`show_item`](LiveChatTickerPaidMessageItem.md#show_item)

#### Defined in

[src/parser/classes/livechat/items/LiveChatTickerPaidMessageItem.ts:16](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/livechat/items/LiveChatTickerPaidMessageItem.ts#L16)

***

### show\_item\_endpoint

> **show\_item\_endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

#### Inherited from

[`LiveChatTickerPaidMessageItem`](LiveChatTickerPaidMessageItem.md).[`show_item_endpoint`](LiveChatTickerPaidMessageItem.md#show_item_endpoint)

#### Defined in

[src/parser/classes/livechat/items/LiveChatTickerPaidMessageItem.ts:17](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/livechat/items/LiveChatTickerPaidMessageItem.ts#L17)

***

### type

> `readonly` **type**: `string`

#### Inherited from

[`LiveChatTickerPaidMessageItem`](LiveChatTickerPaidMessageItem.md).[`type`](LiveChatTickerPaidMessageItem.md#type)

#### Defined in

[src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L8)

***

### type

> `static` **type**: `string` = `'LiveChatTickerPaidStickerItem'`

#### Overrides

[`LiveChatTickerPaidMessageItem`](LiveChatTickerPaidMessageItem.md).[`type`](LiveChatTickerPaidMessageItem.md#type-1)

#### Defined in

[src/parser/classes/livechat/items/LiveChatTickerPaidStickerItem.ts:4](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/livechat/items/LiveChatTickerPaidStickerItem.ts#L4)

## Methods

### as()

> **as**\<`T`, `K`\>(...`types`): `InstanceType`\<`K`\[`number`\]\>

Cast to one of the given types.

#### Type Parameters

• **T** *extends* [`YTNode`](../../Helpers/classes/YTNode.md)

• **K** *extends* [`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)\<`T`\>[]

#### Parameters

• ...**types**: `K`

#### Returns

`InstanceType`\<`K`\[`number`\]\>

#### Inherited from

[`LiveChatTickerPaidMessageItem`](LiveChatTickerPaidMessageItem.md).[`as`](LiveChatTickerPaidMessageItem.md#as)

#### Defined in

[src/parser/helpers.ts:35](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L35)

***

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is LiveChatTickerPaidStickerItem & { [k in string]: R }`

Check for a key without asserting the type.

#### Type Parameters

• **T** *extends* `string`

• **R** = `any`

#### Parameters

• **key**: `T`

The key to check

#### Returns

`this is LiveChatTickerPaidStickerItem & { [k in string]: R }`

Whether the node has the key

#### Inherited from

[`LiveChatTickerPaidMessageItem`](LiveChatTickerPaidMessageItem.md).[`hasKey`](LiveChatTickerPaidMessageItem.md#haskey)

#### Defined in

[src/parser/helpers.ts:47](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L47)

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

[`LiveChatTickerPaidMessageItem`](LiveChatTickerPaidMessageItem.md).[`is`](LiveChatTickerPaidMessageItem.md#is)

#### Defined in

[src/parser/helpers.ts:28](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L28)

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

[`LiveChatTickerPaidMessageItem`](LiveChatTickerPaidMessageItem.md).[`key`](LiveChatTickerPaidMessageItem.md#key)

#### Defined in

[src/parser/helpers.ts:57](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L57)
