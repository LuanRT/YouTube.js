import type { RawNode } from '../types/RawResponse.js';
import { YTNode } from '../helpers.js';
import { Parser } from '../index.js';

import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import CompactVideo from './CompactVideo.js';
import ExpandableSurveyResponse from './ExpandableSurveyResponse.js';

export default class InlineSurvey extends YTNode {
  static type = 'InlineSurvey';

  public title: Text;
  public subtitle: Text;
  public inline_content: CompactVideo | null;
  public response: ExpandableSurveyResponse | null;
  public dismissal_text: Text;
  public dismissal_endpoint?: NavigationEndpoint;
  public impression_endpoints: NavigationEndpoint[];

  constructor(data: RawNode) {
    super();

    this.title = new Text(data.title);
    this.subtitle = new Text(data.subtitle);
    this.inline_content = Parser.parseItem(data.inlineContent, CompactVideo);
    this.response = Parser.parseItem(data.response, ExpandableSurveyResponse);
    this.dismissal_text = new Text(data.dismissalText);

    if ('dismissalEndpoint' in data)
      this.dismissal_endpoint = new NavigationEndpoint(data.dismissalEndpoint);

    this.impression_endpoints = (data.impressionEndpoints ?? []).map((endpoint: RawNode) => new NavigationEndpoint(endpoint));
  }
}
