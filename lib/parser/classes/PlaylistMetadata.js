
class PlaylistMetadata {
    type = 'PlaylistMetadata';
    constructor(data) {
        this.title = data.title;
        this.description = data.description || null;
        // XXX: Appindexing should be in microformat
    }
}
export default PlaylistMetadata;
