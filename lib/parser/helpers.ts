import { deepCompare, ParsingError } from '../utils/Utils';

const isObserved = Symbol('ObservedArray.isObserved');
export class YTNode {
  static readonly type: string = 'YTNode';
  readonly type: string;
  constructor() {
    this.type = (this.constructor as YTNodeConstructor).type;
  }
  /**
   * Check if the node is of the given type.
   * @param type The type to check
   * @returns whether the node is of the given type
   */
  is<T extends YTNode>(type: YTNodeConstructor<T>): this is T {
    return this.type === type.type;
  }
  /**
   * Cast the node to the given type.
   * @param type The type to cast to
   * @returns The casted node
   * @throws If the node is not of the given type
   */
  as<T extends YTNode>(type: YTNodeConstructor<T>): T {
    if (!this.is(type)) {
      throw new TypeError(`Cannot cast ${this.type} to ${type.type}`);
    }
    return this;
  }
  /**
   * Check if the node is of the given type.
   * @param type The type to check
   * @returns whether the node is of the given type
   */
  isOneOf<T extends YTNode>(types: YTNodeConstructor<T>[]): this is T {
    return types.some((type) => this.is(type));
  }
  /**
   * Cast to one of the given types.
   */
  asOneOf<T extends YTNode>(types: YTNodeConstructor<T>[]): T {
    if (!this.isOneOf(types)) {
      throw new ParsingError(`Cannot cast ${this.type} to one of ${types.map((t) => t.type).join(', ')}`);
    }
    return this;
  }
  /**
   * Check for a key without asserting the type.
   * @param key The key to check
   * @returns Whether the node has the key
   */
  hasKey<T extends string, R = any>(key: T): this is this & { [k in T]: R } {
    return Reflect.has(this, key);
  }
  /**
   * Assert that the node has the given key and return it.
   * @param key The key to check
   * @returns The value of the key wrapped in a Maybe
   * @throws If the node does not have the key
   */
  key<T extends string, R = any>(key: T) {
    if (!this.hasKey<T, R>(key)) {
      throw new ParsingError(`Missing key ${key}`);
    }
    return new Maybe(this[key]);
  }
}

export class Maybe {
  #value;
  constructor (value: any) {
    this.#value = value;
  }

  #checkPrimative(type: 'string' | 'number' | 'bigint' | 'boolean' | 'symbol' | 'undefined' | 'object' | 'function') {
    if (typeof this.#value !== type) {
      return false;
    }
    return true;
  }

  #assertPrimative(type: 'string' | 'number' | 'bigint' | 'boolean' | 'symbol' | 'undefined' | 'object' | 'function') {
    if (!this.#checkPrimative(type)) {
      throw new TypeError(`Expected ${type}, got ${this.typeof}`);
    }
    return this.#value;
  }

  get typeof() {
    return typeof this.#value;
  }

  string(): string {
    return this.#assertPrimative('string');
  }

  isString() {
    return this.#checkPrimative('string');
  }

  number(): number {
    return this.#assertPrimative('number');
  }

  isNumber() {
    return this.#checkPrimative('number');
  }

  bigint(): bigint {
    return this.#assertPrimative('bigint');
  }

  isBigint() {
    return this.#checkPrimative('bigint');
  }

  boolean(): boolean {
    return this.#assertPrimative('boolean');
  }

  isBoolean() {
    return this.#checkPrimative('boolean');
  }

  symbol(): symbol {
    return this.#assertPrimative('symbol');
  }

  isSymbol() {
    return this.#checkPrimative('symbol');
  }

  undefined(): undefined {
    return this.#assertPrimative('undefined');
  }

  isUndefined() {
    return this.#checkPrimative('undefined');
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
    return this.#assertPrimative('object');
  }

  isObject() {
    return this.#checkPrimative('object');
  }

  /* eslint-ignore */
  function(): Function {
    return this.#assertPrimative('function');
  }

  isFunction() {
    return this.#checkPrimative('function');
  }

  /**
   * Get the value as an array.
   * @returns the value as any[]
   * @throws If the value is not an array
   */
  array(): any[] {
    if (!Array.isArray(this.#value)) {
      throw new TypeError(`Expected array, got ${typeof this.#value}`);
    }
    return this.#value;
  }

  /**
   * More typesafe variant of {@link Maybe#array}.
   * @returns a proxied array which returns all the values as {@link Maybe}
   * @throws If the value is not an array
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
   * @returns whether the value is an array
   */
  isArray() {
    return Array.isArray(this.#value);
  }

  /**
   * Get the value as a YTNode
   * @returns the value as a YTNode
   * @throws If the value is not a YTNode
   */
  node() {
    if (!(this.#value instanceof YTNode)) {
      throw new TypeError(`Expected YTNode, got ${this.#value.constructor.name}`);
    }
    return this.#value;
  }

  /**
   * Check if the value is a YTNode
   * @returns Whether the value is a YTNode
   */
  isNode() {
    return this.#value instanceof YTNode;
  }

  /**
   * Get the value as a YTNode of the given type.
   * @param type The type to cast to
   * @returns The node casted to the given type
   * @throws If the node is not of the given type
   */
  nodeOfType<T extends YTNode>(type: YTNodeConstructor<T>) {
    return this.node().as(type);
  }

  /**
   * Check if the value is a YTNode of the given type.
   * @param type the type to check
   * @returns Whether the value is a YTNode of the given type
   */
  isNodeOfType<T extends YTNode>(type: YTNodeConstructor<T>) {
    return this.isNode() && this.node().is(type);
  }

  /**
   * Get the value as a YTNode of one of the given type.
   * @param types list of possible types
   * @returns The node casted to the given types
   * @throws If the node is not of the given types
   */
  nodeOneOf<T extends YTNode>(types: YTNodeConstructor<T>[]) {
    return this.node().isOneOf(types);
  }

  /**
   * Check if the value is a YTNode of one of the given type.
   * @param types list of possible types
   * @returns whether the value is a YTNode of one of the given types
   */
  isNodeOneOf<T extends YTNode>(types: YTNodeConstructor<T>[]) {
    return this.isNode() && this.node().isOneOf(types);
  }

  /**
   * Get the value as an ObservedArray.
   * @returns the value of the Maybe as a ObservedArray
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
   * @returns the value as a SuperParsedResult
   * @throws If the value is not a SuperParsedResult
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
   * @deprecated This call is not meant to be used outside of debugging. Please use the specific type getter instead.
   */
  any(): any {
    console.warn('This call is not meant to be used outside of debugging. Please use the specific type getter instead.');
    return this.#value;
  }

  /**
   * Get the node as an instance of the given class.
   * @param type The type to check
   * @returns the value as the given type
   * @throws If the node is not of the given type
   */
  instanceof<T extends object>(type: Constructor<T>): T {
    if (!this.isInstanceof(type)) {
      throw new TypeError(`Expected instance of ${type.name}, got ${this.#value.constructor.name}`);
    }
    return this.#value;
  }

  /**
   * Check if the node is an instance of the given class.
   * @param type The type to check
   * @returns Whether the node is an instance of the given type
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
  #result;
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


export type ObservedArray<T extends YTNode = YTNode> = Array<T> & {
    /**
     * Returns the first object to match the rule.
     */
    get: (rule: object, del_item?: boolean) => T | undefined;
    /**
     * Returns all objects that match the rule.
     */
    getAll: (rule: object, del_items?: boolean) => T[];
    /**
     * Removes the item at the given index.
     */
    remove: (index: number) => T[];
    /**
     * Get all items of a specific type
     */
    filterType<R extends YTNode>(validTypes: YTNodeConstructor<R> | YTNodeConstructor<R>[]): ObservedArray<R>;
    /**
     * Get the first of a specific type
     */
    firstOfType<R extends YTNode>(validTypes: YTNodeConstructor<R> | YTNodeConstructor<R>[]): R | undefined;
    /**
     * This is similar to filter but throws if there's a type mismatch.
     */
    as<R extends YTNode>(validTypes: YTNodeConstructor<R> | YTNodeConstructor<R>[]): ObservedArray<R>;
};

/**
 * Creates a trap to intercept property access
 * and add utilities to an object.
 */
export function observe<T extends YTNode>(obj: Array<T>) {
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
      if (prop == 'filterType') {
        return (validTypes: YTNodeConstructor<T> | YTNodeConstructor<T>[]) => {
          return observe(target.filter((node: YTNode) => {
            if (Array.isArray(validTypes)) {
              if (node.isOneOf(validTypes))
                return true;
              return false;
            }
            if (node.is(validTypes))
              return true;
            return false;

          }));
        };
      }
      if (prop == 'firstOfType') {
        return (validTypes: YTNodeConstructor<T> | YTNodeConstructor<T>[]) => {
          return target.find((node: YTNode) => {
            if (Array.isArray(validTypes)) {
              if (node.isOneOf(validTypes))
                return true;
              return false;
            }
            if (node.is(validTypes))
              return true;
            return false;

          })!;
        };
      }
      if (prop == 'as') {
        return (validTypes: YTNodeConstructor<T> | YTNodeConstructor<T>[]) => {
          return observe(target.map((node: YTNode) => {
            if (Array.isArray(validTypes)) {
              if (node.isOneOf(validTypes))
                return node;
              throw new ParsingError(`Expected node of any type ${validTypes.map((type) => type.type).join(', ')}, got ${node.type}`);
            } else {
              if (node.is(validTypes))
                return node;
              throw new ParsingError(`Expected node of type ${validTypes.type}, got ${node.type}`);
            }
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
  getType<T extends YTNode>(type: YTNodeConstructor<T> | YTNodeConstructor<T>[]) {
    if (Array.isArray(type))
      return observe(type.flatMap((type) => (this.get(type.type) || []) as T[]));
    return observe((this.get(type.type) || []) as T[]);
  }
}
