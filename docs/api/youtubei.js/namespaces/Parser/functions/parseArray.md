[youtubei.js](../../../../README.md) / [Parser](../README.md) / parseArray

# Function: parseArray()

## Call Signature

> **parseArray**\<`T`, `K`\>(`data`, `validTypes`): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<`InstanceType`\<`K`\[`number`\]\>\>

Defined in: [src/parser/parser.ts:634](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/parser.ts#L634)

Parses an array of items.

### Type Parameters

#### T

`T` *extends* [`YTNode`](../../Helpers/classes/YTNode.md)

#### K

`K` *extends* [`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)\<`T`\>[]

### Parameters

#### data

[`RawNode`](../../../../type-aliases/RawNode.md)[] \| `undefined`

The data to parse.

#### validTypes

`K`

YTNode types that are allowed to be parsed.

### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<`InstanceType`\<`K`\[`number`\]\>\>

## Call Signature

> **parseArray**\<`T`\>(`data`, `validType`): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<`T`\>

Defined in: [src/parser/parser.ts:635](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/parser.ts#L635)

Parses an array of items.

### Type Parameters

#### T

`T` *extends* [`YTNode`](../../Helpers/classes/YTNode.md) = [`YTNode`](../../Helpers/classes/YTNode.md)

### Parameters

#### data

[`RawNode`](../../../../type-aliases/RawNode.md)[] \| `undefined`

The data to parse.

#### validType

[`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)\<`T`\>

### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<`T`\>

## Call Signature

> **parseArray**(`data`): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

Defined in: [src/parser/parser.ts:636](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/parser.ts#L636)

Parses an array of items.

### Parameters

#### data

[`RawNode`](../../../../type-aliases/RawNode.md)[] \| `undefined`

The data to parse.

### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>
