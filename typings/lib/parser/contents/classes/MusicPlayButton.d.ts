export = MusicPlayButton;
declare class MusicPlayButton {
    constructor(data: any);
    type: string;
    endpoint: NavigationEndpoint;
    play_icon_type: any;
    pause_icon_type: any;
    play_label: any;
    pause_label: any;
    icon_color: any;
}
import NavigationEndpoint = require("./NavigationEndpoint");
