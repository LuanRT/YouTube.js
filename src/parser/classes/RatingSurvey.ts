import { Parser, type RawNode } from '../index.js';
import { type ObservedArray, YTNode } from '../helpers.js';
import Button from './Button.js';
import RatingSurveyOption from './RatingSurveyOption.js';

export default class RatingSurvey extends YTNode {
  static type = 'RatingSurvey';

  public ratings: ObservedArray<RatingSurveyOption>;
  public undo_button: Button | null;

  constructor(data: RawNode) {
    super();
    this.ratings = Parser.parse(data.ratings, true, RatingSurveyOption);
    this.undo_button = Parser.parseItem(data.undoButton, Button);
  }
}

RatingSurvey.prototype.type = 'RatingSurvey';
