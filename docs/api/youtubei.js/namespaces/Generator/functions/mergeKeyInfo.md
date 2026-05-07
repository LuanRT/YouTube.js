[youtubei.js](../../../../README.md) / [Generator](../README.md) / mergeKeyInfo

# Function: mergeKeyInfo()

> **mergeKeyInfo**(`key_info`, `new_key_info`): `object`

Defined in: [src/parser/generator.ts:734](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/generator.ts#L734)

Merges two sets of key info, resolving any conflicts

## Parameters

### key\_info

[`KeyInfo`](../type-aliases/KeyInfo.md)

The current key info

### new\_key\_info

[`KeyInfo`](../type-aliases/KeyInfo.md)

The new key info

## Returns

`object`

The merged key info

### changed\_keys

> **changed\_keys**: \[`string`, [`InferenceType`](../type-aliases/InferenceType.md)\][]

### resolved\_key\_info

> **resolved\_key\_info**: \[`string`, [`InferenceType`](../type-aliases/InferenceType.md)\][]
