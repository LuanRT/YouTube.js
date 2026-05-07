[youtubei.js](../README.md) / Session

# Class: Session

Defined in: [src/core/Session.ts:257](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/Session.ts#L257)

Represents an InnerTube session. This holds all the data needed to make requests to YouTube.

## Extends

- [`EventEmitter`](EventEmitter.md)

## Constructors

### Constructor

> **new Session**(`context`, `api_key`, `api_version`, `account_index`, `config_data?`, `player?`, `cookie?`, `fetch?`, `cache?`, `po_token?`): `Session`

Defined in: [src/core/Session.ts:264](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/Session.ts#L264)

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

Defined in: [src/core/Session.ts:268](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/Session.ts#L268)

***

### actions

> **actions**: [`Actions`](Actions.md)

Defined in: [src/core/Session.ts:261](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/Session.ts#L261)

***

### api\_key

> **api\_key**: `string`

Defined in: [src/core/Session.ts:266](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/Session.ts#L266)

***

### api\_version

> **api\_version**: `string`

Defined in: [src/core/Session.ts:267](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/Session.ts#L267)

***

### cache?

> `optional` **cache**: [`ICache`](../youtubei.js/namespaces/Types/interfaces/ICache.md)

Defined in: [src/core/Session.ts:273](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/Session.ts#L273)

***

### config\_data?

> `optional` **config\_data**: `string`

Defined in: [src/core/Session.ts:269](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/Session.ts#L269)

***

### context

> **context**: [`Context`](../type-aliases/Context.md)

Defined in: [src/core/Session.ts:265](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/Session.ts#L265)

***

### cookie?

> `optional` **cookie**: `string`

Defined in: [src/core/Session.ts:271](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/Session.ts#L271)

***

### http

> **http**: [`HTTPClient`](HTTPClient.md)

Defined in: [src/core/Session.ts:259](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/Session.ts#L259)

***

### logged\_in

> **logged\_in**: `boolean`

Defined in: [src/core/Session.ts:260](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/Session.ts#L260)

***

### oauth

> **oauth**: [`OAuth2`](OAuth2.md)

Defined in: [src/core/Session.ts:258](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/Session.ts#L258)

***

### player?

> `optional` **player**: [`Player`](Player.md)

Defined in: [src/core/Session.ts:270](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/Session.ts#L270)

***

### po\_token?

> `optional` **po\_token**: `string`

Defined in: [src/core/Session.ts:274](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/Session.ts#L274)

***

### user\_agent?

> `optional` **user\_agent**: `string`

Defined in: [src/core/Session.ts:262](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/Session.ts#L262)

## Accessors

### client\_name

#### Get Signature

> **get** **client\_name**(): `string`

Defined in: [src/core/Session.ts:698](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/Session.ts#L698)

##### Returns

`string`

***

### client\_version

#### Get Signature

> **get** **client\_version**(): `string`

Defined in: [src/core/Session.ts:694](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/Session.ts#L694)

##### Returns

`string`

***

### lang

#### Get Signature

> **get** **lang**(): `string`

Defined in: [src/core/Session.ts:702](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/Session.ts#L702)

##### Returns

`string`

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

[`EventEmitter`](EventEmitter.md).[`addEventListener`](EventEmitter.md#addeventlistener)

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

[`EventEmitter`](EventEmitter.md).[`dispatchEvent`](EventEmitter.md#dispatchevent)

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

#### Inherited from

[`EventEmitter`](EventEmitter.md).[`emit`](EventEmitter.md#emit)

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

#### Inherited from

[`EventEmitter`](EventEmitter.md).[`off`](EventEmitter.md#off)

***

### on()

#### Call Signature

> **on**(`type`, `listener`): `void`

Defined in: [src/core/Session.ts:284](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/Session.ts#L284)

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

Defined in: [src/core/Session.ts:285](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/Session.ts#L285)

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

Defined in: [src/core/Session.ts:286](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/Session.ts#L286)

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

Defined in: [src/core/Session.ts:287](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/Session.ts#L287)

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

Defined in: [src/core/Session.ts:293](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/Session.ts#L293)

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

Defined in: [src/core/Session.ts:294](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/Session.ts#L294)

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

Defined in: [src/core/Session.ts:295](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/Session.ts#L295)

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

[`EventEmitter`](EventEmitter.md).[`removeEventListener`](EventEmitter.md#removeeventlistener)

***

### signIn()

> **signIn**(`credentials?`): `Promise`\<`void`\>

Defined in: [src/core/Session.ts:661](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/Session.ts#L661)

#### Parameters

##### credentials?

[`OAuth2Tokens`](../type-aliases/OAuth2Tokens.md)

#### Returns

`Promise`\<`void`\>

***

### signOut()

> **signOut**(): `Promise`\<`Response` \| `undefined`\>

Defined in: [src/core/Session.ts:684](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/Session.ts#L684)

Signs out of the current account and revokes the credentials.

#### Returns

`Promise`\<`Response` \| `undefined`\>

***

### create()

> `static` **create**(`options?`): `Promise`\<`Session`\>

Defined in: [src/core/Session.ts:301](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/Session.ts#L301)

#### Parameters

##### options?

[`SessionOptions`](../type-aliases/SessionOptions.md) = `{}`

#### Returns

`Promise`\<`Session`\>

***

### fromCache()

> `static` **fromCache**(`cache`, `session_args`): `Promise`\<[`SessionData`](../type-aliases/SessionData.md) \| `null`\>

Defined in: [src/core/Session.ts:334](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/Session.ts#L334)

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

> `static` **getSessionData**(`lang?`, `location?`, `account_index?`, `visitor_data?`, `user_agent?`, `enable_safety_mode?`, `generate_session_locally?`, `fail_fast?`, `device_category?`, `client_name?`, `tz?`, `fetch?`, `on_behalf_of_user?`, `cache?`, `enable_session_cache?`, `po_token?`, `retrieve_innertube_config?`): `Promise`\<\{ `account_index`: `number`; `api_key`: `string`; `api_version`: `string`; `config_data?`: `string`; `context`: [`Context`](../type-aliases/Context.md); \}\>

Defined in: [src/core/Session.ts:383](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/Session.ts#L383)

#### Parameters

##### lang?

`string` = `''`

##### location?

`string` = `''`

##### account\_index?

`number` = `0`

##### visitor\_data?

`string` = `''`

##### user\_agent?

`string` = `...`

##### enable\_safety\_mode?

`boolean` = `false`

##### generate\_session\_locally?

`boolean` = `false`

##### fail\_fast?

`boolean` = `false`

##### device\_category?

[`DeviceCategory`](../youtubei.js/namespaces/Utils/type-aliases/DeviceCategory.md) = `'desktop'`

##### client\_name?

[`ClientType`](../enumerations/ClientType.md) = `ClientType.WEB`

##### tz?

`string` = `...`

##### fetch?

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
