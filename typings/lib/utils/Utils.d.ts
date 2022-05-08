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
 * @param {object} obj - The object.
 * @param {string} key - Key of the property being accessed.
 * @param {string} target - Anything that might be inside of the property.
 * @param {number} depth - Maximum number of nested objects to flatten.
 * @param {boolean} safe - If set to true arrays will be preserved.
 */
export function findNode(obj: object, key: string, target: string, depth: number, safe?: boolean): any;
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
export function generateRandomString(length: any): string;
/**
 * Gets a string between two delimiters.
 *
 * @param {string} data - The data.
 * @param {string} start_string - Start string.
 * @param {string} end_string - End string.
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
