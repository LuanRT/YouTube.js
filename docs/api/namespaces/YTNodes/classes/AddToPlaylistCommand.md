[youtubei.js](../../../README.md) / [YTNodes](../README.md) / AddToPlaylistCommand

# Class: AddToPlaylistCommand

## Extends

- [`YTNode`](../../Helpers/classes/YTNode.md)

## Constructors

### new AddToPlaylistCommand()

> **new AddToPlaylistCommand**(`data`): [`AddToPlaylistCommand`](AddToPlaylistCommand.md)

#### Parameters

• **data**: [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

#### Returns

[`AddToPlaylistCommand`](AddToPlaylistCommand.md)

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`constructor`](../../Helpers/classes/YTNode.md#constructors)

#### Defined in

[src/parser/classes/commands/AddToPlaylistCommand.ts:14](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/commands/AddToPlaylistCommand.ts#L14)

## Properties

### endpoint

> **endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

#### Defined in

[src/parser/classes/commands/AddToPlaylistCommand.ts:11](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/commands/AddToPlaylistCommand.ts#L11)

***

### list\_type

> **list\_type**: `string`

#### Defined in

[src/parser/classes/commands/AddToPlaylistCommand.ts:10](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/commands/AddToPlaylistCommand.ts#L10)

***

### open\_miniplayer

> **open\_miniplayer**: `boolean`

#### Defined in

[src/parser/classes/commands/AddToPlaylistCommand.ts:8](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/commands/AddToPlaylistCommand.ts#L8)

***

### type

> `readonly` **type**: `string`

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

#### Defined in

[src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/helpers.ts#L8)

***

### video\_id

> **video\_id**: `string`

#### Defined in

[src/parser/classes/commands/AddToPlaylistCommand.ts:9](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/commands/AddToPlaylistCommand.ts#L9)

***

### video\_ids

> **video\_ids**: `string`[]

#### Defined in

[src/parser/classes/commands/AddToPlaylistCommand.ts:12](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/commands/AddToPlaylistCommand.ts#L12)

***

### type

> `static` **type**: `string` = `'AddToPlaylistCommand'`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type-1)

#### Defined in

[src/parser/classes/commands/AddToPlaylistCommand.ts:6](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/commands/AddToPlaylistCommand.ts#L6)

## Methods

### as()

> **as**\<`T`, `K`\>(...`types`): `InstanceType`\<`K`\[`number`\]\>

Cast to one of the given types.

#### Type Parameters

• **T** *extends* [`YTNode`](../../Helpers/classes/YTNode.md)

• **K** *extends* [`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)\<`T`\>[]

#### Parameters

• ...**types**: `K`

The types to cast to

#### Returns

`InstanceType`\<`K`\[`number`\]\>

The node cast to one of the given types

#### Throws

If the node is not of the given type

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`as`](../../Helpers/classes/YTNode.md#as)

#### Defined in

[src/parser/helpers.ts:29](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/helpers.ts#L29)

***

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is AddToPlaylistCommand & { [k in string]: R }`

Check for a key without asserting the type.

#### Type Parameters

• **T** *extends* `string`

• **R** = `any`

#### Parameters

• **key**: `T`

The key to check

#### Returns

`this is AddToPlaylistCommand & { [k in string]: R }`

Whether the node has the key

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`hasKey`](../../Helpers/classes/YTNode.md#haskey)

#### Defined in

[src/parser/helpers.ts:41](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/helpers.ts#L41)

***

### is()

> **is**\<`T`, `K`\>(...`types`): `this is InstanceType<K[number]>`

Check if the node is of the given type.

#### Type Parameters

• **T** *extends* [`YTNode`](../../Helpers/classes/YTNode.md)

• **K** *extends* [`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)\<`T`\>[]

#### Parameters

• ...**types**: `K`

The type to check

#### Returns

`this is InstanceType<K[number]>`

whether the node is of the given type

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`is`](../../Helpers/classes/YTNode.md#is)

#### Defined in

[src/parser/helpers.ts:19](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/helpers.ts#L19)

***

### key()

> **key**\<`T`, `R`\>(`key`): [`Maybe`](../../Helpers/classes/Maybe.md)

Assert that the node has the given key and return it.

#### Type Parameters

• **T** *extends* `string`

• **R** = `any`

#### Parameters

• **key**: `T`

The key to check

#### Returns

[`Maybe`](../../Helpers/classes/Maybe.md)

The value of the key wrapped in a Maybe

#### Throws

If the node does not have the key

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`key`](../../Helpers/classes/YTNode.md#key)

#### Defined in

[src/parser/helpers.ts:51](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/helpers.ts#L51)
