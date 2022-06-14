export = Parser;
declare class Parser {
    static parseResponse(data: any): {
        contents: any;
        on_response_received_actions: any;
        on_response_received_endpoints: any;
        on_response_received_commands: any;
        /** @type {*} */
        continuation_contents: any;
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
    static parseCC(data: any): SectionListContinuation;
    static parseRR(actions: any): any;
    static parseFormats(formats: any): any;
    static parse(data: any): any;
    static formatError({ classname, classdata, err }: {
        classname: any;
        classdata: any;
        err: any;
    }): void;
    static sanitizeClassName(input: any): any;
    static shouldIgnore(classname: any): boolean;
}
import VideoDetails = require("./classes/VideoDetails");
declare class SectionListContinuation {
    constructor(data: any);
    type: string;
    contents: any;
    continuation: any;
}
