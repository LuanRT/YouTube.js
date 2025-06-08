import { type ObservedArray, YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Text from './misc/Text.js';

export default class RichShelf extends YTNode {
  static type = 'RichShelf';

  public title: Text;
  public contents: ObservedArray<YTNode>;
  public endpoint?: NavigationEndpoint;
  public subtitle?: Text;
  public is_expanded: boolean;
  public is_bottom_divider_hidden: boolean;
  public is_top_divider_hidden: boolean;
  public layout_sizing?: 'RICH_GRID_LAYOUT_SIZING_UNSPECIFIED'
    | 'RICH_GRID_LAYOUT_SIZING_STANDARD'
    | 'RICH_GRID_LAYOUT_SIZING_COMPACT'
    | 'RICH_GRID_LAYOUT_SIZING_EXTRA_COMPACT'
    | 'RICH_GRID_LAYOUT_SIZING_TINY';
  public icon_type?: string;
  public menu: YTNode | null;
  public next_button: YTNode | null;
  public previous_button: YTNode | null;
  
  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.contents = Parser.parseArray(data.contents);

    this.is_expanded = !!data.is_expanded;
    this.is_bottom_divider_hidden = !!data.isBottomDividerHidden;
    this.is_top_divider_hidden = !!data.isTopDividerHidden;

    if ('endpoint' in data) {
      this.endpoint = new NavigationEndpoint(data.endpoint);
    }

    if ('subtitle' in data) {
      this.subtitle = new Text(data.subtitle);
    }

    if ('layoutSizing' in data) {
      this.layout_sizing = data.layoutSizing;
    }
    
    if ('icon' in data) {
      this.icon_type = data.icon.iconType;
    }
    
    this.menu = Parser.parseItem(data.menu);
    this.next_button = Parser.parseItem(data.nextButton);
    this.previous_button = Parser.parseItem(data.previousButton);
  }
}