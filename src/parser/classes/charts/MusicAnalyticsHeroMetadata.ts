import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';

export default class MusicAnalyticsHeroMetadata extends YTNode {
  static type = 'MusicAnalyticsHeroMetadata';

  hero_banner_image_url?: string;
  sub_title?: string;
  title?: string;
  view_count?: string;

  constructor(data: RawNode) {
    super();
    this.hero_banner_image_url = data.heroBannerImageUrl;
    this.sub_title = data.subTitle;
    this.title = data.title;
    this.view_count = data.viewCount;
  }
}
