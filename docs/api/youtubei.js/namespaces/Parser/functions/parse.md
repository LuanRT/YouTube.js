[youtubei.js](../../../../README.md) / [Parser](../README.md) / parse

# Function: parse()

## Call Signature

> **parse**\<`T`, `K`\>(`data`, `requireArray`, `validTypes?`): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<`InstanceType`\<`K`\[`number`\]\>\> \| `null`

Defined in: [src/parser/parser.ts:661](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/parser.ts#L661)

Parses an item or an array of items.

### Type Parameters

#### T

`T` *extends* [`YTNode`](../../Helpers/classes/YTNode.md)

#### K

`K` *extends* [`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)\<`T`\>[]

### Parameters

#### data

[`RawData`](../../../../type-aliases/RawData.md)

The data to parse.

#### requireArray

`true`

Whether the data should be parsed as an array.

#### validTypes?

`K`

YTNode types that are allowed to be parsed.

### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<`InstanceType`\<`K`\[`number`\]\>\> \| `null`

## Call Signature

> **parse**\<`T`, `K`\>(`data`, `requireArray`, `validTypes?`): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<`InstanceType`\<`K`\>\> \| `null`

Defined in: [src/parser/parser.ts:662](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/parser.ts#L662)

Parses an item or an array of items.

### Type Parameters

#### T

`T` *extends* [`YTNode`](../../Helpers/classes/YTNode.md)

#### K

`K` *extends* [`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)\<`T`\>

### Parameters

#### data

[`RawData`](../../../../type-aliases/RawData.md)

The data to parse.

#### requireArray

`true`

Whether the data should be parsed as an array.

#### validTypes?

`K`

YTNode types that are allowed to be parsed.

### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<`InstanceType`\<`K`\>\> \| `null`

## Call Signature

> **parse**\<`T`\>(`data?`, `requireArray?`, `validTypes?`): [`SuperParsedResult`](../../Helpers/classes/SuperParsedResult.md)\<`T`\>

Defined in: [src/parser/parser.ts:663](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/parser.ts#L663)

Parses an item or an array of items.

### Type Parameters

#### T

`T` *extends* [`YTNode`](../../Helpers/classes/YTNode.md) = [`YTNode`](../../Helpers/classes/YTNode.md)

### Parameters

#### data?

[`RawData`](../../../../type-aliases/RawData.md)

The data to parse.

#### requireArray?

`false`

Whether the data should be parsed as an array.

#### validTypes?

[`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)\<`T`\> \| [`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)\<`T`\>[]

YTNode types that are allowed to be parsed.

### Returns

[`SuperParsedResult`](../../Helpers/classes/SuperParsedResult.md)\<`T`\>
