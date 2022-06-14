'use strict';

const Button = require('./Button');

class MenuNavigationItem extends Button {
  type = 'MenuNavigationItem';
  
  constructor(data) {
    super(data);
  }
}

module.exports = MenuNavigationItem;