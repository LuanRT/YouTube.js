import Text from './misc/Text';
import { YTNode } from '../helpers';

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