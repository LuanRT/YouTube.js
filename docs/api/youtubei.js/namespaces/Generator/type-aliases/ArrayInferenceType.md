[youtubei.js](../../../../README.md) / [Generator](../README.md) / ArrayInferenceType

# Type Alias: ArrayInferenceType

> **ArrayInferenceType** = \{ `array_type`: `"primitive"`; `items`: [`PrimitiveInferenceType`](../interfaces/PrimitiveInferenceType.md); `optional`: `boolean`; `type`: `"array"`; \} \| \{ `array_type`: `"object"`; `items`: [`ObjectInferenceType`](../interfaces/ObjectInferenceType.md); `optional`: `boolean`; `type`: `"array"`; \} \| \{ `array_type`: `"renderer"`; `optional`: `boolean`; `renderers`: `string`[]; `type`: `"array"`; \}

Defined in: [src/parser/generator.ts:55](https://github.com/LuanRT/YouTube.js/blob/78375cbf808544d91b0d5df99529a20f4a5a18eb/src/parser/generator.ts#L55)
