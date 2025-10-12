[youtubei.js](../README.md) / Player

# Class: Player

Represents YouTube's player script. This is required to decipher signatures.

## Constructors

### new Player()

> **new Player**(`player_id`, `signature_timestamp`, `data`?): [`Player`](Player.md)

#### Parameters

• **player\_id**: `string`

• **signature\_timestamp**: `number`

• **data?**: [`BuildScriptResult`](../namespaces/Types/interfaces/BuildScriptResult.md)

#### Returns

[`Player`](Player.md)

#### Defined in

[src/core/Player.ts:40](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/core/Player.ts#L40)

## Properties

### data?

> `optional` **data**: [`BuildScriptResult`](../namespaces/Types/interfaces/BuildScriptResult.md)

#### Defined in

[src/core/Player.ts:40](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/core/Player.ts#L40)

***

### player\_id

> **player\_id**: `string`

#### Defined in

[src/core/Player.ts:40](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/core/Player.ts#L40)

***

### po\_token?

> `optional` **po\_token**: `string`

#### Defined in

[src/core/Player.ts:38](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/core/Player.ts#L38)

***

### signature\_timestamp

> **signature\_timestamp**: `number`

#### Defined in

[src/core/Player.ts:40](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/core/Player.ts#L40)

## Accessors

### url

> `get` **url**(): `string`

#### Returns

`string`

#### Defined in

[src/core/Player.ts:284](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/core/Player.ts#L284)

***

### LIBRARY\_VERSION

> `get` `static` **LIBRARY\_VERSION**(): `number`

#### Returns

`number`

#### Defined in

[src/core/Player.ts:288](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/core/Player.ts#L288)

## Methods

### cache()

> **cache**(`cache`?): `Promise`\<`void`\>

#### Parameters

• **cache?**: [`ICache`](../namespaces/Types/interfaces/ICache.md)

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/core/Player.ts:270](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/core/Player.ts#L270)

***

### decipher()

> **decipher**(`url`?, `signature_cipher`?, `cipher`?, `this_response_nsig_cache`?): `Promise`\<`string`\>

#### Parameters

• **url?**: `string`

• **signature\_cipher?**: `string`

• **cipher?**: `string`

• **this\_response\_nsig\_cache?**: `Map`\<`string`, `string`\>

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/core/Player.ts:134](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/core/Player.ts#L134)

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

[src/core/Player.ts:42](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/core/Player.ts#L42)

***

### fromCache()

> `static` **fromCache**(`cache`, `player_id`): `Promise`\<`null` \| [`Player`](Player.md)\>

#### Parameters

• **cache**: [`ICache`](../namespaces/Types/interfaces/ICache.md)

• **player\_id**: `string`

#### Returns

`Promise`\<`null` \| [`Player`](Player.md)\>

#### Defined in

[src/core/Player.ts:243](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/core/Player.ts#L243)

***

### fromSource()

> `static` **fromSource**(`player_id`, `options`): `Promise`\<[`Player`](Player.md)\>

#### Parameters

• **player\_id**: `string`

• **options**: [`PlayerInitializationOptions`](../interfaces/PlayerInitializationOptions.md)

#### Returns

`Promise`\<[`Player`](Player.md)\>

#### Defined in

[src/core/Player.ts:264](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/core/Player.ts#L264)
