import { YTNode } from '../helpers.ts';
import { type RawNode } from '../index.ts';
import { Thumbnail } from '../misc.ts';

export default class AvatarView extends YTNode {
  static type = 'AvatarView';

  image: Thumbnail[];
  image_processor: {
    border_image_processor: {
      circular: boolean
    }
  } | undefined;
  avatar_image_size: string;

  constructor(data: RawNode) {
    super();
    this.image = Thumbnail.fromResponse(data.image);
    this.avatar_image_size = data.avatarImageSize;

    if (data.image.processor) {
      this.image_processor = {
        border_image_processor: {
          circular: data.image.processor.borderImageProcessor.circular
        }
      };
    }
  }
}