export namespace URLS {
    const YT_BASE: string;
    const YT_BASE_API: string;
    const YT_STUDIO_BASE_API: string;
    const YT_SUGGESTIONS: string;
    const YT_MUSIC: string;
    const YT_MUSIC_BASE_API: string;
}
export namespace OAUTH {
    const SCOPE: string;
    const GRANT_TYPE: string;
    const MODEL_NAME: string;
    namespace HEADERS {
        const headers: {
            accept: string;
            origin: string;
            'user-agent': string;
            'content-type': string;
            referer: string;
            'accept-language': string;
        };
    }
    namespace REGEX {
        const AUTH_SCRIPT: RegExp;
        const CLIENT_IDENTITY: RegExp;
    }
}
export namespace CLIENTS {
    namespace WEB {
        const NAME: string;
    }
    namespace YTMUSIC {
        const NAME_1: string;
        export { NAME_1 as NAME };
        export const VERSION: string;
    }
    namespace ANDROID {
        const NAME_2: string;
        export { NAME_2 as NAME };
        const VERSION_1: string;
        export { VERSION_1 as VERSION };
    }
}
export const STREAM_HEADERS: {
    Accept: string;
    'User-Agent': any;
    Connection: string;
    Origin: string;
    Referer: string;
    DNT: string;
};
export const INNERTUBE_HEADERS_BASE: {
    accept: string;
    'content-type': string;
};
export const METADATA_KEYS: string[];
export const BLACKLISTED_KEYS: string[];
export namespace ACCOUNT_SETTINGS {
    const SUBSCRIPTIONS: string;
    const RECOMMENDED_VIDEOS: string;
    const CHANNEL_ACTIVITY: string;
    const COMMENT_REPLIES: string;
    const USER_MENTION: string;
    const SHARED_CONTENT: string;
    const PLAYLISTS_PRIVACY: string;
    const SUBSCRIPTIONS_PRIVACY: string;
}
export namespace BASE64_DIALECT {
    const NORMAL: string[];
    const REVERSE: string[];
}
export namespace SIG_REGEX {
    const ACTIONS: RegExp;
    const FUNCTIONS: RegExp;
}
export namespace NTOKEN_REGEX {
    export const CALLS: RegExp;
    export const PLACEHOLDERS: RegExp;
    const FUNCTIONS_1: RegExp;
    export { FUNCTIONS_1 as FUNCTIONS };
}
export namespace FUNCS {
    const PUSH: string;
    const REVERSE_1: string;
    const REVERSE_2: string;
    const SPLICE: string;
    const SWAP0_1: string;
    const SWAP0_2: string;
    const ROTATE_1: string;
    const ROTATE_2: string;
    const BASE64_DIA: string;
    const TRANSLATE_1: string;
    const TRANSLATE_2: string;
}
