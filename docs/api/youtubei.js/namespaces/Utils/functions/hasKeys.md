[youtubei.js](../../../../README.md) / [Utils](../README.md) / hasKeys

# Function: hasKeys()

> **hasKeys**\<`T`, `R`\>(`params`, ...`keys`): `params is Exclude<T, R[number]> & Required<Pick<T, R[number]>>`

Defined in: [src/utils/Utils.ts:181](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/utils/Utils.ts#L181)

## Type Parameters

### T

`T` *extends* `object`

### R

`R` *extends* keyof `T`[]

## Parameters

### params

`T`

### keys

...`R`

## Returns

`params is Exclude<T, R[number]> & Required<Pick<T, R[number]>>`
