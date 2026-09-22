[youtubei.js](../../../../README.md) / [Misc](../README.md) / CommentsContinuation

# Class: CommentsContinuation

Defined in: [src/parser/classes/misc/CommentsContinuation.ts:10](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/misc/CommentsContinuation.ts#L10)

## Constructors

### Constructor

> **new CommentsContinuation**(`actions`, `data`): `CommentsContinuation`

Defined in: [src/parser/classes/misc/CommentsContinuation.ts:16](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/misc/CommentsContinuation.ts#L16)

#### Parameters

##### actions

[`Actions`](../../../../classes/Actions.md)

##### data

[`INextResponse`](../../../../type-aliases/INextResponse.md)

#### Returns

`CommentsContinuation`

## Properties

### replies

> **replies**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`CommentThread`](../../YTNodes/classes/CommentThread.md)\>

Defined in: [src/parser/classes/misc/CommentsContinuation.ts:11](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/misc/CommentsContinuation.ts#L11)

## Accessors

### has\_continuation

#### Get Signature

> **get** **has\_continuation**(): `boolean`

Defined in: [src/parser/classes/misc/CommentsContinuation.ts:41](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/misc/CommentsContinuation.ts#L41)

Indicates whether this comment thread has more replies that can be fetched.

##### Returns

`boolean`

## Methods

### getContinuation()

> **getContinuation**(): `Promise`\<`CommentsContinuation`\>

Defined in: [src/parser/classes/misc/CommentsContinuation.ts:48](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/misc/CommentsContinuation.ts#L48)

Retrieves next batch of replies.

#### Returns

`Promise`\<`CommentsContinuation`\>
