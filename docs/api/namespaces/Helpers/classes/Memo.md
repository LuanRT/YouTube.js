[youtubei.js](../../../README.md) / [Helpers](../README.md) / Memo

# Class: Memo

## Extends

- `Map`\<`string`, [`YTNode`](YTNode.md)[]\>

## Constructors

### new Memo()

> **new Memo**(`entries`?): [`Memo`](Memo.md)

#### Parameters

• **entries?**: `null` \| readonly readonly [`string`, [`YTNode`](YTNode.md)[]][]

#### Returns

[`Memo`](Memo.md)

#### Inherited from

`Map<string, YTNode[]>.constructor`

#### Defined in

node\_modules/typescript/lib/lib.es2015.collection.d.ts:50

### new Memo()

> **new Memo**(`iterable`?): [`Memo`](Memo.md)

#### Parameters

• **iterable?**: `null` \| `Iterable`\<readonly [`string`, [`YTNode`](YTNode.md)[]]\>

#### Returns

[`Memo`](Memo.md)

#### Inherited from

`Map<string, YTNode[]>.constructor`

#### Defined in

node\_modules/typescript/lib/lib.es2015.collection.d.ts:49

## Properties

### \[toStringTag\]

> `readonly` **\[toStringTag\]**: `string`

#### Inherited from

`Map.[toStringTag]`

#### Defined in

node\_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:137

***

### size

> `readonly` **size**: `number`

#### Inherited from

`Map.size`

#### Defined in

node\_modules/typescript/lib/lib.es2015.collection.d.ts:45

***

### \[species\]

> `readonly` `static` **\[species\]**: `MapConstructor`

#### Inherited from

`Map.[species]`

#### Defined in

node\_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:319

## Methods

### \[iterator\]()

> **\[iterator\]**(): `IterableIterator`\<[`string`, [`YTNode`](YTNode.md)[]]\>

Returns an iterable of entries in the map.

#### Returns

`IterableIterator`\<[`string`, [`YTNode`](YTNode.md)[]]\>

#### Inherited from

`Map.[iterator]`

#### Defined in

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:119

***

### clear()

> **clear**(): `void`

#### Returns

`void`

#### Inherited from

`Map.clear`

#### Defined in

node\_modules/typescript/lib/lib.es2015.collection.d.ts:20

***

### delete()

> **delete**(`key`): `boolean`

#### Parameters

• **key**: `string`

#### Returns

`boolean`

true if an element in the Map existed and has been removed, or false if the element does not exist.

#### Inherited from

`Map.delete`

#### Defined in

node\_modules/typescript/lib/lib.es2015.collection.d.ts:24

***

### entries()

> **entries**(): `IterableIterator`\<[`string`, [`YTNode`](YTNode.md)[]]\>

Returns an iterable of key, value pairs for every entry in the map.

#### Returns

`IterableIterator`\<[`string`, [`YTNode`](YTNode.md)[]]\>

#### Inherited from

`Map.entries`

#### Defined in

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:124

***

### forEach()

> **forEach**(`callbackfn`, `thisArg`?): `void`

Executes a provided function once per each key/value pair in the Map, in insertion order.

#### Parameters

• **callbackfn**

• **thisArg?**: `any`

#### Returns

`void`

#### Inherited from

`Map.forEach`

#### Defined in

node\_modules/typescript/lib/lib.es2015.collection.d.ts:28

***

### get()

> **get**(`key`): `undefined` \| [`YTNode`](YTNode.md)[]

Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.

#### Parameters

• **key**: `string`

#### Returns

`undefined` \| [`YTNode`](YTNode.md)[]

Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.

#### Inherited from

`Map.get`

#### Defined in

node\_modules/typescript/lib/lib.es2015.collection.d.ts:33

***

### getType()

#### getType(types)

> **getType**\<`T`, `K`\>(`types`): [`ObservedArray`](../type-aliases/ObservedArray.md)\<`InstanceType`\<`K`\[`number`\]\>\>

##### Type Parameters

• **T** *extends* [`YTNode`](YTNode.md)

• **K** *extends* [`YTNodeConstructor`](../interfaces/YTNodeConstructor.md)\<`T`\>[]

##### Parameters

• **types**: `K`

##### Returns

[`ObservedArray`](../type-aliases/ObservedArray.md)\<`InstanceType`\<`K`\[`number`\]\>\>

##### Defined in

[src/parser/helpers.ts:512](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L512)

#### getType(types)

> **getType**\<`T`, `K`\>(...`types`): [`ObservedArray`](../type-aliases/ObservedArray.md)\<`InstanceType`\<`K`\[`number`\]\>\>

##### Type Parameters

• **T** *extends* [`YTNode`](YTNode.md)

• **K** *extends* [`YTNodeConstructor`](../interfaces/YTNodeConstructor.md)\<`T`\>[]

##### Parameters

• ...**types**: `K`

##### Returns

[`ObservedArray`](../type-aliases/ObservedArray.md)\<`InstanceType`\<`K`\[`number`\]\>\>

##### Defined in

[src/parser/helpers.ts:513](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/parser/helpers.ts#L513)

***

### has()

> **has**(`key`): `boolean`

#### Parameters

• **key**: `string`

#### Returns

`boolean`

boolean indicating whether an element with the specified key exists or not.

#### Inherited from

`Map.has`

#### Defined in

node\_modules/typescript/lib/lib.es2015.collection.d.ts:37

***

### keys()

> **keys**(): `IterableIterator`\<`string`\>

Returns an iterable of keys in the map

#### Returns

`IterableIterator`\<`string`\>

#### Inherited from

`Map.keys`

#### Defined in

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:129

***

### set()

> **set**(`key`, `value`): `this`

Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.

#### Parameters

• **key**: `string`

• **value**: [`YTNode`](YTNode.md)[]

#### Returns

`this`

#### Inherited from

`Map.set`

#### Defined in

node\_modules/typescript/lib/lib.es2015.collection.d.ts:41

***

### values()

> **values**(): `IterableIterator`\<[`YTNode`](YTNode.md)[]\>

Returns an iterable of values in the map

#### Returns

`IterableIterator`\<[`YTNode`](YTNode.md)[]\>

#### Inherited from

`Map.values`

#### Defined in

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:134

***

### groupBy()

> `static` **groupBy**\<`K`, `T`\>(`items`, `keySelector`): `Map`\<`K`, `T`[]\>

Groups members of an iterable according to the return value of the passed callback.

#### Type Parameters

• **K**

• **T**

#### Parameters

• **items**: `Iterable`\<`T`\>

An iterable.

• **keySelector**

A callback which will be invoked for each item in items.

#### Returns

`Map`\<`K`, `T`[]\>

#### Inherited from

`Map.groupBy`

#### Defined in

node\_modules/typescript/lib/lib.esnext.collection.d.ts:25
