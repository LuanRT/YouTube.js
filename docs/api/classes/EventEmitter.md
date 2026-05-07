[youtubei.js](../README.md) / EventEmitter

# Class: EventEmitter

Defined in: [src/utils/EventEmitterLike.ts:3](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/utils/EventEmitterLike.ts#L3)

## Extends

- `EventTarget`

## Extended by

- [`Session`](Session.md)
- [`LiveChat`](../youtubei.js/namespaces/YT/classes/LiveChat.md)

## Constructors

### Constructor

> **new EventEmitter**(): `EventEmitterLike`

Defined in: [src/utils/EventEmitterLike.ts:6](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/utils/EventEmitterLike.ts#L6)

#### Returns

`EventEmitterLike`

#### Overrides

`EventTarget.constructor`

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

`EventTarget.addEventListener`

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

`EventTarget.dispatchEvent`

***

### emit()

> **emit**(`type`, ...`args`): `void`

Defined in: [src/utils/EventEmitterLike.ts:10](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/utils/EventEmitterLike.ts#L10)

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

Defined in: [src/utils/EventEmitterLike.ts:40](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/utils/EventEmitterLike.ts#L40)

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

Defined in: [src/utils/EventEmitterLike.ts:15](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/utils/EventEmitterLike.ts#L15)

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

Defined in: [src/utils/EventEmitterLike.ts:27](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/utils/EventEmitterLike.ts#L27)

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

`EventTarget.removeEventListener`
