import type { ObservedArray } from '../helpers.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import { Parser } from '../index.js';
import StructuredDescriptionPlaylistLockup from './StructuredDescriptionPlaylistLockup.js';
import Text from './misc/Text.js';

export default class VideoDescriptionCourseSection extends YTNode {
  static type = 'VideoDescriptionCourseSection';

  section_title: Text;
  media_lockups: ObservedArray<StructuredDescriptionPlaylistLockup>;

  constructor(data: RawNode) {
    super();
    this.section_title = new Text(data.sectionTitle);
    this.media_lockups = Parser.parseArray(data.mediaLockups, [ StructuredDescriptionPlaylistLockup ]);
  }
}