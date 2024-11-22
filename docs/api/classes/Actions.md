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

[src/core/Actions.ts:33](https://github.com/LuanRT/YouTube.js/blob/fc5571629eca037af7de03f4b903da6add1f300b/src/core/Actions.ts#L33)

## Properties

### session

> **session**: [`Session`](Session.md)

#### Defined in

[src/core/Actions.ts:31](https://github.com/LuanRT/YouTube.js/blob/fc5571629eca037af7de03f4b903da6add1f300b/src/core/Actions.ts#L31)

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

[src/core/Actions.ts:75](https://github.com/LuanRT/YouTube.js/blob/fc5571629eca037af7de03f4b903da6add1f300b/src/core/Actions.ts#L75)

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

[src/core/Actions.ts:76](https://github.com/LuanRT/YouTube.js/blob/fc5571629eca037af7de03f4b903da6add1f300b/src/core/Actions.ts#L76)

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

[src/core/Actions.ts:55](https://github.com/LuanRT/YouTube.js/blob/fc5571629eca037af7de03f4b903da6add1f300b/src/core/Actions.ts#L55)
