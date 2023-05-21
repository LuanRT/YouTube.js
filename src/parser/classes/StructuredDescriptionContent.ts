import { type ObservedArray, YTNode } from '../helpers.js';
import Parser, { type RawNode } from '../index.js';
import ExpandableVideoDescriptionBody from './ExpandableVideoDescriptionBody.js';
import VideoDescriptionHeader from './VideoDescriptionHeader.js';
import VideoDescriptionMusicSection from './VideoDescriptionMusicSection.js';

export default class StructuredDescriptionContent extends YTNode {
  static type = 'StructuredDescriptionContent';

  items: ObservedArray<VideoDescriptionHeader|ExpandableVideoDescriptionBody|VideoDescriptionMusicSection>;

  constructor(data: RawNode) {
    super();
    this.items = data.items.map((item: YTNode) => {
      return Parser.parseItem(item, [ VideoDescriptionHeader, ExpandableVideoDescriptionBody, VideoDescriptionMusicSection ]);
    });
  }
}
