[youtubei.js](../../../../README.md) / [YTNodes](../README.md) / SubscribeButtonView

# Class: SubscribeButtonView

Defined in: [src/parser/classes/SubscribeButtonView.ts:25](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/classes/SubscribeButtonView.ts#L25)

## Extends

- [`YTNode`](../../Helpers/classes/YTNode.md)

## Constructors

### Constructor

> **new SubscribeButtonView**(`data`): `SubscribeButtonView`

Defined in: [src/parser/classes/SubscribeButtonView.ts:40](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/classes/SubscribeButtonView.ts#L40)

#### Parameters

##### data

[`RawNode`](../../../../type-aliases/RawNode.md)

#### Returns

`SubscribeButtonView`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`constructor`](../../Helpers/classes/YTNode.md#constructor)

## Properties

### background\_style

> **background\_style**: `string`

Defined in: [src/parser/classes/SubscribeButtonView.ts:33](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/classes/SubscribeButtonView.ts#L33)

***

### bell\_accessibility\_data?

> `optional` **bell\_accessibility\_data**: `BellAccessibilityData`

Defined in: [src/parser/classes/SubscribeButtonView.ts:38](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/classes/SubscribeButtonView.ts#L38)

***

### button\_style?

> `optional` **button\_style**: `ButtonStyle`

Defined in: [src/parser/classes/SubscribeButtonView.ts:31](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/classes/SubscribeButtonView.ts#L31)

***

### channel\_id

> **channel\_id**: `string`

Defined in: [src/parser/classes/SubscribeButtonView.ts:36](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/classes/SubscribeButtonView.ts#L36)

***

### disable\_notification\_bell

> **disable\_notification\_bell**: `boolean`

Defined in: [src/parser/classes/SubscribeButtonView.ts:30](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/classes/SubscribeButtonView.ts#L30)

***

### disable\_subscribe\_button

> **disable\_subscribe\_button**: `boolean`

Defined in: [src/parser/classes/SubscribeButtonView.ts:34](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/classes/SubscribeButtonView.ts#L34)

***

### enable\_subscribe\_button\_post\_click\_animation

> **enable\_subscribe\_button\_post\_click\_animation**: `boolean`

Defined in: [src/parser/classes/SubscribeButtonView.ts:37](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/classes/SubscribeButtonView.ts#L37)

***

### is\_signed\_out

> **is\_signed\_out**: `boolean`

Defined in: [src/parser/classes/SubscribeButtonView.ts:32](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/classes/SubscribeButtonView.ts#L32)

***

### on\_show\_subscription\_options?

> `optional` **on\_show\_subscription\_options**: [`NavigationEndpoint`](NavigationEndpoint.md)

Defined in: [src/parser/classes/SubscribeButtonView.ts:35](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/classes/SubscribeButtonView.ts#L35)

***

### subscribe\_button\_content

> **subscribe\_button\_content**: `ButtonContent`

Defined in: [src/parser/classes/SubscribeButtonView.ts:28](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/classes/SubscribeButtonView.ts#L28)

***

### type

> `readonly` **type**: `string`

Defined in: [src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/helpers.ts#L8)

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

***

### unsubscribe\_button\_content

> **unsubscribe\_button\_content**: `ButtonContent`

Defined in: [src/parser/classes/SubscribeButtonView.ts:29](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/classes/SubscribeButtonView.ts#L29)

***

### type

> `static` **type**: `string` = `'SubscribeButtonView'`

Defined in: [src/parser/classes/SubscribeButtonView.ts:26](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/classes/SubscribeButtonView.ts#L26)

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type-1)

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

> **hasKey**\<`T`, `R`\>(`key`): `this is SubscribeButtonView & { [k in string]: R }`

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

`this is SubscribeButtonView & { [k in string]: R }`

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
