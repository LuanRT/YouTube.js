import type { InnerTubeClient } from '../Innertube.js';

export interface IPlayerRequest {
  playbackContext: {
    contentPlaybackContext: {
      vis: number;
      splay: boolean;
      referer: string;
      currentUrl: string;
      autonavState: string;
      signatureTimestamp?: number;
      autoCaptionsDefaultOn: boolean;
      html5Preference: string;
      lactMilliseconds: string;
    }
  },
  videoId: string;
  racyCheckOk: boolean;
  contentCheckOk: boolean;
  client?: InnerTubeClient;
  playlistId?: string;
}

export type PlayerEndpointOptions = {
  /**
   * The video ID.
   */
  video_id: string;
  /**
   * The player's signature timestamp.
   */
  sts?: number;
  /**
   * The client to use.
   */
  client?: InnerTubeClient;
  /**
   * The playlist ID.
   */
  playlist_id?: string;
}

export type NextEndpointOptions = {
  /**
   * The video ID.
   */
  video_id?: string;
  /**
   * The playlist associated with the video.
   */
  playlist_id?: string;
  /**
   * Protobuf parameters.
   */
  params?: string;
  /**
   * The playlist index.
   */
  playlist_index?: number;
  /**
   * The client to use.
   */
  client?: InnerTubeClient;
  /**
   * The continuation token. Mostly used for pagination.
   */
  continuation?: string;
}

export interface INextRequest {
  videoId?: string;
  playlistId?: string;
  params?: string;
  playlistIndex?: number;
  client?: InnerTubeClient;
  continuation?: string;
}

export type BrowseEndpointOptions = {
  /**
   * The browse ID.
   */
  browse_id?: string;
  /**
   * Additional protobuf parameters.
   */
  params?: string;
  /**
   * The continuation token. Mostly used for pagination.
   */
  continuation?: string;
  /**
   * The client to use.
   */
  client?: InnerTubeClient;
}

export interface IBrowseRequest {
  browseId?: string;
  params?: string;
  continuation?: string;
  client?: InnerTubeClient;
}

export interface ISearchRequest {
  /**
   * The query to search for.
   */
  query?: string;
  /**
   * Additional protobuf parameters.
   */
  params?: string;
  /**
   * The continuation token. Mostly sed for pagination.
   */
  continuation?: string;
  /**
   * The client to use.
   */
  client?: InnerTubeClient;
}

export type SearchEndpointOptions = ISearchRequest;

export interface IResolveUrlRequest {
  /**
   * The URL to resolve.
   */
  url: string;
}

export type ResolveUrlEndpointOptions = IResolveUrlRequest;

export type GetNotificationMenuEndpointOptions = {
  /**
   * The type of notifications to request.
   */
  notifications_menu_request_type: 'NOTIFICATIONS_MENU_REQUEST_TYPE_INBOX' | 'NOTIFICATIONS_MENU_REQUEST_TYPE_COMMENTS';
}

export interface IGetNotificationMenuRequest {
  notificationsMenuRequestType: string;
}

export type MusicGetSearchSuggestionsEndpointOptions = {
  /**
   * The query to search for.
   */
  input: string;
}

export interface IMusicGetSearchSuggestionsRequest extends MusicGetSearchSuggestionsEndpointOptions {
  client: 'YTMUSIC';
}