[youtubei.js](../../../README.md) / [Types](../README.md) / CreateVideoEndpointOptions

# Type Alias: CreateVideoEndpointOptions

> **CreateVideoEndpointOptions**: `object`

## Type declaration

### client?

> `optional` **client**: [`InnerTubeClient`](InnerTubeClient.md)

The client to use.

### frontend\_upload\_id

> **frontend\_upload\_id**: `string`

The id of the frontend.

### initial\_metadata

> **initial\_metadata**: `object`

The metadata to set after the video is uploaded.

### initial\_metadata.description

> **description**: `object`

### initial\_metadata.description.new\_description

> **new\_description**: `string`

### initial\_metadata.description.should\_segment

> **should\_segment**: `boolean`

### initial\_metadata.draft\_state

> **draft\_state**: `object`

### initial\_metadata.draft\_state.is\_draft?

> `optional` **is\_draft**: `boolean`

### initial\_metadata.privacy

> **privacy**: `object`

### initial\_metadata.privacy.new\_privacy

> **new\_privacy**: `string`

### initial\_metadata.title

> **title**: `object`

### initial\_metadata.title.new\_title

> **new\_title**: `string`

### resource\_id

> **resource\_id**: `object`

The id of the uploaded resource.

### resource\_id.scotty\_resource\_id

> **scotty\_resource\_id**: `object`

### resource\_id.scotty\_resource\_id.id

> **id**: `string`

## Defined in

[src/types/Endpoints.ts:274](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/types/Endpoints.ts#L274)
