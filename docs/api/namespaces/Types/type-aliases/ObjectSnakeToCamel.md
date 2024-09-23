[youtubei.js](../../../README.md) / [Types](../README.md) / ObjectSnakeToCamel

# Type Alias: ObjectSnakeToCamel\<T\>

> **ObjectSnakeToCamel**\<`T`\>: `{ [K in keyof T as SnakeToCamel<K & string>]: T[K] extends object ? ObjectSnakeToCamel<T[K]> : T[K] }`

## Type Parameters

• **T**

## Defined in

[src/types/Endpoints.ts:5](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/types/Endpoints.ts#L5)
