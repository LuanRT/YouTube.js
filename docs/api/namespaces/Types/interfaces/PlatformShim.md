[youtubei.js](../../../README.md) / [Types](../README.md) / PlatformShim

# Interface: PlatformShim

## Properties

### Cache

> **Cache**: [`ICacheConstructor`](ICacheConstructor.md)

#### Defined in

[src/types/PlatformShim.ts:15](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/types/PlatformShim.ts#L15)

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

[src/types/PlatformShim.ts:26](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/types/PlatformShim.ts#L26)

***

### fetch()

> **fetch**: (`input`, `init`?) => `Promise`\<`Response`\>(`input`, `init`?) => `Promise`\<`Response`\>

[MDN Reference](https://developer.mozilla.org/docs/Web/API/fetch)

#### Parameters

• **input**: `URL` \| `RequestInfo`

• **init?**: `RequestInit`

#### Returns

`Promise`\<`Response`\>

#### Parameters

• **input**: `string` \| `URL` \| `Request`

• **init?**: `RequestInit`

#### Returns

`Promise`\<`Response`\>

#### Defined in

[src/types/PlatformShim.ts:19](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/types/PlatformShim.ts#L19)

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

[src/types/PlatformShim.ts:24](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/types/PlatformShim.ts#L24)

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

[src/types/PlatformShim.ts:23](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/types/PlatformShim.ts#L23)

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

[src/types/PlatformShim.ts:22](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/types/PlatformShim.ts#L22)

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

[src/types/PlatformShim.ts:25](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/types/PlatformShim.ts#L25)

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

[src/types/PlatformShim.ts:20](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/types/PlatformShim.ts#L20)

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

[src/types/PlatformShim.ts:21](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/types/PlatformShim.ts#L21)

***

### runtime

> **runtime**: [`Runtime`](../type-aliases/Runtime.md)

#### Defined in

[src/types/PlatformShim.ts:13](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/types/PlatformShim.ts#L13)

***

### server

> **server**: `boolean`

#### Defined in

[src/types/PlatformShim.ts:14](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/types/PlatformShim.ts#L14)

## Methods

### eval()

> **eval**(`data`, `env`): [`EvalResult`](../type-aliases/EvalResult.md) \| `Promise`\<[`EvalResult`](../type-aliases/EvalResult.md)\>

#### Parameters

• **data**: [`BuildScriptResult`](BuildScriptResult.md)

• **env**: `Record`\<`string`, [`VMPrimative`](../type-aliases/VMPrimative.md)\>

#### Returns

[`EvalResult`](../type-aliases/EvalResult.md) \| `Promise`\<[`EvalResult`](../type-aliases/EvalResult.md)\>

#### Defined in

[src/types/PlatformShim.ts:18](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/types/PlatformShim.ts#L18)

***

### sha1Hash()

> **sha1Hash**(`data`): `Promise`\<`string`\>

#### Parameters

• **data**: `string`

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/types/PlatformShim.ts:16](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/types/PlatformShim.ts#L16)

***

### uuidv4()

> **uuidv4**(): `string`

#### Returns

`string`

#### Defined in

[src/types/PlatformShim.ts:17](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/types/PlatformShim.ts#L17)
