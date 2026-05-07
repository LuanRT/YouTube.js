[youtubei.js](../../../../README.md) / [YTNodes](../README.md) / UpdateViewershipAction

# Class: UpdateViewershipAction

Defined in: [src/parser/classes/livechat/UpdateViewershipAction.ts:6](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/classes/livechat/UpdateViewershipAction.ts#L6)

## Extends

- [`YTNode`](../../Helpers/classes/YTNode.md)

## Constructors

### Constructor

> **new UpdateViewershipAction**(`data`): `UpdateViewershipAction`

Defined in: [src/parser/classes/livechat/UpdateViewershipAction.ts:53](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/classes/livechat/UpdateViewershipAction.ts#L53)

#### Parameters

##### data

[`RawNode`](../../../../type-aliases/RawNode.md)

#### Returns

`UpdateViewershipAction`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`constructor`](../../Helpers/classes/YTNode.md#constructor)

## Properties

### type

> `readonly` **type**: `string`

Defined in: [src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/helpers.ts#L8)

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

***

### view\_count\_node

> **view\_count\_node**: [`VideoViewCount`](VideoViewCount.md) \| `null`

Defined in: [src/parser/classes/livechat/UpdateViewershipAction.ts:9](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/classes/livechat/UpdateViewershipAction.ts#L9)

***

### type

> `static` **type**: `string` = `'UpdateViewershipAction'`

Defined in: [src/parser/classes/livechat/UpdateViewershipAction.ts:7](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/classes/livechat/UpdateViewershipAction.ts#L7)

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type-1)

## Accessors

### extra\_short\_view\_count

#### Get Signature

> **get** **extra\_short\_view\_count**(): [`Text`](../../Misc/classes/Text.md) \| `undefined`

Defined in: [src/parser/classes/livechat/UpdateViewershipAction.ts:21](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/classes/livechat/UpdateViewershipAction.ts#L21)

##### Deprecated

Use `view_count_node.extra_short_view_count` instead.

##### Returns

[`Text`](../../Misc/classes/Text.md) \| `undefined`

***

### is\_live

#### Get Signature

> **get** **is\_live**(): `boolean` \| `undefined`

Defined in: [src/parser/classes/livechat/UpdateViewershipAction.ts:49](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/classes/livechat/UpdateViewershipAction.ts#L49)

##### Deprecated

Use `view_count_node.is_live` instead.

##### Returns

`boolean` \| `undefined`

***

### original\_view\_count

#### Get Signature

> **get** **original\_view\_count**(): `number` \| `undefined`

Defined in: [src/parser/classes/livechat/UpdateViewershipAction.ts:35](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/classes/livechat/UpdateViewershipAction.ts#L35)

##### Deprecated

Use `view_count_node.original_view_count` instead.

##### Returns

`number` \| `undefined`

***

### short\_view\_count

#### Get Signature

> **get** **short\_view\_count**(): [`Text`](../../Misc/classes/Text.md) \| `undefined`

Defined in: [src/parser/classes/livechat/UpdateViewershipAction.ts:28](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/classes/livechat/UpdateViewershipAction.ts#L28)

##### Deprecated

Use `view_count_node.short_view_count` instead.

##### Returns

[`Text`](../../Misc/classes/Text.md) \| `undefined`

***

### unlabeled\_view\_count\_value

#### Get Signature

> **get** **unlabeled\_view\_count\_value**(): [`Text`](../../Misc/classes/Text.md) \| `undefined`

Defined in: [src/parser/classes/livechat/UpdateViewershipAction.ts:42](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/classes/livechat/UpdateViewershipAction.ts#L42)

##### Deprecated

Use `view_count_node.unlabeled_view_count_value` instead.

##### Returns

[`Text`](../../Misc/classes/Text.md) \| `undefined`

***

### view\_count

#### Get Signature

> **get** **view\_count**(): [`Text`](../../Misc/classes/Text.md) \| `undefined`

Defined in: [src/parser/classes/livechat/UpdateViewershipAction.ts:14](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/classes/livechat/UpdateViewershipAction.ts#L14)

##### Deprecated

Use `view_count_node.view_count` instead.

##### Returns

[`Text`](../../Misc/classes/Text.md) \| `undefined`

## Methods

### as()

> **as**\<`T`, `K`\>(...`types`): `InstanceType`\<`K`\[`number`\]\>

Defined in: [src/parser/helpers.ts:29](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/helpers.ts#L29)

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

> **hasKey**\<`T`, `R`\>(`key`): `this is UpdateViewershipAction & { [k in string]: R }`

Defined in: [src/parser/helpers.ts:41](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/helpers.ts#L41)

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

`this is UpdateViewershipAction & { [k in string]: R }`

Whether the node has the key

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`hasKey`](../../Helpers/classes/YTNode.md#haskey)

***

### is()

> **is**\<`T`, `K`\>(...`types`): `this is InstanceType<K[number]>`

Defined in: [src/parser/helpers.ts:19](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/helpers.ts#L19)

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

Defined in: [src/parser/helpers.ts:51](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/helpers.ts#L51)

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
