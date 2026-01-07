[youtubei.js](../../../../README.md) / [Helpers](../README.md) / Memo

# Class: Memo

Defined in: [src/parser/helpers.ts:502](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L502)

## Extends

- `Map`\<`string`, [`YTNode`](YTNode.md)[]\>

## Constructors

### Constructor

> **new Memo**(`entries?`): `Memo`

Defined in: node\_modules/typescript/lib/lib.es2015.collection.d.ts:50

#### Parameters

##### entries?

readonly readonly \[`string`, [`YTNode`](YTNode.md)[]\][] | `null`

#### Returns

`Memo`

#### Inherited from

`Map<string, YTNode[]>.constructor`

### Constructor

> **new Memo**(`iterable?`): `Memo`

Defined in: node\_modules/typescript/lib/lib.es2015.collection.d.ts:49

#### Parameters

##### iterable?

`Iterable`\<readonly \[`string`, [`YTNode`](YTNode.md)[]\]\> | `null`

#### Returns

`Memo`

#### Inherited from

`Map<string, YTNode[]>.constructor`

## Properties

### \[toStringTag\]

> `readonly` **\[toStringTag\]**: `string`

Defined in: node\_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:137

#### Inherited from

`Map.[toStringTag]`

***

### size

> `readonly` **size**: `number`

Defined in: node\_modules/typescript/lib/lib.es2015.collection.d.ts:45

#### Returns

the number of elements in the Map.

#### Inherited from

`Map.size`

***

### \[species\]

> `readonly` `static` **\[species\]**: `MapConstructor`

Defined in: node\_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:319

#### Inherited from

`Map.[species]`

## Methods

### \[iterator\]()

> **\[iterator\]**(): `IterableIterator`\<\[`string`, [`YTNode`](YTNode.md)[]\]\>

Defined in: node\_modules/typescript/lib/lib.es2015.iterable.d.ts:119

Returns an iterable of entries in the map.

#### Returns

`IterableIterator`\<\[`string`, [`YTNode`](YTNode.md)[]\]\>

#### Inherited from

`Map.[iterator]`

***

### clear()

> **clear**(): `void`

Defined in: node\_modules/typescript/lib/lib.es2015.collection.d.ts:20

#### Returns

`void`

#### Inherited from

`Map.clear`

***

### delete()

> **delete**(`key`): `boolean`

Defined in: node\_modules/typescript/lib/lib.es2015.collection.d.ts:24

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

> **entries**(): `IterableIterator`\<\[`string`, [`YTNode`](YTNode.md)[]\]\>

Defined in: node\_modules/typescript/lib/lib.es2015.iterable.d.ts:124

Returns an iterable of key, value pairs for every entry in the map.

#### Returns

`IterableIterator`\<\[`string`, [`YTNode`](YTNode.md)[]\]\>

#### Inherited from

`Map.entries`

***

### forEach()

> **forEach**(`callbackfn`, `thisArg?`): `void`

Defined in: node\_modules/typescript/lib/lib.es2015.collection.d.ts:28

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

Defined in: node\_modules/typescript/lib/lib.es2015.collection.d.ts:33

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

### getType()

#### Call Signature

> **getType**\<`T`, `K`\>(`types`): [`ObservedArray`](../type-aliases/ObservedArray.md)\<`InstanceType`\<`K`\[`number`\]\>\>

Defined in: [src/parser/helpers.ts:503](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L503)

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

Defined in: [src/parser/helpers.ts:504](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/parser/helpers.ts#L504)

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

Defined in: node\_modules/typescript/lib/lib.es2015.collection.d.ts:37

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

> **keys**(): `IterableIterator`\<`string`\>

Defined in: node\_modules/typescript/lib/lib.es2015.iterable.d.ts:129

Returns an iterable of keys in the map

#### Returns

`IterableIterator`\<`string`\>

#### Inherited from

`Map.keys`

***

### set()

> **set**(`key`, `value`): `this`

Defined in: node\_modules/typescript/lib/lib.es2015.collection.d.ts:41

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

> **values**(): `IterableIterator`\<[`YTNode`](YTNode.md)[]\>

Defined in: node\_modules/typescript/lib/lib.es2015.iterable.d.ts:134

Returns an iterable of values in the map

#### Returns

`IterableIterator`\<[`YTNode`](YTNode.md)[]\>

#### Inherited from

`Map.values`

***

### groupBy()

> `static` **groupBy**\<`K`, `T`\>(`items`, `keySelector`): `Map`\<`K`, `T`[]\>

Defined in: node\_modules/typescript/lib/lib.esnext.collection.d.ts:25

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
