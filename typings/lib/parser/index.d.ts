export = Parser;
declare class Parser {
    static "__#8@#memo": Map<any, any>;
    static "__#8@#clearMemo"(): void;
    static "__#8@#createMemo"(): void;
    static "__#8@#addToMemo"(classname: any, result: any): Map<any, any>;
    /**
     * Parses InnerTube response.
     *
     * @param {object} data
     * @returns {*}
     */
    static parseResponse(data: object): any;
    static parseC(data: any): TimedContinuation;
    static parseLC(data: any): SectionListContinuation | LiveChatContinuation;
    static parseRR(actions: any): any;
    static parseActions(data: any): any;
    static parseFormats(formats: any): any;
    /**
     * Parses the `contents` property of the response.
     *
     * @param {object} data - contents to be parsed.
     * @returns {*}
     */
    static parse(data: object): any;
    static formatError({ classname, classdata, err }: {
        classname: any;
        classdata: any;
        err: any;
    }): void;
    static sanitizeClassName(input: any): any;
    static shouldIgnore(classname: any): boolean;
}
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
