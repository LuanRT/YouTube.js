import * as Log from '../utils/Log.js';
import { deepCompare, ParsingError } from '../utils/Utils.js';

const isObserved = Symbol('ObservedArray.isObserved');

export class YTNode {
  static readonly type: string = 'YTNode';
  readonly type: string;

  constructor() {
    this.type = (this.constructor as YTNodeConstructor).type;
  }

  /**
   * Check if the node is of the given type.
   * @param types - The type to check
   * @returns whether the node is of the given type
   */
  is<T extends YTNode, K extends YTNodeConstructor<T>[]>(...types: K): this is InstanceType<K[number]> {
    return types.some((type) => this.type === type.type);
  }

  /**
   * Cast to one of the given types.
   * @param types - The types to cast to
   * @returns The node cast to one of the given types
   * @throws {ParsingError} If the node is not of the given type
   */
  as<T extends YTNode, K extends YTNodeConstructor<T>[]>(...types: K): InstanceType<K[number]> {
    if (!this.is(...types)) {
      throw new ParsingError(`Cannot cast ${this.type} to one of ${types.map((t) => t.type).join(', ')}`);
    }
    return this;
  }

  /**
   * Check for a key without asserting the type.
   * @param key - The key to check
   * @returns Whether the node has the key
   */
  hasKey<T extends string, R = any>(key: T): this is this & { [k in T]: R } {
    return Reflect.has(this, key);
  }

  /**
   * Assert that the node has the given key and return it.
   * @param key - The key to check
   * @returns The value of the key wrapped in a Maybe
   * @throws {ParsingError} If the node does not have the key
   */
  key<T extends string, R = any>(key: T) {
    if (!this.hasKey<T, R>(key)) {
      throw new ParsingError(`Missing key ${key}`);
    }
    return new Maybe(this[key]);
  }
}

const MAYBE_TAG = 'Maybe';

/**
 * A wrapper class that provides type-safe access to a value.
 */
export class Maybe {
  readonly #value;

  constructor (value: any) {
    this.#value = value;
  }

  #checkPrimitive(type: 'string' | 'number' | 'bigint' | 'boolean' | 'symbol' | 'undefined' | 'object' | 'function') {
    return typeof this.#value === type;
  }

  #assertPrimitive(type: 'string' | 'number' | 'bigint' | 'boolean' | 'symbol' | 'undefined' | 'object' | 'function') {
    if (!this.#checkPrimitive(type)) {
      throw new TypeError(`Expected ${type}, got ${this.typeof}`);
    }
    return this.#value;
  }

  get typeof() {
    return typeof this.#value;
  }

  string(): string {
    return this.#assertPrimitive('string');
  }

  isString() {
    return this.#checkPrimitive('string');
  }

  number(): number {
    return this.#assertPrimitive('number');
  }

  isNumber() {
    return this.#checkPrimitive('number');
  }

  bigint(): bigint {
    return this.#assertPrimitive('bigint');
  }

  isBigint() {
    return this.#checkPrimitive('bigint');
  }

  boolean(): boolean {
    return this.#assertPrimitive('boolean');
  }

  isBoolean() {
    return this.#checkPrimitive('boolean');
  }

  symbol(): symbol {
    return this.#assertPrimitive('symbol');
  }

  isSymbol() {
    return this.#checkPrimitive('symbol');
  }

  undefined(): undefined {
    return this.#assertPrimitive('undefined');
  }

  isUndefined() {
    return this.#checkPrimitive('undefined');
  }

  null(): null {
    if (this.#value !== null)
      throw new TypeError(`Expected null, got ${typeof this.#value}`);
    return this.#value;
  }

  isNull() {
    return this.#value === null;
  }

  object(): object {
    return this.#assertPrimitive('object');
  }

  isObject() {
    return this.#checkPrimitive('object');
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  function(): Function {
    return this.#assertPrimitive('function');
  }

  isFunction() {
    return this.#checkPrimitive('function');
  }

  /**
   * Get the value as an array.
   * @returns the value as any[].
   * @throws If the value is not an array.
   */
  array(): any[] {
    if (!Array.isArray(this.#value)) {
      throw new TypeError(`Expected array, got ${typeof this.#value}`);
    }
    return this.#value;
  }

  /**
   * More typesafe variant of {@link Maybe#array}.
   * @returns a proxied array which returns all the values as {@link Maybe}.
   * @throws {TypeError} If the value is not an array
   */
  arrayOfMaybe(): Maybe[] {
    const arrayProps: any[] = [];
    return new Proxy(this.array(), {
      get(target, prop) {
        if (Reflect.has(arrayProps, prop)) {
          return Reflect.get(target, prop);
        }
        return new Maybe(Reflect.get(target, prop));
      }
    });
  }

  /**
   * Check whether the value is an array.
   * @returns whether the value is an array.
   */
  isArray() {
    return Array.isArray(this.#value);
  }

  /**
   * Get the value as a YTNode.
   * @returns the value as a YTNode.
   * @throws If the value is not a YTNode.
   */
  node() {
    if (!(this.#value instanceof YTNode)) {
      throw new TypeError(`Expected YTNode, got ${this.#value.constructor.name}`);
    }
    return this.#value;
  }

  /**
   * Check if the value is a YTNode.
   * @returns Whether the value is a YTNode.
   */
  isNode() {
    return this.#value instanceof YTNode;
  }

  /**
   * Get the value as a YTNode of the given type.
   * @param types - The type(s) to cast to.
   * @returns The node cast to the given type.
   * @throws If the node is not of the given type.
   */
  nodeOfType<T extends YTNode, K extends YTNodeConstructor<T>[]>(...types: K) {
    return this.node().as(...types);
  }

  /**
   * Check if the value is a YTNode of the given type.
   * @param types - the type(s) to check.
   * @returns Whether the value is a YTNode of the given type.
   */
  isNodeOfType<T extends YTNode, K extends YTNodeConstructor<T>[]>(...types: K) {
    return this.isNode() && this.node().is(...types);
  }

  /**
   * Get the value as an ObservedArray.
   * @returns the value of the Maybe as a ObservedArray.
   */
  observed(): ObservedArray<YTNode> {
    if (!this.isObserved()) {
      throw new TypeError(`Expected ObservedArray, got ${typeof this.#value}`);
    }
    return this.#value;
  }

  /**
   * Check if the value is an ObservedArray.
   */
  isObserved() {
    return this.#value?.[isObserved];
  }

  /**
   * Get the value of the Maybe as a SuperParsedResult.
   * @returns the value as a SuperParsedResult.
   * @throws If the value is not a SuperParsedResult.
   */
  parsed(): SuperParsedResult {
    if (!(this.#value instanceof SuperParsedResult)) {
      throw new TypeError(`Expected SuperParsedResult, got ${typeof this.#value}`);
    }
    return this.#value;
  }

  /**
   * Is the result a SuperParsedResult?
   */
  isParsed() {
    return this.#value instanceof SuperParsedResult;
  }

  /**
   * @deprecated
   * This call is not meant to be used outside of debugging. Please use the specific type getter instead.
   */
  any(): any {
    Log.warn(MAYBE_TAG, 'This call is not meant to be used outside of debugging. Please use the specific type getter instead.');
    return this.#value;
  }

  /**
   * Get the node as an instance of the given class.
   * @param type - The type to check.
   * @returns the value as the given type.
   * @throws If the node is not of the given type.
   */
  instanceof<T extends object>(type: Constructor<T>): T {
    if (!this.isInstanceof(type)) {
      throw new TypeError(`Expected instance of ${type.name}, got ${this.#value.constructor.name}`);
    }
    return this.#value;
  }

  /**
   * Check if the node is an instance of the given class.
   * @param type - The type to check.
   * @returns Whether the node is an instance of the given type.
   */
  isInstanceof<T extends object>(type: Constructor<T>): this is this & T {
    return this.#value instanceof type;
  }
}

export interface Constructor<T> {
    new (...args: any[]): T;
}

export interface YTNodeConstructor<T extends YTNode = YTNode> {
    new(data: any): T;
    readonly type: string;
}

/**
 * Represents a parsed response in an unknown state. Either a YTNode or a YTNode[] or null.
 */
export class SuperParsedResult<T extends YTNode = YTNode> {
  readonly #result;

  constructor(result: T | ObservedArray<T> | null) {
    this.#result = result;
  }

  get is_null() {
    return this.#result === null;
  }
  get is_array() {
    return !this.is_null && Array.isArray(this.#result);
  }
  get is_node() {
    return !this.is_array;
  }

  array() {
    if (!this.is_array) {
      throw new TypeError('Expected an array, got a node');
    }
    return this.#result as ObservedArray<T>;
  }

  item() {
    if (!this.is_node) {
      throw new TypeError('Expected a node, got an array');
    }
    return this.#result as T;
  }
}

/**
 * An extended array type that includes additional utility methods for filtering and manipulating YTNode objects.
 */
export type ObservedArray<T extends YTNode = YTNode> = Array<T> & {
  /**
   * Returns the first object that matches the specified rule object.
   * @param rule - An object containing properties to match against
   * @param del_item - Optional flag to remove the matched item from the array
   * @returns The first matching object or undefined if no match is found
   */
  get: (rule: object, del_item?: boolean) => T | undefined;

  /**
   * Returns all objects that match the specified rule object.
   * @param rule - An object containing properties to match against
   * @param del_items - Optional flag to remove all matched items from the array
   * @returns An array of all matching objects
   */
  getAll: (rule: object, del_items?: boolean) => T[];

  /**
   * Returns the first object that satisfies the provided condition function.
   * @param condition - A predicate function that tests each element
   * @returns The first element that satisfies the condition or undefined if none found
   */
  matchCondition: (condition: (node: T) => boolean) => T | undefined;

  /**
   * Removes the item at the specified index.
   * @param index - The index of the item to remove
   * @returns The modified array after removal
   */
  remove: (index: number) => T[];

  /**
   * Filters the array to only include items of the specified YTNode types.
   * @template R - Type extending YTNode
   * @template K - Array of types (YTNodes)
   * @param types - Rest parameter of YTNode constructor types to filter by
   * @returns A new ObservedArray containing only items of the specified types
   */
  filterType<R extends YTNode, K extends YTNodeConstructor<R>[]>(...types: K): ObservedArray<InstanceType<K[number]>>;

  /**
   * Returns the first item in the array that matches any of the specified YTNode types.
   * @template R - Type extending YTNode
   * @template K - Array of types (YTNodes)
   * @param types - Rest parameter of YTNode constructor types to match against
   * @returns The first matching item or undefined if none found
   */
  firstOfType<R extends YTNode, K extends YTNodeConstructor<R>[]>(...types: K): InstanceType<K[number]> | undefined;

  /**
   * Returns the first item in the array.
   * @returns The first item in the array
   */
  first: () => T;

  /**
   * Similar to `filter` but with strict type checking. Filters the array to include only items of the specified types.
   * @template R - Type extending YTNode
   * @template K - Array of types (YTNodes)
   * @param types - Rest parameter of YTNode constructor types to filter by
   * @returns A new ObservedArray containing only items of the specified types
   * @throws {ParsingError} If an item is not of the specified type
   */
  as<R extends YTNode, K extends YTNodeConstructor<R>[]>(...types: K): ObservedArray<InstanceType<K[number]>>;
};

/**
 * Creates an observed array that provides additional utility methods for array manipulation and filtering.
 * @template T - Type extending YTNode
 * @param obj - Array to be observed
 */
export function observe<T extends YTNode>(obj: Array<T>): ObservedArray<T> {
  return new Proxy(obj, {
    get(target, prop) {
      if (prop == 'get') {
        return (rule: object, del_item?: boolean) => (
          target.find((obj, index) => {
            const match = deepCompare(rule, obj);
            if (match && del_item) {
              target.splice(index, 1);
            }
            return match;
          })
        );
      }

      if (prop == isObserved) {
        return true;
      }

      if (prop == 'getAll') {
        return (rule: object, del_items: boolean) => (
          target.filter((obj, index) => {
            const match = deepCompare(rule, obj);
            if (match && del_items) {
              target.splice(index, 1);
            }
            return match;
          })
        );
      }

      if (prop == 'matchCondition') {
        return (condition: (node: T) => boolean) => (
          target.find((obj) => {
            return condition(obj);
          })
        );
      }

      if (prop == 'filterType') {
        return (...types: YTNodeConstructor<YTNode>[]) => {
          return observe(target.filter((node: YTNode) => {
            return !!node.is(...types);
          }));
        };
      }

      if (prop == 'firstOfType') {
        return (...types: YTNodeConstructor<YTNode>[]) => {
          return target.find((node: YTNode) => {
            return !!node.is(...types);
          });
        };
      }

      if (prop == 'first') {
        return () => target[0];
      }

      if (prop == 'as') {
        return (...types: YTNodeConstructor<YTNode>[]) => {
          return observe(target.map((node: YTNode) => {
            if (node.is(...types))
              return node;
            throw new ParsingError(`Expected node of any type ${types.map((type) => type.type).join(', ')}, got ${(node as YTNode).type}`);
          }));
        };
      }

      if (prop == 'remove') {
        return (index: number): any => target.splice(index, 1);
      }

      return Reflect.get(target, prop);
    }
  }) as ObservedArray<T>;
}

export class Memo extends Map<string, YTNode[]> {
  getType<T extends YTNode, K extends YTNodeConstructor<T>[]>(types: K): ObservedArray<InstanceType<K[number]>>;
  getType<T extends YTNode, K extends YTNodeConstructor<T>[]>(...types: K): ObservedArray<InstanceType<K[number]>>
  getType(...types: YTNodeConstructor<YTNode>[] | YTNodeConstructor<YTNode>[][]) {
    types = types.flat();
    return observe(types.flatMap((type) => (this.get(type.type) || []) as YTNode[]));
  }
}