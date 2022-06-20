export = MusicImmersiveHeader;
declare class MusicImmersiveHeader {
    constructor(data: any);
    type: string;
    title: Text;
    description: Text;
    thumbnails: any;
}
import Text = require("./Text");
