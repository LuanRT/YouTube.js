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

[src/core/Player.ts:34](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/core/Player.ts#L34)

## Properties

### nsig\_sc?

> `optional` **nsig\_sc**: `string`

#### Defined in

[src/core/Player.ts:30](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/core/Player.ts#L30)

***

### player\_id

> **player\_id**: `string`

#### Defined in

[src/core/Player.ts:28](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/core/Player.ts#L28)

***

### po\_token?

> `optional` **po\_token**: `string`

#### Defined in

[src/core/Player.ts:32](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/core/Player.ts#L32)

***

### sig\_sc?

> `optional` **sig\_sc**: `string`

#### Defined in

[src/core/Player.ts:31](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/core/Player.ts#L31)

***

### sts

> **sts**: `number`

#### Defined in

[src/core/Player.ts:29](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/core/Player.ts#L29)

## Accessors

### url

> `get` **url**(): `string`

#### Returns

`string`

#### Defined in

[src/core/Player.ts:324](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/core/Player.ts#L324)

***

### LIBRARY\_VERSION

> `get` `static` **LIBRARY\_VERSION**(): `number`

#### Returns

`number`

#### Defined in

[src/core/Player.ts:328](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/core/Player.ts#L328)

## Methods

### cache()

> **cache**(`cache`?): `Promise`\<`void`\>

#### Parameters

• **cache?**: [`ICache`](../namespaces/Types/interfaces/ICache.md)

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/core/Player.ts:223](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/core/Player.ts#L223)

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

[src/core/Player.ts:100](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/core/Player.ts#L100)

***

### create()

> `static` **create**(`cache`, `fetch`, `po_token`?, `player_id`?): `Promise`\<[`Player`](Player.md)\>

#### Parameters

• **cache**: `undefined` \| [`ICache`](../namespaces/Types/interfaces/ICache.md)

• **fetch** = `Platform.shim.fetch`

• **po\_token?**: `string`

• **player\_id?**: `string`

#### Returns

`Promise`\<[`Player`](Player.md)\>

#### Defined in

[src/core/Player.ts:41](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/core/Player.ts#L41)

***

### extractGlobalVariable()

> `static` **extractGlobalVariable**(`data`, `ast`): `undefined` \| [`ASTLookupResult`](../namespaces/Utils/type-aliases/ASTLookupResult.md)

#### Parameters

• **data**: `string`

• **ast**: `ExtendNode`\<`Program`\>

#### Returns

`undefined` \| [`ASTLookupResult`](../namespaces/Utils/type-aliases/ASTLookupResult.md)

#### Defined in

[src/core/Player.ts:244](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/core/Player.ts#L244)

***

### extractNSigSourceCode()

> `static` **extractNSigSourceCode**(`data`, `ast`?, `global_variable`?): `undefined` \| `string`

#### Parameters

• **data**: `string`

• **ast?**: `ExtendNode`\<`Program`\>

• **global\_variable?**: [`ASTLookupResult`](../namespaces/Utils/type-aliases/ASTLookupResult.md)

#### Returns

`undefined` \| `string`

#### Defined in

[src/core/Player.ts:292](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/core/Player.ts#L292)

***

### extractSigSourceCode()

> `static` **extractSigSourceCode**(`data`, `global_variable`?): `undefined` \| `string`

#### Parameters

• **data**: `string`

• **global\_variable?**: [`ASTLookupResult`](../namespaces/Utils/type-aliases/ASTLookupResult.md)

#### Returns

`undefined` \| `string`

#### Defined in

[src/core/Player.ts:263](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/core/Player.ts#L263)

***

### extractSigTimestamp()

> `static` **extractSigTimestamp**(`data`): `number`

#### Parameters

• **data**: `string`

#### Returns

`number`

#### Defined in

[src/core/Player.ts:240](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/core/Player.ts#L240)

***

### fromCache()

> `static` **fromCache**(`cache`, `player_id`): `Promise`\<`null` \| [`Player`](Player.md)\>

#### Parameters

• **cache**: [`ICache`](../namespaces/Types/interfaces/ICache.md)

• **player\_id**: `string`

#### Returns

`Promise`\<`null` \| [`Player`](Player.md)\>

#### Defined in

[src/core/Player.ts:195](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/core/Player.ts#L195)

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

[src/core/Player.ts:217](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/core/Player.ts#L217)
