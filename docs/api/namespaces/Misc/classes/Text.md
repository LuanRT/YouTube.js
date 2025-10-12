[youtubei.js](../../../README.md) / [Misc](../README.md) / Text

# Class: Text

Represents text content that may include formatting, emojis, and navigation endpoints.

## Constructors

### new Text()

> **new Text**(`data`): [`Text`](Text.md)

#### Parameters

• **data**: [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

#### Returns

[`Text`](Text.md)

#### Defined in

[src/parser/classes/misc/Text.ts:60](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/classes/misc/Text.ts#L60)

## Properties

### accessibility?

> `optional` **accessibility**: `FormattedStringSupportedAccessibilityDatas`

Accessibility data associated with this text.

#### Defined in

[src/parser/classes/misc/Text.ts:53](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/classes/misc/Text.ts#L53)

***

### endpoint?

> `optional` **endpoint**: [`NavigationEndpoint`](../../YTNodes/classes/NavigationEndpoint.md)

Navigation endpoint associated with this text.

#### Defined in

[src/parser/classes/misc/Text.ts:48](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/classes/misc/Text.ts#L48)

***

### rtl

> **rtl**: `boolean`

Indicates if the text is right-to-left.

#### Defined in

[src/parser/classes/misc/Text.ts:58](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/classes/misc/Text.ts#L58)

***

### runs?

> `optional` **runs**: ([`TextRun`](TextRun.md) \| [`EmojiRun`](EmojiRun.md))[]

Individual text segments with their formatting.

#### Defined in

[src/parser/classes/misc/Text.ts:43](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/classes/misc/Text.ts#L43)

***

### text?

> `optional` **text**: `string`

The plain text content.

#### Defined in

[src/parser/classes/misc/Text.ts:38](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/classes/misc/Text.ts#L38)

## Methods

### isEmpty()

> **isEmpty**(): `boolean`

Checks if the text is empty.

#### Returns

`boolean`

Whether the text is empty.

#### Defined in

[src/parser/classes/misc/Text.ts:262](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/classes/misc/Text.ts#L262)

***

### toHTML()

> **toHTML**(): `undefined` \| `string`

Converts the text to HTML.

#### Returns

`undefined` \| `string`

The HTML.

#### Defined in

[src/parser/classes/misc/Text.ts:254](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/classes/misc/Text.ts#L254)

***

### toString()

> **toString**(): `string`

Converts the text to a string.

#### Returns

`string`

The text.

#### Defined in

[src/parser/classes/misc/Text.ts:270](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/classes/misc/Text.ts#L270)

***

### fromAttributed()

> `static` **fromAttributed**(`data`): [`Text`](Text.md)

#### Parameters

• **data**: `AttributedText`

#### Returns

[`Text`](Text.md)

#### Defined in

[src/parser/classes/misc/Text.ts:103](https://github.com/LuanRT/YouTube.js/blob/427d14d3b0798020bb95b78fdb9a78429edb1de9/src/parser/classes/misc/Text.ts#L103)
