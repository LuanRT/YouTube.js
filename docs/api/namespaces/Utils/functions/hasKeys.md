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

[src/utils/Utils.ts:181](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/utils/Utils.ts#L181)
