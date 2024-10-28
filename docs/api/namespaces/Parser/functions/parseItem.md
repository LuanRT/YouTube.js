[youtubei.js](../../../README.md) / [Parser](../README.md) / parseItem

# Function: parseItem()

## parseItem(data, validTypes)

> **parseItem**\<`T`, `K`\>(`data`, `validTypes`): `InstanceType`\<`K`\[`number`\]\> \| `null`

Parses a single item.

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

[src/parser/parser.ts:511](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/parser/parser.ts#L511)

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

[src/parser/parser.ts:512](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/parser/parser.ts#L512)

## parseItem(data)

> **parseItem**(`data`?): [`YTNode`](../../Helpers/classes/YTNode.md)

### Parameters

• **data?**: [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

### Returns

[`YTNode`](../../Helpers/classes/YTNode.md)

### Defined in

[src/parser/parser.ts:513](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/parser/parser.ts#L513)
