[youtubei.js](../README.md) / Player

# Class: Player

Defined in: [src/core/Player.ts:38](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/Player.ts#L38)

Represents YouTube's player script. This is required to decipher signatures.

## Constructors

### Constructor

> **new Player**(`player_id`, `signature_timestamp`, `data?`): `Player`

Defined in: [src/core/Player.ts:41](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/Player.ts#L41)

#### Parameters

##### player\_id

`string`

##### signature\_timestamp

`number`

##### data?

[`BuildScriptResult`](../youtubei.js/namespaces/Types/interfaces/BuildScriptResult.md)

#### Returns

`Player`

## Properties

### data?

> `optional` **data**: [`BuildScriptResult`](../youtubei.js/namespaces/Types/interfaces/BuildScriptResult.md)

Defined in: [src/core/Player.ts:41](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/Player.ts#L41)

***

### player\_id

> **player\_id**: `string`

Defined in: [src/core/Player.ts:41](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/Player.ts#L41)

***

### po\_token?

> `optional` **po\_token**: `string`

Defined in: [src/core/Player.ts:39](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/Player.ts#L39)

***

### signature\_timestamp

> **signature\_timestamp**: `number`

Defined in: [src/core/Player.ts:41](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/Player.ts#L41)

## Accessors

### url

#### Get Signature

> **get** **url**(): `string`

Defined in: [src/core/Player.ts:285](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/Player.ts#L285)

##### Returns

`string`

***

### LIBRARY\_VERSION

#### Get Signature

> **get** `static` **LIBRARY\_VERSION**(): `number`

Defined in: [src/core/Player.ts:289](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/Player.ts#L289)

##### Returns

`number`

## Methods

### cache()

> **cache**(`cache?`): `Promise`\<`void`\>

Defined in: [src/core/Player.ts:271](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/Player.ts#L271)

#### Parameters

##### cache?

[`ICache`](../youtubei.js/namespaces/Types/interfaces/ICache.md)

#### Returns

`Promise`\<`void`\>

***

### decipher()

> **decipher**(`url?`, `signature_cipher?`, `cipher?`, `this_response_nsig_cache?`): `Promise`\<`string`\>

Defined in: [src/core/Player.ts:129](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/Player.ts#L129)

#### Parameters

##### url?

`string`

##### signature\_cipher?

`string`

##### cipher?

`string`

##### this\_response\_nsig\_cache?

`Map`\<`string`, `string`\>

#### Returns

`Promise`\<`string`\>

***

### create()

> `static` **create**(`cache`, `fetch?`, `po_token?`, `player_id?`): `Promise`\<`Player`\>

Defined in: [src/core/Player.ts:43](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/Player.ts#L43)

#### Parameters

##### cache

[`ICache`](../youtubei.js/namespaces/Types/interfaces/ICache.md) | `undefined`

##### fetch?

\{(`input`, `init?`): `Promise`\<`Response`\>; (`input`, `init?`): `Promise`\<`Response`\>; \}

##### po\_token?

`string`

##### player\_id?

`string`

#### Returns

`Promise`\<`Player`\>

***

### fromCache()

> `static` **fromCache**(`cache`, `player_id`): `Promise`\<`Player` \| `null`\>

Defined in: [src/core/Player.ts:244](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/Player.ts#L244)

#### Parameters

##### cache

[`ICache`](../youtubei.js/namespaces/Types/interfaces/ICache.md)

##### player\_id

`string`

#### Returns

`Promise`\<`Player` \| `null`\>

***

### fromSource()

> `static` **fromSource**(`player_id`, `options`): `Promise`\<`Player`\>

Defined in: [src/core/Player.ts:265](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/core/Player.ts#L265)

#### Parameters

##### player\_id

`string`

##### options

`PlayerInitializationOptions`

#### Returns

`Promise`\<`Player`\>
