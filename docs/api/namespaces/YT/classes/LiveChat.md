[youtubei.js](../../../README.md) / [YT](../README.md) / LiveChat

# Class: LiveChat

## Extends

- [`EventEmitter`](../../../classes/EventEmitter.md)

## Constructors

### new LiveChat()

> **new LiveChat**(`video_info`): [`LiveChat`](LiveChat.md)

#### Parameters

• **video\_info**: [`VideoInfo`](VideoInfo.md)

#### Returns

[`LiveChat`](LiveChat.md)

#### Overrides

[`EventEmitter`](../../../classes/EventEmitter.md).[`constructor`](../../../classes/EventEmitter.md#constructors)

#### Defined in

[src/parser/youtube/LiveChat.ts:71](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/LiveChat.ts#L71)

## Properties

### initial\_info?

> `optional` **initial\_info**: [`LiveChatContinuation`](../../../classes/LiveChatContinuation.md)

#### Defined in

[src/parser/youtube/LiveChat.ts:65](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/LiveChat.ts#L65)

***

### is\_replay

> **is\_replay**: `boolean` = `false`

#### Defined in

[src/parser/youtube/LiveChat.ts:69](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/LiveChat.ts#L69)

***

### metadata?

> `optional` **metadata**: `LiveMetadata`

#### Defined in

[src/parser/youtube/LiveChat.ts:66](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/LiveChat.ts#L66)

***

### running

> **running**: `boolean` = `false`

#### Defined in

[src/parser/youtube/LiveChat.ts:68](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/LiveChat.ts#L68)

***

### smoothed\_queue

> **smoothed\_queue**: [`SmoothedQueue`](SmoothedQueue.md)

#### Defined in

[src/parser/youtube/LiveChat.ts:56](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/LiveChat.ts#L56)

## Methods

### addEventListener()

> **addEventListener**(`type`, `callback`, `options`?): `void`

Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

#### Parameters

• **type**: `string`

• **callback**: `null` \| `EventListenerOrEventListenerObject`

• **options?**: `boolean` \| `AddEventListenerOptions`

#### Returns

`void`

#### Inherited from

[`EventEmitter`](../../../classes/EventEmitter.md).[`addEventListener`](../../../classes/EventEmitter.md#addeventlistener)

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:8256

***

### applyFilter()

> **applyFilter**(`filter`): `void`

Applies given filter to the live chat.

#### Parameters

• **filter**: `"TOP_CHAT"` \| `"LIVE_CHAT"`

Filter to apply.

#### Returns

`void`

#### Defined in

[src/parser/youtube/LiveChat.ts:285](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/LiveChat.ts#L285)

***

### dispatchEvent()

> **dispatchEvent**(`event`): `boolean`

Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/dispatchEvent)

#### Parameters

• **event**: `Event`

#### Returns

`boolean`

#### Inherited from

[`EventEmitter`](../../../classes/EventEmitter.md).[`dispatchEvent`](../../../classes/EventEmitter.md#dispatchevent)

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:8262

***

### emit()

> **emit**(`type`, ...`args`): `void`

#### Parameters

• **type**: `string`

• ...**args**: `any`[]

#### Returns

`void`

#### Inherited from

[`EventEmitter`](../../../classes/EventEmitter.md).[`emit`](../../../classes/EventEmitter.md#emit)

#### Defined in

[src/utils/EventEmitterLike.ts:10](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/utils/EventEmitterLike.ts#L10)

***

### getItemMenu()

> **getItemMenu**(`item`): `Promise`\<[`ItemMenu`](ItemMenu.md)\>

Retrieves given chat item's menu.

#### Parameters

• **item**: `ChatItemWithMenu`

#### Returns

`Promise`\<[`ItemMenu`](ItemMenu.md)\>

#### Defined in

[src/parser/youtube/LiveChat.ts:303](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/LiveChat.ts#L303)

***

### off()

> **off**(`type`, `listener`): `void`

#### Parameters

• **type**: `string`

• **listener**

#### Returns

`void`

#### Inherited from

[`EventEmitter`](../../../classes/EventEmitter.md).[`off`](../../../classes/EventEmitter.md#off)

#### Defined in

[src/utils/EventEmitterLike.ts:40](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/utils/EventEmitterLike.ts#L40)

***

### on()

#### on(type, listener)

> **on**(`type`, `listener`): `void`

##### Parameters

• **type**: `"start"`

• **listener**

##### Returns

`void`

##### Overrides

[`EventEmitter`](../../../classes/EventEmitter.md).[`on`](../../../classes/EventEmitter.md#on)

##### Defined in

[src/parser/youtube/LiveChat.ts:106](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/LiveChat.ts#L106)

#### on(type, listener)

> **on**(`type`, `listener`): `void`

##### Parameters

• **type**: `"chat-update"`

• **listener**

##### Returns

`void`

##### Overrides

`EventEmitter.on`

##### Defined in

[src/parser/youtube/LiveChat.ts:107](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/LiveChat.ts#L107)

#### on(type, listener)

> **on**(`type`, `listener`): `void`

##### Parameters

• **type**: `"metadata-update"`

• **listener**

##### Returns

`void`

##### Overrides

`EventEmitter.on`

##### Defined in

[src/parser/youtube/LiveChat.ts:108](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/LiveChat.ts#L108)

#### on(type, listener)

> **on**(`type`, `listener`): `void`

##### Parameters

• **type**: `"error"`

• **listener**

##### Returns

`void`

##### Overrides

`EventEmitter.on`

##### Defined in

[src/parser/youtube/LiveChat.ts:109](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/LiveChat.ts#L109)

#### on(type, listener)

> **on**(`type`, `listener`): `void`

##### Parameters

• **type**: `"end"`

• **listener**

##### Returns

`void`

##### Overrides

`EventEmitter.on`

##### Defined in

[src/parser/youtube/LiveChat.ts:110](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/LiveChat.ts#L110)

***

### once()

#### once(type, listener)

> **once**(`type`, `listener`): `void`

##### Parameters

• **type**: `"start"`

• **listener**

##### Returns

`void`

##### Overrides

[`EventEmitter`](../../../classes/EventEmitter.md).[`once`](../../../classes/EventEmitter.md#once)

##### Defined in

[src/parser/youtube/LiveChat.ts:115](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/LiveChat.ts#L115)

#### once(type, listener)

> **once**(`type`, `listener`): `void`

##### Parameters

• **type**: `"chat-update"`

• **listener**

##### Returns

`void`

##### Overrides

`EventEmitter.once`

##### Defined in

[src/parser/youtube/LiveChat.ts:116](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/LiveChat.ts#L116)

#### once(type, listener)

> **once**(`type`, `listener`): `void`

##### Parameters

• **type**: `"metadata-update"`

• **listener**

##### Returns

`void`

##### Overrides

`EventEmitter.once`

##### Defined in

[src/parser/youtube/LiveChat.ts:117](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/LiveChat.ts#L117)

#### once(type, listener)

> **once**(`type`, `listener`): `void`

##### Parameters

• **type**: `"error"`

• **listener**

##### Returns

`void`

##### Overrides

`EventEmitter.once`

##### Defined in

[src/parser/youtube/LiveChat.ts:118](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/LiveChat.ts#L118)

#### once(type, listener)

> **once**(`type`, `listener`): `void`

##### Parameters

• **type**: `"end"`

• **listener**

##### Returns

`void`

##### Overrides

`EventEmitter.once`

##### Defined in

[src/parser/youtube/LiveChat.ts:119](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/LiveChat.ts#L119)

***

### removeEventListener()

> **removeEventListener**(`type`, `callback`, `options`?): `void`

Removes the event listener in target's event listener list with the same type, callback, and options.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

#### Parameters

• **type**: `string`

• **callback**: `null` \| `EventListenerOrEventListenerObject`

• **options?**: `boolean` \| `EventListenerOptions`

#### Returns

`void`

#### Inherited from

[`EventEmitter`](../../../classes/EventEmitter.md).[`removeEventListener`](../../../classes/EventEmitter.md#removeeventlistener)

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:8268

***

### selectButton()

> **selectButton**(`button`): `Promise`\<[`IParsedResponse`](../../APIResponseTypes/interfaces/IParsedResponse.md)\>

Equivalent to "clicking" a button.

#### Parameters

• **button**: [`Button`](../../YTNodes/classes/Button.md)

#### Returns

`Promise`\<[`IParsedResponse`](../../APIResponseTypes/interfaces/IParsedResponse.md)\>

#### Defined in

[src/parser/youtube/LiveChat.ts:318](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/LiveChat.ts#L318)

***

### sendMessage()

> **sendMessage**(`text`): `Promise`\<[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`AddChatItemAction`](../../YTNodes/classes/AddChatItemAction.md)\>\>

Sends a message.

#### Parameters

• **text**: `string`

Text to send.

#### Returns

`Promise`\<[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`AddChatItemAction`](../../YTNodes/classes/AddChatItemAction.md)\>\>

#### Defined in

[src/parser/youtube/LiveChat.ts:253](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/LiveChat.ts#L253)

***

### start()

> **start**(): `void`

#### Returns

`void`

#### Defined in

[src/parser/youtube/LiveChat.ts:124](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/LiveChat.ts#L124)

***

### stop()

> **stop**(): `void`

#### Returns

`void`

#### Defined in

[src/parser/youtube/LiveChat.ts:132](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/youtube/LiveChat.ts#L132)
