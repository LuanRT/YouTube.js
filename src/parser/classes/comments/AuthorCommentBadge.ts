import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';

export default class AuthorCommentBadge extends YTNode {
  static type = 'AuthorCommentBadge';

  #data;

  icon_type?: string;
  tooltip: string;
  style?: string;

  constructor(data: RawNode) {
    super();

    if (Reflect.has(data, 'icon') && Reflect.has(data.icon, 'iconType')) {
      this.icon_type = data.icon.iconType;
    }

    this.tooltip = data.iconTooltip;

    // *** For consistency
    if (this.tooltip === 'Verified') {
      this.style = 'BADGE_STYLE_TYPE_VERIFIED';
      data.style = 'BADGE_STYLE_TYPE_VERIFIED';
    }

    this.#data = data;
  }

  get orig_badge() {
    return this.#data;
  }
}