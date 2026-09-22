[youtubei.js](../../../../README.md) / [Misc](../README.md) / Author

# Class: Author

Defined in: [src/parser/classes/misc/Author.ts:12](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/misc/Author.ts#L12)

## Constructors

### Constructor

> **new Author**(`item`, `badges?`, `thumbs?`, `id?`): `Author`

Defined in: [src/parser/classes/misc/Author.ts:26](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/misc/Author.ts#L26)

#### Parameters

##### item

[`RawNode`](../../../../type-aliases/RawNode.md)

##### badges?

`any`

##### thumbs?

`any`

##### id?

`string`

#### Returns

`Author`

## Properties

### avatar\_thumbnail\_url?

> `optional` **avatar\_thumbnail\_url?**: `string`

Defined in: [src/parser/classes/misc/Author.ts:18](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/misc/Author.ts#L18)

***

### badges

> **badges**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

Defined in: [src/parser/classes/misc/Author.ts:17](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/misc/Author.ts#L17)

***

### endpoint?

> `optional` **endpoint?**: [`NavigationEndpoint`](../../YTNodes/classes/NavigationEndpoint.md)

Defined in: [src/parser/classes/misc/Author.ts:16](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/misc/Author.ts#L16)

***

### id

> **id**: `string`

Defined in: [src/parser/classes/misc/Author.ts:13](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/misc/Author.ts#L13)

***

### is\_creator?

> `optional` **is\_creator?**: `boolean`

Defined in: [src/parser/classes/misc/Author.ts:21](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/misc/Author.ts#L21)

***

### is\_current\_user?

> `optional` **is\_current\_user?**: `boolean`

Defined in: [src/parser/classes/misc/Author.ts:19](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/misc/Author.ts#L19)

***

### is\_moderator?

> `optional` **is\_moderator?**: `boolean`

Defined in: [src/parser/classes/misc/Author.ts:22](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/misc/Author.ts#L22)

***

### is\_public\_subscriber?

> `optional` **is\_public\_subscriber?**: `boolean`

Defined in: [src/parser/classes/misc/Author.ts:20](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/misc/Author.ts#L20)

***

### is\_verified?

> `optional` **is\_verified?**: `boolean`

Defined in: [src/parser/classes/misc/Author.ts:23](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/misc/Author.ts#L23)

***

### is\_verified\_artist?

> `optional` **is\_verified\_artist?**: `boolean`

Defined in: [src/parser/classes/misc/Author.ts:24](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/misc/Author.ts#L24)

***

### name

> **name**: `string`

Defined in: [src/parser/classes/misc/Author.ts:14](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/misc/Author.ts#L14)

***

### thumbnails

> **thumbnails**: [`Thumbnail`](Thumbnail.md)[]

Defined in: [src/parser/classes/misc/Author.ts:15](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/misc/Author.ts#L15)

## Accessors

### best\_thumbnail

#### Get Signature

> **get** **best\_thumbnail**(): [`Thumbnail`](Thumbnail.md) \| `undefined`

Defined in: [src/parser/classes/misc/Author.ts:84](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/misc/Author.ts#L84)

##### Returns

[`Thumbnail`](Thumbnail.md) \| `undefined`

***

### collaborators

#### Get Signature

> **get** **collaborators**(): [`ListItemView`](../../YTNodes/classes/ListItemView.md)[]

Defined in: [src/parser/classes/misc/Author.ts:88](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/misc/Author.ts#L88)

##### Returns

[`ListItemView`](../../YTNodes/classes/ListItemView.md)[]

***

### url

#### Get Signature

> **get** **url**(): `string` \| `undefined`

Defined in: [src/parser/classes/misc/Author.ts:80](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/classes/misc/Author.ts#L80)

##### Returns

`string` \| `undefined`
