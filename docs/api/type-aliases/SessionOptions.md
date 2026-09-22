[youtubei.js](../README.md) / SessionOptions

# Type Alias: SessionOptions

> **SessionOptions** = `object`

Defined in: [src/core/Session.ts:129](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/Session.ts#L129)

## Properties

### account\_index?

> `optional` **account\_index?**: `number`

Defined in: [src/core/Session.ts:147](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/Session.ts#L147)

The account index to use. This is useful if you have multiple accounts logged in.

**NOTE:** Only works if you are signed in with cookies.

***

### cache?

> `optional` **cache?**: [`ICache`](../youtubei.js/namespaces/Types/interfaces/ICache.md)

Defined in: [src/core/Session.ts:198](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/Session.ts#L198)

Used to cache algorithms, session data, and OAuth2 tokens.

***

### client\_type?

> `optional` **client\_type?**: [`ClientType`](../enumerations/ClientType.md)

Defined in: [src/core/Session.ts:190](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/Session.ts#L190)

InnerTube client type.

***

### cookie?

> `optional` **cookie?**: `string`

Defined in: [src/core/Session.ts:202](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/Session.ts#L202)

YouTube cookies.

***

### device\_category?

> `optional` **device\_category?**: [`DeviceCategory`](../youtubei.js/namespaces/Utils/type-aliases/DeviceCategory.md)

Defined in: [src/core/Session.ts:186](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/Session.ts#L186)

Platform to use for the session.

***

### enable\_safety\_mode?

> `optional` **enable\_safety\_mode?**: `boolean`

Defined in: [src/core/Session.ts:161](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/Session.ts#L161)

Specifies whether to enable safety mode. This will prevent the session from loading any potentially unsafe content.

***

### enable\_session\_cache?

> `optional` **enable\_session\_cache?**: `boolean`

Defined in: [src/core/Session.ts:182](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/Session.ts#L182)

Specifies whether the session data should be cached.

***

### fail\_fast?

> `optional` **fail\_fast?**: `boolean`

Defined in: [src/core/Session.ts:178](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/Session.ts#L178)

If set to `true`, session creation will fail if it's not possible to retrieve session data from YouTube.
If `false`, a local fallback will be used.

***

### fetch?

> `optional` **fetch?**: [`FetchFunction`](../youtubei.js/namespaces/Types/type-aliases/FetchFunction.md)

Defined in: [src/core/Session.ts:211](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/Session.ts#L211)

Fetch function to use.

***

### generate\_session\_locally?

> `optional` **generate\_session\_locally?**: `boolean`

Defined in: [src/core/Session.ts:173](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/Session.ts#L173)

Specifies whether to generate the session data locally or retrieve it from YouTube.
This can be useful if you need more performance.

**NOTE:** If you are using the cache option and a session has already been generated, this will be ignored.
If you want to force a new session to be generated, you must clear the cache or disable session caching.

***

### lang?

> `optional` **lang?**: `string`

Defined in: [src/core/Session.ts:133](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/Session.ts#L133)

Language.

***

### location?

> `optional` **location?**: `string`

Defined in: [src/core/Session.ts:137](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/Session.ts#L137)

Geolocation.

***

### on\_behalf\_of\_user?

> `optional` **on\_behalf\_of\_user?**: `string`

Defined in: [src/core/Session.ts:151](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/Session.ts#L151)

Specify the Page ID of the YouTube profile/channel to use, if the logged-in account has multiple profiles.

***

### player\_id?

> `optional` **player\_id?**: `string`

Defined in: [src/core/Session.ts:221](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/Session.ts#L221)

Player ID override.
In most cases, this isn't necessary; but when YouTube introduces breaking changes,
forcing an older Player ID can help work around temporary issues.

***

### po\_token?

> `optional` **po\_token?**: `string`

Defined in: [src/core/Session.ts:215](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/Session.ts#L215)

Session bound Proof of Origin Token. This is an attestation token generated by BotGuard/DroidGuard. It is used to confirm that the request is coming from a real client.

***

### retrieve\_innertube\_config?

> `optional` **retrieve\_innertube\_config?**: `boolean`

Defined in: [src/core/Session.ts:165](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/Session.ts#L165)

Specifies whether to retrieve the InnerTube config. Useful for "onesie" requests.

***

### retrieve\_player?

> `optional` **retrieve\_player?**: `boolean`

Defined in: [src/core/Session.ts:157](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/Session.ts#L157)

Specifies whether to retrieve the JS player. Disabling this will make session creation faster.

**NOTE:** Deciphering formats is not possible without the JS player.

***

### timezone?

> `optional` **timezone?**: `string`

Defined in: [src/core/Session.ts:194](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/Session.ts#L194)

The time zone.

***

### user\_agent?

> `optional` **user\_agent?**: `string`

Defined in: [src/core/Session.ts:141](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/Session.ts#L141)

User agent (InnerTube requests only).

***

### visitor\_data?

> `optional` **visitor\_data?**: `string`

Defined in: [src/core/Session.ts:207](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/core/Session.ts#L207)

Setting this to a valid and persistent visitor data string will allow YouTube to give this session tailored content even when not logged in.
A good way to get a valid one is by either grabbing it from a browser or calling InnerTube's `/visitor_id` endpoint.
