[youtubei.js](../../../../README.md) / [YT](../README.md) / LiveChat

# Class: LiveChat

Defined in: [src/parser/youtube/LiveChat.ts:66](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/youtube/LiveChat.ts#L66)

## Extends

- [`EventEmitter`](../../../../classes/EventEmitter.md)\<`LiveChatEvents`\>

## Constructors

### Constructor

> **new LiveChat**(`video_info`): `LiveChat`

Defined in: [src/parser/youtube/LiveChat.ts:81](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/youtube/LiveChat.ts#L81)

#### Parameters

##### video\_info

[`VideoInfo`](VideoInfo.md)

#### Returns

`LiveChat`

#### Overrides

[`EventEmitter`](../../../../classes/EventEmitter.md).[`constructor`](../../../../classes/EventEmitter.md#constructor)

## Properties

### initial\_info?

> `optional` **initial\_info?**: [`LiveChatContinuation`](../../../../classes/LiveChatContinuation.md)

Defined in: [src/parser/youtube/LiveChat.ts:76](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/youtube/LiveChat.ts#L76)

***

### is\_replay

> **is\_replay**: `boolean` = `false`

Defined in: [src/parser/youtube/LiveChat.ts:79](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/youtube/LiveChat.ts#L79)

***

### metadata?

> `optional` **metadata?**: `LiveMetadata`

Defined in: [src/parser/youtube/LiveChat.ts:77](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/youtube/LiveChat.ts#L77)

***

### running

> **running**: `boolean` = `false`

Defined in: [src/parser/youtube/LiveChat.ts:78](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/youtube/LiveChat.ts#L78)

***

### smoothed\_queue

> **smoothed\_queue**: [`SmoothedQueue`](SmoothedQueue.md)

Defined in: [src/parser/youtube/LiveChat.ts:75](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/youtube/LiveChat.ts#L75)

## Methods

### applyFilter()

> **applyFilter**(`filter`): `void`

Defined in: [src/parser/youtube/LiveChat.ts:277](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/youtube/LiveChat.ts#L277)

Applies given filter to the live chat.

#### Parameters

##### filter

`"TOP_CHAT"` \| `"LIVE_CHAT"`

Filter to apply.

#### Returns

`void`

***

### emit()

> **emit**\<`K`\>(`type`, ...`args`): `void`

Defined in: [src/utils/EventEmitterLike.ts:7](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/utils/EventEmitterLike.ts#L7)

#### Type Parameters

##### K

`K` *extends* keyof `LiveChatEvents`

#### Parameters

##### type

`K`

##### args

...`Parameters`\<`LiveChatEvents`\[`K`\]\>

#### Returns

`void`

#### Inherited from

[`EventEmitter`](../../../../classes/EventEmitter.md).[`emit`](../../../../classes/EventEmitter.md#emit)

***

### getItemMenu()

> **getItemMenu**(`item`): `Promise`\<[`ItemMenu`](ItemMenu.md)\>

Defined in: [src/parser/youtube/LiveChat.ts:295](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/youtube/LiveChat.ts#L295)

Retrieves given chat item's menu.

#### Parameters

##### item

`ChatItemWithMenu`

#### Returns

`Promise`\<[`ItemMenu`](ItemMenu.md)\>

***

### off()

> **off**\<`K`\>(`type`, `listener`): `void`

Defined in: [src/utils/EventEmitterLike.ts:45](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/utils/EventEmitterLike.ts#L45)

#### Type Parameters

##### K

`K` *extends* keyof `LiveChatEvents`

#### Parameters

##### type

`K`

##### listener

`LiveChatEvents`\[`K`\]

#### Returns

`void`

#### Inherited from

[`EventEmitter`](../../../../classes/EventEmitter.md).[`off`](../../../../classes/EventEmitter.md#off)

***

### on()

> **on**\<`K`\>(`type`, `listener`): `void`

Defined in: [src/utils/EventEmitterLike.ts:17](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/utils/EventEmitterLike.ts#L17)

#### Type Parameters

##### K

`K` *extends* keyof `LiveChatEvents`

#### Parameters

##### type

`K`

##### listener

`LiveChatEvents`\[`K`\]

#### Returns

`void`

#### Inherited from

[`EventEmitter`](../../../../classes/EventEmitter.md).[`on`](../../../../classes/EventEmitter.md#on)

***

### once()

> **once**\<`K`\>(`type`, `listener`): `void`

Defined in: [src/utils/EventEmitterLike.ts:28](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/utils/EventEmitterLike.ts#L28)

#### Type Parameters

##### K

`K` *extends* keyof `LiveChatEvents`

#### Parameters

##### type

`K`

##### listener

`LiveChatEvents`\[`K`\]

#### Returns

`void`

#### Inherited from

[`EventEmitter`](../../../../classes/EventEmitter.md).[`once`](../../../../classes/EventEmitter.md#once)

***

### removeAllListeners()

> **removeAllListeners**(`type?`): `void`

Defined in: [src/utils/EventEmitterLike.ts:70](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/utils/EventEmitterLike.ts#L70)

#### Parameters

##### type?

keyof LiveChatEvents

#### Returns

`void`

#### Inherited from

[`EventEmitter`](../../../../classes/EventEmitter.md).[`removeAllListeners`](../../../../classes/EventEmitter.md#removealllisteners)

***

### selectButton()

> **selectButton**(`button`): `Promise`\<[`IParsedResponse`](../../../../interfaces/IParsedResponse.md)\>

Defined in: [src/parser/youtube/LiveChat.ts:310](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/youtube/LiveChat.ts#L310)

Equivalent to "clicking" a button.

#### Parameters

##### button

[`Button`](../../YTNodes/classes/Button.md)

#### Returns

`Promise`\<[`IParsedResponse`](../../../../interfaces/IParsedResponse.md)\>

***

### sendMessage()

> **sendMessage**(`text`): `Promise`\<[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`RunAttestationCommand`](../../YTNodes/classes/RunAttestationCommand.md) \| [`AddChatItemAction`](../../YTNodes/classes/AddChatItemAction.md)\>\>

Defined in: [src/parser/youtube/LiveChat.ts:245](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/youtube/LiveChat.ts#L245)

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

Defined in: [src/parser/youtube/LiveChat.ts:116](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/youtube/LiveChat.ts#L116)

#### Returns

`void`

***

### stop()

> **stop**(): `void`

Defined in: [src/parser/youtube/LiveChat.ts:124](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/youtube/LiveChat.ts#L124)

#### Returns

`void`
