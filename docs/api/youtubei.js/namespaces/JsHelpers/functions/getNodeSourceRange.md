[youtubei.js](../../../../README.md) / [JsHelpers](../README.md) / getNodeSourceRange

# Function: getNodeSourceRange()

> **getNodeSourceRange**(`node`): \[`number`, `number`\] \| `null`

Defined in: [src/utils/javascript/helpers.ts:130](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/utils/javascript/helpers.ts#L130)

Returns the source range of an ESTree node as a tuple of start and end positions.

## Parameters

### node

`Node` \| `null` \| `undefined`

The ESTree node to extract the source range from.

## Returns

\[`number`, `number`\] \| `null`

A tuple `[start, end]` representing the source range, or `null` if unavailable.
