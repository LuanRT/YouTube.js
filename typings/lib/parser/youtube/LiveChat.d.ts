export = LiveChat;
declare class LiveChat {
    /**
     * @param {import('./VideoInfo')} video_info
     */
    constructor(video_info: import('./VideoInfo'));
    ev: EventEmitter;
    initial_info: any;
    live_metadata: {
        /** @type {import('../contents/classes/livechat/metadata/UpdateTitleAction')} */
        title: any;
        /** @type {import('../contents/classes/livechat/metadata/UpdateDescriptionAction')} */
        description: any;
        /** @type {import('../contents/classes/livechat/metadata/UpdateViewershipAction')} */
        views: any;
        /** @type {import('../contents/classes/livechat/metadata/UpdateTitleAction')} */
        likes: any;
        /** @type {import('../contents/classes/livechat/metadata/UpdateDateTextAction')} */
        date: any;
    };
    running: boolean;
    is_replay: boolean;
    start(): void;
    stop(): void;
    metadata: any;
    /**
     * Sends a message.
     * @param {string} text
     * @returns {Promise.<import('../contents/classes/livechat/AddChatItemAction')[]>}
     */
    sendMessage(text: string): Promise<import('../contents/classes/livechat/AddChatItemAction')[]>;
    #private;
}
import EventEmitter = require("events");
