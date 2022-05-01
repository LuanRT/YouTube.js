export = ResultsParser;
declare class ResultsParser {
    static parseResponse(data: any): {
        contents: any;
    };
    static parse(contents: any): any;
    static parseItem(item: any): any;
}
