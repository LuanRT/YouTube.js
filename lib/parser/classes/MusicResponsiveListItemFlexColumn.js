import Text from "./Text.js";

class MusicResponsiveListItemFlexColumn {
    type = 'musicResponsiveListItemFlexColumnRenderer';
    constructor(data) {
        this.title = new Text(data.text);
        this.display_priority = data.displayPriority;
    }
}
export default MusicResponsiveListItemFlexColumn;
