import { type ObservedArray, YTNode } from '../helpers.js';
import type { RawNode } from '../types/index.js';
import { Parser } from '../index.js';

import Text from './misc/Text.js';
import AvatarView from './AvatarView.js';
import RendererContext from './misc/RendererContext.js';

export default class AvatarStackView extends YTNode {
  static type = 'AvatarStackView';

  public avatars: ObservedArray<AvatarView>;
  public text?: Text;
  public avatar_cluster_size?: 'AVATAR_SIZE_UNKNOWN' | 'AVATAR_SIZE_XS' | 'AVATAR_SIZE_S' | 'AVATAR_SIZE_M' | 'AVATAR_SIZE_XL' | 'AVATAR_SIZE_40' | 'AVATAR_SIZE_L' | 'AVATAR_SIZE_XXS' | 'AVATAR_SIZE_RESPONSIVE' | 'AVATAR_SIZE_XXL' | 'AVATAR_SIZE_XXXL' | 'AVATAR_SIZE_48';
  public layout_type?: 'AVATAR_STACK_LAYOUT_CLUSTER';
  public renderer_context: RendererContext;

  constructor(data: RawNode) {
    super();
    this.avatars = Parser.parseArray(data.avatars, AvatarView);

    if ('text' in data) {
      this.text = Text.fromAttributed(data.text);
    }

    if ('avatarClusterSize' in data) {
      this.avatar_cluster_size = data.avatarClusterSize;
    }

    if ('layoutType' in data) {
      this.layout_type = data.layoutType;
    }

    this.renderer_context = new RendererContext(data.rendererContext);
  }
}