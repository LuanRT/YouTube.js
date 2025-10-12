[youtubei.js](../README.md) / CreateCommentRequest

# Type Alias: CreateCommentRequest

> **CreateCommentRequest** = `object`

Defined in: [src/parser/types/CommandEndpoints.ts:179](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/types/CommandEndpoints.ts#L179)

## Properties

### accessRestrictions?

> `optional` **accessRestrictions**: `object`

Defined in: [src/parser/types/CommandEndpoints.ts:186](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/types/CommandEndpoints.ts#L186)

#### restriction

> **restriction**: `"RESTRICTION_TYPE_EVERYONE"` \| `"RESTRICTION_TYPE_SPONSORS_ONLY"`

***

### botguardResponse?

> `optional` **botguardResponse**: `string`

Defined in: [src/parser/types/CommandEndpoints.ts:187](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/types/CommandEndpoints.ts#L187)

***

### commentText?

> `optional` **commentText**: `string`

Defined in: [src/parser/types/CommandEndpoints.ts:181](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/types/CommandEndpoints.ts#L181)

***

### createCommentParams?

> `optional` **createCommentParams**: `string`

Defined in: [src/parser/types/CommandEndpoints.ts:180](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/types/CommandEndpoints.ts#L180)

***

### imageAttachment?

> `optional` **imageAttachment**: `object`

Defined in: [src/parser/types/CommandEndpoints.ts:184](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/types/CommandEndpoints.ts#L184)

#### encryptedBlobId

> **encryptedBlobId**: `string`

***

### pollAttachment?

> `optional` **pollAttachment**: `object`

Defined in: [src/parser/types/CommandEndpoints.ts:183](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/types/CommandEndpoints.ts#L183)

#### choices

> **choices**: `string`[]

***

### sharedPostAttachment?

> `optional` **sharedPostAttachment**: `object`

Defined in: [src/parser/types/CommandEndpoints.ts:185](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/types/CommandEndpoints.ts#L185)

#### postId

> **postId**: `string`

***

### videoAttachment?

> `optional` **videoAttachment**: `object`

Defined in: [src/parser/types/CommandEndpoints.ts:182](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/types/CommandEndpoints.ts#L182)

#### videoId

> **videoId**: `string`
