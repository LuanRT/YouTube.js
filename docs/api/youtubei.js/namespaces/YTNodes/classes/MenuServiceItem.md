[youtubei.js](../../../../README.md) / [YTNodes](../README.md) / MenuServiceItem

# Class: MenuServiceItem

Defined in: [src/parser/classes/menus/MenuServiceItem.ts:4](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/menus/MenuServiceItem.ts#L4)

## Extends

- [`Button`](Button.md)

## Constructors

### Constructor

> **new MenuServiceItem**(`data`): `MenuServiceItem`

Defined in: [src/parser/classes/menus/MenuServiceItem.ts:7](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/menus/MenuServiceItem.ts#L7)

#### Parameters

##### data

[`RawNode`](../../../../type-aliases/RawNode.md)

#### Returns

`MenuServiceItem`

#### Overrides

[`Button`](Button.md).[`constructor`](Button.md#constructor)

## Properties

### accessibility?

> `optional` **accessibility**: `AccessibilitySupportedDatas`

Defined in: [src/parser/classes/Button.ts:19](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Button.ts#L19)

#### Inherited from

[`Button`](Button.md).[`accessibility`](Button.md#accessibility)

***

### endpoint

> **endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

Defined in: [src/parser/classes/Button.ts:18](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Button.ts#L18)

#### Inherited from

[`Button`](Button.md).[`endpoint`](Button.md#endpoint)

***

### icon\_type?

> `optional` **icon\_type**: `string`

Defined in: [src/parser/classes/Button.ts:15](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Button.ts#L15)

#### Inherited from

[`Button`](Button.md).[`icon_type`](Button.md#icon_type)

***

### is\_disabled?

> `optional` **is\_disabled**: `boolean`

Defined in: [src/parser/classes/Button.ts:16](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Button.ts#L16)

#### Inherited from

[`Button`](Button.md).[`is_disabled`](Button.md#is_disabled)

***

### label?

> `optional` **label**: `string`

Defined in: [src/parser/classes/Button.ts:11](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Button.ts#L11)

#### Inherited from

[`Button`](Button.md).[`label`](Button.md#label)

***

### size?

> `optional` **size**: `string`

Defined in: [src/parser/classes/Button.ts:14](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Button.ts#L14)

#### Inherited from

[`Button`](Button.md).[`size`](Button.md#size)

***

### style?

> `optional` **style**: `string`

Defined in: [src/parser/classes/Button.ts:13](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Button.ts#L13)

#### Inherited from

[`Button`](Button.md).[`style`](Button.md#style)

***

### target\_id?

> `optional` **target\_id**: `string`

Defined in: [src/parser/classes/Button.ts:17](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Button.ts#L17)

#### Inherited from

[`Button`](Button.md).[`target_id`](Button.md#target_id)

***

### text?

> `optional` **text**: `string`

Defined in: [src/parser/classes/Button.ts:10](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Button.ts#L10)

#### Inherited from

[`Button`](Button.md).[`text`](Button.md#text)

***

### tooltip?

> `optional` **tooltip**: `string`

Defined in: [src/parser/classes/Button.ts:12](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Button.ts#L12)

#### Inherited from

[`Button`](Button.md).[`tooltip`](Button.md#tooltip)

***

### type

> `readonly` **type**: `string`

Defined in: [src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L8)

#### Inherited from

[`Button`](Button.md).[`type`](Button.md#type)

***

### type

> `static` **type**: `string` = `'MenuServiceItem'`

Defined in: [src/parser/classes/menus/MenuServiceItem.ts:5](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/menus/MenuServiceItem.ts#L5)

#### Overrides

[`Button`](Button.md).[`type`](Button.md#type-1)

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

[`Button`](Button.md).[`as`](Button.md#as)

***

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is MenuServiceItem & { [k in string]: R }`

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

`this is MenuServiceItem & { [k in string]: R }`

Whether the node has the key

#### Inherited from

[`Button`](Button.md).[`hasKey`](Button.md#haskey)

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

[`Button`](Button.md).[`is`](Button.md#is)

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

[`Button`](Button.md).[`key`](Button.md#key)
