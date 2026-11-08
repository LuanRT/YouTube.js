import { Parser } from '../../index.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
import BackstagePostThread from '../BackstagePostThread.js';

export default class AddBackstagePostAction extends YTNode {
  static type = 'AddBackstagePostAction';

  renderer?: BackstagePostThread;

  constructor(data: RawNode) {
    super();
    this.renderer = Parser.parseItem(data.renderer).as(BackstagePostThread);
  }
}