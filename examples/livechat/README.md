## Live Chat

The library's Live Chat parser and poller were heavily based on YouTube's original compiled code, this makes it behave in a similar if not identical way to YouTube's Live Chat. Here you can do all sorts of funny things, ex; track messages, donations, polls, and much more.

## Usage 

Before fetching a Live Chat, you have to retrieve the target livestream's info:

```js
const info = await session.getInfo('video_id');
```

Then you may request a Live Chat instance:
```js
const livechat = await info.getLiveChat();
```

## API

* LiveChat
  * [.ev](#ev) ⇒ `EventEmitter`
  * [.start](#start) ⇒ `function`
  * [.stop](#stop) ⇒ `function`
  * [.sendMessage](#sendmessage) ⇒ `function`

<a name="ev"></a>
### ev
Live Chat's EventEmitter.

**Events:**

- `start`
 
  Arguments:
  | Type | Description |
  | --- | --- |                                       
  | `object` | Initial chat data, actions, info, etc. |

- `chat-update`
 
  Arguments:
  | Type | Description |
  | --- | --- |
  | `object` | Chat Action |

- `metadata-update`
 
  Arguments:
  | Type | Description |
  | --- | --- |
  | `object` | LiveStream Metadata |

<a name="start"></a>
### start()
Starts the Live Chat.

<a name="stop"></a>
### stop()
Stops the Live Chat.

<a name="sendmessage"></a>
### sendMessage(text)
Sends a message.

| Param | Type | Description |
| --- | --- | --- |
| text | `string` | Message content |

**Returns:** `Promise.<object>`

## Example
See [`index.js`]('./index.js').
