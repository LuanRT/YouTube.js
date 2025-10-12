[youtubei.js](../../../README.md) / [Types](../README.md) / BuildScriptResult

# Interface: BuildScriptResult

## Properties

### exported

> **exported**: `string`[]

An array of exported variable names.

#### Defined in

[src/utils/javascript/JsExtractor.ts:50](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/utils/javascript/JsExtractor.ts#L50)

***

### exportedRawValues?

> `optional` **exportedRawValues**: `Record`\<`string`, `any`\>

An object mapping exported variable names to their raw values, if `exportRawValues` was enabled.

#### Defined in

[src/utils/javascript/JsExtractor.ts:54](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/utils/javascript/JsExtractor.ts#L54)

***

### output

> **output**: `string`

The generated output script as a string.

#### Defined in

[src/utils/javascript/JsExtractor.ts:46](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/utils/javascript/JsExtractor.ts#L46)
