[youtubei.js](../../../../README.md) / [Helpers](../README.md) / Maybe

# Class: Maybe

Defined in: [src/parser/helpers.ts:64](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L64)

A wrapper class that provides type-safe access to a value.

## Constructors

### Constructor

> **new Maybe**(`value`): `Maybe`

Defined in: [src/parser/helpers.ts:67](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L67)

#### Parameters

##### value

`any`

#### Returns

`Maybe`

## Accessors

### typeof

#### Get Signature

> **get** **typeof**(): `"string"` \| `"number"` \| `"bigint"` \| `"boolean"` \| `"symbol"` \| `"undefined"` \| `"object"` \| `"function"`

Defined in: [src/parser/helpers.ts:82](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L82)

##### Returns

`"string"` \| `"number"` \| `"bigint"` \| `"boolean"` \| `"symbol"` \| `"undefined"` \| `"object"` \| `"function"`

## Methods

### ~~any()~~

> **any**(): `any`

Defined in: [src/parser/helpers.ts:278](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L278)

#### Returns

`any`

#### Deprecated

This call is not meant to be used outside of debugging. Please use the specific type getter instead.

***

### array()

> **array**(): `any`[]

Defined in: [src/parser/helpers.ts:166](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L166)

Get the value as an array.

#### Returns

`any`[]

the value as any[].

#### Throws

If the value is not an array.

***

### arrayOfMaybe()

> **arrayOfMaybe**(): `Maybe`[]

Defined in: [src/parser/helpers.ts:178](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L178)

More typesafe variant of [Maybe#array](#array).

#### Returns

`Maybe`[]

a proxied array which returns all the values as Maybe.

#### Throws

If the value is not an array

***

### bigint()

> **bigint**(): `bigint`

Defined in: [src/parser/helpers.ts:102](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L102)

#### Returns

`bigint`

***

### boolean()

> **boolean**(): `boolean`

Defined in: [src/parser/helpers.ts:110](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L110)

#### Returns

`boolean`

***

### function()

> **function**(): `Function`

Defined in: [src/parser/helpers.ts:153](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L153)

#### Returns

`Function`

***

### instanceof()

> **instanceof**\<`T`\>(`type`): `T`

Defined in: [src/parser/helpers.ts:289](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L289)

Get the node as an instance of the given class.

#### Type Parameters

##### T

`T` *extends* `object`

#### Parameters

##### type

[`Constructor`](../interfaces/Constructor.md)\<`T`\>

The type to check.

#### Returns

`T`

the value as the given type.

#### Throws

If the node is not of the given type.

***

### isArray()

> **isArray**(): `boolean`

Defined in: [src/parser/helpers.ts:194](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L194)

Check whether the value is an array.

#### Returns

`boolean`

whether the value is an array.

***

### isBigint()

> **isBigint**(): `boolean`

Defined in: [src/parser/helpers.ts:106](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L106)

#### Returns

`boolean`

***

### isBoolean()

> **isBoolean**(): `boolean`

Defined in: [src/parser/helpers.ts:114](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L114)

#### Returns

`boolean`

***

### isFunction()

> **isFunction**(): `boolean`

Defined in: [src/parser/helpers.ts:157](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L157)

#### Returns

`boolean`

***

### isInstanceof()

> **isInstanceof**\<`T`\>(`type`): `this is Maybe & T`

Defined in: [src/parser/helpers.ts:301](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L301)

Check if the node is an instance of the given class.

#### Type Parameters

##### T

`T` *extends* `object`

#### Parameters

##### type

[`Constructor`](../interfaces/Constructor.md)\<`T`\>

The type to check.

#### Returns

`this is Maybe & T`

Whether the node is an instance of the given type.

***

### isNode()

> **isNode**(): `boolean`

Defined in: [src/parser/helpers.ts:214](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L214)

Check if the value is a YTNode.

#### Returns

`boolean`

Whether the value is a YTNode.

***

### isNodeOfType()

> **isNodeOfType**\<`T`, `K`\>(...`types`): `boolean`

Defined in: [src/parser/helpers.ts:233](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L233)

Check if the value is a YTNode of the given type.

#### Type Parameters

##### T

`T` *extends* [`YTNode`](YTNode.md)

##### K

`K` *extends* [`YTNodeConstructor`](../interfaces/YTNodeConstructor.md)\<`T`\>[]

#### Parameters

##### types

...`K`

the type(s) to check.

#### Returns

`boolean`

Whether the value is a YTNode of the given type.

***

### isNull()

> **isNull**(): `boolean`

Defined in: [src/parser/helpers.ts:140](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L140)

#### Returns

`boolean`

***

### isNumber()

> **isNumber**(): `boolean`

Defined in: [src/parser/helpers.ts:98](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L98)

#### Returns

`boolean`

***

### isObject()

> **isObject**(): `boolean`

Defined in: [src/parser/helpers.ts:148](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L148)

#### Returns

`boolean`

***

### isObserved()

> **isObserved**(): `any`

Defined in: [src/parser/helpers.ts:251](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L251)

Check if the value is an ObservedArray.

#### Returns

`any`

***

### isParsed()

> **isParsed**(): `boolean`

Defined in: [src/parser/helpers.ts:270](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L270)

Is the result a SuperParsedResult?

#### Returns

`boolean`

***

### isString()

> **isString**(): `boolean`

Defined in: [src/parser/helpers.ts:90](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L90)

#### Returns

`boolean`

***

### isSymbol()

> **isSymbol**(): `boolean`

Defined in: [src/parser/helpers.ts:122](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L122)

#### Returns

`boolean`

***

### isUndefined()

> **isUndefined**(): `boolean`

Defined in: [src/parser/helpers.ts:130](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L130)

#### Returns

`boolean`

***

### node()

> **node**(): [`YTNode`](YTNode.md)

Defined in: [src/parser/helpers.ts:203](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L203)

Get the value as a YTNode.

#### Returns

[`YTNode`](YTNode.md)

the value as a YTNode.

#### Throws

If the value is not a YTNode.

***

### nodeOfType()

> **nodeOfType**\<`T`, `K`\>(...`types`): `InstanceType`\<`K`\[`number`\]\>

Defined in: [src/parser/helpers.ts:224](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L224)

Get the value as a YTNode of the given type.

#### Type Parameters

##### T

`T` *extends* [`YTNode`](YTNode.md)

##### K

`K` *extends* [`YTNodeConstructor`](../interfaces/YTNodeConstructor.md)\<`T`\>[]

#### Parameters

##### types

...`K`

The type(s) to cast to.

#### Returns

`InstanceType`\<`K`\[`number`\]\>

The node cast to the given type.

#### Throws

If the node is not of the given type.

***

### null()

> **null**(): `null`

Defined in: [src/parser/helpers.ts:134](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L134)

#### Returns

`null`

***

### number()

> **number**(): `number`

Defined in: [src/parser/helpers.ts:94](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L94)

#### Returns

`number`

***

### object()

> **object**(): `object`

Defined in: [src/parser/helpers.ts:144](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L144)

#### Returns

`object`

***

### observed()

> **observed**(): [`ObservedArray`](../type-aliases/ObservedArray.md)\<[`YTNode`](YTNode.md)\>

Defined in: [src/parser/helpers.ts:241](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L241)

Get the value as an ObservedArray.

#### Returns

[`ObservedArray`](../type-aliases/ObservedArray.md)\<[`YTNode`](YTNode.md)\>

the value of the Maybe as a ObservedArray.

***

### parsed()

> **parsed**(): [`SuperParsedResult`](SuperParsedResult.md)

Defined in: [src/parser/helpers.ts:260](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L260)

Get the value of the Maybe as a SuperParsedResult.

#### Returns

[`SuperParsedResult`](SuperParsedResult.md)

the value as a SuperParsedResult.

#### Throws

If the value is not a SuperParsedResult.

***

### string()

> **string**(): `string`

Defined in: [src/parser/helpers.ts:86](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L86)

#### Returns

`string`

***

### symbol()

> **symbol**(): `symbol`

Defined in: [src/parser/helpers.ts:118](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L118)

#### Returns

`symbol`

***

### undefined()

> **undefined**(): `undefined`

Defined in: [src/parser/helpers.ts:126](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L126)

#### Returns

`undefined`
