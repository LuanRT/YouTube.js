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

[src/parser/classes/NavigationEndpoint.ts:32](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/NavigationEndpoint.ts#L32)

## Properties

### command?

> `optional` **command**: [`YTNode`](../../Helpers/classes/YTNode.md) \| [`YTNode`](../../Helpers/classes/YTNode.md) & [`IEndpoint`](../../APIResponseTypes/interfaces/IEndpoint.md)\<`any`\>

#### Defined in

[src/parser/classes/NavigationEndpoint.ts:29](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/NavigationEndpoint.ts#L29)

***

### commands?

> `optional` **commands**: [`NavigationEndpoint`](NavigationEndpoint.md)[]

#### Defined in

[src/parser/classes/NavigationEndpoint.ts:30](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/NavigationEndpoint.ts#L30)

***

### dialog?

> `optional` **dialog**: `null` \| [`YTNode`](../../Helpers/classes/YTNode.md) \| [`CreatePlaylistDialog`](CreatePlaylistDialog.md)

#### Defined in

[src/parser/classes/NavigationEndpoint.ts:24](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/NavigationEndpoint.ts#L24)

***

### metadata

> **metadata**: `Metadata`

#### Defined in

[src/parser/classes/NavigationEndpoint.ts:28](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/NavigationEndpoint.ts#L28)

***

### modal?

> `optional` **modal**: `null` \| [`YTNode`](../../Helpers/classes/YTNode.md) \| [`ModalWithTitleAndButton`](ModalWithTitleAndButton.md)

#### Defined in

[src/parser/classes/NavigationEndpoint.ts:25](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/NavigationEndpoint.ts#L25)

***

### name?

> `optional` **name**: `string`

#### Defined in

[src/parser/classes/NavigationEndpoint.ts:22](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/NavigationEndpoint.ts#L22)

***

### next\_endpoint?

> `optional` **next\_endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

#### Defined in

[src/parser/classes/NavigationEndpoint.ts:27](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/NavigationEndpoint.ts#L27)

***

### open\_popup?

> `optional` **open\_popup**: `null` \| [`OpenPopupAction`](OpenPopupAction.md)

#### Defined in

[src/parser/classes/NavigationEndpoint.ts:26](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/NavigationEndpoint.ts#L26)

***

### payload

> **payload**: `any`

#### Defined in

[src/parser/classes/NavigationEndpoint.ts:23](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/NavigationEndpoint.ts#L23)

***

### type

> `readonly` **type**: `string`

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

#### Defined in

[src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/helpers.ts#L8)

***

### type

> `static` **type**: `string` = `'NavigationEndpoint'`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type-1)

#### Defined in

[src/parser/classes/NavigationEndpoint.ts:20](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/NavigationEndpoint.ts#L20)

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

[src/parser/helpers.ts:29](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/helpers.ts#L29)

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

[src/parser/classes/NavigationEndpoint.ts:121](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/NavigationEndpoint.ts#L121)

#### call(actions, args)

> **call**(`actions`, `args`?): `Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

##### Parameters

• **actions**: [`Actions`](../../../classes/Actions.md)

• **args?**

• **args.parse?**: `false`

##### Returns

`Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

##### Defined in

[src/parser/classes/NavigationEndpoint.ts:122](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/NavigationEndpoint.ts#L122)

***

### ~~getPath()~~

> **getPath**(`name`): `undefined` \| `"/browse"` \| `"/player"` \| `"/search"` \| `"/next"` \| `"/live_chat/get_item_context_menu"`

Sometimes InnerTube does not return an API url, in that case the library should set it based on the name of the payload object.

#### Parameters

• **name**: `string`

#### Returns

`undefined` \| `"/browse"` \| `"/player"` \| `"/search"` \| `"/next"` \| `"/live_chat/get_item_context_menu"`

#### Deprecated

This should be removed in the future.

#### Defined in

[src/parser/classes/NavigationEndpoint.ts:105](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/NavigationEndpoint.ts#L105)

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

[src/parser/helpers.ts:41](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/helpers.ts#L41)

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

[src/parser/helpers.ts:19](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/helpers.ts#L19)

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

[src/parser/helpers.ts:51](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/helpers.ts#L51)

***

### toURL()

> **toURL**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/parser/classes/NavigationEndpoint.ts:143](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/NavigationEndpoint.ts#L143)
