import type Actions from '../../core/Actions.ts';
import type { ApiResponse } from '../../core/Actions.ts';

import * as Constants from '../../utils/Constants.ts';
import { InnertubeError } from '../../utils/Utils.ts';

import AutomixPreviewVideo from '../classes/AutomixPreviewVideo.ts';
import type Endscreen from '../classes/Endscreen.ts';
import Message from '../classes/Message.ts';
import MicroformatData from '../classes/MicroformatData.ts';
import type MusicCarouselShelf from '../classes/MusicCarouselShelf.ts';
import MusicDescriptionShelf from '../classes/MusicDescriptionShelf.ts';
import type MusicQueue from '../classes/MusicQueue.ts';
import PlayerOverlay from '../classes/PlayerOverlay.ts';
import PlaylistPanel from '../classes/PlaylistPanel.ts';
import type RichGrid from '../classes/RichGrid.ts';
import SectionList from '../classes/SectionList.ts';
import Tab from '../classes/Tab.ts';
import WatchNextTabbedResults from '../classes/WatchNextTabbedResults.ts';

import type NavigationEndpoint from '../classes/NavigationEndpoint.ts';
import type PlayerLiveStoryboardSpec from '../classes/PlayerLiveStoryboardSpec.ts';
import type PlayerStoryboardSpec from '../classes/PlayerStoryboardSpec.ts';
import type { ObservedArray, YTNode } from '../helpers.ts';
import { MediaInfo } from '../../core/mixins/index.ts';

class TrackInfo extends MediaInfo {
  basic_info;
  storyboards?: PlayerStoryboardSpec | PlayerLiveStoryboardSpec;
  endscreen?: Endscreen;

  tabs?: ObservedArray<Tab>;
  current_video_endpoint?: NavigationEndpoint;
  player_overlays?: PlayerOverlay;

  constructor(data: [ApiResponse, ApiResponse?], actions: Actions, cpn: string) {
    super(data, actions, cpn);

    const [ info, next ] = this.page;

    if (!info.microformat?.is(MicroformatData))
      throw new InnertubeError('Invalid microformat', info.microformat);

    this.basic_info = {
      ...info.video_details,
      ...{
        description: info.microformat?.description,
        is_unlisted: info.microformat?.is_unlisted,
        is_family_safe: info.microformat?.is_family_safe,
        url_canonical: info.microformat?.url_canonical,
        tags: info.microformat?.tags
      }
    };

    this.storyboards = info.storyboards;
    this.endscreen = info.endscreen;

    if (next) {
      const tabbed_results = next.contents_memo?.getType(WatchNextTabbedResults)?.[0];

      this.tabs = tabbed_results?.tabs.array().as(Tab);
      this.current_video_endpoint = next.current_video_endpoint;

      // TODO: update PlayerOverlay, YTMusic's is a little bit different.
      this.player_overlays = next.player_overlays?.item().as(PlayerOverlay);
    }
  }

  /**
   * Retrieves contents of the given tab.
   */
  async getTab(title_or_page_type: string): Promise<ObservedArray<YTNode> | SectionList | MusicQueue | RichGrid | Message> {
    if (!this.tabs)
      throw new InnertubeError('Could not find any tab');

    const target_tab =
      this.tabs.get({ title: title_or_page_type }) ||
      this.tabs.matchCondition((tab) => tab.endpoint.payload.browseEndpointContextSupportedConfigs?.browseEndpointContextMusicConfig?.pageType === title_or_page_type) ||
      this.tabs?.[0];

    if (!target_tab)
      throw new InnertubeError(`Tab "${title_or_page_type}" not found`, { available_tabs: this.available_tabs });

    if (target_tab.content)
      return target_tab.content;

    const page = await target_tab.endpoint.call(this.actions, { client: 'YTMUSIC', parse: true });

    if (page.contents?.item().type === 'Message')
      return page.contents.item().as(Message);

    if (!page.contents)
      throw new InnertubeError('Page contents was empty', page);

    return page.contents.item().as(SectionList).contents;
  }

  /**
   * Retrieves up next.
   */
  async getUpNext(automix = true): Promise<PlaylistPanel> {
    const music_queue = await this.getTab('Up next') as MusicQueue;

    if (!music_queue || !music_queue.content)
      throw new InnertubeError('Music queue was empty, the video id is probably invalid.', music_queue);

    const playlist_panel = music_queue.content.as(PlaylistPanel);

    if (!playlist_panel.playlist_id && automix) {
      const automix_preview_video = playlist_panel.contents.firstOfType(AutomixPreviewVideo);

      if (!automix_preview_video)
        throw new InnertubeError('Automix item not found');

      const page = await automix_preview_video.playlist_video?.endpoint.call(this.actions, {
        videoId: this.basic_info.id,
        client: 'YTMUSIC',
        parse: true
      });

      if (!page || !page.contents_memo)
        throw new InnertubeError('Could not fetch automix');

      return page.contents_memo.getType(PlaylistPanel)?.[0];
    }

    return playlist_panel;
  }

  /**
   * Retrieves related content.
   */
  async getRelated(): Promise<ObservedArray<MusicCarouselShelf | MusicDescriptionShelf>> {
    const tab = await this.getTab('MUSIC_PAGE_TYPE_TRACK_RELATED') as ObservedArray<MusicDescriptionShelf | MusicDescriptionShelf>;
    return tab;
  }

  /**
   * Retrieves lyrics.
   */
  async getLyrics(): Promise<MusicDescriptionShelf | undefined> {
    const tab = await this.getTab('MUSIC_PAGE_TYPE_TRACK_LYRICS') as ObservedArray<MusicCarouselShelf | MusicDescriptionShelf>;
    return tab.firstOfType(MusicDescriptionShelf);
  }

  /**
   * Adds the song to the watch history.
   */
  async addToWatchHistory(): Promise<Response> {
    return super.addToWatchHistory(Constants.CLIENTS.YTMUSIC.NAME, Constants.CLIENTS.YTMUSIC.VERSION, 'https://music.');
  }

  get available_tabs(): string[] {
    return this.tabs ? this.tabs.map((tab) => tab.title) : [];
  }
}

export default TrackInfo;