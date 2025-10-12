[youtubei.js](../../../README.md) / [Generator](../README.md) / createRuntimeClass

# Function: createRuntimeClass()

> **createRuntimeClass**(`classname`, `key_info`, `logger`): [`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)

Given a classname and its resolved key info, create a new class

## Parameters

• **classname**: `string`

The name of the class

• **key\_info**: [`KeyInfo`](../type-aliases/KeyInfo.md)

The resolved key info

• **logger**: [`ParserErrorHandler`](../../Parser/type-aliases/ParserErrorHandler.md)

The logger to log errors to

## Returns

[`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)

Class based on the key info extending YTNode

## Defined in

[src/parser/generator.ts:411](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/generator.ts#L411)
