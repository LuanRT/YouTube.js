import GuideEntry from './GuideEntry.ts';

class GuideDownloadsEntry extends GuideEntry {
  static type = 'GuideDownloadsEntry';

  always_show: boolean;

  constructor(data: any) {
    super(data.entryRenderer.guideEntryRenderer);
    this.always_show = !!data.alwaysShow;
  }
}

export default GuideDownloadsEntry;