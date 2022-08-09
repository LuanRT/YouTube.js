import Parser from '../index';
import { YTNode } from '../helpers';

class Tabbed extends YTNode {
  static type = 'Tabbed';
  
  contents;
  
  constructor(data: any) {
    super();
    // TODO: use parseArray instead 
    this.contents = Parser.parse(data);
  }
}

export default Tabbed;