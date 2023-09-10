import { YTNode, type ObservedArray } from '../helpers.ts';
import Parser, { type RawNode } from '../index.ts';
import ExpandableVideoDescriptionBody from './ExpandableVideoDescriptionBody.ts';
import HorizontalCardList from './HorizontalCardList.ts';
import VideoDescriptionHeader from './VideoDescriptionHeader.ts';
import VideoDescriptionInfocardsSection from './VideoDescriptionInfocardsSection.ts';
import VideoDescriptionMusicSection from './VideoDescriptionMusicSection.ts';
import type VideoDescriptionTranscriptSection from './VideoDescriptionTranscriptSection.ts';

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