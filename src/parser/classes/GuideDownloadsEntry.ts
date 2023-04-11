import GuideEntry from './GuideEntry.js';
import type { RawNode } from '../index.js';

export default class GuideDownloadsEntry extends GuideEntry {
  static type = 'GuideDownloadsEntry';

  always_show: boolean;

  constructor(data: RawNode) {
    super(data.entryRenderer.guideEntryRenderer);
    this.always_show = !!data.alwaysShow;
  }
}