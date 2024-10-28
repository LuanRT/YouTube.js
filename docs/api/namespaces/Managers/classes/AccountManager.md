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

[src/core/managers/AccountManager.ts:23](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/core/managers/AccountManager.ts#L23)

## Properties

### channel

> **channel**: `object`

#### editDescription()

> **editDescription**: (`new_description`) => `Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

##### Parameters

• **new\_description**: `string`

##### Returns

`Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

#### editName()

> **editName**: (`new_name`) => `Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

##### Parameters

• **new\_name**: `string`

##### Returns

`Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

#### getBasicAnalytics()

> **getBasicAnalytics**: () => `Promise`\<[`Analytics`](../../YT/classes/Analytics.md)\>

##### Returns

`Promise`\<[`Analytics`](../../YT/classes/Analytics.md)\>

#### Defined in

[src/core/managers/AccountManager.ts:17](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/core/managers/AccountManager.ts#L17)

## Methods

### ~~getAnalytics()~~

> **getAnalytics**(): `Promise`\<[`Analytics`](../../YT/classes/Analytics.md)\>

Retrieves basic channel analytics.

#### Returns

`Promise`\<[`Analytics`](../../YT/classes/Analytics.md)\>

#### Deprecated

This method is deprecated and will be removed in a future release.

#### Defined in

[src/core/managers/AccountManager.ts:113](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/core/managers/AccountManager.ts#L113)

***

### getInfo()

> **getInfo**(): `Promise`\<[`AccountInfo`](../../YT/classes/AccountInfo.md)\>

Retrieves channel info.

#### Returns

`Promise`\<[`AccountInfo`](../../YT/classes/AccountInfo.md)\>

#### Defined in

[src/core/managers/AccountManager.ts:70](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/core/managers/AccountManager.ts#L70)

***

### getSettings()

> **getSettings**(): `Promise`\<[`Settings`](../../YT/classes/Settings.md)\>

Opens YouTube settings.

#### Returns

`Promise`\<[`Settings`](../../YT/classes/Settings.md)\>

#### Defined in

[src/core/managers/AccountManager.ts:100](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/core/managers/AccountManager.ts#L100)

***

### ~~getTimeWatched()~~

> **getTimeWatched**(): `Promise`\<[`TimeWatched`](../../YT/classes/TimeWatched.md)\>

Retrieves time watched statistics.

#### Returns

`Promise`\<[`TimeWatched`](../../YT/classes/TimeWatched.md)\>

#### Deprecated

This method is deprecated and will be removed in a future release.

#### Defined in

[src/core/managers/AccountManager.ts:86](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/core/managers/AccountManager.ts#L86)
