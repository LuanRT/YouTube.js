[youtubei.js](../../../../README.md) / [YT](../README.md) / LiveChat

# Class: LiveChat

Defined in: [src/parser/youtube/LiveChat.ts:58](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/youtube/LiveChat.ts#L58)

## Extends

- [`EventEmitter`](../../../../classes/EventEmitter.md)

## Constructors

### Constructor

> **new LiveChat**(`video_info`): `LiveChat`

Defined in: [src/parser/youtube/LiveChat.ts:73](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/youtube/LiveChat.ts#L73)

#### Parameters

##### video\_info

[`VideoInfo`](VideoInfo.md)

#### Returns

`LiveChat`

#### Overrides

[`EventEmitter`](../../../../classes/EventEmitter.md).[`constructor`](../../../../classes/EventEmitter.md#constructor)

## Properties

### initial\_info?

> `optional` **initial\_info**: [`LiveChatContinuation`](../../../../classes/LiveChatContinuation.md)

Defined in: [src/parser/youtube/LiveChat.ts:68](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/youtube/LiveChat.ts#L68)

***

### is\_replay

> **is\_replay**: `boolean` = `false`

Defined in: [src/parser/youtube/LiveChat.ts:71](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/youtube/LiveChat.ts#L71)

***

### metadata?

> `optional` **metadata**: `LiveMetadata`

Defined in: [src/parser/youtube/LiveChat.ts:69](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/youtube/LiveChat.ts#L69)

***

### running

> **running**: `boolean` = `false`

Defined in: [src/parser/youtube/LiveChat.ts:70](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/youtube/LiveChat.ts#L70)

***

### smoothed\_queue

> **smoothed\_queue**: [`SmoothedQueue`](SmoothedQueue.md)

Defined in: [src/parser/youtube/LiveChat.ts:67](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/youtube/LiveChat.ts#L67)

## Methods

### addEventListener()

> **addEventListener**(`type`, `callback`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11569

The **`addEventListener()`** method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

#### Parameters

##### type

`string`

##### callback

`EventListenerOrEventListenerObject` | `null`

##### options?

`boolean` | `AddEventListenerOptions`

#### Returns

`void`

#### Inherited from

[`EventEmitter`](../../../../classes/EventEmitter.md).[`addEventListener`](../../../../classes/EventEmitter.md#addeventlistener)

***

### applyFilter()

> **applyFilter**(`filter`): `void`

Defined in: [src/parser/youtube/LiveChat.ts:287](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/youtube/LiveChat.ts#L287)

Applies given filter to the live chat.

#### Parameters

##### filter

Filter to apply.

`"TOP_CHAT"` | `"LIVE_CHAT"`

#### Returns

`void`

***

### dispatchEvent()

> **dispatchEvent**(`event`): `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11575

The **`dispatchEvent()`** method of the EventTarget sends an Event to the object, (synchronously) invoking the affected event listeners in the appropriate order.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/dispatchEvent)

#### Parameters

##### event

`Event`

#### Returns

`boolean`

#### Inherited from

[`EventEmitter`](../../../../classes/EventEmitter.md).[`dispatchEvent`](../../../../classes/EventEmitter.md#dispatchevent)

***

### emit()

> **emit**(`type`, ...`args`): `void`

Defined in: [src/utils/EventEmitterLike.ts:10](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/utils/EventEmitterLike.ts#L10)

#### Parameters

##### type

`string`

##### args

...`any`[]

#### Returns

`void`

#### Inherited from

[`EventEmitter`](../../../../classes/EventEmitter.md).[`emit`](../../../../classes/EventEmitter.md#emit)

***

### getItemMenu()

> **getItemMenu**(`item`): `Promise`\<[`ItemMenu`](ItemMenu.md)\>

Defined in: [src/parser/youtube/LiveChat.ts:305](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/youtube/LiveChat.ts#L305)

Retrieves given chat item's menu.

#### Parameters

##### item

`ChatItemWithMenu`

#### Returns

`Promise`\<[`ItemMenu`](ItemMenu.md)\>

***

### off()

> **off**(`type`, `listener`): `void`

Defined in: [src/utils/EventEmitterLike.ts:40](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/utils/EventEmitterLike.ts#L40)

#### Parameters

##### type

`string`

##### listener

(...`args`) => `void`

#### Returns

`void`

#### Inherited from

[`EventEmitter`](../../../../classes/EventEmitter.md).[`off`](../../../../classes/EventEmitter.md#off)

***

### on()

#### Call Signature

> **on**(`type`, `listener`): `void`

Defined in: [src/parser/youtube/LiveChat.ts:108](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/youtube/LiveChat.ts#L108)

##### Parameters

###### type

`"start"`

###### listener

(`initial_data`) => `void`

##### Returns

`void`

##### Overrides

[`EventEmitter`](../../../../classes/EventEmitter.md).[`on`](../../../../classes/EventEmitter.md#on)

#### Call Signature

> **on**(`type`, `listener`): `void`

Defined in: [src/parser/youtube/LiveChat.ts:109](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/youtube/LiveChat.ts#L109)

##### Parameters

###### type

`"chat-update"`

###### listener

(`action`) => `void`

##### Returns

`void`

##### Overrides

`EventEmitter.on`

#### Call Signature

> **on**(`type`, `listener`): `void`

Defined in: [src/parser/youtube/LiveChat.ts:110](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/youtube/LiveChat.ts#L110)

##### Parameters

###### type

`"metadata-update"`

###### listener

(`metadata`) => `void`

##### Returns

`void`

##### Overrides

`EventEmitter.on`

#### Call Signature

> **on**(`type`, `listener`): `void`

Defined in: [src/parser/youtube/LiveChat.ts:111](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/youtube/LiveChat.ts#L111)

##### Parameters

###### type

`"error"`

###### listener

(`err`) => `void`

##### Returns

`void`

##### Overrides

`EventEmitter.on`

#### Call Signature

> **on**(`type`, `listener`): `void`

Defined in: [src/parser/youtube/LiveChat.ts:112](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/youtube/LiveChat.ts#L112)

##### Parameters

###### type

`"end"`

###### listener

() => `void`

##### Returns

`void`

##### Overrides

`EventEmitter.on`

***

### once()

#### Call Signature

> **once**(`type`, `listener`): `void`

Defined in: [src/parser/youtube/LiveChat.ts:117](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/youtube/LiveChat.ts#L117)

##### Parameters

###### type

`"start"`

###### listener

(`initial_data`) => `void`

##### Returns

`void`

##### Overrides

[`EventEmitter`](../../../../classes/EventEmitter.md).[`once`](../../../../classes/EventEmitter.md#once)

#### Call Signature

> **once**(`type`, `listener`): `void`

Defined in: [src/parser/youtube/LiveChat.ts:118](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/youtube/LiveChat.ts#L118)

##### Parameters

###### type

`"chat-update"`

###### listener

(`action`) => `void`

##### Returns

`void`

##### Overrides

`EventEmitter.once`

#### Call Signature

> **once**(`type`, `listener`): `void`

Defined in: [src/parser/youtube/LiveChat.ts:119](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/youtube/LiveChat.ts#L119)

##### Parameters

###### type

`"metadata-update"`

###### listener

(`metadata`) => `void`

##### Returns

`void`

##### Overrides

`EventEmitter.once`

#### Call Signature

> **once**(`type`, `listener`): `void`

Defined in: [src/parser/youtube/LiveChat.ts:120](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/youtube/LiveChat.ts#L120)

##### Parameters

###### type

`"error"`

###### listener

(`err`) => `void`

##### Returns

`void`

##### Overrides

`EventEmitter.once`

#### Call Signature

> **once**(`type`, `listener`): `void`

Defined in: [src/parser/youtube/LiveChat.ts:121](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/youtube/LiveChat.ts#L121)

##### Parameters

###### type

`"end"`

###### listener

() => `void`

##### Returns

`void`

##### Overrides

`EventEmitter.once`

***

### removeEventListener()

> **removeEventListener**(`type`, `callback`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:11581

The **`removeEventListener()`** method of the EventTarget interface removes an event listener previously registered with EventTarget.addEventListener() from the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

#### Parameters

##### type

`string`

##### callback

`EventListenerOrEventListenerObject` | `null`

##### options?

`boolean` | `EventListenerOptions`

#### Returns

`void`

#### Inherited from

[`EventEmitter`](../../../../classes/EventEmitter.md).[`removeEventListener`](../../../../classes/EventEmitter.md#removeeventlistener)

***

### selectButton()

> **selectButton**(`button`): `Promise`\<[`IParsedResponse`](../../../../interfaces/IParsedResponse.md)\>

Defined in: [src/parser/youtube/LiveChat.ts:320](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/youtube/LiveChat.ts#L320)

Equivalent to "clicking" a button.

#### Parameters

##### button

[`Button`](../../YTNodes/classes/Button.md)

#### Returns

`Promise`\<[`IParsedResponse`](../../../../interfaces/IParsedResponse.md)\>

***

### sendMessage()

> **sendMessage**(`text`): `Promise`\<[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`RunAttestationCommand`](../../YTNodes/classes/RunAttestationCommand.md) \| [`AddChatItemAction`](../../YTNodes/classes/AddChatItemAction.md)\>\>

Defined in: [src/parser/youtube/LiveChat.ts:255](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/youtube/LiveChat.ts#L255)

Sends a message.

#### Parameters

##### text

`string`

Text to send.

#### Returns

`Promise`\<[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`RunAttestationCommand`](../../YTNodes/classes/RunAttestationCommand.md) \| [`AddChatItemAction`](../../YTNodes/classes/AddChatItemAction.md)\>\>

***

### start()

> **start**(): `void`

Defined in: [src/parser/youtube/LiveChat.ts:126](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/youtube/LiveChat.ts#L126)

#### Returns

`void`

***

### stop()

> **stop**(): `void`

Defined in: [src/parser/youtube/LiveChat.ts:134](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/youtube/LiveChat.ts#L134)

#### Returns

`void`
