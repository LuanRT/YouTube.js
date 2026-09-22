[youtubei.js](../../../../README.md) / [Parser](../README.md) / parseItem

# Function: parseItem()

## Call Signature

> **parseItem**\<`T`, `K`\>(`data`, `validTypes`): `InstanceType`\<`K`\[`number`\]\> \| `null`

Defined in: [src/parser/parser.ts:568](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/parser.ts#L568)

Parses an item.

### Type Parameters

#### T

`T` *extends* [`YTNode`](../../Helpers/classes/YTNode.md)

#### K

`K` *extends* [`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)\<`T`\>[]

### Parameters

#### data

[`RawNode`](../../../../type-aliases/RawNode.md) \| `undefined`

The data to parse.

#### validTypes

`K`

YTNode types that are allowed to be parsed.

### Returns

`InstanceType`\<`K`\[`number`\]\> \| `null`

## Call Signature

> **parseItem**\<`T`\>(`data`, `validTypes`): `T` \| `null`

Defined in: [src/parser/parser.ts:569](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/parser.ts#L569)

Parses an item.

### Type Parameters

#### T

`T` *extends* [`YTNode`](../../Helpers/classes/YTNode.md)

### Parameters

#### data

[`RawNode`](../../../../type-aliases/RawNode.md) \| `undefined`

The data to parse.

#### validTypes

[`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)\<`T`\>

YTNode types that are allowed to be parsed.

### Returns

`T` \| `null`

## Call Signature

> **parseItem**(`data?`): [`YTNode`](../../Helpers/classes/YTNode.md)

Defined in: [src/parser/parser.ts:570](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/parser.ts#L570)

Parses an item.

### Parameters

#### data?

[`RawNode`](../../../../type-aliases/RawNode.md)

The data to parse.

### Returns

[`YTNode`](../../Helpers/classes/YTNode.md)
