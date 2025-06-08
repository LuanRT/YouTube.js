[youtubei.js](../../../README.md) / [Managers](../README.md) / AccountManager

# Class: AccountManager

## Constructors

### new AccountManager()

> **new AccountManager**(`actions`): [`AccountManager`](AccountManager.md)

#### Parameters

• **actions**: [`Actions`](../../../classes/Actions.md)

#### Returns

[`AccountManager`](AccountManager.md)

#### Defined in

[src/core/managers/AccountManager.ts:13](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/managers/AccountManager.ts#L13)

## Methods

### getInfo()

#### getInfo(all)

> **getInfo**(`all`): `Promise`\<[`AccountItem`](../../YTNodes/classes/AccountItem.md)[]\>

Retrieves the list of channels belonging to the signed-in account. Only useful when signed in through cookie. If signed in through OAuth, you will get the active channel only.

##### Parameters

• **all**: `true`

##### Returns

`Promise`\<[`AccountItem`](../../YTNodes/classes/AccountItem.md)[]\>

##### Defined in

[src/core/managers/AccountManager.ts:20](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/managers/AccountManager.ts#L20)

#### getInfo(all)

> **getInfo**(`all`?): `Promise`\<[`AccountInfo`](../../YT/classes/AccountInfo.md)\>

Retrieves the active channel info for the signed-in account. Throws error if `on_behalf_of_user` was used to create the Innertube instance; use `getInfo(true)` instead.

##### Parameters

• **all?**: `false`

##### Returns

`Promise`\<[`AccountInfo`](../../YT/classes/AccountInfo.md)\>

##### Defined in

[src/core/managers/AccountManager.ts:24](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/managers/AccountManager.ts#L24)

***

### getSettings()

> **getSettings**(): `Promise`\<[`Settings`](../../YT/classes/Settings.md)\>

Gets YouTube settings.

#### Returns

`Promise`\<[`Settings`](../../YT/classes/Settings.md)\>

#### Defined in

[src/core/managers/AccountManager.ts:50](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/managers/AccountManager.ts#L50)
