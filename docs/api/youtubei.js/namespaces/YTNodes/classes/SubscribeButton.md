[youtubei.js](../../../../README.md) / [YTNodes](../README.md) / SubscribeButton

# Class: SubscribeButton

Defined in: [src/parser/classes/SubscribeButton.ts:7](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/SubscribeButton.ts#L7)

## Extends

- [`YTNode`](../../Helpers/classes/YTNode.md)

## Constructors

### Constructor

> **new SubscribeButton**(`data`): `SubscribeButton`

Defined in: [src/parser/classes/SubscribeButton.ts:28](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/SubscribeButton.ts#L28)

#### Parameters

##### data

[`RawNode`](../../../../type-aliases/RawNode.md)

#### Returns

`SubscribeButton`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`constructor`](../../Helpers/classes/YTNode.md#constructor)

## Properties

### button\_text

> **button\_text**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/SubscribeButton.ts:10](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/SubscribeButton.ts#L10)

***

### channel\_id

> **channel\_id**: `string`

Defined in: [src/parser/classes/SubscribeButton.ts:14](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/SubscribeButton.ts#L14)

***

### enabled

> **enabled**: `boolean`

Defined in: [src/parser/classes/SubscribeButton.ts:12](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/SubscribeButton.ts#L12)

***

### item\_type

> **item\_type**: `string`

Defined in: [src/parser/classes/SubscribeButton.ts:13](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/SubscribeButton.ts#L13)

***

### notification\_preference\_button

> **notification\_preference\_button**: [`SubscriptionNotificationToggleButton`](SubscriptionNotificationToggleButton.md) \| `null`

Defined in: [src/parser/classes/SubscribeButton.ts:19](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/SubscribeButton.ts#L19)

***

### on\_subscribe\_endpoints?

> `optional` **on\_subscribe\_endpoints**: [`NavigationEndpoint`](NavigationEndpoint.md)[]

Defined in: [src/parser/classes/SubscribeButton.ts:21](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/SubscribeButton.ts#L21)

***

### on\_unsubscribe\_endpoints?

> `optional` **on\_unsubscribe\_endpoints**: [`NavigationEndpoint`](NavigationEndpoint.md)[]

Defined in: [src/parser/classes/SubscribeButton.ts:22](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/SubscribeButton.ts#L22)

***

### service\_endpoints?

> `optional` **service\_endpoints**: [`NavigationEndpoint`](NavigationEndpoint.md)[]

Defined in: [src/parser/classes/SubscribeButton.ts:20](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/SubscribeButton.ts#L20)

***

### show\_preferences

> **show\_preferences**: `boolean`

Defined in: [src/parser/classes/SubscribeButton.ts:15](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/SubscribeButton.ts#L15)

***

### subscribe\_accessibility\_label?

> `optional` **subscribe\_accessibility\_label**: `string`

Defined in: [src/parser/classes/SubscribeButton.ts:25](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/SubscribeButton.ts#L25)

***

### subscribed

> **subscribed**: `boolean`

Defined in: [src/parser/classes/SubscribeButton.ts:11](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/SubscribeButton.ts#L11)

***

### subscribed\_entity\_key?

> `optional` **subscribed\_entity\_key**: `string`

Defined in: [src/parser/classes/SubscribeButton.ts:23](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/SubscribeButton.ts#L23)

***

### subscribed\_text?

> `optional` **subscribed\_text**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/SubscribeButton.ts:16](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/SubscribeButton.ts#L16)

***

### target\_id?

> `optional` **target\_id**: `string`

Defined in: [src/parser/classes/SubscribeButton.ts:24](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/SubscribeButton.ts#L24)

***

### type

> `readonly` **type**: `string`

Defined in: [src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L8)

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

***

### unsubscribe\_accessibility\_label?

> `optional` **unsubscribe\_accessibility\_label**: `string`

Defined in: [src/parser/classes/SubscribeButton.ts:26](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/SubscribeButton.ts#L26)

***

### unsubscribe\_text?

> `optional` **unsubscribe\_text**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/SubscribeButton.ts:18](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/SubscribeButton.ts#L18)

***

### unsubscribed\_text?

> `optional` **unsubscribed\_text**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/SubscribeButton.ts:17](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/SubscribeButton.ts#L17)

***

### type

> `static` **type**: `string` = `'SubscribeButton'`

Defined in: [src/parser/classes/SubscribeButton.ts:8](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/SubscribeButton.ts#L8)

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

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is SubscribeButton & { [k in string]: R }`

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

`this is SubscribeButton & { [k in string]: R }`

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
