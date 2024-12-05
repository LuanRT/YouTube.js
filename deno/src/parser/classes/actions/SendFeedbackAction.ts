import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../types/index.ts';

export default class SendFeedbackAction extends YTNode {
  static type = 'SendFeedbackAction';
  
  public bucket: string;
  
  constructor(data: RawNode) {
    super();
    this.bucket = data.bucket;
  }
}