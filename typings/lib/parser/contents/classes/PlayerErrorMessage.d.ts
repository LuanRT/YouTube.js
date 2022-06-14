export = PlayerErrorMessage;
declare class PlayerErrorMessage {
    constructor(data: any);
    type: string;
    subreason: Text;
    reason: Text;
    proceed_button: any;
    thumbnails: any;
    icon_type: any;
}
import Text = require("./Text");
