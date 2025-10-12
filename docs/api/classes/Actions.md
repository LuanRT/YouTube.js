[youtubei.js](../README.md) / Actions

# Class: Actions

Defined in: [src/core/Actions.ts:46](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/core/Actions.ts#L46)

## Constructors

### Constructor

> **new Actions**(`session`): `Actions`

Defined in: [src/core/Actions.ts:49](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/core/Actions.ts#L49)

#### Parameters

##### session

[`Session`](Session.md)

#### Returns

`Actions`

## Properties

### session

> **session**: [`Session`](Session.md)

Defined in: [src/core/Actions.ts:47](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/core/Actions.ts#L47)

## Methods

### execute()

#### Call Signature

> **execute**\<`T`\>(`endpoint`, `args`): `Promise`\<[`ParsedResponse`](../type-aliases/ParsedResponse.md)\<`T`\>\>

Defined in: [src/core/Actions.ts:81](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/core/Actions.ts#L81)

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

Defined in: [src/core/Actions.ts:88](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/core/Actions.ts#L88)

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

Defined in: [src/core/Actions.ts:59](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/core/Actions.ts#L59)

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
