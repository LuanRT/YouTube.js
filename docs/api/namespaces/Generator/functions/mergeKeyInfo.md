[youtubei.js](../../../README.md) / [Generator](../README.md) / mergeKeyInfo

# Function: mergeKeyInfo()

> **mergeKeyInfo**(`key_info`, `new_key_info`): `object`

Merges two sets of key info, resolving any conflicts

## Parameters

• **key\_info**: [`KeyInfo`](../type-aliases/KeyInfo.md)

The current key info

• **new\_key\_info**: [`KeyInfo`](../type-aliases/KeyInfo.md)

The new key info

## Returns

`object`

The merged key info

### changed\_keys

> **changed\_keys**: [`string`, [`InferenceType`](../type-aliases/InferenceType.md)][]

### resolved\_key\_info

> **resolved\_key\_info**: [`string`, [`InferenceType`](../type-aliases/InferenceType.md)][]

## Defined in

[src/parser/generator.ts:734](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/generator.ts#L734)
