import Text from './misc/Text.ts';
import { YTNode } from '../helpers.ts';

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