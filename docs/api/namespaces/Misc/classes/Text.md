[youtubei.js](../../../README.md) / [Misc](../README.md) / Text

# Class: Text

## Constructors

### new Text()

> **new Text**(`data`): [`Text`](Text.md)

#### Parameters

• **data**: [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

#### Returns

[`Text`](Text.md)

#### Defined in

[src/parser/classes/misc/Text.ts:31](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Text.ts#L31)

## Properties

### endpoint?

> `optional` **endpoint**: [`NavigationEndpoint`](../../YTNodes/classes/NavigationEndpoint.md)

#### Defined in

[src/parser/classes/misc/Text.ts:29](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Text.ts#L29)

***

### runs?

> `optional` **runs**: ([`EmojiRun`](EmojiRun.md) \| [`TextRun`](TextRun.md))[]

#### Defined in

[src/parser/classes/misc/Text.ts:28](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Text.ts#L28)

***

### text?

> `optional` **text**: `string`

#### Defined in

[src/parser/classes/misc/Text.ts:27](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Text.ts#L27)

## Methods

### isEmpty()

> **isEmpty**(): `boolean`

Checks if the text is empty.

#### Returns

`boolean`

Whether the text is empty.

#### Defined in

[src/parser/classes/misc/Text.ts:206](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Text.ts#L206)

***

### toHTML()

> **toHTML**(): `undefined` \| `string`

Converts the text to HTML.

#### Returns

`undefined` \| `string`

The HTML.

#### Defined in

[src/parser/classes/misc/Text.ts:198](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Text.ts#L198)

***

### toString()

> **toString**(): `string`

Converts the text to a string.

#### Returns

`string`

The text.

#### Defined in

[src/parser/classes/misc/Text.ts:214](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Text.ts#L214)

***

### fromAttributed()

> `static` **fromAttributed**(`data`): [`Text`](Text.md)

#### Parameters

• **data**: `AttributedText`

#### Returns

[`Text`](Text.md)

#### Defined in

[src/parser/classes/misc/Text.ts:54](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/classes/misc/Text.ts#L54)
