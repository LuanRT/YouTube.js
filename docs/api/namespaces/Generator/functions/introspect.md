[youtubei.js](../../../README.md) / [Generator](../README.md) / introspect

# Function: introspect()

> **introspect**(`classdata`): `object`

Introspect an example of a class in order to determine its key info and dependencies

## Parameters

• **classdata**: `unknown`

The example of the class

## Returns

`object`

The key info and any unimplemented dependencies

### key\_info

> **key\_info**: readonly [`string`, [`InferenceType`](../type-aliases/InferenceType.md)][]

### unimplemented\_dependencies

> **unimplemented\_dependencies**: [`string`, `any`][]

## Defined in

[src/parser/generator.ts:374](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/generator.ts#L374)
