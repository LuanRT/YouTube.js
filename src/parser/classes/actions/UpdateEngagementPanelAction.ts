import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
import { Parser } from '../../index.js';
import Transcript from '../Transcript.js';

export default class UpdateEngagementPanelAction extends YTNode {
  static type = 'UpdateEngagementPanelAction';

  target_id: string;
  content: Transcript | null;

  constructor(data: RawNode) {
    super();
    this.target_id = data.targetId;
    this.content = Parser.parseItem(data.content, Transcript);
  }
}