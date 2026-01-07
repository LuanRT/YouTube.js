[youtubei.js](../../../../README.md) / [YTNodes](../README.md) / HistorySuggestion

# Class: HistorySuggestion

Defined in: [src/parser/classes/HistorySuggestion.ts:4](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/HistorySuggestion.ts#L4)

## Extends

- [`SearchSuggestion`](SearchSuggestion.md)

## Constructors

### Constructor

> **new HistorySuggestion**(`data`): `HistorySuggestion`

Defined in: [src/parser/classes/HistorySuggestion.ts:7](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/HistorySuggestion.ts#L7)

#### Parameters

##### data

[`RawNode`](../../../../type-aliases/RawNode.md)

#### Returns

`HistorySuggestion`

#### Overrides

[`SearchSuggestion`](SearchSuggestion.md).[`constructor`](SearchSuggestion.md#constructor)

## Properties

### endpoint

> **endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

Defined in: [src/parser/classes/SearchSuggestion.ts:10](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/SearchSuggestion.ts#L10)

#### Inherited from

[`SearchSuggestion`](SearchSuggestion.md).[`endpoint`](SearchSuggestion.md#endpoint)

***

### icon\_type?

> `optional` **icon\_type**: `string`

Defined in: [src/parser/classes/SearchSuggestion.ts:11](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/SearchSuggestion.ts#L11)

#### Inherited from

[`SearchSuggestion`](SearchSuggestion.md).[`icon_type`](SearchSuggestion.md#icon_type)

***

### service\_endpoint?

> `optional` **service\_endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

Defined in: [src/parser/classes/SearchSuggestion.ts:12](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/SearchSuggestion.ts#L12)

#### Inherited from

[`SearchSuggestion`](SearchSuggestion.md).[`service_endpoint`](SearchSuggestion.md#service_endpoint)

***

### suggestion

> **suggestion**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/SearchSuggestion.ts:9](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/SearchSuggestion.ts#L9)

#### Inherited from

[`SearchSuggestion`](SearchSuggestion.md).[`suggestion`](SearchSuggestion.md#suggestion)

***

### type

> `readonly` **type**: `string`

Defined in: [src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L8)

#### Inherited from

[`SearchSuggestion`](SearchSuggestion.md).[`type`](SearchSuggestion.md#type)

***

### type

> `static` **type**: `string` = `'HistorySuggestion'`

Defined in: [src/parser/classes/HistorySuggestion.ts:5](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/HistorySuggestion.ts#L5)

#### Overrides

[`SearchSuggestion`](SearchSuggestion.md).[`type`](SearchSuggestion.md#type-1)

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

[`SearchSuggestion`](SearchSuggestion.md).[`as`](SearchSuggestion.md#as)

***

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is HistorySuggestion & { [k in string]: R }`

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

`this is HistorySuggestion & { [k in string]: R }`

Whether the node has the key

#### Inherited from

[`SearchSuggestion`](SearchSuggestion.md).[`hasKey`](SearchSuggestion.md#haskey)

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

[`SearchSuggestion`](SearchSuggestion.md).[`is`](SearchSuggestion.md#is)

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

[`SearchSuggestion`](SearchSuggestion.md).[`key`](SearchSuggestion.md#key)
