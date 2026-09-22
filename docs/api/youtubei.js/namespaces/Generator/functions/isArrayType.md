[youtubei.js](../../../../README.md) / [Generator](../README.md) / isArrayType

# Function: isArrayType()

> **isArrayType**(`value`): `false` \| [`ArrayInferenceType`](../type-aliases/ArrayInferenceType.md)

Defined in: [src/parser/generator.ts:222](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/generator.ts#L222)

Checks if the given value is an array

## Parameters

### value

`unknown`

The value to check

## Returns

`false` \| [`ArrayInferenceType`](../type-aliases/ArrayInferenceType.md)

If it is an array, return the InferenceType. Otherwise, return false.
