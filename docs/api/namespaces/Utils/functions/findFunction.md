[youtubei.js](../../../README.md) / [Utils](../README.md) / findFunction

# Function: findFunction()

> **findFunction**(`source`, `args`): [`FindFunctionResult`](../type-aliases/FindFunctionResult.md) \| `undefined`

Finds a function in a source string based on the provided search criteria.

## Parameters

• **source**: `string`

• **args**: [`FindFunctionArgs`](../type-aliases/FindFunctionArgs.md)

## Returns

[`FindFunctionResult`](../type-aliases/FindFunctionResult.md) \| `undefined`

## Example

```ts
const source = '(function() {var foo, bar; foo = function() { console.log("foo"); }; bar = function() { console.log("bar"); }; })();';
const result = findFunction(source, { name: 'bar' });
console.log(result);
// Output: { start: 69, end: 110, name: 'bar', node: { ... }, result: 'bar = function() { console.log("bar"); };' }
```

## Defined in

[src/utils/Utils.ts:289](https://github.com/LuanRT/YouTube.js/blob/cf09f7bab14fcca99e1f3ae428c7337fea58cfa5/src/utils/Utils.ts#L289)
