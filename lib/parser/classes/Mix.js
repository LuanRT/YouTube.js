import Playlist from "./Playlist.js";

class Mix extends Playlist {
    type = 'Mix';
    constructor(data) {
        super(data);
    }
}
export default Mix;
