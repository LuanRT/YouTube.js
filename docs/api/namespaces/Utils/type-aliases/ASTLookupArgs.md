[youtubei.js](../../../README.md) / [Utils](../README.md) / ASTLookupArgs

# Type Alias: ASTLookupArgs

> **ASTLookupArgs**: `object`

## Type declaration

### ast?

> `optional` **ast**: `ReturnType`\<*typeof* `Jinter.parseScript`\>

The abstract syntax tree of the source code.

### includes?

> `optional` **includes**: `string`

A string that must be included in the function's code for it to be considered.

### name?

> `optional` **name**: `string`

The name of the function.

### regexp?

> `optional` **regexp**: `RegExp`

A regular expression that the function's code must match.

## Defined in

[src/utils/Utils.ts:268](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/utils/Utils.ts#L268)
