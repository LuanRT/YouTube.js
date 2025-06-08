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

[src/utils/Utils.ts:268](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/utils/Utils.ts#L268)
