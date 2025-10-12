[youtubei.js](../../../../README.md) / [YTNodes](../README.md) / MacroMarkersListEntity

# Class: MacroMarkersListEntity

Defined in: [src/parser/classes/MacroMarkersListEntity.ts:13](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MacroMarkersListEntity.ts#L13)

Represents a list of markers for a video. Can contain different types of markers:
- MARKER_TYPE_HEATMAP: Heat map markers showing audience engagement data
- Other marker types may exist but are not currently handled

## Extends

- [`YTNode`](../../Helpers/classes/YTNode.md)

## Constructors

### Constructor

> **new MacroMarkersListEntity**(`data`): `MacroMarkersListEntity`

Defined in: [src/parser/classes/MacroMarkersListEntity.ts:30](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MacroMarkersListEntity.ts#L30)

#### Parameters

##### data

[`RawNode`](../../../../type-aliases/RawNode.md)

#### Returns

`MacroMarkersListEntity`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`constructor`](../../Helpers/classes/YTNode.md#constructor)

## Properties

### external\_video\_id

> **external\_video\_id**: `string`

Defined in: [src/parser/classes/MacroMarkersListEntity.ts:17](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MacroMarkersListEntity.ts#L17)

***

### marker\_entity\_key

> **marker\_entity\_key**: `string`

Defined in: [src/parser/classes/MacroMarkersListEntity.ts:16](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MacroMarkersListEntity.ts#L16)

***

### marker\_type

> **marker\_type**: `string`

Defined in: [src/parser/classes/MacroMarkersListEntity.ts:19](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MacroMarkersListEntity.ts#L19)

The type of markers in this entity (e.g., 'MARKER_TYPE_HEATMAP')

***

### markers

> **markers**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`HeatMarker`](HeatMarker.md)\>

Defined in: [src/parser/classes/MacroMarkersListEntity.ts:20](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MacroMarkersListEntity.ts#L20)

***

### max\_height\_dp

> **max\_height\_dp**: `number`

Defined in: [src/parser/classes/MacroMarkersListEntity.ts:21](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MacroMarkersListEntity.ts#L21)

***

### min\_height\_dp

> **min\_height\_dp**: `number`

Defined in: [src/parser/classes/MacroMarkersListEntity.ts:22](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MacroMarkersListEntity.ts#L22)

***

### show\_hide\_animation\_duration\_millis

> **show\_hide\_animation\_duration\_millis**: `number`

Defined in: [src/parser/classes/MacroMarkersListEntity.ts:23](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MacroMarkersListEntity.ts#L23)

***

### timed\_marker\_decorations

> **timed\_marker\_decorations**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`TimedMarkerDecoration`](TimedMarkerDecoration.md)\>

Defined in: [src/parser/classes/MacroMarkersListEntity.ts:24](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MacroMarkersListEntity.ts#L24)

***

### type

> `readonly` **type**: `string`

Defined in: [src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L8)

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

***

### type

> `static` **type**: `string` = `'MacroMarkersListEntity'`

Defined in: [src/parser/classes/MacroMarkersListEntity.ts:14](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MacroMarkersListEntity.ts#L14)

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type-1)

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

[`YTNode`](../../Helpers/classes/YTNode.md).[`as`](../../Helpers/classes/YTNode.md#as)

***

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is MacroMarkersListEntity & { [k in string]: R }`

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

`this is MacroMarkersListEntity & { [k in string]: R }`

Whether the node has the key

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`hasKey`](../../Helpers/classes/YTNode.md#haskey)

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

[`YTNode`](../../Helpers/classes/YTNode.md).[`is`](../../Helpers/classes/YTNode.md#is)

***

### isHeatmap()

> **isHeatmap**(): `boolean`

Defined in: [src/parser/classes/MacroMarkersListEntity.ts:65](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MacroMarkersListEntity.ts#L65)

Checks if this MacroMarkersListEntity represents heatmap data.
Only heatmap markers can be converted to Heatmap objects.

#### Returns

`boolean`

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

[`YTNode`](../../Helpers/classes/YTNode.md).[`key`](../../Helpers/classes/YTNode.md#key)

***

### toHeatmap()

> **toHeatmap**(): [`Heatmap`](Heatmap.md) \| `null`

Defined in: [src/parser/classes/MacroMarkersListEntity.ts:74](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/MacroMarkersListEntity.ts#L74)

Converts this MacroMarkersListEntity to a Heatmap object
for compatibility with existing code. Only works for heatmap markers.

#### Returns

[`Heatmap`](Heatmap.md) \| `null`

Heatmap object if this entity contains heatmap data, null otherwise
