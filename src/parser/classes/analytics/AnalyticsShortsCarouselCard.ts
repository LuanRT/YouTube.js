import { YTNode } from '../../helpers';
import NavigationEndpoint from '../NavigationEndpoint';

class AnalyticsShortsCarouselCard extends YTNode {
  static type = 'AnalyticsShortsCarouselCard';

  title: string;
  shorts: {
    description: string;
    thumbnail_url: string;
    endpoint: NavigationEndpoint;
  }[];

  constructor(data: any) {
    super();
    this.title = data.title;
    this.shorts = data.shortsCarouselData.shorts.map((short: any) => ({
      description: short.shortsDescription,
      thumbnail_url: short.thumbnailUrl,
      endpoint: new NavigationEndpoint(short.videoEndpoint)
    }));
  }
}

export default AnalyticsShortsCarouselCard;