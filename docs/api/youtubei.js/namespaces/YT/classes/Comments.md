[youtubei.js](../../../../README.md) / [YT](../README.md) / Comments

# Class: Comments

Defined in: [src/parser/youtube/Comments.ts:15](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/Comments.ts#L15)

## Constructors

### Constructor

> **new Comments**(`actions`, `data`, `already_parsed`): `Comments`

Defined in: [src/parser/youtube/Comments.ts:23](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/Comments.ts#L23)

#### Parameters

##### actions

[`Actions`](../../../../classes/Actions.md)

##### data

`any`

##### already\_parsed

`boolean` = `false`

#### Returns

`Comments`

## Properties

### contents

> **contents**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`CommentThread`](../../YTNodes/classes/CommentThread.md)\>

Defined in: [src/parser/youtube/Comments.ts:21](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/Comments.ts#L21)

***

### header?

> `optional` **header**: [`CommentsHeader`](../../YTNodes/classes/CommentsHeader.md)

Defined in: [src/parser/youtube/Comments.ts:20](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/Comments.ts#L20)

## Accessors

### has\_continuation

#### Get Signature

> **get** **has\_continuation**(): `boolean`

Defined in: [src/parser/youtube/Comments.ts:117](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/Comments.ts#L117)

##### Returns

`boolean`

***

### page

#### Get Signature

> **get** **page**(): [`INextResponse`](../../../../type-aliases/INextResponse.md)

Defined in: [src/parser/youtube/Comments.ts:121](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/Comments.ts#L121)

##### Returns

[`INextResponse`](../../../../type-aliases/INextResponse.md)

## Methods

### applySort()

> **applySort**(`sort`): `Promise`\<`Comments`\>

Defined in: [src/parser/youtube/Comments.ts:53](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/Comments.ts#L53)

Applies given sort option to the comments.

#### Parameters

##### sort

Sort type.

`"TOP_COMMENTS"` | `"NEWEST_FIRST"`

#### Returns

`Promise`\<`Comments`\>

***

### createComment()

> **createComment**(`text`): `Promise`\<[`ApiResponse`](../../../../interfaces/ApiResponse.md)\>

Defined in: [src/parser/youtube/Comments.ts:80](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/Comments.ts#L80)

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

Defined in: [src/parser/youtube/Comments.ts:98](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/Comments.ts#L98)

Retrieves next batch of comments.

#### Returns

`Promise`\<`Comments`\>
