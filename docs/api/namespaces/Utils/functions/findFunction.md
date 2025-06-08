[youtubei.js](../../../README.md) / [Utils](../README.md) / findFunction

# Function: findFunction()

> **findFunction**(`source`, `args`): [`ASTLookupResult`](../type-aliases/ASTLookupResult.md) \| `undefined`

Searches for a function in the given code based on specified criteria.

## Parameters

• **source**: `string`

• **args**: [`ASTLookupArgs`](../type-aliases/ASTLookupArgs.md)

## Returns

[`ASTLookupResult`](../type-aliases/ASTLookupResult.md) \| `undefined`

An object containing the function's details if found, `undefined` otherwise.

## Example

```ts
const source = '(function() {var foo, bar; foo = function() { console.log("foo"); }; bar = function() { console.log("bar"); }; })();';
const result = findFunction(source, { name: 'bar' });
console.log(result);
// Output: { start: 69, end: 110, name: 'bar', node: { ... }, result: 'bar = function() { console.log("bar"); };' }
```

## Defined in

[src/utils/Utils.ts:311](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/utils/Utils.ts#L311)
