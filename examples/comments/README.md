## Comments
YouTube.js has full support for comments, including comment actions such as liking, disliking, replying etc.

## Usage
Get a [`Comments`](../../lib/parser/youtube/Comments.js) instance:

```js
const comments = await session.getComments(VIDEO_ID);
```

## API
* Comments
  * [.contents](#commentthread) ⇒ `CommentThread[]`
  * [.createComment](#createComment) ⇒ `function`
  * [.getContinuation](#getc) ⇒ `function`
  * [.page](#page) ⇒ `getter`

<a name="commentthread"></a>
### contents
A list of comment threads. **Note:** More about comment threads [**here**](./CommentThread.md).

**Type:** [`CommentThread[]`](../../lib/parser/contents/classes/CommentThread.js)

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

**Returns:** [`Promise.<Comments>`](../../lib/parser/youtube/Comments.ts)

<a name="page"></a>
### page
Returns original InnerTube response (sanitized).

**Returns:** `ParsedResponse`

## Example
See [`index.ts`]('./index.ts').