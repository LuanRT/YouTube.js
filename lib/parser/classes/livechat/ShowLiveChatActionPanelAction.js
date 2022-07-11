import Parser from "../../index.js";

class ShowLiveChatActionPanelAction {
    type = 'ShowLiveChatActionPanelAction';
    constructor(data) {
        this.panel_to_show = Parser.parse(data.panelToShow);
    }
}
export default ShowLiveChatActionPanelAction;
