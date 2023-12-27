import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import ToggleButtonView from './ToggleButtonView.ts';

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