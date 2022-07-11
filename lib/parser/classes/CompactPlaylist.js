import Playlist from "./Playlist.js";

class CompactPlaylist extends Playlist {
    type = 'CompactPlaylist';
    constructor(data) {
        super(data);
    }
}
export default CompactPlaylist;
