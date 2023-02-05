import { ICacheConstructor } from './Cache.js';

export type Runtime = 'deno' | 'node' | 'browser' | 'unknown';

export type FetchFunction = typeof fetch;

export type VMPrimative = string | number | boolean | null | undefined;

interface PlatformShim {
    runtime: Runtime;
    info: {
        version: string,
        bugs_url: string,
        repo_url: string
    },
    server: boolean;
    Cache: ICacheConstructor;
    sha1Hash(data: string): Promise<string>;
    uuidv4(): string;
    eval(code: string, env: Record<string, VMPrimative>): unknown;
    DOMParser: typeof globalThis.DOMParser;
    serializeDOM: (document: Document) => string;
    fetch: FetchFunction;
    Request: typeof Request;
    Response: typeof Response;
    Headers: typeof Headers;
    FormData: typeof FormData;
    File: typeof File;
    ReadableStream: typeof ReadableStream;
}

export default PlatformShim;