import Parser from "../../index.js";

class AppendContinuationItemsAction {
    type = 'AppendContinuationItemsAction';
    constructor(data) {
        this.items = Parser.parse(data.continuationItems);
        this.target = data.target;
    }
}
export default AppendContinuationItemsAction;
