[youtubei.js](../../../README.md) / [JsHelpers](../README.md) / walkAst

# Function: walkAst()

> **walkAst**(`root`, `visitor`): `void`

Performs a non-recursive traversal of an ESTree AST.

## Parameters

• **root**: `Node`

Root AST node to start the traversal from.

• **visitor**: [`AstVisitor`](../type-aliases/AstVisitor.md)

Callbacks invoked when nodes are entered or left.

## Returns

`void`

## Remarks

- If it returns `WALK_STOP`, the entire traversal is halted.
- Why did I not use some AST walker library instead?: They're too slow.

## Defined in

[src/utils/javascript/helpers.ts:62](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/utils/javascript/helpers.ts#L62)
