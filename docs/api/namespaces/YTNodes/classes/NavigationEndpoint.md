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

[src/parser/classes/NavigationEndpoint.ts:27](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/NavigationEndpoint.ts#L27)

## Properties

### dialog?

> `optional` **dialog**: `null` \| [`YTNode`](../../Helpers/classes/YTNode.md) \| [`CreatePlaylistDialog`](CreatePlaylistDialog.md)

#### Defined in

[src/parser/classes/NavigationEndpoint.ts:14](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/NavigationEndpoint.ts#L14)

***

### metadata

> **metadata**: `object`

#### api\_url?

> `optional` **api\_url**: `string`

#### page\_type?

> `optional` **page\_type**: `string`

#### send\_post?

> `optional` **send\_post**: `boolean`

#### url?

> `optional` **url**: `string`

#### Defined in

[src/parser/classes/NavigationEndpoint.ts:20](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/NavigationEndpoint.ts#L20)

***

### modal?

> `optional` **modal**: `null` \| [`YTNode`](../../Helpers/classes/YTNode.md) \| [`ModalWithTitleAndButton`](ModalWithTitleAndButton.md)

#### Defined in

[src/parser/classes/NavigationEndpoint.ts:15](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/NavigationEndpoint.ts#L15)

***

### next\_endpoint?

> `optional` **next\_endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

#### Defined in

[src/parser/classes/NavigationEndpoint.ts:18](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/NavigationEndpoint.ts#L18)

***

### open\_popup?

> `optional` **open\_popup**: `null` \| [`OpenPopupAction`](OpenPopupAction.md)

#### Defined in

[src/parser/classes/NavigationEndpoint.ts:16](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/NavigationEndpoint.ts#L16)

***

### payload

> **payload**: `any`

#### Defined in

[src/parser/classes/NavigationEndpoint.ts:13](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/NavigationEndpoint.ts#L13)

***

### type

> `readonly` **type**: `string`

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

#### Defined in

[src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L8)

***

### type

> `static` **type**: `string` = `'NavigationEndpoint'`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type-1)

#### Defined in

[src/parser/classes/NavigationEndpoint.ts:11](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/NavigationEndpoint.ts#L11)

## Methods

### as()

> **as**\<`T`, `K`\>(...`types`): `InstanceType`\<`K`\[`number`\]\>

Cast to one of the given types.

#### Type Parameters

• **T** *extends* [`YTNode`](../../Helpers/classes/YTNode.md)

• **K** *extends* [`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)\<`T`\>[]

#### Parameters

• ...**types**: `K`

#### Returns

`InstanceType`\<`K`\[`number`\]\>

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`as`](../../Helpers/classes/YTNode.md#as)

#### Defined in

[src/parser/helpers.ts:35](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L35)

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

[src/parser/classes/NavigationEndpoint.ts:106](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/NavigationEndpoint.ts#L106)

#### call(actions, args)

> **call**(`actions`, `args`?): `Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

##### Parameters

• **actions**: [`Actions`](../../../classes/Actions.md)

• **args?**

• **args.parse?**: `false`

##### Returns

`Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

##### Defined in

[src/parser/classes/NavigationEndpoint.ts:107](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/NavigationEndpoint.ts#L107)

***

### getEndpoint()

> **getEndpoint**(`name`): `undefined` \| `"/browse"` \| `"/player"` \| `"/search"` \| `"/next"` \| `"/live_chat/get_item_context_menu"`

Sometimes InnerTube does not return an API url, in that case the library should set it based on the name of the payload object.

#### Parameters

• **name**: `string`

#### Returns

`undefined` \| `"/browse"` \| `"/player"` \| `"/search"` \| `"/next"` \| `"/live_chat/get_item_context_menu"`

#### Defined in

[src/parser/classes/NavigationEndpoint.ts:90](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/NavigationEndpoint.ts#L90)

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

[src/parser/helpers.ts:47](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L47)

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

[src/parser/helpers.ts:28](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L28)

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

[src/parser/helpers.ts:57](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L57)

***

### toURL()

> **toURL**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/parser/classes/NavigationEndpoint.ts:116](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/NavigationEndpoint.ts#L116)
