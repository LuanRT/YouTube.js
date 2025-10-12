[youtubei.js](../README.md) / HTTPClient

# Class: HTTPClient

Defined in: [src/utils/HTTPClient.ts:25](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/utils/HTTPClient.ts#L25)

## Constructors

### Constructor

> **new HTTPClient**(`session`, `cookie?`, `fetch?`): `HTTPClient`

Defined in: [src/utils/HTTPClient.ts:30](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/utils/HTTPClient.ts#L30)

#### Parameters

##### session

[`Session`](Session.md)

##### cookie?

`string`

##### fetch?

\{(`input`, `init?`): `Promise`\<`Response`\>; (`input`, `init?`): `Promise`\<`Response`\>; \}

#### Returns

`HTTPClient`

## Accessors

### fetch\_function

#### Get Signature

> **get** **fetch\_function**(): \{(`input`, `init?`): `Promise`\<`Response`\>; (`input`, `init?`): `Promise`\<`Response`\>; \}

Defined in: [src/utils/HTTPClient.ts:36](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/utils/HTTPClient.ts#L36)

##### Returns

> (`input`, `init?`): `Promise`\<`Response`\>

[MDN Reference](https://developer.mozilla.org/docs/Web/API/fetch)

###### Parameters

###### input

`URL` | `RequestInfo`

###### init?

`RequestInit`

###### Returns

`Promise`\<`Response`\>

> (`input`, `init?`): `Promise`\<`Response`\>

[MDN Reference](https://developer.mozilla.org/docs/Web/API/fetch)

###### Parameters

###### input

`string` | `URL` | `Request`

###### init?

`RequestInit`

###### Returns

`Promise`\<`Response`\>

## Methods

### fetch()

> **fetch**(`input`, `init?`): `Promise`\<`Response`\>

Defined in: [src/utils/HTTPClient.ts:40](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/utils/HTTPClient.ts#L40)

#### Parameters

##### input

`string` | `URL` | `Request`

##### init?

`RequestInit` & [`HTTPClientInit`](../interfaces/HTTPClientInit.md)

#### Returns

`Promise`\<`Response`\>
