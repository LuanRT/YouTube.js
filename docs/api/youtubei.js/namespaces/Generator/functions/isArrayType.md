[youtubei.js](../../../../README.md) / [Generator](../README.md) / isArrayType

# Function: isArrayType()

> **isArrayType**(`value`): `false` \| [`ArrayInferenceType`](../type-aliases/ArrayInferenceType.md)

Defined in: [src/parser/generator.ts:222](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/generator.ts#L222)

Checks if the given value is an array

## Parameters

### value

`unknown`

The value to check

## Returns

`false` \| [`ArrayInferenceType`](../type-aliases/ArrayInferenceType.md)

If it is an array, return the InferenceType. Otherwise, return false.
