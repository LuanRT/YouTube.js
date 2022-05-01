export = Text;
declare class Text {
    constructor(txt: any, def?: any);
    type: string;
    text: any;
    runs: any;
    toString(): any;
    toJSON(): {
        text: any;
        runs: any;
    };
}
