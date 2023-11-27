import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import { NavigationEndpoint } from '../nodes.js';
import Thumbnail from './misc/Thumbnail.js';

export default class DecoratedAvatarView extends YTNode {
  static type = 'DecoratedAvatarView';

  avatar: {
      avatar_view_model: {
        image: {
          sources: Thumbnail[],
          processor: {
            border_image_processor: {
              circular: boolean
            }
          }
        },
        avatar_image_size: string
      }
    };
  a11y_label: string;
  renderer_context: {
      command_context: {
        on_tap: {
          innertube_command: NavigationEndpoint
        }
      }
    };

  constructor(data: RawNode) {
    super();
    this.avatar = {
      avatar_view_model: {
        image: {
          sources: data.avatar.avatarViewModel.image.sources.map((x: any) => new Thumbnail(x)).sort((a: Thumbnail, b: Thumbnail) => b.width - a.width),
          processor: {
            border_image_processor: {
              circular: data.avatar.avatarViewModel.image.processor.borderImageProcessor.circular
            }
          }
        },
        avatar_image_size: data.avatar.avatarViewModel.avatarImageSize
      }
    };
    this.a11y_label = data.a11yLabel;
    this.renderer_context = {
      command_context: {
        on_tap: {
          innertube_command: new NavigationEndpoint(data.rendererContext.commandContext.onTap.innertubeCommand)
        }
      }
    };
  }
}