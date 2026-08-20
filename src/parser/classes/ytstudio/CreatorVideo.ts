import { YTNode } from '../../helpers.js';
import { type RawNode } from '../../index.js';
import Thumbnail from '../misc/Thumbnail.js';
import VideoUploadChecks from './VideoUploadChecks.js';

export type CreatorVideoStatus = 'DELETED' | 'FAILED' | 'PROCESSED' | 'REJECTED' | 'UNKNOWN' | 'UPLOADED' | 'WRONG';

export type DraftStatus = 'NONE' | 'PUBLIC' | 'SCHEDULED';

export type CreatorVideoPrivacy = 'PRIVATE' | 'PUBLIC' | 'SCHEDULED' | 'UNKNOWN' | 'UNLISTED';

export type CreatorVideoCategory =
  'AUTOS' | 'COMEDY' | 'EDUCATION' |
  'ENTERTAINMENT' | 'FILM' | 'GADGETS' |
  'GOVERNMENT' | 'HOWTO' | 'MUSIC' |
  'NEWS' | 'PEOPLE' | 'PETS' |
  'SCIENCE' | 'SPORTS' | 'TRAVEL' |
  'UNKNOWN';

export type VideoCommentFilter =
  'APPROVE' | 'AUTO_MODERATE' |
  'AUTO_MODERATE_HOLD_MORE' | 'NONE' | 'UNKNOWN';

export type VideoCommentSortOrder = 'LATEST' | 'TOP';

export type VideoAgeRestriction = 'APPEAL_BUTTON' | 'NONE' | 'SELF' | 'SYSTEM';

export type VideoLicense = 'CREATIVE_COMMONS' | 'STANDARD' | 'UNKNOWN';

export type VideoUncaptionedReason =
  'CAPTIONLESS_TV_CONTENT' | 'EXCEPTION_GRANTED' |
  'LEGACY' | 'NO_FULL_LENGTH_VIDEO' |
  'NO_US_TV_CONTENT' | 'NOT_REQUIRED' |
  'UNNECESSARY_OR_NOT_SET';

export type VideoSubscriberNotification =
  'DISABLED' | 'ENABLED' | 'NONE' | 'UNKNOWN';

export type VideoPaidProductPlacement =
  'NO' | 'NOTIFY' | 'UNKNOWN' | 'UNSET' | 'YES';

export type VideoMusicLicensedStatus =
  'CLAIMED_BY_CHANNEL_OWNER' | 'DISABLED_BY_CLAIM_PREFERENCE' |
  'ENABLED_BY_CHANNEL_OWNER' | 'ENABLED_BY_CHANNEL_OWNER_UNCLAIMED' |
  'ENABLED_BY_PARTNER_UPLOADED_CLAIM' | 'ENABLED_BY_THIRD_PARTY_CLAIMS' |
  'UNCLAIMED';

export type VideoUserSetMonetization = 'OFF' | 'ON';

export type VideoMonetizingStatus =
  'INDETERMINATE' | 'MONETIZING' |
  'MONETIZING_CREATOR_REVSHARE' | 'MONETIZING_IN_ESCROW' |
  'MONETIZING_WITH_EXCEPTIONS' | 'MONETIZING_WITH_LIMITED_ADS' |
  'MONETIZING_WITH_REVSHARE' | 'NOT_FOR_DISPLAY' |
  'NOT_MONETIZING_CHANNEL_NOT_MONETIZING' | 'NOT_MONETIZING_INELIGIBLE' |
  'NOT_MONETIZING_INELIGIBLE_INNOCUOUS' | 'NOT_MONETIZING_OFF' |
  'NOT_MONETIZING_OFF_CREATOR_REVSHARE' | 'NOT_MONETIZING_OFF_SHORTS_REVSHARE' |
  'NOT_MONETIZING_OFF_WITH_REVSHARE' | 'PENDING_CHECKS' |
  'UNSPECIFIED' | 'VIDEO_NOT_FINAL';

export type VideoVisibilityStatus =
  'AGE_RESTRICTED' | 'BLOCKED_FOR_COPYRIGHT_GLOBALLY' |
  'BLOCKED_FOR_COPYRIGHT_PARTIALLY' | 'DRAFT' |
  'FORCED_PRIVATE' | 'INDETERMINATE' |
  'LIMITED_FEATURES' | 'PENDING_REMOVAL_FOR_COPYRIGHT' |
  'REMOVED_FOR_COMMUNITY_GUIDELINES' | 'REMOVED_FOR_COPYRIGHT' |
  'TARGETED_FOR_KIDS' | 'UNKNOWN' |
  'UPLOAD_FAILED' | 'UPLOADING_OR_PROCESSING' |
  'USER_CONFIG';

export type VideoUserSetVisibility =
  'DRAFT' | 'FUTURE_PREMIERE' | 'MEMBERS' |
  'PREMIERING' | 'PRIMETIME_SUBSCRIBERS' | 'PRIVATE' |
  'PUBLIC' | 'SCHEDULED' |
  'SCHEDULED_TO_PRIMETIME_SUBSCRIBERS' | 'SPECIFIC_PEOPLE' |
  'SUPERFANS' | 'UNLISTED' | 'UNSPECIFIED';

export type VideoUserInflictedVisibility = 'AGE_RESTRICTED' | 'UNSPECIFIED';

export type VideoEffectiveVisibility =
  'BLOCKED' | 'FORCED_PRIVATE' |
  'REMOVED' | 'UNSPECIFIED' |
  'UPLOAD_FAILED' | 'UPLOADING_OR_PROCESSING' |
  'USER_CONFIG';

export type VideoOrigin = 'LIVESTREAM' | 'STORY' | 'UNKNOWN' | 'UPLOAD';

export type VideoProcessingStatus =
  'EDITED' | 'FAILED' | 'PROCESSING' |
  'PROCESSING_NON_PRIMARY_ASSETS' | 'READY' |
  'REVERTED' | 'UNEDITED' | 'UNKNOWN';

export type VideoTargetedAudience =
  'ALL' | 'AGE_RESTRICTED' |
  'CROSSWALK' | 'UNKNOWN';

export type VideoTargetedAudienceImposer =
  'SELF' | 'SYSTEM' | 'UNSPECIFIED';

export type ResolutionStatus =
  'APPEAL_IN_PROGRESS' | 'APPEAL_REJECTED' | 'AVAILABLE' |
  'DEFERRED' | 'DONE' | 'PROCESSING' |
  'STARTING_SOON' | 'UNAVAILABLE' | 'UNKNOWN' |
  'UNSPECIFIED';

export type MonetizedStatus = 'ACTIVE' | 'INACTIVE' | 'UNSPECIFIED';

export type RestrictionsSeverity =
  'HIGH' | 'LOW' |
  'MEDIUM' | 'UNSPECIFIED';

export type AutoGenMidrollsStatus = 'AVAILABLE' | 'FAILED' | 'PROCESSING';

export type VideoCopyrightSummaryStatus =
  'BLOCKED' | 'COPYRIGHT_CONTENT_FOUND' |
  'COUNTER_REJECTED' | 'DELAYED_TAKEDOWN' |
  'EXPIRED_STRIKE_TAKEDOWN' | 'LICENSED' |
  'LIKENESS_CLAIM' | 'LIKENESS_PENDING_REMOVAL' |
  'LIKENESS_REMOVAL' | 'MONETIZABLE_WITH_LICENSES' |
  'MONETIZATION_CREATOR_REVSHARE' | 'MONETIZATION_CREATOR_REVSHARE_ELIGIBLE' |
  'MONETIZATION_ENABLED_WITH_LICENSES' | 'MONETIZATION_RESTRICTED' |
  'MONETIZATION_REVSHARE_ELIGIBLE' | 'MONETIZATION_REVSHARE_ENABLED' |
  'MONETIZATION_SHORTS_REVSHARE' | 'MONETIZATION_SHORTS_REVSHARE_ELIGIBLE' |
  'MONETIZATION_UNAVAILABLE' | 'MULTIPLE_CLAIMS' |
  'MULTIPLE_REMOVALS' | 'NO_CLAIMS_FOUND' |
  'PARTIALLY_BLOCKED_REVSHARE_ENABLED' | 'SHORTS_NO_UPLOADER_CLAIM' |
  'STRIKE_TAKEDOWN' | 'TAKEDOWN' |
  'TAKEDOWN_COUNTER' | 'TAKEDOWN_NO_STRIKE' |
  'TAKEDOWN_UNDER_REVIEW' | 'VIDEO_APPEAL' |
  'VIDEO_DISPUTE';

export type VideoCopyrightChannelImpact =
  'NO_CHANNEL_IMPACT' | 'NO_CHANNEL_IMPACT_WITH_LICENSES' |
  'NO_CHANNEL_IMPACT_WITHOUT_CLAIMS' | 'PENDING_STRIKE_REVIEW' |
  'STRIKE' | 'STRIKE_COUNTER' |
  'STRIKE_EXPIRED' | 'STRIKE_PENDING' |
  'STRIKE_RELEASED_DURING_COUNTER';

export type VideoCopyrightVisibilityImpact =
  'APPEAL' | 'CLAIM_BLOCK' |
  'CLAIM_PARTIAL_BLOCK' | 'COMMERCIAL_SHORTS_BLOCK' |
  'DELAYED_TAKEDOWN' | 'DISPUTE' |
  'LICENSE_RESTRICTED_SHORTS_BLOCK' | 'LIKENESS_BLOCK' |
  'MULTIPLE_CLAIMS_BLOCK' | 'NOT_AFFECTED' |
  'PENDING_LIKENESS_REMOVAL' | 'TAKEDOWN' |
  'TAKEDOWN_COUNTER' | 'UNKNOWN';

export type VideoCopyrightMonetizationImpact =
  'CLAIM_BLOCK' | 'CLAIM_PARTIAL_BLOCK' |
  'CLAIM_PARTIAL_BLOCK_MONETIZED' | 'CREATOR_REVSHARE' |
  'CREATOR_REVSHARE_ELIGIBLE' | 'DO_NOT_DISPLAY' |
  'LIKENESS_REVSHARE_ELIGIBLE' | 'LIKENESS_REVSHARE_ENABLED' |
  'MONETIZABLE_WITH_LICENSES' | 'MONETIZED_DURING_DISPUTE' |
  'NOT_AFFECTED' | 'NOT_AFFECTED_LICENSED' |
  'RESTRICTED' | 'REVSHARE_ELIGIBLE' |
  'REVSHARE_ENABLED' | 'SHORTS_NO_UPLOADER_CLAIM' |
  'SHUNA_CLAIM_DEMONETIZATION' | 'TAKEDOWN' |
  'UNKNOWN';

export type TouPolicyVertical =
  'CHILD_SAFETY' | 'HARMFUL_DANGEROUS' | 'SUICIDE_SELF_HARM' |
  'UNKNOWN' | 'VIOLENT_GRAPHIC_SHOCKING';

export type HumanReviewState = 'DONE' | 'INELIGIBLE' | 'NOT_REQUESTED';

export type VideoMadeForKids = 'MFK' | 'NOT_MFK' | 'UNKNOWN';

export type VideoMadeForKidsImposer =
  'SELF' | 'UNSPECIFIED' | 'YOUTUBE';

export type RemixSourceOptionEligibility =
  'BY_CLIENT' | 'ELIGIBLE' | 'INELIGIBLE';

export type RemixSourceShorts = 'IS_SHORT' | 'NOT_SHORT' | 'PROCESSING';

export type VideoCommentsEnabledState =
  'OFF' | 'ON' |
  'PAUSED' | 'UNKNOWN';

export type AllowedCommenterMode =
  'ANYONE' | 'SUBSCRIBERS_MEMBERS_APPROVED_USERS' | 'UNKNOWN';

export type CommenterMinimumSubscriptionTime =
  'ANY' | 'ONE_DAY' |
  'ONE_HOUR' | 'ONE_WEEK' |
  'UNKNOWN';

export type CreatorContentType =
  'LIVE_STREAM' | 'SHORTS' |
  'UNSPECIFIED' | 'VIDEO_ON_DEMAND';

export type CreatorVideoPermission =
  'ANALYTICS_READ' | 'BASIC_METADATA_READ' |
  'CAPTIONS_READ' | 'CAPTIONS_WRITE' |
  'COLLABORATOR' | 'COLLABORATOR_INVITEE' |
  'COLLABORATOR_LIMITED' | 'COLLABORATOR_LIMITED_INVITEE' |
  'COMMENTS_MANAGER' | 'COMMENTS_READ' |
  'COMMENT_SETTINGS_READ' | 'COMMENT_SETTINGS_WRITE' |
  'DELETE' | 'DOWNLOAD' |
  'ENFORCEMENT_APPELLANT' | 'ENFORCEMENT_READER' |
  'MONETIZATION_SETTINGS_READ' | 'MONETIZATION_WRITE' |
  'PRIVACY_STATUS_PRIVATE_WRITE' | 'PRIVACY_STATUS_PUBLIC_WRITE' |
  'RATING_SETTINGS_WRITE' | 'READ' |
  'WATCH' | 'WRITE';

export type CreatorEntityStatus = 'FAILURE' | 'OK' | 'PARTIAL_FAILURE';

export type CreatorFeatureStatus =
  'DISABLED' | 'ELIGIBLE' |
  'ENABLED' | 'UNKNOWN';

export type CreatorFeatureStatusDetails = 'NOT_APPLICABLE';

export interface ClaimDetails {
  is_embed_disabled?: boolean;
  video_has_commercial_block?: boolean;
  video_has_third_party_claim?: boolean;
}

export interface Permissions {
  overall_permissions?: CreatorVideoPermission[];
}

export interface ResponseStatus {
  status_code?: CreatorEntityStatus;
}

export interface ThumbnailEditorState {
  stills?: Thumbnail[][];
  still_id?: number;
  default_still?: boolean;
}

export interface VideoEditorProject {
  video_dimensions?: { width?: number, height?: number };
}

export interface StatusDetails {
  feedback_service_continuation_token?: string;
}

export interface VideoTag {
  value: string;
}

export interface AudioLanguage {
  language_code?: string;
}

export interface FeatureState {
  status?: CreatorFeatureStatus;
  status_details?: CreatorFeatureStatusDetails;
}

export interface Publishing {
  notify_subscribers?: VideoSubscriberNotification;
}

export interface Music {
  licensed_status?: VideoMusicLicensedStatus;
}

export interface AdMonetization {
  user_set_monetization?: VideoUserSetMonetization;
  effective_status?: VideoMonetizingStatus;
}

export interface Monetization {
  ad_monetization?: AdMonetization;
}

export interface VideoVisibility {
  effective_status?: VideoVisibilityStatus;
  user_set_visibility?: VideoUserSetVisibility;
  user_inflicted_visibility?: VideoUserInflictedVisibility;
  effective_visibility?: VideoEffectiveVisibility;
}

export interface CopyrightSummary {
  video_copyright_summary_status?: VideoCopyrightSummaryStatus;
  channel_impacts?: VideoCopyrightChannelImpact[];
  video_visibility_impacts?: VideoCopyrightVisibilityImpact[];
  video_monetization_impact?: VideoCopyrightMonetizationImpact;
  active_third_party_claims_count?: number;
}

export interface SponsorsOnly {
  is_sponsors_only?: boolean;
}

export interface AudienceRestriction {
  self_rating?: VideoTargetedAudience;
  system_rating?: VideoTargetedAudience;
  override_enabled?: boolean;
  effective_rating?: VideoTargetedAudience;
  imposer?: VideoTargetedAudienceImposer;
}

export interface OwnedClaimDetails {
  can_edit_owned_claim?: boolean;
  can_enable_matching?: boolean;
}

export interface RestrictionsSummary {
  severity?: RestrictionsSeverity;
}

export interface AllRestrictions {
  summary?: RestrictionsSummary;
}

export interface VideoResolutions {
  status_sd?: ResolutionStatus;
  status_hd?: ResolutionStatus;
  status4k?: ResolutionStatus;
  status2k?: ResolutionStatus;
}

export interface AdFormats {
  has_skippable_video_ads?: boolean;
  has_non_skippable_video_ads?: boolean;
  has_display_ads?: boolean;
  has_live_display_ads?: boolean;
}

export interface AdBreaks {
  has_preroll_ads?: boolean;
  has_midroll_ads?: boolean;
  has_postroll_ads?: boolean;
  auto_gen_midrolls_status?: AutoGenMidrollsStatus;
}

export interface AdSettings {
  ad_formats?: AdFormats;
  ad_breaks?: AdBreaks;
}

export interface PolicyDetail {
  vertical?: TouPolicyVertical;
}

export interface CommunityGuidelinesDetails {
  all_policy_details?: PolicyDetail[];
  human_review_state?: HumanReviewState;
}

export interface AdditionalDetails {
  community_guidelines_details?: CommunityGuidelinesDetails;
}

export interface VideoPrechecks {
  copyright_prechecks_done?: boolean;
  brand_safety_prechecks_done?: boolean;
  video_upload_checks_monetized?: VideoUploadChecks;
  video_upload_checks_not_monetized?: VideoUploadChecks;
  additional_details?: AdditionalDetails;
}

export interface Notification {
  precheck_notifications_enabled?: boolean;
}

export interface MfkSettings {
  mfk_by_creator?: VideoMadeForKids;
  mfk_without_creator_input?: VideoMadeForKids;
  override_enabled?: boolean;
  effective_mfk?: VideoMadeForKids;
  imposer?: VideoMadeForKidsImposer;
}

export interface CreatorOptOutSetting {
  creator_opt_out?: boolean;
}

export interface Remix {
  remix_source_option_eligibility?: RemixSourceOptionEligibility;
  is_source?: boolean;
  remix_source_shorts?: RemixSourceShorts;
}

export interface ContentOwnershipModelSettings {
  is_off_network_upload?: boolean;
}

export interface PublicMetrics {
  view_count?: number;
  comment_count?: number;
  like_count?: number;
  external_view_count?: number;
}

export interface Shorts {
  is_shorts_renderable?: boolean;
}

export interface CommentSettings {
  comments_enabled_state?: VideoCommentsEnabledState;
  allowed_commenter_mode?: AllowedCommenterMode;
  commenter_minimum_subscription_time?: CommenterMinimumSubscriptionTime;
}

export interface Collaboration {
  serialized_share_entity?: string;
}

export interface PaidPoliticalContent {
  paid_product_placement_political_content_from_eu_creator?: boolean;
}

export interface SuperfansOnly {
  is_superfans_only?: boolean;
}

export default class CreatorVideo extends YTNode {
  static type = 'CreatorVideo';

  video_id?: string;
  channel_id?: string;
  title?: string;
  description?: string;
  privacy?: CreatorVideoPrivacy;
  status?: CreatorVideoStatus;
  draft_status?: DraftStatus;
  share_url?: string;
  watch_url?: string;
  length_seconds?: number;
  video_duration_ms?: number;
  time_created_seconds?: number;
  time_published_seconds?: number;
  thumbnail_details?: Thumbnail[];
  claim_details?: ClaimDetails;
  permissions?: Permissions;
  response_status?: ResponseStatus;
  thumbnail_editor_state?: ThumbnailEditorState;
  video_editor_project?: VideoEditorProject;
  status_details?: StatusDetails;
  tags?: VideoTag[];
  category?: CreatorVideoCategory;
  comment_filter?: VideoCommentFilter;
  default_comment_sort_order?: VideoCommentSortOrder;
  audio_language?: AudioLanguage;
  allow_ratings?: boolean;
  age_restriction?: VideoAgeRestriction;
  license?: VideoLicense;
  features?: Record<string, FeatureState>;
  uncaptioned_reason?: VideoUncaptionedReason;
  publishing?: Publishing;
  paid_product_placement?: VideoPaidProductPlacement;
  allow_embed?: boolean;
  music?: Music;
  monetization?: Monetization;
  visibility?: VideoVisibility;
  origin?: VideoOrigin;
  inline_edit_processing_status?: VideoProcessingStatus;
  copyright_summary?: CopyrightSummary;
  sponsors_only?: SponsorsOnly;
  serialized_share_entity?: string;
  unlisted_expired?: boolean;
  original_filename?: string;
  audience_restriction?: AudienceRestriction;
  owned_claim_details?: OwnedClaimDetails;
  monetized_status?: MonetizedStatus;
  comments_disabled_internally?: boolean;
  all_restrictions?: AllRestrictions;
  video_resolutions?: VideoResolutions;
  ad_settings?: AdSettings;
  video_prechecks?: VideoPrechecks;
  view_count_is_hidden?: boolean;
  notification?: Notification;
  mfk_settings?: MfkSettings;
  auto_chapter_settings?: CreatorOptOutSetting;
  remix?: Remix;
  content_ownership_model_settings?: ContentOwnershipModelSettings;
  public_metrics?: PublicMetrics;
  auto_places_mentioned_settings?: CreatorOptOutSetting;
  shorts?: Shorts;
  content_type?: CreatorContentType;
  is_paygated?: boolean;
  learning_concept_settings?: CreatorOptOutSetting;
  comment_settings?: CommentSettings;
  product_autotagging_settings?: CreatorOptOutSetting;
  collaboration?: Collaboration;
  paid_political_content?: PaidPoliticalContent;
  superfans_only?: SuperfansOnly;

  constructor(data: RawNode) {
    super();

    if (Reflect.has(data, 'videoId')) {
      this.video_id = data.videoId;
    }

    if (Reflect.has(data, 'channelId')) {
      this.channel_id = data.channelId;
    }

    if (Reflect.has(data, 'title')) {
      this.title = data.title;
    }

    if (Reflect.has(data, 'description')) {
      this.description = data.description;
    }

    if (Reflect.has(data, 'privacy')) {
      this.privacy = data.privacy.replace('VIDEO_PRIVACY_', '');
    }

    if (Reflect.has(data, 'status')) {
      this.status = data.status.replace('VIDEO_STATUS_', '');
    }

    if (Reflect.has(data, 'draftStatus')) {
      this.draft_status = data.draftStatus.replace('DRAFT_STATUS_', '');
    }

    if (Reflect.has(data, 'shareUrl')) {
      this.share_url = data.shareUrl;
    }

    if (Reflect.has(data, 'watchUrl')) {
      this.watch_url = data.watchUrl;
    }

    if (Reflect.has(data, 'lengthSeconds')) {
      this.length_seconds = Number(data.lengthSeconds);
    }

    if (Reflect.has(data, 'videoDurationMs')) {
      this.video_duration_ms = Number(data.videoDurationMs);
    }

    if (Reflect.has(data, 'timeCreatedSeconds')) {
      this.time_created_seconds = Number(data.timeCreatedSeconds);
    }

    if (Reflect.has(data, 'timePublishedSeconds')) {
      this.time_published_seconds = Number(data.timePublishedSeconds);
    }

    if (Reflect.has(data, 'thumbnailDetails')) {
      this.thumbnail_details = Thumbnail.fromResponse(data.thumbnailDetails);
    }

    if (Reflect.has(data, 'claimDetails')) {
      const claim_details = data.claimDetails;
      this.claim_details = {
        is_embed_disabled: claim_details.isEmbedDisabled,
        video_has_commercial_block: claim_details.videoHasCommercialBlock,
        video_has_third_party_claim: claim_details.videoHasThirdPartyClaim
      };
    }

    if (Reflect.has(data, 'permissions')) {
      const permissions = data.permissions;
      this.permissions = {
        overall_permissions: Array.isArray(permissions.overallPermissions) ?
          permissions.overallPermissions.map((permission: string) => permission.replace('CREATOR_VIDEO_PERMISSION_', '')) : undefined
      };
    }

    if (Reflect.has(data, 'responseStatus')) {
      const response_status = data.responseStatus;
      this.response_status = {
        status_code: Reflect.has(response_status, 'statusCode') ? response_status.statusCode.replace('CREATOR_ENTITY_STATUS_', '') : undefined
      };
    }

    if (Reflect.has(data, 'thumbnailEditorState')) {
      const thumbnail_editor_state = data.thumbnailEditorState;
      this.thumbnail_editor_state = {
        stills: Array.isArray(thumbnail_editor_state.stills) ? thumbnail_editor_state.stills.map((still: RawNode) => Thumbnail.fromResponse(still)) : undefined,
        still_id: thumbnail_editor_state.stillId,
        default_still: thumbnail_editor_state.defaultStill
      };
    }

    if (Reflect.has(data, 'videoEditorProject')) {
      const video_dimensions = data.videoEditorProject.videoDimensions;
      this.video_editor_project = {
        video_dimensions: video_dimensions ? {
          width: video_dimensions.width,
          height: video_dimensions.height
        } : undefined
      };
    }

    if (Reflect.has(data, 'statusDetails')) {
      this.status_details = {
        feedback_service_continuation_token: data.statusDetails.feedbackServiceContinuationToken
      };
    }

    if (Reflect.has(data, 'tags')) {
      this.tags = Array.isArray(data.tags) ? data.tags.map((tag: RawNode) => ({ value: tag.value })) : undefined;
    }

    if (Reflect.has(data, 'category')) {
      this.category = data.category.replace('CREATOR_VIDEO_CATEGORY_', '');
    }

    if (Reflect.has(data, 'commentFilter')) {
      this.comment_filter = data.commentFilter.replace('VIDEO_COMMENT_FILTER_', '');
    }

    if (Reflect.has(data, 'defaultCommentSortOrder')) {
      this.default_comment_sort_order = data.defaultCommentSortOrder.replace('VIDEO_COMMENT_SORT_ORDER_', '');
    }

    if (Reflect.has(data, 'audioLanguage')) {
      this.audio_language = {
        language_code: data.audioLanguage.languageCode
      };
    }

    if (Reflect.has(data, 'allowRatings')) {
      this.allow_ratings = data.allowRatings;
    }

    if (Reflect.has(data, 'ageRestriction')) {
      this.age_restriction = data.ageRestriction.replace('VIDEO_AGE_RESTRICTION_', '');
    }

    if (Reflect.has(data, 'license')) {
      this.license = data.license.replace('VIDEO_LICENSE_', '');
    }

    if (Reflect.has(data, 'features')) {
      const features: Record<string, FeatureState> = {};
      for (const [ key, value ] of Object.entries<RawNode>(data.features)) {
        features[key] = {
          status: Reflect.has(value, 'status') ? value.status.replace('CREATOR_FEATURE_STATUS_', '') : undefined,
          status_details: Reflect.has(value, 'statusDetails') ? value.statusDetails.replace('CREATOR_FEATURE_STATUS_DETAILS_', '') : undefined
        };
      }
      this.features = features;
    }

    if (Reflect.has(data, 'uncaptionedReason')) {
      this.uncaptioned_reason = data.uncaptionedReason.replace('VIDEO_UNCAPTIONED_REASON_', '');
    }

    if (Reflect.has(data, 'publishing')) {
      this.publishing = {
        notify_subscribers: Reflect.has(data.publishing, 'notifySubscribers') ? data.publishing.notifySubscribers.replace('VIDEO_SUBSCRIBER_NOTIFICATION_', '') : undefined
      };
    }

    if (Reflect.has(data, 'paidProductPlacement')) {
      this.paid_product_placement = data.paidProductPlacement.replace('VIDEO_PAID_PRODUCT_PLACEMENT_', '');
    }

    if (Reflect.has(data, 'allowEmbed')) {
      this.allow_embed = data.allowEmbed;
    }

    if (Reflect.has(data, 'music')) {
      this.music = {
        licensed_status: Reflect.has(data.music, 'licensedStatus') ? data.music.licensedStatus.replace('VIDEO_MUSIC_LICENSED_STATUS_', '') : undefined
      };
    }

    if (Reflect.has(data, 'monetization')) {
      const ad_monetization = data.monetization.adMonetization;
      this.monetization = {
        ad_monetization: ad_monetization ? {
          user_set_monetization: Reflect.has(ad_monetization, 'userSetMonetization') ? ad_monetization.userSetMonetization.replace('VIDEO_USER_SET_MONETIZATION_', '') : undefined,
          effective_status: Reflect.has(ad_monetization, 'effectiveStatus') ? ad_monetization.effectiveStatus.replace('VIDEO_MONETIZING_STATUS_', '') : undefined
        } : undefined
      };
    }

    if (Reflect.has(data, 'visibility')) {
      const visibility = data.visibility;
      this.visibility = {
        effective_status: Reflect.has(visibility, 'effectiveStatus') ? visibility.effectiveStatus.replace('VIDEO_VISIBILITY_STATUS_', '') : undefined,
        user_set_visibility: Reflect.has(visibility, 'userSetVisibility') ? visibility.userSetVisibility.replace('VIDEO_USER_SET_VISIBILITY_', '') : undefined,
        user_inflicted_visibility: Reflect.has(visibility, 'userInflictedVisibility') ? visibility.userInflictedVisibility.replace('VIDEO_USER_INFLICTED_VISIBILITY_', '') : undefined,
        effective_visibility: Reflect.has(visibility, 'effectiveVisibility') ? visibility.effectiveVisibility.replace('VIDEO_EFFECTIVE_VISIBILITY_', '') : undefined
      };
    }

    if (Reflect.has(data, 'origin')) {
      this.origin = data.origin.replace('VIDEO_ORIGIN_', '');
    }

    if (Reflect.has(data, 'inlineEditProcessingStatus')) {
      this.inline_edit_processing_status = data.inlineEditProcessingStatus.replace('VIDEO_PROCESSING_STATUS_', '');
    }

    if (Reflect.has(data, 'copyrightSummary')) {
      const copyright_summary = data.copyrightSummary;
      this.copyright_summary = {
        video_copyright_summary_status: Reflect.has(copyright_summary, 'videoCopyrightSummaryStatus') ? copyright_summary.videoCopyrightSummaryStatus.replace('VIDEO_COPYRIGHT_SUMMARY_STATUS_', '') : undefined,
        channel_impacts: Array.isArray(copyright_summary.channelImpacts) ?
          copyright_summary.channelImpacts.map((impact: string) => impact.replace('VIDEO_COPYRIGHT_CHANNEL_IMPACT_', '')) : undefined,
        video_visibility_impacts: Array.isArray(copyright_summary.videoVisibilityImpacts) ?
          copyright_summary.videoVisibilityImpacts.map((impact: string) => impact.replace('VIDEO_COPYRIGHT_VISIBILITY_IMPACT_', '')) : undefined,
        video_monetization_impact: Reflect.has(copyright_summary, 'videoMonetizationImpact') ? copyright_summary.videoMonetizationImpact.replace('VIDEO_COPYRIGHT_MONETIZATION_IMPACT_', '') : undefined,
        active_third_party_claims_count: copyright_summary.activeThirdPartyClaimsCount
      };
    }

    if (Reflect.has(data, 'sponsorsOnly')) {
      this.sponsors_only = {
        is_sponsors_only: data.sponsorsOnly.isSponsorsOnly
      };
    }

    if (Reflect.has(data, 'serializedShareEntity')) {
      this.serialized_share_entity = data.serializedShareEntity;
    }

    if (Reflect.has(data, 'unlistedExpired')) {
      this.unlisted_expired = data.unlistedExpired;
    }

    if (Reflect.has(data, 'originalFilename')) {
      this.original_filename = data.originalFilename;
    }

    if (Reflect.has(data, 'audienceRestriction')) {
      const audience_restriction = data.audienceRestriction;
      this.audience_restriction = {
        self_rating: Reflect.has(audience_restriction, 'selfRating') ? audience_restriction.selfRating.replace('VIDEO_TARGETED_AUDIENCE_', '') : undefined,
        system_rating: Reflect.has(audience_restriction, 'systemRating') ? audience_restriction.systemRating.replace('VIDEO_TARGETED_AUDIENCE_', '') : undefined,
        override_enabled: audience_restriction.overrideEnabled,
        effective_rating: Reflect.has(audience_restriction, 'effectiveRating') ? audience_restriction.effectiveRating.replace('VIDEO_TARGETED_AUDIENCE_', '') : undefined,
        imposer: Reflect.has(audience_restriction, 'imposer') ? audience_restriction.imposer.replace('VIDEO_TARGETED_AUDIENCE_IMPOSER_', '') : undefined
      };
    }

    if (Reflect.has(data, 'ownedClaimDetails')) {
      const owned_claim_details = data.ownedClaimDetails;
      this.owned_claim_details = {
        can_edit_owned_claim: owned_claim_details.canEditOwnedClaim,
        can_enable_matching: owned_claim_details.canEnableMatching
      };
    }

    if (Reflect.has(data, 'monetizedStatus')) {
      this.monetized_status = data.monetizedStatus.replace('MONETIZED_STATUS_', '');
    }

    if (Reflect.has(data, 'commentsDisabledInternally')) {
      this.comments_disabled_internally = data.commentsDisabledInternally;
    }

    if (Reflect.has(data, 'allRestrictions')) {
      const summary = data.allRestrictions.summary;
      this.all_restrictions = {
        summary: summary ? {
          severity: Reflect.has(summary, 'severity') ? summary.severity.replace('VIDEO_RESTRICTIONS_SEVERITY_', '') : undefined
        } : undefined
      };
    }

    if (Reflect.has(data, 'videoResolutions')) {
      const video_resolutions = data.videoResolutions;
      this.video_resolutions = {
        status_sd: Reflect.has(video_resolutions, 'statusSd') ? video_resolutions.statusSd.replace('RESOLUTION_STATUS_', '') : undefined,
        status_hd: Reflect.has(video_resolutions, 'statusHd') ? video_resolutions.statusHd.replace('RESOLUTION_STATUS_', '') : undefined,
        status4k: Reflect.has(video_resolutions, 'status4k') ? video_resolutions.status4k.replace('RESOLUTION_STATUS_', '') : undefined,
        status2k: Reflect.has(video_resolutions, 'status2k') ? video_resolutions.status2k.replace('RESOLUTION_STATUS_', '') : undefined
      };
    }

    if (Reflect.has(data, 'adSettings')) {
      const ad_formats = data.adSettings.adFormats;
      const ad_breaks = data.adSettings.adBreaks;
      this.ad_settings = {
        ad_formats: ad_formats ? {
          has_skippable_video_ads: ad_formats.hasSkippableVideoAds,
          has_non_skippable_video_ads: ad_formats.hasNonSkippableVideoAds,
          has_display_ads: ad_formats.hasDisplayAds,
          has_live_display_ads: ad_formats.hasLiveDisplayAds
        } : undefined,
        ad_breaks: ad_breaks ? {
          has_preroll_ads: ad_breaks.hasPrerollAds,
          has_midroll_ads: ad_breaks.hasMidrollAds,
          has_postroll_ads: ad_breaks.hasPostrollAds,
          auto_gen_midrolls_status: Reflect.has(ad_breaks, 'autoGenMidrollsStatus') ? ad_breaks.autoGenMidrollsStatus.replace('AUTO_GEN_MIDROLLS_STATUS_', '') : undefined
        } : undefined
      };
    }

    if (Reflect.has(data, 'videoPrechecks')) {
      const raw_prechecks = data.videoPrechecks;
      const community_guidelines_details = raw_prechecks.additionalDetails?.communityGuidelinesDetails;
      this.video_prechecks = {
        copyright_prechecks_done: raw_prechecks.copyrightPrechecksDone,
        brand_safety_prechecks_done: raw_prechecks.brandSafetyPrechecksDone,
        video_upload_checks_monetized: Reflect.has(raw_prechecks, 'videoUploadChecksMonetized') ? new VideoUploadChecks(raw_prechecks.videoUploadChecksMonetized) : undefined,
        video_upload_checks_not_monetized: Reflect.has(raw_prechecks, 'videoUploadChecksNotMonetized') ? new VideoUploadChecks(raw_prechecks.videoUploadChecksNotMonetized) : undefined,
        additional_details: Reflect.has(raw_prechecks, 'additionalDetails') ? {
          community_guidelines_details: community_guidelines_details ? {
            all_policy_details: Array.isArray(community_guidelines_details.allPolicyDetails) ?
              community_guidelines_details.allPolicyDetails.map((policy_detail: RawNode) => ({
                vertical: Reflect.has(policy_detail, 'vertical') ? policy_detail.vertical.replace('TOU_POLICY_VERTICAL_', '') : undefined
              })) : undefined,
            human_review_state: Reflect.has(community_guidelines_details, 'humanReviewState') ? community_guidelines_details.humanReviewState.replace('HUMAN_REVIEW_STATE_', '') : undefined
          } : undefined
        } : undefined
      };
    }

    if (Reflect.has(data, 'viewCountIsHidden')) {
      this.view_count_is_hidden = data.viewCountIsHidden;
    }

    if (Reflect.has(data, 'notification')) {
      this.notification = {
        precheck_notifications_enabled: data.notification.precheckNotificationsEnabled
      };
    }

    if (Reflect.has(data, 'mfkSettings')) {
      const mfk_settings = data.mfkSettings;
      this.mfk_settings = {
        mfk_by_creator: Reflect.has(mfk_settings, 'mfkByCreator') ? mfk_settings.mfkByCreator.replace('VIDEO_MADE_FOR_KIDS_', '') : undefined,
        mfk_without_creator_input: Reflect.has(mfk_settings, 'mfkWithoutCreatorInput') ? mfk_settings.mfkWithoutCreatorInput.replace('VIDEO_MADE_FOR_KIDS_', '') : undefined,
        override_enabled: mfk_settings.overrideEnabled,
        effective_mfk: Reflect.has(mfk_settings, 'effectiveMfk') ? mfk_settings.effectiveMfk.replace('VIDEO_MADE_FOR_KIDS_', '') : undefined,
        imposer: Reflect.has(mfk_settings, 'imposer') ? mfk_settings.imposer.replace('VIDEO_MADE_FOR_KIDS_IMPOSER_', '') : undefined
      };
    }

    if (Reflect.has(data, 'autoChapterSettings')) {
      this.auto_chapter_settings = {
        creator_opt_out: data.autoChapterSettings.creatorOptOut
      };
    }

    if (Reflect.has(data, 'remix')) {
      const remix = data.remix;
      this.remix = {
        remix_source_option_eligibility: Reflect.has(remix, 'remixSourceOptionEligibility') ? remix.remixSourceOptionEligibility.replace('REMIX_SOURCE_OPTION_ELIGIBILITY_', '') : undefined,
        is_source: remix.isSource,
        remix_source_shorts: Reflect.has(remix, 'remixSourceShorts') ? remix.remixSourceShorts.replace('REMIX_SOURCE_SHORTS_', '') : undefined
      };
    }

    if (Reflect.has(data, 'contentOwnershipModelSettings')) {
      this.content_ownership_model_settings = {
        is_off_network_upload: data.contentOwnershipModelSettings.isOffNetworkUpload
      };
    }

    if (Reflect.has(data, 'publicMetrics')) {
      const public_metrics = data.publicMetrics;
      this.public_metrics = {
        view_count: Number(public_metrics.viewCount),
        comment_count: Number(public_metrics.commentCount),
        like_count: Number(public_metrics.likeCount),
        external_view_count: Number(public_metrics.externalViewCount)
      };
    }

    if (Reflect.has(data, 'autoPlacesMentionedSettings')) {
      this.auto_places_mentioned_settings = {
        creator_opt_out: data.autoPlacesMentionedSettings.creatorOptOut
      };
    }

    if (Reflect.has(data, 'shorts')) {
      this.shorts = {
        is_shorts_renderable: data.shorts.isShortsRenderable
      };
    }

    if (Reflect.has(data, 'contentType')) {
      this.content_type = data.contentType.replace('CREATOR_CONTENT_TYPE_', '');
    }

    if (Reflect.has(data, 'isPaygated')) {
      this.is_paygated = data.isPaygated;
    }

    if (Reflect.has(data, 'learningConceptSettings')) {
      this.learning_concept_settings = {
        creator_opt_out: data.learningConceptSettings.creatorOptOut
      };
    }

    if (Reflect.has(data, 'commentSettings')) {
      const comment_settings = data.commentSettings;
      this.comment_settings = {
        comments_enabled_state: Reflect.has(comment_settings, 'commentsEnabledState') ? comment_settings.commentsEnabledState.replace('VIDEO_COMMENTS_ENABLED_STATE_', '') : undefined,
        allowed_commenter_mode: Reflect.has(comment_settings, 'allowedCommenterMode') ? comment_settings.allowedCommenterMode.replace('ALLOWED_COMMENTER_MODE_', '') : undefined,
        commenter_minimum_subscription_time: Reflect.has(comment_settings, 'commenterMinimumSubscriptionTime') ? comment_settings.commenterMinimumSubscriptionTime.replace('COMMENTER_MINIMUM_SUBSCRIPTION_TIME_', '') : undefined
      };
    }

    if (Reflect.has(data, 'productAutotaggingSettings')) {
      this.product_autotagging_settings = {
        creator_opt_out: data.productAutotaggingSettings.creatorOptOut
      };
    }

    if (Reflect.has(data, 'collaboration')) {
      this.collaboration = {
        serialized_share_entity: data.collaboration.serializedShareEntity
      };
    }

    if (Reflect.has(data, 'paidPoliticalContent')) {
      this.paid_political_content = {
        paid_product_placement_political_content_from_eu_creator: data.paidPoliticalContent.paidProductPlacementPoliticalContentFromEuCreator
      };
    }

    if (Reflect.has(data, 'superfansOnly')) {
      this.superfans_only = {
        is_superfans_only: data.superfansOnly.isSuperfansOnly
      };
    }
  }
}
