export = PlayerErrorMessage;
declare class PlayerErrorMessage {
    constructor(data: any);
    type: string;
    subreason: Text;
    reason: Text;
    proceed_button: any;
    thumbnails: Thumbnail[];
    icon_type: any;
}
import Text = require("./Text");
import Thumbnail = require("./Thumbnail");
