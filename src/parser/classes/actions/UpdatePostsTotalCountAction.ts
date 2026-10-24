import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../types/RawResponse.js';

export default class UpdatePostsTotalCountAction extends YTNode {
  static type = 'UpdatePostsTotalCountAction';

  update_type?: 'UNKNOWN'|'ADD'|'REMOVE';
  number?: number;

  constructor(data: RawNode) {
    super();

    if (Reflect.has(data, 'updateType')) {
      this.update_type = data.updateType.replace('UPDATE_POSTS_TOTAL_COUNT_TYPE_', '');
    }

    if (Reflect.has(data, 'number')) {
      this.number = data.number;
    }
  }
}