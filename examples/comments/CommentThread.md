# CommentThread

A `CommentThread` represents a top-level comment and its replies.

## API

* CommentThread
  * [.comment](#comment) ⇒ `Comment`
  * [.replies](#replies) ⇒ `Comment[]`
  * [.getReplies](#getreplies) ⇒ `function`
  * [.getContinuation](#getcontinuation) ⇒ `function`
  * [.has_continuation](#hascontinuation) ⇒ `boolean`
  * [.has_replies](#hasreplies) ⇒ `boolean`

<a name="comment"></a>
### comment
The top-level comment. **Note:** More about `Comment` [here](./Comment.md).

**Type:** [`Comment`](../../src/parser/classes/comments/Comment.ts)

<a name="replies"></a>
### replies
An array of replies to the top-level comment. (not populated until [`getReplies()`](#getreplies) is called).

**Type:** [`Comment[]`](../../src/parser/classes/comments/Comment.ts)

<a name="getreplies"></a>
### getReplies()
Retrieves replies to the top-level comment and attaches a [`replies`](#replies) array to the original `CommentThread` object and returns it.

**Returns:** [`Promise.<CommentThread>`](../../src/parser/classes/comments/CommentThread.ts)

<a name="getcontinuation"></a>
### getContinuation()
Retrieves next batch of replies and adds them to the [`replies`](#replies) array. **Note:** [`getReplies()`](#getreplies) must be called before using this.

**Returns:** [`Promise.<CommentThread>`](../../src/parser/classes/comments/CommentThread.ts)

<a name="hascontinuation"></a>
### has_continuation
Whether there are more replies to be retrieved.

**Type:** `boolean`

<a name="hasreplies"></a>
### has_replies

Whether there are replies to the top-level comment.

**Type:** `boolean`