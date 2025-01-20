[youtubei.js](../../../README.md) / [YT](../README.md) / NotificationsMenu

# Class: NotificationsMenu

## Constructors

### new NotificationsMenu()

> **new NotificationsMenu**(`actions`, `response`): [`NotificationsMenu`](NotificationsMenu.md)

#### Parameters

• **actions**: [`Actions`](../../../classes/Actions.md)

• **response**: [`ApiResponse`](../../../interfaces/ApiResponse.md)

#### Returns

[`NotificationsMenu`](NotificationsMenu.md)

#### Defined in

[src/parser/youtube/NotificationsMenu.ts:18](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/NotificationsMenu.ts#L18)

## Properties

### contents

> **contents**: [`Notification`](../../YTNodes/classes/Notification.md)[]

#### Defined in

[src/parser/youtube/NotificationsMenu.ts:16](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/NotificationsMenu.ts#L16)

***

### header

> **header**: [`SimpleMenuHeader`](../../YTNodes/classes/SimpleMenuHeader.md)

#### Defined in

[src/parser/youtube/NotificationsMenu.ts:15](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/NotificationsMenu.ts#L15)

## Accessors

### page

> `get` **page**(): [`IGetNotificationsMenuResponse`](../../APIResponseTypes/type-aliases/IGetNotificationsMenuResponse.md)

#### Returns

[`IGetNotificationsMenuResponse`](../../APIResponseTypes/type-aliases/IGetNotificationsMenuResponse.md)

#### Defined in

[src/parser/youtube/NotificationsMenu.ts:40](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/NotificationsMenu.ts#L40)

## Methods

### getContinuation()

> **getContinuation**(): `Promise`\<[`NotificationsMenu`](NotificationsMenu.md)\>

#### Returns

`Promise`\<[`NotificationsMenu`](NotificationsMenu.md)\>

#### Defined in

[src/parser/youtube/NotificationsMenu.ts:29](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/youtube/NotificationsMenu.ts#L29)
