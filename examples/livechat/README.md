## Live Chat

Represents a livestream chat. 

## Usage 

Before fetching a live chat, you have to retrieve the target livestream's info:

```js
const info = await yt.getInfo('video_id');
```

Then you may request a live chat instance:
```js
const livechat = await info.getLiveChat();
```

## API

* LiveChat
  * [.ev](#ev) ⇒ `EventEmitter`
  * [.start](#start) ⇒ `function`
  * [.stop](#stop) ⇒ `function`
  * [.applyFilter](#applyfilter) ⇒ `function`
  * [.getItemMenu](#getitemmenu) ⇒ `function`
  * [.sendMessage](#sendmessage) ⇒ `function`

<a name="ev"></a>
### ev
Live Chat's EventEmitter.

**Events:**

- `start`
  
  Fired when the live chat is started.
 
  Arguments:
  | Type | Description |
  | --- | --- |                                       
  | `LiveChatContinuation` | Initial chat data, actions, info, etc. |

- `chat-update`

  Fired when a new chat action is received.

  Arguments:
  | Type | Description |
  | --- | --- |
  | `ChatAction` | Chat action |

- `metadata-update`

  Fired when the livestream's metadata is updated.
 
  Arguments:
  | Type | Description |
  | --- | --- |
  | `LiveMetadata` | Livestream metadata |

- `error`
  
  Fired when an error occurs.
  
  Arguments:
  | Type | Description |
  | --- | --- |
  | `Error` | Details about the error |
  
- `end`
 
  Fired when the livestream ends.

<a name="start"></a>
### start()
Starts the Live Chat.

<a name="stop"></a>
### stop()
Stops the Live Chat.

<a name="applyfilter"></a>
### applyFilter(filter)

Applies given filter to the live chat.

| Param | Type | Description |
| --- | --- | --- |
| filter | `string` | Can be `TOP_CHAT` or `LIVE_CHAT` |

<a name="getitemmenu"></a>
### getItemMenu(item)
Retrieves given chat item's menu.

| Param | Type | Description |
| --- | --- | --- |
| item | `object` | Chat item |

**Returns:** `Promise<ItemMenu>`

<a name="sendmessage"></a>
### sendMessage(text)
Sends a message.

| Param | Type | Description |
| --- | --- | --- |
| text | `string` | Message content |

**Returns:** `Promise<ObservedArray<AddChatItemAction>>`

## Example
See [`index.ts`](./index.ts).
