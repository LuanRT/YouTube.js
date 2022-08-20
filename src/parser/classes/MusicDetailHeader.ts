import Text from './misc/Text';
import TextRun from './misc/TextRun';
import Thumbnail from './misc/Thumbnail';
import NavigationEndpoint from './NavigationEndpoint';
import Parser from '../index';
import { YTNode } from '../helpers';

class MusicDetailHeader extends YTNode {
  static type = 'MusicDetailHeader';

  title: Text;
  description: Text;
  subtitle: Text;
  second_subtitle: Text;
  year: string;
  song_count: string;
  total_duration: string;
  thumbnails: Thumbnail[];
  badges;
  author?: {
    name: string;
    channel_id: string;
    endpoint: NavigationEndpoint | undefined;
  };
  menu;

  constructor(data: any) {
    super();
    this.title = new Text(data.title);
    this.description = new Text(data.description);
    this.subtitle = new Text(data.subtitle);
    this.second_subtitle = new Text(data.secondSubtitle);
    this.year = this.subtitle.runs?.find((run) => (/^[12][0-9]{3}$/).test(run.text))?.text || '';
    this.song_count = this.second_subtitle.runs?.[0]?.text || '';
    this.total_duration = this.second_subtitle.runs?.[2]?.text || '';
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail.croppedSquareThumbnailRenderer.thumbnail);
    this.badges = Parser.parse(data.subtitleBadges);

    const author = this.subtitle.runs?.find((run) => (run as TextRun)?.endpoint?.browse?.id.startsWith('UC'));

    if (author) {
      this.author = {
        name: (author as TextRun).text,
        channel_id: (author as TextRun).endpoint?.browse?.id,
        endpoint: (author as TextRun).endpoint
      };
    }

    this.menu = Parser.parse(data.menu);
  }
}

export default MusicDetailHeader;