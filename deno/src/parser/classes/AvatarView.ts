import { YTNode } from '../helpers.ts';
import { type RawNode } from '../index.ts';
import { Thumbnail } from '../misc.ts';

export default class AvatarView extends YTNode {
  static type = 'AvatarView';

  image: {
    sources: Thumbnail[],
    processor: {
      border_image_processor: {
        circular: boolean
      }
    }
  };
  avatar_image_size: string;

  constructor(data: RawNode) {
    super();
    this.image = {
      sources: data.image.sources.map((x: any) => new Thumbnail(x)).sort((a: Thumbnail, b: Thumbnail) => b.width - a.width),
      processor: {
        border_image_processor: {
          circular: data.image.processor.borderImageProcessor.circular
        }
      }
    };
    this.avatar_image_size = data.avatarImageSize;
  }
}