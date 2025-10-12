[youtubei.js](../../../README.md) / [YTNodes](../README.md) / SubscribeButtonView

# Class: SubscribeButtonView

## Extends

- [`YTNode`](../../Helpers/classes/YTNode.md)

## Constructors

### new SubscribeButtonView()

> **new SubscribeButtonView**(`data`): [`SubscribeButtonView`](SubscribeButtonView.md)

#### Parameters

• **data**: [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

#### Returns

[`SubscribeButtonView`](SubscribeButtonView.md)

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`constructor`](../../Helpers/classes/YTNode.md#constructors)

#### Defined in

[src/parser/classes/SubscribeButtonView.ts:36](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/classes/SubscribeButtonView.ts#L36)

## Properties

### background\_style

> **background\_style**: `string`

#### Defined in

[src/parser/classes/SubscribeButtonView.ts:24](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/classes/SubscribeButtonView.ts#L24)

***

### bell\_accessiblity\_data

> **bell\_accessiblity\_data**: `object`

#### all\_label

> **all\_label**: `string`

#### disabled\_label

> **disabled\_label**: `string`

#### occasional\_label

> **occasional\_label**: `string`

#### off\_label

> **off\_label**: `string`

#### Defined in

[src/parser/classes/SubscribeButtonView.ts:29](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/classes/SubscribeButtonView.ts#L29)

***

### button\_style

> **button\_style**: `object`

#### subscribed\_state\_style

> **subscribed\_state\_style**: `string`

#### unsubscribed\_state\_style

> **unsubscribed\_state\_style**: `string`

#### Defined in

[src/parser/classes/SubscribeButtonView.ts:19](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/classes/SubscribeButtonView.ts#L19)

***

### channel\_id

> **channel\_id**: `string`

#### Defined in

[src/parser/classes/SubscribeButtonView.ts:27](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/classes/SubscribeButtonView.ts#L27)

***

### disable\_notification\_bell

> **disable\_notification\_bell**: `boolean`

#### Defined in

[src/parser/classes/SubscribeButtonView.ts:18](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/classes/SubscribeButtonView.ts#L18)

***

### disable\_subscribe\_button

> **disable\_subscribe\_button**: `boolean`

#### Defined in

[src/parser/classes/SubscribeButtonView.ts:25](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/classes/SubscribeButtonView.ts#L25)

***

### enable\_subscribe\_button\_post\_click\_animation

> **enable\_subscribe\_button\_post\_click\_animation**: `boolean`

#### Defined in

[src/parser/classes/SubscribeButtonView.ts:28](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/classes/SubscribeButtonView.ts#L28)

***

### is\_signed\_out

> **is\_signed\_out**: `boolean`

#### Defined in

[src/parser/classes/SubscribeButtonView.ts:23](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/classes/SubscribeButtonView.ts#L23)

***

### on\_show\_subscription\_options

> **on\_show\_subscription\_options**: [`NavigationEndpoint`](NavigationEndpoint.md)

#### Defined in

[src/parser/classes/SubscribeButtonView.ts:26](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/classes/SubscribeButtonView.ts#L26)

***

### subscribe\_button\_content

> **subscribe\_button\_content**: `ButtonContent`

#### Defined in

[src/parser/classes/SubscribeButtonView.ts:16](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/classes/SubscribeButtonView.ts#L16)

***

### type

> `readonly` **type**: `string`

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

#### Defined in

[src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/helpers.ts#L8)

***

### unsubscribe\_button\_content

> **unsubscribe\_button\_content**: `ButtonContent`

#### Defined in

[src/parser/classes/SubscribeButtonView.ts:17](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/classes/SubscribeButtonView.ts#L17)

***

### type

> `static` **type**: `string` = `'SubscribeButtonView'`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type-1)

#### Defined in

[src/parser/classes/SubscribeButtonView.ts:14](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/parser/classes/SubscribeButtonView.ts#L14)

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

> **hasKey**\<`T`, `R`\>(`key`): `this is SubscribeButtonView & { [k in string]: R }`

Check for a key without asserting the type.

#### Type Parameters

• **T** *extends* `string`

• **R** = `any`

#### Parameters

• **key**: `T`

The key to check

#### Returns

`this is SubscribeButtonView & { [k in string]: R }`

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
