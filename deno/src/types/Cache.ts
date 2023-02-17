export interface ICache {
    cache_dir: string;
    get(key: string): Promise<ArrayBuffer | undefined>;
    set(key: string, value: ArrayBuffer): Promise<void>;
    remove(key: string): Promise<void>;
}

export interface ICacheConstructor {
    new (persistent: boolean, persistent_directory?: string): ICache;
}