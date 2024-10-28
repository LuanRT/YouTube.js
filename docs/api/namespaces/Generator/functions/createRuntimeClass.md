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

## Returns

[`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)

Class based on the key info extending YTNode

## Defined in

[src/parser/generator.ts:408](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/parser/generator.ts#L408)
