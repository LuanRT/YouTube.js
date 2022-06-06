export = TwoColumnSearchResults;
declare class TwoColumnSearchResults {
    constructor(data: any);
    type: string;
    get primary_contents(): any;
    get secondary_contents(): any;
    #private;
}
