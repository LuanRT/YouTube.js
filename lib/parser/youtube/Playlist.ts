import Actions from "../../core/Actions.js";
import Feed from "../../core/Feed.js";
import { InnertubeError } from "../../utils/Utils.js";
import Thumbnail from "../classes/misc/Thumbnail.js";
import PlaylistSidebarPrimaryInfo from "../classes/PlaylistSidebarPrimaryInfo.js";
import PlaylistSidebarSecondaryInfo from "../classes/PlaylistSidebarSecondaryInfo.js";
import VideoOwner from '../classes/VideoOwner';

class Playlist extends Feed {
    info;
    menu;
    endpoint;
    constructor(actions: Actions, data: any, already_parsed = false) {
        super(actions, data, already_parsed);
        console.log('page sidebar is', this.page.sidebar?.type);
        const primary_info = this.page.sidebar?.key("contents").parsed().array().firstOfType(PlaylistSidebarPrimaryInfo);
        const secondary_info = this.page.sidebar?.key("contents").parsed().array().firstOfType(PlaylistSidebarSecondaryInfo);
        this.info = {
            ...this.page.metadata,
            ...{
                author: secondary_info?.owner.item().as(VideoOwner).author,
                thumbnails: primary_info?.thumbnail_renderer.item().key("thumbnail").array().map((thumbnail) => {
                    if (!(thumbnail instanceof Thumbnail))
                        throw new InnertubeError('Thumbnail is not of type Thumbnail.');
                    return thumbnail;
                }),
                total_items: this.#getStat(0, primary_info),
                views: this.#getStat(1, primary_info),
                last_updated: this.#getStat(2, primary_info),
                can_share: this.page.header.item().key("can_share").boolean(),
                can_delete: this.page.header.item().key("can_delete").boolean(),
                is_editable: this.page.header.item().key("is_editable").boolean(),
                privacy: this.page.header.item().key("privacy").any(),
            }
        };
        this.menu = primary_info?.menu;
        this.endpoint = primary_info?.endpoint;
    }
    #getStat(index: number, primary_info?: PlaylistSidebarPrimaryInfo) {
        if (!primary_info || !primary_info.stats)
            return 'N/A';
        return primary_info.stats[index]?.toString() || 'N/A';
    }
    /**
     * @alias videos
     */
    get items() {
        return this.videos;
    }
}
export default Playlist;
