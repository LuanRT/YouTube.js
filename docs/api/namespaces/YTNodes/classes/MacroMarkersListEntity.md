[youtubei.js](../../../README.md) / [YTNodes](../README.md) / MacroMarkersListEntity

# Class: MacroMarkersListEntity

Represents a list of markers for a video. Can contain different types of markers:
- MARKER_TYPE_HEATMAP: Heat map markers showing audience engagement data
- Other marker types may exist but are not currently handled

## Extends

- [`YTNode`](../../Helpers/classes/YTNode.md)

## Constructors

### new MacroMarkersListEntity()

> **new MacroMarkersListEntity**(`data`): [`MacroMarkersListEntity`](MacroMarkersListEntity.md)

#### Parameters

• **data**: [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

#### Returns

[`MacroMarkersListEntity`](MacroMarkersListEntity.md)

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`constructor`](../../Helpers/classes/YTNode.md#constructors)

#### Defined in

[src/parser/classes/MacroMarkersListEntity.ts:30](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/classes/MacroMarkersListEntity.ts#L30)

## Properties

### external\_video\_id

> **external\_video\_id**: `string`

#### Defined in

[src/parser/classes/MacroMarkersListEntity.ts:17](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/classes/MacroMarkersListEntity.ts#L17)

***

### marker\_entity\_key

> **marker\_entity\_key**: `string`

#### Defined in

[src/parser/classes/MacroMarkersListEntity.ts:16](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/classes/MacroMarkersListEntity.ts#L16)

***

### marker\_type

> **marker\_type**: `string`

The type of markers in this entity (e.g., 'MARKER_TYPE_HEATMAP')

#### Defined in

[src/parser/classes/MacroMarkersListEntity.ts:19](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/classes/MacroMarkersListEntity.ts#L19)

***

### markers

> **markers**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`HeatMarker`](HeatMarker.md)\>

#### Defined in

[src/parser/classes/MacroMarkersListEntity.ts:20](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/classes/MacroMarkersListEntity.ts#L20)

***

### max\_height\_dp

> **max\_height\_dp**: `number`

#### Defined in

[src/parser/classes/MacroMarkersListEntity.ts:21](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/classes/MacroMarkersListEntity.ts#L21)

***

### min\_height\_dp

> **min\_height\_dp**: `number`

#### Defined in

[src/parser/classes/MacroMarkersListEntity.ts:22](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/classes/MacroMarkersListEntity.ts#L22)

***

### show\_hide\_animation\_duration\_millis

> **show\_hide\_animation\_duration\_millis**: `number`

#### Defined in

[src/parser/classes/MacroMarkersListEntity.ts:23](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/classes/MacroMarkersListEntity.ts#L23)

***

### timed\_marker\_decorations

> **timed\_marker\_decorations**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`TimedMarkerDecoration`](TimedMarkerDecoration.md)\>

#### Defined in

[src/parser/classes/MacroMarkersListEntity.ts:24](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/classes/MacroMarkersListEntity.ts#L24)

***

### type

> `readonly` **type**: `string`

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

#### Defined in

[src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/helpers.ts#L8)

***

### type

> `static` **type**: `string` = `'MacroMarkersListEntity'`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type-1)

#### Defined in

[src/parser/classes/MacroMarkersListEntity.ts:14](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/classes/MacroMarkersListEntity.ts#L14)

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

[src/parser/helpers.ts:29](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/helpers.ts#L29)

***

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is MacroMarkersListEntity & { [k in string]: R }`

Check for a key without asserting the type.

#### Type Parameters

• **T** *extends* `string`

• **R** = `any`

#### Parameters

• **key**: `T`

The key to check

#### Returns

`this is MacroMarkersListEntity & { [k in string]: R }`

Whether the node has the key

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`hasKey`](../../Helpers/classes/YTNode.md#haskey)

#### Defined in

[src/parser/helpers.ts:41](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/helpers.ts#L41)

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

[src/parser/helpers.ts:19](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/helpers.ts#L19)

***

### isHeatmap()

> **isHeatmap**(): `boolean`

Checks if this MacroMarkersListEntity represents heatmap data.
Only heatmap markers can be converted to Heatmap objects.

#### Returns

`boolean`

#### Defined in

[src/parser/classes/MacroMarkersListEntity.ts:65](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/classes/MacroMarkersListEntity.ts#L65)

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

[src/parser/helpers.ts:51](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/helpers.ts#L51)

***

### toHeatmap()

> **toHeatmap**(): `null` \| [`Heatmap`](Heatmap.md)

Converts this MacroMarkersListEntity to a Heatmap object
for compatibility with existing code. Only works for heatmap markers.

#### Returns

`null` \| [`Heatmap`](Heatmap.md)

Heatmap object if this entity contains heatmap data, null otherwise

#### Defined in

[src/parser/classes/MacroMarkersListEntity.ts:74](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/classes/MacroMarkersListEntity.ts#L74)
