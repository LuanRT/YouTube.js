import { YTNode } from '../../helpers.js';
import { type RawNode } from '../../index.js';

export type CreatorPlaylistCreationFlow = 'UNSPECIFIED' | 'RSS_INGESTION';

export type CreatorPlaylistStatus = 'UNKNOWN' | 'NOT_REJECTED' | 'REJECTED';

export type CreatorPlaylistVideoOrder =
  'UNKNOWN' | 'MANUAL' | 'MOST_RECENTLY_ADDED_FIRST' |
  'MOST_RECENTLY_ADDED_LAST' | 'MOST_POPULAR_FIRST' |
  'MOST_RECENTLY_PUBLISHED_FIRST' | 'MOST_RECENTLY_PUBLISHED_LAST' |
  'TOP_VOTED';

export type CreatorPlaylistVisibility = 'UNSPECIFIED' | 'PUBLIC' | 'PRIVATE' | 'UNLISTED';

export type CreatorPlaylistPermission =
  'UNKNOWN' | 'READ' | 'METADATA_WRITE' | 'VIDEO_LIST_WRITE';

export type CreatorPlaylistCourseType = 'UNKNOWN' | 'PAID' | 'FREE' | 'LEARNING_PLAYLIST';

export type CreatorPlaylistResponseStatusCode = 'UNKNOWN' | 'OK' | 'PARTIAL_FAILURE' | 'FAILURE';

export interface CreatorPlaylistAttributionData {
  attributed_channel_id?: string;
  attributed_text?: string;
}

export interface CreatorPlaylistCourseMetadata {
  course_type?: CreatorPlaylistCourseType;
  review_metadata?: RawNode;
}

export interface CreatorPlaylistResponseStatus {
  rpc_status_code?: number;
  status_code?: CreatorPlaylistResponseStatusCode;
}

export interface CreatorPlaylistTranslation {
  locale?: string;
  title?: RawNode;
  description?: RawNode;
}

export interface CreatorPlaylistTranslationData {
  original_language?: string;
  translation?: CreatorPlaylistTranslation[];
}

export default class CreatorPlaylist extends YTNode {
  static type = 'CreatorPlaylist';

  artwork_editor_state?: RawNode;
  attribution_data?: CreatorPlaylistAttributionData;
  channel_id?: string;
  comment_count?: number;
  course_metadata?: CreatorPlaylistCourseMetadata;
  creation_flow?: CreatorPlaylistCreationFlow;
  description?: string;
  genres?: RawNode;
  is_series?: boolean;
  last_time_updated?: RawNode;
  playlist_id?: string;
  playlist_item_voting?: RawNode;
  playlist_permissions?: CreatorPlaylistPermission[];
  playlist_thumbnail?: RawNode;
  podcast_metadata?: RawNode;
  response_status?: CreatorPlaylistResponseStatus;
  show_metadata?: RawNode;
  status?: CreatorPlaylistStatus;
  time_created?: RawNode;
  title?: string;
  translation_data?: CreatorPlaylistTranslationData;
  tvfilm_metadata?: RawNode;
  video_order?: CreatorPlaylistVideoOrder;
  videos_count?: number;
  view_count?: number;
  visibility_setting?: CreatorPlaylistVisibility;
  watch_url?: string;

  constructor(data: RawNode) {
    super();

    if (Reflect.has(data, 'artworkEditorState')) {
      this.artwork_editor_state = data.artworkEditorState;
    }

    if (Reflect.has(data, 'attributionData')) {
      this.attribution_data = {};

      if (Reflect.has(data.attributionData, 'attributedChannelId')) {
        this.attribution_data.attributed_channel_id = data.attributionData.attributedChannelId;
      }

      if (Reflect.has(data.attributionData, 'attributedText')) {
        this.attribution_data.attributed_text = data.attributionData.attributedText;
      }
    }

    if (Reflect.has(data, 'channelId')) {
      this.channel_id = data.channelId;
    }

    if (Reflect.has(data, 'commentCount')) {
      this.comment_count = Number(data.commentCount);
    }

    if (Reflect.has(data, 'courseMetadata')) {
      this.course_metadata = {};

      if (Reflect.has(data.courseMetadata, 'courseType')) {
        this.course_metadata.course_type = data.courseMetadata.courseType.replace('COURSE_TYPE_', '');
      }

      if (Reflect.has(data.courseMetadata, 'reviewMetadata')) {
        this.course_metadata.review_metadata = data.courseMetadata.reviewMetadata;
      }
    }

    if (Reflect.has(data, 'creationFlow')) {
      this.creation_flow = data.creationFlow.replace('PLAYLIST_CREATION_FLOW_', '');
    }

    if (Reflect.has(data, 'description')) {
      this.description = data.description;
    }

    if (Reflect.has(data, 'genres')) {
      this.genres = data.genres;
    }

    if (Reflect.has(data, 'isSeries')) {
      this.is_series = data.isSeries;
    }

    if (Reflect.has(data, 'lastTimeUpdated')) {
      this.last_time_updated = data.lastTimeUpdated;
    }

    if (Reflect.has(data, 'playlistId')) {
      this.playlist_id = data.playlistId;
    }

    if (Reflect.has(data, 'playlistItemVoting')) {
      this.playlist_item_voting = data.playlistItemVoting;
    }

    if (Reflect.has(data, 'playlistPermissions') && Array.isArray(data.playlistPermissions?.permissions)) {
      this.playlist_permissions = data.playlistPermissions.permissions.map(
        (permission: string) => permission.replace('CREATOR_PLAYLIST_PERMISSION_', '')
      );
    }

    if (Reflect.has(data, 'playlistThumbnail')) {
      this.playlist_thumbnail = data.playlistThumbnail;
    }

    if (Reflect.has(data, 'podcastMetadata')) {
      this.podcast_metadata = data.podcastMetadata;
    }

    if (Reflect.has(data, 'responseStatus')) {
      this.response_status = {};

      if (Reflect.has(data.responseStatus, 'rpcStatusCode')) {
        this.response_status.rpc_status_code = Number(data.responseStatus.rpcStatusCode);
      }

      if (Reflect.has(data.responseStatus, 'statusCode')) {
        this.response_status.status_code = data.responseStatus.statusCode.replace('CREATOR_ENTITY_STATUS_', '');
      }
    }

    if (Reflect.has(data, 'showMetadata')) {
      this.show_metadata = data.showMetadata;
    }

    if (Reflect.has(data, 'status')) {
      this.status = data.status.replace('PLAYLIST_STATUS_', '');
    }

    if (Reflect.has(data, 'timestamps') && Reflect.has(data.timestamps, 'timeCreated')) {
      this.time_created = data.timestamps.timeCreated;
    }

    if (Reflect.has(data, 'title')) {
      this.title = data.title;
    }

    if (Reflect.has(data, 'translationData')) {
      this.translation_data = {};

      if (Reflect.has(data.translationData, 'originalLanguage')) {
        this.translation_data.original_language = data.translationData.originalLanguage;
      }

      if (Array.isArray(data.translationData.translation)) {
        this.translation_data.translation = data.translationData.translation.map((translation: RawNode) => {
          const parsed_translation: CreatorPlaylistTranslation = {};

          if (Reflect.has(translation, 'locale')) {
            parsed_translation.locale = translation.locale;
          }

          if (Reflect.has(translation, 'title')) {
            parsed_translation.title = translation.title;
          }

          if (Reflect.has(translation, 'description')) {
            parsed_translation.description = translation.description;
          }

          return parsed_translation;
        });
      }
    }

    if (Reflect.has(data, 'tvfilmMetadata')) {
      this.tvfilm_metadata = data.tvfilmMetadata;
    }

    if (Reflect.has(data, 'videoOrder')) {
      this.video_order = data.videoOrder.replace('CREATOR_PLAYLIST_SORT_ORDER_', '');
    }

    if (Reflect.has(data, 'videosCount')) {
      this.videos_count = Number(data.videosCount);
    }

    if (Reflect.has(data, 'viewCount')) {
      this.view_count = Number(data.viewCount);
    }

    if (Reflect.has(data, 'visibilitySetting')) {
      this.visibility_setting = data.visibilitySetting.replace('CREATOR_PLAYLIST_VISIBILITY_', '');
    }

    if (Reflect.has(data, 'watchUrl')) {
      this.watch_url = data.watchUrl;
    }
  }
}
