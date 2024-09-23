[youtubei.js](../../../README.md) / [Utils](../README.md) / OAuth2Error

# Class: OAuth2Error

## Extends

- [`InnertubeError`](InnertubeError.md)

## Constructors

### new OAuth2Error()

> **new OAuth2Error**(`message`, `info`?): [`OAuth2Error`](OAuth2Error.md)

#### Parameters

• **message**: `string`

• **info?**: `any`

#### Returns

[`OAuth2Error`](OAuth2Error.md)

#### Inherited from

[`InnertubeError`](InnertubeError.md).[`constructor`](InnertubeError.md#constructors)

#### Defined in

[src/utils/Utils.ts:30](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/utils/Utils.ts#L30)

## Properties

### cause?

> `optional` **cause**: `unknown`

#### Inherited from

[`InnertubeError`](InnertubeError.md).[`cause`](InnertubeError.md#cause)

#### Defined in

node\_modules/typescript/lib/lib.es2022.error.d.ts:24

***

### date

> **date**: `Date`

#### Inherited from

[`InnertubeError`](InnertubeError.md).[`date`](InnertubeError.md#date)

#### Defined in

[src/utils/Utils.ts:26](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/utils/Utils.ts#L26)

***

### info?

> `optional` **info**: `any`

#### Inherited from

[`InnertubeError`](InnertubeError.md).[`info`](InnertubeError.md#info)

#### Defined in

[src/utils/Utils.ts:28](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/utils/Utils.ts#L28)

***

### message

> **message**: `string`

#### Inherited from

[`InnertubeError`](InnertubeError.md).[`message`](InnertubeError.md#message)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1077

***

### name

> **name**: `string`

#### Inherited from

[`InnertubeError`](InnertubeError.md).[`name`](InnertubeError.md#name)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1076

***

### stack?

> `optional` **stack**: `string`

#### Inherited from

[`InnertubeError`](InnertubeError.md).[`stack`](InnertubeError.md#stack)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1078

***

### version

> **version**: `string`

#### Inherited from

[`InnertubeError`](InnertubeError.md).[`version`](InnertubeError.md#version)

#### Defined in

[src/utils/Utils.ts:27](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/utils/Utils.ts#L27)

***

### prepareStackTrace()?

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Optional override for formatting stack traces

#### Parameters

• **err**: `Error`

• **stackTraces**: `CallSite`[]

#### Returns

`any`

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

[`InnertubeError`](InnertubeError.md).[`prepareStackTrace`](InnertubeError.md#preparestacktrace)

#### Defined in

node\_modules/@types/node/globals.d.ts:11

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

#### Inherited from

[`InnertubeError`](InnertubeError.md).[`stackTraceLimit`](InnertubeError.md#stacktracelimit)

#### Defined in

node\_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Create .stack property on a target object

#### Parameters

• **targetObject**: `object`

• **constructorOpt?**: `Function`

#### Returns

`void`

#### Inherited from

[`InnertubeError`](InnertubeError.md).[`captureStackTrace`](InnertubeError.md#capturestacktrace)

#### Defined in

node\_modules/@types/node/globals.d.ts:4
