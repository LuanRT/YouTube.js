
import { YTNode, ParserTypeSymbol } from "..";

class MusicInlineBadge extends YTNode {
    static [ParserTypeSymbol] = 'MusicInlineBadge';
    constructor(data) {
        super();
        this.icon_type = data.icon.iconType;
        this.label = data.accessibilityData.accessibilityData.label;
    }
}
export default MusicInlineBadge;
