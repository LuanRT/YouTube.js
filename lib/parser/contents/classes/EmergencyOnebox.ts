'use strict';

import Text from './Text';
import Parser from '..';

class EmergencyOnebox {
  type = 'EmergencyOnebox';

  constructor(data) {
    this.title = new Text(data.title);
    this.first_option = Parser.parse(data.firstOption);
    this.menu = Parser.parse(data.menu);
  }
}

export default EmergencyOnebox;