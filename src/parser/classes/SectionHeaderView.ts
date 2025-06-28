import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';

export default class SectionHeaderView extends YTNode {
  static type = 'SectionHeaderView';
  
  headline: {
      content: string
    };
  leading_accessory: {
      image: {
        sources: {
          client_resource: {
            image_name: string
          }
        }[]
      }
    };
  
  constructor(data: RawNode) {
    super();
    this.headline = {
      content: data.headline.content
    };
    this.leading_accessory = {
      image: {
        sources: data.leadingAccessory.image.sources.map((item: any) => ({
          client_resource: {
            image_name: item.clientResource.imageName
          }
        }))
      }
    };
  }
}
