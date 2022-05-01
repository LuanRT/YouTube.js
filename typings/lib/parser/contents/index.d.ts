export = ResultsParser;
declare class ResultsParser {
    static parseResponse(data: any): {
        contents: any;
        on_response_received_actions: any;
        on_response_received_endpoints: any;
        metadata: any;
        header: any;
        microformat: any;
    };
    static parseRR(actions: any): any;
    static parse(contents: any): any;
    static parseItem(item: any): any;
}
