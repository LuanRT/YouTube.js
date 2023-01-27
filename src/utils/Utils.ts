import package_json from '../../package.json';
import { Memo } from '../parser/helpers';
import { FetchFunction } from './HTTPClient';
import userAgents from './user-agents.json';

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
    this.version = package_json.version;
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

export async function sha1Hash(str: string): Promise<string> {
  const SubtleCrypto = getRuntime() === 'node' ? (Reflect.get(module, 'require')('crypto').webcrypto as unknown as Crypto).subtle : window.crypto.subtle;
  const byteToHex = [
    '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '0a', '0b', '0c', '0d', '0e', '0f',
    '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '1a', '1b', '1c', '1d', '1e', '1f',
    '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '2a', '2b', '2c', '2d', '2e', '2f',
    '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '3a', '3b', '3c', '3d', '3e', '3f',
    '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '4a', '4b', '4c', '4d', '4e', '4f',
    '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '5a', '5b', '5c', '5d', '5e', '5f',
    '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '6a', '6b', '6c', '6d', '6e', '6f',
    '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '7a', '7b', '7c', '7d', '7e', '7f',
    '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '8a', '8b', '8c', '8d', '8e', '8f',
    '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '9a', '9b', '9c', '9d', '9e', '9f',
    'a0', 'a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'aa', 'ab', 'ac', 'ad', 'ae', 'af',
    'b0', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'ba', 'bb', 'bc', 'bd', 'be', 'bf',
    'c0', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'ca', 'cb', 'cc', 'cd', 'ce', 'cf',
    'd0', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'da', 'db', 'dc', 'dd', 'de', 'df',
    'e0', 'e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8', 'e9', 'ea', 'eb', 'ec', 'ed', 'ee', 'ef',
    'f0', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'fa', 'fb', 'fc', 'fd', 'fe', 'ff'
  ];

  function hex(arrayBuffer: ArrayBuffer): string {
    const buff = new Uint8Array(arrayBuffer);
    const hexOctets = [];
    for (let i = 0; i < buff.length; ++i)
      hexOctets.push(byteToHex[buff[i]]);
    return hexOctets.join('');
  }

  return hex(await SubtleCrypto.digest('SHA-1', new TextEncoder().encode(str)));
}

/**
 * Generates an authentication token from a cookies' sid.
 * @param sid - Sid extracted from cookies
 */
export async function generateSidAuth(sid: string): Promise<string> {
  const youtube = 'https://www.youtube.com';

  const timestamp = Math.floor(new Date().getTime() / 1000);
  const input = [ timestamp, sid, youtube ].join(' ');
  const gen_hash = await sha1Hash(input);

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

export function uuidv4(): string {
  if (getRuntime() === 'node') {
    return Reflect.get(module, 'require')('crypto').webcrypto.randomUUID();
  }

  if (globalThis.crypto?.randomUUID()) {
    return globalThis.crypto.randomUUID();
  }

  // See https://stackoverflow.com/a/2117523
  return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, (cc) => {
    const c = parseInt(cc);
    return (c ^ window.crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
  });
}

export type Runtime = 'node' | 'deno' | 'browser';

export function getRuntime(): Runtime {
  if ((typeof process !== 'undefined') && (process?.versions?.node))
    return 'node';
  if (Reflect.has(globalThis, 'Deno'))
    return 'deno';
  return 'browser';
}

export function isServer(): boolean {
  return [ 'node', 'deno' ].includes(getRuntime());
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

  return globalThis.fetch(input, init);
};

export function u8ToBase64(u8: Uint8Array): string {
  return btoa(String.fromCharCode.apply(null, Array.from(u8)));
}