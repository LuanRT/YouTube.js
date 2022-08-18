import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';
import Parser from '../index';
import { YTNode } from '../helpers';

class MusicDetailHeader extends YTNode {
  static type = 'MusicDetailHeader';

  constructor(data) {
    super();
    this.title = new Text(data.title);
    this.description = new Text(data.description);
    this.subtitle = new Text(data.subtitle);
    this.second_subtitle = new Text(data.secondSubtitle);
    this.year = this.subtitle.runs.find((run) => (/^[12][0-9]{3}$/).test(run.text))?.text || null;
    this.song_count = this.second_subtitle.runs[0].text;
    this.total_duration = this.second_subtitle.runs[2]?.text || '';
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail.croppedSquareThumbnailRenderer.thumbnail);
    this.badges = Parser.parse(data.subtitleBadges);

    const author = this.subtitle.runs.find((run) => run.endpoint?.browse?.id.startsWith('UC'));

    if (author) {
      this.author = {
        name: author.text,
        channel_id: author.endpoint.browse.id,
        endpoint: author.endpoint
      };
    }

    this.menu = Parser.parse(data.menu);
  }
}

export default MusicDetailHeader;