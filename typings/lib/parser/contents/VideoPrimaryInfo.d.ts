export = VideoPrimaryInfo;
declare class VideoPrimaryInfo {
    constructor(item: any);
    type: string;
    title: Text;
    published_at: Date;
    actions: any;
    views: Text;
}
import Text = require("./Text");
