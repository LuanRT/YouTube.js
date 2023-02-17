import Button from '../Button.ts';

class MenuNavigationItem extends Button {
  static type = 'MenuNavigationItem';

  constructor(data: any) {
    super(data);
  }
}

export default MenuNavigationItem;