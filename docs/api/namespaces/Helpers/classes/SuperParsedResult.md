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

[src/parser/helpers.ts:326](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L326)

## Accessors

### is\_array

> `get` **is\_array**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/helpers.ts:333](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L333)

***

### is\_node

> `get` **is\_node**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/helpers.ts:336](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L336)

***

### is\_null

> `get` **is\_null**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/helpers.ts:330](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L330)

## Methods

### array()

> **array**(): [`ObservedArray`](../type-aliases/ObservedArray.md)\<`T`\>

#### Returns

[`ObservedArray`](../type-aliases/ObservedArray.md)\<`T`\>

#### Defined in

[src/parser/helpers.ts:340](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L340)

***

### item()

> **item**(): `T`

#### Returns

`T`

#### Defined in

[src/parser/helpers.ts:347](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L347)
