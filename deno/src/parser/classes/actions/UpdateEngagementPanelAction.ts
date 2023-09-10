import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';
import Parser from '../../index.ts';
import Transcript from '../Transcript.ts';

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