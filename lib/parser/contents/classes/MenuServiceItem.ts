'use strict';

const Button = require('./Button');

class MenuServiceItem extends Button {
  type = 'MenuServiceItem';

  constructor(data) {
    super(data);
  }
}

module.exports = MenuServiceItem;