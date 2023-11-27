import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import { NavigationEndpoint } from '../nodes.js';

export default class DecoratedAvatarView extends YTNode {
  static type = 'DecoratedAvatarView';

  avatar: {
      avatar_view_model: {
        image: {
          sources: {
            0: {
              url: string,
              width: number,
              height: number
            },
            1: {
              url: string,
              width: number,
              height: number
            },
            2: {
              url: string,
              width: number,
              height: number
            }
          },
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
          sources: {
            0: {
              url: data.avatar.avatarViewModel.image.sources[0].url,
              width: data.avatar.avatarViewModel.image.sources[0].width,
              height: data.avatar.avatarViewModel.image.sources[0].height
            },
            1: {
              url: data.avatar.avatarViewModel.image.sources[1].url,
              width: data.avatar.avatarViewModel.image.sources[1].width,
              height: data.avatar.avatarViewModel.image.sources[1].height
            },
            2: {
              url: data.avatar.avatarViewModel.image.sources[2].url,
              width: data.avatar.avatarViewModel.image.sources[2].width,
              height: data.avatar.avatarViewModel.image.sources[2].height
            }
          },
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