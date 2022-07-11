import Parser from "../../index.js";

class UpdateLiveChatPollAction {
    type = 'UpdateLiveChatPollAction';
    constructor(data) {
        this.poll_to_update = Parser.parse(data.pollToUpdate);
    }
}
export default UpdateLiveChatPollAction;
