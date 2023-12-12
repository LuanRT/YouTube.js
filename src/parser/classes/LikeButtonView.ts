import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import ToggleButtonView from './ToggleButtonView.js';

export default class LikeButtonView extends YTNode {
  static type = 'LikeButtonView';

  toggle_button: ToggleButtonView | null;
  like_status_entity_key: string;
  like_status_entity: {
    key: string,
    like_status: string
  };

  constructor(data: RawNode) {
    super();
    this.toggle_button = Parser.parseItem(data.toggleButtonViewModel, ToggleButtonView);
    this.like_status_entity_key = data.likeStatusEntityKey;
    this.like_status_entity = {
      key: data.likeStatusEntity.key,
      like_status: data.likeStatusEntity.likeStatus
    };
  }
}