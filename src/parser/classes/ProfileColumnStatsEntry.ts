import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';

class ProfileColumnStatsEntry extends YTNode {
  static type = 'ProfileColumnStatsEntry';

  label: Text;
  value: Text;

  constructor(data: any) {
    super();
    this.label = new Text(data.label);
    this.value = new Text(data.value);
  }
}

export default ProfileColumnStatsEntry;