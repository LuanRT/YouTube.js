// TODO: refactor this

import Parser from '../index';
import Text from './misc/Text';
import TextRun from './misc/TextRun';
import Thumbnail from './misc/Thumbnail';
import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';

class MusicTwoRowItem extends YTNode {
  static type = 'MusicTwoRowItem';

  title: Text;
  endpoint: NavigationEndpoint;
  id: string | undefined;
  subtitle: Text;
  badges;

  item_type: string;

  subscribers?: string;
  item_count?: string | null;
  year?: string;
  views?: string;

  artists?: {
    name: string;
    channel_id: string;
    endpoint: NavigationEndpoint | undefined;
  }[];

  author?: {
    name: string;
    channel_id: string;
    endpoint: NavigationEndpoint | undefined;
  };

  thumbnail: Thumbnail[];
  thumbnail_overlay;
  menu;

  constructor(data: any) {
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
        this.subscribers = this.subtitle.runs?.find((run) => (/^(\d*\.)?\d+[M|K]? subscribers?$/i).test(run.text))?.text || '';
        break;
      case 'MUSIC_PAGE_TYPE_PLAYLIST':
        this.item_type = 'playlist';

        const item_count_run = this.subtitle.runs?.find((run) => run.text.match(/\d+ songs|song/));
        this.item_count = item_count_run ? (item_count_run as TextRun).text : null;

        break;
      case 'MUSIC_PAGE_TYPE_ALBUM':
        this.item_type = 'album';
        const artists = this.subtitle.runs?.filter((run: any) => run.endpoint?.browse?.id.startsWith('UC'));
        if (artists) {
          this.artists = artists.map((artist: any) => ({
            name: artist.text,
            channel_id: artist.endpoint.browse.id,
            endpoint: artist.endpoint
          }));
        }
        this.year = this.subtitle.runs?.slice(-1)[0].text;
        if (isNaN(Number(this.year)))
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
          this.views = this?.subtitle.runs?.find((run) => run?.text.match(/(.*?) views/))?.text || 'N/A';

          const author = this.subtitle.runs?.find((run: any) => run.endpoint?.browse?.id?.startsWith('UC'));
          if (author) {
            this.author = {
              name: (author as TextRun)?.text,
              channel_id: (author as TextRun)?.endpoint?.browse?.id,
              endpoint: (author as TextRun)?.endpoint
            };
          }
        } else if (this.item_type == 'song') {
          const artists = this.subtitle.runs?.filter((run: any) => run.endpoint?.browse?.id.startsWith('UC'));
          if (artists) {
            this.artists = artists.map((artist: any) => ({
              name: (artist as TextRun)?.text,
              channel_id: (artist as TextRun)?.endpoint?.browse?.id,
              endpoint: (artist as TextRun)?.endpoint
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