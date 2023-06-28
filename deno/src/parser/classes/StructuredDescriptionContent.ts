import { type ObservedArray, YTNode } from '../helpers.ts';
import Parser, { type RawNode } from '../index.ts';
import ExpandableVideoDescriptionBody from './ExpandableVideoDescriptionBody.ts';
import VideoDescriptionHeader from './VideoDescriptionHeader.ts';
import VideoDescriptionMusicSection from './VideoDescriptionMusicSection.ts';

export default class StructuredDescriptionContent extends YTNode {
  static type = 'StructuredDescriptionContent';

  items: ObservedArray<VideoDescriptionHeader|ExpandableVideoDescriptionBody|VideoDescriptionMusicSection>;

  constructor(data: RawNode) {
    super();
    this.items = Parser.parseArray(data.items, [ VideoDescriptionHeader, ExpandableVideoDescriptionBody, VideoDescriptionMusicSection ]);
  }
}
