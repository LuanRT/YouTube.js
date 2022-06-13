/** @namespace */
export class InnertubeError extends Error {
    constructor(message: any, info: any);
    info: any;
    date: Date;
    version: any;
}
export class UnavailableContentError extends InnertubeError {
}
export class ParsingError extends InnertubeError {
}
export class DownloadError extends InnertubeError {
}
export class MissingParamError extends InnertubeError {
}
export class NoStreamingDataError extends InnertubeError {
}
/**
 * Utility to help access deep properties of an object.
 *
 * @param {object} obj - the object.
 * @param {string} key - key of the property being accessed.
 * @param {string} target - anything that might be inside of the property.
 * @param {number} depth - maximum number of nested objects to flatten.
 * @param {boolean} safe - if set to true arrays will be preserved.
 *
 * @returns {object|Array.<any>}
 */
export function findNode(obj: object, key: string, target: string, depth: number, safe?: boolean): object | Array<any>;
/**
 * Creates a trap to intercept property access
 * and add utilities to an object.
 *
 * @param {object} obj
 * @returns
 */
export function observe(obj: object): any;
/**
 * Returns a random user agent.
 *
 * @param {string} type - mobile | desktop
 * @returns {object}
 */
export function getRandomUserAgent(type: string): object;
/**
 * Generates an authentication token from a cookies' sid.
 *
 * @param {string} sid - Sid extracted from cookies
 * @returns {string}
 */
export function generateSidAuth(sid: string): string;
/**
 * Generates a random string with the given length.
 *
 * @param {number} length
 * @returns {string}
 */
export function generateRandomString(length: number): string;
/**
 * Finds a string between two delimiters.
 *
 * @param {string} data - the data.
 * @param {string} start_string - start string.
 * @param {string} end_string - end string.
 *
 * @returns {string}
 */
export function getStringBetweenStrings(data: string, start_string: string, end_string: string): string;
/**
 * Converts strings in camelCase to snake_case.
 *
 * @param {string} string The string in camelCase.
 * @returns {string}
 */
export function camelToSnake(string: string): string;
/**
 * Checks if a given client is valid.
 *
 * @param {string} client
 * @returns {boolean}
 */
export function isValidClient(client: string): boolean;
/**
 * Throws an error if given parameters are undefined.
 *
 * @param {object} params
 * @returns
 */
export function throwIfMissing(params: object): void;
/**
 * Converts time (h:m:s) to seconds.
 *
 * @param {string} time
 * @returns {number} seconds
 */
export function timeToSeconds(time: string): number;
/**
 * Turns the ntoken transform data into a valid json array
 *
 * @param {string} data
 * @returns {string}
 */
export function refineNTokenData(data: string): string;
