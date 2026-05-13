[youtubei.js](../../../../README.md) / [JsHelpers](../README.md) / walkAst

# Function: walkAst()

> **walkAst**(`root`, `visitor`): `void`

Defined in: [src/utils/javascript/helpers.ts:62](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/utils/javascript/helpers.ts#L62)

Performs traversal of an ESTree AST.

## Parameters

### root

`Node`

Root AST node to start the traversal from.

### visitor

[`AstVisitor`](../type-aliases/AstVisitor.md)

Callbacks invoked when nodes are entered or left.

## Returns

`void`

## Remarks

- If it returns `WALK_STOP`, the entire traversal is halted.
- Why did I not use some AST walker library instead?: They're too slow.
