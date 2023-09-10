import { YTNode, type ObservedArray } from '../helpers.js';
import Parser, { type RawNode } from '../index.js';
import ExpandableVideoDescriptionBody from './ExpandableVideoDescriptionBody.js';
import HorizontalCardList from './HorizontalCardList.js';
import VideoDescriptionHeader from './VideoDescriptionHeader.js';
import VideoDescriptionInfocardsSection from './VideoDescriptionInfocardsSection.js';
import VideoDescriptionMusicSection from './VideoDescriptionMusicSection.js';
import type VideoDescriptionTranscriptSection from './VideoDescriptionTranscriptSection.js';

export default class StructuredDescriptionContent extends YTNode {
  static type = 'StructuredDescriptionContent';

  items: ObservedArray<
    VideoDescriptionHeader | ExpandableVideoDescriptionBody | VideoDescriptionMusicSection |
    VideoDescriptionInfocardsSection | VideoDescriptionTranscriptSection | HorizontalCardList
  >;

  constructor(data: RawNode) {
    super();
    this.items = Parser.parseArray(data.items, [ VideoDescriptionHeader, ExpandableVideoDescriptionBody, VideoDescriptionMusicSection, VideoDescriptionInfocardsSection, HorizontalCardList ]);
  }
}