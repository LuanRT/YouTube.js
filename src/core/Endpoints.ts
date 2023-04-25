import {
  IPlayerRequest, PlayerEndpointOptions,
  INextRequest, NextEndpointOptions,
  IBrowseRequest, BrowseEndpointOptions,
  ISearchRequest, SearchEndpointOptions,
  IResolveUrlRequest, ResolveUrlEndpointOptions,
  IGetNotificationMenuRequest, GetNotificationMenuEndpointOptions,
  IMusicGetSearchSuggestionsRequest, MusicGetSearchSuggestionsEndpointOptions
} from '../types/index.js';

/**
 * Represents InnerTube's `/player` endpoint.
 * @example
 * ```typescript
 * const player_payload = PlayerEndpoint.build({
 *  video_id: 'dQw4w9WgXcQ',
 *  client: 'ANDROID'
 * });
 *
 * const response = await yt.actions.execute(PlayerEndpoint.PATH, player_payload);
 * console.log(response);
 * ```
 */
export const PlayerEndpoint = {
  PATH: '/player' as const,
  /**
   * Builds a `/player` request payload.
   * @param opts - The options to use.
   * @returns The payload.
   */
  build(opts: PlayerEndpointOptions): IPlayerRequest {
    return {
      playbackContext: {
        contentPlaybackContext: {
          vis: 0,
          splay: false,
          referer: opts.playlist_id ?
            `https://www.youtube.com/watch?v=${opts.video_id}&list=${opts.playlist_id}` :
            `https://www.youtube.com/watch?v=${opts.video_id}`,
          currentUrl: opts.playlist_id ?
            `/watch?v=${opts.video_id}&list=${opts.playlist_id}` :
            `/watch?v=${opts.video_id}`,
          autonavState: 'STATE_ON',
          autoCaptionsDefaultOn: false,
          html5Preference: 'HTML5_PREF_WANTS',
          lactMilliseconds: '-1',
          ...{
            signatureTimestamp: opts.sts
          }
        }
      },
      racyCheckOk: true,
      contentCheckOk: true,
      videoId: opts.video_id,
      ...{
        client: opts.client,
        playlistId: opts.playlist_id
      }
    };
  }
};

/**
 * Represents InnerTube's `/next` endpoint.
 * @example
 * ```typescript
 * const next_payload = NextRequest.build({
 *  video_id: 'dQw4w9WgXcQ',
 *  client: 'ANDROID'
 * });
 *
 * const response = await yt.actions.execute(NextEndpoint.PATH, next_payload);
 * console.log(response);
 * ```
 */
export const NextEndpoint = {
  PATH: '/next' as const,
  build: (opts: NextEndpointOptions): INextRequest => {
    return {
      ...{
        videoId: opts.video_id,
        playlistId: opts.playlist_id,
        params: opts.params,
        playlistIndex: opts.playlist_index,
        client: opts.client,
        continuation: opts.continuation
      }
    };
  }
};

/**
 * Represents InnerTube's `/browse` endpoint.
 * @example
 * ```typescript
 * const browse_payload = BrowseEndpoint.build({
 *   browse_id: 'FEtrending'
 * });
 *
 * const response = await yt.actions.execute(BrowseEndpoint.PATH, browse_payload);
 * console.log(response);
 * ```
 */
export const BrowseEndpoint = {
  PATH: '/browse' as const,

  /**
   * Builds a `/browse` request payload.
   * @param opts - The options to use.
   * @returns The payload.
   */
  build: (opts: BrowseEndpointOptions): IBrowseRequest => {
    return {
      ...{
        browseId: opts.browse_id,
        params: opts.params,
        continuation: opts.continuation,
        client: opts.client
      }
    };
  }
};

/**
 * Represents InnerTube's `/search` endpoint.
 * @example
 * ```typescript
 * const search_payload = SearchEndpoint.build({
 *   query: 'Minecraft Subwoofer Lullaby'
 * });
 *
 * const response = await yt.actions.execute(SearchEndpoint.PATH, search_payload);
 * console.log(response);
 * ```
 */
export const SearchEndpoint = {
  PATH: '/search' as const,

  /**
   * Builds a `/search` request payload.
   * @param opts - The options to use.
   * @returns The payload.
   */
  build(opts: SearchEndpointOptions): ISearchRequest {
    return {
      ...{
        query: opts.query,
        params: opts.params,
        continuation: opts.continuation,
        client: opts.client
      }
    };
  }
};

/**
 * Represents InnerTube's `/navigation/resolve_url` endpoint.
 * @example
 * ```typescript
 * const resolve_url_payload = ResolveUrlEndpoint.build({
 *  url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
 * });
 *
 * const response = await yt.actions.execute(ResolveUrlEndpoint.PATH, resolve_url_payload);
 * console.log(response);
 * ```
 */
export const ResolveUrlEndpoint = {
  PATH: '/navigation/resolve_url' as const,
  /**
   * Builds a `/resolve_url` request payload.
   * @param opts - The options to use.
   * @returns The payload.
   */
  build(opts: ResolveUrlEndpointOptions): IResolveUrlRequest {
    return {
      ...{
        url: opts.url
      }
    };
  }
};

/**
 * Represents InnerTube's `/notification/get_notification_menu` endpoint.
 * @example
 * ```typescript
 * const get_notification_menu_payload = GetNotificationMenuEndpoint.build({
 *   notifications_menu_request_type: 'NOTIFICATIONS_MENU_REQUEST_TYPE_INBOX'
 * });
 *
 * const response = await yt.actions.execute(GetNotificationMenuEndpoint.PATH, get_notification_menu_payload);
 * console.log(response);
 * ```
 */
export const GetNotificationMenuEndpoint = {
  PATH: '/notification/get_notification_menu' as const,
  /**
   * Builds a `/get_notification_menu` request payload.
   * @param opts - The options to use.
   * @returns The payload.
   */
  build(opts: GetNotificationMenuEndpointOptions): IGetNotificationMenuRequest {
    return {
      ...{
        notificationsMenuRequestType: opts.notifications_menu_request_type
      }
    };
  }
};

/**
 * Represents InnerTube's `/notification/get_unseen_count` endpoint.
 * @example
 * ```typescript
 * const response = await yt.actions.execute(NotificationGetUnseenCountEndpoint.PATH);
 * console.log(response);
 * ```
 */
export const NotificationGetUnseenCountEndpoint = {
  PATH: '/notification/get_unseen_count' as const
};

/**
 * Represents InnerTube's `/music/get_search_suggestions` endpoint.
 * @example
 * ```typescript
 * const search_payload = MusicGetSearchSuggestionsEndpoint.build({
 *  input: 'Minecraft Subwoofer Lullaby'
 * });
 *
 * const response = await yt.actions.execute(MusicGetSearchSuggestionsEndpoint.PATH, search_payload);
 * console.log(response);
 * ```
 */
export const MusicGetSearchSuggestionsEndpoint = {
  PATH: '/music/get_search_suggestions' as const,

  /**
   * Builds a `/music/get_search_suggestions` request payload.
   * @param opts - The options to use.
   * @returns The payload.
   */
  build(opts: MusicGetSearchSuggestionsEndpointOptions): IMusicGetSearchSuggestionsRequest {
    return {
      input: opts.input,
      client: 'YTMUSIC'
    };
  }
};

/**
 * Represents InnerTube's `/guide` endpoint.
 * @example
 * ```typescript
 * const response = await yt.actions.execute(GuideEndpoint.PATH);
 * console.log(response);
 * ```
 */
export const GuideEndpoint = {
  PATH: '/guide' as const
};