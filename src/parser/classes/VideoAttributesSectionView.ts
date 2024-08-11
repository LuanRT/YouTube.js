import { Parser, type RawNode } from '../index.js';
import { YTNode, type ObservedArray } from '../helpers.js';

import ButtonView from './ButtonView.js';
import VideoAttributeView from './VideoAttributeView.js';

export default class VideoAttributesSectionView extends YTNode {
  static type = 'VideoAttributesSectionView';

  header_title: string;
  header_subtitle: string;
  video_attributes: ObservedArray<VideoAttributeView>;
  previous_button: ButtonView | null;
  next_button: ButtonView | null;

  constructor(data: RawNode) {
    super();
    this.header_title = data.headerTitle;
    this.header_subtitle = data.headerSubtitle;
    this.video_attributes = Parser.parseArray(data.videoAttributeViewModels, VideoAttributeView);
    this.previous_button = Parser.parseItem(data.previousButton, ButtonView);
    this.next_button = Parser.parseItem(data.nextButton, ButtonView);
  }
}
