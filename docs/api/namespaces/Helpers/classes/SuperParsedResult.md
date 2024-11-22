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

[src/parser/helpers.ts:330](https://github.com/LuanRT/YouTube.js/blob/fc5571629eca037af7de03f4b903da6add1f300b/src/parser/helpers.ts#L330)

## Accessors

### is\_array

> `get` **is\_array**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/helpers.ts:337](https://github.com/LuanRT/YouTube.js/blob/fc5571629eca037af7de03f4b903da6add1f300b/src/parser/helpers.ts#L337)

***

### is\_node

> `get` **is\_node**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/helpers.ts:340](https://github.com/LuanRT/YouTube.js/blob/fc5571629eca037af7de03f4b903da6add1f300b/src/parser/helpers.ts#L340)

***

### is\_null

> `get` **is\_null**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/helpers.ts:334](https://github.com/LuanRT/YouTube.js/blob/fc5571629eca037af7de03f4b903da6add1f300b/src/parser/helpers.ts#L334)

## Methods

### array()

> **array**(): [`ObservedArray`](../type-aliases/ObservedArray.md)\<`T`\>

#### Returns

[`ObservedArray`](../type-aliases/ObservedArray.md)\<`T`\>

#### Defined in

[src/parser/helpers.ts:344](https://github.com/LuanRT/YouTube.js/blob/fc5571629eca037af7de03f4b903da6add1f300b/src/parser/helpers.ts#L344)

***

### item()

> **item**(): `T`

#### Returns

`T`

#### Defined in

[src/parser/helpers.ts:351](https://github.com/LuanRT/YouTube.js/blob/fc5571629eca037af7de03f4b903da6add1f300b/src/parser/helpers.ts#L351)
