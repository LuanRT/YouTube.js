import { Constants } from '../../utils/index.js';
import { InnertubeError } from '../../utils/Utils.js';
import { MediaInfo } from '../../core/mixins/index.js';

import Tab from '../classes/Tab.js';
import AutomixPreviewVideo from '../classes/AutomixPreviewVideo.js';
import Message from '../classes/Message.js';
import MusicDescriptionShelf from '../classes/MusicDescriptionShelf.js';
import PlayerOverlay from '../classes/PlayerOverlay.js';
import PlaylistPanel from '../classes/PlaylistPanel.js';
import SectionList from '../classes/SectionList.js';
import WatchNextTabbedResults from '../classes/WatchNextTabbedResults.js';

import type RichGrid from '../classes/RichGrid.js';
import type MusicQueue from '../classes/MusicQueue.js';
import type MusicCarouselShelf from '../classes/MusicCarouselShelf.js';
import NavigationEndpoint from '../classes/NavigationEndpoint.js';
import type { ObservedArray, YTNode } from '../helpers.js';
import type { Actions, ApiResponse } from '../../core/index.js';
import { PlaylistPanelContinuation } from '../continuations.js';

class TrackInfo extends MediaInfo {
  public tabs?: ObservedArray<Tab>;
  public current_video_endpoint?: NavigationEndpoint;
  public player_overlays?: PlayerOverlay;

  constructor(data: [ApiResponse, ApiResponse?], actions: Actions, cpn: string) {
    super(data, actions, cpn);

    const next = this.page[1];

    if (next) {
      const tabbed_results = next.contents_memo?.getType(WatchNextTabbedResults)?.[0];

      this.tabs = tabbed_results?.tabs.as(Tab);
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
      this.tabs.find((tab) => tab.endpoint.payload.browseEndpointContextSupportedConfigs?.browseEndpointContextMusicConfig?.pageType === title_or_page_type) ||
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
   * Retrieves up next continuation relative to current TrackInfo.
   */
  async getUpNextContinuation(playlistPanel: PlaylistPanel | PlaylistPanelContinuation): Promise<PlaylistPanelContinuation> {
    if (!this.current_video_endpoint)
      throw new InnertubeError('Current Video Endpoint was not defined.', this.current_video_endpoint);
    
    if (playlistPanel instanceof PlaylistPanel && playlistPanel.playlist_id !== this.current_video_endpoint.payload.playlistId) {
      throw new InnertubeError('PlaylistId from TrackInfo does not match with PlaylistPanel');
    }
    
    const watch_next_endpoint = new NavigationEndpoint({ watchNextEndpoint: { ...this.current_video_endpoint.payload, continuation: playlistPanel.continuation } });
    const response = await watch_next_endpoint.call(this.actions, { ...this.current_video_endpoint.payload, continuation: playlistPanel.continuation, client: 'YTMUSIC', parse: true });

    const playlistCont = response.continuation_contents?.as(PlaylistPanelContinuation);

    if (!playlistCont)
      throw new InnertubeError('No PlaylistPanel Continuation available.', response);
    
    return playlistCont;
  }

  /**
   * Retrieves related content.
   */
  async getRelated(): Promise<ObservedArray<MusicCarouselShelf | MusicDescriptionShelf>> {
    return await this.getTab('MUSIC_PAGE_TYPE_TRACK_RELATED') as ObservedArray<MusicDescriptionShelf>;
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