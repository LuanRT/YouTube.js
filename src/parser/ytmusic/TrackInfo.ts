import Parser, { ParsedResponse } from '..';
import Actions, { AxioslikeResponse } from '../../core/Actions';
import Constants from '../../utils/Constants';
import { InnertubeError } from '../../utils/Utils';

import Tab from '../classes/Tab';
import Tabbed from '../classes/Tabbed';
import WatchNextTabbedResults from '../classes/WatchNextTabbedResults';
import SingleColumnMusicWatchNextResults from '../classes/SingleColumnMusicWatchNextResults';
import MicroformatData from '../classes/MicroformatData';
import PlayerOverlay from '../classes/PlayerOverlay';
import PlaylistPanel from '../classes/PlaylistPanel';
import SectionList from '../classes/SectionList';
import MusicQueue from '../classes/MusicQueue';
import MusicCarouselShelf from '../classes/MusicCarouselShelf';
import MusicDescriptionShelf from '../classes/MusicDescriptionShelf';
import AutomixPreviewVideo from '../classes/AutomixPreviewVideo';
import Message from '../classes/Message';

import { ObservedArray } from '../helpers';

class TrackInfo {
  #page: [ ParsedResponse, ParsedResponse? ];
  #actions: Actions;
  #cpn;

  basic_info;
  streaming_data;
  playability_status;
  storyboards;
  endscreen;

  #playback_tracking;

  tabs;
  current_video_endpoint;
  player_overlays;

  constructor(data: [AxioslikeResponse, AxioslikeResponse?], actions: Actions, cpn: string) {
    this.#actions = actions;

    const info = Parser.parseResponse(data[0].data);
    const next = data?.[1]?.data ? Parser.parseResponse(data[1].data) : undefined;

    this.#page = [ info, next ];
    this.#cpn = cpn;

    if (info.playability_status?.status === 'ERROR')
      throw new InnertubeError('This video is unavailable', info.playability_status);

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

    this.streaming_data = info.streaming_data;
    this.playability_status = info.playability_status;
    this.storyboards = info.storyboards;
    this.endscreen = info.endscreen;

    this.#playback_tracking = info.playback_tracking;

    if (next) {
      const single_col = next.contents.item().as(SingleColumnMusicWatchNextResults);
      const tabbed_results = single_col.contents.item().as(Tabbed).contents.item().as(WatchNextTabbedResults);

      this.tabs = tabbed_results.tabs.array().as(Tab);
      this.current_video_endpoint = next.current_video_endpoint;

      // TODO: update PlayerOverlay, YTMusic's is a little bit different.
      this.player_overlays = next.player_overlays.item().as(PlayerOverlay);
    }
  }

  /**
   * Retrieves contents of the given tab.
   */
  async getTab(title: string) {
    if (!this.tabs)
      throw new InnertubeError('Could not find any tab');

    const target_tab = this.tabs.get({ title });

    if (!target_tab)
      throw new InnertubeError(`Tab "${title}" not found`, { available_tabs: this.available_tabs });

    if (target_tab.content)
      return target_tab.content;

    const page = await target_tab.endpoint.callTest(this.#actions, { client: 'YTMUSIC', parse: true });

    if (page.contents.item().key('type').string() === 'Message')
      return page.contents.item().as(Message);

    return page.contents.item().as(SectionList).contents.array();
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

      const page = await automix_preview_video.playlist_video?.endpoint.callTest(this.#actions, {
        videoId: this.basic_info.id,
        client: 'YTMUSIC',
        parse: true
      });

      if (!page)
        throw new InnertubeError('Could not fetch automix');

      return page.contents_memo.getType(PlaylistPanel)?.[0];
    }

    return playlist_panel;
  }

  /**
   * Retrieves related content.
   */
  async getRelated(): Promise<ObservedArray<MusicCarouselShelf | MusicDescriptionShelf>> {
    const tab = await this.getTab('Related') as ObservedArray<MusicDescriptionShelf | MusicDescriptionShelf>;
    return tab;
  }

  /**
   * Retrieves lyrics.
   */
  async getLyrics(): Promise<MusicDescriptionShelf | undefined> {
    const tab = await this.getTab('Lyrics') as ObservedArray<MusicCarouselShelf | MusicDescriptionShelf>;
    return tab.firstOfType(MusicDescriptionShelf);
  }

  /**
   * Adds the song to the watch history.
   */
  async addToWatchHistory() {
    if (!this.#playback_tracking)
      throw new InnertubeError('Playback tracking not available');

    const url_params = {
      cpn: this.#cpn,
      fmt: 251,
      rtn: 0,
      rt: 0
    };

    const url = this.#playback_tracking.videostats_playback_url.replace('https://s.', 'https://music.');

    const response = await this.#actions.stats(url, {
      client_name: Constants.CLIENTS.YTMUSIC.NAME,
      client_version: Constants.CLIENTS.YTMUSIC.VERSION
    }, url_params);

    return response;
  }

  get available_tabs(): string[] {
    return this.tabs ? this.tabs.map((tab) => tab.title) : [];
  }

  get page() {
    return this.#page;
  }
}

export default TrackInfo;