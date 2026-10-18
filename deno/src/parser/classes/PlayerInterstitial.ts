import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import InterstitialView from './InterstitialView.ts';

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