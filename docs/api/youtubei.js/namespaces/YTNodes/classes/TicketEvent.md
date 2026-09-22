[youtubei.js](../../../../README.md) / [YTNodes](../README.md) / TicketEvent

# Class: TicketEvent

Defined in: [src/parser/classes/TicketEvent.ts:5](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/TicketEvent.ts#L5)

## Extends

- [`YTNode`](../../Helpers/classes/YTNode.md)

## Constructors

### Constructor

> **new TicketEvent**(`data`): `TicketEvent`

Defined in: [src/parser/classes/TicketEvent.ts:22](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/TicketEvent.ts#L22)

#### Parameters

##### data

[`RawNode`](../../../../type-aliases/RawNode.md)

#### Returns

`TicketEvent`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`constructor`](../../Helpers/classes/YTNode.md#constructor)

## Properties

### button\_accessibility\_text

> **button\_accessibility\_text**: `string`

Defined in: [src/parser/classes/TicketEvent.ts:19](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/TicketEvent.ts#L19)

***

### button\_text

> **button\_text**: `string`

Defined in: [src/parser/classes/TicketEvent.ts:12](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/TicketEvent.ts#L12)

***

### endpoint

> **endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

Defined in: [src/parser/classes/TicketEvent.ts:13](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/TicketEvent.ts#L13)

***

### has\_multiple\_offers

> **has\_multiple\_offers**: `boolean`

Defined in: [src/parser/classes/TicketEvent.ts:20](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/TicketEvent.ts#L20)

***

### link\_text

> **link\_text**: `string`

Defined in: [src/parser/classes/TicketEvent.ts:11](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/TicketEvent.ts#L11)

***

### subtitle1

> **subtitle1**: `string`

Defined in: [src/parser/classes/TicketEvent.ts:14](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/TicketEvent.ts#L14)

***

### subtitle2

> **subtitle2**: `string`

Defined in: [src/parser/classes/TicketEvent.ts:15](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/TicketEvent.ts#L15)

***

### time\_date

> **time\_date**: `string`

Defined in: [src/parser/classes/TicketEvent.ts:16](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/TicketEvent.ts#L16)

***

### time\_day

> **time\_day**: `string`

Defined in: [src/parser/classes/TicketEvent.ts:10](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/TicketEvent.ts#L10)

***

### time\_month

> **time\_month**: `string`

Defined in: [src/parser/classes/TicketEvent.ts:9](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/TicketEvent.ts#L9)

***

### time\_time

> **time\_time**: `string`

Defined in: [src/parser/classes/TicketEvent.ts:17](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/TicketEvent.ts#L17)

***

### time\_weekday

> **time\_weekday**: `string`

Defined in: [src/parser/classes/TicketEvent.ts:18](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/TicketEvent.ts#L18)

***

### title

> **title**: `string`

Defined in: [src/parser/classes/TicketEvent.ts:8](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/TicketEvent.ts#L8)

***

### type

> `readonly` **type**: `string`

Defined in: [src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/helpers.ts#L8)

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

***

### type

> `static` **type**: `string` = `'TicketEvent'`

Defined in: [src/parser/classes/TicketEvent.ts:6](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/TicketEvent.ts#L6)

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type-1)

## Methods

### as()

> **as**\<`T`, `K`\>(...`types`): `InstanceType`\<`K`\[`number`\]\>

Defined in: [src/parser/helpers.ts:29](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/helpers.ts#L29)

Cast to one of the given types.

#### Type Parameters

##### T

`T` *extends* [`YTNode`](../../Helpers/classes/YTNode.md)

##### K

`K` *extends* [`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)\<`T`\>[]

#### Parameters

##### types

...`K`

The types to cast to

#### Returns

`InstanceType`\<`K`\[`number`\]\>

The node cast to one of the given types

#### Throws

If the node is not of the given type

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`as`](../../Helpers/classes/YTNode.md#as)

***

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is TicketEvent & { [k in string]: R }`

Defined in: [src/parser/helpers.ts:41](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/helpers.ts#L41)

Check for a key without asserting the type.

#### Type Parameters

##### T

`T` *extends* `string`

##### R

`R` = `any`

#### Parameters

##### key

`T`

The key to check

#### Returns

`this is TicketEvent & { [k in string]: R }`

Whether the node has the key

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`hasKey`](../../Helpers/classes/YTNode.md#haskey)

***

### is()

> **is**\<`T`, `K`\>(...`types`): `this is InstanceType<K[number]>`

Defined in: [src/parser/helpers.ts:19](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/helpers.ts#L19)

Check if the node is of the given type.

#### Type Parameters

##### T

`T` *extends* [`YTNode`](../../Helpers/classes/YTNode.md)

##### K

`K` *extends* [`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)\<`T`\>[]

#### Parameters

##### types

...`K`

The type to check

#### Returns

`this is InstanceType<K[number]>`

whether the node is of the given type

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`is`](../../Helpers/classes/YTNode.md#is)

***

### key()

> **key**\<`T`, `R`\>(`key`): [`Maybe`](../../Helpers/classes/Maybe.md)

Defined in: [src/parser/helpers.ts:51](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/helpers.ts#L51)

Assert that the node has the given key and return it.

#### Type Parameters

##### T

`T` *extends* `string`

##### R

`R` = `any`

#### Parameters

##### key

`T`

The key to check

#### Returns

[`Maybe`](../../Helpers/classes/Maybe.md)

The value of the key wrapped in a Maybe

#### Throws

If the node does not have the key

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`key`](../../Helpers/classes/YTNode.md#key)
