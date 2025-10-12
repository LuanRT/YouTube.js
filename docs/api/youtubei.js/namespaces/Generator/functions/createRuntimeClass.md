[youtubei.js](../../../../README.md) / [Generator](../README.md) / createRuntimeClass

# Function: createRuntimeClass()

> **createRuntimeClass**(`classname`, `key_info`, `logger`): [`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)

Defined in: [src/parser/generator.ts:411](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/generator.ts#L411)

Given a classname and its resolved key info, create a new class

## Parameters

### classname

`string`

The name of the class

### key\_info

[`KeyInfo`](../type-aliases/KeyInfo.md)

The resolved key info

### logger

[`ParserErrorHandler`](../../Parser/type-aliases/ParserErrorHandler.md)

The logger to log errors to

## Returns

[`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)

Class based on the key info extending YTNode
