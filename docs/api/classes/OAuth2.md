[youtubei.js](../README.md) / OAuth2

# Class: OAuth2

Defined in: [src/core/OAuth2.ts:35](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/core/OAuth2.ts#L35)

## Constructors

### Constructor

> **new OAuth2**(`session`): `OAuth2`

Defined in: [src/core/OAuth2.ts:46](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/core/OAuth2.ts#L46)

#### Parameters

##### session

[`Session`](Session.md)

#### Returns

`OAuth2`

## Properties

### AUTH\_SERVER\_CODE\_URL

> **AUTH\_SERVER\_CODE\_URL**: `URL`

Defined in: [src/core/OAuth2.ts:39](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/core/OAuth2.ts#L39)

***

### AUTH\_SERVER\_REVOKE\_TOKEN\_URL

> **AUTH\_SERVER\_REVOKE\_TOKEN\_URL**: `URL`

Defined in: [src/core/OAuth2.ts:41](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/core/OAuth2.ts#L41)

***

### AUTH\_SERVER\_TOKEN\_URL

> **AUTH\_SERVER\_TOKEN\_URL**: `URL`

Defined in: [src/core/OAuth2.ts:40](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/core/OAuth2.ts#L40)

***

### client\_id

> **client\_id**: [`OAuth2ClientID`](../type-aliases/OAuth2ClientID.md) \| `undefined`

Defined in: [src/core/OAuth2.ts:43](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/core/OAuth2.ts#L43)

***

### oauth2\_tokens

> **oauth2\_tokens**: [`OAuth2Tokens`](../type-aliases/OAuth2Tokens.md) \| `undefined`

Defined in: [src/core/OAuth2.ts:44](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/core/OAuth2.ts#L44)

***

### YTTV\_URL

> **YTTV\_URL**: `URL`

Defined in: [src/core/OAuth2.ts:38](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/core/OAuth2.ts#L38)

## Methods

### cacheCredentials()

> **cacheCredentials**(): `Promise`\<`void`\>

Defined in: [src/core/OAuth2.ts:105](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/core/OAuth2.ts#L105)

#### Returns

`Promise`\<`void`\>

***

### getClientID()

> **getClientID**(): `Promise`\<[`OAuth2ClientID`](../type-aliases/OAuth2ClientID.md)\>

Defined in: [src/core/OAuth2.ts:268](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/core/OAuth2.ts#L268)

#### Returns

`Promise`\<[`OAuth2ClientID`](../type-aliases/OAuth2ClientID.md)\>

***

### getDeviceAndUserCode()

> **getDeviceAndUserCode**(): `Promise`\<[`DeviceAndUserCode`](../type-aliases/DeviceAndUserCode.md)\>

Defined in: [src/core/OAuth2.ts:236](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/core/OAuth2.ts#L236)

#### Returns

`Promise`\<[`DeviceAndUserCode`](../type-aliases/DeviceAndUserCode.md)\>

***

### init()

> **init**(`tokens?`): `Promise`\<`void`\>

Defined in: [src/core/OAuth2.ts:54](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/core/OAuth2.ts#L54)

#### Parameters

##### tokens?

[`OAuth2Tokens`](../type-aliases/OAuth2Tokens.md)

#### Returns

`Promise`\<`void`\>

***

### pollForAccessToken()

> **pollForAccessToken**(`device_and_user_code`): `void`

Defined in: [src/core/OAuth2.ts:130](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/core/OAuth2.ts#L130)

#### Parameters

##### device\_and\_user\_code

[`DeviceAndUserCode`](../type-aliases/DeviceAndUserCode.md)

#### Returns

`void`

***

### refreshAccessToken()

> **refreshAccessToken**(): `Promise`\<`void`\>

Defined in: [src/core/OAuth2.ts:197](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/core/OAuth2.ts#L197)

#### Returns

`Promise`\<`void`\>

***

### removeCache()

> **removeCache**(): `Promise`\<`void`\>

Defined in: [src/core/OAuth2.ts:126](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/core/OAuth2.ts#L126)

#### Returns

`Promise`\<`void`\>

***

### revokeCredentials()

> **revokeCredentials**(): `Promise`\<`Response` \| `undefined`\>

Defined in: [src/core/OAuth2.ts:185](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/core/OAuth2.ts#L185)

#### Returns

`Promise`\<`Response` \| `undefined`\>

***

### setTokens()

> **setTokens**(`tokens`): `void`

Defined in: [src/core/OAuth2.ts:85](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/core/OAuth2.ts#L85)

#### Parameters

##### tokens

[`OAuth2Tokens`](../type-aliases/OAuth2Tokens.md)

#### Returns

`void`

***

### shouldRefreshToken()

> **shouldRefreshToken**(): `boolean`

Defined in: [src/core/OAuth2.ts:313](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/core/OAuth2.ts#L313)

#### Returns

`boolean`

***

### validateTokens()

> **validateTokens**(`tokens`): `boolean`

Defined in: [src/core/OAuth2.ts:319](https://github.com/LuanRT/YouTube.js/blob/41b810629b3dc2bbebfa322c0c452c3f7303e993/src/core/OAuth2.ts#L319)

#### Parameters

##### tokens

[`OAuth2Tokens`](../type-aliases/OAuth2Tokens.md)

#### Returns

`boolean`
