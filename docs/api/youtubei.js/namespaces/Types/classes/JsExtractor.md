[youtubei.js](../../../../README.md) / [Types](../README.md) / JsExtractor

# Class: JsExtractor

Defined in: [src/utils/javascript/JsExtractor.ts:61](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/utils/javascript/JsExtractor.ts#L61)

Class responsible for extracting and emitting JavaScript code snippets
based on analysis results from a `JsAnalyzer` instance.

## Constructors

### Constructor

> **new JsExtractor**(`analyzer`): `JsExtractor`

Defined in: [src/utils/javascript/JsExtractor.ts:62](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/utils/javascript/JsExtractor.ts#L62)

#### Parameters

##### analyzer

[`JsAnalyzer`](JsAnalyzer.md)

#### Returns

`JsExtractor`

## Methods

### buildScript()

> **buildScript**(`config`): [`BuildScriptResult`](../interfaces/BuildScriptResult.md)

Defined in: [src/utils/javascript/JsExtractor.ts:320](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/utils/javascript/JsExtractor.ts#L320)

Processes extracted matches from the analyzer, handles dependencies, predeclares 
variables as needed, and generates an IIFE-wrapped output string containing the
code snippets and exported variables.

#### Parameters

##### config

[`EmitterOptions`](../interfaces/EmitterOptions.md)

Configuration options for the emitter.

#### Returns

[`BuildScriptResult`](../interfaces/BuildScriptResult.md)
