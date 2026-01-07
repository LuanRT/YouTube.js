[youtubei.js](../../../../README.md) / [Types](../README.md) / ExtractionConfig

# Interface: ExtractionConfig

Defined in: [src/utils/javascript/JsAnalyzer.ts:5](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/utils/javascript/JsAnalyzer.ts#L5)

## Properties

### collectDependencies?

> `optional` **collectDependencies**: `boolean`

Defined in: [src/utils/javascript/JsAnalyzer.ts:14](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/utils/javascript/JsAnalyzer.ts#L14)

When `false`, dependency resolution is not enforced and extractions are marked as ready immediately
when `stopWhenReady` is true.

***

### friendlyName?

> `optional` **friendlyName**: `string`

Defined in: [src/utils/javascript/JsAnalyzer.ts:23](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/utils/javascript/JsAnalyzer.ts#L23)

Name for easier identification of extractions.

***

### match()

> **match**: (`node`) => `boolean` \| `Node`

Defined in: [src/utils/javascript/JsAnalyzer.ts:9](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/utils/javascript/JsAnalyzer.ts#L9)

Predicate that determines whether the current node should be considered a match.

#### Parameters

##### node

`Node`

#### Returns

`boolean` \| `Node`

***

### stopWhenReady?

> `optional` **stopWhenReady**: `boolean`

Defined in: [src/utils/javascript/JsAnalyzer.ts:19](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/utils/javascript/JsAnalyzer.ts#L19)

When `true`, traversal stops once the extraction is matched and all its dependencies (when `collectDependencies=true`) resolve.
Only useful for small functions/vars without too many dependencies.
