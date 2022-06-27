export = Parser;
declare class Parser {
    static "__#6@#memo": Map<any, any>;
    static "__#6@#clearMemo"(): void;
    static "__#6@#createMemo"(): void;
    static "__#6@#addToMemo"(classname: any, result: any): Map<any, any>;
    static parseResponse(data: any): {
        contents: any;
        contents_memo: Map<any, any>;
        on_response_received_actions: any;
        on_response_received_actions_memo: Map<any, any>;
        on_response_received_endpoints: any;
        on_response_received_endpoints_memo: Map<any, any>;
        on_response_received_commands: any;
        on_response_received_commands_memo: Map<any, any>;
        /** @type {*} */
        continuation: any;
        /** @type {*} */
        continuation_contents: any;
        actions: any;
        metadata: any;
        header: any;
        /** @type {import('./classes/PlayerMicroformat')} **/
        microformat: import('./classes/PlayerMicroformat');
        sidebar: any;
        overlay: any;
        refinements: any;
        estimated_results: any;
        player_overlays: any;
        playability_status: {
            /** @type {number} */
            status: number;
            error_screen: any;
            /** @type {boolean} */
            embeddable: boolean;
            /** @type {string} */
            reason: string;
        };
        streaming_data: {
            expires: Date;
            /** @type {import('./classes/Format')[]} */
            formats: import('./classes/Format')[];
            /** @type {import('./classes/Format')[]} */
            adaptive_formats: import('./classes/Format')[];
            dash_manifest_url: any;
            dls_manifest_url: any;
        };
        captions: any;
        video_details: VideoDetails;
        annotations: any;
        storyboards: any;
        /** @type {import('./classes/Endscreen')} */
        endscreen: import('./classes/Endscreen');
        /** @type {import('./classes/CardCollection')} */
        cards: import('./classes/CardCollection');
    };
    static parseC(data: any): TimedContinuation;
    static parseLC(data: any): SectionListContinuation | LiveChatContinuation;
    static parseRR(actions: any): any;
    static parseFormats(formats: any): any;
    static parse(data: any, module: any): any;
    static formatError({ classname, classdata, err }: {
        classname: any;
        classdata: any;
        err: any;
    }): void;
    static sanitizeClassName(input: any): any;
    static shouldIgnore(classname: any): boolean;
}
import VideoDetails = require("./classes/VideoDetails");
declare class TimedContinuation {
    constructor(data: any);
    type: string;
    timeout_ms: any;
    token: any;
}
declare class SectionListContinuation {
    constructor(data: any);
    type: string;
    contents: any;
    continuation: any;
}
declare class LiveChatContinuation {
    constructor(data: any);
    type: string;
    actions: any;
    action_panel: any;
    item_list: any;
    header: any;
    participants_list: any;
    popout_message: any;
    emojis: any;
    continuation: TimedContinuation;
    viewer_name: any;
}
