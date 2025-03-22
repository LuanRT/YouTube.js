import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import TileMetadata from './TileMetadata.js';
import TileHeader from './TileHeader.js';

export default class Tile extends YTNode {
  static type = 'Tile';
    
  style: 'TILE_STYLE_YTLR_DEFAULT' | 'TILE_STYLE_YTLR_ROUND' | 'TILE_STYLE_YTLR_SHORTS' | 'TILE_STYLE_YTLR_EDU' | 'TILE_STYLE_YTLR_WORMHOLE_RECTANGULAR' | 'TILE_STYLE_YTLR_VERTICAL_LIST';
  header: TileHeader | null;
  on_select_endpoint: NavigationEndpoint;
  content_id?: string;
  content_type?: 'TILE_CONTENT_TYPE_VIDEO' | 'TILE_CONTENT_TYPE_SHORTS' | 'TILE_CONTENT_TYPE_CHANNEL' | 'TILE_CONTENT_TYPE_PLAYLIST' | 'TILE_CONTENT_TYPE_EDU';
  on_long_press_endpoint: NavigationEndpoint;
  metadata?: TileMetadata | null;
  on_focus_endpoint?: NavigationEndpoint;
    
  constructor(data: RawNode) {
    super();
    this.style = data.style;
    this.header = Parser.parseItem(data.header, TileHeader);
    this.on_select_endpoint = new NavigationEndpoint(data.onSelectCommand);
    this.content_id = data.contentId;
    this.content_type = data.contentType;
    this.on_long_press_endpoint = new NavigationEndpoint(data.onLongPressCommand);
    this.metadata = Reflect.has(data, 'metadata') ? Parser.parseItem(data.metadata, TileMetadata) : undefined;
    this.on_focus_endpoint = Reflect.has(data, 'onFocusCommand') ? new NavigationEndpoint(data.onFocusCommand) : undefined;
  }
}