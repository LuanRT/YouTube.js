[youtubei.js](../../../../README.md) / [Misc](../README.md) / Text

# Class: Text

Defined in: [src/parser/classes/misc/Text.ts:34](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/misc/Text.ts#L34)

Represents text content that may include formatting, emojis, and navigation endpoints.

## Constructors

### Constructor

> **new Text**(`data`): `Text`

Defined in: [src/parser/classes/misc/Text.ts:60](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/misc/Text.ts#L60)

#### Parameters

##### data

[`RawNode`](../../../../type-aliases/RawNode.md)

#### Returns

`Text`

## Properties

### accessibility?

> `optional` **accessibility**: `FormattedStringSupportedAccessibilityDatas`

Defined in: [src/parser/classes/misc/Text.ts:53](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/misc/Text.ts#L53)

Accessibility data associated with this text.

***

### endpoint?

> `optional` **endpoint**: [`NavigationEndpoint`](../../YTNodes/classes/NavigationEndpoint.md)

Defined in: [src/parser/classes/misc/Text.ts:48](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/misc/Text.ts#L48)

Navigation endpoint associated with this text.

***

### rtl

> **rtl**: `boolean`

Defined in: [src/parser/classes/misc/Text.ts:58](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/misc/Text.ts#L58)

Indicates if the text is right-to-left.

***

### runs?

> `optional` **runs**: ([`TextRun`](TextRun.md) \| [`EmojiRun`](EmojiRun.md))[]

Defined in: [src/parser/classes/misc/Text.ts:43](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/misc/Text.ts#L43)

Individual text segments with their formatting.

***

### text?

> `optional` **text**: `string`

Defined in: [src/parser/classes/misc/Text.ts:38](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/misc/Text.ts#L38)

The plain text content.

## Methods

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: [src/parser/classes/misc/Text.ts:262](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/misc/Text.ts#L262)

Checks if the text is empty.

#### Returns

`boolean`

Whether the text is empty.

***

### toHTML()

> **toHTML**(): `string` \| `undefined`

Defined in: [src/parser/classes/misc/Text.ts:254](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/misc/Text.ts#L254)

Converts the text to HTML.

#### Returns

`string` \| `undefined`

The HTML.

***

### toString()

> **toString**(): `string`

Defined in: [src/parser/classes/misc/Text.ts:270](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/misc/Text.ts#L270)

Converts the text to a string.

#### Returns

`string`

The text.

***

### fromAttributed()

> `static` **fromAttributed**(`data`): `Text`

Defined in: [src/parser/classes/misc/Text.ts:103](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/classes/misc/Text.ts#L103)

#### Parameters

##### data

`AttributedText`

#### Returns

`Text`
