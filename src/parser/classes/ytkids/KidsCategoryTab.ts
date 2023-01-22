import Text from '../misc/Text';
import NavigationEndpoint from '../NavigationEndpoint';
import { YTNode } from '../../helpers';

class KidsCategoryTab extends YTNode {
  static type = 'KidsCategoryTab';

  title: Text;
  category_assets: {
    asset_key: string;
    background_color: string;
  };
  category_type: string;
  endpoint: NavigationEndpoint;

  constructor(data: any) {
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