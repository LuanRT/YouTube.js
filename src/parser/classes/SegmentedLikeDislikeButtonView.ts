import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import LikeButtonView from './LikeButtonView.js';
import DislikeButtonView from './DislikeButtonView.js';

export default class SegmentedLikeDislikeButtonView extends YTNode {
  static type = 'SegmentedLikeDislikeButtonView';

  like_button: LikeButtonView | null;
  dislike_button: DislikeButtonView | null;
  icon_type: string;
  like_count_entity: {
    key: string
  };
  dynamic_like_count_update_data: {
    update_status_key: string,
    placeholder_like_count_values_key: string,
    update_delay_loop_id: string,
    update_delay_sec: number
  };

  like_count?: number;
  short_like_count?: string;

  constructor(data: RawNode) {
    super();
    this.like_button = Parser.parseItem(data.likeButtonViewModel, LikeButtonView);
    this.dislike_button = Parser.parseItem(data.dislikeButtonViewModel, DislikeButtonView);
    this.icon_type = data.iconType;

    if (this.like_button && this.like_button.toggle_button) {
      const toggle_button = this.like_button.toggle_button;

      if (toggle_button.default_button) {
        this.short_like_count = toggle_button.default_button.title;

        if (toggle_button.default_button.accessibility_text)
          this.like_count = parseInt(toggle_button.default_button.accessibility_text.replace(/\D/g, ''));
      } else if (toggle_button.toggled_button) {
        this.short_like_count = toggle_button.toggled_button.title;
        if (toggle_button.toggled_button.accessibility_text)
          this.like_count = parseInt(toggle_button.toggled_button.accessibility_text.replace(/\D/g, ''));
      }
    }

    this.like_count_entity = {
      key: data.likeCountEntity.key
    };

    this.dynamic_like_count_update_data = {
      update_status_key: data.dynamicLikeCountUpdateData.updateStatusKey,
      placeholder_like_count_values_key: data.dynamicLikeCountUpdateData.placeholderLikeCountValuesKey,
      update_delay_loop_id: data.dynamicLikeCountUpdateData.updateDelayLoopId,
      update_delay_sec: data.dynamicLikeCountUpdateData.updateDelaySec
    };
  }
}