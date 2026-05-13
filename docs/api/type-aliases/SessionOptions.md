[youtubei.js](../README.md) / SessionOptions

# Type Alias: SessionOptions

> **SessionOptions** = `object`

Defined in: [src/core/Session.ts:128](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/core/Session.ts#L128)

## Properties

### account\_index?

> `optional` **account\_index**: `number`

Defined in: [src/core/Session.ts:146](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/core/Session.ts#L146)

The account index to use. This is useful if you have multiple accounts logged in.

**NOTE:** Only works if you are signed in with cookies.

***

### cache?

> `optional` **cache**: [`ICache`](../youtubei.js/namespaces/Types/interfaces/ICache.md)

Defined in: [src/core/Session.ts:197](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/core/Session.ts#L197)

Used to cache algorithms, session data, and OAuth2 tokens.

***

### client\_type?

> `optional` **client\_type**: [`ClientType`](../enumerations/ClientType.md)

Defined in: [src/core/Session.ts:189](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/core/Session.ts#L189)

InnerTube client type.

***

### cookie?

> `optional` **cookie**: `string`

Defined in: [src/core/Session.ts:201](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/core/Session.ts#L201)

YouTube cookies.

***

### device\_category?

> `optional` **device\_category**: [`DeviceCategory`](../youtubei.js/namespaces/Utils/type-aliases/DeviceCategory.md)

Defined in: [src/core/Session.ts:185](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/core/Session.ts#L185)

Platform to use for the session.

***

### enable\_safety\_mode?

> `optional` **enable\_safety\_mode**: `boolean`

Defined in: [src/core/Session.ts:160](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/core/Session.ts#L160)

Specifies whether to enable safety mode. This will prevent the session from loading any potentially unsafe content.

***

### enable\_session\_cache?

> `optional` **enable\_session\_cache**: `boolean`

Defined in: [src/core/Session.ts:181](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/core/Session.ts#L181)

Specifies whether the session data should be cached.

***

### fail\_fast?

> `optional` **fail\_fast**: `boolean`

Defined in: [src/core/Session.ts:177](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/core/Session.ts#L177)

If set to `true`, session creation will fail if it's not possible to retrieve session data from YouTube.
If `false`, a local fallback will be used.

***

### fetch?

> `optional` **fetch**: [`FetchFunction`](../youtubei.js/namespaces/Types/type-aliases/FetchFunction.md)

Defined in: [src/core/Session.ts:210](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/core/Session.ts#L210)

Fetch function to use.

***

### generate\_session\_locally?

> `optional` **generate\_session\_locally**: `boolean`

Defined in: [src/core/Session.ts:172](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/core/Session.ts#L172)

Specifies whether to generate the session data locally or retrieve it from YouTube.
This can be useful if you need more performance.

**NOTE:** If you are using the cache option and a session has already been generated, this will be ignored.
If you want to force a new session to be generated, you must clear the cache or disable session caching.

***

### lang?

> `optional` **lang**: `string`

Defined in: [src/core/Session.ts:132](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/core/Session.ts#L132)

Language.

***

### location?

> `optional` **location**: `string`

Defined in: [src/core/Session.ts:136](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/core/Session.ts#L136)

Geolocation.

***

### on\_behalf\_of\_user?

> `optional` **on\_behalf\_of\_user**: `string`

Defined in: [src/core/Session.ts:150](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/core/Session.ts#L150)

Specify the Page ID of the YouTube profile/channel to use, if the logged-in account has multiple profiles.

***

### player\_id?

> `optional` **player\_id**: `string`

Defined in: [src/core/Session.ts:220](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/core/Session.ts#L220)

Player ID override.
In most cases, this isn't necessary; but when YouTube introduces breaking changes,
forcing an older Player ID can help work around temporary issues.

***

### po\_token?

> `optional` **po\_token**: `string`

Defined in: [src/core/Session.ts:214](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/core/Session.ts#L214)

Session bound Proof of Origin Token. This is an attestation token generated by BotGuard/DroidGuard. It is used to confirm that the request is coming from a real client.

***

### retrieve\_innertube\_config?

> `optional` **retrieve\_innertube\_config**: `boolean`

Defined in: [src/core/Session.ts:164](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/core/Session.ts#L164)

Specifies whether to retrieve the InnerTube config. Useful for "onesie" requests.

***

### retrieve\_player?

> `optional` **retrieve\_player**: `boolean`

Defined in: [src/core/Session.ts:156](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/core/Session.ts#L156)

Specifies whether to retrieve the JS player. Disabling this will make session creation faster.

**NOTE:** Deciphering formats is not possible without the JS player.

***

### timezone?

> `optional` **timezone**: `string`

Defined in: [src/core/Session.ts:193](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/core/Session.ts#L193)

The time zone.

***

### user\_agent?

> `optional` **user\_agent**: `string`

Defined in: [src/core/Session.ts:140](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/core/Session.ts#L140)

User agent (InnerTube requests only).

***

### visitor\_data?

> `optional` **visitor\_data**: `string`

Defined in: [src/core/Session.ts:206](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/core/Session.ts#L206)

Setting this to a valid and persistent visitor data string will allow YouTube to give this session tailored content even when not logged in.
A good way to get a valid one is by either grabbing it from a browser or calling InnerTube's `/visitor_id` endpoint.
