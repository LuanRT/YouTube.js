import { ObservedArray, YTNode } from "../../helpers.js";
import Parser, { RawNode } from "../../index.js";
import MenuNavigationItem from "./MenuNavigationItem.js";
import MenuServiceItem from "./MenuServiceItem.js";

export default class MenuPopup extends YTNode {
  static type = 'MenuPopup';

  items: ObservedArray<MenuNavigationItem | MenuServiceItem>;
    
  constructor(data: RawNode) {
    super();
    this.items = Parser.parseArray(data.items, [MenuNavigationItem, MenuServiceItem]);
  }
}