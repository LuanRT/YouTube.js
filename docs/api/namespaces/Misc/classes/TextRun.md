[youtubei.js](../../../README.md) / [Misc](../README.md) / TextRun

# Class: TextRun

## Implements

- `Run`

## Constructors

### new TextRun()

> **new TextRun**(`data`): [`TextRun`](TextRun.md)

#### Parameters

• **data**: [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

#### Returns

[`TextRun`](TextRun.md)

#### Defined in

[src/parser/classes/misc/TextRun.ts:32](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/misc/TextRun.ts#L32)

## Properties

### attachment

> **attachment**: `any`

#### Defined in

[src/parser/classes/misc/TextRun.ts:30](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/misc/TextRun.ts#L30)

***

### bold

> **bold**: `boolean`

#### Defined in

[src/parser/classes/misc/TextRun.ts:9](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/misc/TextRun.ts#L9)

***

### bracket

> **bracket**: `boolean`

#### Defined in

[src/parser/classes/misc/TextRun.ts:10](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/misc/TextRun.ts#L10)

***

### dark\_mode\_text\_color?

> `optional` **dark\_mode\_text\_color**: `number`

#### Defined in

[src/parser/classes/misc/TextRun.ts:11](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/misc/TextRun.ts#L11)

***

### deemphasize

> **deemphasize**: `boolean`

#### Defined in

[src/parser/classes/misc/TextRun.ts:12](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/misc/TextRun.ts#L12)

***

### endpoint?

> `optional` **endpoint**: [`NavigationEndpoint`](../../YTNodes/classes/NavigationEndpoint.md)

#### Defined in

[src/parser/classes/misc/TextRun.ts:8](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/misc/TextRun.ts#L8)

***

### error\_underline

> **error\_underline**: `boolean`

#### Defined in

[src/parser/classes/misc/TextRun.ts:15](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/misc/TextRun.ts#L15)

***

### font\_face?

> `optional` **font\_face**: `"FONT_FACE_UNKNOWN"` \| `"FONT_FACE_YT_SANS_MEDIUM"` \| `"FONT_FACE_ROBOTO_MEDIUM"` \| `"FONT_FACE_YOUTUBE_SANS_LIGHT"` \| `"FONT_FACE_YOUTUBE_SANS_REGULAR"` \| `"FONT_FACE_YOUTUBE_SANS_MEDIUM"` \| `"FONT_FACE_YOUTUBE_SANS_SEMIBOLD"` \| `"FONT_FACE_YOUTUBE_SANS_BOLD"` \| `"FONT_FACE_YOUTUBE_SANS_EXTRABOLD"` \| `"FONT_FACE_YOUTUBE_SANS_BLACK"` \| `"FONT_FACE_YT_SANS_BOLD"` \| `"FONT_FACE_ROBOTO_REGULAR"`

#### Defined in

[src/parser/classes/misc/TextRun.ts:17](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/misc/TextRun.ts#L17)

***

### italics

> **italics**: `boolean`

#### Defined in

[src/parser/classes/misc/TextRun.ts:13](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/misc/TextRun.ts#L13)

***

### strikethrough

> **strikethrough**: `boolean`

#### Defined in

[src/parser/classes/misc/TextRun.ts:14](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/misc/TextRun.ts#L14)

***

### text

> **text**: `string`

#### Implementation of

`Run.text`

#### Defined in

[src/parser/classes/misc/TextRun.ts:6](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/misc/TextRun.ts#L6)

***

### text\_color?

> `optional` **text\_color**: `number`

#### Defined in

[src/parser/classes/misc/TextRun.ts:7](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/misc/TextRun.ts#L7)

***

### underline

> **underline**: `boolean`

#### Defined in

[src/parser/classes/misc/TextRun.ts:16](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/misc/TextRun.ts#L16)

## Methods

### toHTML()

> **toHTML**(): `string`

#### Returns

`string`

#### Implementation of

`Run.toHTML`

#### Defined in

[src/parser/classes/misc/TextRun.ts:65](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/misc/TextRun.ts#L65)

***

### toString()

> **toString**(): `string`

#### Returns

`string`

#### Implementation of

`Run.toString`

#### Defined in

[src/parser/classes/misc/TextRun.ts:61](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/classes/misc/TextRun.ts#L61)
