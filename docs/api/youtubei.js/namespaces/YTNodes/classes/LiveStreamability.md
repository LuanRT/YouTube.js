[youtubei.js](../../../../README.md) / [YTNodes](../README.md) / LiveStreamability

# Class: LiveStreamability

Defined in: [src/parser/classes/LiveStreamability.ts:7](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/LiveStreamability.ts#L7)

## Extends

- [`YTNode`](../../Helpers/classes/YTNode.md)

## Constructors

### Constructor

> **new LiveStreamability**(`data`): `LiveStreamability`

Defined in: [src/parser/classes/LiveStreamability.ts:25](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/LiveStreamability.ts#L25)

#### Parameters

##### data

[`RawNode`](../../../../type-aliases/RawNode.md)

#### Returns

`LiveStreamability`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`constructor`](../../Helpers/classes/YTNode.md#constructor)

## Properties

### broadcast\_id?

> `optional` **broadcast\_id?**: `string`

Defined in: [src/parser/classes/LiveStreamability.ts:11](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/LiveStreamability.ts#L11)

***

### creator\_redirect?

> `optional` **creator\_redirect?**: `object`

Defined in: [src/parser/classes/LiveStreamability.ts:16](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/LiveStreamability.ts#L16)

#### hide\_autoplay\_toggle?

> `optional` **hide\_autoplay\_toggle?**: `boolean`

***

### display\_endscreen?

> `optional` **display\_endscreen?**: `boolean`

Defined in: [src/parser/classes/LiveStreamability.ts:14](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/LiveStreamability.ts#L14)

***

### offline\_slate

> **offline\_slate**: [`LiveStreamOfflineSlate`](LiveStreamOfflineSlate.md) \| `null`

Defined in: [src/parser/classes/LiveStreamability.ts:22](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/LiveStreamability.ts#L22)

***

### poll\_delay\_ms?

> `optional` **poll\_delay\_ms?**: `string`

Defined in: [src/parser/classes/LiveStreamability.ts:15](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/LiveStreamability.ts#L15)

***

### renderer\_context?

> `optional` **renderer\_context?**: [`RendererContext`](../../Misc/classes/RendererContext.md)

Defined in: [src/parser/classes/LiveStreamability.ts:23](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/LiveStreamability.ts#L23)

***

### stream\_transition\_endpoint?

> `optional` **stream\_transition\_endpoint?**: [`NavigationEndpoint`](NavigationEndpoint.md)

Defined in: [src/parser/classes/LiveStreamability.ts:12](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/LiveStreamability.ts#L12)

***

### switch\_streams\_immediately?

> `optional` **switch\_streams\_immediately?**: `boolean`

Defined in: [src/parser/classes/LiveStreamability.ts:13](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/LiveStreamability.ts#L13)

***

### transition\_timing?

> `optional` **transition\_timing?**: `"STREAM_TRANSITION_TIMING_UNSPECIFIED"` \| `"STREAM_TRANSITION_TIMING_AT_HEAD"` \| `"STREAM_TRANSITION_TIMING_IMMEDIATELY"` \| `"STREAM_TRANSITION_TIMING_AT_STREAM_END"`

Defined in: [src/parser/classes/LiveStreamability.ts:17](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/LiveStreamability.ts#L17)

***

### type

> `readonly` **type**: `string`

Defined in: [src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/helpers.ts#L8)

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

***

### video\_id

> **video\_id**: `string`

Defined in: [src/parser/classes/LiveStreamability.ts:10](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/LiveStreamability.ts#L10)

***

### type

> `static` **type**: `string` = `'LiveStreamability'`

Defined in: [src/parser/classes/LiveStreamability.ts:8](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/LiveStreamability.ts#L8)

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type-1)

## Methods

### as()

> **as**\<`T`, `K`\>(...`types`): `InstanceType`\<`K`\[`number`\]\>

Defined in: [src/parser/helpers.ts:29](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/helpers.ts#L29)

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

> **hasKey**\<`T`, `R`\>(`key`): `this is LiveStreamability & { [k in string]: R }`

Defined in: [src/parser/helpers.ts:41](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/helpers.ts#L41)

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

`this is LiveStreamability & { [k in string]: R }`

Whether the node has the key

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`hasKey`](../../Helpers/classes/YTNode.md#haskey)

***

### is()

> **is**\<`T`, `K`\>(...`types`): `this is InstanceType<K[number]>`

Defined in: [src/parser/helpers.ts:19](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/helpers.ts#L19)

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

Defined in: [src/parser/helpers.ts:51](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/helpers.ts#L51)

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
