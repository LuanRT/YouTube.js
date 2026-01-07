[youtubei.js](../../../../README.md) / [YT](../README.md) / Settings

# Class: Settings

Defined in: [src/parser/youtube/Settings.ts:19](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/Settings.ts#L19)

## Constructors

### Constructor

> **new Settings**(`actions`, `response`): `Settings`

Defined in: [src/parser/youtube/Settings.ts:27](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/Settings.ts#L27)

#### Parameters

##### actions

[`Actions`](../../../../classes/Actions.md)

##### response

[`ApiResponse`](../../../../interfaces/ApiResponse.md)

#### Returns

`Settings`

## Properties

### introduction?

> `optional` **introduction**: [`PageIntroduction`](../../YTNodes/classes/PageIntroduction.md)

Defined in: [src/parser/youtube/Settings.ts:24](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/Settings.ts#L24)

***

### sections

> **sections**: `object`[] \| `undefined`

Defined in: [src/parser/youtube/Settings.ts:25](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/Settings.ts#L25)

***

### sidebar?

> `optional` **sidebar**: [`SettingsSidebar`](../../YTNodes/classes/SettingsSidebar.md)

Defined in: [src/parser/youtube/Settings.ts:23](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/Settings.ts#L23)

## Accessors

### page

#### Get Signature

> **get** **page**(): [`IBrowseResponse`](../../../../type-aliases/IBrowseResponse.md)

Defined in: [src/parser/youtube/Settings.ts:131](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/Settings.ts#L131)

##### Returns

[`IBrowseResponse`](../../../../type-aliases/IBrowseResponse.md)

***

### setting\_options

#### Get Signature

> **get** **setting\_options**(): `string`[]

Defined in: [src/parser/youtube/Settings.ts:104](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/Settings.ts#L104)

Returns settings available in the page.

##### Returns

`string`[]

***

### sidebar\_items

#### Get Signature

> **get** **sidebar\_items**(): `string`[]

Defined in: [src/parser/youtube/Settings.ts:124](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/Settings.ts#L124)

Returns options available in the sidebar.

##### Returns

`string`[]

## Methods

### getSettingOption()

> **getSettingOption**(`name`): [`SettingsSwitch`](../../YTNodes/classes/SettingsSwitch.md)

Defined in: [src/parser/youtube/Settings.ts:78](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/Settings.ts#L78)

Finds a setting by name and returns it. Use [setting\_options](#setting_options) to see available options.

#### Parameters

##### name

`string`

#### Returns

[`SettingsSwitch`](../../YTNodes/classes/SettingsSwitch.md)

***

### selectSidebarItem()

> **selectSidebarItem**(`target_item`): `Promise`\<`Settings`\>

Defined in: [src/parser/youtube/Settings.ts:54](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/Settings.ts#L54)

Selects an item from the sidebar menu. Use [sidebar\_items](#sidebar_items) to see available items.

#### Parameters

##### target\_item

`string` | [`CompactLink`](../../YTNodes/classes/CompactLink.md)

#### Returns

`Promise`\<`Settings`\>
