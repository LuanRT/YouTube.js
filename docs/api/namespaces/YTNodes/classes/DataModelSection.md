[youtubei.js](../../../README.md) / [YTNodes](../README.md) / DataModelSection

# Class: DataModelSection

## Extends

- [`YTNode`](../../Helpers/classes/YTNode.md)

## Constructors

### new DataModelSection()

> **new DataModelSection**(`data`): [`DataModelSection`](DataModelSection.md)

#### Parameters

• **data**: [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

#### Returns

[`DataModelSection`](DataModelSection.md)

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`constructor`](../../Helpers/classes/YTNode.md#constructors)

#### Defined in

[src/parser/classes/analytics/DataModelSection.ts:40](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/analytics/DataModelSection.ts#L40)

## Properties

### comparison\_indicator

> **comparison\_indicator**: `object`

#### trend

> **trend**: `string`

#### Defined in

[src/parser/classes/analytics/DataModelSection.ts:11](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/analytics/DataModelSection.ts#L11)

***

### metric\_value

> **metric\_value**: `string`

#### Defined in

[src/parser/classes/analytics/DataModelSection.ts:9](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/analytics/DataModelSection.ts#L9)

***

### series\_configuration

> **series\_configuration**: `object`

#### line\_series

> **line\_series**: `object`

#### line\_series.domain\_axis

> **domain\_axis**: `object`

#### line\_series.domain\_axis.custom\_formatter

> **custom\_formatter**: `object`

#### line\_series.domain\_axis.custom\_formatter.labels

> **labels**: `string`[]

#### line\_series.domain\_axis.tick\_values

> **tick\_values**: `number`[]

#### line\_series.lines\_data

> **lines\_data**: `object`

#### line\_series.lines\_data.style

> **style**: `object`

#### line\_series.lines\_data.style.line\_color

> **line\_color**: `number`

#### line\_series.lines\_data.style.line\_width

> **line\_width**: `number`

#### line\_series.lines\_data.x

> **x**: `number`[]

#### line\_series.lines\_data.y

> **y**: `number`[]

#### line\_series.measure\_axis

> **measure\_axis**: `object`

#### line\_series.measure\_axis.custom\_formatter

> **custom\_formatter**: `object`

#### line\_series.measure\_axis.custom\_formatter.labels

> **labels**: `string`[]

#### line\_series.measure\_axis.tick\_values

> **tick\_values**: `number`[]

#### Defined in

[src/parser/classes/analytics/DataModelSection.ts:15](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/analytics/DataModelSection.ts#L15)

***

### subtitle

> **subtitle**: `string`

#### Defined in

[src/parser/classes/analytics/DataModelSection.ts:8](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/analytics/DataModelSection.ts#L8)

***

### title

> **title**: `string`

#### Defined in

[src/parser/classes/analytics/DataModelSection.ts:7](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/analytics/DataModelSection.ts#L7)

***

### type

> `readonly` **type**: `string`

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

#### Defined in

[src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L8)

***

### type

> `static` **type**: `string` = `'DataModelSection'`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type-1)

#### Defined in

[src/parser/classes/analytics/DataModelSection.ts:5](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/analytics/DataModelSection.ts#L5)

## Methods

### as()

> **as**\<`T`, `K`\>(...`types`): `InstanceType`\<`K`\[`number`\]\>

Cast to one of the given types.

#### Type Parameters

• **T** *extends* [`YTNode`](../../Helpers/classes/YTNode.md)

• **K** *extends* [`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)\<`T`\>[]

#### Parameters

• ...**types**: `K`

#### Returns

`InstanceType`\<`K`\[`number`\]\>

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`as`](../../Helpers/classes/YTNode.md#as)

#### Defined in

[src/parser/helpers.ts:35](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L35)

***

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is DataModelSection & { [k in string]: R }`

Check for a key without asserting the type.

#### Type Parameters

• **T** *extends* `string`

• **R** = `any`

#### Parameters

• **key**: `T`

The key to check

#### Returns

`this is DataModelSection & { [k in string]: R }`

Whether the node has the key

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`hasKey`](../../Helpers/classes/YTNode.md#haskey)

#### Defined in

[src/parser/helpers.ts:47](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L47)

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

[src/parser/helpers.ts:28](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L28)

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

[src/parser/helpers.ts:57](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L57)
