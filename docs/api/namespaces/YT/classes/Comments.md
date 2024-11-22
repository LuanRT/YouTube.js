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

[src/parser/youtube/Comments.ts:22](https://github.com/LuanRT/YouTube.js/blob/cf09f7bab14fcca99e1f3ae428c7337fea58cfa5/src/parser/youtube/Comments.ts#L22)

## Properties

### contents

> **contents**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`CommentThread`](../../YTNodes/classes/CommentThread.md)\>

#### Defined in

[src/parser/youtube/Comments.ts:20](https://github.com/LuanRT/YouTube.js/blob/cf09f7bab14fcca99e1f3ae428c7337fea58cfa5/src/parser/youtube/Comments.ts#L20)

***

### header?

> `optional` **header**: [`CommentsHeader`](../../YTNodes/classes/CommentsHeader.md)

#### Defined in

[src/parser/youtube/Comments.ts:19](https://github.com/LuanRT/YouTube.js/blob/cf09f7bab14fcca99e1f3ae428c7337fea58cfa5/src/parser/youtube/Comments.ts#L19)

## Accessors

### has\_continuation

> `get` **has\_continuation**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/parser/youtube/Comments.ts:116](https://github.com/LuanRT/YouTube.js/blob/cf09f7bab14fcca99e1f3ae428c7337fea58cfa5/src/parser/youtube/Comments.ts#L116)

***

### page

> `get` **page**(): [`INextResponse`](../../APIResponseTypes/type-aliases/INextResponse.md)

#### Returns

[`INextResponse`](../../APIResponseTypes/type-aliases/INextResponse.md)

#### Defined in

[src/parser/youtube/Comments.ts:120](https://github.com/LuanRT/YouTube.js/blob/cf09f7bab14fcca99e1f3ae428c7337fea58cfa5/src/parser/youtube/Comments.ts#L120)

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

[src/parser/youtube/Comments.ts:52](https://github.com/LuanRT/YouTube.js/blob/cf09f7bab14fcca99e1f3ae428c7337fea58cfa5/src/parser/youtube/Comments.ts#L52)

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

[src/parser/youtube/Comments.ts:79](https://github.com/LuanRT/YouTube.js/blob/cf09f7bab14fcca99e1f3ae428c7337fea58cfa5/src/parser/youtube/Comments.ts#L79)

***

### getContinuation()

> **getContinuation**(): `Promise`\<[`Comments`](Comments.md)\>

Retrieves next batch of comments.

#### Returns

`Promise`\<[`Comments`](Comments.md)\>

#### Defined in

[src/parser/youtube/Comments.ts:97](https://github.com/LuanRT/YouTube.js/blob/cf09f7bab14fcca99e1f3ae428c7337fea58cfa5/src/parser/youtube/Comments.ts#L97)
