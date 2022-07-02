## Comments
YouTube.js has full support for comments, including comment actions such as liking, disliking, replying etc.

## Usage
Get a [`Comments`](tree/main/lib/parser/contents/youtube/Comments.js) instance:

```js
const threads = await session.getComments(VIDEO_ID);
```

## API
* Comments
  * [.contents](#commentthread) ⇒ `CommentThread[]`
  * [.comment](#comment) ⇒ `function`
  * [.getContinuation](#getc) ⇒ `function`
  * [.page](#page) ⇒ `getter`

<a name="commentthread"></a>
### contents
A list of comment threads. **Note:** More about comment threads [**here**](./CommentThread.md).

**Type:** [`CommentThread[]`](../../lib/parser/contents/classes/CommentThread.js)

<a name="comment"></a>
### comment(text)
Posts a top-level comment.

| Param | Type | Description |
| --- | --- | --- |
| text | `string` | Comment content |

**Returns:** `Promise.<object>`

<a name="getc"></a>
### getContinuation()
Retrieves next batch of comment threads.

**Returns:** [`Promise.<Comments>`](tree/main/lib/parser/youtube/Comments.js)

<a name="page"></a>
### page
Returns original InnerTube response (sanitized).

**Returns:** `Promise.<object>`