import { Parser, type RawNode } from '../index.js';
import { type ObservedArray, YTNode } from '../helpers.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Text from './misc/Text.js';

export default class StructuredDescriptionVideoLockup extends YTNode {
  static type = 'StructuredDescriptionVideoLockup';

  public thumbnail: Thumbnail[];
  public title: Text;
  public short_byline_text?: Text;
  public metadata_details?: Text;
  public endpoint: NavigationEndpoint;
  public length_text?: Text;
  public is_live_video: boolean;
  public disable_navigation_endpoint: boolean;
  public max_lines_title?: number;
  public max_lines_short_byline_text?: number;
  public max_lines_metadata_details?: number;
  public thumbnail_width?: number;
  public aspect_ratio?: number;
  public thumbnail_overlays: ObservedArray<YTNode>;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);

    if ('shortBylineText' in data)
      this.short_byline_text = new Text(data.shortBylineText);

    if ('metadataDetails' in data)
      this.metadata_details = new Text(data.metadataDetails);
    
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);

    if ('lengthText' in data)
      this.length_text = new Text(data.lengthText);

    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
    this.is_live_video = !!data.isLiveVideo;
    this.disable_navigation_endpoint = !!data.disableNavigationEndpoint;
    this.max_lines_title = data.maxLinesTitle;
    this.max_lines_short_byline_text = data.maxLinesShortBylineText;
    this.max_lines_metadata_details = data.maxLinesMetadataDetails;
    this.thumbnail_width = data.thumbnailWidth;
    this.aspect_ratio = data.aspectRatio;
    this.thumbnail_overlays = Parser.parseArray(data.thumbnailOverlays);
  }
}