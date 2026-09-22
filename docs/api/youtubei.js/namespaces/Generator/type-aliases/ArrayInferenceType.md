[youtubei.js](../../../../README.md) / [Generator](../README.md) / ArrayInferenceType

# Type Alias: ArrayInferenceType

> **ArrayInferenceType** = \{ `array_type`: `"primitive"`; `items`: [`PrimitiveInferenceType`](../interfaces/PrimitiveInferenceType.md); `optional`: `boolean`; `type`: `"array"`; \} \| \{ `array_type`: `"object"`; `items`: [`ObjectInferenceType`](../interfaces/ObjectInferenceType.md); `optional`: `boolean`; `type`: `"array"`; \} \| \{ `array_type`: `"renderer"`; `optional`: `boolean`; `renderers`: `string`[]; `type`: `"array"`; \}

Defined in: [src/parser/generator.ts:55](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/generator.ts#L55)
