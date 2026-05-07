[youtubei.js](../../../../README.md) / [Types](../README.md) / JsAnalyzer

# Class: JsAnalyzer

Defined in: [src/utils/javascript/JsAnalyzer.ts:72](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/utils/javascript/JsAnalyzer.ts#L72)

Performs dependency-aware extraction of variables inside an IIFE.

## Constructors

### Constructor

> **new JsAnalyzer**(`code`, `options?`): `JsAnalyzer`

Defined in: [src/utils/javascript/JsAnalyzer.ts:88](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/utils/javascript/JsAnalyzer.ts#L88)

Creates a new instance over the provided source.

#### Parameters

##### code

`string`

JavaScript source to parse and inspect.

##### options?

[`AnalyzerOptions`](../interfaces/AnalyzerOptions.md) = `{}`

Optional traversal settings.

#### Returns

`JsAnalyzer`

## Properties

### declaredVariables

> `readonly` **declaredVariables**: `Map`\<`string`, [`VariableMetadata`](../interfaces/VariableMetadata.md)\>

Defined in: [src/utils/javascript/JsAnalyzer.ts:81](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/utils/javascript/JsAnalyzer.ts#L81)

***

### iifeParamName

> **iifeParamName**: `string` \| `null` = `null`

Defined in: [src/utils/javascript/JsAnalyzer.ts:80](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/utils/javascript/JsAnalyzer.ts#L80)

## Methods

### getExtractedMatches()

> **getExtractedMatches**(): [`ExtractionState`](../interfaces/ExtractionState.md)[]

Defined in: [src/utils/javascript/JsAnalyzer.ts:647](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/utils/javascript/JsAnalyzer.ts#L647)

Returns the current set of matched extractions.

#### Returns

[`ExtractionState`](../interfaces/ExtractionState.md)[]

***

### getSource()

> **getSource**(): `string`

Defined in: [src/utils/javascript/JsAnalyzer.ts:655](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/utils/javascript/JsAnalyzer.ts#L655)

Returns the raw, original source.

#### Returns

`string`
