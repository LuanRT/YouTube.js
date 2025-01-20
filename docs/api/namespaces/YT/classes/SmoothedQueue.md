[youtubei.js](../../../README.md) / [YT](../README.md) / SmoothedQueue

# Class: SmoothedQueue

## Constructors

### new SmoothedQueue()

> **new SmoothedQueue**(): [`SmoothedQueue`](SmoothedQueue.md)

#### Returns

[`SmoothedQueue`](SmoothedQueue.md)

#### Defined in

[src/parser/youtube/SmoothedQueue.ts:55](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/SmoothedQueue.ts#L55)

## Accessors

### action\_queue

> `get` **action\_queue**(): [`YTNode`](../../Helpers/classes/YTNode.md)[][]

#### Returns

[`YTNode`](../../Helpers/classes/YTNode.md)[][]

#### Defined in

[src/parser/youtube/SmoothedQueue.ts:141](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/SmoothedQueue.ts#L141)

***

### callback

> `get` **callback**(): `null` \| (`actions`) => `void`

> `set` **callback**(`cb`): `void`

#### Parameters

• **cb**: `null` \| (`actions`) => `void`

#### Returns

`null` \| (`actions`) => `void`

#### Defined in

[src/parser/youtube/SmoothedQueue.ts:137](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/SmoothedQueue.ts#L137)

***

### estimated\_update\_interval

> `get` **estimated\_update\_interval**(): `null` \| `number`

#### Returns

`null` \| `number`

#### Defined in

[src/parser/youtube/SmoothedQueue.ts:145](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/SmoothedQueue.ts#L145)

***

### last\_update\_time

> `get` **last\_update\_time**(): `null` \| `number`

#### Returns

`null` \| `number`

#### Defined in

[src/parser/youtube/SmoothedQueue.ts:149](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/SmoothedQueue.ts#L149)

***

### next\_update\_id

> `get` **next\_update\_id**(): `any`

#### Returns

`any`

#### Defined in

[src/parser/youtube/SmoothedQueue.ts:153](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/SmoothedQueue.ts#L153)

***

### poll\_response\_delay\_queue

> `get` **poll\_response\_delay\_queue**(): `DelayQueue`

#### Returns

`DelayQueue`

#### Defined in

[src/parser/youtube/SmoothedQueue.ts:157](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/SmoothedQueue.ts#L157)

## Methods

### clear()

> **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/parser/youtube/SmoothedQueue.ts:125](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/SmoothedQueue.ts#L125)

***

### emitSmoothedActions()

> **emitSmoothedActions**(): `void`

#### Returns

`void`

#### Defined in

[src/parser/youtube/SmoothedQueue.ts:92](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/SmoothedQueue.ts#L92)

***

### enqueueActionGroup()

> **enqueueActionGroup**(`group`): `void`

#### Parameters

• **group**: [`YTNode`](../../Helpers/classes/YTNode.md)[]

#### Returns

`void`

#### Defined in

[src/parser/youtube/SmoothedQueue.ts:64](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/SmoothedQueue.ts#L64)
