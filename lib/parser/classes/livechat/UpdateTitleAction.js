import Text from "../Text.js";

class UpdateTitleAction {
    type = 'UpdateTitleAction';
    constructor(data) {
        this.title = new Text(data.title);
    }
}
export default UpdateTitleAction;
