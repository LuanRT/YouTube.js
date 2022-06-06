'use strict';

const Button = require('./Button');

class MenuServiceItem extends Button {
  type = 'menuServiceItemRenderer';
  
  constructor(data) {
    super(data);
  }
}

module.exports = MenuServiceItem;