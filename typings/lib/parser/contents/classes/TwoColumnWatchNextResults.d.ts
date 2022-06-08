export = TwoColumnWatchNextResults;
declare class TwoColumnWatchNextResults {
    constructor(data: any);
    type: string;
    get results(): any;
    get secondary_results(): any;
    get conversation_bar(): any;
    #private;
}
