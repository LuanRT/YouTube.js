export = Player;
declare class Player {
    constructor(session: any);
    session: any;
    player_name: string;
    tmp_cache_dir: string;
    init(): Promise<void>;
    sig_decipher_sc: string;
    ntoken_sc: string;
    #private;
}
