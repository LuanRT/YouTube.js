# InteractionManager

Handles direct interactions.

## API

* InteractionManager 
  * [.like(video_id)](#like) 
  * [.dislike(video_id)](#dislike) 
  * [.removeRating(video_id)](#removerating) 
  * [.subscribe(video_id)](#subscribe) 
  * [.unsubscribe(video_id)](#unsubscribe) 
  * [.comment(video_id, text)](#comment) 
  * [.translate(text, target_language, args?)](#translate) 
  * [.setNotificationPreferences(channel_id, type)](#setnotificationpreferences)

<a name="like"></a>
### like(video_id)

Likes given video.

**Returns:** `Promise.<ApiResponse>`

| Param | Type | Description |
| --- | --- | --- |
| video_id | `string` | Video id |

<a name="dislike"></a>
### dislike(video_id)

Dislikes given video.

**Returns:** `Promise.<ApiResponse>`

| Param | Type | Description |
| --- | --- | --- |
| video_id | `string` | Video id |

<a name="removerating"></a>
### removeLike(video_id)

Remover like/dislike.

**Returns:** `Promise.<ApiResponse>`

| Param | Type | Description |
| --- | --- | --- |
| video_id | `string` | Video id |

<a name="subscribe"></a>
### subscribe(channel_id)

Subscribes to given channel.

**Returns:** `Promise.<ApiResponse>`

| Param | Type | Description |
| --- | --- | --- |
| channel_id | `string` | Channel id |

<a name="unsubscribe"></a>
### unsubscribe(channel_id)

Unsubscribes from given channel.

**Returns:** `Promise.<ApiResponse>`

| Param | Type | Description |
| --- | --- | --- |
| channel_id | `string` | Channel id |

<a name="comment"></a>
### comment(video_id, text)

Posts a comment on given video.

**Returns:** `Promise.<ApiResponse>`

| Param | Type | Description |
| --- | --- | --- |
| video_id | `string` | Video id |
| text | `string` | Comment content |

<a name="translate"></a>
### translate(text, target_language, args?)

Translates given text using YouTube's comment translation feature.

**Returns:** `Promise.<ApiResponse>`

| Param | Type | Description |
| --- | --- | --- |
| text | `string` | Text to be translated |
| target_language | `string` | ISO language code |
| args? | `object` | Additional arguments |

<a name="setnotificationpreferences"></a>
### setNotificationPreferences(channel_id, type)

Changes notification preferences for a given channel.
Only works with channels you are subscribed to.

**Returns:** `Promise.<ApiResponse>`

| Param | Type | Description |
| --- | --- | --- |
| channel_id | `string` | Channel id |
| type | `string` | `PERSONALIZED`, `ALL` or `NONE` |