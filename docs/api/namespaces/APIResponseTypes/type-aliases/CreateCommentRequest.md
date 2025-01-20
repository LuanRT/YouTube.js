[youtubei.js](../../../README.md) / [APIResponseTypes](../README.md) / CreateCommentRequest

# Type Alias: CreateCommentRequest

> **CreateCommentRequest**: `object`

## Type declaration

### accessRestrictions?

> `optional` **accessRestrictions**: `object`

### accessRestrictions.restriction

> **restriction**: `"RESTRICTION_TYPE_EVERYONE"` \| `"RESTRICTION_TYPE_SPONSORS_ONLY"`

### botguardResponse?

> `optional` **botguardResponse**: `string`

### commentText?

> `optional` **commentText**: `string`

### createCommentParams?

> `optional` **createCommentParams**: `string`

### imageAttachment?

> `optional` **imageAttachment**: `object`

### imageAttachment.encryptedBlobId

> **encryptedBlobId**: `string`

### pollAttachment?

> `optional` **pollAttachment**: `object`

### pollAttachment.choices

> **choices**: `string`[]

### sharedPostAttachment?

> `optional` **sharedPostAttachment**: `object`

### sharedPostAttachment.postId

> **postId**: `string`

### videoAttachment?

> `optional` **videoAttachment**: `object`

### videoAttachment.videoId

> **videoId**: `string`

## Defined in

[src/parser/types/CommandEndpoints.ts:179](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/types/CommandEndpoints.ts#L179)
