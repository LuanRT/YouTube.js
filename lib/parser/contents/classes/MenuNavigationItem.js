'use strict';

const Button = require('./Button');

class MenuNavigationItem extends Button {
  type = 'menuNavigationItemRenderer';
  
  constructor(data) {
    super(data);
  }
}

module.exports = MenuNavigationItem;