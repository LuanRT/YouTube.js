[youtubei.js](../../../../README.md) / [Parser](../README.md) / parseItem

# Function: parseItem()

## Call Signature

> **parseItem**\<`T`, `K`\>(`data`, `validTypes`): `InstanceType`\<`K`\[`number`\]\> \| `null`

Defined in: [src/parser/parser.ts:535](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/parser.ts#L535)

Parses an item.

### Type Parameters

#### T

`T` *extends* [`YTNode`](../../Helpers/classes/YTNode.md)

#### K

`K` *extends* [`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)\<`T`\>[]

### Parameters

#### data

The data to parse.

[`RawNode`](../../../../type-aliases/RawNode.md) | `undefined`

#### validTypes

`K`

YTNode types that are allowed to be parsed.

### Returns

`InstanceType`\<`K`\[`number`\]\> \| `null`

## Call Signature

> **parseItem**\<`T`\>(`data`, `validTypes`): `T` \| `null`

Defined in: [src/parser/parser.ts:536](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/parser.ts#L536)

Parses an item.

### Type Parameters

#### T

`T` *extends* [`YTNode`](../../Helpers/classes/YTNode.md)

### Parameters

#### data

The data to parse.

[`RawNode`](../../../../type-aliases/RawNode.md) | `undefined`

#### validTypes

[`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)\<`T`\>

YTNode types that are allowed to be parsed.

### Returns

`T` \| `null`

## Call Signature

> **parseItem**(`data?`): [`YTNode`](../../Helpers/classes/YTNode.md)

Defined in: [src/parser/parser.ts:537](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/parser.ts#L537)

Parses an item.

### Parameters

#### data?

[`RawNode`](../../../../type-aliases/RawNode.md)

The data to parse.

### Returns

[`YTNode`](../../Helpers/classes/YTNode.md)
