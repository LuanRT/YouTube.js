[youtubei.js](../README.md) / Player

# Class: Player

Defined in: [src/core/Player.ts:37](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/Player.ts#L37)

Represents YouTube's player script. This is required to decipher signatures.

## Constructors

### Constructor

> **new Player**(`player_id`, `signature_timestamp`, `data?`): `Player`

Defined in: [src/core/Player.ts:40](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/Player.ts#L40)

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

Defined in: [src/core/Player.ts:40](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/Player.ts#L40)

***

### player\_id

> **player\_id**: `string`

Defined in: [src/core/Player.ts:40](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/Player.ts#L40)

***

### po\_token?

> `optional` **po\_token**: `string`

Defined in: [src/core/Player.ts:38](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/Player.ts#L38)

***

### signature\_timestamp

> **signature\_timestamp**: `number`

Defined in: [src/core/Player.ts:40](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/Player.ts#L40)

## Accessors

### url

#### Get Signature

> **get** **url**(): `string`

Defined in: [src/core/Player.ts:284](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/Player.ts#L284)

##### Returns

`string`

***

### LIBRARY\_VERSION

#### Get Signature

> **get** `static` **LIBRARY\_VERSION**(): `number`

Defined in: [src/core/Player.ts:288](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/Player.ts#L288)

##### Returns

`number`

## Methods

### cache()

> **cache**(`cache?`): `Promise`\<`void`\>

Defined in: [src/core/Player.ts:270](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/Player.ts#L270)

#### Parameters

##### cache?

[`ICache`](../youtubei.js/namespaces/Types/interfaces/ICache.md)

#### Returns

`Promise`\<`void`\>

***

### decipher()

> **decipher**(`url?`, `signature_cipher?`, `cipher?`, `this_response_nsig_cache?`): `Promise`\<`string`\>

Defined in: [src/core/Player.ts:134](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/Player.ts#L134)

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

> `static` **create**(`cache`, `fetch`, `po_token?`, `player_id?`): `Promise`\<`Player`\>

Defined in: [src/core/Player.ts:42](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/Player.ts#L42)

#### Parameters

##### cache

[`ICache`](../youtubei.js/namespaces/Types/interfaces/ICache.md) | `undefined`

##### fetch

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

Defined in: [src/core/Player.ts:243](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/Player.ts#L243)

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

Defined in: [src/core/Player.ts:264](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/Player.ts#L264)

#### Parameters

##### player\_id

`string`

##### options

`PlayerInitializationOptions`

#### Returns

`Promise`\<`Player`\>
