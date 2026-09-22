[youtubei.js](../../../../README.md) / [YT](../README.md) / Comments

# Class: Comments

Defined in: [src/parser/youtube/Comments.ts:15](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/youtube/Comments.ts#L15)

## Constructors

### Constructor

> **new Comments**(`actions`, `data`, `already_parsed?`): `Comments`

Defined in: [src/parser/youtube/Comments.ts:23](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/youtube/Comments.ts#L23)

#### Parameters

##### actions

[`Actions`](../../../../classes/Actions.md)

##### data

`any`

##### already\_parsed?

`boolean` = `false`

#### Returns

`Comments`

## Properties

### contents

> **contents**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`CommentThread`](../../YTNodes/classes/CommentThread.md)\>

Defined in: [src/parser/youtube/Comments.ts:21](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/youtube/Comments.ts#L21)

***

### header?

> `optional` **header?**: [`CommentsHeader`](../../YTNodes/classes/CommentsHeader.md)

Defined in: [src/parser/youtube/Comments.ts:20](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/youtube/Comments.ts#L20)

## Accessors

### has\_continuation

#### Get Signature

> **get** **has\_continuation**(): `boolean`

Defined in: [src/parser/youtube/Comments.ts:118](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/youtube/Comments.ts#L118)

##### Returns

`boolean`

***

### page

#### Get Signature

> **get** **page**(): [`INextResponse`](../../../../type-aliases/INextResponse.md)

Defined in: [src/parser/youtube/Comments.ts:122](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/youtube/Comments.ts#L122)

##### Returns

[`INextResponse`](../../../../type-aliases/INextResponse.md)

## Methods

### applySort()

> **applySort**(`sort`): `Promise`\<`Comments`\>

Defined in: [src/parser/youtube/Comments.ts:54](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/youtube/Comments.ts#L54)

Applies given sort option to the comments.

#### Parameters

##### sort

`"TOP_COMMENTS"` \| `"NEWEST_FIRST"`

Sort type.

#### Returns

`Promise`\<`Comments`\>

***

### createComment()

> **createComment**(`text`): `Promise`\<[`ApiResponse`](../../../../interfaces/ApiResponse.md)\>

Defined in: [src/parser/youtube/Comments.ts:81](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/youtube/Comments.ts#L81)

Creates a top-level comment.

#### Parameters

##### text

`string`

Comment text.

#### Returns

`Promise`\<[`ApiResponse`](../../../../interfaces/ApiResponse.md)\>

***

### getContinuation()

> **getContinuation**(): `Promise`\<`Comments`\>

Defined in: [src/parser/youtube/Comments.ts:99](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/youtube/Comments.ts#L99)

Retrieves next batch of comments.

#### Returns

`Promise`\<`Comments`\>
