export = ResultsParser;
declare class ResultsParser {
    static parseResponse(data: any): {
        contents: any;
        on_response_received_actions: any;
    };
    static parseRRA(actions: any): any;
    static parse(contents: any): any;
    static parseItem(item: any): any;
}
