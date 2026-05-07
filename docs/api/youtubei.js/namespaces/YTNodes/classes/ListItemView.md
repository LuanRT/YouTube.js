[youtubei.js](../../../../README.md) / [YTNodes](../README.md) / ListItemView

# Class: ListItemView

Defined in: [src/parser/classes/ListItemView.ts:11](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/classes/ListItemView.ts#L11)

## Extends

- [`YTNode`](../../Helpers/classes/YTNode.md)

## Constructors

### Constructor

> **new ListItemView**(`data`): `ListItemView`

Defined in: [src/parser/classes/ListItemView.ts:33](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/classes/ListItemView.ts#L33)

#### Parameters

##### data

[`RawNode`](../../../../type-aliases/RawNode.md)

#### Returns

`ListItemView`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`constructor`](../../Helpers/classes/YTNode.md#constructor)

## Properties

### background\_color?

> `optional` **background\_color**: `number`

Defined in: [src/parser/classes/ListItemView.ts:23](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/classes/ListItemView.ts#L23)

***

### has\_divider\_below

> **has\_divider\_below**: `boolean`

Defined in: [src/parser/classes/ListItemView.ts:30](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/classes/ListItemView.ts#L30)

***

### is\_disabled

> **is\_disabled**: `boolean`

Defined in: [src/parser/classes/ListItemView.ts:28](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/classes/ListItemView.ts#L28)

***

### is\_selected

> **is\_selected**: `boolean`

Defined in: [src/parser/classes/ListItemView.ts:29](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/classes/ListItemView.ts#L29)

***

### leading\_accessory

> **leading\_accessory**: [`AvatarView`](AvatarView.md) \| `null`

Defined in: [src/parser/classes/ListItemView.ts:25](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/classes/ListItemView.ts#L25)

***

### renderer\_context?

> `optional` **renderer\_context**: [`RendererContext`](../../Misc/classes/RendererContext.md)

Defined in: [src/parser/classes/ListItemView.ts:31](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/classes/ListItemView.ts#L31)

***

### selection\_style?

> `optional` **selection\_style**: `"LIST_ITEM_SELECTION_STYLE_UNSPECIFIED"` \| `"LIST_ITEM_SELECTION_STYLE_DEFAULT"` \| `"LIST_ITEM_SELECTION_STYLE_CHECKBOX"` \| `"LIST_ITEM_SELECTION_STYLE_RADIO"` \| `"LIST_ITEM_SELECTION_STYLE_TOGGLE"`

Defined in: [src/parser/classes/ListItemView.ts:17](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/classes/ListItemView.ts#L17)

***

### selection\_text?

> `optional` **selection\_text**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/ListItemView.ts:16](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/classes/ListItemView.ts#L16)

***

### subtitle?

> `optional` **subtitle**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/ListItemView.ts:15](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/classes/ListItemView.ts#L15)

***

### title?

> `optional` **title**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/ListItemView.ts:14](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/classes/ListItemView.ts#L14)

***

### trailing\_button

> **trailing\_button**: [`YTNode`](../../Helpers/classes/YTNode.md) \| `null`

Defined in: [src/parser/classes/ListItemView.ts:26](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/classes/ListItemView.ts#L26)

***

### trailing\_buttons

> **trailing\_buttons**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`SubscribeButtonView`](SubscribeButtonView.md)\>

Defined in: [src/parser/classes/ListItemView.ts:27](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/classes/ListItemView.ts#L27)

***

### type

> `readonly` **type**: `string`

Defined in: [src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/helpers.ts#L8)

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

***

### type

> `static` **type**: `string` = `'ListItemView'`

Defined in: [src/parser/classes/ListItemView.ts:12](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/classes/ListItemView.ts#L12)

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type-1)

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

> **hasKey**\<`T`, `R`\>(`key`): `this is ListItemView & { [k in string]: R }`

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

`this is ListItemView & { [k in string]: R }`

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
