[youtubei.js](../README.md) / EventEmitter

# Class: EventEmitter

Defined in: [src/utils/EventEmitterLike.ts:3](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/utils/EventEmitterLike.ts#L3)

## Extends

- `EventTarget`

## Extended by

- [`Session`](Session.md)
- [`LiveChat`](../youtubei.js/namespaces/YT/classes/LiveChat.md)

## Constructors

### Constructor

> **new EventEmitter**(): `EventEmitterLike`

Defined in: [src/utils/EventEmitterLike.ts:6](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/utils/EventEmitterLike.ts#L6)

#### Returns

`EventEmitterLike`

#### Overrides

`EventTarget.constructor`

## Methods

### addEventListener()

> **addEventListener**(`type`, `callback`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8256

Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture.

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

`EventTarget.addEventListener`

***

### dispatchEvent()

> **dispatchEvent**(`event`): `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8262

Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/dispatchEvent)

#### Parameters

##### event

`Event`

#### Returns

`boolean`

#### Inherited from

`EventTarget.dispatchEvent`

***

### emit()

> **emit**(`type`, ...`args`): `void`

Defined in: [src/utils/EventEmitterLike.ts:10](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/utils/EventEmitterLike.ts#L10)

#### Parameters

##### type

`string`

##### args

...`any`[]

#### Returns

`void`

***

### off()

> **off**(`type`, `listener`): `void`

Defined in: [src/utils/EventEmitterLike.ts:40](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/utils/EventEmitterLike.ts#L40)

#### Parameters

##### type

`string`

##### listener

(...`args`) => `void`

#### Returns

`void`

***

### on()

> **on**(`type`, `listener`): `void`

Defined in: [src/utils/EventEmitterLike.ts:15](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/utils/EventEmitterLike.ts#L15)

#### Parameters

##### type

`string`

##### listener

(...`args`) => `void`

#### Returns

`void`

***

### once()

> **once**(`type`, `listener`): `void`

Defined in: [src/utils/EventEmitterLike.ts:27](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/utils/EventEmitterLike.ts#L27)

#### Parameters

##### type

`string`

##### listener

(...`args`) => `void`

#### Returns

`void`

***

### removeEventListener()

> **removeEventListener**(`type`, `callback`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8268

Removes the event listener in target's event listener list with the same type, callback, and options.

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

`EventTarget.removeEventListener`
