import Parser from '../index';
import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';
import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';

class MusicTwoRowItem extends YTNode {
  static type = 'MusicTwoRowItem';

  constructor(data) {
    super();
    this.title = new Text(data.title);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);

    this.id =
      this.endpoint?.browse?.id ||
      this.endpoint?.watch?.video_id;

    this.subtitle = new Text(data.subtitle);
    this.badges = Parser.parse(data.subtitleBadges);

    switch (this.endpoint?.browse?.page_type) {
      case 'MUSIC_PAGE_TYPE_ARTIST':
        this.item_type = 'artist';
        this.subscribers = this.subtitle.runs?.find((run) => /^(\d*\.)?\d+[M|K]? subscribers?$/i.test(run.text))?.text || '';
        break;
      case 'MUSIC_PAGE_TYPE_PLAYLIST':
        this.item_type = 'playlist';
        this.item_count = this.subtitle.runs
          .find((run) => run.text.match(/\d+ songs|song/))?.item || null;

        break;
      case 'MUSIC_PAGE_TYPE_ALBUM':
        this.item_type = 'album';
        const artists = this.subtitle.runs.filter((run) => run.endpoint?.browse?.id.startsWith('UC'));
        if (artists) {
          this.artists = artists.map((artist) => ({
            name: artist.text,
            channel_id: artist.endpoint.browse.id,
            endpoint: artist.endpoint
          }));
        }
        this.year = this.subtitle.runs.slice(-1)[0].text;
        if (isNaN(this.year))
          delete this.year;
        break;
      default:
        if (this.subtitle.runs?.[0]) {
          if (this.subtitle.runs[0].text !== 'Song') {
            this.item_type = 'video';
          } else {
            this.item_type = 'song';
          }
        } else if (this.endpoint) {
          this.item_type = 'endpoint';
        } else {
          this.item_type = 'unknown';
        }

        if (this.item_type == 'video') {
          this.views = this.subtitle.runs
            .find((run) => run?.text.match(/(.*?) views/))?.text || 'N/A';

          const author = this.subtitle.runs.find((run) => run.endpoint?.browse?.id.startsWith('UC'));
          if (author) {
            this.author = {
              name: author.text,
              channel_id: author.endpoint.browse.id,
              endpoint: author.endpoint
            };
          }
        } else if (this.item_type == 'song') {
          const artists = this.subtitle.runs.filter((run) => run.endpoint?.browse?.id.startsWith('UC'));
          if (artists) {
            this.artists = artists.map((artist) => ({
              name: artist.text,
              channel_id: artist.endpoint.browse.id,
              endpoint: artist.endpoint
            }));
          }
        }
        break;
    }

    this.thumbnail = Thumbnail.fromResponse(data.thumbnailRenderer.musicThumbnailRenderer.thumbnail);
    this.thumbnail_overlay = Parser.parse(data.thumbnailOverlay);
    this.menu = Parser.parse(data.menu);
  }
}

export default MusicTwoRowItem;
