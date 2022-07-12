
import { YTNode, ParserTypeSymbol } from "../..";

class AuthorCommentBadge extends YTNode {
    static [ParserTypeSymbol] = 'AuthorCommentBadge';
    #data;
    constructor(data) {
        super();
        this.icon_type = data.icon.iconType;
        this.tooltip = data.iconTooltip;
        // *** For consistency
        this.tooltip === 'Verified' &&
            (this.style = 'BADGE_STYLE_TYPE_VERIFIED') &&
            (data.style = 'BADGE_STYLE_TYPE_VERIFIED');
        this.#data = data;
    }
    get orig_badge() {
        return this.#data;
    }
}
export default AuthorCommentBadge;
