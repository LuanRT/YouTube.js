[youtubei.js](../../../../README.md) / [JsHelpers](../README.md) / AstVisitObject

# Interface: AstVisitObject

Defined in: [src/utils/javascript/helpers.ts:28](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/utils/javascript/helpers.ts#L28)

## Methods

### enter()?

> `optional` **enter**(`node`, `parent`, `ancestors`): [`AstVisitResult`](../type-aliases/AstVisitResult.md)

Defined in: [src/utils/javascript/helpers.ts:39](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/utils/javascript/helpers.ts#L39)

Callback invoked when an AST node is entered.

#### Parameters

##### node

`Node`

Current AST node being visited.

##### parent

`Node` \| `null`

Parent of the current AST node, or null if it's the root.

##### ancestors

`Node`[]

Array of ancestor nodes, starting from the root down to the parent.

#### Returns

[`AstVisitResult`](../type-aliases/AstVisitResult.md)

- `true` to skip traversing this node's children.
- `WALK_STOP` to halt the entire traversal.
- `void`/`undefined` to continue normal traversal.

***

### leave()?

> `optional` **leave**(`node`, `parent`, `ancestors`): [`AstVisitResult`](../type-aliases/AstVisitResult.md)

Defined in: [src/utils/javascript/helpers.ts:49](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/utils/javascript/helpers.ts#L49)

Callback invoked when an AST node is exited.

#### Parameters

##### node

`Node`

Current AST node being exited.

##### parent

`Node` \| `null`

Parent of the current AST node, or null if it's the root.

##### ancestors

`Node`[]

Array of ancestor nodes, starting from the root down to the parent.

#### Returns

[`AstVisitResult`](../type-aliases/AstVisitResult.md)

- `WALK_STOP` to halt the entire traversal.
- `void`/`undefined` to continue normal traversal.
