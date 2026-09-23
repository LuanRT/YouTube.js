import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import InterstitialView from './InterstitialView.js';

export default class PlayerInterstitial extends YTNode {
  static type = 'PlayerInterstitial';

  content: InterstitialView | null;
  state_entity_store_key?: string;

  constructor(data: RawNode) {
    super();
    this.content = Parser.parseItem(data.content, InterstitialView);
    if (Reflect.has(data, 'stateEntityStoreKey')) {
      this.state_entity_store_key = data.stateEntityStoreKey;
    }
  }
}