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

[src/core/managers/AccountManager.ts:22](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/managers/AccountManager.ts#L22)

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

[src/core/managers/AccountManager.ts:16](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/managers/AccountManager.ts#L16)

## Methods

### getAnalytics()

> **getAnalytics**(): `Promise`\<[`Analytics`](../../YT/classes/Analytics.md)\>

Retrieves basic channel analytics.

#### Returns

`Promise`\<[`Analytics`](../../YT/classes/Analytics.md)\>

#### Defined in

[src/core/managers/AccountManager.ts:107](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/managers/AccountManager.ts#L107)

***

### getInfo()

> **getInfo**(): `Promise`\<[`AccountInfo`](../../YT/classes/AccountInfo.md)\>

Retrieves channel info.

#### Returns

`Promise`\<[`AccountInfo`](../../YT/classes/AccountInfo.md)\>

#### Defined in

[src/core/managers/AccountManager.ts:66](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/managers/AccountManager.ts#L66)

***

### getSettings()

> **getSettings**(): `Promise`\<[`Settings`](../../YT/classes/Settings.md)\>

Opens YouTube settings.

#### Returns

`Promise`\<[`Settings`](../../YT/classes/Settings.md)\>

#### Defined in

[src/core/managers/AccountManager.ts:95](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/managers/AccountManager.ts#L95)

***

### getTimeWatched()

> **getTimeWatched**(): `Promise`\<[`TimeWatched`](../../YT/classes/TimeWatched.md)\>

Retrieves time watched statistics.

#### Returns

`Promise`\<[`TimeWatched`](../../YT/classes/TimeWatched.md)\>

#### Defined in

[src/core/managers/AccountManager.ts:81](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/managers/AccountManager.ts#L81)
