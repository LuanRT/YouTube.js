import Text from './misc/Text';
import { YTNode } from '../helpers';

class TextHeader extends YTNode {
  static type = 'TextHeader';
  
  title: Text;
  style: string;
  
  constructor(data: any) {
    super();
    this.title = new Text(data.title);
    this.style = data.style;
  }
}

export default TextHeader;