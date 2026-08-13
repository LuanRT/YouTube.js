import { type ObservedArray, YTNode } from '../helpers.ts';
import type { RawNode } from '../types/index.ts';
import { Parser } from '../index.ts';

import Text from './misc/Text.ts';
import AvatarView from './AvatarView.ts';
import RendererContext from './misc/RendererContext.ts';

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