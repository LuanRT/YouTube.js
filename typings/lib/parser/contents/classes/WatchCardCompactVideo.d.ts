export = WatchCardCompactVideo;
declare class WatchCardCompactVideo {
    constructor(data: any);
    type: string;
    title: Text;
    subtitle: Text;
    duration: {
        text: any;
        seconds: number;
    };
    style: any;
}
import Text = require("./Text");
