import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import AvatarView from './AvatarView.ts';

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