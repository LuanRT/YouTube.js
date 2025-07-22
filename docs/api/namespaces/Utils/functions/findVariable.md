[youtubei.js](../../../README.md) / [Utils](../README.md) / findVariable

# Function: findVariable()

> **findVariable**(`code`, `options`): [`ASTLookupResult`](../type-aliases/ASTLookupResult.md) \| `undefined`

Searches for a variable declaration in the given code based on specified criteria.

## Parameters

• **code**: `string`

• **options**: [`ASTLookupArgs`](../type-aliases/ASTLookupArgs.md)

## Returns

[`ASTLookupResult`](../type-aliases/ASTLookupResult.md) \| `undefined`

An object containing the variable's details if found, `undefined` otherwise.

## Example

```ts
// Find a variable by name
const code = 'const x = 5; let y = "hello";';
const a = findVariable(code, { name: 'y' });
console.log(a?.result);

// Find a variable containing specific text
const b = findVariable(code, { includes: 'hello' });
console.log(b?.result);

// Find a variable matching a pattern
const c = findVariable(code, { regexp: /y\s*=\s*"hello"/ });
console.log(c?.result);
```

## Defined in

[src/utils/Utils.ts:376](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/utils/Utils.ts#L376)
