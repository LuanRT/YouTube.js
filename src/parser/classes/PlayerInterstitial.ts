import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import InterstitialView from './InterstitialView.js';

export default class PlayerInterstitial extends YTNode {
  static type = 'PlayerInterstitial';

  public content: InterstitialView | null;
  public state_entity_store_key?: string;

  constructor(data: RawNode) {
    super();
    this.content = Parser.parseItem(data.content, InterstitialView);
    if ('stateEntityStoreKey' in data) {
      this.state_entity_store_key = data.stateEntityStoreKey;
    }
  }
}