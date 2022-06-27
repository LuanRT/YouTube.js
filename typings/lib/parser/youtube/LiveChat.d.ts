export = LiveChat;
declare class LiveChat {
    /**
     * @param {import('./VideoInfo')} video_info
     * @param {string} mode
     */
    constructor(video_info: import('./VideoInfo'), mode: string);
    ev: EventEmitter;
    mode: string;
    initial_info: any;
    live_metadata: {
        /** @type {import('../contents/classes/livechat/metadata/UpdateTitleAction')} */
        title: import('../contents/classes/livechat/metadata/UpdateTitleAction');
        /** @type {import('../contents/classes/livechat/metadata/UpdateDescriptionAction')} */
        description: import('../contents/classes/livechat/metadata/UpdateDescriptionAction');
        /** @type {import('../contents/classes/livechat/metadata/UpdateViewershipAction')} */
        views: import('../contents/classes/livechat/metadata/UpdateViewershipAction');
        /** @type {import('../contents/classes/livechat/metadata/UpdateTitleAction')} */
        likes: import('../contents/classes/livechat/metadata/UpdateTitleAction');
        /** @type {import('../contents/classes/livechat/metadata/UpdateDateTextAction')} */
        date: import('../contents/classes/livechat/metadata/UpdateDateTextAction');
    };
    running: boolean;
    is_replay: boolean;
    start(): void;
    stop(): void;
    metadata: any;
    #private;
}
import EventEmitter = require("events");
