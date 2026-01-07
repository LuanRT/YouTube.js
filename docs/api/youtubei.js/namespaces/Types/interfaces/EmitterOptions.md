[youtubei.js](../../../../README.md) / [Types](../README.md) / EmitterOptions

# Interface: EmitterOptions

Defined in: [src/utils/javascript/JsExtractor.ts:15](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/utils/javascript/JsExtractor.ts#L15)

## Properties

### disallowSideEffectInitializers?

> `optional` **disallowSideEffectInitializers**: `boolean` \| [`SideEffectPolicyOptions`](SideEffectPolicyOptions.md)

Defined in: [src/utils/javascript/JsExtractor.ts:26](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/utils/javascript/JsExtractor.ts#L26)

When true or configured, replace unsafe initializers (calls, `new`, etc.)
with `undefined` to avoid executing side-effectful code.
Use `{ mode: 'loose' }` to allow a broader set of expressions.

***

### exportRawValues?

> `optional` **exportRawValues**: `boolean`

Defined in: [src/utils/javascript/JsExtractor.ts:35](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/utils/javascript/JsExtractor.ts#L35)

When true, also export raw values of matched nodes.

***

### forceVarPredeclaration?

> `optional` **forceVarPredeclaration**: `boolean`

Defined in: [src/utils/javascript/JsExtractor.ts:31](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/utils/javascript/JsExtractor.ts#L31)

When true, emit a single `var` declaration for every variable
encountered, even if it originally had an initializer.

***

### maxDepth?

> `optional` **maxDepth**: `number`

Defined in: [src/utils/javascript/JsExtractor.ts:20](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/utils/javascript/JsExtractor.ts#L20)

The maximum depth to traverse when emitting dependencies.
If not specified, there is no limit on the depth.

***

### rawValueOnly?

> `optional` **rawValueOnly**: `string`[]

Defined in: [src/utils/javascript/JsExtractor.ts:39](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/utils/javascript/JsExtractor.ts#L39)

Array of names to skip emitting code/deps for, but still export the raw value.
