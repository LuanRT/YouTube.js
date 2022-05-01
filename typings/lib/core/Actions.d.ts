/**
 * Performs direct interactions on YouTube.
 *
 * @param {Innertube} session
 * @param {string} engagement_type
 * @param {object} args
 * @returns {Promise.<{ success: boolean; status_code: number; data: object; message?: string }>}
 */
export function engage(session: Innertube, engagement_type: string, args?: object): Promise<{
    success: boolean;
    status_code: number;
    data: object;
    message?: string;
}>;
/**
 * Accesses YouTube's various sections.
 *
 * @param {Innertube} session
 * @param {string} action
 * @param {object} args
 * @returns {Promise.<{ success: boolean; status_code: number; data: object; message?: string }>}
 */
export function browse(session: Innertube, action: string, args?: object): Promise<{
    success: boolean;
    status_code: number;
    data: object;
    message?: string;
}>;
/**
 * Account settings endpoints.
 *
 * @param {Innertube} session
 * @param {string} action
 * @param {object} args
 * @returns {Promise.<{ success: boolean; status_code: number; data: object; message?: string }>}
 */
export function account(session: Innertube, action: string, args?: object): Promise<{
    success: boolean;
    status_code: number;
    data: object;
    message?: string;
}>;
export function playlist(session: any, action: any, args?: {}): Promise<{
    success: boolean;
    status_code: any;
    message: string;
    data?: undefined;
} | {
    success: boolean;
    status_code: any;
    data: any;
    message?: undefined;
}>;
/**
 * Endpoints used to report content.
 *
 * @param {Innertube} session
 * @param {string} action
 * @param {object} args
 * @returns {Promise.<{ success: boolean; status_code: number; data: object; message?: string }>}
 */
export function flag(session: Innertube, action: string, args?: object): Promise<{
    success: boolean;
    status_code: number;
    data: object;
    message?: string;
}>;
/**
 * Accesses YouTube Music endpoints (/youtubei/v1/music/).
 *
 * @param {Innertube} session
 * @param {string} action
 * @param {object} args
 * @todo Implement more endpoints.
 * @returns {Promise.<{ success: boolean; status_code: number; data: object; message?: string }>}
 */
export function music(session: Innertube, action: string, args: object): Promise<{
    success: boolean;
    status_code: number;
    data: object;
    message?: string;
}>;
/**
 * Searches a given query on YouTube/YTMusic.
 *
 * @param {Innertube} session
 * @param {string} client - YouTube client: YOUTUBE | YTMUSIC
 * @param {object} args - Search arguments.
 * @returns {Promise.<{ success: boolean; status_code: number; data: object; message?: string }>}
 */
export function search(session: Innertube, client: string, args?: object): Promise<{
    success: boolean;
    status_code: number;
    data: object;
    message?: string;
}>;
/**
 * Interacts with YouTube's notification system.
 *
 * @param {Innertube} session
 * @param {string} action
 * @param {object} args
 * @returns {Promise.<{ success: boolean; status_code: number; data: object; message?: string }>}
 */
export function notifications(session: Innertube, action: string, args?: object): Promise<{
    success: boolean;
    status_code: number;
    data: object;
    message?: string;
}>;
/**
 * Interacts with YouTube's livechat system.
 *
 * @param {Innertube} session
 * @param {string} action
 * @param {object} args
 * @returns {Promise.<{ success: boolean; data: object; message?: string }>}
 */
export function livechat(session: Innertube, action: string, args?: object): Promise<{
    success: boolean;
    data: object;
    message?: string;
}>;
/**
 * Retrieves video data.
 *
 * @param {Innertube} session
 * @param {object} args
 * @returns {Promise.<object>} - Video data.
 */
export function getVideoInfo(session: Innertube, args?: object): Promise<object>;
/**
 * Requests continuation for previously performed actions.
 *
 * @param {Innertube} session
 * @param {object} args
 * @returns {Promise.<{ success: boolean; status_code: number; data: object; message?: string }>}
 */
export function next(session: Innertube, args?: object): Promise<{
    success: boolean;
    status_code: number;
    data: object;
    message?: string;
}>;
/**
 * Gets search suggestions.
 *
 * @param {Innertube} session
 * @param {string} query
 * @returns {Promise.<{ success: boolean; status_code: number; data: object; message?: string }>}
 */
export function getSearchSuggestions(session: Innertube, client: any, input: any): Promise<{
    success: boolean;
    status_code: number;
    data: object;
    message?: string;
}>;
