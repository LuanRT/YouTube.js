[youtubei.js](../../../../README.md) / [YTNodes](../README.md) / WatchNextTabbedResults

# Class: WatchNextTabbedResults

Defined in: [src/parser/classes/WatchNextTabbedResults.ts:4](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/WatchNextTabbedResults.ts#L4)

## Extends

- [`TwoColumnBrowseResults`](TwoColumnBrowseResults.md)

## Constructors

### Constructor

> **new WatchNextTabbedResults**(`data`): `WatchNextTabbedResults`

Defined in: [src/parser/classes/WatchNextTabbedResults.ts:7](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/WatchNextTabbedResults.ts#L7)

#### Parameters

##### data

[`RawNode`](../../../../type-aliases/RawNode.md)

#### Returns

`WatchNextTabbedResults`

#### Overrides

[`TwoColumnBrowseResults`](TwoColumnBrowseResults.md).[`constructor`](TwoColumnBrowseResults.md#constructor)

## Properties

### secondary\_contents

> **secondary\_contents**: [`SectionList`](SectionList.md) \| [`BrowseFeedActions`](BrowseFeedActions.md) \| [`ProfileColumn`](ProfileColumn.md) \| `null`

Defined in: [src/parser/classes/TwoColumnBrowseResults.ts:14](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/TwoColumnBrowseResults.ts#L14)

#### Inherited from

[`TwoColumnBrowseResults`](TwoColumnBrowseResults.md).[`secondary_contents`](TwoColumnBrowseResults.md#secondary_contents)

***

### tabs

> **tabs**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`Tab`](Tab.md) \| [`ExpandableTab`](ExpandableTab.md)\>

Defined in: [src/parser/classes/TwoColumnBrowseResults.ts:13](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/TwoColumnBrowseResults.ts#L13)

#### Inherited from

[`TwoColumnBrowseResults`](TwoColumnBrowseResults.md).[`tabs`](TwoColumnBrowseResults.md#tabs)

***

### type

> `readonly` **type**: `string`

Defined in: [src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L8)

#### Inherited from

[`TwoColumnBrowseResults`](TwoColumnBrowseResults.md).[`type`](TwoColumnBrowseResults.md#type)

***

### type

> `static` **type**: `string` = `'WatchNextTabbedResults'`

Defined in: [src/parser/classes/WatchNextTabbedResults.ts:5](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/WatchNextTabbedResults.ts#L5)

#### Overrides

[`TwoColumnBrowseResults`](TwoColumnBrowseResults.md).[`type`](TwoColumnBrowseResults.md#type-1)

## Methods

### as()

> **as**\<`T`, `K`\>(...`types`): `InstanceType`\<`K`\[`number`\]\>

Defined in: [src/parser/helpers.ts:29](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L29)

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

[`TwoColumnBrowseResults`](TwoColumnBrowseResults.md).[`as`](TwoColumnBrowseResults.md#as)

***

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is WatchNextTabbedResults & { [k in string]: R }`

Defined in: [src/parser/helpers.ts:41](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L41)

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

`this is WatchNextTabbedResults & { [k in string]: R }`

Whether the node has the key

#### Inherited from

[`TwoColumnBrowseResults`](TwoColumnBrowseResults.md).[`hasKey`](TwoColumnBrowseResults.md#haskey)

***

### is()

> **is**\<`T`, `K`\>(...`types`): `this is InstanceType<K[number]>`

Defined in: [src/parser/helpers.ts:19](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L19)

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

[`TwoColumnBrowseResults`](TwoColumnBrowseResults.md).[`is`](TwoColumnBrowseResults.md#is)

***

### key()

> **key**\<`T`, `R`\>(`key`): [`Maybe`](../../Helpers/classes/Maybe.md)

Defined in: [src/parser/helpers.ts:51](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L51)

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

[`TwoColumnBrowseResults`](TwoColumnBrowseResults.md).[`key`](TwoColumnBrowseResults.md#key)
