import Parser from '..';
import { YTNode } from '../helpers';

import Button from './Button';
import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';

class RecognitionShelf extends YTNode {
  static type = 'RecognitionShelf';

  title: Text;
  subtitle: Text;
  avatars: Thumbnail[];
  button: Button | null;
  surface: string;

  constructor(data: any) {
    super();

    this.title = new Text(data.title);
    this.subtitle = new Text(data.subtitle);
    this.avatars = data.avatars.map((avatar: any) => new Thumbnail(avatar));
    this.button = Parser.parseItem<Button>(data.button, Button);
    this.surface = data.surface;
  }
}

export default RecognitionShelf;