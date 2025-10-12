[youtubei.js](../../../README.md) / [Types](../README.md) / JsAnalyzer

# Class: JsAnalyzer

Performs dependency-aware extraction of variables inside an IIFE.

## Constructors

### new JsAnalyzer()

> **new JsAnalyzer**(`code`, `options`): [`JsAnalyzer`](JsAnalyzer.md)

Creates a new instance over the provided source.

#### Parameters

• **code**: `string`

JavaScript source to parse and inspect.

• **options**: [`AnalyzerOptions`](../interfaces/AnalyzerOptions.md) = `{}`

Optional traversal settings.

#### Returns

[`JsAnalyzer`](JsAnalyzer.md)

#### Defined in

[src/utils/javascript/JsAnalyzer.ts:76](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/utils/javascript/JsAnalyzer.ts#L76)

## Properties

### declaredVariables

> **declaredVariables**: `Map`\<`string`, [`VariableMetadata`](../interfaces/VariableMetadata.md)\>

#### Defined in

[src/utils/javascript/JsAnalyzer.ts:68](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/utils/javascript/JsAnalyzer.ts#L68)

***

### iifeParamName

> **iifeParamName**: `null` \| `string` = `null`

#### Defined in

[src/utils/javascript/JsAnalyzer.ts:69](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/utils/javascript/JsAnalyzer.ts#L69)

## Methods

### getExtractedMatches()

> **getExtractedMatches**(): [`ExtractionState`](../interfaces/ExtractionState.md)[]

Returns the current set of matched extractions.

#### Returns

[`ExtractionState`](../interfaces/ExtractionState.md)[]

#### Defined in

[src/utils/javascript/JsAnalyzer.ts:555](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/utils/javascript/JsAnalyzer.ts#L555)

***

### getSource()

> **getSource**(): `string`

Returns the raw, original source.

#### Returns

`string`

#### Defined in

[src/utils/javascript/JsAnalyzer.ts:563](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/utils/javascript/JsAnalyzer.ts#L563)
