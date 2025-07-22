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

[src/utils/Utils.ts:183](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/utils/Utils.ts#L183)
