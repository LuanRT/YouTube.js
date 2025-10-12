[youtubei.js](../../../README.md) / [JsHelpers](../README.md) / getNodeSourceRange

# Function: getNodeSourceRange()

> **getNodeSourceRange**(`node`): [`number`, `number`] \| `null`

Returns the source range of an ESTree node as a tuple of start and end positions.

## Parameters

• **node**: `undefined` \| `null` \| `Node`

The ESTree node to extract the source range from.

## Returns

[`number`, `number`] \| `null`

A tuple `[start, end]` representing the source range, or `null` if unavailable.

## Defined in

[src/utils/javascript/helpers.ts:130](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/utils/javascript/helpers.ts#L130)
