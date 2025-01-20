[youtubei.js](../README.md) / EventEmitter

# Class: EventEmitter

## Extends

- `EventTarget`

## Extended by

- [`Session`](Session.md)
- [`LiveChat`](../namespaces/YT/classes/LiveChat.md)

## Constructors

### new EventEmitter()

> **new EventEmitter**(): [`EventEmitter`](EventEmitter.md)

#### Returns

[`EventEmitter`](EventEmitter.md)

#### Overrides

`EventTarget.constructor`

#### Defined in

[src/utils/EventEmitterLike.ts:6](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/utils/EventEmitterLike.ts#L6)

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

`EventTarget.addEventListener`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:8256

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

`EventTarget.dispatchEvent`

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

#### Defined in

[src/utils/EventEmitterLike.ts:10](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/utils/EventEmitterLike.ts#L10)

***

### off()

> **off**(`type`, `listener`): `void`

#### Parameters

• **type**: `string`

• **listener**

#### Returns

`void`

#### Defined in

[src/utils/EventEmitterLike.ts:40](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/utils/EventEmitterLike.ts#L40)

***

### on()

> **on**(`type`, `listener`): `void`

#### Parameters

• **type**: `string`

• **listener**

#### Returns

`void`

#### Defined in

[src/utils/EventEmitterLike.ts:15](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/utils/EventEmitterLike.ts#L15)

***

### once()

> **once**(`type`, `listener`): `void`

#### Parameters

• **type**: `string`

• **listener**

#### Returns

`void`

#### Defined in

[src/utils/EventEmitterLike.ts:27](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/utils/EventEmitterLike.ts#L27)

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

`EventTarget.removeEventListener`

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:8268
