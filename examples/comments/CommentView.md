## CommentView
Contains information about a single comment. A [`CommentView`](../../src/parser/classes/comments/CommentView.ts) can be a top-level comment or a reply to a top-level comment.

## API

* Comment
  * [.like](#like) ⇒ `function`
  * [.unlike](#like) ⇒ `function`
  * [.dislike](#dislike) ⇒ `function`
  * [.undislike](#dislike) ⇒ `function`
  * [.reply](#reply) ⇒ `function`
  * [.translate](#translate) ⇒ `function`

<a name="like"></a>
### like()
Likes the comment.

**Returns:** `Promise.<ApiResponse>`

<a name="unlike"></a>
### unlike()
Unlikes the comment.

**Returns:** `Promise.<ApiResponse>`

<a name="dislike"></a>
### dislike()
Dislikes the comment.

**Returns:** `Promise.<ApiResponse>`

<a name="undislike"></a>
### undislike()
Undislikes the comment.

**Returns:** `Promise.<ApiResponse>`

<a name="reply"></a>
### reply(comment_text: string)
Replies to the comment.

**Returns:** `Promise.<ApiResponse>`

<a name="translate"></a>
### translate(target_language: string)
Translates the comment to the given language.

**Returns:** `Promise.<ApiResponse & { content?: string }>`