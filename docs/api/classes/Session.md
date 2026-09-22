[youtubei.js](../README.md) / Session

# Class: Session

Defined in: [src/core/Session.ts:265](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/Session.ts#L265)

Represents an InnerTube session. This holds all the data needed to make requests to YouTube.

## Extends

- [`EventEmitter`](EventEmitter.md)\<[`SessionEvents`](../type-aliases/SessionEvents.md)\>

## Constructors

### Constructor

> **new Session**(`context`, `api_key`, `api_version`, `account_index`, `config_data?`, `player?`, `cookie?`, `fetch?`, `cache?`, `po_token?`): `Session`

Defined in: [src/core/Session.ts:272](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/Session.ts#L272)

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

Defined in: [src/core/Session.ts:276](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/Session.ts#L276)

***

### actions

> **actions**: [`Actions`](Actions.md)

Defined in: [src/core/Session.ts:269](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/Session.ts#L269)

***

### api\_key

> **api\_key**: `string`

Defined in: [src/core/Session.ts:274](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/Session.ts#L274)

***

### api\_version

> **api\_version**: `string`

Defined in: [src/core/Session.ts:275](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/Session.ts#L275)

***

### cache?

> `optional` **cache?**: [`ICache`](../youtubei.js/namespaces/Types/interfaces/ICache.md)

Defined in: [src/core/Session.ts:281](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/Session.ts#L281)

***

### config\_data?

> `optional` **config\_data?**: `string`

Defined in: [src/core/Session.ts:277](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/Session.ts#L277)

***

### context

> **context**: [`Context`](../type-aliases/Context.md)

Defined in: [src/core/Session.ts:273](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/Session.ts#L273)

***

### cookie?

> `optional` **cookie?**: `string`

Defined in: [src/core/Session.ts:279](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/Session.ts#L279)

***

### http

> **http**: [`HTTPClient`](HTTPClient.md)

Defined in: [src/core/Session.ts:267](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/Session.ts#L267)

***

### logged\_in

> **logged\_in**: `boolean`

Defined in: [src/core/Session.ts:268](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/Session.ts#L268)

***

### oauth

> **oauth**: [`OAuth2`](OAuth2.md)

Defined in: [src/core/Session.ts:266](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/Session.ts#L266)

***

### player?

> `optional` **player?**: [`Player`](Player.md)

Defined in: [src/core/Session.ts:278](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/Session.ts#L278)

***

### po\_token?

> `optional` **po\_token?**: `string`

Defined in: [src/core/Session.ts:282](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/Session.ts#L282)

***

### user\_agent?

> `optional` **user\_agent?**: `string`

Defined in: [src/core/Session.ts:270](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/Session.ts#L270)

## Accessors

### client\_name

#### Get Signature

> **get** **client\_name**(): `string`

Defined in: [src/core/Session.ts:689](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/Session.ts#L689)

##### Returns

`string`

***

### client\_version

#### Get Signature

> **get** **client\_version**(): `string`

Defined in: [src/core/Session.ts:685](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/Session.ts#L685)

##### Returns

`string`

***

### lang

#### Get Signature

> **get** **lang**(): `string`

Defined in: [src/core/Session.ts:693](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/Session.ts#L693)

##### Returns

`string`

## Methods

### emit()

> **emit**\<`K`\>(`type`, ...`args`): `void`

Defined in: [src/utils/EventEmitterLike.ts:7](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/utils/EventEmitterLike.ts#L7)

#### Type Parameters

##### K

`K` *extends* keyof [`SessionEvents`](../type-aliases/SessionEvents.md)

#### Parameters

##### type

`K`

##### args

...`Parameters`\<[`SessionEvents`](../type-aliases/SessionEvents.md)\[`K`\]\>

#### Returns

`void`

#### Inherited from

[`EventEmitter`](EventEmitter.md).[`emit`](EventEmitter.md#emit)

***

### off()

> **off**\<`K`\>(`type`, `listener`): `void`

Defined in: [src/utils/EventEmitterLike.ts:45](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/utils/EventEmitterLike.ts#L45)

#### Type Parameters

##### K

`K` *extends* keyof [`SessionEvents`](../type-aliases/SessionEvents.md)

#### Parameters

##### type

`K`

##### listener

[`SessionEvents`](../type-aliases/SessionEvents.md)\[`K`\]

#### Returns

`void`

#### Inherited from

[`EventEmitter`](EventEmitter.md).[`off`](EventEmitter.md#off)

***

### on()

> **on**\<`K`\>(`type`, `listener`): `void`

Defined in: [src/utils/EventEmitterLike.ts:17](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/utils/EventEmitterLike.ts#L17)

#### Type Parameters

##### K

`K` *extends* keyof [`SessionEvents`](../type-aliases/SessionEvents.md)

#### Parameters

##### type

`K`

##### listener

[`SessionEvents`](../type-aliases/SessionEvents.md)\[`K`\]

#### Returns

`void`

#### Inherited from

[`EventEmitter`](EventEmitter.md).[`on`](EventEmitter.md#on)

***

### once()

> **once**\<`K`\>(`type`, `listener`): `void`

Defined in: [src/utils/EventEmitterLike.ts:28](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/utils/EventEmitterLike.ts#L28)

#### Type Parameters

##### K

`K` *extends* keyof [`SessionEvents`](../type-aliases/SessionEvents.md)

#### Parameters

##### type

`K`

##### listener

[`SessionEvents`](../type-aliases/SessionEvents.md)\[`K`\]

#### Returns

`void`

#### Inherited from

[`EventEmitter`](EventEmitter.md).[`once`](EventEmitter.md#once)

***

### removeAllListeners()

> **removeAllListeners**(`type?`): `void`

Defined in: [src/utils/EventEmitterLike.ts:70](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/utils/EventEmitterLike.ts#L70)

#### Parameters

##### type?

keyof SessionEvents

#### Returns

`void`

#### Inherited from

[`EventEmitter`](EventEmitter.md).[`removeAllListeners`](EventEmitter.md#removealllisteners)

***

### signIn()

> **signIn**(`credentials?`): `Promise`\<`void`\>

Defined in: [src/core/Session.ts:652](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/Session.ts#L652)

#### Parameters

##### credentials?

[`OAuth2Tokens`](../type-aliases/OAuth2Tokens.md)

#### Returns

`Promise`\<`void`\>

***

### signOut()

> **signOut**(): `Promise`\<`Response` \| `undefined`\>

Defined in: [src/core/Session.ts:675](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/Session.ts#L675)

Signs out of the current account and revokes the credentials.

#### Returns

`Promise`\<`Response` \| `undefined`\>

***

### create()

> `static` **create**(`options?`): `Promise`\<`Session`\>

Defined in: [src/core/Session.ts:292](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/Session.ts#L292)

#### Parameters

##### options?

[`SessionOptions`](../type-aliases/SessionOptions.md) = `{}`

#### Returns

`Promise`\<`Session`\>

***

### fromCache()

> `static` **fromCache**(`cache`, `session_args`): `Promise`\<[`SessionData`](../type-aliases/SessionData.md) \| `null`\>

Defined in: [src/core/Session.ts:325](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/Session.ts#L325)

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

Defined in: [src/core/Session.ts:374](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/Session.ts#L374)

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
