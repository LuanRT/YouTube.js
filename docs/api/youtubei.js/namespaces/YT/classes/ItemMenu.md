[youtubei.js](../../../../README.md) / [YT](../README.md) / ItemMenu

# Class: ItemMenu

Defined in: [src/parser/youtube/ItemMenu.ts:11](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/ItemMenu.ts#L11)

## Constructors

### Constructor

> **new ItemMenu**(`data`, `actions`): `ItemMenu`

Defined in: [src/parser/youtube/ItemMenu.ts:16](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/ItemMenu.ts#L16)

#### Parameters

##### data

[`IParsedResponse`](../../../../interfaces/IParsedResponse.md)

##### actions

[`Actions`](../../../../classes/Actions.md)

#### Returns

`ItemMenu`

## Methods

### items()

> **items**(): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

Defined in: [src/parser/youtube/ItemMenu.ts:59](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/ItemMenu.ts#L59)

#### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

***

### page()

> **page**(): [`IParsedResponse`](../../../../interfaces/IParsedResponse.md)

Defined in: [src/parser/youtube/ItemMenu.ts:63](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/ItemMenu.ts#L63)

#### Returns

[`IParsedResponse`](../../../../interfaces/IParsedResponse.md)

***

### selectItem()

#### Call Signature

> **selectItem**(`icon_type`): `Promise`\<[`IParsedResponse`](../../../../interfaces/IParsedResponse.md)\>

Defined in: [src/parser/youtube/ItemMenu.ts:28](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/ItemMenu.ts#L28)

##### Parameters

###### icon\_type

`string`

##### Returns

`Promise`\<[`IParsedResponse`](../../../../interfaces/IParsedResponse.md)\>

#### Call Signature

> **selectItem**(`button`): `Promise`\<[`IParsedResponse`](../../../../interfaces/IParsedResponse.md)\>

Defined in: [src/parser/youtube/ItemMenu.ts:29](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/youtube/ItemMenu.ts#L29)

##### Parameters

###### button

[`Button`](../../YTNodes/classes/Button.md)

##### Returns

`Promise`\<[`IParsedResponse`](../../../../interfaces/IParsedResponse.md)\>
