import { Memo } from '../parser/helpers.js';
import { Text } from '../parser/misc.js';
import Log from './Log.js';
import userAgents from './user-agents.js';
import { Jinter } from 'jintr';

import type { EmojiRun, TextRun } from '../parser/misc.js';
import type { FetchFunction } from '../types/PlatformShim.js';
import type PlatformShim from '../types/PlatformShim.js';

const TAG_ = 'Utils';

export class Platform {
  static #shim: PlatformShim | undefined;
  static load(platform: PlatformShim): void {
    Platform.#shim = platform;
  }
  static get shim(): PlatformShim {
    if (!Platform.#shim) {
      throw new Error('Platform is not loaded');
    }
    return Platform.#shim;
  }
}
export class InnertubeError extends Error {
  date: Date;
  version: string;
  info?: any;

  constructor(message: string, info?: any) {
    super(message);

    if (info) {
      this.info = info;
    }

    this.date = new Date();
    this.version = Platform.shim.info.version;
  }
}

export class ParsingError extends InnertubeError { }
export class MissingParamError extends InnertubeError { }
export class OAuth2Error extends InnertubeError { }
export class PlayerError extends Error { }
export class SessionError extends Error { }
export class ChannelError extends Error { }

/**
 * Compares given objects. May not work correctly for
 * objects with methods.
 */
export function deepCompare(obj1: any, obj2: any): boolean {
  const keys = Reflect.ownKeys(obj1);
  return keys.some((key) => {
    const is_text = obj2[key] instanceof Text;
    if (!is_text && typeof obj2[key] === 'object') {
      return JSON.stringify(obj1[key]) === JSON.stringify(obj2[key]);
    }
    return obj1[key] === (is_text ? obj2[key].toString() : obj2[key]);
  });
}

/**
 * Finds a string between two delimiters.
 * @param data - the data.
 * @param start_string - start string.
 * @param end_string - end string.
 */
export function getStringBetweenStrings(data: string, start_string: string, end_string: string): string | undefined {
  const regex = new RegExp(`${escapeStringRegexp(start_string)}(.*?)${escapeStringRegexp(end_string)}`, 's');
  const match = data.match(regex);
  return match ? match[1] : undefined;
}

export function escapeStringRegexp(input: string): string {
  return input.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');
}

export type DeviceCategory = 'mobile' | 'desktop';

/**
 * Returns a random user agent.
 * @param type - mobile | desktop
 */
export function getRandomUserAgent(type: DeviceCategory): string {
  const available_agents = userAgents[type];
  const random_index = Math.floor(Math.random() * available_agents.length);
  return available_agents[random_index];
}

/**
 * Generates an authentication token from a cookies' sid.
 * @param sid - Sid extracted from cookies
 */
export async function generateSidAuth(sid: string): Promise<string> {
  const youtube = 'https://www.youtube.com';

  const timestamp = Math.floor(new Date().getTime() / 1000);
  const input = [ timestamp, sid, youtube ].join(' ');
  const gen_hash = await Platform.shim.sha1Hash(input);

  return [ 'SAPISIDHASH', [ timestamp, gen_hash ].join('_') ].join(' ');
}

/**
 * Generates a random string with the given length.
 *
 */
export function generateRandomString(length: number): string {
  const result = [];

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';

  for (let i = 0; i < length; i++) {
    result.push(alphabet.charAt(Math.floor(Math.random() * alphabet.length)));
  }

  return result.join('');
}

/**
 * Converts time (h:m:s) to seconds.
 * @returns seconds
 */
export function timeToSeconds(time: string): number {
  const params = time.split(':').map((param) => parseInt(param.replace(/\D/g, '')));
  switch (params.length) {
    case 1:
      return params[0];
    case 2:
      return params[0] * 60 + params[1];
    case 3:
      return params[0] * 3600 + params[1] * 60 + params[2];
    default:
      throw new Error('Invalid time string');
  }
}

export function concatMemos(...iterables: Array<Memo | undefined>): Memo {
  const memo = new Memo();

  for (const iterable of iterables) {
    if (!iterable) continue;
    for (const item of iterable) {
      // Update existing items.
      const memo_item = memo.get(item[0]);
      if (memo_item) {
        memo.set(item[0], [ ...memo_item, ...item[1] ]);
        continue;
      }

      memo.set(...item);
    }
  }

  return memo;
}

export function throwIfMissing(params: object): void {
  for (const [ key, value ] of Object.entries(params)) {
    if (!value)
      throw new MissingParamError(`${key} is missing`);
  }
}

export function hasKeys<T extends object, R extends (keyof T)[]>(params: T, ...keys: R): params is Exclude<T, R[number]> & Required<Pick<T, R[number]>> {
  for (const key of keys) {
    if (!Reflect.has(params, key) || (params[key] === undefined))
      return false;
  }
  return true;
}

export async function* streamToIterable(stream: ReadableStream<Uint8Array>) {
  const reader = stream.getReader();

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        return;
      }
      yield value;
    }
  } finally {
    reader.releaseLock();
  }
}

export const debugFetch: FetchFunction = (input, init) => {
  const url =
    typeof input === 'string' ?
      new URL(input) :
      input instanceof URL ?
        input : new URL(input.url);


  const headers =
    init?.headers ?
      new Headers(init.headers) :
      input instanceof Request ?
        input.headers :
        new Headers();

  const arr_headers = [ ...headers ];

  const body_contents =
    init?.body ?
      typeof init.body === 'string' ?
        headers.get('content-type') === 'application/json' ?
          JSON.stringify(JSON.parse(init.body), null, 2) : // Body is string and json
          init.body : // Body is string
        '    <binary>' : // Body is not string
      '    (none)'; // No body provided

  const headers_serialized =
    arr_headers.length > 0 ?
      `${arr_headers.map(([ key, value ]) => `    ${key}: ${value}`).join('\n')}` :
      '    (none)';

  Log.warn(TAG_,
    'Fetch:\n' +
    `  url: ${url.toString()}\n` +
    `  method: ${init?.method || 'GET'}\n` +
    `  headers:\n${headers_serialized}\n' + 
    '  body:\n${body_contents}`
  );

  return Platform.shim.fetch(input, init);
};

export function u8ToBase64(u8: Uint8Array): string {
  return btoa(String.fromCharCode.apply(null, Array.from(u8)));
}

export function base64ToU8(base64: string): Uint8Array {
  return new Uint8Array(atob(base64).split('').map((char) => char.charCodeAt(0)));
}

export function isTextRun(run: TextRun | EmojiRun): run is TextRun {
  return !('emoji' in run);
}

export function getCookie(cookies: string, name: string, matchWholeName = false): string | undefined {
  const regex = matchWholeName ? `(^|\\s?)\\b${name}\\b=([^;]+)` : `(^|s?)${name}=([^;]+)`;
  const match = cookies.match(new RegExp(regex));
  return match ? match[2] : undefined;
}

export type FindFunctionArgs = {
  /**
   * The name of the function.
   */
  name?: string;

  /**
   * A string that must be included in the function's code for it to be considered.
   */
  includes?: string;

  /**
   * A regular expression that the function's code must match.
   */
  regexp?: RegExp;
};

export type FindFunctionResult = {
  start: number;
  end: number;
  name: string;
  node: Record<string, any>;
  result: string;
};

/**
 * Finds a function in a source string based on the provided search criteria.
 *
 * @example
 * ```ts
 * const source = '(function() {var foo, bar; foo = function() { console.log("foo"); }; bar = function() { console.log("bar"); }; })();';
 * const result = findFunction(source, { name: 'bar' });
 * console.log(result);
 * // Output: { start: 69, end: 110, name: 'bar', node: { ... }, result: 'bar = function() { console.log("bar"); };' }
 * ```
 */
export function findFunction(source: string, args: FindFunctionArgs): FindFunctionResult | undefined {
  const { name, includes, regexp } = args;

  const node = Jinter.parseScript(source);
  const stack = [ node ];

  for (let i = 0; i < stack.length; i++) {
    const current = stack[i];

    if (
      current.type === 'ExpressionStatement' && (
        current.expression.type === 'AssignmentExpression' &&
        current.expression.left.type === 'Identifier' &&
        current.expression.right.type === 'FunctionExpression'
      )
    ) {
      const code = source.substring(current.start, current.end);

      if (
        (name && current.expression.left.name === name) ||
        (includes && code.indexOf(includes) > -1) ||
        (regexp && regexp.test(code))
      ) {
        return {
          start: current.start,
          end: current.end,
          name: current.expression.left.name,
          node: current,
          result: code
        };
      }
    }

    for (const key in current) {
      const child = current[key];
      if (Array.isArray(child)) {
        stack.push(...child);
      } else if (typeof child === 'object' && child !== null) {
        stack.push(child);
      }
    }
  }
}