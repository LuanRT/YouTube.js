'use strict';

const { observe } = require('../../utils/Utils');

class SortFilterSubMenu {
  type = 'SortFilterSubMenu';

  constructor(data) {
    this.sub_menu_items = observe(data.subMenuItems.map((item) => ({
      title: item.title,
      selected: item.selected,
      continuation: item.continuation?.reloadContinuationData.continuation,
      subtitle: item.subtitle
    })));

    this.label = data.accessibility.accessibilityData.label;
  }
}

module.exports = SortFilterSubMenu;