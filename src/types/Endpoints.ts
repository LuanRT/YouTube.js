import type { InnerTubeClient } from '../Innertube.js';

export type SnakeToCamel<S extends string> = S extends `${infer T}_${infer U}` ? `${Lowercase<T>}${Capitalize<SnakeToCamel<U>>}` : S;

export type ObjectSnakeToCamel<T> = {
  [K in keyof T as SnakeToCamel<K & string>]: T[K] extends object ? ObjectSnakeToCamel<T[K]> : T[K];
}

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

export type INextRequest = ObjectSnakeToCamel<NextEndpointOptions>;

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

export type IBrowseRequest = ObjectSnakeToCamel<BrowseEndpointOptions>;

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

export interface IResolveURLRequest {
  /**
   * The URL to resolve.
   */
  url: string;
}

export type ResolveURLEndpointOptions = IResolveURLRequest;

export type GetNotificationMenuEndpointOptions = {
  /**
   * The type of notifications to request.
   */
  notifications_menu_request_type: 'NOTIFICATIONS_MENU_REQUEST_TYPE_INBOX' | 'NOTIFICATIONS_MENU_REQUEST_TYPE_COMMENTS';
}

export type IGetNotificationMenuRequest = ObjectSnakeToCamel<GetNotificationMenuEndpointOptions>;

export type MusicGetSearchSuggestionsEndpointOptions = {
  /**
   * The query to search for.
   */
  input: string;
}

export interface IMusicGetSearchSuggestionsRequest extends MusicGetSearchSuggestionsEndpointOptions {
  client: 'YTMUSIC';
}

export type ChannelEditNameEndpointOptions = {
  /**
   * The new channel name.
   */
  given_name: string;
}

export interface IChannelEditNameRequest extends ObjectSnakeToCamel<ChannelEditNameEndpointOptions> {
  client: 'ANDROID';
}

export type ChannelEditDescriptionEndpointOptions = {
  /**
   * The new channel description.
   */
  given_description: string;
}

export interface IChannelEditDescriptionRequest extends ObjectSnakeToCamel<ChannelEditDescriptionEndpointOptions> {
  client: 'ANDROID';
}

export interface IAccountListRequest {
  client: 'ANDROID';
}

export type LikeEndpointOptions = {
  /**
   * The client to use.
   */
  client?: InnerTubeClient;
  /**
   * The target video.
   */
  target: {
    video_id: string;
  }
}

export type ILikeRequest = ObjectSnakeToCamel<LikeEndpointOptions>;

export type IDislikeRequest = ILikeRequest;
export type DislikeEndpointOptions = LikeEndpointOptions;

export type IRemoveLikeRequest = ILikeRequest;
export type RemoveLikeEndpointOptions = LikeEndpointOptions;

export type SubscribeEndpointOptions = {
  /**
   * The channel IDs to subscribe to/unsubscribe from.
   */
  channel_ids: string[];
  /**
   * Additional protobuf parameters.
   */
  params?: string;
  /**
   * The client to use.
   */
  client?: InnerTubeClient;
}

export type ISubscribeRequest = ObjectSnakeToCamel<SubscribeEndpointOptions>;

export type IUnsubscribeRequest = ISubscribeRequest;
export type UnsubscribeEndpointOptions = SubscribeEndpointOptions;

export interface IPerformCommentActionRequest {
  /**
   * An array of protobuf-encoded actions.
   */
  actions: string[];
  /**
   * The client to use.
   */
  client?: InnerTubeClient;
}

export type PerformCommentActionEndpointOptions = IPerformCommentActionRequest;

export type CreateCommentEndpointOptions = {
  /**
   * The comment text.
   */
  comment_text: string;
  /**
   * Additional protobuf parameters.
   */
  create_comment_params: string;
  /**
   * The client to use.
   */
  client?: InnerTubeClient;
}

export type ICreateCommentRequest = ObjectSnakeToCamel<CreateCommentEndpointOptions>;

export interface IModifyChannelPreferenceRequest {
  /**
   * Protobuf-encoded parameters.
   */
  params: string;
  /**
   * The client to use.
   */
  client?: InnerTubeClient;
}

export type ModifyChannelPreferenceEndpointOptions = IModifyChannelPreferenceRequest;

export type CreateVideoEndpointOptions = {
  /**
   * The id of the uploaded resource.
   */
  resource_id: {
    scotty_resource_id: {
      id: string;
    }
  };
  /**
   * The id of the frontend.
   */
  frontend_upload_id: string;
  /**
   * The metadata to set after the video is uploaded.
   */
  initial_metadata: {
    title: {
      new_title: string;
    };
    description: {
      new_description: string;
      should_segment: boolean;
    };
    privacy: {
      new_privacy: string;
    };
    draft_state: {
      is_draft?: boolean;
    };
  };
  /**
   * The client to use.
   */
  client?: InnerTubeClient;
}

export type ICreateVideoRequest = ObjectSnakeToCamel<CreateVideoEndpointOptions>;