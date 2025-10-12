[youtubei.js](../../../README.md) / [Types](../README.md) / JsExtractor

# Class: JsExtractor

Class responsible for extracting and emitting JavaScript code snippets
based on analysis results from a `JsAnalyzer` instance.

## Constructors

### new JsExtractor()

> **new JsExtractor**(`analyzer`): [`JsExtractor`](JsExtractor.md)

#### Parameters

• **analyzer**: [`JsAnalyzer`](JsAnalyzer.md)

#### Returns

[`JsExtractor`](JsExtractor.md)

#### Defined in

[src/utils/javascript/JsExtractor.ts:62](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/utils/javascript/JsExtractor.ts#L62)

## Methods

### buildScript()

> **buildScript**(`config`): [`BuildScriptResult`](../interfaces/BuildScriptResult.md)

Processes extracted matches from the analyzer, handles dependencies, predeclares 
variables as needed, and generates an IIFE-wrapped output string containing the
code snippets and exported variables.

#### Parameters

• **config**: [`EmitterOptions`](../interfaces/EmitterOptions.md)

Configuration options for the emitter.

#### Returns

[`BuildScriptResult`](../interfaces/BuildScriptResult.md)

#### Defined in

[src/utils/javascript/JsExtractor.ts:320](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/utils/javascript/JsExtractor.ts#L320)
