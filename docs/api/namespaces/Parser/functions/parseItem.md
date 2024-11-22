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

[src/parser/parser.ts:510](https://github.com/LuanRT/YouTube.js/blob/fc5571629eca037af7de03f4b903da6add1f300b/src/parser/parser.ts#L510)

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

[src/parser/parser.ts:511](https://github.com/LuanRT/YouTube.js/blob/fc5571629eca037af7de03f4b903da6add1f300b/src/parser/parser.ts#L511)

## parseItem(data)

> **parseItem**(`data`?): [`YTNode`](../../Helpers/classes/YTNode.md)

### Parameters

• **data?**: [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

### Returns

[`YTNode`](../../Helpers/classes/YTNode.md)

### Defined in

[src/parser/parser.ts:512](https://github.com/LuanRT/YouTube.js/blob/fc5571629eca037af7de03f4b903da6add1f300b/src/parser/parser.ts#L512)
