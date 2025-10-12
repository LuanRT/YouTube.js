[youtubei.js](../../../README.md) / [JsHelpers](../README.md) / createWrapperFunction

# Function: createWrapperFunction()

> **createWrapperFunction**(`analyzer`, `name`, `node`): `string` \| `undefined`

Analyzes an AST node to determine if it's a function call or a function
declaration. Based on that, it then creates a new JavaScript function as
a string. This new function acts as a wrapper, taking a single 'input' 
argument and forwarding it to the original function call.

Currently can handle:
- `CallExpression`: Creates a wrapper that invokes the function being called in the expression.
- `VariableDeclarator` with a `FunctionExpression`: Creates a wrapper that calls the declared function.

## Parameters

• **analyzer**: [`JsAnalyzer`](../../Types/classes/JsAnalyzer.md)

The `JSAnalyzer` instance, used to resolve context like declared variables.

• **name**: `string`

The name for the new wrapper function to be created.

• **node**: `Node`

The ESTree node.

## Returns

`string` \| `undefined`

## Todo

Look for edge cases.

## Defined in

[src/utils/javascript/helpers.ts:223](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/utils/javascript/helpers.ts#L223)
