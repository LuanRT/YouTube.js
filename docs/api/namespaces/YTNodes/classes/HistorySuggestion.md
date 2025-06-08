[youtubei.js](../../../README.md) / [YTNodes](../README.md) / HistorySuggestion

# Class: HistorySuggestion

## Extends

- [`SearchSuggestion`](SearchSuggestion.md)

## Constructors

### new HistorySuggestion()

> **new HistorySuggestion**(`data`): [`HistorySuggestion`](HistorySuggestion.md)

#### Parameters

• **data**: [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

#### Returns

[`HistorySuggestion`](HistorySuggestion.md)

#### Overrides

[`SearchSuggestion`](SearchSuggestion.md).[`constructor`](SearchSuggestion.md#constructors)

#### Defined in

[src/parser/classes/HistorySuggestion.ts:7](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/HistorySuggestion.ts#L7)

## Properties

### endpoint

> **endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

#### Inherited from

[`SearchSuggestion`](SearchSuggestion.md).[`endpoint`](SearchSuggestion.md#endpoint)

#### Defined in

[src/parser/classes/SearchSuggestion.ts:10](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/SearchSuggestion.ts#L10)

***

### icon\_type?

> `optional` **icon\_type**: `string`

#### Inherited from

[`SearchSuggestion`](SearchSuggestion.md).[`icon_type`](SearchSuggestion.md#icon_type)

#### Defined in

[src/parser/classes/SearchSuggestion.ts:11](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/SearchSuggestion.ts#L11)

***

### service\_endpoint?

> `optional` **service\_endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

#### Inherited from

[`SearchSuggestion`](SearchSuggestion.md).[`service_endpoint`](SearchSuggestion.md#service_endpoint)

#### Defined in

[src/parser/classes/SearchSuggestion.ts:12](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/SearchSuggestion.ts#L12)

***

### suggestion

> **suggestion**: [`Text`](../../Misc/classes/Text.md)

#### Inherited from

[`SearchSuggestion`](SearchSuggestion.md).[`suggestion`](SearchSuggestion.md#suggestion)

#### Defined in

[src/parser/classes/SearchSuggestion.ts:9](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/SearchSuggestion.ts#L9)

***

### type

> `readonly` **type**: `string`

#### Inherited from

[`SearchSuggestion`](SearchSuggestion.md).[`type`](SearchSuggestion.md#type)

#### Defined in

[src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L8)

***

### type

> `static` **type**: `string` = `'HistorySuggestion'`

#### Overrides

[`SearchSuggestion`](SearchSuggestion.md).[`type`](SearchSuggestion.md#type-1)

#### Defined in

[src/parser/classes/HistorySuggestion.ts:5](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/HistorySuggestion.ts#L5)

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

[`SearchSuggestion`](SearchSuggestion.md).[`as`](SearchSuggestion.md#as)

#### Defined in

[src/parser/helpers.ts:38](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L38)

***

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is HistorySuggestion & { [k in string]: R }`

Check for a key without asserting the type.

#### Type Parameters

• **T** *extends* `string`

• **R** = `any`

#### Parameters

• **key**: `T`

The key to check

#### Returns

`this is HistorySuggestion & { [k in string]: R }`

Whether the node has the key

#### Inherited from

[`SearchSuggestion`](SearchSuggestion.md).[`hasKey`](SearchSuggestion.md#haskey)

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

[`SearchSuggestion`](SearchSuggestion.md).[`is`](SearchSuggestion.md#is)

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

[`SearchSuggestion`](SearchSuggestion.md).[`key`](SearchSuggestion.md#key)

#### Defined in

[src/parser/helpers.ts:60](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L60)
