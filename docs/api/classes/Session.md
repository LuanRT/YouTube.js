[youtubei.js](../README.md) / Session

# Class: Session

Represents an InnerTube session. This holds all the data needed to make requests to YouTube.

## Extends

- [`EventEmitter`](EventEmitter.md)

## Constructors

### new Session()

> **new Session**(`context`, `api_key`, `api_version`, `account_index`, `player`?, `cookie`?, `fetch`?, `cache`?, `po_token`?): [`Session`](Session.md)

#### Parameters

• **context**: [`Context`](../type-aliases/Context.md)

• **api\_key**: `string`

• **api\_version**: `string`

• **account\_index**: `number`

• **player?**: [`Player`](Player.md)

• **cookie?**: `string`

• **fetch?**

• **cache?**: [`ICache`](../namespaces/Types/interfaces/ICache.md)

• **po\_token?**: `string`

#### Returns

[`Session`](Session.md)

#### Overrides

[`EventEmitter`](EventEmitter.md).[`constructor`](EventEmitter.md#constructors)

#### Defined in

[src/core/Session.ts:226](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/Session.ts#L226)

## Properties

### account\_index

> **account\_index**: `number`

#### Defined in

[src/core/Session.ts:223](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/Session.ts#L223)

***

### actions

> **actions**: [`Actions`](Actions.md)

#### Defined in

[src/core/Session.ts:219](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/Session.ts#L219)

***

### api\_version

> **api\_version**: `string`

#### Defined in

[src/core/Session.ts:222](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/Session.ts#L222)

***

### cache?

> `optional` **cache**: [`ICache`](../namespaces/Types/interfaces/ICache.md)

#### Defined in

[src/core/Session.ts:220](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/Session.ts#L220)

***

### context

> **context**: [`Context`](../type-aliases/Context.md)

#### Defined in

[src/core/Session.ts:214](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/Session.ts#L214)

***

### http

> **http**: [`HTTPClient`](HTTPClient.md)

#### Defined in

[src/core/Session.ts:217](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/Session.ts#L217)

***

### key

> **key**: `string`

#### Defined in

[src/core/Session.ts:221](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/Session.ts#L221)

***

### logged\_in

> **logged\_in**: `boolean`

#### Defined in

[src/core/Session.ts:218](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/Session.ts#L218)

***

### oauth

> **oauth**: [`OAuth2`](OAuth2.md)

#### Defined in

[src/core/Session.ts:216](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/Session.ts#L216)

***

### player?

> `optional` **player**: [`Player`](Player.md)

#### Defined in

[src/core/Session.ts:215](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/Session.ts#L215)

***

### po\_token?

> `optional` **po\_token**: `string`

#### Defined in

[src/core/Session.ts:224](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/Session.ts#L224)

## Accessors

### client\_name

> `get` **client\_name**(): `string`

#### Returns

`string`

#### Defined in

[src/core/Session.ts:569](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/Session.ts#L569)

***

### client\_version

> `get` **client\_version**(): `string`

#### Returns

`string`

#### Defined in

[src/core/Session.ts:565](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/Session.ts#L565)

***

### lang

> `get` **lang**(): `string`

#### Returns

`string`

#### Defined in

[src/core/Session.ts:573](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/Session.ts#L573)

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

[`EventEmitter`](EventEmitter.md).[`addEventListener`](EventEmitter.md#addeventlistener)

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

[`EventEmitter`](EventEmitter.md).[`dispatchEvent`](EventEmitter.md#dispatchevent)

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

[`EventEmitter`](EventEmitter.md).[`emit`](EventEmitter.md#emit)

#### Defined in

[src/utils/EventEmitterLike.ts:10](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/utils/EventEmitterLike.ts#L10)

***

### off()

> **off**(`type`, `listener`): `void`

#### Parameters

• **type**: `string`

• **listener**

#### Returns

`void`

#### Inherited from

[`EventEmitter`](EventEmitter.md).[`off`](EventEmitter.md#off)

#### Defined in

[src/utils/EventEmitterLike.ts:40](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/utils/EventEmitterLike.ts#L40)

***

### on()

#### on(type, listener)

> **on**(`type`, `listener`): `void`

##### Parameters

• **type**: `"auth"`

• **listener**: [`OAuth2AuthEventHandler`](../type-aliases/OAuth2AuthEventHandler.md)

##### Returns

`void`

##### Overrides

[`EventEmitter`](EventEmitter.md).[`on`](EventEmitter.md#on)

##### Defined in

[src/core/Session.ts:241](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/Session.ts#L241)

#### on(type, listener)

> **on**(`type`, `listener`): `void`

##### Parameters

• **type**: `"auth-pending"`

• **listener**: [`OAuth2AuthPendingEventHandler`](../type-aliases/OAuth2AuthPendingEventHandler.md)

##### Returns

`void`

##### Overrides

`EventEmitter.on`

##### Defined in

[src/core/Session.ts:242](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/Session.ts#L242)

#### on(type, listener)

> **on**(`type`, `listener`): `void`

##### Parameters

• **type**: `"auth-error"`

• **listener**: [`OAuth2AuthErrorEventHandler`](../type-aliases/OAuth2AuthErrorEventHandler.md)

##### Returns

`void`

##### Overrides

`EventEmitter.on`

##### Defined in

[src/core/Session.ts:243](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/Session.ts#L243)

#### on(type, listener)

> **on**(`type`, `listener`): `void`

##### Parameters

• **type**: `"update-credentials"`

• **listener**: [`OAuth2AuthEventHandler`](../type-aliases/OAuth2AuthEventHandler.md)

##### Returns

`void`

##### Overrides

`EventEmitter.on`

##### Defined in

[src/core/Session.ts:244](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/Session.ts#L244)

***

### once()

#### once(type, listener)

> **once**(`type`, `listener`): `void`

##### Parameters

• **type**: `"auth"`

• **listener**: [`OAuth2AuthEventHandler`](../type-aliases/OAuth2AuthEventHandler.md)

##### Returns

`void`

##### Overrides

[`EventEmitter`](EventEmitter.md).[`once`](EventEmitter.md#once)

##### Defined in

[src/core/Session.ts:250](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/Session.ts#L250)

#### once(type, listener)

> **once**(`type`, `listener`): `void`

##### Parameters

• **type**: `"auth-pending"`

• **listener**: [`OAuth2AuthPendingEventHandler`](../type-aliases/OAuth2AuthPendingEventHandler.md)

##### Returns

`void`

##### Overrides

`EventEmitter.once`

##### Defined in

[src/core/Session.ts:251](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/Session.ts#L251)

#### once(type, listener)

> **once**(`type`, `listener`): `void`

##### Parameters

• **type**: `"auth-error"`

• **listener**: [`OAuth2AuthErrorEventHandler`](../type-aliases/OAuth2AuthErrorEventHandler.md)

##### Returns

`void`

##### Overrides

`EventEmitter.once`

##### Defined in

[src/core/Session.ts:252](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/Session.ts#L252)

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

[`EventEmitter`](EventEmitter.md).[`removeEventListener`](EventEmitter.md#removeeventlistener)

#### Defined in

node\_modules/typescript/lib/lib.dom.d.ts:8268

***

### signIn()

> **signIn**(`credentials`?): `Promise`\<`void`\>

#### Parameters

• **credentials?**: [`OAuth2Tokens`](../type-aliases/OAuth2Tokens.md)

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/core/Session.ts:532](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/Session.ts#L532)

***

### signOut()

> **signOut**(): `Promise`\<`undefined` \| `Response`\>

Signs out of the current account and revokes the credentials.

#### Returns

`Promise`\<`undefined` \| `Response`\>

#### Defined in

[src/core/Session.ts:555](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/Session.ts#L555)

***

### create()

> `static` **create**(`options`): `Promise`\<[`Session`](Session.md)\>

#### Parameters

• **options**: [`SessionOptions`](../type-aliases/SessionOptions.md) = `{}`

#### Returns

`Promise`\<[`Session`](Session.md)\>

#### Defined in

[src/core/Session.ts:258](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/Session.ts#L258)

***

### fromCache()

> `static` **fromCache**(`cache`, `session_args`): `Promise`\<`null` \| [`SessionData`](../type-aliases/SessionData.md)\>

Retrieves session data from cache.

#### Parameters

• **cache**: [`ICache`](../namespaces/Types/interfaces/ICache.md)

A valid cache implementation.

• **session\_args**: [`SessionArgs`](../type-aliases/SessionArgs.md)

User provided session arguments.

#### Returns

`Promise`\<`null` \| [`SessionData`](../type-aliases/SessionData.md)\>

#### Defined in

[src/core/Session.ts:288](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/Session.ts#L288)

***

### getSessionData()

> `static` **getSessionData**(`lang`, `location`, `account_index`, `visitor_data`, `enable_safety_mode`, `generate_session_locally`, `device_category`, `client_name`, `tz`, `fetch`, `on_behalf_of_user`?, `cache`?, `enable_session_cache`?, `po_token`?): `Promise`\<`object`\>

#### Parameters

• **lang**: `string` = `''`

• **location**: `string` = `''`

• **account\_index**: `number` = `0`

• **visitor\_data**: `string` = `''`

• **enable\_safety\_mode**: `boolean` = `false`

• **generate\_session\_locally**: `boolean` = `false`

• **device\_category**: [`DeviceCategory`](../namespaces/Utils/type-aliases/DeviceCategory.md) = `'desktop'`

• **client\_name**: [`ClientType`](../enumerations/ClientType.md) = `ClientType.WEB`

• **tz**: `string` = `...`

• **fetch** = `Platform.shim.fetch`

• **on\_behalf\_of\_user?**: `string`

• **cache?**: [`ICache`](../namespaces/Types/interfaces/ICache.md)

• **enable\_session\_cache?**: `boolean` = `true`

• **po\_token?**: `string`

#### Returns

`Promise`\<`object`\>

##### account\_index

> **account\_index**: `number`

##### api\_key

> **api\_key**: `string`

##### api\_version

> **api\_version**: `string`

##### context

> **context**: [`Context`](../type-aliases/Context.md)

#### Defined in

[src/core/Session.ts:324](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/Session.ts#L324)
