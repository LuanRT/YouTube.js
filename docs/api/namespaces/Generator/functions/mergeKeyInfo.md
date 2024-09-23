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

[src/parser/generator.ts:736](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/generator.ts#L736)
