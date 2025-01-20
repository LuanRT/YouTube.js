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

[src/core/Actions.ts:49](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/Actions.ts#L49)

## Properties

### session

> **session**: [`Session`](Session.md)

#### Defined in

[src/core/Actions.ts:47](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/Actions.ts#L47)

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

• **args.skip\_auth\_check?**: `boolean`

##### Returns

`Promise`\<[`ParsedResponse`](../type-aliases/ParsedResponse.md)\<`T`\>\>

##### Defined in

[src/core/Actions.ts:93](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/Actions.ts#L93)

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

• **args.skip\_auth\_check?**: `boolean`

##### Returns

`Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\>

##### Defined in

[src/core/Actions.ts:100](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/Actions.ts#L100)

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

[src/core/Actions.ts:71](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/Actions.ts#L71)
