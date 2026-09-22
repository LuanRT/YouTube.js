[youtubei.js](../README.md) / Actions

# Class: Actions

Defined in: [src/core/Actions.ts:49](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/Actions.ts#L49)

## Constructors

### Constructor

> **new Actions**(`session`): `Actions`

Defined in: [src/core/Actions.ts:52](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/Actions.ts#L52)

#### Parameters

##### session

[`Session`](Session.md)

#### Returns

`Actions`

## Properties

### session

> **session**: [`Session`](Session.md)

Defined in: [src/core/Actions.ts:50](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/Actions.ts#L50)

## Methods

### execute()

#### Call Signature

> **execute**\<`T`\>(`endpoint`, `args`): `Promise`\<[`ParsedResponse`](../type-aliases/ParsedResponse.md)\<`T`\>\>

Defined in: [src/core/Actions.ts:84](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/Actions.ts#L84)

Executes an API call.

##### Type Parameters

###### T

`T` *extends* `string`

##### Parameters

###### endpoint

`T`

The endpoint to call.

###### args

Call arguments

###### parse

`true`

###### protobuf?

`false`

###### serialized_data?

`any`

###### skip_auth_check?

`boolean`

##### Returns

`Promise`\<[`ParsedResponse`](../type-aliases/ParsedResponse.md)\<`T`\>\>

#### Call Signature

> **execute**\<`T`\>(`endpoint`, `args?`): `Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\>

Defined in: [src/core/Actions.ts:91](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/Actions.ts#L91)

Executes an API call.

##### Type Parameters

###### T

`T` *extends* `string`

##### Parameters

###### endpoint

`T`

The endpoint to call.

###### args?

Call arguments

###### parse?

`false`

###### protobuf?

`true`

###### serialized_data?

`any`

###### skip_auth_check?

`boolean`

##### Returns

`Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\>

***

### stats()

> **stats**(`url`, `client`, `params`): `Promise`\<`Response`\>

Defined in: [src/core/Actions.ts:62](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/Actions.ts#L62)

Makes calls to the playback tracking API.

#### Parameters

##### url

`string`

The URL to call.

##### client

The client to use.

###### client_name

`string`

###### client_version

`string`

##### params

Call parameters.

#### Returns

`Promise`\<`Response`\>
