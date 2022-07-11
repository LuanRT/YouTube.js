export = LiveChatParticipant;
declare class LiveChatParticipant {
    constructor(data: any);
    type: string;
    name: Text;
    photo: Thumbnail[];
    badges: any;
}
import Text = require("./Text");
import Thumbnail = require("./Thumbnail");
