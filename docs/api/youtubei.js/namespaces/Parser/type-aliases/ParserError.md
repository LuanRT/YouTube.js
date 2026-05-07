[youtubei.js](../../../../README.md) / [Parser](../README.md) / ParserError

# Type Alias: ParserError

> **ParserError** = `object` & \{ `classdata`: [`RawNode`](../../../../type-aliases/RawNode.md); `error_type`: `"typecheck"`; `expected`: `string` \| `string`[]; \} \| \{ `classdata`: [`RawNode`](../../../../type-aliases/RawNode.md); `error`: `unknown`; `error_type`: `"parse"`; \} \| \{ `classname`: `string`; `error_type`: `"mutation_data_missing"`; \} \| \{ `error_type`: `"mutation_data_invalid"`; `failed`: `number`; `titles`: `string`[]; `total`: `number`; \} \| \{ `error_type`: `"class_not_found"`; `key_info`: [`KeyInfo`](../../Generator/type-aliases/KeyInfo.md); \} \| \{ `changed_keys`: [`KeyInfo`](../../Generator/type-aliases/KeyInfo.md); `error_type`: `"class_changed"`; `key_info`: [`KeyInfo`](../../Generator/type-aliases/KeyInfo.md); \}

Defined in: [src/parser/parser.ts:48](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/parser.ts#L48)

## Type Declaration

### classname

> **classname**: `string`
