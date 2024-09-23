[youtubei.js](../../../README.md) / [Misc](../README.md) / Format

# Class: Format

## Constructors

### new Format()

> **new Format**(`data`, `this_response_nsig_cache`?): [`Format`](Format.md)

#### Parameters

• **data**: [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

• **this\_response\_nsig\_cache?**: `Map`\<`string`, `string`\>

#### Returns

[`Format`](Format.md)

#### Defined in

[src/parser/classes/misc/Format.ts:76](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/misc/Format.ts#L76)

## Properties

### approx\_duration\_ms

> **approx\_duration\_ms**: `number`

#### Defined in

[src/parser/classes/misc/Format.ts:30](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/misc/Format.ts#L30)

***

### audio\_channels?

> `optional` **audio\_channels**: `number`

#### Defined in

[src/parser/classes/misc/Format.ts:32](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/misc/Format.ts#L32)

***

### audio\_quality?

> `optional` **audio\_quality**: `string`

#### Defined in

[src/parser/classes/misc/Format.ts:29](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/misc/Format.ts#L29)

***

### audio\_sample\_rate?

> `optional` **audio\_sample\_rate**: `number`

#### Defined in

[src/parser/classes/misc/Format.ts:31](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/misc/Format.ts#L31)

***

### audio\_track?

> `optional` **audio\_track**: `object`

#### audio\_is\_default

> **audio\_is\_default**: `boolean`

#### display\_name

> **display\_name**: `string`

#### id

> **id**: `string`

#### Defined in

[src/parser/classes/misc/Format.ts:50](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/misc/Format.ts#L50)

***

### average\_bitrate?

> `optional` **average\_bitrate**: `number`

#### Defined in

[src/parser/classes/misc/Format.ts:21](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/misc/Format.ts#L21)

***

### bitrate

> **bitrate**: `number`

#### Defined in

[src/parser/classes/misc/Format.ts:22](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/misc/Format.ts#L22)

***

### caption\_track?

> `optional` **caption\_track**: `object`

#### display\_name

> **display\_name**: `string`

#### id

> **id**: `string`

#### kind?

> `optional` **kind**: `"asr"` \| `"frc"`

#### language\_code

> **language\_code**: `string`

#### vss\_id

> **vss\_id**: `string`

#### Defined in

[src/parser/classes/misc/Format.ts:68](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/misc/Format.ts#L68)

***

### cipher?

> `optional` **cipher**: `string`

#### Defined in

[src/parser/classes/misc/Format.ts:49](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/misc/Format.ts#L49)

***

### color\_info?

> `optional` **color\_info**: `object`

#### matrix\_coefficients?

> `optional` **matrix\_coefficients**: `string`

#### primaries?

> `optional` **primaries**: `string`

#### transfer\_characteristics?

> `optional` **transfer\_characteristics**: `string`

#### Defined in

[src/parser/classes/misc/Format.ts:63](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/misc/Format.ts#L63)

***

### content\_length?

> `optional` **content\_length**: `number`

#### Defined in

[src/parser/classes/misc/Format.ts:14](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/misc/Format.ts#L14)

***

### distinct\_params?

> `optional` **distinct\_params**: `string`

#### Defined in

[src/parser/classes/misc/Format.ts:37](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/misc/Format.ts#L37)

***

### drm\_families?

> `optional` **drm\_families**: `string`[]

#### Defined in

[src/parser/classes/misc/Format.ts:17](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/misc/Format.ts#L17)

***

### drm\_track\_type?

> `optional` **drm\_track\_type**: `string`

#### Defined in

[src/parser/classes/misc/Format.ts:36](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/misc/Format.ts#L36)

***

### fair\_play\_key\_uri?

> `optional` **fair\_play\_key\_uri**: `string`

#### Defined in

[src/parser/classes/misc/Format.ts:25](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/misc/Format.ts#L25)

***

### fps?

> `optional` **fps**: `number`

#### Defined in

[src/parser/classes/misc/Format.ts:18](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/misc/Format.ts#L18)

***

### has\_audio

> **has\_audio**: `boolean`

#### Defined in

[src/parser/classes/misc/Format.ts:55](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/misc/Format.ts#L55)

***

### has\_text

> **has\_text**: `boolean`

#### Defined in

[src/parser/classes/misc/Format.ts:57](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/misc/Format.ts#L57)

***

### has\_video

> **has\_video**: `boolean`

#### Defined in

[src/parser/classes/misc/Format.ts:56](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/misc/Format.ts#L56)

***

### height?

> `optional` **height**: `number`

#### Defined in

[src/parser/classes/misc/Format.ts:11](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/misc/Format.ts#L11)

***

### high\_replication?

> `optional` **high\_replication**: `boolean`

#### Defined in

[src/parser/classes/misc/Format.ts:28](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/misc/Format.ts#L28)

***

### index\_range?

> `optional` **index\_range**: `object`

#### end

> **end**: `number`

#### start

> **start**: `number`

#### Defined in

[src/parser/classes/misc/Format.ts:45](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/misc/Format.ts#L45)

***

### init\_range?

> `optional` **init\_range**: `object`

#### end

> **end**: `number`

#### start

> **start**: `number`

#### Defined in

[src/parser/classes/misc/Format.ts:41](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/misc/Format.ts#L41)

***

### is\_descriptive?

> `optional` **is\_descriptive**: `boolean`

#### Defined in

[src/parser/classes/misc/Format.ts:60](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/misc/Format.ts#L60)

***

### is\_drc?

> `optional` **is\_drc**: `boolean`

#### Defined in

[src/parser/classes/misc/Format.ts:35](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/misc/Format.ts#L35)

***

### is\_dubbed?

> `optional` **is\_dubbed**: `boolean`

#### Defined in

[src/parser/classes/misc/Format.ts:59](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/misc/Format.ts#L59)

***

### is\_original?

> `optional` **is\_original**: `boolean`

#### Defined in

[src/parser/classes/misc/Format.ts:62](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/misc/Format.ts#L62)

***

### is\_secondary?

> `optional` **is\_secondary**: `boolean`

#### Defined in

[src/parser/classes/misc/Format.ts:61](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/misc/Format.ts#L61)

***

### is\_type\_otf

> **is\_type\_otf**: `boolean`

#### Defined in

[src/parser/classes/misc/Format.ts:40](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/misc/Format.ts#L40)

***

### itag

> **itag**: `number`

#### Defined in

[src/parser/classes/misc/Format.ts:8](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/misc/Format.ts#L8)

***

### language?

> `optional` **language**: `null` \| `string`

#### Defined in

[src/parser/classes/misc/Format.ts:58](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/misc/Format.ts#L58)

***

### last\_modified

> **last\_modified**: `Date`

#### Defined in

[src/parser/classes/misc/Format.ts:12](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/misc/Format.ts#L12)

***

### last\_modified\_ms

> **last\_modified\_ms**: `string`

#### Defined in

[src/parser/classes/misc/Format.ts:13](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/misc/Format.ts#L13)

***

### loudness\_db?

> `optional` **loudness\_db**: `number`

#### Defined in

[src/parser/classes/misc/Format.ts:33](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/misc/Format.ts#L33)

***

### max\_dvr\_duration\_sec?

> `optional` **max\_dvr\_duration\_sec**: `number`

#### Defined in

[src/parser/classes/misc/Format.ts:27](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/misc/Format.ts#L27)

***

### mime\_type

> **mime\_type**: `string`

#### Defined in

[src/parser/classes/misc/Format.ts:39](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/misc/Format.ts#L39)

***

### projection\_type?

> `optional` **projection\_type**: `"RECTANGULAR"` \| `"EQUIRECTANGULAR"` \| `"EQUIRECTANGULAR_THREED_TOP_BOTTOM"` \| `"MESH"`

#### Defined in

[src/parser/classes/misc/Format.ts:20](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/misc/Format.ts#L20)

***

### quality?

> `optional` **quality**: `string`

#### Defined in

[src/parser/classes/misc/Format.ts:15](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/misc/Format.ts#L15)

***

### quality\_label?

> `optional` **quality\_label**: `string`

#### Defined in

[src/parser/classes/misc/Format.ts:19](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/misc/Format.ts#L19)

***

### signature\_cipher?

> `optional` **signature\_cipher**: `string`

#### Defined in

[src/parser/classes/misc/Format.ts:34](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/misc/Format.ts#L34)

***

### spatial\_audio\_type?

> `optional` **spatial\_audio\_type**: `"AMBISONICS_5_1"` \| `"AMBISONICS_QUAD"` \| `"FOA_WITH_NON_DIEGETIC"`

#### Defined in

[src/parser/classes/misc/Format.ts:23](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/misc/Format.ts#L23)

***

### stereo\_layout?

> `optional` **stereo\_layout**: `"LEFT_RIGHT"` \| `"TOP_BOTTOM"`

#### Defined in

[src/parser/classes/misc/Format.ts:26](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/misc/Format.ts#L26)

***

### target\_duration\_dec?

> `optional` **target\_duration\_dec**: `number`

#### Defined in

[src/parser/classes/misc/Format.ts:24](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/misc/Format.ts#L24)

***

### track\_absolute\_loudness\_lkfs?

> `optional` **track\_absolute\_loudness\_lkfs**: `number`

#### Defined in

[src/parser/classes/misc/Format.ts:38](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/misc/Format.ts#L38)

***

### url?

> `optional` **url**: `string`

#### Defined in

[src/parser/classes/misc/Format.ts:9](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/misc/Format.ts#L9)

***

### width?

> `optional` **width**: `number`

#### Defined in

[src/parser/classes/misc/Format.ts:10](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/misc/Format.ts#L10)

***

### xtags?

> `optional` **xtags**: `string`

#### Defined in

[src/parser/classes/misc/Format.ts:16](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/misc/Format.ts#L16)

## Methods

### decipher()

> **decipher**(`player`): `string`

Deciphers the streaming url of the format.

#### Parameters

• **player**: `undefined` \| [`Player`](../../../classes/Player.md)

#### Returns

`string`

Deciphered URL.

#### Defined in

[src/parser/classes/misc/Format.ts:234](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/parser/classes/misc/Format.ts#L234)
