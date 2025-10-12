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

[src/utils/javascript/helpers.ts:62](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/utils/javascript/helpers.ts#L62)
