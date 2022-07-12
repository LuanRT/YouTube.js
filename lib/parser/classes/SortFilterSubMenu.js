import utils from "../../utils/Utils.js";

const { observe } = utils;
import { YTNode, ParserTypeSymbol } from "..";

class SortFilterSubMenu extends YTNode {
    static [ParserTypeSymbol] = 'SortFilterSubMenu';
    constructor(data) {
        super();
        this.sub_menu_items = observe(data.subMenuItems.map((item) => ({
            title: item.title,
            selected: item.selected,
            continuation: item.continuation?.reloadContinuationData.continuation,
            subtitle: item.subtitle
        })));
        this.label = data.accessibility.accessibilityData.label;
    }
}
export default SortFilterSubMenu;
