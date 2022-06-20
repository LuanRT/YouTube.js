export = Poll;
declare class Poll {
    constructor(data: any);
    type: string;
    choices: any;
    total_votes: Text;
    poll_type: any;
}
import Text = require("./Text");
