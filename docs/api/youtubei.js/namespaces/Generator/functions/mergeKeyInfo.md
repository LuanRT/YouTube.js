[youtubei.js](../../../../README.md) / [Generator](../README.md) / mergeKeyInfo

# Function: mergeKeyInfo()

> **mergeKeyInfo**(`key_info`, `new_key_info`): `object`

Defined in: [src/parser/generator.ts:734](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/generator.ts#L734)

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

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `changed_keys` | \[`string`, [`InferenceType`](../type-aliases/InferenceType.md)\][] | [src/parser/generator.ts:983](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/generator.ts#L983) |
| `resolved_key_info` | \[`string`, [`InferenceType`](../type-aliases/InferenceType.md)\][] | [src/parser/generator.ts:982](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/generator.ts#L982) |
