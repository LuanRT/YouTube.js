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

## Returns

[`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

Class based on the example classdata extending YTNode

## Defined in

[src/parser/generator.ts:470](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/generator.ts#L470)
