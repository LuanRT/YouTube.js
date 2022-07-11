export = MusicPlaylistShelf;
declare class MusicPlaylistShelf {
    constructor(data: any);
    type: string;
    playlist_id: any;
    contents: any;
    collapsed_item_count: any;
    get continuation(): any;
    #private;
}
