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

[src/parser/classes/WatchNextTabbedResults.ts:7](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/classes/WatchNextTabbedResults.ts#L7)

## Properties

### secondary\_contents

> **secondary\_contents**: `null` \| [`SectionList`](SectionList.md) \| [`BrowseFeedActions`](BrowseFeedActions.md) \| [`ProfileColumn`](ProfileColumn.md)

#### Inherited from

[`TwoColumnBrowseResults`](TwoColumnBrowseResults.md).[`secondary_contents`](TwoColumnBrowseResults.md#secondary_contents)

#### Defined in

[src/parser/classes/TwoColumnBrowseResults.ts:14](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/classes/TwoColumnBrowseResults.ts#L14)

***

### tabs

> **tabs**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`Tab`](Tab.md) \| [`ExpandableTab`](ExpandableTab.md)\>

#### Inherited from

[`TwoColumnBrowseResults`](TwoColumnBrowseResults.md).[`tabs`](TwoColumnBrowseResults.md#tabs)

#### Defined in

[src/parser/classes/TwoColumnBrowseResults.ts:13](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/classes/TwoColumnBrowseResults.ts#L13)

***

### type

> `readonly` **type**: `string`

#### Inherited from

[`TwoColumnBrowseResults`](TwoColumnBrowseResults.md).[`type`](TwoColumnBrowseResults.md#type)

#### Defined in

[src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/helpers.ts#L8)

***

### type

> `static` **type**: `string` = `'WatchNextTabbedResults'`

#### Overrides

[`TwoColumnBrowseResults`](TwoColumnBrowseResults.md).[`type`](TwoColumnBrowseResults.md#type-1)

#### Defined in

[src/parser/classes/WatchNextTabbedResults.ts:5](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/classes/WatchNextTabbedResults.ts#L5)

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

[src/parser/helpers.ts:29](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/helpers.ts#L29)

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

[src/parser/helpers.ts:41](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/helpers.ts#L41)

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

[src/parser/helpers.ts:19](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/helpers.ts#L19)

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

[src/parser/helpers.ts:51](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/helpers.ts#L51)
