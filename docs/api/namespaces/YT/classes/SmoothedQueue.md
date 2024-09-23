[youtubei.js](../../../README.md) / [YT](../README.md) / SmoothedQueue

# Class: SmoothedQueue

## Constructors

### new SmoothedQueue()

> **new SmoothedQueue**(): [`SmoothedQueue`](SmoothedQueue.md)

#### Returns

[`SmoothedQueue`](SmoothedQueue.md)

#### Defined in

[src/parser/youtube/SmoothedQueue.ts:54](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/SmoothedQueue.ts#L54)

## Accessors

### action\_queue

> `get` **action\_queue**(): [`YTNode`](../../Helpers/classes/YTNode.md)[][]

#### Returns

[`YTNode`](../../Helpers/classes/YTNode.md)[][]

#### Defined in

[src/parser/youtube/SmoothedQueue.ts:140](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/SmoothedQueue.ts#L140)

***

### callback

> `get` **callback**(): `null` \| (`actions`) => `void`

> `set` **callback**(`cb`): `void`

#### Parameters

• **cb**: `null` \| (`actions`) => `void`

#### Returns

`null` \| (`actions`) => `void`

#### Defined in

[src/parser/youtube/SmoothedQueue.ts:136](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/SmoothedQueue.ts#L136)

***

### estimated\_update\_interval

> `get` **estimated\_update\_interval**(): `null` \| `number`

#### Returns

`null` \| `number`

#### Defined in

[src/parser/youtube/SmoothedQueue.ts:144](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/SmoothedQueue.ts#L144)

***

### last\_update\_time

> `get` **last\_update\_time**(): `null` \| `number`

#### Returns

`null` \| `number`

#### Defined in

[src/parser/youtube/SmoothedQueue.ts:148](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/SmoothedQueue.ts#L148)

***

### next\_update\_id

> `get` **next\_update\_id**(): `any`

#### Returns

`any`

#### Defined in

[src/parser/youtube/SmoothedQueue.ts:152](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/SmoothedQueue.ts#L152)

***

### poll\_response\_delay\_queue

> `get` **poll\_response\_delay\_queue**(): `DelayQueue`

#### Returns

`DelayQueue`

#### Defined in

[src/parser/youtube/SmoothedQueue.ts:156](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/SmoothedQueue.ts#L156)

## Methods

### clear()

> **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/parser/youtube/SmoothedQueue.ts:124](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/SmoothedQueue.ts#L124)

***

### emitSmoothedActions()

> **emitSmoothedActions**(): `void`

#### Returns

`void`

#### Defined in

[src/parser/youtube/SmoothedQueue.ts:91](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/SmoothedQueue.ts#L91)

***

### enqueueActionGroup()

> **enqueueActionGroup**(`group`): `void`

#### Parameters

• **group**: [`YTNode`](../../Helpers/classes/YTNode.md)[]

#### Returns

`void`

#### Defined in

[src/parser/youtube/SmoothedQueue.ts:63](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/SmoothedQueue.ts#L63)
