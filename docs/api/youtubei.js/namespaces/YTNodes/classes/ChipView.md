[youtubei.js](../../../../README.md) / [YTNodes](../README.md) / ChipView

# Class: ChipView

Defined in: [src/parser/classes/ChipView.ts:5](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/classes/ChipView.ts#L5)

## Extends

- [`YTNode`](../../Helpers/classes/YTNode.md)

## Constructors

### Constructor

> **new ChipView**(`data`): `ChipView`

Defined in: [src/parser/classes/ChipView.ts:33](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/classes/ChipView.ts#L33)

#### Parameters

##### data

[`RawNode`](../../../../type-aliases/RawNode.md)

#### Returns

`ChipView`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`constructor`](../../Helpers/classes/YTNode.md#constructor)

## Properties

### accessibility\_hint?

> `optional` **accessibility\_hint**: `string`

Defined in: [src/parser/classes/ChipView.ts:8](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/classes/ChipView.ts#L8)

***

### accessibility\_label?

> `optional` **accessibility\_label**: `string`

Defined in: [src/parser/classes/ChipView.ts:9](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/classes/ChipView.ts#L9)

***

### chip\_entity\_key?

> `optional` **chip\_entity\_key**: `string`

Defined in: [src/parser/classes/ChipView.ts:26](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/classes/ChipView.ts#L26)

***

### display\_type?

> `optional` **display\_type**: `"CHIP_VIEW_MODEL_DISPLAY_TYPE_UNSPECIFIED"` \| `"CHIP_VIEW_MODEL_DISPLAY_TYPE_DROP_DOWN"` \| `"CHIP_VIEW_MODEL_DISPLAY_TYPE_DROP_DOWN_WITH_CLEAR"` \| `"CHIP_VIEW_MODEL_DISPLAY_TYPE_FILTER"` \| `"CHIP_VIEW_MODEL_DISPLAY_TYPE_NO_ICON"` \| `"CHIP_VIEW_MODEL_DISPLAY_TYPE_ADJUST"` \| `"CHIP_VIEW_MODEL_DISPLAY_TYPE_CLEAR"` \| `"CHIP_VIEW_MODEL_DISPLAY_TYPE_ADD"` \| `"CHIP_VIEW_MODEL_DISPLAY_TYPE_SPARK"`

Defined in: [src/parser/classes/ChipView.ts:12](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/classes/ChipView.ts#L12)

***

### max\_text\_width?

> `optional` **max\_text\_width**: `number`

Defined in: [src/parser/classes/ChipView.ts:21](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/classes/ChipView.ts#L21)

***

### original\_text?

> `optional` **original\_text**: `string`

Defined in: [src/parser/classes/ChipView.ts:23](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/classes/ChipView.ts#L23)

***

### secondary\_accessibility\_label?

> `optional` **secondary\_accessibility\_label**: `string`

Defined in: [src/parser/classes/ChipView.ts:22](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/classes/ChipView.ts#L22)

***

### secondary\_tap\_command?

> `optional` **secondary\_tap\_command**: [`NavigationEndpoint`](NavigationEndpoint.md)

Defined in: [src/parser/classes/ChipView.ts:25](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/classes/ChipView.ts#L25)

***

### selected

> **selected**: `boolean`

Defined in: [src/parser/classes/ChipView.ts:27](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/classes/ChipView.ts#L27)

***

### tap\_command?

> `optional` **tap\_command**: [`NavigationEndpoint`](NavigationEndpoint.md)

Defined in: [src/parser/classes/ChipView.ts:24](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/classes/ChipView.ts#L24)

***

### text?

> `optional` **text**: `string`

Defined in: [src/parser/classes/ChipView.ts:10](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/classes/ChipView.ts#L10)

***

### trailing\_text?

> `optional` **trailing\_text**: `string`

Defined in: [src/parser/classes/ChipView.ts:11](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/classes/ChipView.ts#L11)

***

### type

> `readonly` **type**: `string`

Defined in: [src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/helpers.ts#L8)

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

***

### type

> `static` **type**: `string` = `'ChipView'`

Defined in: [src/parser/classes/ChipView.ts:6](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/classes/ChipView.ts#L6)

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type-1)

## Accessors

### endpoint

#### Get Signature

> **get** **endpoint**(): [`NavigationEndpoint`](NavigationEndpoint.md) \| `undefined`

Defined in: [src/parser/classes/ChipView.ts:29](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/classes/ChipView.ts#L29)

##### Returns

[`NavigationEndpoint`](NavigationEndpoint.md) \| `undefined`

## Methods

### as()

> **as**\<`T`, `K`\>(...`types`): `InstanceType`\<`K`\[`number`\]\>

Defined in: [src/parser/helpers.ts:29](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/helpers.ts#L29)

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

> **hasKey**\<`T`, `R`\>(`key`): `this is ChipView & { [k in string]: R }`

Defined in: [src/parser/helpers.ts:41](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/helpers.ts#L41)

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

`this is ChipView & { [k in string]: R }`

Whether the node has the key

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`hasKey`](../../Helpers/classes/YTNode.md#haskey)

***

### is()

> **is**\<`T`, `K`\>(...`types`): `this is InstanceType<K[number]>`

Defined in: [src/parser/helpers.ts:19](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/helpers.ts#L19)

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

Defined in: [src/parser/helpers.ts:51](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/helpers.ts#L51)

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
