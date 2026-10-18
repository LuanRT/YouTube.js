[youtubei.js](../README.md) / EventEmitter

# Class: EventEmitter\<Events\>

Defined in: [src/utils/EventEmitterLike.ts:3](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/utils/EventEmitterLike.ts#L3)

## Extended by

- [`Session`](Session.md)
- [`LiveChat`](../youtubei.js/namespaces/YT/classes/LiveChat.md)

## Type Parameters

### Events

`Events` *extends* `Record`\<`string`, `Listener`\>

## Constructors

### Constructor

> **new EventEmitter**\<`Events`\>(): `EventEmitterLike`\<`Events`\>

#### Returns

`EventEmitterLike`\<`Events`\>

## Methods

### emit()

> **emit**\<`K`\>(`type`, ...`args`): `void`

Defined in: [src/utils/EventEmitterLike.ts:7](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/utils/EventEmitterLike.ts#L7)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### type

`K`

##### args

...`Parameters`\<`Events`\[`K`\]\>

#### Returns

`void`

***

### off()

> **off**\<`K`\>(`type`, `listener`): `void`

Defined in: [src/utils/EventEmitterLike.ts:45](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/utils/EventEmitterLike.ts#L45)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### type

`K`

##### listener

`Events`\[`K`\]

#### Returns

`void`

***

### on()

> **on**\<`K`\>(`type`, `listener`): `void`

Defined in: [src/utils/EventEmitterLike.ts:17](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/utils/EventEmitterLike.ts#L17)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### type

`K`

##### listener

`Events`\[`K`\]

#### Returns

`void`

***

### once()

> **once**\<`K`\>(`type`, `listener`): `void`

Defined in: [src/utils/EventEmitterLike.ts:28](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/utils/EventEmitterLike.ts#L28)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### type

`K`

##### listener

`Events`\[`K`\]

#### Returns

`void`

***

### removeAllListeners()

> **removeAllListeners**(`type?`): `void`

Defined in: [src/utils/EventEmitterLike.ts:70](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/utils/EventEmitterLike.ts#L70)

#### Parameters

##### type?

keyof `Events`

#### Returns

`void`
