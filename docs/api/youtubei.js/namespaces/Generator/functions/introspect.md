[youtubei.js](../../../../README.md) / [Generator](../README.md) / introspect

# Function: introspect()

> **introspect**(`classdata`): `object`

Defined in: [src/parser/generator.ts:376](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/generator.ts#L376)

Introspect an example of a class in order to determine its key info and dependencies

## Parameters

### classdata

`unknown`

The example of the class

## Returns

`object`

The key info and any unimplemented dependencies

### key\_info

> **key\_info**: readonly \[`string`, [`InferenceType`](../type-aliases/InferenceType.md)\][]

### unimplemented\_dependencies

> **unimplemented\_dependencies**: \[`string`, `any`\][]
