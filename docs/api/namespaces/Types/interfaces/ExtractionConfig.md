[youtubei.js](../../../README.md) / [Types](../README.md) / ExtractionConfig

# Interface: ExtractionConfig

## Properties

### collectDependencies?

> `optional` **collectDependencies**: `boolean`

When `false`, dependency resolution is not enforced and extractions are marked as ready immediately
when `stopWhenReady` is true.

#### Defined in

[src/utils/javascript/JsAnalyzer.ts:14](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/utils/javascript/JsAnalyzer.ts#L14)

***

### friendlyName?

> `optional` **friendlyName**: `string`

Name for easier identification of extractions.

#### Defined in

[src/utils/javascript/JsAnalyzer.ts:23](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/utils/javascript/JsAnalyzer.ts#L23)

***

### match()

> **match**: (`node`) => `boolean` \| `Node`

Predicate that determines whether the current node should be considered a match.

#### Parameters

• **node**: `Node`

#### Returns

`boolean` \| `Node`

#### Defined in

[src/utils/javascript/JsAnalyzer.ts:9](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/utils/javascript/JsAnalyzer.ts#L9)

***

### stopWhenReady?

> `optional` **stopWhenReady**: `boolean`

When `true`, traversal stops once the extraction is matched and all its dependencies (when `collectDependencies=true`) resolve.
Only useful for small functions/vars without too many dependencies.

#### Defined in

[src/utils/javascript/JsAnalyzer.ts:19](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/utils/javascript/JsAnalyzer.ts#L19)
