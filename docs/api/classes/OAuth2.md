[youtubei.js](../README.md) / OAuth2

# Class: OAuth2

## Constructors

### new OAuth2()

> **new OAuth2**(`session`): [`OAuth2`](OAuth2.md)

#### Parameters

• **session**: [`Session`](Session.md)

#### Returns

[`OAuth2`](OAuth2.md)

#### Defined in

[src/core/OAuth2.ts:46](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/OAuth2.ts#L46)

## Properties

### AUTH\_SERVER\_CODE\_URL

> **AUTH\_SERVER\_CODE\_URL**: `URL`

#### Defined in

[src/core/OAuth2.ts:39](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/OAuth2.ts#L39)

***

### AUTH\_SERVER\_REVOKE\_TOKEN\_URL

> **AUTH\_SERVER\_REVOKE\_TOKEN\_URL**: `URL`

#### Defined in

[src/core/OAuth2.ts:41](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/OAuth2.ts#L41)

***

### AUTH\_SERVER\_TOKEN\_URL

> **AUTH\_SERVER\_TOKEN\_URL**: `URL`

#### Defined in

[src/core/OAuth2.ts:40](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/OAuth2.ts#L40)

***

### client\_id

> **client\_id**: `undefined` \| [`OAuth2ClientID`](../type-aliases/OAuth2ClientID.md)

#### Defined in

[src/core/OAuth2.ts:43](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/OAuth2.ts#L43)

***

### oauth2\_tokens

> **oauth2\_tokens**: `undefined` \| [`OAuth2Tokens`](../type-aliases/OAuth2Tokens.md)

#### Defined in

[src/core/OAuth2.ts:44](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/OAuth2.ts#L44)

***

### YTTV\_URL

> **YTTV\_URL**: `URL`

#### Defined in

[src/core/OAuth2.ts:38](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/OAuth2.ts#L38)

## Methods

### cacheCredentials()

> **cacheCredentials**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/core/OAuth2.ts:105](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/OAuth2.ts#L105)

***

### getClientID()

> **getClientID**(): `Promise`\<[`OAuth2ClientID`](../type-aliases/OAuth2ClientID.md)\>

#### Returns

`Promise`\<[`OAuth2ClientID`](../type-aliases/OAuth2ClientID.md)\>

#### Defined in

[src/core/OAuth2.ts:268](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/OAuth2.ts#L268)

***

### getDeviceAndUserCode()

> **getDeviceAndUserCode**(): `Promise`\<[`DeviceAndUserCode`](../type-aliases/DeviceAndUserCode.md)\>

#### Returns

`Promise`\<[`DeviceAndUserCode`](../type-aliases/DeviceAndUserCode.md)\>

#### Defined in

[src/core/OAuth2.ts:236](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/OAuth2.ts#L236)

***

### init()

> **init**(`tokens`?): `Promise`\<`void`\>

#### Parameters

• **tokens?**: [`OAuth2Tokens`](../type-aliases/OAuth2Tokens.md)

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/core/OAuth2.ts:54](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/OAuth2.ts#L54)

***

### pollForAccessToken()

> **pollForAccessToken**(`device_and_user_code`): `void`

#### Parameters

• **device\_and\_user\_code**: [`DeviceAndUserCode`](../type-aliases/DeviceAndUserCode.md)

#### Returns

`void`

#### Defined in

[src/core/OAuth2.ts:130](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/OAuth2.ts#L130)

***

### refreshAccessToken()

> **refreshAccessToken**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/core/OAuth2.ts:197](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/OAuth2.ts#L197)

***

### removeCache()

> **removeCache**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/core/OAuth2.ts:126](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/OAuth2.ts#L126)

***

### revokeCredentials()

> **revokeCredentials**(): `Promise`\<`undefined` \| `Response`\>

#### Returns

`Promise`\<`undefined` \| `Response`\>

#### Defined in

[src/core/OAuth2.ts:185](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/OAuth2.ts#L185)

***

### setTokens()

> **setTokens**(`tokens`): `void`

#### Parameters

• **tokens**: [`OAuth2Tokens`](../type-aliases/OAuth2Tokens.md)

#### Returns

`void`

#### Defined in

[src/core/OAuth2.ts:85](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/OAuth2.ts#L85)

***

### shouldRefreshToken()

> **shouldRefreshToken**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/core/OAuth2.ts:313](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/OAuth2.ts#L313)

***

### validateTokens()

> **validateTokens**(`tokens`): `boolean`

#### Parameters

• **tokens**: [`OAuth2Tokens`](../type-aliases/OAuth2Tokens.md)

#### Returns

`boolean`

#### Defined in

[src/core/OAuth2.ts:319](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/OAuth2.ts#L319)
