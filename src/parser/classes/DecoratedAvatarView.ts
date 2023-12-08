import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import { NavigationEndpoint } from '../nodes.js';
import AvatarView from './AvatarView.js';

export default class DecoratedAvatarView extends YTNode {
  static type = 'DecoratedAvatarView';

  avatar: {
      avatar_view_model: AvatarView
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
      avatar_view_model: new AvatarView(data.avatar.avatarViewModel)
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