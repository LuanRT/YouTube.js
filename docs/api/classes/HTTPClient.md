[youtubei.js](../README.md) / HTTPClient

# Class: HTTPClient

## Constructors

### new HTTPClient()

> **new HTTPClient**(`session`, `cookie`?, `fetch`?): [`HTTPClient`](HTTPClient.md)

#### Parameters

• **session**: [`Session`](Session.md)

• **cookie?**: `string`

• **fetch?**

#### Returns

[`HTTPClient`](HTTPClient.md)

#### Defined in

[src/utils/HTTPClient.ts:30](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/utils/HTTPClient.ts#L30)

## Accessors

### fetch\_function

> `get` **fetch\_function**(): (`input`, `init`?) => `Promise`\<`Response`\>(`input`, `init`?) => `Promise`\<`Response`\>

#### Returns

`Function`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/fetch)

##### Parameters

• **input**: `URL` \| `RequestInfo`

• **init?**: `RequestInit`

##### Returns

`Promise`\<`Response`\>

##### Parameters

• **input**: `string` \| `URL` \| `Request`

• **init?**: `RequestInit`

##### Returns

`Promise`\<`Response`\>

#### Defined in

[src/utils/HTTPClient.ts:36](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/utils/HTTPClient.ts#L36)

## Methods

### fetch()

> **fetch**(`input`, `init`?): `Promise`\<`Response`\>

#### Parameters

• **input**: `string` \| `URL` \| `Request`

• **init?**: `RequestInit` & [`HTTPClientInit`](../interfaces/HTTPClientInit.md)

#### Returns

`Promise`\<`Response`\>

#### Defined in

[src/utils/HTTPClient.ts:40](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/utils/HTTPClient.ts#L40)
