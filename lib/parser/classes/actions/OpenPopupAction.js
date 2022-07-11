import Parser from "../../index.js";

class OpenPopupAction {
    type = 'OpenPopupAction';
    constructor(data) {
        this.popup = Parser.parse(data.popup);
        this.popup_type = data.popupType;
    }
}
export default OpenPopupAction;
