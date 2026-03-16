import type { ObservedArray } from '../helpers.ts';
import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import DislikeButtonView from './DislikeButtonView.ts';
import LikeButtonView from './LikeButtonView.ts';
import VideoSummaryParagraphView from './VideoSummaryParagraphView.ts';

export default class VideoSummaryContentView extends YTNode {
  static type = 'VideoSummaryContentView';

  public dislike_button_view?: DislikeButtonView | null;
  public like_button_view?: LikeButtonView | null;
  public paragraphs: ObservedArray<VideoSummaryParagraphView>;

  constructor(data: RawNode) {
    super();

    if ('dislikeButtonViewModel' in data) {
      this.dislike_button_view = Parser.parseItem(data.dislikeButtonViewModel, DislikeButtonView);
    }

    if ('likeButtonViewModel' in data) {
      this.like_button_view = Parser.parseItem(data.likeButtonViewModel, LikeButtonView);
    }

    this.paragraphs = Parser.parseArray(data.paragraphs, VideoSummaryParagraphView);
  }
}