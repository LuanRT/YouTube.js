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

[src/utils/HTTPClient.ts:23](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/utils/HTTPClient.ts#L23)

## Accessors

### fetch\_function

> `get` **fetch\_function**(): (`input`, `init`?) => `Promise`\<`Response`\>

#### Returns

`Function`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/fetch)

##### Parameters

• **input**: `URL` \| `RequestInfo`

• **init?**: `RequestInit`

##### Returns

`Promise`\<`Response`\>

#### Defined in

[src/utils/HTTPClient.ts:29](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/utils/HTTPClient.ts#L29)

## Methods

### fetch()

> **fetch**(`input`, `init`?): `Promise`\<`Response`\>

#### Parameters

• **input**: `string` \| `URL` \| `Request`

• **init?**: `RequestInit` & [`HTTPClientInit`](../interfaces/HTTPClientInit.md)

#### Returns

`Promise`\<`Response`\>

#### Defined in

[src/utils/HTTPClient.ts:33](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/utils/HTTPClient.ts#L33)
