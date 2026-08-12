import NavigationEndpoint from '../NavigationEndpoint.js';
import { YTNode } from '../../helpers.js';
import { Parser } from '../../index.js';
import type { RawNode } from '../../index.js';

export default class UpdateCardItemOnClickCommand extends YTNode {
  static type = 'UpdateCardItemOnClickCommand';

  endpoint: NavigationEndpoint;
  target_id: string;

  constructor(data: RawNode) {
    super();
    this.endpoint = new NavigationEndpoint(data.onClickCommand);
    this.target_id = data.targetId;
  }
}
