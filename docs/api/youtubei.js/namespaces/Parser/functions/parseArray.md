[youtubei.js](../../../../README.md) / [Parser](../README.md) / parseArray

# Function: parseArray()

## Call Signature

> **parseArray**\<`T`, `K`\>(`data`, `validTypes`): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<`InstanceType`\<`K`\[`number`\]\>\>

Defined in: [src/parser/parser.ts:601](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/parser.ts#L601)

Parses an array of items.

### Type Parameters

#### T

`T` *extends* [`YTNode`](../../Helpers/classes/YTNode.md)

#### K

`K` *extends* [`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)\<`T`\>[]

### Parameters

#### data

The data to parse.

[`RawNode`](../../../../type-aliases/RawNode.md)[] | `undefined`

#### validTypes

`K`

YTNode types that are allowed to be parsed.

### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<`InstanceType`\<`K`\[`number`\]\>\>

## Call Signature

> **parseArray**\<`T`\>(`data`, `validType`): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<`T`\>

Defined in: [src/parser/parser.ts:602](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/parser.ts#L602)

Parses an array of items.

### Type Parameters

#### T

`T` *extends* [`YTNode`](../../Helpers/classes/YTNode.md) = [`YTNode`](../../Helpers/classes/YTNode.md)

### Parameters

#### data

The data to parse.

[`RawNode`](../../../../type-aliases/RawNode.md)[] | `undefined`

#### validType

[`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)\<`T`\>

### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<`T`\>

## Call Signature

> **parseArray**(`data`): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

Defined in: [src/parser/parser.ts:603](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/parser.ts#L603)

Parses an array of items.

### Parameters

#### data

The data to parse.

[`RawNode`](../../../../type-aliases/RawNode.md)[] | `undefined`

### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>
