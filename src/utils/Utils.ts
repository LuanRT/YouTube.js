import { Memo } from '../parser/helpers.js';
import PlatformShim, { FetchFunction } from '../types/PlatformShim.js';
import userAgents from './user-agents.js';

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
export class OAuthError extends InnertubeError { }
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
    const is_text = obj2[key]?.constructor.name === 'Text';
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
 * Generates an authentication token from a cookies' sid..js
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
  const params = time.split(':').map((param) => parseInt(param));
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

export function concatMemos(...iterables: Memo[]): Memo {
  const memo = new Memo();

  for (const iterable of iterables) {
    for (const item of iterable) {
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

  console.log(
    'YouTube.js Fetch:\n' +
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