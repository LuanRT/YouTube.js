[youtubei.js](../../../../README.md) / [Helpers](../README.md) / SuperParsedResult

# Class: SuperParsedResult\<T\>

Defined in: [src/parser/helpers.ts:318](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L318)

Represents a parsed response in an unknown state. Either a YTNode or a YTNode[] or null.

## Type Parameters

### T

`T` *extends* [`YTNode`](YTNode.md) = [`YTNode`](YTNode.md)

## Constructors

### Constructor

> **new SuperParsedResult**\<`T`\>(`result`): `SuperParsedResult`\<`T`\>

Defined in: [src/parser/helpers.ts:321](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L321)

#### Parameters

##### result

`T` | [`ObservedArray`](../type-aliases/ObservedArray.md)\<`T`\> | `null`

#### Returns

`SuperParsedResult`\<`T`\>

## Accessors

### is\_array

#### Get Signature

> **get** **is\_array**(): `boolean`

Defined in: [src/parser/helpers.ts:328](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L328)

##### Returns

`boolean`

***

### is\_node

#### Get Signature

> **get** **is\_node**(): `boolean`

Defined in: [src/parser/helpers.ts:331](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L331)

##### Returns

`boolean`

***

### is\_null

#### Get Signature

> **get** **is\_null**(): `boolean`

Defined in: [src/parser/helpers.ts:325](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L325)

##### Returns

`boolean`

## Methods

### array()

> **array**(): [`ObservedArray`](../type-aliases/ObservedArray.md)\<`T`\>

Defined in: [src/parser/helpers.ts:335](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L335)

#### Returns

[`ObservedArray`](../type-aliases/ObservedArray.md)\<`T`\>

***

### item()

> **item**(): `T`

Defined in: [src/parser/helpers.ts:342](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L342)

#### Returns

`T`
