[youtubei.js](../../../../README.md) / [YTNodes](../README.md) / PlaylistCollaborationView

# Class: PlaylistCollaborationView

Defined in: [src/parser/classes/PlaylistCollaborationView.ts:7](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/PlaylistCollaborationView.ts#L7)

## Extends

- [`YTNode`](../../Helpers/classes/YTNode.md)

## Constructors

### Constructor

> **new PlaylistCollaborationView**(`data`): `PlaylistCollaborationView`

Defined in: [src/parser/classes/PlaylistCollaborationView.ts:23](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/PlaylistCollaborationView.ts#L23)

#### Parameters

##### data

[`RawNode`](../../../../type-aliases/RawNode.md)

#### Returns

`PlaylistCollaborationView`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`constructor`](../../Helpers/classes/YTNode.md#constructor)

## Properties

### allow\_new\_collaborators\_playlist\_collaboration\_setting

> **allow\_new\_collaborators\_playlist\_collaboration\_setting**: [`YTNode`](../../Helpers/classes/YTNode.md) \| `null`

Defined in: [src/parser/classes/PlaylistCollaborationView.ts:18](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/PlaylistCollaborationView.ts#L18)

***

### collaborate\_playlist\_collaboration\_setting

> **collaborate\_playlist\_collaboration\_setting**: [`YTNode`](../../Helpers/classes/YTNode.md) \| `null`

Defined in: [src/parser/classes/PlaylistCollaborationView.ts:13](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/PlaylistCollaborationView.ts#L13)

***

### collaboration\_type?

> `optional` **collaboration\_type?**: `"COLLABORATION_TYPE_UNSPECIFIED"` \| `"COLLABORATION_TYPE_DEFAULT"` \| `"COLLABORATION_TYPE_TASTE_MATCH"`

Defined in: [src/parser/classes/PlaylistCollaborationView.ts:17](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/PlaylistCollaborationView.ts#L17)

***

### copy\_link\_button

> **copy\_link\_button**: [`YTNode`](../../Helpers/classes/YTNode.md) \| `null`

Defined in: [src/parser/classes/PlaylistCollaborationView.ts:12](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/PlaylistCollaborationView.ts#L12)

***

### invite\_collaborators\_button

> **invite\_collaborators\_button**: [`YTNode`](../../Helpers/classes/YTNode.md) \| `null`

Defined in: [src/parser/classes/PlaylistCollaborationView.ts:21](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/PlaylistCollaborationView.ts#L21)

***

### leave\_collaborative\_playlist\_confirmation\_dialog

> **leave\_collaborative\_playlist\_confirmation\_dialog**: [`YTNode`](../../Helpers/classes/YTNode.md) \| `null`

Defined in: [src/parser/classes/PlaylistCollaborationView.ts:16](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/PlaylistCollaborationView.ts#L16)

***

### playlist\_collaboration\_entity\_key?

> `optional` **playlist\_collaboration\_entity\_key?**: `string`

Defined in: [src/parser/classes/PlaylistCollaborationView.ts:14](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/PlaylistCollaborationView.ts#L14)

***

### playlist\_collaboration\_form\_schema?

> `optional` **playlist\_collaboration\_form\_schema?**: [`PlaylistCollaborationFormSchema`](../../Misc/classes/PlaylistCollaborationFormSchema.md)

Defined in: [src/parser/classes/PlaylistCollaborationView.ts:19](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/PlaylistCollaborationView.ts#L19)

***

### playlist\_collaborators?

> `optional` **playlist\_collaborators?**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`ContentListItemView`](ContentListItemView.md)\>

Defined in: [src/parser/classes/PlaylistCollaborationView.ts:10](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/PlaylistCollaborationView.ts#L10)

***

### playlist\_collaborators\_data?

> `optional` **playlist\_collaborators\_data?**: [`PlaylistCollaborationViewModelPlaylistCollaboratorData`](../../Misc/classes/PlaylistCollaborationViewModelPlaylistCollaboratorData.md)[]

Defined in: [src/parser/classes/PlaylistCollaborationView.ts:15](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/PlaylistCollaborationView.ts#L15)

***

### turn\_off\_allow\_new\_collaborators\_dialog

> **turn\_off\_allow\_new\_collaborators\_dialog**: [`YTNode`](../../Helpers/classes/YTNode.md) \| `null`

Defined in: [src/parser/classes/PlaylistCollaborationView.ts:20](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/PlaylistCollaborationView.ts#L20)

***

### turn\_off\_collaboration\_dialog

> **turn\_off\_collaboration\_dialog**: [`YTNode`](../../Helpers/classes/YTNode.md) \| `null`

Defined in: [src/parser/classes/PlaylistCollaborationView.ts:11](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/PlaylistCollaborationView.ts#L11)

***

### type

> `readonly` **type**: `string`

Defined in: [src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/helpers.ts#L8)

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

***

### type

> `static` **type**: `string` = `'PlaylistCollaborationView'`

Defined in: [src/parser/classes/PlaylistCollaborationView.ts:8](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/PlaylistCollaborationView.ts#L8)

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

> **hasKey**\<`T`, `R`\>(`key`): `this is PlaylistCollaborationView & { [k in string]: R }`

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

`this is PlaylistCollaborationView & { [k in string]: R }`

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
