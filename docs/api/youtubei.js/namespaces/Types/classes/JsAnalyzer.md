[youtubei.js](../../../../README.md) / [Types](../README.md) / JsAnalyzer

# Class: JsAnalyzer

Defined in: [src/utils/javascript/JsAnalyzer.ts:61](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/utils/javascript/JsAnalyzer.ts#L61)

Performs dependency-aware extraction of variables inside an IIFE.

## Constructors

### Constructor

> **new JsAnalyzer**(`code`, `options`): `JsAnalyzer`

Defined in: [src/utils/javascript/JsAnalyzer.ts:76](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/utils/javascript/JsAnalyzer.ts#L76)

Creates a new instance over the provided source.

#### Parameters

##### code

`string`

JavaScript source to parse and inspect.

##### options

[`AnalyzerOptions`](../interfaces/AnalyzerOptions.md) = `{}`

Optional traversal settings.

#### Returns

`JsAnalyzer`

## Properties

### declaredVariables

> **declaredVariables**: `Map`\<`string`, [`VariableMetadata`](../interfaces/VariableMetadata.md)\>

Defined in: [src/utils/javascript/JsAnalyzer.ts:68](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/utils/javascript/JsAnalyzer.ts#L68)

***

### iifeParamName

> **iifeParamName**: `string` \| `null` = `null`

Defined in: [src/utils/javascript/JsAnalyzer.ts:69](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/utils/javascript/JsAnalyzer.ts#L69)

## Methods

### getExtractedMatches()

> **getExtractedMatches**(): [`ExtractionState`](../interfaces/ExtractionState.md)[]

Defined in: [src/utils/javascript/JsAnalyzer.ts:552](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/utils/javascript/JsAnalyzer.ts#L552)

Returns the current set of matched extractions.

#### Returns

[`ExtractionState`](../interfaces/ExtractionState.md)[]

***

### getSource()

> **getSource**(): `string`

Defined in: [src/utils/javascript/JsAnalyzer.ts:560](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/utils/javascript/JsAnalyzer.ts#L560)

Returns the raw, original source.

#### Returns

`string`
