export = VideoPrimaryInfo;
declare class VideoPrimaryInfo {
    constructor(data: any);
    type: string;
    title: Text;
    super_title_link: Text;
    view_count: Text;
    short_view_count: Text;
    published: Text;
    menu: any;
}
import Text = require("./Text");
