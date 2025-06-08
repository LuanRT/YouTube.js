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

[src/core/Player.ts:26](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/core/Player.ts#L26)

## Properties

### nsig\_sc?

> `optional` **nsig\_sc**: `string`

#### Defined in

[src/core/Player.ts:22](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/core/Player.ts#L22)

***

### player\_id

> **player\_id**: `string`

#### Defined in

[src/core/Player.ts:20](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/core/Player.ts#L20)

***

### po\_token?

> `optional` **po\_token**: `string`

#### Defined in

[src/core/Player.ts:24](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/core/Player.ts#L24)

***

### sig\_sc?

> `optional` **sig\_sc**: `string`

#### Defined in

[src/core/Player.ts:23](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/core/Player.ts#L23)

***

### sts

> **sts**: `number`

#### Defined in

[src/core/Player.ts:21](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/core/Player.ts#L21)

## Accessors

### url

> `get` **url**(): `string`

#### Returns

`string`

#### Defined in

[src/core/Player.ts:324](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/core/Player.ts#L324)

***

### LIBRARY\_VERSION

> `get` `static` **LIBRARY\_VERSION**(): `number`

#### Returns

`number`

#### Defined in

[src/core/Player.ts:328](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/core/Player.ts#L328)

## Methods

### cache()

> **cache**(`cache`?): `Promise`\<`void`\>

#### Parameters

• **cache?**: [`ICache`](../namespaces/Types/interfaces/ICache.md)

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/core/Player.ts:218](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/core/Player.ts#L218)

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

[src/core/Player.ts:93](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/core/Player.ts#L93)

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

[src/core/Player.ts:33](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/core/Player.ts#L33)

***

### extractGlobalVariable()

> `static` **extractGlobalVariable**(`data`, `ast`): `undefined` \| [`ASTLookupResult`](../namespaces/Utils/type-aliases/ASTLookupResult.md)

#### Parameters

• **data**: `string`

• **ast**: `ExtendNode`\<`Program`\>

#### Returns

`undefined` \| [`ASTLookupResult`](../namespaces/Utils/type-aliases/ASTLookupResult.md)

#### Defined in

[src/core/Player.ts:244](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/core/Player.ts#L244)

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

[src/core/Player.ts:292](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/core/Player.ts#L292)

***

### extractSigSourceCode()

> `static` **extractSigSourceCode**(`data`, `global_variable`?): `undefined` \| `string`

#### Parameters

• **data**: `string`

• **global\_variable?**: [`ASTLookupResult`](../namespaces/Utils/type-aliases/ASTLookupResult.md)

#### Returns

`undefined` \| `string`

#### Defined in

[src/core/Player.ts:263](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/core/Player.ts#L263)

***

### extractSigTimestamp()

> `static` **extractSigTimestamp**(`data`): `number`

#### Parameters

• **data**: `string`

#### Returns

`number`

#### Defined in

[src/core/Player.ts:240](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/core/Player.ts#L240)

***

### fromCache()

> `static` **fromCache**(`cache`, `player_id`): `Promise`\<`null` \| [`Player`](Player.md)\>

#### Parameters

• **cache**: [`ICache`](../namespaces/Types/interfaces/ICache.md)

• **player\_id**: `string`

#### Returns

`Promise`\<`null` \| [`Player`](Player.md)\>

#### Defined in

[src/core/Player.ts:188](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/core/Player.ts#L188)

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

[src/core/Player.ts:212](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/core/Player.ts#L212)
