import { YTNode, type ObservedArray } from '../helpers.js';
import Parser, { type RawNode } from '../index.js';
import ExpandableVideoDescriptionBody from './ExpandableVideoDescriptionBody.js';
import VideoDescriptionHeader from './VideoDescriptionHeader.js';
import VideoDescriptionInfocardsSection from './VideoDescriptionInfocardsSection.js';
import VideoDescriptionMusicSection from './VideoDescriptionMusicSection.js';

export default class StructuredDescriptionContent extends YTNode {
  static type = 'StructuredDescriptionContent';

  items: ObservedArray<VideoDescriptionHeader | ExpandableVideoDescriptionBody | VideoDescriptionMusicSection | VideoDescriptionInfocardsSection>;

  constructor(data: RawNode) {
    super();
    this.items = Parser.parseArray(data.items, [ VideoDescriptionHeader, ExpandableVideoDescriptionBody, VideoDescriptionMusicSection, VideoDescriptionInfocardsSection ]);
  }
}