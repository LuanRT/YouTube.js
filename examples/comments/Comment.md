## Comment
Contains information about a single comment. A [`Comment`](../../src/parser/classes/comments/Comment.ts) can be a top-level comment or a reply to a top-level comment.

## API

* Comment
  * [.like](#like) ⇒ `function`
  * [.dislike](#dislike) ⇒ `function`
  * [.reply](#comment) ⇒ `function`
  * [.translate](#translate) ⇒ `function`

<a name="like"></a>
### like()
Likes the comment.

**Returns:** `Promise.<{ success: boolean, status_code: number, data: object }>`

<a name="dislike"></a>
### dislike()
Dislikes the comment.

**Returns:** `Promise.<{ success: boolean, status_code: number, data: object }>`

<a name="reply"></a>
### reply(text)
Creates a reply to the comment. **Note:** To create a top-level comment, use the [`Comments#comment(text)`](./README.md#comment)  method.

**Returns:** `Promise.<{ success: boolean, status_code: number, data: object }>`

<a name="translate"></a>
### translate(target_language)
Translates the comment to the given language.

**Returns:** `Promise.<{ success: boolean, status_code: number, data: object, content: string }>`
