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

[src/utils/Utils.ts:167](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/utils/Utils.ts#L167)
