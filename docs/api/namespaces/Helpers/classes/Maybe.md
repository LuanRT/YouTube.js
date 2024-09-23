[youtubei.js](../../../README.md) / [Helpers](../README.md) / Maybe

# Class: Maybe

## Constructors

### new Maybe()

> **new Maybe**(`value`): [`Maybe`](Maybe.md)

#### Parameters

• **value**: `any`

#### Returns

[`Maybe`](Maybe.md)

#### Defined in

[src/parser/helpers.ts:69](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L69)

## Accessors

### typeof

> `get` **typeof**(): `"string"` \| `"number"` \| `"bigint"` \| `"boolean"` \| `"symbol"` \| `"undefined"` \| `"object"` \| `"function"`

#### Returns

`"string"` \| `"number"` \| `"bigint"` \| `"boolean"` \| `"symbol"` \| `"undefined"` \| `"object"` \| `"function"`

#### Defined in

[src/parser/helpers.ts:87](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L87)

## Methods

### ~~any()~~

> **any**(): `any`

#### Returns

`any`

#### Deprecated

This call is not meant to be used outside of debugging. Please use the specific type getter instead.

#### Defined in

[src/parser/helpers.ts:283](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L283)

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

[src/parser/helpers.ts:171](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L171)

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

[src/parser/helpers.ts:183](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L183)

***

### bigint()

> **bigint**(): `bigint`

#### Returns

`bigint`

#### Defined in

[src/parser/helpers.ts:107](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L107)

***

### boolean()

> **boolean**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/helpers.ts:115](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L115)

***

### function()

> **function**(): `Function`

#### Returns

`Function`

#### Defined in

[src/parser/helpers.ts:158](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L158)

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

[src/parser/helpers.ts:294](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L294)

***

### isArray()

> **isArray**(): `boolean`

Check whether the value is an array.

#### Returns

`boolean`

whether the value is an array.

#### Defined in

[src/parser/helpers.ts:199](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L199)

***

### isBigint()

> **isBigint**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/helpers.ts:111](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L111)

***

### isBoolean()

> **isBoolean**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/helpers.ts:119](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L119)

***

### isFunction()

> **isFunction**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/helpers.ts:162](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L162)

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

[src/parser/helpers.ts:306](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L306)

***

### isNode()

> **isNode**(): `boolean`

Check if the value is a YTNode.

#### Returns

`boolean`

Whether the value is a YTNode.

#### Defined in

[src/parser/helpers.ts:219](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L219)

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

[src/parser/helpers.ts:238](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L238)

***

### isNull()

> **isNull**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/helpers.ts:145](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L145)

***

### isNumber()

> **isNumber**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/helpers.ts:103](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L103)

***

### isObject()

> **isObject**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/helpers.ts:153](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L153)

***

### isObserved()

> **isObserved**(): `any`

Check if the value is an ObservedArray.

#### Returns

`any`

#### Defined in

[src/parser/helpers.ts:256](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L256)

***

### isParsed()

> **isParsed**(): `boolean`

Is the result a SuperParsedResult?

#### Returns

`boolean`

#### Defined in

[src/parser/helpers.ts:275](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L275)

***

### isString()

> **isString**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/helpers.ts:95](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L95)

***

### isSymbol()

> **isSymbol**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/helpers.ts:127](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L127)

***

### isUndefined()

> **isUndefined**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/helpers.ts:135](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L135)

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

[src/parser/helpers.ts:208](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L208)

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

The node casted to the given type.

#### Throws

If the node is not of the given type.

#### Defined in

[src/parser/helpers.ts:229](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L229)

***

### null()

> **null**(): `null`

#### Returns

`null`

#### Defined in

[src/parser/helpers.ts:139](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L139)

***

### number()

> **number**(): `number`

#### Returns

`number`

#### Defined in

[src/parser/helpers.ts:99](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L99)

***

### object()

> **object**(): `object`

#### Returns

`object`

#### Defined in

[src/parser/helpers.ts:149](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L149)

***

### observed()

> **observed**(): [`ObservedArray`](../type-aliases/ObservedArray.md)\<[`YTNode`](YTNode.md)\>

Get the value as an ObservedArray.

#### Returns

[`ObservedArray`](../type-aliases/ObservedArray.md)\<[`YTNode`](YTNode.md)\>

the value of the Maybe as a ObservedArray.

#### Defined in

[src/parser/helpers.ts:246](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L246)

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

[src/parser/helpers.ts:265](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L265)

***

### string()

> **string**(): `string`

#### Returns

`string`

#### Defined in

[src/parser/helpers.ts:91](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L91)

***

### symbol()

> **symbol**(): `symbol`

#### Returns

`symbol`

#### Defined in

[src/parser/helpers.ts:123](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L123)

***

### undefined()

> **undefined**(): `undefined`

#### Returns

`undefined`

#### Defined in

[src/parser/helpers.ts:131](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L131)
