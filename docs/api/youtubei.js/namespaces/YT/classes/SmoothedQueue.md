[youtubei.js](../../../../README.md) / [YT](../README.md) / SmoothedQueue

# Class: SmoothedQueue

Defined in: [src/parser/youtube/SmoothedQueue.ts:46](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/SmoothedQueue.ts#L46)

## Constructors

### Constructor

> **new SmoothedQueue**(): `SmoothedQueue`

Defined in: [src/parser/youtube/SmoothedQueue.ts:55](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/SmoothedQueue.ts#L55)

#### Returns

`SmoothedQueue`

## Accessors

### action\_queue

#### Get Signature

> **get** **action\_queue**(): [`YTNode`](../../Helpers/classes/YTNode.md)[][]

Defined in: [src/parser/youtube/SmoothedQueue.ts:141](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/SmoothedQueue.ts#L141)

##### Returns

[`YTNode`](../../Helpers/classes/YTNode.md)[][]

***

### callback

#### Get Signature

> **get** **callback**(): (`actions`) => `void` \| `null`

Defined in: [src/parser/youtube/SmoothedQueue.ts:137](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/SmoothedQueue.ts#L137)

##### Returns

(`actions`) => `void` \| `null`

#### Set Signature

> **set** **callback**(`cb`): `void`

Defined in: [src/parser/youtube/SmoothedQueue.ts:133](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/SmoothedQueue.ts#L133)

##### Parameters

###### cb

(`actions`) => `void` | `null`

##### Returns

`void`

***

### estimated\_update\_interval

#### Get Signature

> **get** **estimated\_update\_interval**(): `number` \| `null`

Defined in: [src/parser/youtube/SmoothedQueue.ts:145](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/SmoothedQueue.ts#L145)

##### Returns

`number` \| `null`

***

### last\_update\_time

#### Get Signature

> **get** **last\_update\_time**(): `number` \| `null`

Defined in: [src/parser/youtube/SmoothedQueue.ts:149](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/SmoothedQueue.ts#L149)

##### Returns

`number` \| `null`

***

### next\_update\_id

#### Get Signature

> **get** **next\_update\_id**(): `any`

Defined in: [src/parser/youtube/SmoothedQueue.ts:153](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/SmoothedQueue.ts#L153)

##### Returns

`any`

***

### poll\_response\_delay\_queue

#### Get Signature

> **get** **poll\_response\_delay\_queue**(): `DelayQueue`

Defined in: [src/parser/youtube/SmoothedQueue.ts:157](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/SmoothedQueue.ts#L157)

##### Returns

`DelayQueue`

## Methods

### clear()

> **clear**(): `void`

Defined in: [src/parser/youtube/SmoothedQueue.ts:125](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/SmoothedQueue.ts#L125)

#### Returns

`void`

***

### emitSmoothedActions()

> **emitSmoothedActions**(): `void`

Defined in: [src/parser/youtube/SmoothedQueue.ts:92](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/SmoothedQueue.ts#L92)

#### Returns

`void`

***

### enqueueActionGroup()

> **enqueueActionGroup**(`group`): `void`

Defined in: [src/parser/youtube/SmoothedQueue.ts:64](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/SmoothedQueue.ts#L64)

#### Parameters

##### group

[`YTNode`](../../Helpers/classes/YTNode.md)[]

#### Returns

`void`
