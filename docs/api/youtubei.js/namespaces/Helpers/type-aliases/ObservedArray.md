[youtubei.js](../../../../README.md) / [Helpers](../README.md) / ObservedArray

# Type Alias: ObservedArray\<T\>

> **ObservedArray**\<`T`\> = `T`[] & `object`

Defined in: [src/parser/helpers.ts:353](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/helpers.ts#L353)

An extended array type that includes additional utility methods for filtering and manipulating YTNode objects.

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `first()` | () => `T` | Returns the first item in the array. | [src/parser/helpers.ts:406](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/helpers.ts#L406) |
| `get()` | (`rule`, `del_item?`) => `T` \| `undefined` | Returns the first object that matches the specified rule object. | [src/parser/helpers.ts:360](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/helpers.ts#L360) |
| `getAll()` | (`rule`, `del_items?`) => `T`[] | Returns all objects that match the specified rule object. | [src/parser/helpers.ts:368](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/helpers.ts#L368) |
| `matchCondition()` | (`condition`) => `T` \| `undefined` | Returns the first object that satisfies the provided condition function. | [src/parser/helpers.ts:375](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/helpers.ts#L375) |
| `remove()` | (`index`) => `T`[] | Removes the item at the specified index. | [src/parser/helpers.ts:382](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/helpers.ts#L382) |
| `as()` | (...`types`) => `ObservedArray`\<`InstanceType`\<`K`\[`number`\]\>\> | Similar to `filter` but with strict type checking. Filters the array to include only items of the specified types. **Throws** If an item is not of the specified type | [src/parser/helpers.ts:416](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/helpers.ts#L416) |
| `filterType()` | (...`types`) => `ObservedArray`\<`InstanceType`\<`K`\[`number`\]\>\> | Filters the array to only include items of the specified YTNode types. | [src/parser/helpers.ts:391](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/helpers.ts#L391) |
| `firstOfType()` | (...`types`) => `InstanceType`\<`K`\[`number`\]\> \| `undefined` | Returns the first item in the array that matches any of the specified YTNode types. | [src/parser/helpers.ts:400](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/helpers.ts#L400) |

## Type Parameters

### T

`T` *extends* [`YTNode`](../classes/YTNode.md) = [`YTNode`](../classes/YTNode.md)
