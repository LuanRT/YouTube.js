[youtubei.js](../../../../README.md) / [Generator](../README.md) / isMiscType

# Function: isMiscType()

> **isMiscType**(`key`, `value`): `false` \| [`MiscInferenceType`](../type-aliases/MiscInferenceType.md)

Defined in: [src/parser/generator.ts:163](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/generator.ts#L163)

Check if the given value is a misc type.

## Parameters

### key

`string`

The key of the value

### value

`unknown`

The value to check

## Returns

`false` \| [`MiscInferenceType`](../type-aliases/MiscInferenceType.md)

If it is a misc type, return the InferenceType. Otherwise, return false.
