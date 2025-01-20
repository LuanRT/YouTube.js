[youtubei.js](../../../README.md) / [Helpers](../README.md) / ObservedArray

# Type Alias: ObservedArray\<T\>

> **ObservedArray**\<`T`\>: `T`[] & `object`

An extended array type that includes additional utility methods for filtering and manipulating YTNode objects.

## Type declaration

### first()

> **first**: () => `T`

Returns the first item in the array.

#### Returns

`T`

The first item in the array

### get()

> **get**: (`rule`, `del_item`?) => `T` \| `undefined`

Returns the first object that matches the specified rule object.

#### Parameters

• **rule**: `object`

An object containing properties to match against

• **del\_item?**: `boolean`

Optional flag to remove the matched item from the array

#### Returns

`T` \| `undefined`

The first matching object or undefined if no match is found

### getAll()

> **getAll**: (`rule`, `del_items`?) => `T`[]

Returns all objects that match the specified rule object.

#### Parameters

• **rule**: `object`

An object containing properties to match against

• **del\_items?**: `boolean`

Optional flag to remove all matched items from the array

#### Returns

`T`[]

An array of all matching objects

### matchCondition()

> **matchCondition**: (`condition`) => `T` \| `undefined`

Returns the first object that satisfies the provided condition function.

#### Parameters

• **condition**

A predicate function that tests each element

#### Returns

`T` \| `undefined`

The first element that satisfies the condition or undefined if none found

### remove()

> **remove**: (`index`) => `T`[]

Removes the item at the specified index.

#### Parameters

• **index**: `number`

The index of the item to remove

#### Returns

`T`[]

The modified array after removal

### as()

Similar to `filter` but with strict type checking. Filters the array to include only items of the specified types.

#### Type Parameters

• **R** *extends* [`YTNode`](../classes/YTNode.md)

Type extending YTNode

• **K** *extends* [`YTNodeConstructor`](../interfaces/YTNodeConstructor.md)\<`R`\>[]

Array of types (YTNodes)

#### Parameters

• ...**types**: `K`

Rest parameter of YTNode constructor types to filter by

#### Returns

[`ObservedArray`](ObservedArray.md)\<`InstanceType`\<`K`\[`number`\]\>\>

A new ObservedArray containing only items of the specified types

#### Throws

If an item is not of the specified type

### filterType()

Filters the array to only include items of the specified YTNode types.

#### Type Parameters

• **R** *extends* [`YTNode`](../classes/YTNode.md)

Type extending YTNode

• **K** *extends* [`YTNodeConstructor`](../interfaces/YTNodeConstructor.md)\<`R`\>[]

Array of types (YTNodes)

#### Parameters

• ...**types**: `K`

Rest parameter of YTNode constructor types to filter by

#### Returns

[`ObservedArray`](ObservedArray.md)\<`InstanceType`\<`K`\[`number`\]\>\>

A new ObservedArray containing only items of the specified types

### firstOfType()

Returns the first item in the array that matches any of the specified YTNode types.

#### Type Parameters

• **R** *extends* [`YTNode`](../classes/YTNode.md)

Type extending YTNode

• **K** *extends* [`YTNodeConstructor`](../interfaces/YTNodeConstructor.md)\<`R`\>[]

Array of types (YTNodes)

#### Parameters

• ...**types**: `K`

Rest parameter of YTNode constructor types to match against

#### Returns

`undefined` \| `InstanceType`\<`K`\[`number`\]\>

The first matching item or undefined if none found

## Type Parameters

• **T** *extends* [`YTNode`](../classes/YTNode.md) = [`YTNode`](../classes/YTNode.md)

## Defined in

[src/parser/helpers.ts:362](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L362)
