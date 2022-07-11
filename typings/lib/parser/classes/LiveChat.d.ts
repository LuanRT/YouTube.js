export = LiveChat;
declare class LiveChat {
    constructor(data: any);
    type: string;
    header: any;
    initial_display_state: any;
    continuation: any;
    client_messages: {
        reconnect_message: Text;
        unable_to_reconnect_message: Text;
        fatal_error: Text;
        reconnected_message: Text;
        generic_error: Text;
    };
    is_replay: any;
}
import Text = require("./Text");
