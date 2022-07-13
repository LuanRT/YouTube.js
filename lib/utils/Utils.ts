import UserAgent from "user-agents";
import Flatten from "flat";
import package_json from '../../package.json';

const VALID_CLIENTS = new Set(['YOUTUBE', 'YTMUSIC']);

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
export class ParsingError extends InnertubeError {}

export class DownloadError extends InnertubeError {}

export class MissingParamError extends InnertubeError {}

export class UnavailableContentError extends InnertubeError {}

export class NoStreamingDataError extends InnertubeError {}

export class OAuthError extends InnertubeError {}

export class PlayerError extends Error {}

export class SessionError extends Error {}

/**
 * Utility to help access deep properties of an object.
 *
 * @param obj - the object.
 * @param key - key of the property being accessed.
 * @param target - anything that might be inside of the property.
 * @param depth - maximum number of nested objects to flatten.
 * @param safe - if set to true arrays will be preserved.
 */
export function findNode(obj: object, key: string, target: string, depth: number, safe: boolean = true): object | object[] {
    const flat_obj = Flatten(obj, { safe, maxDepth: depth || 2 }) as any;
    const result = Object.keys(flat_obj).find((entry) => entry.includes(key) && JSON.stringify(flat_obj[entry] || '{}').includes(target));
    if (!result)
        throw new ParsingError(`Expected to find "${key}" with content "${target}" but got ${result}`, {
            key, target, data_snippet: `${JSON.stringify(flat_obj, null, 4).slice(0, 300)}..`
        });
    return flat_obj[result];
}

/**
 * Compares given objects. May not work correctly for
 * objects with methods.
 *
 * @param obj1
 * @param obj2
 */
export function deepCompare(obj1: any, obj2: any) {
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
 *
 * @param {string} data - the data.
 * @param {string} start_string - start string.
 * @param {string} end_string - end string.
 */
export function getStringBetweenStrings(data: string, start_string: string, end_string: string) {
    const regex = new RegExp(`${escapeStringRegexp(start_string)}(.*?)${escapeStringRegexp(end_string)}`, 's');
    const match = data.match(regex);
    return match ? match[1] : undefined;
}

/**
 * @param {string} input
 * @returns {string}
 */
export function escapeStringRegexp(input: string): string {
    return input.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');
}

export type DeviceCategory = 'mobile' | 'desktop';

/**
 * Returns a random user agent.
 *
 * @param type - mobile | desktop
 * @returns {object}
 */
export function getRandomUserAgent(type: DeviceCategory) {
    switch (type) {
        case 'mobile':
            return new UserAgent(/Android/).data;
        case 'desktop':
            return new UserAgent({
                deviceCategory: 'desktop'
            }).data;
        default:
            throw new TypeError('Invalid user agent type specified');
    }
}

export async function sha1Hash(str: string) {
    const SubtleCrypto =  getRuntime() === 'node' ? (require("crypto").webcrypto as unknown as Crypto).subtle : window.crypto.subtle;
    const byteToHex = [
        "00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f",
        "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f",
        "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f",
        "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f",
        "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f",
        "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f",
        "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f",
        "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f",
        "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f",
        "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f",
        "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af",
        "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf",
        "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf",
        "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df",
        "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef",
        "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"
    ];
    function hex(arrayBuffer: ArrayBuffer) {
        const buff = new Uint8Array(arrayBuffer);
        const hexOctets = [];
        for (let i = 0; i < buff.length; ++i)
            hexOctets.push(byteToHex[buff[i]]);
        return hexOctets.join("");
    }
    return hex(await SubtleCrypto.digest('SHA-1', new TextEncoder().encode(str)));
}
/**
 * Generates an authentication token from a cookies' sid.
 *
 * @param {string} sid - Sid extracted from cookies
 * @returns {Promise<string>}
 */
export async function generateSidAuth(sid: string): Promise<string> {
    const youtube = 'https://www.youtube.com';
    const timestamp = Math.floor(new Date().getTime() / 1000);
    const input = [timestamp, sid, youtube].join(' ');
    const gen_hash = await sha1Hash(input);
    return ['SAPISIDHASH', [timestamp, gen_hash].join('_')].join(' ');
}

/**
 * Generates a random string with the given length.
 *
 * @param length
 * @returns {string}
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
 *
 * @param time
 * @returns seconds
 */
export function timeToSeconds(time: string) {
    const params = time.split(':').map(param => parseInt(param));
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

/**
 * Converts strings in camelCase to snake_case.
 *
 * @param string The string in camelCase.
 */
export function camelToSnake(string: string) {
    return string[0].toLowerCase() + string.slice(1, string.length).replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
}

/**
 * Checks if a given client is valid.
 *
 * @param client
 * @returns
 */
export function isValidClient(client: string) {
    return VALID_CLIENTS.has(client);
}

/**
 * Throws an error if given parameters are undefined.
 */
export function throwIfMissing(params: object) {
    for (const [key, value] of Object.entries(params)) {
        if (!value)
            throw new MissingParamError(`${key} is missing`);
    }
}

/**
 * Turns the ntoken transform data into a valid json array
 */
export function refineNTokenData(data: string) {
    return data
        .replace(/function\(d,e\)/g, '"function(d,e)').replace(/function\(d\)/g, '"function(d)')
        .replace(/function\(\)/g, '"function()').replace(/function\(d,e,f\)/g, '"function(d,e,f)')
        .replace(/\[function\(d,e,f\)/g, '["function(d,e,f)').replace(/,b,/g, ',"b",')
        .replace(/,b/g, ',"b"').replace(/b,/g, '"b",').replace(/b]/g, '"b"]')
        .replace(/\[b/g, '["b"').replace(/}]/g, '"]').replace(/},/g, '}",')
        .replace(/""/g, '').replace(/length]\)}"/g, 'length])}');
}

export function uuidv4() {
    if (getRuntime() === 'node') {
        return require('crypto').webcrypto.randomUUID();
    }
    else {
        if (globalThis.crypto?.randomUUID()) {
            return globalThis.crypto.randomUUID();
        }
        else {
            // see https://stackoverflow.com/a/2117523
            return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, cc => {
                const c = parseInt(cc);
                return (c ^ window.crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
            });
        }
    }
}

export type Runtime = 'node' | 'deno' | 'browser';

export function getRuntime(): Runtime {
    if ((typeof process !== 'undefined') && (process.release.name === 'node'))
        return 'node';
    if (Reflect.has(globalThis, 'Deno'))
        return 'deno';
    return 'browser';
}

export function isServer() {
    return ['node', 'deno'].includes(getRuntime());
}
