[youtubei.js](../../../../README.md) / [Generator](../README.md) / introspect

# Function: introspect()

> **introspect**(`classdata`): `object`

Defined in: [src/parser/generator.ts:376](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/generator.ts#L376)

Introspect an example of a class in order to determine its key info and dependencies

## Parameters

### classdata

`unknown`

The example of the class

## Returns

`object`

The key info and any unimplemented dependencies

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `key_info` | readonly \[`string`, [`InferenceType`](../type-aliases/InferenceType.md)\][] | [src/parser/generator.ts:390](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/generator.ts#L390) |
| `unimplemented_dependencies` | \[`string`, `any`\][] | [src/parser/generator.ts:391](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/generator.ts#L391) |
