[youtubei.js](../../../README.md) / [Helpers](../README.md) / Maybe

# Class: Maybe

A wrapper class that provides type-safe access to a value.

## Constructors

### new Maybe()

> **new Maybe**(`value`): [`Maybe`](Maybe.md)

#### Parameters

• **value**: `any`

#### Returns

[`Maybe`](Maybe.md)

#### Defined in

[src/parser/helpers.ts:76](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L76)

## Accessors

### typeof

> `get` **typeof**(): `"string"` \| `"number"` \| `"bigint"` \| `"boolean"` \| `"symbol"` \| `"undefined"` \| `"object"` \| `"function"`

#### Returns

`"string"` \| `"number"` \| `"bigint"` \| `"boolean"` \| `"symbol"` \| `"undefined"` \| `"object"` \| `"function"`

#### Defined in

[src/parser/helpers.ts:91](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L91)

## Methods

### ~~any()~~

> **any**(): `any`

#### Returns

`any`

#### Deprecated

This call is not meant to be used outside of debugging. Please use the specific type getter instead.

#### Defined in

[src/parser/helpers.ts:287](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L287)

***

### array()

> **array**(): `any`[]

Get the value as an array.

#### Returns

`any`[]

the value as any[].

#### Throws

If the value is not an array.

#### Defined in

[src/parser/helpers.ts:175](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L175)

***

### arrayOfMaybe()

> **arrayOfMaybe**(): [`Maybe`](Maybe.md)[]

More typesafe variant of [Maybe#array](Maybe.md#array).

#### Returns

[`Maybe`](Maybe.md)[]

a proxied array which returns all the values as [Maybe](Maybe.md).

#### Throws

If the value is not an array

#### Defined in

[src/parser/helpers.ts:187](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L187)

***

### bigint()

> **bigint**(): `bigint`

#### Returns

`bigint`

#### Defined in

[src/parser/helpers.ts:111](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L111)

***

### boolean()

> **boolean**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/helpers.ts:119](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L119)

***

### function()

> **function**(): `Function`

#### Returns

`Function`

#### Defined in

[src/parser/helpers.ts:162](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L162)

***

### instanceof()

> **instanceof**\<`T`\>(`type`): `T`

Get the node as an instance of the given class.

#### Type Parameters

• **T** *extends* `object`

#### Parameters

• **type**: [`Constructor`](../interfaces/Constructor.md)\<`T`\>

The type to check.

#### Returns

`T`

the value as the given type.

#### Throws

If the node is not of the given type.

#### Defined in

[src/parser/helpers.ts:298](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L298)

***

### isArray()

> **isArray**(): `boolean`

Check whether the value is an array.

#### Returns

`boolean`

whether the value is an array.

#### Defined in

[src/parser/helpers.ts:203](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L203)

***

### isBigint()

> **isBigint**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/helpers.ts:115](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L115)

***

### isBoolean()

> **isBoolean**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/helpers.ts:123](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L123)

***

### isFunction()

> **isFunction**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/helpers.ts:166](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L166)

***

### isInstanceof()

> **isInstanceof**\<`T`\>(`type`): `this is Maybe & T`

Check if the node is an instance of the given class.

#### Type Parameters

• **T** *extends* `object`

#### Parameters

• **type**: [`Constructor`](../interfaces/Constructor.md)\<`T`\>

The type to check.

#### Returns

`this is Maybe & T`

Whether the node is an instance of the given type.

#### Defined in

[src/parser/helpers.ts:310](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L310)

***

### isNode()

> **isNode**(): `boolean`

Check if the value is a YTNode.

#### Returns

`boolean`

Whether the value is a YTNode.

#### Defined in

[src/parser/helpers.ts:223](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L223)

***

### isNodeOfType()

> **isNodeOfType**\<`T`, `K`\>(...`types`): `boolean`

Check if the value is a YTNode of the given type.

#### Type Parameters

• **T** *extends* [`YTNode`](YTNode.md)

• **K** *extends* [`YTNodeConstructor`](../interfaces/YTNodeConstructor.md)\<`T`\>[]

#### Parameters

• ...**types**: `K`

the type(s) to check.

#### Returns

`boolean`

Whether the value is a YTNode of the given type.

#### Defined in

[src/parser/helpers.ts:242](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L242)

***

### isNull()

> **isNull**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/helpers.ts:149](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L149)

***

### isNumber()

> **isNumber**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/helpers.ts:107](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L107)

***

### isObject()

> **isObject**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/helpers.ts:157](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L157)

***

### isObserved()

> **isObserved**(): `any`

Check if the value is an ObservedArray.

#### Returns

`any`

#### Defined in

[src/parser/helpers.ts:260](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L260)

***

### isParsed()

> **isParsed**(): `boolean`

Is the result a SuperParsedResult?

#### Returns

`boolean`

#### Defined in

[src/parser/helpers.ts:279](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L279)

***

### isString()

> **isString**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/helpers.ts:99](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L99)

***

### isSymbol()

> **isSymbol**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/helpers.ts:131](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L131)

***

### isUndefined()

> **isUndefined**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/helpers.ts:139](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L139)

***

### node()

> **node**(): [`YTNode`](YTNode.md)

Get the value as a YTNode.

#### Returns

[`YTNode`](YTNode.md)

the value as a YTNode.

#### Throws

If the value is not a YTNode.

#### Defined in

[src/parser/helpers.ts:212](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L212)

***

### nodeOfType()

> **nodeOfType**\<`T`, `K`\>(...`types`): `InstanceType`\<`K`\[`number`\]\>

Get the value as a YTNode of the given type.

#### Type Parameters

• **T** *extends* [`YTNode`](YTNode.md)

• **K** *extends* [`YTNodeConstructor`](../interfaces/YTNodeConstructor.md)\<`T`\>[]

#### Parameters

• ...**types**: `K`

The type(s) to cast to.

#### Returns

`InstanceType`\<`K`\[`number`\]\>

The node cast to the given type.

#### Throws

If the node is not of the given type.

#### Defined in

[src/parser/helpers.ts:233](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L233)

***

### null()

> **null**(): `null`

#### Returns

`null`

#### Defined in

[src/parser/helpers.ts:143](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L143)

***

### number()

> **number**(): `number`

#### Returns

`number`

#### Defined in

[src/parser/helpers.ts:103](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L103)

***

### object()

> **object**(): `object`

#### Returns

`object`

#### Defined in

[src/parser/helpers.ts:153](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L153)

***

### observed()

> **observed**(): [`ObservedArray`](../type-aliases/ObservedArray.md)\<[`YTNode`](YTNode.md)\>

Get the value as an ObservedArray.

#### Returns

[`ObservedArray`](../type-aliases/ObservedArray.md)\<[`YTNode`](YTNode.md)\>

the value of the Maybe as a ObservedArray.

#### Defined in

[src/parser/helpers.ts:250](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L250)

***

### parsed()

> **parsed**(): [`SuperParsedResult`](SuperParsedResult.md)\<[`YTNode`](YTNode.md)\>

Get the value of the Maybe as a SuperParsedResult.

#### Returns

[`SuperParsedResult`](SuperParsedResult.md)\<[`YTNode`](YTNode.md)\>

the value as a SuperParsedResult.

#### Throws

If the value is not a SuperParsedResult.

#### Defined in

[src/parser/helpers.ts:269](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L269)

***

### string()

> **string**(): `string`

#### Returns

`string`

#### Defined in

[src/parser/helpers.ts:95](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L95)

***

### symbol()

> **symbol**(): `symbol`

#### Returns

`symbol`

#### Defined in

[src/parser/helpers.ts:127](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L127)

***

### undefined()

> **undefined**(): `undefined`

#### Returns

`undefined`

#### Defined in

[src/parser/helpers.ts:135](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L135)
