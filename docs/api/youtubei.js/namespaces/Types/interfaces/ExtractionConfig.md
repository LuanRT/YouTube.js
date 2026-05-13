[youtubei.js](../../../../README.md) / [Types](../README.md) / ExtractionConfig

# Interface: ExtractionConfig

Defined in: [src/utils/javascript/JsAnalyzer.ts:4](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/utils/javascript/JsAnalyzer.ts#L4)

## Properties

### collectDependencies?

> `optional` **collectDependencies**: `boolean`

Defined in: [src/utils/javascript/JsAnalyzer.ts:13](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/utils/javascript/JsAnalyzer.ts#L13)

When `false`, dependency resolution is not enforced and extractions are marked as ready immediately
when `stopWhenReady` is true.

***

### friendlyName?

> `optional` **friendlyName**: `string`

Defined in: [src/utils/javascript/JsAnalyzer.ts:33](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/utils/javascript/JsAnalyzer.ts#L33)

Name for easier identification of extractions.

***

### match()

> **match**: (`node`) => `boolean` \| `Node`

Defined in: [src/utils/javascript/JsAnalyzer.ts:8](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/utils/javascript/JsAnalyzer.ts#L8)

Predicate that determines whether the current node should be considered a match.

#### Parameters

##### node

`Node`

#### Returns

`boolean` \| `Node`

***

### onlyProcessMatchContext?

> `optional` **onlyProcessMatchContext**: `boolean`

Defined in: [src/utils/javascript/JsAnalyzer.ts:29](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/utils/javascript/JsAnalyzer.ts#L29)

If `true`, dependency collection is limited to the match context node itself.

***

### stopWhenReady?

> `optional` **stopWhenReady**: `boolean`

Defined in: [src/utils/javascript/JsAnalyzer.ts:25](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/utils/javascript/JsAnalyzer.ts#L25)

When `true`, traversal stops once the extraction is matched and all its dependencies (when `collectDependencies=true`) resolve.
Only useful for small functions/vars without too many dependencies. Deeper dependency trees will usually have the unresolvable
member expression here and there, for example:
```js
 var Vmi = g.dX.window, Wr = Vmi?.yt?.config_ || Vmi?.ytcfg?.data_ || {};
```

Since `Vmi.ytcfg` is a dependency, it will never resolve because it comes from `g.dX.window`, which is an external object we don't have access to. 
In cases like this, `stopWhenReady` option does nothing useful.
