import { Parser, type RawNode } from '../index.js';
import { YTNode } from '../helpers.js';
import Button from './Button.js';
import RatingSurvey from './RatingSurvey.js';

export default class ExpandableSurveyResponse extends YTNode {
  static type = 'ExpandableSurveyResponse';

  public options: RatingSurvey | null;
  public submit_button: Button | null;

  constructor(data: RawNode) {
    super();
    this.options = Parser.parseItem(data.options, RatingSurvey);
    this.submit_button = Parser.parseItem(data.submitButton, Button);
  }
}

ExpandableSurveyResponse.prototype.type = 'ExpandableSurveyResponse';
