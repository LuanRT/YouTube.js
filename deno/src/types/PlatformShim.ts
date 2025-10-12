import type { BuildScriptResult } from '../utils/javascript/JsExtractor.ts';
import type { ICacheConstructor } from './Cache.ts';

export type Runtime = 'deno' | 'node' | 'browser' | 'cf-worker' | 'unknown' | 'react-native';

export type FetchFunction = typeof fetch;

export type VMPrimative = string | number | boolean | null | undefined;

export type EvalResult = { [key: string]: any } | void;

interface PlatformShim {
    runtime: Runtime;
    server: boolean;
    Cache: ICacheConstructor;
    sha1Hash(data: string): Promise<string>;
    uuidv4(): string;
    eval(data: BuildScriptResult, env: Record<string, VMPrimative>): Promise<EvalResult> | EvalResult;
    fetch: FetchFunction;
    Request: typeof Request;
    Response: typeof Response;
    Headers: typeof Headers;
    FormData: typeof FormData;
    File: typeof File;
    ReadableStream: typeof ReadableStream;
    CustomEvent: typeof CustomEvent;
}

export default PlatformShim;