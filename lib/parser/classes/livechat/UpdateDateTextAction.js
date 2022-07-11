import Text from "../Text.js";

class UpdateDateTextAction {
    type = 'UpdateDateTextAction';
    constructor(data) {
        this.date_text = new Text(data.dateText).toString();
    }
}
export default UpdateDateTextAction;
