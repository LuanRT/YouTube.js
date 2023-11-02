import { YTNode, type ObservedArray } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import type NavigationEndpoint from './NavigationEndpoint.js';
import Text from './misc/Text.js';
import type TextRun from './misc/TextRun.js';
import Thumbnail from './misc/Thumbnail.js';

export default class MusicDetailHeader extends YTNode {
  static type = 'MusicDetailHeader';

  title: Text;
  description: Text;
  subtitle: Text;
  second_subtitle: Text;
  year: string;
  song_count: string;
  total_duration: string;
  thumbnails: Thumbnail[];
  badges: ObservedArray<YTNode>;
  author?: {
    name: string;
    channel_id: string | undefined;
    endpoint: NavigationEndpoint | undefined;
  };
  menu: YTNode;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.description = new Text(data.description);
    this.subtitle = new Text(data.subtitle);
    this.second_subtitle = new Text(data.secondSubtitle);
    this.year = this.subtitle.runs?.find((run) => (/^[12][0-9]{3}$/).test(run.text))?.text || '';
    this.song_count = this.second_subtitle.runs?.[0]?.text || '';
    this.total_duration = this.second_subtitle.runs?.[2]?.text || '';
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail.croppedSquareThumbnailRenderer.thumbnail);
    this.badges = Parser.parseArray(data.subtitleBadges);

    const author = this.subtitle.runs?.find((run) => (run as TextRun)?.endpoint?.payload?.browseId.startsWith('UC'));

    if (author) {
      this.author = {
        name: (author as TextRun).text,
        channel_id: (author as TextRun).endpoint?.payload?.browseId,
        endpoint: (author as TextRun).endpoint
      };
    }

    this.menu = Parser.parseItem(data.menu);
  }
}