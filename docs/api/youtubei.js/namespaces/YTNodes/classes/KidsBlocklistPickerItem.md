[youtubei.js](../../../../README.md) / [YTNodes](../README.md) / KidsBlocklistPickerItem

# Class: KidsBlocklistPickerItem

Defined in: [src/parser/classes/ytkids/KidsBlocklistPickerItem.ts:10](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/ytkids/KidsBlocklistPickerItem.ts#L10)

## Extends

- [`YTNode`](../../Helpers/classes/YTNode.md)

## Constructors

### Constructor

> **new KidsBlocklistPickerItem**(`data`): `KidsBlocklistPickerItem`

Defined in: [src/parser/classes/ytkids/KidsBlocklistPickerItem.ts:21](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/ytkids/KidsBlocklistPickerItem.ts#L21)

#### Parameters

##### data

[`RawNode`](../../../../type-aliases/RawNode.md)

#### Returns

`KidsBlocklistPickerItem`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`constructor`](../../Helpers/classes/YTNode.md#constructor)

## Properties

### avatar

> **avatar**: [`Thumbnail`](../../Misc/classes/Thumbnail.md)[]

Defined in: [src/parser/classes/ytkids/KidsBlocklistPickerItem.ts:17](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/ytkids/KidsBlocklistPickerItem.ts#L17)

***

### block\_button

> **block\_button**: [`ToggleButton`](ToggleButton.md) \| `null`

Defined in: [src/parser/classes/ytkids/KidsBlocklistPickerItem.ts:18](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/ytkids/KidsBlocklistPickerItem.ts#L18)

***

### blocked\_entity\_key

> **blocked\_entity\_key**: `string`

Defined in: [src/parser/classes/ytkids/KidsBlocklistPickerItem.ts:19](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/ytkids/KidsBlocklistPickerItem.ts#L19)

***

### child\_account\_description

> **child\_account\_description**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/ytkids/KidsBlocklistPickerItem.ts:16](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/ytkids/KidsBlocklistPickerItem.ts#L16)

***

### child\_display\_name

> **child\_display\_name**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/ytkids/KidsBlocklistPickerItem.ts:15](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/ytkids/KidsBlocklistPickerItem.ts#L15)

***

### type

> `readonly` **type**: `string`

Defined in: [src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L8)

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

***

### type

> `static` **type**: `string` = `'KidsBlocklistPickerItem'`

Defined in: [src/parser/classes/ytkids/KidsBlocklistPickerItem.ts:11](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/ytkids/KidsBlocklistPickerItem.ts#L11)

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

### blockChannel()

> **blockChannel**(): `Promise`\<[`ApiResponse`](../../../../interfaces/ApiResponse.md)\>

Defined in: [src/parser/classes/ytkids/KidsBlocklistPickerItem.ts:30](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/ytkids/KidsBlocklistPickerItem.ts#L30)

#### Returns

`Promise`\<[`ApiResponse`](../../../../interfaces/ApiResponse.md)\>

***

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is KidsBlocklistPickerItem & { [k in string]: R }`

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

`this is KidsBlocklistPickerItem & { [k in string]: R }`

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

### setActions()

> **setActions**(`actions`): `void`

Defined in: [src/parser/classes/ytkids/KidsBlocklistPickerItem.ts:46](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/ytkids/KidsBlocklistPickerItem.ts#L46)

#### Parameters

##### actions

[`Actions`](../../../../classes/Actions.md) | `undefined`

#### Returns

`void`
