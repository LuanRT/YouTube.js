export = Signature;
declare class Signature {
    constructor(url: any, player: any);
    url: any;
    player: any;
    func_regex: RegExp;
    actions_regex: RegExp;
    /**
     * Deciphers signature.
     */
    decipher(): any;
    #private;
}
