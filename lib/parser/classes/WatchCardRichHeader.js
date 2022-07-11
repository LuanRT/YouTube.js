import Author from "./Author.js";
import NavigationEndpoint from "./NavigationEndpoint.js";
import Text from "./Text.js";

class WatchCardRichHeader {
    type = 'WatchCardRichHeader';
    constructor(data) {
        this.title = new Text(data.title);
        this.title_endpoint = new NavigationEndpoint(data.titleNavigationEndpoint);
        this.subtitle = new Text(data.subtitle);
        this.author = new Author(data, data.titleBadge ? [data.titleBadge] : null, data.avatar);
        this.author.name = this.title;
        this.style = data.style;
    }
}
export default WatchCardRichHeader;
