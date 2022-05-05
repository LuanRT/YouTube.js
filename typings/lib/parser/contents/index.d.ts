export = ResultsParser;
declare class ResultsParser {
    static parseResponse(data: any): {
        contents: any;
        on_response_received_actions: any;
        on_response_received_endpoints: any;
        metadata: any;
        header: any;
        microformat: any;
        sidebar: any;
        playability_status: {
            status: any;
            embeddable: any;
        };
        streaming_data: {
            expires: Date;
            formats: Format[];
            adaptive_formats: Format[];
        };
        captions: any;
        video_details: VideoDetails;
        annotations: any;
        storyboards: any;
        endscreen: any;
        cards: any;
    };
    /**
     *
     * @param {*} formats
     * @returns {Format[]}
     */
    static parseFormats(formats: any): Format[];
    static parseRR(actions: any): any;
    static parse(contents: any): any;
    static parseItem(item: any): any;
}
import Format = require("./Format");
import VideoDetails = require("./VideoDetails");
