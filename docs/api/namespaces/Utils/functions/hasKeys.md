[youtubei.js](../../../README.md) / [Utils](../README.md) / hasKeys

# Function: hasKeys()

> **hasKeys**\<`T`, `R`\>(`params`, ...`keys`): `params is Exclude<T, R[number]> & Required<Pick<T, R[number]>>`

## Type Parameters

• **T** *extends* `object`

• **R** *extends* keyof `T`[]

## Parameters

• **params**: `T`

• ...**keys**: `R`

## Returns

`params is Exclude<T, R[number]> & Required<Pick<T, R[number]>>`

## Defined in

[src/utils/Utils.ts:168](https://github.com/LuanRT/YouTube.js/blob/fc5571629eca037af7de03f4b903da6add1f300b/src/utils/Utils.ts#L168)
