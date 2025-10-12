[youtubei.js](../../../README.md) / [Types](../README.md) / EmitterOptions

# Interface: EmitterOptions

## Properties

### disallowSideEffectInitializers?

> `optional` **disallowSideEffectInitializers**: `boolean` \| [`SideEffectPolicyOptions`](SideEffectPolicyOptions.md)

When true or configured, replace unsafe initializers (calls, `new`, etc.)
with `undefined` to avoid executing side-effectful code.
Use `{ mode: 'loose' }` to allow a broader set of expressions.

#### Defined in

[src/utils/javascript/JsExtractor.ts:26](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/utils/javascript/JsExtractor.ts#L26)

***

### exportRawValues?

> `optional` **exportRawValues**: `boolean`

When true, also export raw values of matched nodes.

#### Defined in

[src/utils/javascript/JsExtractor.ts:35](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/utils/javascript/JsExtractor.ts#L35)

***

### forceVarPredeclaration?

> `optional` **forceVarPredeclaration**: `boolean`

When true, emit a single `var` declaration for every variable
encountered, even if it originally had an initializer.

#### Defined in

[src/utils/javascript/JsExtractor.ts:31](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/utils/javascript/JsExtractor.ts#L31)

***

### maxDepth?

> `optional` **maxDepth**: `number`

The maximum depth to traverse when emitting dependencies.
If not specified, there is no limit on the depth.

#### Defined in

[src/utils/javascript/JsExtractor.ts:20](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/utils/javascript/JsExtractor.ts#L20)

***

### rawValueOnly?

> `optional` **rawValueOnly**: `string`[]

Array of names to skip emitting code/deps for, but still export the raw value.

#### Defined in

[src/utils/javascript/JsExtractor.ts:39](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/utils/javascript/JsExtractor.ts#L39)
