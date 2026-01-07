[youtubei.js](../../../../README.md) / [YTNodes](../README.md) / VideoCard

# Class: VideoCard

Defined in: [src/parser/classes/VideoCard.ts:6](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/VideoCard.ts#L6)

## Extends

- [`Video`](Video.md)

## Constructors

### Constructor

> **new VideoCard**(`data`): `VideoCard`

Defined in: [src/parser/classes/VideoCard.ts:11](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/VideoCard.ts#L11)

#### Parameters

##### data

[`RawNode`](../../../../type-aliases/RawNode.md)

#### Returns

`VideoCard`

#### Overrides

[`Video`](Video.md).[`constructor`](Video.md#constructor)

## Properties

### additional\_metadatas?

> `optional` **additional\_metadatas**: [`Text`](../../Misc/classes/Text.md)[]

Defined in: [src/parser/classes/Video.ts:22](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Video.ts#L22)

#### Inherited from

[`Video`](Video.md).[`additional_metadatas`](Video.md#additional_metadatas)

***

### author

> **author**: [`Author`](../../Misc/classes/Author.md)

Defined in: [src/parser/classes/Video.ts:26](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Video.ts#L26)

#### Inherited from

[`Video`](Video.md).[`author`](Video.md#author)

***

### badges

> **badges**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`MetadataBadge`](MetadataBadge.md)\>

Defined in: [src/parser/classes/Video.ts:27](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Video.ts#L27)

#### Inherited from

[`Video`](Video.md).[`badges`](Video.md#badges)

***

### byline\_text?

> `optional` **byline\_text**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/Video.ts:37](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Video.ts#L37)

#### Inherited from

[`Video`](Video.md).[`byline_text`](Video.md#byline_text)

***

### description\_snippet?

> `optional` **description\_snippet**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/Video.ts:19](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Video.ts#L19)

#### Inherited from

[`Video`](Video.md).[`description_snippet`](Video.md#description_snippet)

***

### endpoint?

> `optional` **endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

Defined in: [src/parser/classes/Video.ts:28](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Video.ts#L28)

#### Inherited from

[`Video`](Video.md).[`endpoint`](Video.md#endpoint)

***

### expandable\_metadata

> **expandable\_metadata**: [`ExpandableMetadata`](ExpandableMetadata.md) \| `null`

Defined in: [src/parser/classes/Video.ts:21](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Video.ts#L21)

#### Inherited from

[`Video`](Video.md).[`expandable_metadata`](Video.md#expandable_metadata)

***

### is\_watched

> **is\_watched**: `boolean`

Defined in: [src/parser/classes/Video.ts:35](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Video.ts#L35)

#### Inherited from

[`Video`](Video.md).[`is_watched`](Video.md#is_watched)

***

### length\_text?

> `optional` **length\_text**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/Video.ts:33](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Video.ts#L33)

#### Inherited from

[`Video`](Video.md).[`length_text`](Video.md#length_text)

***

### menu

> **menu**: [`Menu`](Menu.md) \| `null`

Defined in: [src/parser/classes/Video.ts:36](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Video.ts#L36)

#### Inherited from

[`Video`](Video.md).[`menu`](Video.md#menu)

***

### metadata\_text?

> `optional` **metadata\_text**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/VideoCard.ts:9](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/VideoCard.ts#L9)

***

### published?

> `optional` **published**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/Video.ts:29](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Video.ts#L29)

#### Inherited from

[`Video`](Video.md).[`published`](Video.md#published)

***

### rich\_thumbnail?

> `optional` **rich\_thumbnail**: [`YTNode`](../../Helpers/classes/YTNode.md)

Defined in: [src/parser/classes/Video.ts:25](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Video.ts#L25)

#### Inherited from

[`Video`](Video.md).[`rich_thumbnail`](Video.md#rich_thumbnail)

***

### search\_video\_result\_entity\_key?

> `optional` **search\_video\_result\_entity\_key**: `string`

Defined in: [src/parser/classes/Video.ts:38](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Video.ts#L38)

#### Inherited from

[`Video`](Video.md).[`search_video_result_entity_key`](Video.md#search_video_result_entity_key)

***

### service\_endpoint?

> `optional` **service\_endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

Defined in: [src/parser/classes/Video.ts:40](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Video.ts#L40)

#### Inherited from

[`Video`](Video.md).[`service_endpoint`](Video.md#service_endpoint)

***

### service\_endpoints?

> `optional` **service\_endpoints**: [`NavigationEndpoint`](NavigationEndpoint.md)[]

Defined in: [src/parser/classes/Video.ts:39](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Video.ts#L39)

#### Inherited from

[`Video`](Video.md).[`service_endpoints`](Video.md#service_endpoints)

***

### short\_view\_count?

> `optional` **short\_view\_count**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/Video.ts:31](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Video.ts#L31)

#### Inherited from

[`Video`](Video.md).[`short_view_count`](Video.md#short_view_count)

***

### show\_action\_menu

> **show\_action\_menu**: `boolean`

Defined in: [src/parser/classes/Video.ts:34](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Video.ts#L34)

#### Inherited from

[`Video`](Video.md).[`show_action_menu`](Video.md#show_action_menu)

***

### snippets?

> `optional` **snippets**: `object`[]

Defined in: [src/parser/classes/Video.ts:20](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Video.ts#L20)

#### hover\_text

> **hover\_text**: [`Text`](../../Misc/classes/Text.md)

#### text

> **text**: [`Text`](../../Misc/classes/Text.md)

#### Inherited from

[`Video`](Video.md).[`snippets`](Video.md#snippets)

***

### style?

> `optional` **style**: `"VIDEO_STYLE_TYPE_UNKNOWN"` \| `"VIDEO_STYLE_TYPE_NORMAL"` \| `"VIDEO_STYLE_TYPE_POST"` \| `"VIDEO_STYLE_TYPE_SUB"` \| `"VIDEO_STYLE_TYPE_LIVE_POST"` \| `"VIDEO_STYLE_TYPE_FULL_BLEED_ISOLATED"` \| `"VIDEO_STYLE_TYPE_WITH_EXPANDED_METADATA"`

Defined in: [src/parser/classes/Video.ts:41](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Video.ts#L41)

#### Inherited from

[`Video`](Video.md).[`style`](Video.md#style)

***

### thumbnail\_overlays

> **thumbnail\_overlays**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

Defined in: [src/parser/classes/Video.ts:24](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Video.ts#L24)

#### Inherited from

[`Video`](Video.md).[`thumbnail_overlays`](Video.md#thumbnail_overlays)

***

### thumbnails

> **thumbnails**: [`Thumbnail`](../../Misc/classes/Thumbnail.md)[]

Defined in: [src/parser/classes/Video.ts:23](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Video.ts#L23)

#### Inherited from

[`Video`](Video.md).[`thumbnails`](Video.md#thumbnails)

***

### title

> **title**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/Video.ts:17](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Video.ts#L17)

#### Inherited from

[`Video`](Video.md).[`title`](Video.md#title)

***

### type

> `readonly` **type**: `string`

Defined in: [src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L8)

#### Inherited from

[`Video`](Video.md).[`type`](Video.md#type)

***

### untranslated\_title?

> `optional` **untranslated\_title**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/Video.ts:18](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Video.ts#L18)

#### Inherited from

[`Video`](Video.md).[`untranslated_title`](Video.md#untranslated_title)

***

### upcoming?

> `optional` **upcoming**: `Date`

Defined in: [src/parser/classes/Video.ts:32](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Video.ts#L32)

#### Inherited from

[`Video`](Video.md).[`upcoming`](Video.md#upcoming)

***

### video\_id

> **video\_id**: `string`

Defined in: [src/parser/classes/Video.ts:16](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Video.ts#L16)

#### Inherited from

[`Video`](Video.md).[`video_id`](Video.md#video_id)

***

### view\_count?

> `optional` **view\_count**: [`Text`](../../Misc/classes/Text.md)

Defined in: [src/parser/classes/Video.ts:30](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Video.ts#L30)

#### Inherited from

[`Video`](Video.md).[`view_count`](Video.md#view_count)

***

### type

> `static` **type**: `string` = `'VideoCard'`

Defined in: [src/parser/classes/VideoCard.ts:7](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/VideoCard.ts#L7)

#### Overrides

[`Video`](Video.md).[`type`](Video.md#type-1)

## Accessors

### best\_thumbnail

#### Get Signature

> **get** **best\_thumbnail**(): [`Thumbnail`](../../Misc/classes/Thumbnail.md) \| `undefined`

Defined in: [src/parser/classes/Video.ts:148](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Video.ts#L148)

##### Returns

[`Thumbnail`](../../Misc/classes/Thumbnail.md) \| `undefined`

#### Inherited from

[`Video`](Video.md).[`best_thumbnail`](Video.md#best_thumbnail)

***

### description

#### Get Signature

> **get** **description**(): `string`

Defined in: [src/parser/classes/Video.ts:119](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Video.ts#L119)

##### Returns

`string`

#### Inherited from

[`Video`](Video.md).[`description`](Video.md#description)

***

### duration

#### Get Signature

> **get** **duration**(): `object`

Defined in: [src/parser/classes/Video.ts:152](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Video.ts#L152)

##### Returns

`object`

###### seconds

> **seconds**: `number`

###### text

> **text**: `string` \| `undefined` = `length_text`

#### Inherited from

[`Video`](Video.md).[`duration`](Video.md#duration)

***

### has\_captions

#### Get Signature

> **get** **has\_captions**(): `boolean`

Defined in: [src/parser/classes/Video.ts:144](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Video.ts#L144)

##### Returns

`boolean`

#### Inherited from

[`Video`](Video.md).[`has_captions`](Video.md#has_captions)

***

### id

#### Get Signature

> **get** **id**(): `string`

Defined in: [src/parser/classes/Video.ts:115](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Video.ts#L115)

##### Deprecated

Use [`video_id`](Video.md#video_id) instead.

##### Returns

`string`

#### Inherited from

[`Video`](Video.md).[`id`](Video.md#id)

***

### is\_4k

#### Get Signature

> **get** **is\_4k**(): `boolean`

Defined in: [src/parser/classes/Video.ts:140](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Video.ts#L140)

##### Returns

`boolean`

#### Inherited from

[`Video`](Video.md).[`is_4k`](Video.md#is_4k)

***

### is\_live

#### Get Signature

> **get** **is\_live**(): `boolean`

Defined in: [src/parser/classes/Video.ts:125](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Video.ts#L125)

##### Returns

`boolean`

#### Inherited from

[`Video`](Video.md).[`is_live`](Video.md#is_live)

***

### is\_premiere

#### Get Signature

> **get** **is\_premiere**(): `boolean`

Defined in: [src/parser/classes/Video.ts:136](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Video.ts#L136)

##### Returns

`boolean`

#### Inherited from

[`Video`](Video.md).[`is_premiere`](Video.md#is_premiere)

***

### is\_upcoming

#### Get Signature

> **get** **is\_upcoming**(): `boolean` \| `undefined`

Defined in: [src/parser/classes/Video.ts:132](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/Video.ts#L132)

##### Returns

`boolean` \| `undefined`

#### Inherited from

[`Video`](Video.md).[`is_upcoming`](Video.md#is_upcoming)

## Methods

### as()

> **as**\<`T`, `K`\>(...`types`): `InstanceType`\<`K`\[`number`\]\>

Defined in: [src/parser/helpers.ts:29](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L29)

Cast to one of the given types.

#### Type Parameters

##### T

`T` *extends* [`YTNode`](../../Helpers/classes/YTNode.md)

##### K

`K` *extends* [`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)\<`T`\>[]

#### Parameters

##### types

...`K`

The types to cast to

#### Returns

`InstanceType`\<`K`\[`number`\]\>

The node cast to one of the given types

#### Throws

If the node is not of the given type

#### Inherited from

[`Video`](Video.md).[`as`](Video.md#as)

***

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is VideoCard & { [k in string]: R }`

Defined in: [src/parser/helpers.ts:41](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L41)

Check for a key without asserting the type.

#### Type Parameters

##### T

`T` *extends* `string`

##### R

`R` = `any`

#### Parameters

##### key

`T`

The key to check

#### Returns

`this is VideoCard & { [k in string]: R }`

Whether the node has the key

#### Inherited from

[`Video`](Video.md).[`hasKey`](Video.md#haskey)

***

### is()

> **is**\<`T`, `K`\>(...`types`): `this is InstanceType<K[number]>`

Defined in: [src/parser/helpers.ts:19](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L19)

Check if the node is of the given type.

#### Type Parameters

##### T

`T` *extends* [`YTNode`](../../Helpers/classes/YTNode.md)

##### K

`K` *extends* [`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)\<`T`\>[]

#### Parameters

##### types

...`K`

The type to check

#### Returns

`this is InstanceType<K[number]>`

whether the node is of the given type

#### Inherited from

[`Video`](Video.md).[`is`](Video.md#is)

***

### key()

> **key**\<`T`, `R`\>(`key`): [`Maybe`](../../Helpers/classes/Maybe.md)

Defined in: [src/parser/helpers.ts:51](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L51)

Assert that the node has the given key and return it.

#### Type Parameters

##### T

`T` *extends* `string`

##### R

`R` = `any`

#### Parameters

##### key

`T`

The key to check

#### Returns

[`Maybe`](../../Helpers/classes/Maybe.md)

The value of the key wrapped in a Maybe

#### Throws

If the node does not have the key

#### Inherited from

[`Video`](Video.md).[`key`](Video.md#key)
