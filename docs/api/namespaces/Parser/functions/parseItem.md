[youtubei.js](../../../README.md) / [Parser](../README.md) / parseItem

# Function: parseItem()

## parseItem(data, validTypes)

> **parseItem**\<`T`, `K`\>(`data`, `validTypes`): `InstanceType`\<`K`\[`number`\]\> \| `null`

Parses an item.

### Type Parameters

• **T** *extends* [`YTNode`](../../Helpers/classes/YTNode.md)

• **K** *extends* [`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)\<`T`\>[]

### Parameters

• **data**: `undefined` \| [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

The data to parse.

• **validTypes**: `K`

YTNode types that are allowed to be parsed.

### Returns

`InstanceType`\<`K`\[`number`\]\> \| `null`

### Defined in

[src/parser/parser.ts:535](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/parser.ts#L535)

## parseItem(data, validTypes)

> **parseItem**\<`T`\>(`data`, `validTypes`): `T` \| `null`

### Type Parameters

• **T** *extends* [`YTNode`](../../Helpers/classes/YTNode.md)

### Parameters

• **data**: `undefined` \| [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

• **validTypes**: [`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)\<`T`\>

### Returns

`T` \| `null`

### Defined in

[src/parser/parser.ts:536](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/parser.ts#L536)

## parseItem(data)

> **parseItem**(`data`?): [`YTNode`](../../Helpers/classes/YTNode.md)

### Parameters

• **data?**: [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

### Returns

[`YTNode`](../../Helpers/classes/YTNode.md)

### Defined in

[src/parser/parser.ts:537](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/parser.ts#L537)
