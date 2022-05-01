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
export function DEFAULT_HEADERS(config: any): {
    headers: {
        Cookie: any;
        'user-agent': any;
        Referer: string;
        Accept: string;
        'Accept-Language': string;
        'Accept-Encoding': string;
    };
};
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
export function VIDEO_INFO_REQBODY(id: any, sts: any, context: any): {
    playbackContext: {
        contentPlaybackContext: {
            currentUrl: string;
            vis: number;
            splay: boolean;
            autoCaptionsDefaultOn: boolean;
            autonavState: string;
            html5Preference: string;
            signatureTimestamp: any;
            referer: string;
            lactMilliseconds: string;
        };
    };
    context: any;
    videoId: any;
};
export const YTMUSIC_VERSION: string;
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
export namespace NTOKEN_REGEX {
    const CALLS: RegExp;
    const PLACEHOLDERS: RegExp;
}
export const FUNCS_REGEX: RegExp;
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
