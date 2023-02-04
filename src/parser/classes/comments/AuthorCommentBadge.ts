import { YTNode } from '../../helpers.js';

class AuthorCommentBadge extends YTNode {
  static type = 'AuthorCommentBadge';

  #data;

  icon_type: string | null;
  tooltip: string;
  style?: string;

  constructor(data: any) {
    super();

    this.icon_type = data.icon?.iconType || null;
    this.tooltip = data.iconTooltip;

    // *** For consistency
    this.tooltip === 'Verified' &&
      (this.style = 'BADGE_STYLE_TYPE_VERIFIED') &&
      (data.style = 'BADGE_STYLE_TYPE_VERIFIED');

    this.#data = data;
  }

  get orig_badge() {
    return this.#data;
  }
}

export default AuthorCommentBadge;