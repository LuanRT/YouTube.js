[youtubei.js](../../../../README.md) / [Utils](../README.md) / hasKeys

# Function: hasKeys()

> **hasKeys**\<`T`, `R`\>(`params`, ...`keys`): `params is Exclude<T, R[number]> & Required<Pick<T, R[number]>>`

Defined in: [src/utils/Utils.ts:181](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/utils/Utils.ts#L181)

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
