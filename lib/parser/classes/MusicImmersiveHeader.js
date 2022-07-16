import Text from "./misc/Text";
import Parser from "../index";

import { YTNode } from "../helpers";

class MusicImmersiveHeader extends YTNode {
    static type = 'MusicImmersiveHeader';
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.description = new Text(data.description);
        this.thumbnails = Parser.parse(data.thumbnail);
        /**
         Not useful for now.
         this.menu = Parser.parse(data.menu);
         this.play_button = Parser.parse(data.playButton);
         this.start_radio_button = Parser.parse(data.startRadioButton);
         */
    }
}
export default MusicImmersiveHeader;
