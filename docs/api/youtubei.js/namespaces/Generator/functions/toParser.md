[youtubei.js](../../../../README.md) / [Generator](../README.md) / toParser

# Function: toParser()

> **toParser**(`key`, `inference_type`, `key_path`, `indentation`): `string`

Defined in: [src/parser/generator.ts:578](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/generator.ts#L578)

Generate statements to parse a given inference type

## Parameters

### key

`string`

The key to parse

### inference\_type

[`InferenceType`](../type-aliases/InferenceType.md)

The inference type to parse

### key\_path

`string`[] = `...`

The path to the key (excluding the key itself)

### indentation

`number` = `1`

The indentation level (used for objects)

## Returns

`string`

Statement to parse the given key
