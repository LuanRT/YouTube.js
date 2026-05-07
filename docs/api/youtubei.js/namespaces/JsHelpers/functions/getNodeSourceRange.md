[youtubei.js](../../../../README.md) / [JsHelpers](../README.md) / getNodeSourceRange

# Function: getNodeSourceRange()

> **getNodeSourceRange**(`node`): \[`number`, `number`\] \| `null`

Defined in: [src/utils/javascript/helpers.ts:130](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/utils/javascript/helpers.ts#L130)

Returns the source range of an ESTree node as a tuple of start and end positions.

## Parameters

### node

The ESTree node to extract the source range from.

`Node` | `null` | `undefined`

## Returns

\[`number`, `number`\] \| `null`

A tuple `[start, end]` representing the source range, or `null` if unavailable.
