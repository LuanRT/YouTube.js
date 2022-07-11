export = LiveChat;
declare class LiveChat {
    /**
     * @param {import('./VideoInfo')} video_info
     */
    constructor(video_info: import('./VideoInfo'));
    ev: any;
    initial_info: any;
    live_metadata: {
        /** @type {import('../classes/livechat/metadata/UpdateTitleAction')} */
        title: any;
        /** @type {import('../classes/livechat/metadata/UpdateDescriptionAction')} */
        description: any;
        /** @type {import('../classes/livechat/metadata/UpdateViewershipAction')} */
        views: any;
        /** @type {import('../classes/livechat/metadata/UpdateTitleAction')} */
        likes: any;
        /** @type {import('../classes/livechat/metadata/UpdateDateTextAction')} */
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
     * @returns {Promise.<import('../classes/livechat/AddChatItemAction')[]>}
     */
    sendMessage(text: string): Promise<import('../classes/livechat/AddChatItemAction')[]>;
    #private;
}
