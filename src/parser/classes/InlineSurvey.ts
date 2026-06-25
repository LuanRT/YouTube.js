import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { Parser, type RawNode } from '../index.js';
import { YTNode } from '../helpers.js';
import CompactVideo from './CompactVideo.js';
import ExpandableSurveyResponse from './ExpandableSurveyResponse.js';

export default class InlineSurvey extends YTNode {
  static type = 'InlineSurvey';

  public endpoint: NavigationEndpoint;
  public title: Text;
  public subtitle: Text;
  public inline_content: CompactVideo | null;
  public response: ExpandableSurveyResponse | null;
  public dismissal_text: Text;
  public impression_endpoints: {
    click_tracking_params: string;
    command_metadata: {
      web_command_metadata: {
        send_post: boolean;
        api_url: string;
      };
    };
    feedback_endpoint: NavigationEndpoint;
  }[];

  constructor(data: RawNode) {
    super();
    this.endpoint = new NavigationEndpoint(data.dismissalEndpoint);
    this.title = new Text(data.title);
    this.subtitle = new Text(data.subtitle);
    this.inline_content = Parser.parseItem(data.inlineContent, CompactVideo);
    this.response = Parser.parseItem(data.response, ExpandableSurveyResponse);
    this.dismissal_text = new Text(data.dismissalText);
    this.impression_endpoints = data.impressionEndpoints.map((item: any) => ({
      click_tracking_params: item.clickTrackingParams,
      command_metadata: {
        web_command_metadata: {
          send_post: item.commandMetadata.webCommandMetadata.sendPost,
          api_url: item.commandMetadata.webCommandMetadata.apiUrl
        }
      },
      feedback_endpoint: new NavigationEndpoint(item.feedbackEndpoint)
    }));
  }
}

InlineSurvey.prototype.type = 'InlineSurvey';
