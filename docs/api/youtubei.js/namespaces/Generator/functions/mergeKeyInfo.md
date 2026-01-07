[youtubei.js](../../../../README.md) / [Generator](../README.md) / mergeKeyInfo

# Function: mergeKeyInfo()

> **mergeKeyInfo**(`key_info`, `new_key_info`): `object`

Defined in: [src/parser/generator.ts:734](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/generator.ts#L734)

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
