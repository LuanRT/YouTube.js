[youtubei.js](../../../../README.md) / [Generator](../README.md) / generateRuntimeClass

# Function: generateRuntimeClass()

> **generateRuntimeClass**(`classname`, `classdata`, `logger`): [`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

Defined in: [src/parser/generator.ts:474](https://github.com/LuanRT/YouTube.js/blob/853a36307b5d644ada14dcb1216c2c22c2ae7b73/src/parser/generator.ts#L474)

Given example data for a class, introspect, implement dependencies, and create a new class

## Parameters

### classname

`string`

The name of the class

### classdata

`unknown`

The example of the class

### logger

[`ParserErrorHandler`](../../Parser/type-aliases/ParserErrorHandler.md)

The logger to log errors to

## Returns

[`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

Class based on the example classdata extending YTNode
