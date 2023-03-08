import Parser from '../../index.ts';
import NavigationEndpoint from '../NavigationEndpoint.ts';
import type SectionList from '../SectionList.ts';
import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';

class AnchoredSection extends YTNode {
  static type = 'AnchoredSection';

  title: string;
  content: SectionList | null;
  endpoint: NavigationEndpoint;
  category_assets: {
    asset_key: string;
    background_color: string;
  };
  category_type: string;

  constructor(data: RawNode) {
    super();
    this.title = data.title;
    this.content = Parser.parseItem<SectionList>(data.content);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.category_assets = {
      asset_key: data.categoryAssets?.assetKey,
      background_color: data.categoryAssets?.backgroundColor
    };
    this.category_type = data.categoryType;
  }
}

export default AnchoredSection;