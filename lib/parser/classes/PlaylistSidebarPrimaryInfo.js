import Parser from "../index.js";
import NavigationEndpoint from "./NavigationEndpoint.js";
import Text from "./Text.js";

class PlaylistSidebarPrimaryInfo {
    type = 'PlaylistSidebarPrimaryInfo';
    constructor(data) {
        this.stats = data.stats.map((stat) => new Text(stat));
        this.thumbnail_renderer = Parser.parse(data.thumbnailRenderer);
        this.title = new Text(data.title);
        this.menu = data.menu && Parser.parse(data.menu);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.description = new Text(data.description);
    }
}
export default PlaylistSidebarPrimaryInfo;
