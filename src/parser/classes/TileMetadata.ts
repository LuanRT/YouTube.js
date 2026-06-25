import { YTNode, type ObservedArray } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import Line from './Line.js';
import Text from './misc/Text.js';

export default class TileMetadata extends YTNode {
  static type = 'TileMetadata';

  title: Text;
  lines?: ObservedArray<Line>;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.lines = Reflect.has(data, 'lines') ? Parser.parseArray(data.lines, Line) : undefined;
  }
}