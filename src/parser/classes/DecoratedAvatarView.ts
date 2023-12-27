import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import AvatarView from './AvatarView.js';

export default class DecoratedAvatarView extends YTNode {
  static type = 'DecoratedAvatarView';

  avatar: AvatarView;
  a11y_label: string;
  on_tap_endpoint: NavigationEndpoint;

  constructor(data: RawNode) {
    super();
    this.avatar = new AvatarView(data.avatar.avatarViewModel);
    this.a11y_label = data.a11yLabel;
    this.on_tap_endpoint = new NavigationEndpoint(data.rendererContext.commandContext.onTap.innertubeCommand);
  }
}