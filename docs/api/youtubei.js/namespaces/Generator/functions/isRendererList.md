[youtubei.js](../../../../README.md) / [Generator](../README.md) / isRendererList

# Function: isRendererList()

> **isRendererList**(`value`): `false` \| \{\[`k`: `string`\]: `any`; \}

Defined in: [src/parser/generator.ts:141](https://github.com/LuanRT/YouTube.js/blob/faaf5fc5c15ff93eac8442b2fbdb4767d9a47b3f/src/parser/generator.ts#L141)

Checks if the given value is an array of renderers

## Parameters

### value

`unknown`

The value to check

## Returns

`false` \| \{\[`k`: `string`\]: `any`; \}

If it is a renderer list, return an object with keys being the classnames, and values being an example of that class.
Otherwise, return false.
