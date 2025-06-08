[youtubei.js](../../../README.md) / [YTNodes](../README.md) / NavigationEndpoint

# Class: NavigationEndpoint

## Extends

- [`YTNode`](../../Helpers/classes/YTNode.md)

## Constructors

### new NavigationEndpoint()

> **new NavigationEndpoint**(`data`): [`NavigationEndpoint`](NavigationEndpoint.md)

#### Parameters

• **data**: [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

#### Returns

[`NavigationEndpoint`](NavigationEndpoint.md)

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`constructor`](../../Helpers/classes/YTNode.md#constructors)

#### Defined in

[src/parser/classes/NavigationEndpoint.ts:31](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/NavigationEndpoint.ts#L31)

## Properties

### command?

> `optional` **command**: [`YTNode`](../../Helpers/classes/YTNode.md) \| [`YTNode`](../../Helpers/classes/YTNode.md) & [`IEndpoint`](../../APIResponseTypes/interfaces/IEndpoint.md)\<`any`\>

#### Defined in

[src/parser/classes/NavigationEndpoint.ts:28](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/NavigationEndpoint.ts#L28)

***

### commands?

> `optional` **commands**: [`NavigationEndpoint`](NavigationEndpoint.md)[]

#### Defined in

[src/parser/classes/NavigationEndpoint.ts:29](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/NavigationEndpoint.ts#L29)

***

### dialog?

> `optional` **dialog**: `null` \| [`YTNode`](../../Helpers/classes/YTNode.md) \| [`CreatePlaylistDialog`](CreatePlaylistDialog.md)

#### Defined in

[src/parser/classes/NavigationEndpoint.ts:23](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/NavigationEndpoint.ts#L23)

***

### metadata

> **metadata**: `Metadata`

#### Defined in

[src/parser/classes/NavigationEndpoint.ts:27](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/NavigationEndpoint.ts#L27)

***

### modal?

> `optional` **modal**: `null` \| [`YTNode`](../../Helpers/classes/YTNode.md) \| [`ModalWithTitleAndButton`](ModalWithTitleAndButton.md)

#### Defined in

[src/parser/classes/NavigationEndpoint.ts:24](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/NavigationEndpoint.ts#L24)

***

### name?

> `optional` **name**: `string`

#### Defined in

[src/parser/classes/NavigationEndpoint.ts:21](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/NavigationEndpoint.ts#L21)

***

### next\_endpoint?

> `optional` **next\_endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

#### Defined in

[src/parser/classes/NavigationEndpoint.ts:26](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/NavigationEndpoint.ts#L26)

***

### open\_popup?

> `optional` **open\_popup**: `null` \| [`OpenPopupAction`](OpenPopupAction.md)

#### Defined in

[src/parser/classes/NavigationEndpoint.ts:25](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/NavigationEndpoint.ts#L25)

***

### payload

> **payload**: `any`

#### Defined in

[src/parser/classes/NavigationEndpoint.ts:22](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/NavigationEndpoint.ts#L22)

***

### type

> `readonly` **type**: `string`

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

#### Defined in

[src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L8)

***

### type

> `static` **type**: `string` = `'NavigationEndpoint'`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type-1)

#### Defined in

[src/parser/classes/NavigationEndpoint.ts:19](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/NavigationEndpoint.ts#L19)

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

[src/parser/helpers.ts:38](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L38)

***

### call()

#### call(actions, args)

> **call**\<`T`\>(`actions`, `args`): `Promise`\<`T`\>

##### Type Parameters

• **T** *extends* [`IParsedResponse`](../../APIResponseTypes/interfaces/IParsedResponse.md)

##### Parameters

• **actions**: [`Actions`](../../../classes/Actions.md)

• **args**

• **args.parse**: `true`

##### Returns

`Promise`\<`T`\>

##### Defined in

[src/parser/classes/NavigationEndpoint.ts:120](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/NavigationEndpoint.ts#L120)

#### call(actions, args)

> **call**(`actions`, `args`?): `Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

##### Parameters

• **actions**: [`Actions`](../../../classes/Actions.md)

• **args?**

• **args.parse?**: `false`

##### Returns

`Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

##### Defined in

[src/parser/classes/NavigationEndpoint.ts:121](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/NavigationEndpoint.ts#L121)

***

### ~~getPath()~~

> **getPath**(`name`): `undefined` \| `"/player"` \| `"/search"` \| `"/browse"` \| `"/next"` \| `"/live_chat/get_item_context_menu"`

Sometimes InnerTube does not return an API url, in that case the library should set it based on the name of the payload object.

#### Parameters

• **name**: `string`

#### Returns

`undefined` \| `"/player"` \| `"/search"` \| `"/browse"` \| `"/next"` \| `"/live_chat/get_item_context_menu"`

#### Deprecated

This should be removed in the future.

#### Defined in

[src/parser/classes/NavigationEndpoint.ts:104](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/NavigationEndpoint.ts#L104)

***

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is NavigationEndpoint & { [k in string]: R }`

Check for a key without asserting the type.

#### Type Parameters

• **T** *extends* `string`

• **R** = `any`

#### Parameters

• **key**: `T`

The key to check

#### Returns

`this is NavigationEndpoint & { [k in string]: R }`

Whether the node has the key

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`hasKey`](../../Helpers/classes/YTNode.md#haskey)

#### Defined in

[src/parser/helpers.ts:50](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L50)

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

[src/parser/helpers.ts:28](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L28)

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

[src/parser/helpers.ts:60](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L60)

***

### toURL()

> **toURL**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/parser/classes/NavigationEndpoint.ts:137](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/NavigationEndpoint.ts#L137)
