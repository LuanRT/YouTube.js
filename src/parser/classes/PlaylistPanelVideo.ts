import Parser from '../index';
import Text from './misc/Text';
import TextRun from './misc/TextRun';
import Thumbnail from './misc/Thumbnail';
import NavigationEndpoint from './NavigationEndpoint';
import { timeToSeconds } from '../../utils/Utils';

import { YTNode } from '../helpers';

class PlaylistPanelVideo extends YTNode {
  static type = 'PlaylistPanelVideo';

  title: Text;
  thumbnail: Thumbnail[];
  endpoint: NavigationEndpoint;
  selected: boolean;
  video_id: string;

  duration: {
    text: string;
    seconds: number
  };

  author: string;

  album?: {
    id: string | undefined;
    name: string;
    year: string | undefined;
    endpoint: NavigationEndpoint | undefined;
  };

  artists?: {
    name: string;
    channel_id: string | undefined;
    endpoint: NavigationEndpoint | undefined;
  }[];

  badges;
  menu;
  set_video_id: string | undefined;

  constructor(data: any) {
    super();

    this.title = new Text(data.title);
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.selected = data.selected;
    this.video_id = data.videoId;

    this.duration = {
      text: new Text(data.lengthText).toString(),
      seconds: timeToSeconds(new Text(data.lengthText).toString())
    };

    const album = new Text(data.longBylineText).runs?.find((run: any) => run.endpoint?.payload?.browseId?.startsWith('MPR'));
    const artists = new Text(data.longBylineText).runs?.filter((run: any) => run.endpoint?.payload?.browseId?.startsWith('UC'));

    this.author = new Text(data.shortBylineText).toString();

    if (album) {
      this.album = {
        id: (album as TextRun).endpoint?.payload?.browseId,
        name: (album as TextRun).text,
        year: new Text(data.longBylineText).runs?.slice(-1)[0].text,
        endpoint: (album as TextRun).endpoint
      };
    }

    if (artists) {
      this.artists = artists.map((artist) => ({
        name: (artist as TextRun).text,
        channel_id: (artist as TextRun).endpoint?.payload?.browseId,
        endpoint: (artist as TextRun).endpoint
      }));
    }

    this.badges = Parser.parse(data.badges);
    this.menu = Parser.parse(data.menu);
    this.set_video_id = data.playlistSetVideoId;
  }
}

export default PlaylistPanelVideo;