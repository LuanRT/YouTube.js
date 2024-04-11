## Comments
YouTube.js has full support for comments, including comment actions such as translating, liking, disliking and replying.

## Usage
Get a [`Comments`](../../src/parser/youtube/Comments.ts) instance:

```js
const comments = await yt.getComments(VIDEO_ID);
```

## API
* Comments
  * [.contents](#commentthread) ⇒ `CommentThread[]`
  * [.applySort](#applysort) ⇒ `function`
  * [.createComment](#createComment) ⇒ `function`
  * [.getContinuation](#getc) ⇒ `function`
  * [.has_continuation](#has_continuation) ⇒ `getter`
  * [.page](#page) ⇒ `getter`

<a name="commentthread"></a>
### contents
A list of comment threads. **Note:** More about comment threads [**here**](./CommentThread.md).

**Type:** [`CommentThread[]`](../../src/parser/classes/comments/CommentThread.ts)

<a name="applysort"></a>
### applySort(sort)
Applies given sort option to the comments.

| Param | Type | Description |
| --- | --- | --- |
| sort | `string` | Sort option. Can be `TOP_COMMENTS`, `NEWEST_FIRST` |

**Returns:** [`Promise.<Comments>`](../../src/parser/youtube/Comments.ts)

<a name="createComment"></a>
### createComment(text)
Creates a top-level comment.

| Param | Type | Description |
| --- | --- | --- |
| text | `string` | Comment content |

**Returns:** `Promise<ActionsResponse>`

<a name="getc"></a>
### getContinuation()
Retrieves next batch of comment threads.

**Returns:** [`Promise.<Comments>`](../../src/parser/youtube/Comments.ts)

<a name="has_continuation"></a>
### has_continuation
Returns whether there are more comments to be fetched.

**Type:** `boolean`

<a name="page"></a>
### page
Returns original InnerTube response (sanitized).

**Returns:** `ParsedResponse`