import type { ESTree } from 'meriyah';
import type { JsAnalyzer } from './JsAnalyzer.ts';

export const WALK_STOP = Symbol('WALK_STOP');

export const jsBuiltIns = new Set([
  'AbortController', 'AbortSignal', 'Array', 'ArrayBuffer', 'AsyncContext', 'Atomics', 'AudioContext', 'BigInt', 'BigInt64Array', 'BigUint64Array',
  'Blob', 'Boolean', 'BroadcastChannel', 'Buffer', 'CanvasRenderingContext2D', 'clearImmediate', 'clearInterval', 'clearTimeout', 'confirm',
  'console', 'Crypto', 'CustomEvent', 'DataView', 'Date', 'decodeURI', 'decodeURIComponent', 'document', 'Element', 'encodeURI',
  'encodeURIComponent', 'Error', 'escape', 'eval', 'Event', 'EventTarget', 'fetch', 'File', 'FileReader', 'Float32Array', 'Float64Array',
  'FormData', 'function', 'global', 'globalThis', 'hasOwnProperty', 'Headers', 'History', 'HTMLElement', 'HTMLCollection', 'IDBKeyRange',
  'Infinity', 'Int16Array', 'Int32Array', 'Int8Array', 'Intl', 'IntersectionObserver', 'isFinite', 'isNaN', 'isPrototypeOf', 'JSON',
  'location', 'log', 'Map', 'Math', 'MediaRecorder', 'MediaSource', 'MediaStream', 'MemberExpression', 'MutationObserver', 'NaN',
  'navigator', 'Node', 'NodeList', 'Number', 'Object', 'OfflineAudioContext', 'parse', 'parseFloat', 'parseInt', 'Performance',
  'process', 'Promise', 'prompt', 'prototype', 'Proxy', 'ReadableStream', 'Reflect', 'RegExp', 'requestAnimationFrame', 'requestIdleCallback',
  'Request', 'Response', 'ResizeObserver', 'Screen', 'setImmediate', 'setInterval', 'setTimeout', 'SharedArrayBuffer', 'SharedWorker',
  'SourceBuffer', 'split', 'String', 'stringify', 'structuredClone', 'SubtleCrypto', 'Symbol', 'TextDecoder', 'TextEncoder', 'this',
  'toString', 'TransformStream', 'Uint16Array', 'Uint32Array', 'Uint8Array', 'Uint8ClampedArray', 'undefined', 'unescape', 'URL',
  'URLSearchParams', 'valueOf', 'WeakMap', 'WeakSet', 'WebAssembly', 'WebGLRenderingContext', 'window', 'Worker', 'WritableStream',
  'XMLHttpRequest', 'alert', 'arguments', 'atob', 'btoa', 'cancelAnimationFrame', 'cancelIdleCallback', 'queueMicrotask'
]);

export const indent = '  '; // 2 spaces.

export type AstVisitResult = boolean | typeof WALK_STOP | void;
export type AstVisitFn = (node: ESTree.Node, parent: ESTree.Node | null, ancestors: ESTree.Node[]) => AstVisitResult;

export interface AstVisitObject {
  /**
   * Callback invoked when an AST node is entered.
   * @param node - Current AST node being visited.
   * @param parent - Parent of the current AST node, or null if it's the root.
   * @param ancestors - Array of ancestor nodes, starting from the root down to the parent.
   * @returns 
   * - `true` to skip traversing this node's children.
   * - `WALK_STOP` to halt the entire traversal.
   * - `void`/`undefined` to continue normal traversal.
   */
  enter?(node: ESTree.Node, parent: ESTree.Node | null, ancestors: ESTree.Node[]): AstVisitResult;
  /**
   * Callback invoked when an AST node is exited.
   * @param node - Current AST node being exited.
   * @param parent - Parent of the current AST node, or null if it's the root.
   * @param ancestors - Array of ancestor nodes, starting from the root down to the parent.
   * @returns
   * - `WALK_STOP` to halt the entire traversal.
   * - `void`/`undefined` to continue normal traversal.
   */
  leave?(node: ESTree.Node, parent: ESTree.Node | null, ancestors: ESTree.Node[]): AstVisitResult;
}

export type AstVisitor = AstVisitFn | AstVisitObject;

/**
 * Performs a non-recursive traversal of an ESTree AST.
 * @param root - Root AST node to start the traversal from.
 * @param visitor - Callbacks invoked when nodes are entered or left.
 * @remarks
 * - If it returns `WALK_STOP`, the entire traversal is halted.
 * - Why did I not use some AST walker library instead?: They're too slow.
 */
export function walkAst(root: ESTree.Node, visitor: AstVisitor): void {
  if (!root || typeof root !== 'object') return;

  const stack: {
    node: ESTree.Node;
    parent: ESTree.Node | null;
    exit: boolean;
  }[] = [ { node: root, parent: null, exit: false } ];

  const ancestors: ESTree.Node[] = [];

  const enter = typeof visitor === 'function' ? visitor : visitor.enter ?? null;
  const leave = typeof visitor === 'function' ? null : visitor.leave ?? null;

  let shouldStop = false;

  while (!shouldStop && stack.length > 0) {
    const frame = stack.pop()!;
    const { node, parent, exit } = frame;

    if (exit) {
      ancestors.pop();
      if (leave && leave(node, parent, ancestors) === WALK_STOP) {
        shouldStop = true;
      }
      continue;
    }

    if (!node || typeof node.type !== 'string') continue;

    const result = enter ? enter(node, parent, ancestors) : undefined;

    if (result === WALK_STOP) {
      shouldStop = true;
      continue;
    }

    if (result === true) continue;

    stack.push({ node, parent, exit: true });
    ancestors.push(node);

    for (const key in node) {
      if (key === 'loc' || key === 'range' || key === 'start' || key === 'end') continue;
      if (!Object.prototype.hasOwnProperty.call(node, key)) continue;

      const value = (node as any)[key];
      if (!value) continue;

      if (Array.isArray(value)) {
        for (let i = value.length - 1; i >= 0; i--) {
          const item = value[i];
          if (item && typeof item.type === 'string') {
            stack.push({ node: item, parent: node, exit: false });
          }
        }
      } else if (typeof value === 'object' && typeof (value as any).type === 'string') {
        stack.push({ node: value, parent: node, exit: false });
      }
    }
  }
}

/**
 * Returns the source range of an ESTree node as a tuple of start and end positions.
 * @param node - The ESTree node to extract the source range from.
 * @returns A tuple `[start, end]` representing the source range, or `null` if unavailable.
 */
export function getNodeSourceRange(node: ESTree.Node | null | undefined): [number, number] | null {
  if (!node) return null;
  if (Array.isArray(node.range)) return node.range;
  if (typeof node.start === 'number' && typeof node.end === 'number') return [ node.start, node.end ];
  return null;
}

/**
 * Extracts the source code corresponding to a given AST node.
 * @param node - The AST node to extract source from.
 * @param source - The original source code.
 * @returns The source code corresponding to the node, or null if not available.
 */
export function extractNodeSource(node: ESTree.Node | null | undefined, source: string): string | null {
  const range = getNodeSourceRange(node);
  return range ? source.slice(range[0], range[1]) : null;
}

/**
 * Converts a member expression into its dot/bracket string form.
 * @param memberExpression - Member expression node to stringify.
 * @param source - Original source code for range lookups.
 */
export function memberToString(memberExpression: ESTree.Node, source: string): string | null {
  if (memberExpression.type !== 'MemberExpression') return null;

  const segments: string[] = [];
  let cur: ESTree.Node = memberExpression;

  while (cur && cur.type === 'MemberExpression') {
    const member = cur as ESTree.MemberExpression;
    const prop = member.property;
    if (!prop) return null;

    if (member.computed) {
      // I just don't want to bother with nested computed nodes... :P
      const propSource = extractNodeSource(prop, source);
      if (!propSource) return null;
      segments.unshift(`[${propSource.trim()}]`);
    } else {
      if (prop.type !== 'Identifier') return null;
      segments.unshift(`.${prop.name}`);
    }

    cur = member.object;
  }

  let base: string | null = null;

  if (cur?.type === 'Identifier') {
    base = cur.name;
  } else if (cur?.type === 'ThisExpression') {
    base = 'this';
  }

  return base ? base + segments.join('') : null;
}

/**
 * Retrieves the base identifier for a member expression chain.
 * @param memberExpression - Member expression whose root should be resolved.
 * @param source - Original source code for range lookups.
 */
export function memberBaseName(memberExpression: ESTree.MemberExpression, source: string): string | null {
  let target: ESTree.Node | null = memberExpression.object as ESTree.Node;

  while (target && target.type === 'MemberExpression') {
    const parentName = memberToString(target, source);
    if (parentName) return parentName;
    target = (target as ESTree.MemberExpression).object as ESTree.Node;
  }

  if (target?.type === 'Identifier') return target.name;
  if (target?.type === 'ThisExpression') return 'this';

  return null;
}

/**
 * Analyzes an AST node to determine if it's a function call or a function
 * declaration. Based on that, it then creates a new JavaScript function as
 * a string. This new function acts as a wrapper, taking a single 'input' 
 * argument and forwarding it to the original function call.
 *
 * Currently can handle:
 * - `CallExpression`: Creates a wrapper that invokes the function being called in the expression.
 * - `VariableDeclarator` with a `FunctionExpression`: Creates a wrapper that calls the declared function.
 *
 * @param analyzer - The `JSAnalyzer` instance, used to resolve context like declared variables.
 * @param name - The name for the new wrapper function to be created.
 * @param node - The ESTree node.
 * @todo Look for edge cases.
 */
export function createWrapperFunction(analyzer: JsAnalyzer, name: string, node: ESTree.Node): string | undefined {
  if (
    node.type === 'CallExpression' &&
    node.callee.type === 'Identifier' &&
    analyzer.declaredVariables.has(node.callee.name)
  ) {
    return generateWrapper(name, node.callee.name, parseFunctionArguments(analyzer, node.arguments));
  } else if (
    node.type === 'VariableDeclarator' &&
    node.init?.type === 'FunctionExpression' &&
    node.id.type === 'Identifier'
  ) {
    return generateWrapper(name, node.id.name, parseFunctionArguments(analyzer, node.init.params));
  }
}

/**
 * Generates a wrapper function string.
 * @param functionName - The name of the wrapper function.
 * @param targetFunction - The name of the target function to call.
 * @param args - The arguments to pass to the target function.
 */
function generateWrapper(functionName: string, targetFunction: string, args: string): string {
  return [
    `${indent}function ${functionName}(input) {`,
    `${indent}${indent}return ${targetFunction}(${args});`,
    `${indent}}`
  ].join('\n');
}

/**
 * Parses function arguments to create a string representation suitable for
 * use in our custom function calls.
 * @param analyzer - The JsAnalyzer instance to use.
 * @param args - The function arguments to parse.
 */
function parseFunctionArguments(analyzer: JsAnalyzer, args: ESTree.Node[]) {
  const params: string[] = [];

  for (const arg of args) {
    if (arg.type === 'Identifier' && analyzer.declaredVariables.has(arg.name)) {
      params.push(arg.name);
    } else if (arg.type === 'Literal' && (typeof arg.value === 'string' || typeof arg.value === 'number')) {
      params.push(JSON.stringify(arg.value));
    } else if (!params.includes('input'))
      params.push('input');
  }

  return params.join(', ');
}