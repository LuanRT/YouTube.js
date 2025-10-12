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

[src/parser/helpers.ts:67](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/helpers.ts#L67)

## Accessors

### typeof

> `get` **typeof**(): `"string"` \| `"number"` \| `"bigint"` \| `"boolean"` \| `"symbol"` \| `"undefined"` \| `"object"` \| `"function"`

#### Returns

`"string"` \| `"number"` \| `"bigint"` \| `"boolean"` \| `"symbol"` \| `"undefined"` \| `"object"` \| `"function"`

#### Defined in

[src/parser/helpers.ts:82](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/helpers.ts#L82)

## Methods

### ~~any()~~

> **any**(): `any`

#### Returns

`any`

#### Deprecated

This call is not meant to be used outside of debugging. Please use the specific type getter instead.

#### Defined in

[src/parser/helpers.ts:278](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/helpers.ts#L278)

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

[src/parser/helpers.ts:166](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/helpers.ts#L166)

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

[src/parser/helpers.ts:178](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/helpers.ts#L178)

***

### bigint()

> **bigint**(): `bigint`

#### Returns

`bigint`

#### Defined in

[src/parser/helpers.ts:102](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/helpers.ts#L102)

***

### boolean()

> **boolean**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/helpers.ts:110](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/helpers.ts#L110)

***

### function()

> **function**(): `Function`

#### Returns

`Function`

#### Defined in

[src/parser/helpers.ts:153](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/helpers.ts#L153)

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

[src/parser/helpers.ts:289](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/helpers.ts#L289)

***

### isArray()

> **isArray**(): `boolean`

Check whether the value is an array.

#### Returns

`boolean`

whether the value is an array.

#### Defined in

[src/parser/helpers.ts:194](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/helpers.ts#L194)

***

### isBigint()

> **isBigint**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/helpers.ts:106](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/helpers.ts#L106)

***

### isBoolean()

> **isBoolean**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/helpers.ts:114](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/helpers.ts#L114)

***

### isFunction()

> **isFunction**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/helpers.ts:157](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/helpers.ts#L157)

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

[src/parser/helpers.ts:301](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/helpers.ts#L301)

***

### isNode()

> **isNode**(): `boolean`

Check if the value is a YTNode.

#### Returns

`boolean`

Whether the value is a YTNode.

#### Defined in

[src/parser/helpers.ts:214](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/helpers.ts#L214)

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

[src/parser/helpers.ts:233](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/helpers.ts#L233)

***

### isNull()

> **isNull**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/helpers.ts:140](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/helpers.ts#L140)

***

### isNumber()

> **isNumber**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/helpers.ts:98](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/helpers.ts#L98)

***

### isObject()

> **isObject**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/helpers.ts:148](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/helpers.ts#L148)

***

### isObserved()

> **isObserved**(): `any`

Check if the value is an ObservedArray.

#### Returns

`any`

#### Defined in

[src/parser/helpers.ts:251](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/helpers.ts#L251)

***

### isParsed()

> **isParsed**(): `boolean`

Is the result a SuperParsedResult?

#### Returns

`boolean`

#### Defined in

[src/parser/helpers.ts:270](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/helpers.ts#L270)

***

### isString()

> **isString**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/helpers.ts:90](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/helpers.ts#L90)

***

### isSymbol()

> **isSymbol**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/helpers.ts:122](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/helpers.ts#L122)

***

### isUndefined()

> **isUndefined**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/helpers.ts:130](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/helpers.ts#L130)

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

[src/parser/helpers.ts:203](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/helpers.ts#L203)

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

[src/parser/helpers.ts:224](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/helpers.ts#L224)

***

### null()

> **null**(): `null`

#### Returns

`null`

#### Defined in

[src/parser/helpers.ts:134](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/helpers.ts#L134)

***

### number()

> **number**(): `number`

#### Returns

`number`

#### Defined in

[src/parser/helpers.ts:94](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/helpers.ts#L94)

***

### object()

> **object**(): `object`

#### Returns

`object`

#### Defined in

[src/parser/helpers.ts:144](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/helpers.ts#L144)

***

### observed()

> **observed**(): [`ObservedArray`](../type-aliases/ObservedArray.md)\<[`YTNode`](YTNode.md)\>

Get the value as an ObservedArray.

#### Returns

[`ObservedArray`](../type-aliases/ObservedArray.md)\<[`YTNode`](YTNode.md)\>

the value of the Maybe as a ObservedArray.

#### Defined in

[src/parser/helpers.ts:241](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/helpers.ts#L241)

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

[src/parser/helpers.ts:260](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/helpers.ts#L260)

***

### string()

> **string**(): `string`

#### Returns

`string`

#### Defined in

[src/parser/helpers.ts:86](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/helpers.ts#L86)

***

### symbol()

> **symbol**(): `symbol`

#### Returns

`symbol`

#### Defined in

[src/parser/helpers.ts:118](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/helpers.ts#L118)

***

### undefined()

> **undefined**(): `undefined`

#### Returns

`undefined`

#### Defined in

[src/parser/helpers.ts:126](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/helpers.ts#L126)
