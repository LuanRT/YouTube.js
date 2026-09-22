[youtubei.js](../../../../README.md) / [JsHelpers](../README.md) / getNodeSourceRange

# Function: getNodeSourceRange()

> **getNodeSourceRange**(`node`): \[`number`, `number`\] \| `null`

Defined in: [src/utils/javascript/helpers.ts:130](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/utils/javascript/helpers.ts#L130)

Returns the source range of an ESTree node as a tuple of start and end positions.

## Parameters

### node

`Node` \| `null` \| `undefined`

The ESTree node to extract the source range from.

## Returns

\[`number`, `number`\] \| `null`

A tuple `[start, end]` representing the source range, or `null` if unavailable.
