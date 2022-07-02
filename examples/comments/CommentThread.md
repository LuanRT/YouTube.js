# CommentThread

A `CommentThread` represents a top-level comment and its replies.

## API

* CommentThread
  * [.comment](#comment) ⇒ `Comment`
  * [.replies](#replies) ⇒ `Comment[]`
  * [.getReplies](#getreplies) ⇒ `function`
  * [.getContinuation](#getcontinuation) ⇒ `function`

<a name="comment"></a>
### comment
The top-level comment. **Note:** More about `Comment` [here](./Comment.md).

**Type:** [`Comment`](../../lib/parser/contents/classes/Comment.js)

<a name="replies"></a>
### replies
An array of replies to the top-level comment. (not populated until [`getReplies()`](#getreplies) is called).

**Type:** [`Comment[]`](../../lib/parser/contents/classes/Comment.js)

<a name="getreplies"></a>
### getReplies()
Retrieves replies to the top-level comment and attaches a [`replies`](#replies) array to the original `CommentThread` object and returns it.

**Returns:** [`Promise.<CommentThread>`](../../lib/parser/contents/classes/CommentThread.js)

<a name="getcontinuation"></a>
### getContinuation()
Retrieves next batch of replies and adds them to the [`replies`](#replies) array. **Note:** [`getReplies()`](#getreplies) must be called before using this.

**Returns:** [`Promise.<CommentThread>`](../../lib/parser/contents/classes/CommentThread.js)