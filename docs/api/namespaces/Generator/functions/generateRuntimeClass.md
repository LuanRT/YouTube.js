[youtubei.js](../../../README.md) / [Generator](../README.md) / generateRuntimeClass

# Function: generateRuntimeClass()

> **generateRuntimeClass**(`classname`, `classdata`, `logger`): [`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

Given example data for a class, introspect, implement dependencies, and create a new class

## Parameters

• **classname**: `string`

The name of the class

• **classdata**: `unknown`

The example of the class

• **logger**: [`ParserErrorHandler`](../../Parser/type-aliases/ParserErrorHandler.md)

The logger to log errors to

## Returns

[`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

Class based on the example classdata extending YTNode

## Defined in

[src/parser/generator.ts:474](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/generator.ts#L474)
