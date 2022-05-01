export = Text;
declare class Text {
    constructor(txt: any, def?: any);
    type: string;
    /**
     * @type {string | undefined}
     */
    text: string | undefined;
    runs: any;
    /**
     * Get the string representation of this text
     * @note may return an empty string if this.text is undefined
     * @returns {string}
     */
    toString(): string;
    toJSON(): {
        string: string;
        runs: any;
    };
}
