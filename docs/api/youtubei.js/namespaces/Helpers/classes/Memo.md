[youtubei.js](../../../../README.md) / [Helpers](../README.md) / Memo

# Class: Memo

Defined in: [src/parser/helpers.ts:502](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/helpers.ts#L502)

## Extends

- `Map`\<`string`, [`YTNode`](YTNode.md)[]\>

## Constructors

### Constructor

> **new Memo**(`entries?`): `Memo`

Defined in: node\_modules/typescript/lib/lib.es2015.collection.d.ts:51

#### Parameters

##### entries?

readonly readonly \[`string`, [`YTNode`](YTNode.md)[]\][] \| `null`

#### Returns

`Memo`

#### Inherited from

`Map<string, YTNode[]>.constructor`

### Constructor

> **new Memo**(`iterable?`): `Memo`

Defined in: node\_modules/typescript/lib/lib.es2015.collection.d.ts:50

#### Parameters

##### iterable?

`Iterable`\<readonly \[`string`, [`YTNode`](YTNode.md)[]\], `any`, `any`\> \| `null`

#### Returns

`Memo`

#### Inherited from

`Map<string, YTNode[]>.constructor`

## Properties

### \[toStringTag\]

> `readonly` **\[toStringTag\]**: `string`

Defined in: node\_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:135

#### Inherited from

`Map.[toStringTag]`

***

### size

> `readonly` **size**: `number`

Defined in: node\_modules/typescript/lib/lib.es2015.collection.d.ts:46

#### Returns

the number of elements in the Map.

#### Inherited from

`Map.size`

***

### \[species\]

> `readonly` `static` **\[species\]**: `MapConstructor`

Defined in: node\_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:317

#### Inherited from

`Map.[species]`

## Methods

### \[iterator\]()

> **\[iterator\]**(): `MapIterator`\<\[`string`, [`YTNode`](YTNode.md)[]\]\>

Defined in: node\_modules/typescript/lib/lib.es2015.iterable.d.ts:141

Returns an iterable of entries in the map.

#### Returns

`MapIterator`\<\[`string`, [`YTNode`](YTNode.md)[]\]\>

#### Inherited from

`Map.[iterator]`

***

### clear()

> **clear**(): `void`

Defined in: node\_modules/typescript/lib/lib.es2015.collection.d.ts:21

Removes all elements from the Map.

#### Returns

`void`

#### Inherited from

`Map.clear`

***

### delete()

> **delete**(`key`): `boolean`

Defined in: node\_modules/typescript/lib/lib.es2015.collection.d.ts:25

#### Parameters

##### key

`string`

#### Returns

`boolean`

true if an element in the Map existed and has been removed, or false if the element does not exist.

#### Inherited from

`Map.delete`

***

### entries()

> **entries**(): `MapIterator`\<\[`string`, [`YTNode`](YTNode.md)[]\]\>

Defined in: node\_modules/typescript/lib/lib.es2015.iterable.d.ts:146

Returns an iterable of key, value pairs for every entry in the map.

#### Returns

`MapIterator`\<\[`string`, [`YTNode`](YTNode.md)[]\]\>

#### Inherited from

`Map.entries`

***

### forEach()

> **forEach**(`callbackfn`, `thisArg?`): `void`

Defined in: node\_modules/typescript/lib/lib.es2015.collection.d.ts:29

Executes a provided function once per each key/value pair in the Map, in insertion order.

#### Parameters

##### callbackfn

(`value`, `key`, `map`) => `void`

##### thisArg?

`any`

#### Returns

`void`

#### Inherited from

`Map.forEach`

***

### get()

> **get**(`key`): [`YTNode`](YTNode.md)[] \| `undefined`

Defined in: node\_modules/typescript/lib/lib.es2015.collection.d.ts:34

Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.

#### Parameters

##### key

`string`

#### Returns

[`YTNode`](YTNode.md)[] \| `undefined`

Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.

#### Inherited from

`Map.get`

***

### getOrInsert()

> **getOrInsert**(`key`, `defaultValue`): [`YTNode`](YTNode.md)[]

Defined in: node\_modules/typescript/lib/lib.esnext.collection.d.ts:25

Returns a specified element from the Map object.
If no element is associated with the specified key, a new element with the value `defaultValue` will be inserted into the Map and returned.

#### Parameters

##### key

`string`

##### defaultValue

[`YTNode`](YTNode.md)[]

#### Returns

[`YTNode`](YTNode.md)[]

The element associated with the specified key, which will be `defaultValue` if no element previously existed.

#### Inherited from

`Map.getOrInsert`

***

### getOrInsertComputed()

> **getOrInsertComputed**(`key`, `callback`): [`YTNode`](YTNode.md)[]

Defined in: node\_modules/typescript/lib/lib.esnext.collection.d.ts:31

Returns a specified element from the Map object.
If no element is associated with the specified key, the result of passing the specified key to the `callback` function will be inserted into the Map and returned.

#### Parameters

##### key

`string`

##### callback

(`key`) => [`YTNode`](YTNode.md)[]

#### Returns

[`YTNode`](YTNode.md)[]

The element associated with the specific key, which will be the newly computed value if no element previously existed.

#### Inherited from

`Map.getOrInsertComputed`

***

### getType()

#### Call Signature

> **getType**\<`T`, `K`\>(`types`): [`ObservedArray`](../type-aliases/ObservedArray.md)\<`InstanceType`\<`K`\[`number`\]\>\>

Defined in: [src/parser/helpers.ts:503](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/helpers.ts#L503)

##### Type Parameters

###### T

`T` *extends* [`YTNode`](YTNode.md)

###### K

`K` *extends* [`YTNodeConstructor`](../interfaces/YTNodeConstructor.md)\<`T`\>[]

##### Parameters

###### types

`K`

##### Returns

[`ObservedArray`](../type-aliases/ObservedArray.md)\<`InstanceType`\<`K`\[`number`\]\>\>

#### Call Signature

> **getType**\<`T`, `K`\>(...`types`): [`ObservedArray`](../type-aliases/ObservedArray.md)\<`InstanceType`\<`K`\[`number`\]\>\>

Defined in: [src/parser/helpers.ts:504](https://github.com/LuanRT/YouTube.js/blob/06bfc6afd419ea622aac9ce491b749456ebda028/src/parser/helpers.ts#L504)

##### Type Parameters

###### T

`T` *extends* [`YTNode`](YTNode.md)

###### K

`K` *extends* [`YTNodeConstructor`](../interfaces/YTNodeConstructor.md)\<`T`\>[]

##### Parameters

###### types

...`K`

##### Returns

[`ObservedArray`](../type-aliases/ObservedArray.md)\<`InstanceType`\<`K`\[`number`\]\>\>

***

### has()

> **has**(`key`): `boolean`

Defined in: node\_modules/typescript/lib/lib.es2015.collection.d.ts:38

#### Parameters

##### key

`string`

#### Returns

`boolean`

boolean indicating whether an element with the specified key exists or not.

#### Inherited from

`Map.has`

***

### keys()

> **keys**(): `MapIterator`\<`string`\>

Defined in: node\_modules/typescript/lib/lib.es2015.iterable.d.ts:151

Returns an iterable of keys in the map

#### Returns

`MapIterator`\<`string`\>

#### Inherited from

`Map.keys`

***

### set()

> **set**(`key`, `value`): `this`

Defined in: node\_modules/typescript/lib/lib.es2015.collection.d.ts:42

Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.

#### Parameters

##### key

`string`

##### value

[`YTNode`](YTNode.md)[]

#### Returns

`this`

#### Inherited from

`Map.set`

***

### values()

> **values**(): `MapIterator`\<[`YTNode`](YTNode.md)[]\>

Defined in: node\_modules/typescript/lib/lib.es2015.iterable.d.ts:156

Returns an iterable of values in the map

#### Returns

`MapIterator`\<[`YTNode`](YTNode.md)[]\>

#### Inherited from

`Map.values`

***

### groupBy()

> `static` **groupBy**\<`K`, `T`\>(`items`, `keySelector`): `Map`\<`K`, `T`[]\>

Defined in: node\_modules/typescript/lib/lib.es2024.collection.d.ts:23

Groups members of an iterable according to the return value of the passed callback.

#### Type Parameters

##### K

`K`

##### T

`T`

#### Parameters

##### items

`Iterable`\<`T`\>

An iterable.

##### keySelector

(`item`, `index`) => `K`

A callback which will be invoked for each item in items.

#### Returns

`Map`\<`K`, `T`[]\>

#### Inherited from

`Map.groupBy`
