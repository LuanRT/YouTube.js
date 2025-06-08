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

[src/utils/Utils.ts:183](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/utils/Utils.ts#L183)
