[youtubei.js](../../../README.md) / [Helpers](../README.md) / ObservedArray

# Type Alias: ObservedArray\<T\>

> **ObservedArray**\<`T`\>: `T`[] & `object`

## Type declaration

### first()

> **first**: () => `T`

Get the first item.

#### Returns

`T`

### get()

> **get**: (`rule`, `del_item`?) => `T` \| `undefined`

Returns the first object to match the rule.

#### Parameters

• **rule**: `object`

• **del\_item?**: `boolean`

#### Returns

`T` \| `undefined`

### getAll()

> **getAll**: (`rule`, `del_items`?) => `T`[]

Returns all objects that match the rule.

#### Parameters

• **rule**: `object`

• **del\_items?**: `boolean`

#### Returns

`T`[]

### matchCondition()

> **matchCondition**: (`condition`) => `T` \| `undefined`

Returns the first object to match the condition.

#### Parameters

• **condition**

#### Returns

`T` \| `undefined`

### remove()

> **remove**: (`index`) => `T`[]

Removes the item at the given index.

#### Parameters

• **index**: `number`

#### Returns

`T`[]

### as()

This is similar to filter but throws if there's a type mismatch.

#### Type Parameters

• **R** *extends* [`YTNode`](../classes/YTNode.md)

• **K** *extends* [`YTNodeConstructor`](../interfaces/YTNodeConstructor.md)\<`R`\>[]

#### Parameters

• ...**types**: `K`

#### Returns

[`ObservedArray`](ObservedArray.md)\<`InstanceType`\<`K`\[`number`\]\>\>

### filterType()

Get all items of a specific type.

#### Type Parameters

• **R** *extends* [`YTNode`](../classes/YTNode.md)

• **K** *extends* [`YTNodeConstructor`](../interfaces/YTNodeConstructor.md)\<`R`\>[]

#### Parameters

• ...**types**: `K`

#### Returns

[`ObservedArray`](ObservedArray.md)\<`InstanceType`\<`K`\[`number`\]\>\>

### firstOfType()

Get the first of a specific type.

#### Type Parameters

• **R** *extends* [`YTNode`](../classes/YTNode.md)

• **K** *extends* [`YTNodeConstructor`](../interfaces/YTNodeConstructor.md)\<`R`\>[]

#### Parameters

• ...**types**: `K`

#### Returns

`undefined` \| `InstanceType`\<`K`\[`number`\]\>

## Type Parameters

• **T** *extends* [`YTNode`](../classes/YTNode.md) = [`YTNode`](../classes/YTNode.md)

## Defined in

[src/parser/helpers.ts:355](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/helpers.ts#L355)
