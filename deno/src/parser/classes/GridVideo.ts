import { YTNode, type ObservedArray } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import Menu from './menus/Menu.ts';
import Author from './misc/Author.ts';
import Text from './misc/Text.ts';
import Thumbnail from './misc/Thumbnail.ts';

export default class GridVideo extends YTNode {
  static type = 'GridVideo';

  id: string;
  title: Text;
  thumbnails: Thumbnail[];
  thumbnail_overlays: ObservedArray<YTNode>;
  rich_thumbnail: YTNode;
  published: Text;
  duration: Text | null;
  author: Author;
  views: Text;
  short_view_count: Text;
  endpoint: NavigationEndpoint;
  menu: Menu | null;
  buttons?: ObservedArray<YTNode>;
  upcoming?: Date;
  upcoming_text?: Text;
  is_reminder_set?: boolean;

  constructor(data: RawNode) {
    super();
    const length_alt = data.thumbnailOverlays.find((overlay: RawNode) => overlay.hasOwnProperty('thumbnailOverlayTimeStatusRenderer'))?.thumbnailOverlayTimeStatusRenderer;

    this.id = data.videoId;
    this.title = new Text(data.title);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.thumbnail_overlays = Parser.parseArray(data.thumbnailOverlays);
    this.rich_thumbnail = Parser.parseItem(data.richThumbnail);
    this.published = new Text(data.publishedTimeText);
    this.duration = data.lengthText ? new Text(data.lengthText) : length_alt?.text ? new Text(length_alt.text) : null;
    this.author = data.shortBylineText && new Author(data.shortBylineText, data.ownerBadges);
    this.views = new Text(data.viewCountText);
    this.short_view_count = new Text(data.shortViewCountText);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.menu = Parser.parseItem(data.menu, Menu);

    if (Reflect.has(data, 'buttons')) {
      this.buttons = Parser.parseArray(data.buttons);
    }

    if (Reflect.has(data, 'upcomingEventData')) {
      this.upcoming = new Date(Number(`${data.upcomingEventData.startTime}000`));
      this.upcoming_text = new Text(data.upcomingEventData.upcomingEventText);
      this.is_reminder_set = !!data.upcomingEventData?.isReminderSet;
    }
  }

  get is_upcoming(): boolean {
    return Boolean(this.upcoming && this.upcoming > new Date());
  }
}