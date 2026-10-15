import Text from './misc/Text.js';
import { type RawNode } from '../index.js';
import { YTNode } from '../helpers.js';

export default class AvatarLockup extends YTNode {
  static type = 'AvatarLockup';

  title: Text;
  size: string;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.size = data.size;
  }
}