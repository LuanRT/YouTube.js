export = Player;
declare class Player {
    constructor(id: any);
    init(): Promise<Player>;
    get url(): string;
    get sts(): any;
    get ntoken_decipher(): any;
    get signature_decipher(): any;
    isCached(): boolean;
    #private;
}
