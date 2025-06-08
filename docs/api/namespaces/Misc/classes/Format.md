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

[src/parser/classes/misc/Format.ts:85](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Format.ts#L85)

## Properties

### approx\_duration\_ms

> **approx\_duration\_ms**: `number`

#### Defined in

[src/parser/classes/misc/Format.ts:58](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Format.ts#L58)

***

### audio\_channels?

> `optional` **audio\_channels**: `number`

#### Defined in

[src/parser/classes/misc/Format.ts:60](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Format.ts#L60)

***

### audio\_quality?

> `optional` **audio\_quality**: `string`

#### Defined in

[src/parser/classes/misc/Format.ts:57](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Format.ts#L57)

***

### audio\_sample\_rate?

> `optional` **audio\_sample\_rate**: `number`

#### Defined in

[src/parser/classes/misc/Format.ts:59](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Format.ts#L59)

***

### audio\_track?

> `optional` **audio\_track**: `AudioTrack`

#### Defined in

[src/parser/classes/misc/Format.ts:72](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Format.ts#L72)

***

### average\_bitrate?

> `optional` **average\_bitrate**: `number`

#### Defined in

[src/parser/classes/misc/Format.ts:49](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Format.ts#L49)

***

### bitrate

> **bitrate**: `number`

#### Defined in

[src/parser/classes/misc/Format.ts:50](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Format.ts#L50)

***

### caption\_track?

> `optional` **caption\_track**: `CaptionTrack`

#### Defined in

[src/parser/classes/misc/Format.ts:83](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Format.ts#L83)

***

### cipher?

> `optional` **cipher**: `string`

#### Defined in

[src/parser/classes/misc/Format.ts:71](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Format.ts#L71)

***

### color\_info?

> `optional` **color\_info**: `ColorInfo`

#### Defined in

[src/parser/classes/misc/Format.ts:82](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Format.ts#L82)

***

### content\_length?

> `optional` **content\_length**: `number`

#### Defined in

[src/parser/classes/misc/Format.ts:42](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Format.ts#L42)

***

### distinct\_params?

> `optional` **distinct\_params**: `string`

#### Defined in

[src/parser/classes/misc/Format.ts:65](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Format.ts#L65)

***

### drm\_families?

> `optional` **drm\_families**: `string`[]

#### Defined in

[src/parser/classes/misc/Format.ts:45](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Format.ts#L45)

***

### drm\_track\_type?

> `optional` **drm\_track\_type**: `string`

#### Defined in

[src/parser/classes/misc/Format.ts:64](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Format.ts#L64)

***

### fair\_play\_key\_uri?

> `optional` **fair\_play\_key\_uri**: `string`

#### Defined in

[src/parser/classes/misc/Format.ts:53](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Format.ts#L53)

***

### fps?

> `optional` **fps**: `number`

#### Defined in

[src/parser/classes/misc/Format.ts:46](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Format.ts#L46)

***

### has\_audio

> **has\_audio**: `boolean`

#### Defined in

[src/parser/classes/misc/Format.ts:73](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Format.ts#L73)

***

### has\_text

> **has\_text**: `boolean`

#### Defined in

[src/parser/classes/misc/Format.ts:75](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Format.ts#L75)

***

### has\_video

> **has\_video**: `boolean`

#### Defined in

[src/parser/classes/misc/Format.ts:74](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Format.ts#L74)

***

### height?

> `optional` **height**: `number`

#### Defined in

[src/parser/classes/misc/Format.ts:39](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Format.ts#L39)

***

### high\_replication?

> `optional` **high\_replication**: `boolean`

#### Defined in

[src/parser/classes/misc/Format.ts:56](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Format.ts#L56)

***

### index\_range?

> `optional` **index\_range**: `Range`

#### Defined in

[src/parser/classes/misc/Format.ts:70](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Format.ts#L70)

***

### init\_range?

> `optional` **init\_range**: `Range`

#### Defined in

[src/parser/classes/misc/Format.ts:69](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Format.ts#L69)

***

### is\_auto\_dubbed?

> `optional` **is\_auto\_dubbed**: `boolean`

#### Defined in

[src/parser/classes/misc/Format.ts:78](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Format.ts#L78)

***

### is\_descriptive?

> `optional` **is\_descriptive**: `boolean`

#### Defined in

[src/parser/classes/misc/Format.ts:79](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Format.ts#L79)

***

### is\_drc?

> `optional` **is\_drc**: `boolean`

#### Defined in

[src/parser/classes/misc/Format.ts:63](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Format.ts#L63)

***

### is\_dubbed?

> `optional` **is\_dubbed**: `boolean`

#### Defined in

[src/parser/classes/misc/Format.ts:77](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Format.ts#L77)

***

### is\_original?

> `optional` **is\_original**: `boolean`

#### Defined in

[src/parser/classes/misc/Format.ts:81](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Format.ts#L81)

***

### is\_secondary?

> `optional` **is\_secondary**: `boolean`

#### Defined in

[src/parser/classes/misc/Format.ts:80](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Format.ts#L80)

***

### is\_type\_otf

> **is\_type\_otf**: `boolean`

#### Defined in

[src/parser/classes/misc/Format.ts:68](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Format.ts#L68)

***

### itag

> **itag**: `number`

#### Defined in

[src/parser/classes/misc/Format.ts:36](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Format.ts#L36)

***

### language?

> `optional` **language**: `null` \| `string`

#### Defined in

[src/parser/classes/misc/Format.ts:76](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Format.ts#L76)

***

### last\_modified

> **last\_modified**: `Date`

#### Defined in

[src/parser/classes/misc/Format.ts:40](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Format.ts#L40)

***

### last\_modified\_ms

> **last\_modified\_ms**: `string`

#### Defined in

[src/parser/classes/misc/Format.ts:41](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Format.ts#L41)

***

### loudness\_db?

> `optional` **loudness\_db**: `number`

#### Defined in

[src/parser/classes/misc/Format.ts:61](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Format.ts#L61)

***

### max\_dvr\_duration\_sec?

> `optional` **max\_dvr\_duration\_sec**: `number`

#### Defined in

[src/parser/classes/misc/Format.ts:55](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Format.ts#L55)

***

### mime\_type

> **mime\_type**: `string`

#### Defined in

[src/parser/classes/misc/Format.ts:67](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Format.ts#L67)

***

### projection\_type?

> `optional` **projection\_type**: `ProjectionType`

#### Defined in

[src/parser/classes/misc/Format.ts:48](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Format.ts#L48)

***

### quality?

> `optional` **quality**: `string`

#### Defined in

[src/parser/classes/misc/Format.ts:43](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Format.ts#L43)

***

### quality\_label?

> `optional` **quality\_label**: `string`

#### Defined in

[src/parser/classes/misc/Format.ts:47](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Format.ts#L47)

***

### signature\_cipher?

> `optional` **signature\_cipher**: `string`

#### Defined in

[src/parser/classes/misc/Format.ts:62](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Format.ts#L62)

***

### spatial\_audio\_type?

> `optional` **spatial\_audio\_type**: `SpatialAudioType`

#### Defined in

[src/parser/classes/misc/Format.ts:51](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Format.ts#L51)

***

### stereo\_layout?

> `optional` **stereo\_layout**: `StereoLayout`

#### Defined in

[src/parser/classes/misc/Format.ts:54](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Format.ts#L54)

***

### target\_duration\_dec?

> `optional` **target\_duration\_dec**: `number`

#### Defined in

[src/parser/classes/misc/Format.ts:52](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Format.ts#L52)

***

### track\_absolute\_loudness\_lkfs?

> `optional` **track\_absolute\_loudness\_lkfs**: `number`

#### Defined in

[src/parser/classes/misc/Format.ts:66](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Format.ts#L66)

***

### url?

> `optional` **url**: `string`

#### Defined in

[src/parser/classes/misc/Format.ts:37](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Format.ts#L37)

***

### width?

> `optional` **width**: `number`

#### Defined in

[src/parser/classes/misc/Format.ts:38](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Format.ts#L38)

***

### xtags?

> `optional` **xtags**: `string`

#### Defined in

[src/parser/classes/misc/Format.ts:44](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Format.ts#L44)

## Methods

### decipher()

> **decipher**(`player`?): `string`

Deciphers the URL using the provided player instance.

#### Parameters

• **player?**: [`Player`](../../../classes/Player.md)

An optional instance of the Player class used to decipher the URL.

#### Returns

`string`

The deciphered URL as a string. If no player is provided, returns the original URL or an empty string.

#### Defined in

[src/parser/classes/misc/Format.ts:244](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Format.ts#L244)
