[youtubei.js](../../../README.md) / [Types](../README.md) / PlatformShim

# Interface: PlatformShim

## Properties

### Cache

> **Cache**: [`ICacheConstructor`](ICacheConstructor.md)

#### Defined in

[src/types/PlatformShim.ts:17](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/types/PlatformShim.ts#L17)

***

### CustomEvent()

> **CustomEvent**: \<`T`\>(`type`, `eventInitDict`?) => `CustomEvent`\<`T`\>

#### Parameters

• **type**: `string`

• **eventInitDict?**: `CustomEventInit`\<`T`\>

#### Returns

`CustomEvent`\<`T`\>

#### prototype

> **prototype**: `CustomEvent`\<`any`\>

#### Defined in

[src/types/PlatformShim.ts:28](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/types/PlatformShim.ts#L28)

***

### fetch()

> **fetch**: (`input`, `init`?) => `Promise`\<`Response`\>

[MDN Reference](https://developer.mozilla.org/docs/Web/API/fetch)

#### Parameters

• **input**: `URL` \| `RequestInfo`

• **init?**: `RequestInit`

#### Returns

`Promise`\<`Response`\>

#### Defined in

[src/types/PlatformShim.ts:21](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/types/PlatformShim.ts#L21)

***

### File()

> **File**: (`fileBits`, `fileName`, `options`?) => `File`

#### Parameters

• **fileBits**: `BlobPart`[]

• **fileName**: `string`

• **options?**: `FilePropertyBag`

#### Returns

`File`

#### prototype

> **prototype**: `File`

#### Defined in

[src/types/PlatformShim.ts:26](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/types/PlatformShim.ts#L26)

***

### FormData()

> **FormData**: (`form`?, `submitter`?) => `FormData`

#### Parameters

• **form?**: `HTMLFormElement`

• **submitter?**: `null` \| `HTMLElement`

#### Returns

`FormData`

#### prototype

> **prototype**: `FormData`

#### Defined in

[src/types/PlatformShim.ts:25](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/types/PlatformShim.ts#L25)

***

### Headers()

> **Headers**: (`init`?) => `Headers`

#### Parameters

• **init?**: `HeadersInit`

#### Returns

`Headers`

#### prototype

> **prototype**: `Headers`

#### Defined in

[src/types/PlatformShim.ts:24](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/types/PlatformShim.ts#L24)

***

### info

> **info**: `object`

#### bugs\_url

> **bugs\_url**: `string`

#### repo\_url

> **repo\_url**: `string`

#### version

> **version**: `string`

#### Defined in

[src/types/PlatformShim.ts:11](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/types/PlatformShim.ts#L11)

***

### ReadableStream()

> **ReadableStream**: (`underlyingSource`, `strategy`?) => `ReadableStream`\<`Uint8Array`\>\<`R`\>(`underlyingSource`, `strategy`?) => `ReadableStream`\<`R`\>\<`R`\>(`underlyingSource`?, `strategy`?) => `ReadableStream`\<`R`\>

#### Parameters

• **underlyingSource**: `UnderlyingByteSource`

• **strategy?**

• **strategy.highWaterMark?**: `number`

#### Returns

`ReadableStream`\<`Uint8Array`\>

#### Parameters

• **underlyingSource**: `UnderlyingDefaultSource`\<`R`\>

• **strategy?**: `QueuingStrategy`\<`R`\>

#### Returns

`ReadableStream`\<`R`\>

#### Parameters

• **underlyingSource?**: `UnderlyingSource`\<`R`\>

• **strategy?**: `QueuingStrategy`\<`R`\>

#### Returns

`ReadableStream`\<`R`\>

#### prototype

> **prototype**: `ReadableStream`\<`any`\>

#### Defined in

[src/types/PlatformShim.ts:27](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/types/PlatformShim.ts#L27)

***

### Request()

> **Request**: (`input`, `init`?) => `Request`

#### Parameters

• **input**: `URL` \| `RequestInfo`

• **init?**: `RequestInit`

#### Returns

`Request`

#### prototype

> **prototype**: `Request`

#### Defined in

[src/types/PlatformShim.ts:22](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/types/PlatformShim.ts#L22)

***

### Response()

> **Response**: (`body`?, `init`?) => `Response`

#### Parameters

• **body?**: `null` \| `BodyInit`

• **init?**: `ResponseInit`

#### Returns

`Response`

#### prototype

> **prototype**: `Response`

#### error()

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/error_static)

##### Returns

`Response`

#### json()

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/json_static)

##### Parameters

• **data**: `any`

• **init?**: `ResponseInit`

##### Returns

`Response`

#### redirect()

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/redirect_static)

##### Parameters

• **url**: `string` \| `URL`

• **status?**: `number`

##### Returns

`Response`

#### Defined in

[src/types/PlatformShim.ts:23](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/types/PlatformShim.ts#L23)

***

### runtime

> **runtime**: [`Runtime`](../type-aliases/Runtime.md)

#### Defined in

[src/types/PlatformShim.ts:10](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/types/PlatformShim.ts#L10)

***

### server

> **server**: `boolean`

#### Defined in

[src/types/PlatformShim.ts:16](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/types/PlatformShim.ts#L16)

## Methods

### eval()

> **eval**(`code`, `env`): `unknown`

#### Parameters

• **code**: `string`

• **env**: `Record`\<`string`, [`VMPrimative`](../type-aliases/VMPrimative.md)\>

#### Returns

`unknown`

#### Defined in

[src/types/PlatformShim.ts:20](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/types/PlatformShim.ts#L20)

***

### sha1Hash()

> **sha1Hash**(`data`): `Promise`\<`string`\>

#### Parameters

• **data**: `string`

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/types/PlatformShim.ts:18](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/types/PlatformShim.ts#L18)

***

### uuidv4()

> **uuidv4**(): `string`

#### Returns

`string`

#### Defined in

[src/types/PlatformShim.ts:19](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/types/PlatformShim.ts#L19)
