[youtubei.js](../../../README.md) / [YTNodes](../README.md) / WatchNextTabbedResults

# Class: WatchNextTabbedResults

## Extends

- [`TwoColumnBrowseResults`](TwoColumnBrowseResults.md)

## Constructors

### new WatchNextTabbedResults()

> **new WatchNextTabbedResults**(`data`): [`WatchNextTabbedResults`](WatchNextTabbedResults.md)

#### Parameters

• **data**: [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

#### Returns

[`WatchNextTabbedResults`](WatchNextTabbedResults.md)

#### Overrides

[`TwoColumnBrowseResults`](TwoColumnBrowseResults.md).[`constructor`](TwoColumnBrowseResults.md#constructors)

#### Defined in

[src/parser/classes/WatchNextTabbedResults.ts:7](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/WatchNextTabbedResults.ts#L7)

## Properties

### secondary\_contents

> **secondary\_contents**: [`SuperParsedResult`](../../Helpers/classes/SuperParsedResult.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

#### Inherited from

[`TwoColumnBrowseResults`](TwoColumnBrowseResults.md).[`secondary_contents`](TwoColumnBrowseResults.md#secondary_contents)

#### Defined in

[src/parser/classes/TwoColumnBrowseResults.ts:8](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/TwoColumnBrowseResults.ts#L8)

***

### tabs

> **tabs**: [`SuperParsedResult`](../../Helpers/classes/SuperParsedResult.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

#### Inherited from

[`TwoColumnBrowseResults`](TwoColumnBrowseResults.md).[`tabs`](TwoColumnBrowseResults.md#tabs)

#### Defined in

[src/parser/classes/TwoColumnBrowseResults.ts:7](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/TwoColumnBrowseResults.ts#L7)

***

### type

> `readonly` **type**: `string`

#### Inherited from

[`TwoColumnBrowseResults`](TwoColumnBrowseResults.md).[`type`](TwoColumnBrowseResults.md#type)

#### Defined in

[src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L8)

***

### type

> `static` **type**: `string` = `'WatchNextTabbedResults'`

#### Overrides

[`TwoColumnBrowseResults`](TwoColumnBrowseResults.md).[`type`](TwoColumnBrowseResults.md#type-1)

#### Defined in

[src/parser/classes/WatchNextTabbedResults.ts:5](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/WatchNextTabbedResults.ts#L5)

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

[`TwoColumnBrowseResults`](TwoColumnBrowseResults.md).[`as`](TwoColumnBrowseResults.md#as)

#### Defined in

[src/parser/helpers.ts:38](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L38)

***

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is WatchNextTabbedResults & { [k in string]: R }`

Check for a key without asserting the type.

#### Type Parameters

• **T** *extends* `string`

• **R** = `any`

#### Parameters

• **key**: `T`

The key to check

#### Returns

`this is WatchNextTabbedResults & { [k in string]: R }`

Whether the node has the key

#### Inherited from

[`TwoColumnBrowseResults`](TwoColumnBrowseResults.md).[`hasKey`](TwoColumnBrowseResults.md#haskey)

#### Defined in

[src/parser/helpers.ts:50](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L50)

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

[`TwoColumnBrowseResults`](TwoColumnBrowseResults.md).[`is`](TwoColumnBrowseResults.md#is)

#### Defined in

[src/parser/helpers.ts:28](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L28)

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

[`TwoColumnBrowseResults`](TwoColumnBrowseResults.md).[`key`](TwoColumnBrowseResults.md#key)

#### Defined in

[src/parser/helpers.ts:60](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L60)
