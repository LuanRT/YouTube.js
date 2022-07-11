import Text from "../Text.js";

class UpdateDescriptionAction {
    type = 'UpdateDescriptionAction';
    constructor(data) {
        this.description = new Text(data.description);
    }
}
export default UpdateDescriptionAction;
