[youtubei.js](../../../README.md) / [YT](../README.md) / Settings

# Class: Settings

## Constructors

### new Settings()

> **new Settings**(`actions`, `response`): [`Settings`](Settings.md)

#### Parameters

• **actions**: [`Actions`](../../../classes/Actions.md)

• **response**: [`ApiResponse`](../../../interfaces/ApiResponse.md)

#### Returns

[`Settings`](Settings.md)

#### Defined in

[src/parser/youtube/Settings.ts:27](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/youtube/Settings.ts#L27)

## Properties

### introduction?

> `optional` **introduction**: [`PageIntroduction`](../../YTNodes/classes/PageIntroduction.md)

#### Defined in

[src/parser/youtube/Settings.ts:24](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/youtube/Settings.ts#L24)

***

### sections

> **sections**: `undefined` \| `object`[]

#### Defined in

[src/parser/youtube/Settings.ts:25](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/youtube/Settings.ts#L25)

***

### sidebar?

> `optional` **sidebar**: [`SettingsSidebar`](../../YTNodes/classes/SettingsSidebar.md)

#### Defined in

[src/parser/youtube/Settings.ts:23](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/youtube/Settings.ts#L23)

## Accessors

### page

> `get` **page**(): [`IBrowseResponse`](../../APIResponseTypes/type-aliases/IBrowseResponse.md)

#### Returns

[`IBrowseResponse`](../../APIResponseTypes/type-aliases/IBrowseResponse.md)

#### Defined in

[src/parser/youtube/Settings.ts:131](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/youtube/Settings.ts#L131)

***

### setting\_options

> `get` **setting\_options**(): `string`[]

Returns settings available in the page.

#### Returns

`string`[]

#### Defined in

[src/parser/youtube/Settings.ts:104](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/youtube/Settings.ts#L104)

***

### sidebar\_items

> `get` **sidebar\_items**(): `string`[]

Returns options available in the sidebar.

#### Returns

`string`[]

#### Defined in

[src/parser/youtube/Settings.ts:124](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/youtube/Settings.ts#L124)

## Methods

### getSettingOption()

> **getSettingOption**(`name`): [`SettingsSwitch`](../../YTNodes/classes/SettingsSwitch.md)

Finds a setting by name and returns it. Use [setting_options](Settings.md#setting_options) to see available options.

#### Parameters

• **name**: `string`

#### Returns

[`SettingsSwitch`](../../YTNodes/classes/SettingsSwitch.md)

#### Defined in

[src/parser/youtube/Settings.ts:78](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/youtube/Settings.ts#L78)

***

### selectSidebarItem()

> **selectSidebarItem**(`target_item`): `Promise`\<[`Settings`](Settings.md)\>

Selects an item from the sidebar menu. Use [sidebar_items](Settings.md#sidebar_items) to see available items.

#### Parameters

• **target\_item**: `string` \| [`CompactLink`](../../YTNodes/classes/CompactLink.md)

#### Returns

`Promise`\<[`Settings`](Settings.md)\>

#### Defined in

[src/parser/youtube/Settings.ts:54](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/youtube/Settings.ts#L54)
