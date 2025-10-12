[youtubei.js](../../../README.md) / [JsHelpers](../README.md) / AstVisitObject

# Interface: AstVisitObject

## Methods

### enter()?

> `optional` **enter**(`node`, `parent`, `ancestors`): [`AstVisitResult`](../type-aliases/AstVisitResult.md)

Callback invoked when an AST node is entered.

#### Parameters

• **node**: `Node`

Current AST node being visited.

• **parent**: `null` \| `Node`

Parent of the current AST node, or null if it's the root.

• **ancestors**: `Node`[]

Array of ancestor nodes, starting from the root down to the parent.

#### Returns

[`AstVisitResult`](../type-aliases/AstVisitResult.md)

- `true` to skip traversing this node's children.
- `WALK_STOP` to halt the entire traversal.
- `void`/`undefined` to continue normal traversal.

#### Defined in

[src/utils/javascript/helpers.ts:39](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/utils/javascript/helpers.ts#L39)

***

### leave()?

> `optional` **leave**(`node`, `parent`, `ancestors`): [`AstVisitResult`](../type-aliases/AstVisitResult.md)

Callback invoked when an AST node is exited.

#### Parameters

• **node**: `Node`

Current AST node being exited.

• **parent**: `null` \| `Node`

Parent of the current AST node, or null if it's the root.

• **ancestors**: `Node`[]

Array of ancestor nodes, starting from the root down to the parent.

#### Returns

[`AstVisitResult`](../type-aliases/AstVisitResult.md)

- `WALK_STOP` to halt the entire traversal.
- `void`/`undefined` to continue normal traversal.

#### Defined in

[src/utils/javascript/helpers.ts:49](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/utils/javascript/helpers.ts#L49)
