import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../types/index.js';

export default class SendFeedbackAction extends YTNode {
  static type = 'SendFeedbackAction';
  
  public bucket: string;
  
  constructor(data: RawNode) {
    super();
    this.bucket = data.bucket;
  }
}