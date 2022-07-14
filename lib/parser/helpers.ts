import { deepCompare, ParsingError } from '../utils/Utils';

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
     */
    as<T extends YTNode>(type: YTNodeConstructor<T>): T {
        if (!this.is(type)) {
            throw new TypeError(`Cannot cast ${this.type} to ${type.type}`);
        }
        return this;
    }
    /**
     * Check if the node is of the given type.
     */
    isOneOf<T extends YTNode>(types: YTNodeConstructor<T>[]): this is T {
        return types.some(type => this.is(type));
    }
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
        return !this.is_array
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
                )
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
                )
            }
            if (prop == 'filterType') {
                return (validTypes: YTNodeConstructor<T> | YTNodeConstructor<T>[]) => {
                    return observe(target.filter((node: YTNode) => {
                        if (Array.isArray(validTypes)) {
                            if (node.isOneOf(validTypes)) 
                                return true;
                            return false;
                        } else {
                            if (node.is(validTypes)) 
                                return true;
                            return false;
                        }
                    }));
                }
            }
            if (prop == 'as') {
                return (validTypes: YTNodeConstructor<T> | YTNodeConstructor<T>[]) => {
                    return observe(target.map((node: YTNode) => {
                        if (Array.isArray(validTypes)) {
                            if (node.isOneOf(validTypes)) 
                                return node;
                            throw new ParsingError(`Expected node of any type ${validTypes.map(type => type.type).join(', ')}, got ${node.type}`);
                        } else {
                            if (node.is(validTypes)) 
                                return node;
                            throw new ParsingError(`Expected node of type ${validTypes.type}, got ${node.type}`);
                        }
                    }));
                }
            }
            if (prop == 'remove') {
                return (index: number): any => target.splice(index, 1);
            }
            return Reflect.get(target, prop);
        }
    }) as ObservedArray<T>;
}

export class Memo extends Map<string, YTNode[]> {
    getType<T extends YTNode>(type: YTNodeConstructor<T>) {
        return observe((this.get(type.type) || []) as T[]);
    }
}
