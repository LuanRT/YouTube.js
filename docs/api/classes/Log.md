[youtubei.js](../README.md) / Log

# Class: Log

## Constructors

### new Log()

> **new Log**(): [`Log`](Log.md)

#### Returns

[`Log`](Log.md)

## Properties

### Level

> `static` **Level**: `object`

#### DEBUG

> **DEBUG**: `number` = `4`

#### ERROR

> **ERROR**: `number` = `1`

#### INFO

> **INFO**: `number` = `3`

#### NONE

> **NONE**: `number` = `0`

#### WARNING

> **WARNING**: `number` = `2`

#### Defined in

[src/utils/Log.ts:4](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/utils/Log.ts#L4)

## Methods

### debug()

> `static` **debug**(`tag`?, ...`args`?): `void`

#### Parameters

• **tag?**: `string`

• ...**args?**: `any`[]

#### Returns

`void`

#### Defined in

[src/utils/Log.ts:32](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/utils/Log.ts#L32)

***

### error()

> `static` **error**(`tag`?, ...`args`?): `void`

#### Parameters

• **tag?**: `string`

• ...**args?**: `any`[]

#### Returns

`void`

#### Defined in

[src/utils/Log.ts:30](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/utils/Log.ts#L30)

***

### info()

> `static` **info**(`tag`?, ...`args`?): `void`

#### Parameters

• **tag?**: `string`

• ...**args?**: `any`[]

#### Returns

`void`

#### Defined in

[src/utils/Log.ts:31](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/utils/Log.ts#L31)

***

### setLevel()

> `static` **setLevel**(...`args`): `void`

#### Parameters

• ...**args**: `number`[]

#### Returns

`void`

#### Defined in

[src/utils/Log.ts:46](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/utils/Log.ts#L46)

***

### warn()

> `static` **warn**(`tag`?, ...`args`?): `void`

#### Parameters

• **tag?**: `string`

• ...**args?**: `any`[]

#### Returns

`void`

#### Defined in

[src/utils/Log.ts:29](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/utils/Log.ts#L29)

***

### warnOnce()

> `static` **warnOnce**(`id`, ...`args`): `void`

#### Parameters

• **id**: `string`

• ...**args**: `any`[]

#### Returns

`void`

#### Defined in

[src/utils/Log.ts:22](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/utils/Log.ts#L22)
