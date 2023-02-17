import Button from '../Button.ts';

class MenuServiceItem extends Button {
  static type = 'MenuServiceItem';

  constructor(data: any) {
    super(data);
  }
}

export default MenuServiceItem;