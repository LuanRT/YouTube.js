import Text from '../misc/Text.js';
import NavigationEndpoint from '../NavigationEndpoint.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';

class KidsCategoryTab extends YTNode {
  static type = 'KidsCategoryTab';

  title: Text;
  category_assets: {
    asset_key: string;
    background_color: string;
  };
  category_type: string;
  endpoint: NavigationEndpoint;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.category_assets = {
      asset_key: data.categoryAssets?.assetKey,
      background_color: data.categoryAssets?.backgroundColor
    };
    this.category_type = data.categoryType;
    this.endpoint = new NavigationEndpoint(data.endpoint);
  }
}

export default KidsCategoryTab;