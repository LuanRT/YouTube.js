[youtubei.js](../README.md) / Actions

# Class: Actions

## Constructors

### new Actions()

> **new Actions**(`session`): [`Actions`](Actions.md)

#### Parameters

• **session**: [`Session`](Session.md)

#### Returns

[`Actions`](Actions.md)

#### Defined in

[src/core/Actions.ts:34](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/Actions.ts#L34)

## Properties

### session

> **session**: [`Session`](Session.md)

#### Defined in

[src/core/Actions.ts:32](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/Actions.ts#L32)

## Methods

### execute()

#### execute(endpoint, args)

> **execute**\<`T`\>(`endpoint`, `args`): `Promise`\<[`ParsedResponse`](../type-aliases/ParsedResponse.md)\<`T`\>\>

Executes an API call.

##### Type Parameters

• **T** *extends* `string`

##### Parameters

• **endpoint**: `T`

The endpoint to call.

• **args**

Call arguments

• **args.parse**: `true`

• **args.protobuf?**: `false`

• **args.serialized\_data?**: `any`

##### Returns

`Promise`\<[`ParsedResponse`](../type-aliases/ParsedResponse.md)\<`T`\>\>

##### Defined in

[src/core/Actions.ts:78](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/Actions.ts#L78)

#### execute(endpoint, args)

> **execute**\<`T`\>(`endpoint`, `args`?): `Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\>

##### Type Parameters

• **T** *extends* `string`

##### Parameters

• **endpoint**: `T`

• **args?**

• **args.parse?**: `false`

• **args.protobuf?**: `true`

• **args.serialized\_data?**: `any`

##### Returns

`Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\>

##### Defined in

[src/core/Actions.ts:79](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/Actions.ts#L79)

***

### stats()

> **stats**(`url`, `client`, `params`): `Promise`\<`Response`\>

Makes calls to the playback tracking API.

#### Parameters

• **url**: `string`

The URL to call.

• **client**

The client to use.

• **client.client\_name**: `string`

• **client.client\_version**: `string`

• **params**

Call parameters.

#### Returns

`Promise`\<`Response`\>

#### Defined in

[src/core/Actions.ts:56](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/Actions.ts#L56)
