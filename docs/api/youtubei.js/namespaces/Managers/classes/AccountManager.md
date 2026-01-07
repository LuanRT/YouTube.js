[youtubei.js](../../../../README.md) / [Managers](../README.md) / AccountManager

# Class: AccountManager

Defined in: [src/core/managers/AccountManager.ts:10](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/managers/AccountManager.ts#L10)

## Constructors

### Constructor

> **new AccountManager**(`actions`): `AccountManager`

Defined in: [src/core/managers/AccountManager.ts:13](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/managers/AccountManager.ts#L13)

#### Parameters

##### actions

[`Actions`](../../../../classes/Actions.md)

#### Returns

`AccountManager`

## Methods

### getInfo()

#### Call Signature

> **getInfo**(`all`): `Promise`\<[`AccountItem`](../../YTNodes/classes/AccountItem.md)[]\>

Defined in: [src/core/managers/AccountManager.ts:20](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/managers/AccountManager.ts#L20)

Retrieves the list of channels belonging to the signed-in account. Only useful when signed in through cookie. If signed in through OAuth, you will get the active channel only.

##### Parameters

###### all

`true`

##### Returns

`Promise`\<[`AccountItem`](../../YTNodes/classes/AccountItem.md)[]\>

#### Call Signature

> **getInfo**(`all?`): `Promise`\<[`AccountInfo`](../../YT/classes/AccountInfo.md)\>

Defined in: [src/core/managers/AccountManager.ts:24](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/managers/AccountManager.ts#L24)

Retrieves the active channel info for the signed-in account. Throws error if `on_behalf_of_user` was used to create the Innertube instance; use `getInfo(true)` instead.

##### Parameters

###### all?

`false`

##### Returns

`Promise`\<[`AccountInfo`](../../YT/classes/AccountInfo.md)\>

***

### getSettings()

> **getSettings**(): `Promise`\<[`Settings`](../../YT/classes/Settings.md)\>

Defined in: [src/core/managers/AccountManager.ts:50](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/managers/AccountManager.ts#L50)

Gets YouTube settings.

#### Returns

`Promise`\<[`Settings`](../../YT/classes/Settings.md)\>
