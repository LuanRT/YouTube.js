// TODO: Refactor this.

import { YTNode, type SuperParsedResult } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import MusicItemThumbnailOverlay from './MusicItemThumbnailOverlay.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Menu from './menus/Menu.js';
import Text from './misc/Text.js';
import type TextRun from './misc/TextRun.js';
import Thumbnail from './misc/Thumbnail.js';

export default class MusicTwoRowItem extends YTNode {
  static type = 'MusicTwoRowItem';

  title: Text;
  endpoint: NavigationEndpoint;
  id: string | undefined;
  subtitle: Text;
  badges: SuperParsedResult<YTNode> | null;
  item_type: string;
  subscribers?: string;
  item_count?: string | null;
  year?: string;
  views?: string;

  artists?: {
    name: string;
    channel_id: string | undefined;
    endpoint: NavigationEndpoint | undefined;
  }[];

  author?: {
    name: string;
    channel_id: string | undefined;
    endpoint: NavigationEndpoint | undefined;
  };

  thumbnail: Thumbnail[];
  thumbnail_overlay: MusicItemThumbnailOverlay | null;
  menu: Menu | null;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);

    this.id =
      this.endpoint?.payload?.browseId ||
      this.endpoint?.payload?.videoId;

    this.subtitle = new Text(data.subtitle);
    this.badges = Parser.parse(data.subtitleBadges);

    const page_type = this.endpoint?.payload?.browseEndpointContextSupportedConfigs?.browseEndpointContextMusicConfig?.pageType;

    switch (page_type) {
      case 'MUSIC_PAGE_TYPE_ARTIST':
        this.item_type = 'artist';
        break;
      case 'MUSIC_PAGE_TYPE_PLAYLIST':
        this.item_type = 'playlist';
        break;
      case 'MUSIC_PAGE_TYPE_ALBUM':
        this.item_type = 'album';
        break;
      default:
        if (this.endpoint?.metadata?.api_url === '/next') {
          this.item_type = 'endpoint';
        } else if (this.subtitle.runs?.[0]) {
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
        break;
    }

    if (this.item_type == 'artist') {
      this.subscribers = this.subtitle.runs?.find((run) => (/^(\d*\.)?\d+[M|K]? subscribers?$/i).test(run.text))?.text || '';
    } else if (this.item_type == 'playlist') {
      const item_count_run = this.subtitle.runs?.find((run) => run.text.match(/\d+ songs|song/));
      this.item_count = item_count_run ? (item_count_run as TextRun).text : null;
    } else if (this.item_type == 'album') {
      const artists = this.subtitle.runs?.filter((run: any) => run.endpoint?.payload?.browseId.startsWith('UC'));
      if (artists) {
        this.artists = artists.map((artist: any) => ({
          name: artist.text,
          channel_id: artist.endpoint?.payload?.browseId,
          endpoint: artist.endpoint
        }));
      }
      this.year = this.subtitle.runs?.slice(-1)[0].text;
      if (isNaN(Number(this.year)))
        delete this.year;
    } else if (this.item_type == 'video') {
      this.views = this?.subtitle.runs?.find((run) => run?.text.match(/(.*?) views/))?.text || 'N/A';

      const author = this.subtitle.runs?.find((run: any) => run.endpoint?.payload?.browseId?.startsWith('UC'));
      if (author) {
        this.author = {
          name: (author as TextRun)?.text,
          channel_id: (author as TextRun)?.endpoint?.payload?.browseId,
          endpoint: (author as TextRun)?.endpoint
        };
      }
    } else if (this.item_type == 'song') {
      const artists = this.subtitle.runs?.filter((run: any) => run.endpoint?.payload?.browseId.startsWith('UC'));
      if (artists) {
        this.artists = artists.map((artist: any) => ({
          name: (artist as TextRun)?.text,
          channel_id: (artist as TextRun)?.endpoint?.payload?.browseId,
          endpoint: (artist as TextRun)?.endpoint
        }));
      }
    }

    this.thumbnail = Thumbnail.fromResponse(data.thumbnailRenderer.musicThumbnailRenderer.thumbnail);
    this.thumbnail_overlay = Parser.parseItem(data.thumbnailOverlay, MusicItemThumbnailOverlay);
    this.menu = Parser.parseItem(data.menu, Menu);
  }
}