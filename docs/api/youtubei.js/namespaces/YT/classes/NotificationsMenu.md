[youtubei.js](../../../../README.md) / [YT](../README.md) / NotificationsMenu

# Class: NotificationsMenu

Defined in: [src/parser/youtube/NotificationsMenu.ts:11](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/youtube/NotificationsMenu.ts#L11)

## Constructors

### Constructor

> **new NotificationsMenu**(`actions`, `response`): `NotificationsMenu`

Defined in: [src/parser/youtube/NotificationsMenu.ts:18](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/youtube/NotificationsMenu.ts#L18)

#### Parameters

##### actions

[`Actions`](../../../../classes/Actions.md)

##### response

[`ApiResponse`](../../../../interfaces/ApiResponse.md)

#### Returns

`NotificationsMenu`

## Properties

### contents

> **contents**: [`Notification`](../../YTNodes/classes/Notification.md)[]

Defined in: [src/parser/youtube/NotificationsMenu.ts:16](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/youtube/NotificationsMenu.ts#L16)

***

### header

> **header**: [`SimpleMenuHeader`](../../YTNodes/classes/SimpleMenuHeader.md)

Defined in: [src/parser/youtube/NotificationsMenu.ts:15](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/youtube/NotificationsMenu.ts#L15)

## Accessors

### page

#### Get Signature

> **get** **page**(): [`IGetNotificationsMenuResponse`](../../../../type-aliases/IGetNotificationsMenuResponse.md)

Defined in: [src/parser/youtube/NotificationsMenu.ts:40](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/youtube/NotificationsMenu.ts#L40)

##### Returns

[`IGetNotificationsMenuResponse`](../../../../type-aliases/IGetNotificationsMenuResponse.md)

## Methods

### getContinuation()

> **getContinuation**(): `Promise`\<`NotificationsMenu`\>

Defined in: [src/parser/youtube/NotificationsMenu.ts:29](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/youtube/NotificationsMenu.ts#L29)

#### Returns

`Promise`\<`NotificationsMenu`\>
