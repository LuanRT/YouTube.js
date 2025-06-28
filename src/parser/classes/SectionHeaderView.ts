import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import Text from './misc/Text.js';

export default class SectionHeaderView extends YTNode {
  static type = 'SectionHeaderView';
  
  headline: Text;
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
    this.headline = Text.fromAttributed(data.headline);
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
