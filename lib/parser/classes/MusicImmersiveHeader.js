import Text from "./Text.js";
import Parser from "../index.js";

class MusicImmersiveHeader {
    type = 'MusicImmersiveHeader';
    constructor(data) {
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
