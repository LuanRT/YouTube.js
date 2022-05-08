export = Livechat;
declare class Livechat {
    constructor(session: any, token: any, channel_id: any, video_id: any);
    ctoken: any;
    session: any;
    video_id: any;
    channel_id: any;
    message_queue: any[];
    id_cache: any[];
    poll_intervals_ms: number;
    running: boolean;
    metadata_ctoken: any;
    livechat_poller: any;
    sendMessage(text: any): Promise<any>;
    /**
     * Blocks a user.
     * @todo Implement this method.
     * @param {object} msg_params
     */
    blockUser(msg_params: object): Promise<void>;
    stop(): void;
    #private;
}
