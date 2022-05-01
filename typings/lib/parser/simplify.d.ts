export = Simplify;
declare class Simplify {
    static matching(match: any): Simplify;
    static matchingAny(match: any): Simplify;
    constructor(schema: any);
    match(data: any): any[];
    runOn(data: any): any;
    #private;
}
