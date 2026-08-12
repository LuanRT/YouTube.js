import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import { NavigateAction, Parser } from '../index.js';
import CardItemText from './CardItemText.js';
import CardItemTextCollection from './CardItemTextCollection.js';
import ThemedImage from './ThemedImage.js';

export default class ActivityItem extends YTNode {
  static type = 'ActivityItem';

  image: ThemedImage | null;
  title: CardItemText | null;
  subtitle: CardItemText | null;
  section_heading: CardItemText | null;
  metadata: CardItemTextCollection | null;
  on_tap: NavigateAction | null;

  constructor(data: RawNode) {
    super();
    this.image = Parser.parseItem(data.image, ThemedImage);
    this.title = Parser.parseItem(data.title, CardItemText);
    this.subtitle = Parser.parseItem(data.subtitle, CardItemText);
    this.section_heading = Parser.parseItem(data.sectionHeading, CardItemText);
    this.metadata = Parser.parseItem(data.activityMetadata, CardItemTextCollection);
    this.on_tap = data.onTap
      ? new NavigateAction(data.onTap.navigateAction)
      : null;
  }
}
