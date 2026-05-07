[youtubei.js](../../../../README.md) / [Types](../README.md) / BuildScriptResult

# Interface: BuildScriptResult

Defined in: [src/utils/javascript/JsExtractor.ts:42](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/utils/javascript/JsExtractor.ts#L42)

## Properties

### exported

> **exported**: `string`[]

Defined in: [src/utils/javascript/JsExtractor.ts:50](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/utils/javascript/JsExtractor.ts#L50)

An array of exported variable names.

***

### exportedRawValues?

> `optional` **exportedRawValues**: `Record`\<`string`, `any`\>

Defined in: [src/utils/javascript/JsExtractor.ts:54](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/utils/javascript/JsExtractor.ts#L54)

An object mapping exported variable names to their raw values, if `exportRawValues` was enabled.

***

### output

> **output**: `string`

Defined in: [src/utils/javascript/JsExtractor.ts:46](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/utils/javascript/JsExtractor.ts#L46)

The generated output script as a string.
