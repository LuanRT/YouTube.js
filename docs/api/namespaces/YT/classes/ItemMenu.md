[youtubei.js](../../../README.md) / [YT](../README.md) / ItemMenu

# Class: ItemMenu

## Constructors

### new ItemMenu()

> **new ItemMenu**(`data`, `actions`): [`ItemMenu`](ItemMenu.md)

#### Parameters

• **data**: [`IParsedResponse`](../../APIResponseTypes/interfaces/IParsedResponse.md)

• **actions**: [`Actions`](../../../classes/Actions.md)

#### Returns

[`ItemMenu`](ItemMenu.md)

#### Defined in

[src/parser/youtube/ItemMenu.ts:16](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/ItemMenu.ts#L16)

## Methods

### items()

> **items**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

#### Defined in

[src/parser/youtube/ItemMenu.ts:59](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/ItemMenu.ts#L59)

***

### page()

> **page**(): [`IParsedResponse`](../../APIResponseTypes/interfaces/IParsedResponse.md)

#### Returns

[`IParsedResponse`](../../APIResponseTypes/interfaces/IParsedResponse.md)

#### Defined in

[src/parser/youtube/ItemMenu.ts:63](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/ItemMenu.ts#L63)

***

### selectItem()

#### selectItem(icon_type)

> **selectItem**(`icon_type`): `Promise`\<[`IParsedResponse`](../../APIResponseTypes/interfaces/IParsedResponse.md)\>

##### Parameters

• **icon\_type**: `string`

##### Returns

`Promise`\<[`IParsedResponse`](../../APIResponseTypes/interfaces/IParsedResponse.md)\>

##### Defined in

[src/parser/youtube/ItemMenu.ts:28](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/ItemMenu.ts#L28)

#### selectItem(button)

> **selectItem**(`button`): `Promise`\<[`IParsedResponse`](../../APIResponseTypes/interfaces/IParsedResponse.md)\>

##### Parameters

• **button**: [`Button`](../../YTNodes/classes/Button.md)

##### Returns

`Promise`\<[`IParsedResponse`](../../APIResponseTypes/interfaces/IParsedResponse.md)\>

##### Defined in

[src/parser/youtube/ItemMenu.ts:29](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/ItemMenu.ts#L29)
