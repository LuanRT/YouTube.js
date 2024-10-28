[youtubei.js](../../../README.md) / [Types](../README.md) / ObjectSnakeToCamel

# Type Alias: ObjectSnakeToCamel\<T\>

> **ObjectSnakeToCamel**\<`T`\>: `{ [K in keyof T as SnakeToCamel<K & string>]: T[K] extends object ? ObjectSnakeToCamel<T[K]> : T[K] }`

## Type Parameters

• **T**

## Defined in

[src/types/Endpoints.ts:5](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/types/Endpoints.ts#L5)
