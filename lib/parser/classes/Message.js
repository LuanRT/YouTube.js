import Text from "./Text.js";

class Message {
    type = 'Message';
    constructor(data) {
        this.text = new Text(data.text).toString();
    }
}
export default Message;
