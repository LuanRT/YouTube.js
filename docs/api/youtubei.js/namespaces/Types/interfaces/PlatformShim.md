[youtubei.js](../../../../README.md) / [Types](../README.md) / PlatformShim

# Interface: PlatformShim

Defined in: [src/types/PlatformShim.ts:12](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/types/PlatformShim.ts#L12)

## Properties

### Cache

> **Cache**: [`ICacheConstructor`](ICacheConstructor.md)

Defined in: [src/types/PlatformShim.ts:15](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/types/PlatformShim.ts#L15)

***

### CustomEvent

> **CustomEvent**: \{\<`T`\>(`type`, `eventInitDict?`): `CustomEvent`\<`T`\>; `prototype`: `CustomEvent`; \}

Defined in: [src/types/PlatformShim.ts:26](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/types/PlatformShim.ts#L26)

#### Parameters

##### type

`string`

##### eventInitDict?

`CustomEventInit`\<`T`\>

#### Returns

`CustomEvent`\<`T`\>

#### prototype

> **prototype**: `CustomEvent`

***

### fetch()

> **fetch**: \{(`input`, `init?`): `Promise`\<`Response`\>; (`input`, `init?`): `Promise`\<`Response`\>; \}

Defined in: [src/types/PlatformShim.ts:19](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/types/PlatformShim.ts#L19)

#### Call Signature

> (`input`, `init?`): `Promise`\<`Response`\>

[MDN Reference](https://developer.mozilla.org/docs/Web/API/fetch)

##### Parameters

###### input

`URL` | `RequestInfo`

###### init?

`RequestInit`

##### Returns

`Promise`\<`Response`\>

#### Call Signature

> (`input`, `init?`): `Promise`\<`Response`\>

[MDN Reference](https://developer.mozilla.org/docs/Web/API/fetch)

##### Parameters

###### input

`string` | `URL` | `Request`

###### init?

`RequestInit`

##### Returns

`Promise`\<`Response`\>

***

### File

> **File**: \{(`fileBits`, `fileName`, `options?`): `File`; `prototype`: `File`; \}

Defined in: [src/types/PlatformShim.ts:24](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/types/PlatformShim.ts#L24)

#### Parameters

##### fileBits

`BlobPart`[]

##### fileName

`string`

##### options?

`FilePropertyBag`

#### Returns

`File`

#### prototype

> **prototype**: `File`

***

### FormData

> **FormData**: \{(`form?`, `submitter?`): `FormData`; `prototype`: `FormData`; \}

Defined in: [src/types/PlatformShim.ts:23](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/types/PlatformShim.ts#L23)

#### Parameters

##### form?

`HTMLFormElement`

##### submitter?

`HTMLElement` | `null`

#### Returns

`FormData`

#### prototype

> **prototype**: `FormData`

***

### Headers

> **Headers**: \{(`init?`): `Headers`; `prototype`: `Headers`; \}

Defined in: [src/types/PlatformShim.ts:22](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/types/PlatformShim.ts#L22)

#### Parameters

##### init?

`HeadersInit`

#### Returns

`Headers`

#### prototype

> **prototype**: `Headers`

***

### ReadableStream

> **ReadableStream**: \{(`underlyingSource`, `strategy?`): `ReadableStream`\<`Uint8Array`\>; \<`R`\>(`underlyingSource`, `strategy?`): `ReadableStream`\<`R`\>; \<`R`\>(`underlyingSource?`, `strategy?`): `ReadableStream`\<`R`\>; `prototype`: `ReadableStream`; \}

Defined in: [src/types/PlatformShim.ts:25](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/types/PlatformShim.ts#L25)

#### Call Signature

> **new ReadableStream**(`underlyingSource`, `strategy?`): `ReadableStream`\<`Uint8Array`\>

##### Parameters

###### underlyingSource

`UnderlyingByteSource`

###### strategy?

###### highWaterMark?

`number`

##### Returns

`ReadableStream`\<`Uint8Array`\>

#### Call Signature

> **new ReadableStream**\<`R`\>(`underlyingSource`, `strategy?`): `ReadableStream`\<`R`\>

##### Parameters

###### underlyingSource

`UnderlyingDefaultSource`\<`R`\>

###### strategy?

`QueuingStrategy`\<`R`\>

##### Returns

`ReadableStream`\<`R`\>

#### Call Signature

> **new ReadableStream**\<`R`\>(`underlyingSource?`, `strategy?`): `ReadableStream`\<`R`\>

##### Parameters

###### underlyingSource?

`UnderlyingSource`\<`R`\>

###### strategy?

`QueuingStrategy`\<`R`\>

##### Returns

`ReadableStream`\<`R`\>

#### prototype

> **prototype**: `ReadableStream`

***

### Request

> **Request**: \{(`input`, `init?`): `Request`; `prototype`: `Request`; \}

Defined in: [src/types/PlatformShim.ts:20](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/types/PlatformShim.ts#L20)

#### Parameters

##### input

`URL` | `RequestInfo`

##### init?

`RequestInit`

#### Returns

`Request`

#### prototype

> **prototype**: `Request`

***

### Response

> **Response**: \{(`body?`, `init?`): `Response`; `prototype`: `Response`; `error`: `Response`; `json`: `Response`; `redirect`: `Response`; \}

Defined in: [src/types/PlatformShim.ts:21](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/types/PlatformShim.ts#L21)

#### Parameters

##### body?

`BodyInit` | `null`

##### init?

`ResponseInit`

#### Returns

`Response`

#### prototype

> **prototype**: `Response`

#### error()

> **error**(): `Response`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/error_static)

##### Returns

`Response`

#### json()

> **json**(`data`, `init?`): `Response`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/json_static)

##### Parameters

###### data

`any`

###### init?

`ResponseInit`

##### Returns

`Response`

#### redirect()

> **redirect**(`url`, `status?`): `Response`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/redirect_static)

##### Parameters

###### url

`string` | `URL`

###### status?

`number`

##### Returns

`Response`

***

### runtime

> **runtime**: [`Runtime`](../type-aliases/Runtime.md)

Defined in: [src/types/PlatformShim.ts:13](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/types/PlatformShim.ts#L13)

***

### server

> **server**: `boolean`

Defined in: [src/types/PlatformShim.ts:14](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/types/PlatformShim.ts#L14)

## Methods

### eval()

> **eval**(`data`, `env`): [`EvalResult`](../type-aliases/EvalResult.md) \| `Promise`\<[`EvalResult`](../type-aliases/EvalResult.md)\>

Defined in: [src/types/PlatformShim.ts:18](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/types/PlatformShim.ts#L18)

#### Parameters

##### data

[`BuildScriptResult`](BuildScriptResult.md)

##### env

`Record`\<`string`, [`VMPrimative`](../type-aliases/VMPrimative.md)\>

#### Returns

[`EvalResult`](../type-aliases/EvalResult.md) \| `Promise`\<[`EvalResult`](../type-aliases/EvalResult.md)\>

***

### sha1Hash()

> **sha1Hash**(`data`): `Promise`\<`string`\>

Defined in: [src/types/PlatformShim.ts:16](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/types/PlatformShim.ts#L16)

#### Parameters

##### data

`string`

#### Returns

`Promise`\<`string`\>

***

### uuidv4()

> **uuidv4**(): `string`

Defined in: [src/types/PlatformShim.ts:17](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/types/PlatformShim.ts#L17)

#### Returns

`string`
