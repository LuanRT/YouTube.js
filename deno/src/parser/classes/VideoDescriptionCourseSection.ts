import type { ObservedArray} from '../helpers.ts';
import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import Parser from '../index.ts';
import StructuredDescriptionPlaylistLockup from './StructuredDescriptionPlaylistLockup.ts';
import Text from './misc/Text.ts';

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