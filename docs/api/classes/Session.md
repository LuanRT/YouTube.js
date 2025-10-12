[youtubei.js](../README.md) / Session

# Class: Session

Defined in: [src/core/Session.ts:251](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/Session.ts#L251)

Represents an InnerTube session. This holds all the data needed to make requests to YouTube.

## Extends

- [`EventEmitter`](EventEmitter.md)

## Constructors

### Constructor

> **new Session**(`context`, `api_key`, `api_version`, `account_index`, `config_data?`, `player?`, `cookie?`, `fetch?`, `cache?`, `po_token?`): `Session`

Defined in: [src/core/Session.ts:258](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/Session.ts#L258)

#### Parameters

##### context

[`Context`](../type-aliases/Context.md)

##### api\_key

`string`

##### api\_version

`string`

##### account\_index

`number`

##### config\_data?

`string`

##### player?

[`Player`](Player.md)

##### cookie?

`string`

##### fetch?

\{(`input`, `init?`): `Promise`\<`Response`\>; (`input`, `init?`): `Promise`\<`Response`\>; \}

##### cache?

[`ICache`](../youtubei.js/namespaces/Types/interfaces/ICache.md)

##### po\_token?

`string`

#### Returns

`Session`

#### Overrides

[`EventEmitter`](EventEmitter.md).[`constructor`](EventEmitter.md#constructor)

## Properties

### account\_index

> **account\_index**: `number`

Defined in: [src/core/Session.ts:262](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/Session.ts#L262)

***

### actions

> **actions**: [`Actions`](Actions.md)

Defined in: [src/core/Session.ts:255](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/Session.ts#L255)

***

### api\_key

> **api\_key**: `string`

Defined in: [src/core/Session.ts:260](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/Session.ts#L260)

***

### api\_version

> **api\_version**: `string`

Defined in: [src/core/Session.ts:261](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/Session.ts#L261)

***

### cache?

> `optional` **cache**: [`ICache`](../youtubei.js/namespaces/Types/interfaces/ICache.md)

Defined in: [src/core/Session.ts:267](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/Session.ts#L267)

***

### config\_data?

> `optional` **config\_data**: `string`

Defined in: [src/core/Session.ts:263](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/Session.ts#L263)

***

### context

> **context**: [`Context`](../type-aliases/Context.md)

Defined in: [src/core/Session.ts:259](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/Session.ts#L259)

***

### cookie?

> `optional` **cookie**: `string`

Defined in: [src/core/Session.ts:265](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/Session.ts#L265)

***

### http

> **http**: [`HTTPClient`](HTTPClient.md)

Defined in: [src/core/Session.ts:253](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/Session.ts#L253)

***

### logged\_in

> **logged\_in**: `boolean`

Defined in: [src/core/Session.ts:254](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/Session.ts#L254)

***

### oauth

> **oauth**: [`OAuth2`](OAuth2.md)

Defined in: [src/core/Session.ts:252](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/Session.ts#L252)

***

### player?

> `optional` **player**: [`Player`](Player.md)

Defined in: [src/core/Session.ts:264](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/Session.ts#L264)

***

### po\_token?

> `optional` **po\_token**: `string`

Defined in: [src/core/Session.ts:268](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/Session.ts#L268)

***

### user\_agent?

> `optional` **user\_agent**: `string`

Defined in: [src/core/Session.ts:256](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/Session.ts#L256)

## Accessors

### client\_name

#### Get Signature

> **get** **client\_name**(): `string`

Defined in: [src/core/Session.ts:688](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/Session.ts#L688)

##### Returns

`string`

***

### client\_version

#### Get Signature

> **get** **client\_version**(): `string`

Defined in: [src/core/Session.ts:684](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/Session.ts#L684)

##### Returns

`string`

***

### lang

#### Get Signature

> **get** **lang**(): `string`

Defined in: [src/core/Session.ts:692](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/Session.ts#L692)

##### Returns

`string`

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

[`EventEmitter`](EventEmitter.md).[`addEventListener`](EventEmitter.md#addeventlistener)

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

[`EventEmitter`](EventEmitter.md).[`dispatchEvent`](EventEmitter.md#dispatchevent)

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

#### Inherited from

[`EventEmitter`](EventEmitter.md).[`emit`](EventEmitter.md#emit)

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

#### Inherited from

[`EventEmitter`](EventEmitter.md).[`off`](EventEmitter.md#off)

***

### on()

#### Call Signature

> **on**(`type`, `listener`): `void`

Defined in: [src/core/Session.ts:278](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/Session.ts#L278)

##### Parameters

###### type

`"auth"`

###### listener

[`OAuth2AuthEventHandler`](../type-aliases/OAuth2AuthEventHandler.md)

##### Returns

`void`

##### Overrides

[`EventEmitter`](EventEmitter.md).[`on`](EventEmitter.md#on)

#### Call Signature

> **on**(`type`, `listener`): `void`

Defined in: [src/core/Session.ts:279](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/Session.ts#L279)

##### Parameters

###### type

`"auth-pending"`

###### listener

[`OAuth2AuthPendingEventHandler`](../type-aliases/OAuth2AuthPendingEventHandler.md)

##### Returns

`void`

##### Overrides

`EventEmitter.on`

#### Call Signature

> **on**(`type`, `listener`): `void`

Defined in: [src/core/Session.ts:280](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/Session.ts#L280)

##### Parameters

###### type

`"auth-error"`

###### listener

[`OAuth2AuthErrorEventHandler`](../type-aliases/OAuth2AuthErrorEventHandler.md)

##### Returns

`void`

##### Overrides

`EventEmitter.on`

#### Call Signature

> **on**(`type`, `listener`): `void`

Defined in: [src/core/Session.ts:281](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/Session.ts#L281)

##### Parameters

###### type

`"update-credentials"`

###### listener

[`OAuth2AuthEventHandler`](../type-aliases/OAuth2AuthEventHandler.md)

##### Returns

`void`

##### Overrides

`EventEmitter.on`

***

### once()

#### Call Signature

> **once**(`type`, `listener`): `void`

Defined in: [src/core/Session.ts:287](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/Session.ts#L287)

##### Parameters

###### type

`"auth"`

###### listener

[`OAuth2AuthEventHandler`](../type-aliases/OAuth2AuthEventHandler.md)

##### Returns

`void`

##### Overrides

[`EventEmitter`](EventEmitter.md).[`once`](EventEmitter.md#once)

#### Call Signature

> **once**(`type`, `listener`): `void`

Defined in: [src/core/Session.ts:288](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/Session.ts#L288)

##### Parameters

###### type

`"auth-pending"`

###### listener

[`OAuth2AuthPendingEventHandler`](../type-aliases/OAuth2AuthPendingEventHandler.md)

##### Returns

`void`

##### Overrides

`EventEmitter.once`

#### Call Signature

> **once**(`type`, `listener`): `void`

Defined in: [src/core/Session.ts:289](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/Session.ts#L289)

##### Parameters

###### type

`"auth-error"`

###### listener

[`OAuth2AuthErrorEventHandler`](../type-aliases/OAuth2AuthErrorEventHandler.md)

##### Returns

`void`

##### Overrides

`EventEmitter.once`

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

[`EventEmitter`](EventEmitter.md).[`removeEventListener`](EventEmitter.md#removeeventlistener)

***

### signIn()

> **signIn**(`credentials?`): `Promise`\<`void`\>

Defined in: [src/core/Session.ts:651](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/Session.ts#L651)

#### Parameters

##### credentials?

[`OAuth2Tokens`](../type-aliases/OAuth2Tokens.md)

#### Returns

`Promise`\<`void`\>

***

### signOut()

> **signOut**(): `Promise`\<`Response` \| `undefined`\>

Defined in: [src/core/Session.ts:674](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/Session.ts#L674)

Signs out of the current account and revokes the credentials.

#### Returns

`Promise`\<`Response` \| `undefined`\>

***

### create()

> `static` **create**(`options`): `Promise`\<`Session`\>

Defined in: [src/core/Session.ts:295](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/Session.ts#L295)

#### Parameters

##### options

[`SessionOptions`](../type-aliases/SessionOptions.md) = `{}`

#### Returns

`Promise`\<`Session`\>

***

### fromCache()

> `static` **fromCache**(`cache`, `session_args`): `Promise`\<[`SessionData`](../type-aliases/SessionData.md) \| `null`\>

Defined in: [src/core/Session.ts:327](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/Session.ts#L327)

Retrieves session data from cache.

#### Parameters

##### cache

[`ICache`](../youtubei.js/namespaces/Types/interfaces/ICache.md)

A valid cache implementation.

##### session\_args

[`SessionArgs`](../type-aliases/SessionArgs.md)

User provided session arguments.

#### Returns

`Promise`\<[`SessionData`](../type-aliases/SessionData.md) \| `null`\>

***

### getSessionData()

> `static` **getSessionData**(`lang`, `location`, `account_index`, `visitor_data`, `user_agent`, `enable_safety_mode`, `generate_session_locally`, `device_category`, `client_name`, `tz`, `fetch`, `on_behalf_of_user?`, `cache?`, `enable_session_cache?`, `po_token?`, `retrieve_innertube_config?`): `Promise`\<\{ `account_index`: `number`; `api_key`: `string`; `api_version`: `string`; `config_data?`: `string`; `context`: [`Context`](../type-aliases/Context.md); \}\>

Defined in: [src/core/Session.ts:376](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/Session.ts#L376)

#### Parameters

##### lang

`string` = `''`

##### location

`string` = `''`

##### account\_index

`number` = `0`

##### visitor\_data

`string` = `''`

##### user\_agent

`string` = `...`

##### enable\_safety\_mode

`boolean` = `false`

##### generate\_session\_locally

`boolean` = `false`

##### device\_category

[`DeviceCategory`](../youtubei.js/namespaces/Utils/type-aliases/DeviceCategory.md) = `'desktop'`

##### client\_name

[`ClientType`](../enumerations/ClientType.md) = `ClientType.WEB`

##### tz

`string` = `...`

##### fetch

\{(`input`, `init?`): `Promise`\<`Response`\>; (`input`, `init?`): `Promise`\<`Response`\>; \}

##### on\_behalf\_of\_user?

`string`

##### cache?

[`ICache`](../youtubei.js/namespaces/Types/interfaces/ICache.md)

##### enable\_session\_cache?

`boolean` = `true`

##### po\_token?

`string`

##### retrieve\_innertube\_config?

`boolean` = `true`

#### Returns

`Promise`\<\{ `account_index`: `number`; `api_key`: `string`; `api_version`: `string`; `config_data?`: `string`; `context`: [`Context`](../type-aliases/Context.md); \}\>
