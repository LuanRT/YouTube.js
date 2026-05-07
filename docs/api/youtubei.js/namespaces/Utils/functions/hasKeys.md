[youtubei.js](../../../../README.md) / [Utils](../README.md) / hasKeys

# Function: hasKeys()

> **hasKeys**\<`T`, `R`\>(`params`, ...`keys`): `params is Exclude<T, R[number]> & Required<Pick<T, R[number]>>`

Defined in: [src/utils/Utils.ts:181](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/utils/Utils.ts#L181)

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
