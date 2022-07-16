import Parser from "../index";
import Text from "./misc/Text";
import Thumbnail from "./misc/Thumbnail";
import NavigationEndpoint from "./NavigationEndpoint";

import { YTNode } from "../helpers";

class MusicTwoRowItem extends YTNode {
    static type = 'MusicTwoRowItem';
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.id = this.endpoint.browse?.id ||
            this.endpoint.watch.video_id;
        this.subtitle = new Text(data.subtitle);
        this.badges = Parser.parse(data.subtitleBadges);
        switch (this.endpoint.browse?.page_type) {
            case 'MUSIC_PAGE_TYPE_ARTIST':
                this.type = 'artist';
                this.subscribers = this.subtitle.toString();
                break;
            case 'MUSIC_PAGE_TYPE_PLAYLIST':
                this.type = 'playlist';
                this.item_count = parseInt(this.subtitle.runs
                    .find((run) => run.text
                    .match(/\d+ (songs|song)/))?.text
                    .match(/\d+/g)) || null;
                break;
            case 'MUSIC_PAGE_TYPE_ALBUM':
                this.type = 'album';
                const artists = this.subtitle.runs.filter((run) => run.endpoint.browse?.id.startsWith('UC'));
                if (artists) {
                    this.artists = artists.map((artist) => ({
                        name: artist.text,
                        channel_id: artist.endpoint.browse.id,
                        endpoint: artist.endpoint
                    }));
                }
                this.year = this.subtitle.runs.slice(-1)[0].text;
                if (isNaN(this.year))
                    delete this.year;
                break;
            default:
                if (this.subtitle.runs[0].text !== 'Song') {
                    this.type = ('video');
                }
                else {
                    this.type = ('song');
                }
                if (this.type == 'video') {
                    this.views = this.subtitle.runs
                        .find((run) => run.text.match(/(.*?) views/)).text;
                    const author = this.subtitle.runs.find((run) => run.endpoint.browse?.id.startsWith('UC'));
                    if (author) {
                        this.author = {
                            name: author.text,
                            channel_id: author.endpoint.browse.id,
                            endpoint: author.endpoint
                        };
                    }
                }
                else {
                    const artists = this.subtitle.runs.filter((run) => run.endpoint.browse?.id.startsWith('UC'));
                    if (artists) {
                        this.artists = artists.map((artist) => ({
                            name: artist.text,
                            channel_id: artist.endpoint.browse.id,
                            endpoint: artist.endpoint
                        }));
                    }
                }
                break;
        }
        this.thumbnail = Thumbnail.fromResponse(data.thumbnailRenderer.musicThumbnailRenderer.thumbnail);
        this.thumbnail_overlay = Parser.parse(data.thumbnailOverlay);
        this.menu = Parser.parse(data.menu);
    }
}
export default MusicTwoRowItem;
