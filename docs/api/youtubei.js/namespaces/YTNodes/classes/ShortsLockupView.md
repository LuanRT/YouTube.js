[youtubei.js](../../../../README.md) / [YTNodes](../README.md) / ShortsLockupView

# Class: ShortsLockupView

Defined in: [src/parser/classes/ShortsLockupView.ts:10](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/classes/ShortsLockupView.ts#L10)

## Extends

- [`YTNode`](../../Helpers/classes/YTNode.md)

## Constructors

### Constructor

> **new ShortsLockupView**(`data`): `ShortsLockupView`

Defined in: [src/parser/classes/ShortsLockupView.ts:28](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/classes/ShortsLockupView.ts#L28)

#### Parameters

##### data

[`RawNode`](../../../../type-aliases/RawNode.md)

#### Returns

`ShortsLockupView`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`constructor`](../../Helpers/classes/YTNode.md#constructor)

## Properties

### accessibility\_text

> **accessibility\_text**: `string`

Defined in: [src/parser/classes/ShortsLockupView.ts:14](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/classes/ShortsLockupView.ts#L14)

***

### badge?

> `optional` **badge?**: [`BadgeView`](BadgeView.md) \| `null`

Defined in: [src/parser/classes/ShortsLockupView.ts:26](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/classes/ShortsLockupView.ts#L26)

***

### entity\_id

> **entity\_id**: `string`

Defined in: [src/parser/classes/ShortsLockupView.ts:13](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/classes/ShortsLockupView.ts#L13)

***

### index\_in\_collection

> **index\_in\_collection**: `number`

Defined in: [src/parser/classes/ShortsLockupView.ts:19](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/classes/ShortsLockupView.ts#L19)

***

### inline\_player\_data?

> `optional` **inline\_player\_data?**: [`NavigationEndpoint`](NavigationEndpoint.md)

Defined in: [src/parser/classes/ShortsLockupView.ts:25](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/classes/ShortsLockupView.ts#L25)

***

### menu\_on\_tap

> **menu\_on\_tap**: [`NavigationEndpoint`](NavigationEndpoint.md)

Defined in: [src/parser/classes/ShortsLockupView.ts:18](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/classes/ShortsLockupView.ts#L18)

***

### menu\_on\_tap\_a11y\_label

> **menu\_on\_tap\_a11y\_label**: `string`

Defined in: [src/parser/classes/ShortsLockupView.ts:20](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/classes/ShortsLockupView.ts#L20)

***

### on\_tap\_endpoint

> **on\_tap\_endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

Defined in: [src/parser/classes/ShortsLockupView.ts:17](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/classes/ShortsLockupView.ts#L17)

***

### overlay\_metadata

> **overlay\_metadata**: `object`

Defined in: [src/parser/classes/ShortsLockupView.ts:21](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/classes/ShortsLockupView.ts#L21)

#### primary\_text?

> `optional` **primary\_text?**: [`Text`](../../Misc/classes/Text.md)

#### secondary\_text?

> `optional` **secondary\_text?**: [`Text`](../../Misc/classes/Text.md)

***

### thumbnail

> **thumbnail**: [`Thumbnail`](../../Misc/classes/Thumbnail.md)[]

Defined in: [src/parser/classes/ShortsLockupView.ts:15](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/classes/ShortsLockupView.ts#L15)

***

### thumbnail\_view\_model

> **thumbnail\_view\_model**: [`ThumbnailView`](ThumbnailView.md) \| `null`

Defined in: [src/parser/classes/ShortsLockupView.ts:16](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/classes/ShortsLockupView.ts#L16)

***

### type

> `readonly` **type**: `string`

Defined in: [src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/helpers.ts#L8)

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

***

### type

> `static` **type**: `string` = `'ShortsLockupView'`

Defined in: [src/parser/classes/ShortsLockupView.ts:11](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/classes/ShortsLockupView.ts#L11)

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type-1)

## Methods

### as()

> **as**\<`T`, `K`\>(...`types`): `InstanceType`\<`K`\[`number`\]\>

Defined in: [src/parser/helpers.ts:29](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/helpers.ts#L29)

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

> **hasKey**\<`T`, `R`\>(`key`): `this is ShortsLockupView & { [k in string]: R }`

Defined in: [src/parser/helpers.ts:41](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/helpers.ts#L41)

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

`this is ShortsLockupView & { [k in string]: R }`

Whether the node has the key

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`hasKey`](../../Helpers/classes/YTNode.md#haskey)

***

### is()

> **is**\<`T`, `K`\>(...`types`): `this is InstanceType<K[number]>`

Defined in: [src/parser/helpers.ts:19](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/helpers.ts#L19)

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

Defined in: [src/parser/helpers.ts:51](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/helpers.ts#L51)

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
