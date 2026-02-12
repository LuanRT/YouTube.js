import { YTNode, type ObservedArray } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import Button from './Button.js';
import ToggleButton from './ToggleButton.js';
import Line from './Line.js';
import Text from './misc/Text.js';

export default class EntityMetadata extends YTNode {
  static type = 'EntityMetadata';

  title: Text;
  description: Text;
  buttons: ObservedArray<Button | ToggleButton>;
  bylines: ObservedArray<Line>;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.description = new Text(data.description);
    this.buttons = Parser.parseArray(data.buttons, [ Button, ToggleButton ]);
    this.bylines = Parser.parseArray(data.bylines, Line);
  }
}