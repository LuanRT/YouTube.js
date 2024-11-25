[youtubei.js](../README.md) / Player

# Class: Player

Represents YouTube's player script. This is required to decipher signatures.

## Constructors

### new Player()

> **new Player**(`player_id`, `signature_timestamp`, `sig_sc`?, `nsig_sc`?): [`Player`](Player.md)

#### Parameters

• **player\_id**: `string`

• **signature\_timestamp**: `number`

• **sig\_sc?**: `string`

• **nsig\_sc?**: `string`

#### Returns

[`Player`](Player.md)

#### Defined in

[src/core/Player.ts:17](https://github.com/LuanRT/YouTube.js/blob/4729016fb98e7045ee4043857be7eef780c01e35/src/core/Player.ts#L17)

## Properties

### nsig\_sc?

> `optional` **nsig\_sc**: `string`

#### Defined in

[src/core/Player.ts:13](https://github.com/LuanRT/YouTube.js/blob/4729016fb98e7045ee4043857be7eef780c01e35/src/core/Player.ts#L13)

***

### player\_id

> **player\_id**: `string`

#### Defined in

[src/core/Player.ts:11](https://github.com/LuanRT/YouTube.js/blob/4729016fb98e7045ee4043857be7eef780c01e35/src/core/Player.ts#L11)

***

### po\_token?

> `optional` **po\_token**: `string`

#### Defined in

[src/core/Player.ts:15](https://github.com/LuanRT/YouTube.js/blob/4729016fb98e7045ee4043857be7eef780c01e35/src/core/Player.ts#L15)

***

### sig\_sc?

> `optional` **sig\_sc**: `string`

#### Defined in

[src/core/Player.ts:14](https://github.com/LuanRT/YouTube.js/blob/4729016fb98e7045ee4043857be7eef780c01e35/src/core/Player.ts#L14)

***

### sts

> **sts**: `number`

#### Defined in

[src/core/Player.ts:12](https://github.com/LuanRT/YouTube.js/blob/4729016fb98e7045ee4043857be7eef780c01e35/src/core/Player.ts#L12)

## Accessors

### url

> `get` **url**(): `string`

#### Returns

`string`

#### Defined in

[src/core/Player.ts:241](https://github.com/LuanRT/YouTube.js/blob/4729016fb98e7045ee4043857be7eef780c01e35/src/core/Player.ts#L241)

***

### LIBRARY\_VERSION

> `get` `static` **LIBRARY\_VERSION**(): `number`

#### Returns

`number`

#### Defined in

[src/core/Player.ts:245](https://github.com/LuanRT/YouTube.js/blob/4729016fb98e7045ee4043857be7eef780c01e35/src/core/Player.ts#L245)

## Methods

### cache()

> **cache**(`cache`?): `Promise`\<`void`\>

#### Parameters

• **cache?**: [`ICache`](../namespaces/Types/interfaces/ICache.md)

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/core/Player.ts:197](https://github.com/LuanRT/YouTube.js/blob/4729016fb98e7045ee4043857be7eef780c01e35/src/core/Player.ts#L197)

***

### decipher()

> **decipher**(`url`?, `signature_cipher`?, `cipher`?, `this_response_nsig_cache`?): `string`

#### Parameters

• **url?**: `string`

• **signature\_cipher?**: `string`

• **cipher?**: `string`

• **this\_response\_nsig\_cache?**: `Map`\<`string`, `string`\>

#### Returns

`string`

#### Defined in

[src/core/Player.ts:78](https://github.com/LuanRT/YouTube.js/blob/4729016fb98e7045ee4043857be7eef780c01e35/src/core/Player.ts#L78)

***

### create()

> `static` **create**(`cache`, `fetch`, `po_token`?): `Promise`\<[`Player`](Player.md)\>

#### Parameters

• **cache**: `undefined` \| [`ICache`](../namespaces/Types/interfaces/ICache.md)

• **fetch** = `Platform.shim.fetch`

• **po\_token?**: `string`

#### Returns

`Promise`\<[`Player`](Player.md)\>

#### Defined in

[src/core/Player.ts:24](https://github.com/LuanRT/YouTube.js/blob/4729016fb98e7045ee4043857be7eef780c01e35/src/core/Player.ts#L24)

***

### extractNSigSourceCode()

> `static` **extractNSigSourceCode**(`data`): `undefined` \| `string`

#### Parameters

• **data**: `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/core/Player.ts:234](https://github.com/LuanRT/YouTube.js/blob/4729016fb98e7045ee4043857be7eef780c01e35/src/core/Player.ts#L234)

***

### extractSigSourceCode()

> `static` **extractSigSourceCode**(`data`): `string`

#### Parameters

• **data**: `string`

#### Returns

`string`

#### Defined in

[src/core/Player.ts:223](https://github.com/LuanRT/YouTube.js/blob/4729016fb98e7045ee4043857be7eef780c01e35/src/core/Player.ts#L223)

***

### extractSigTimestamp()

> `static` **extractSigTimestamp**(`data`): `number`

#### Parameters

• **data**: `string`

#### Returns

`number`

#### Defined in

[src/core/Player.ts:219](https://github.com/LuanRT/YouTube.js/blob/4729016fb98e7045ee4043857be7eef780c01e35/src/core/Player.ts#L219)

***

### fromCache()

> `static` **fromCache**(`cache`, `player_id`): `Promise`\<`null` \| [`Player`](Player.md)\>

#### Parameters

• **cache**: [`ICache`](../namespaces/Types/interfaces/ICache.md)

• **player\_id**: `string`

#### Returns

`Promise`\<`null` \| [`Player`](Player.md)\>

#### Defined in

[src/core/Player.ts:167](https://github.com/LuanRT/YouTube.js/blob/4729016fb98e7045ee4043857be7eef780c01e35/src/core/Player.ts#L167)

***

### fromSource()

> `static` **fromSource**(`player_id`, `sig_timestamp`, `cache`?, `sig_sc`?, `nsig_sc`?): `Promise`\<[`Player`](Player.md)\>

#### Parameters

• **player\_id**: `string`

• **sig\_timestamp**: `number`

• **cache?**: [`ICache`](../namespaces/Types/interfaces/ICache.md)

• **sig\_sc?**: `string`

• **nsig\_sc?**: `string`

#### Returns

`Promise`\<[`Player`](Player.md)\>

#### Defined in

[src/core/Player.ts:191](https://github.com/LuanRT/YouTube.js/blob/4729016fb98e7045ee4043857be7eef780c01e35/src/core/Player.ts#L191)
