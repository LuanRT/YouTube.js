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

[src/parser/generator.ts:736](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/parser/generator.ts#L736)
