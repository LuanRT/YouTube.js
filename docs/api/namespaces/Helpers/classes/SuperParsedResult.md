[youtubei.js](../../../README.md) / [Helpers](../README.md) / SuperParsedResult

# Class: SuperParsedResult\<T\>

Represents a parsed response in an unknown state. Either a YTNode or a YTNode[] or null.

## Type Parameters

• **T** *extends* [`YTNode`](YTNode.md) = [`YTNode`](YTNode.md)

## Constructors

### new SuperParsedResult()

> **new SuperParsedResult**\<`T`\>(`result`): [`SuperParsedResult`](SuperParsedResult.md)\<`T`\>

#### Parameters

• **result**: `null` \| `T` \| [`ObservedArray`](../type-aliases/ObservedArray.md)\<`T`\>

#### Returns

[`SuperParsedResult`](SuperParsedResult.md)\<`T`\>

#### Defined in

[src/parser/helpers.ts:321](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/helpers.ts#L321)

## Accessors

### is\_array

> `get` **is\_array**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/helpers.ts:328](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/helpers.ts#L328)

***

### is\_node

> `get` **is\_node**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/helpers.ts:331](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/helpers.ts#L331)

***

### is\_null

> `get` **is\_null**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/helpers.ts:325](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/helpers.ts#L325)

## Methods

### array()

> **array**(): [`ObservedArray`](../type-aliases/ObservedArray.md)\<`T`\>

#### Returns

[`ObservedArray`](../type-aliases/ObservedArray.md)\<`T`\>

#### Defined in

[src/parser/helpers.ts:335](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/helpers.ts#L335)

***

### item()

> **item**(): `T`

#### Returns

`T`

#### Defined in

[src/parser/helpers.ts:342](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/helpers.ts#L342)
