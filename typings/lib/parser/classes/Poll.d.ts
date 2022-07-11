export = Poll;
declare class Poll {
    constructor(data: any);
    type: string;
    choices: any;
    poll_type: any;
    total_votes: Text;
    live_chat_poll_id: any;
}
import Text = require("./Text");
