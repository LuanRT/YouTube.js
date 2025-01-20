[youtubei.js](../../../README.md) / [YT](../README.md) / Comments

# Class: Comments

## Constructors

### new Comments()

> **new Comments**(`actions`, `data`, `already_parsed`): [`Comments`](Comments.md)

#### Parameters

• **actions**: [`Actions`](../../../classes/Actions.md)

• **data**: `any`

• **already\_parsed**: `boolean` = `false`

#### Returns

[`Comments`](Comments.md)

#### Defined in

[src/parser/youtube/Comments.ts:23](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/Comments.ts#L23)

## Properties

### contents

> **contents**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`CommentThread`](../../YTNodes/classes/CommentThread.md)\>

#### Defined in

[src/parser/youtube/Comments.ts:21](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/Comments.ts#L21)

***

### header?

> `optional` **header**: [`CommentsHeader`](../../YTNodes/classes/CommentsHeader.md)

#### Defined in

[src/parser/youtube/Comments.ts:20](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/Comments.ts#L20)

## Accessors

### has\_continuation

> `get` **has\_continuation**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/youtube/Comments.ts:117](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/Comments.ts#L117)

***

### page

> `get` **page**(): [`INextResponse`](../../APIResponseTypes/type-aliases/INextResponse.md)

#### Returns

[`INextResponse`](../../APIResponseTypes/type-aliases/INextResponse.md)

#### Defined in

[src/parser/youtube/Comments.ts:121](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/Comments.ts#L121)

## Methods

### applySort()

> **applySort**(`sort`): `Promise`\<[`Comments`](Comments.md)\>

Applies given sort option to the comments.

#### Parameters

• **sort**: `"TOP_COMMENTS"` \| `"NEWEST_FIRST"`

Sort type.

#### Returns

`Promise`\<[`Comments`](Comments.md)\>

#### Defined in

[src/parser/youtube/Comments.ts:53](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/Comments.ts#L53)

***

### createComment()

> **createComment**(`text`): `Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

Creates a top-level comment.

#### Parameters

• **text**: `string`

Comment text.

#### Returns

`Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

#### Defined in

[src/parser/youtube/Comments.ts:80](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/Comments.ts#L80)

***

### getContinuation()

> **getContinuation**(): `Promise`\<[`Comments`](Comments.md)\>

Retrieves next batch of comments.

#### Returns

`Promise`\<[`Comments`](Comments.md)\>

#### Defined in

[src/parser/youtube/Comments.ts:98](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/Comments.ts#L98)
