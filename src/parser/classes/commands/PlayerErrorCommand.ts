import { YTNode } from '../../helpers.js';
import { type RawNode } from '../../index.js';
import NavigationEndpoint from '../NavigationEndpoint.js';

export default class PlayerErrorCommand extends YTNode {
  static type = 'PlayerErrorCommand';

  command: NavigationEndpoint | null;

  constructor(data: RawNode) {
    super();
    this.command = data.command ? new NavigationEndpoint(data.command) : null;
  }
}
