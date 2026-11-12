import { YTNode } from '../../helpers.js';
import { type RawNode } from '../../index.js';

export type CreatorAchievedTotalSizeAccuracy =
  'UNKNOWN' | 'LOW' | 
  'SEVERAL_PERCENT' | 'EXACT';

export default class TotalSizeInfo extends YTNode {
  static type = 'TotalSizeInfo';

  size: number;
  accuracy?: string;
  achieved_total_size_accuracy?: CreatorAchievedTotalSizeAccuracy;

  constructor(data: RawNode) {
    super();

    this.size = Reflect.has(data, 'size') ? Number(data.size) : 0;

    if (Reflect.has(data, 'accuracy')) {
      this.accuracy = data.accuracy;
    }

    if (Reflect.has(data, 'achievedTotalSizeAccuracy')) {
      this.achieved_total_size_accuracy = data.achievedTotalSizeAccuracy.replace('CREATOR_ACHIEVED_TOTAL_SIZE_ACCURACY_', '');
    }
  }
}
