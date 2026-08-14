import { YTNode } from '../../helpers.js';
import { type RawNode } from '../../index.js';
import { parseAll, parseObject } from '../../parser.js';
import Thumbnail from '../misc/Thumbnail.js';
import VideoUploadChecks from './VideoUploadChecks.js';

export type CreatorVideoStatus =
  'VIDEO_STATUS_DELETED' | 'VIDEO_STATUS_FAILED' | 'VIDEO_STATUS_PROCESSED' |
  'VIDEO_STATUS_REJECTED' | 'VIDEO_STATUS_UNKNOWN' | 'VIDEO_STATUS_UPLOADED' | 'VIDEO_STATUS_WRONG';

export type DraftStatus = 'DRAFT_STATUS_NONE' | 'DRAFT_STATUS_PUBLIC' | 'DRAFT_STATUS_SCHEDULED';

export type CreatorVideoPrivacy =
  'VIDEO_PRIVACY_PRIVATE' | 'VIDEO_PRIVACY_PUBLIC' | 'VIDEO_PRIVACY_SCHEDULED' |
  'VIDEO_PRIVACY_UNKNOWN' | 'VIDEO_PRIVACY_UNLISTED';

export type CreatorVideoCategory =
  'CREATOR_VIDEO_CATEGORY_AUTOS' | 'CREATOR_VIDEO_CATEGORY_COMEDY' | 'CREATOR_VIDEO_CATEGORY_EDUCATION' |
  'CREATOR_VIDEO_CATEGORY_ENTERTAINMENT' | 'CREATOR_VIDEO_CATEGORY_FILM' | 'CREATOR_VIDEO_CATEGORY_GADGETS' |
  'CREATOR_VIDEO_CATEGORY_GOVERNMENT' | 'CREATOR_VIDEO_CATEGORY_HOWTO' | 'CREATOR_VIDEO_CATEGORY_MUSIC' |
  'CREATOR_VIDEO_CATEGORY_NEWS' | 'CREATOR_VIDEO_CATEGORY_PEOPLE' | 'CREATOR_VIDEO_CATEGORY_PETS' |
  'CREATOR_VIDEO_CATEGORY_SCIENCE' | 'CREATOR_VIDEO_CATEGORY_SPORTS' | 'CREATOR_VIDEO_CATEGORY_TRAVEL' |
  'CREATOR_VIDEO_CATEGORY_UNKNOWN';

export type VideoCommentFilter =
  'VIDEO_COMMENT_FILTER_APPROVE' | 'VIDEO_COMMENT_FILTER_AUTO_MODERATE' |
  'VIDEO_COMMENT_FILTER_AUTO_MODERATE_HOLD_MORE' | 'VIDEO_COMMENT_FILTER_NONE' | 'VIDEO_COMMENT_FILTER_UNKNOWN';

export type VideoCommentSortOrder = 'VIDEO_COMMENT_SORT_ORDER_LATEST' | 'VIDEO_COMMENT_SORT_ORDER_TOP';

export type VideoAgeRestriction =
  'VIDEO_AGE_RESTRICTION_APPEAL_BUTTON' | 'VIDEO_AGE_RESTRICTION_NONE' |
  'VIDEO_AGE_RESTRICTION_SELF' | 'VIDEO_AGE_RESTRICTION_SYSTEM';

export type VideoLicense = 'VIDEO_LICENSE_CREATIVE_COMMONS' | 'VIDEO_LICENSE_STANDARD' | 'VIDEO_LICENSE_UNKNOWN';

export type VideoUncaptionedReason =
  'VIDEO_UNCAPTIONED_REASON_CAPTIONLESS_TV_CONTENT' | 'VIDEO_UNCAPTIONED_REASON_EXCEPTION_GRANTED' |
  'VIDEO_UNCAPTIONED_REASON_LEGACY' | 'VIDEO_UNCAPTIONED_REASON_NO_FULL_LENGTH_VIDEO' |
  'VIDEO_UNCAPTIONED_REASON_NO_US_TV_CONTENT' | 'VIDEO_UNCAPTIONED_REASON_NOT_REQUIRED' |
  'VIDEO_UNCAPTIONED_REASON_UNNECESSARY_OR_NOT_SET';

export type VideoSubscriberNotification =
  'VIDEO_SUBSCRIBER_NOTIFICATION_DISABLED' | 'VIDEO_SUBSCRIBER_NOTIFICATION_ENABLED' |
  'VIDEO_SUBSCRIBER_NOTIFICATION_NONE' | 'VIDEO_SUBSCRIBER_NOTIFICATION_UNKNOWN';

export type VideoPaidProductPlacement =
  'VIDEO_PAID_PRODUCT_PLACEMENT_NO' | 'VIDEO_PAID_PRODUCT_PLACEMENT_NOTIFY' |
  'VIDEO_PAID_PRODUCT_PLACEMENT_UNKNOWN' | 'VIDEO_PAID_PRODUCT_PLACEMENT_UNSET' | 'VIDEO_PAID_PRODUCT_PLACEMENT_YES';

export type VideoMusicLicensedStatus =
  'VIDEO_MUSIC_LICENSED_STATUS_CLAIMED_BY_CHANNEL_OWNER' | 'VIDEO_MUSIC_LICENSED_STATUS_DISABLED_BY_CLAIM_PREFERENCE' |
  'VIDEO_MUSIC_LICENSED_STATUS_ENABLED_BY_CHANNEL_OWNER' | 'VIDEO_MUSIC_LICENSED_STATUS_ENABLED_BY_CHANNEL_OWNER_UNCLAIMED' |
  'VIDEO_MUSIC_LICENSED_STATUS_ENABLED_BY_PARTNER_UPLOADED_CLAIM' | 'VIDEO_MUSIC_LICENSED_STATUS_ENABLED_BY_THIRD_PARTY_CLAIMS' |
  'VIDEO_MUSIC_LICENSED_STATUS_UNCLAIMED';

export type VideoUserSetMonetization = 'VIDEO_USER_SET_MONETIZATION_OFF' | 'VIDEO_USER_SET_MONETIZATION_ON';

export type VideoMonetizingStatus =
  'VIDEO_MONETIZING_STATUS_INDETERMINATE' | 'VIDEO_MONETIZING_STATUS_MONETIZING' |
  'VIDEO_MONETIZING_STATUS_MONETIZING_CREATOR_REVSHARE' | 'VIDEO_MONETIZING_STATUS_MONETIZING_IN_ESCROW' |
  'VIDEO_MONETIZING_STATUS_MONETIZING_WITH_EXCEPTIONS' | 'VIDEO_MONETIZING_STATUS_MONETIZING_WITH_LIMITED_ADS' |
  'VIDEO_MONETIZING_STATUS_MONETIZING_WITH_REVSHARE' | 'VIDEO_MONETIZING_STATUS_NOT_FOR_DISPLAY' |
  'VIDEO_MONETIZING_STATUS_NOT_MONETIZING_CHANNEL_NOT_MONETIZING' | 'VIDEO_MONETIZING_STATUS_NOT_MONETIZING_INELIGIBLE' |
  'VIDEO_MONETIZING_STATUS_NOT_MONETIZING_INELIGIBLE_INNOCUOUS' | 'VIDEO_MONETIZING_STATUS_NOT_MONETIZING_OFF' |
  'VIDEO_MONETIZING_STATUS_NOT_MONETIZING_OFF_CREATOR_REVSHARE' | 'VIDEO_MONETIZING_STATUS_NOT_MONETIZING_OFF_SHORTS_REVSHARE' |
  'VIDEO_MONETIZING_STATUS_NOT_MONETIZING_OFF_WITH_REVSHARE' | 'VIDEO_MONETIZING_STATUS_PENDING_CHECKS' |
  'VIDEO_MONETIZING_STATUS_UNSPECIFIED' | 'VIDEO_MONETIZING_STATUS_VIDEO_NOT_FINAL';

export type VideoVisibilityStatus =
  'VIDEO_VISIBILITY_STATUS_AGE_RESTRICTED' | 'VIDEO_VISIBILITY_STATUS_BLOCKED_FOR_COPYRIGHT_GLOBALLY' |
  'VIDEO_VISIBILITY_STATUS_BLOCKED_FOR_COPYRIGHT_PARTIALLY' | 'VIDEO_VISIBILITY_STATUS_DRAFT' |
  'VIDEO_VISIBILITY_STATUS_FORCED_PRIVATE' | 'VIDEO_VISIBILITY_STATUS_INDETERMINATE' |
  'VIDEO_VISIBILITY_STATUS_LIMITED_FEATURES' | 'VIDEO_VISIBILITY_STATUS_PENDING_REMOVAL_FOR_COPYRIGHT' |
  'VIDEO_VISIBILITY_STATUS_REMOVED_FOR_COMMUNITY_GUIDELINES' | 'VIDEO_VISIBILITY_STATUS_REMOVED_FOR_COPYRIGHT' |
  'VIDEO_VISIBILITY_STATUS_TARGETED_FOR_KIDS' | 'VIDEO_VISIBILITY_STATUS_UNKNOWN' |
  'VIDEO_VISIBILITY_STATUS_UPLOAD_FAILED' | 'VIDEO_VISIBILITY_STATUS_UPLOADING_OR_PROCESSING' |
  'VIDEO_VISIBILITY_STATUS_USER_CONFIG';

export type VideoUserSetVisibility =
  'VIDEO_USER_SET_VISIBILITY_DRAFT' | 'VIDEO_USER_SET_VISIBILITY_FUTURE_PREMIERE' | 'VIDEO_USER_SET_VISIBILITY_MEMBERS' |
  'VIDEO_USER_SET_VISIBILITY_PREMIERING' | 'VIDEO_USER_SET_VISIBILITY_PRIMETIME_SUBSCRIBERS' | 'VIDEO_USER_SET_VISIBILITY_PRIVATE' |
  'VIDEO_USER_SET_VISIBILITY_PUBLIC' | 'VIDEO_USER_SET_VISIBILITY_SCHEDULED' |
  'VIDEO_USER_SET_VISIBILITY_SCHEDULED_TO_PRIMETIME_SUBSCRIBERS' | 'VIDEO_USER_SET_VISIBILITY_SPECIFIC_PEOPLE' |
  'VIDEO_USER_SET_VISIBILITY_SUPERFANS' | 'VIDEO_USER_SET_VISIBILITY_UNLISTED' | 'VIDEO_USER_SET_VISIBILITY_UNSPECIFIED';

export type VideoUserInflictedVisibility = 'VIDEO_USER_INFLICTED_VISIBILITY_AGE_RESTRICTED' | 'VIDEO_USER_INFLICTED_VISIBILITY_UNSPECIFIED';

export type VideoEffectiveVisibility =
  'VIDEO_EFFECTIVE_VISIBILITY_BLOCKED' | 'VIDEO_EFFECTIVE_VISIBILITY_FORCED_PRIVATE' |
  'VIDEO_EFFECTIVE_VISIBILITY_REMOVED' | 'VIDEO_EFFECTIVE_VISIBILITY_UNSPECIFIED' |
  'VIDEO_EFFECTIVE_VISIBILITY_UPLOAD_FAILED' | 'VIDEO_EFFECTIVE_VISIBILITY_UPLOADING_OR_PROCESSING' |
  'VIDEO_EFFECTIVE_VISIBILITY_USER_CONFIG';

export type VideoOrigin = 'VIDEO_ORIGIN_LIVESTREAM' | 'VIDEO_ORIGIN_STORY' | 'VIDEO_ORIGIN_UNKNOWN' | 'VIDEO_ORIGIN_UPLOAD';

export type VideoProcessingStatus =
  'VIDEO_PROCESSING_STATUS_EDITED' | 'VIDEO_PROCESSING_STATUS_FAILED' | 'VIDEO_PROCESSING_STATUS_PROCESSING' |
  'VIDEO_PROCESSING_STATUS_PROCESSING_NON_PRIMARY_ASSETS' | 'VIDEO_PROCESSING_STATUS_READY' |
  'VIDEO_PROCESSING_STATUS_REVERTED' | 'VIDEO_PROCESSING_STATUS_UNEDITED' | 'VIDEO_PROCESSING_STATUS_UNKNOWN';

export type VideoTargetedAudience =
  'VIDEO_TARGETED_AUDIENCE_ALL' | 'VIDEO_TARGETED_AUDIENCE_AGE_RESTRICTED' |
  'VIDEO_TARGETED_AUDIENCE_CROSSWALK' | 'VIDEO_TARGETED_AUDIENCE_UNKNOWN';

export type VideoTargetedAudienceImposer =
  'VIDEO_TARGETED_AUDIENCE_IMPOSER_SELF' | 'VIDEO_TARGETED_AUDIENCE_IMPOSER_SYSTEM' | 'VIDEO_TARGETED_AUDIENCE_IMPOSER_UNSPECIFIED';

export type ResolutionStatus =
  'RESOLUTION_STATUS_APPEAL_IN_PROGRESS' | 'RESOLUTION_STATUS_APPEAL_REJECTED' | 'RESOLUTION_STATUS_AVAILABLE' |
  'RESOLUTION_STATUS_DEFERRED' | 'RESOLUTION_STATUS_DONE' | 'RESOLUTION_STATUS_PROCESSING' |
  'RESOLUTION_STATUS_STARTING_SOON' | 'RESOLUTION_STATUS_UNAVAILABLE' | 'RESOLUTION_STATUS_UNKNOWN' |
  'RESOLUTION_STATUS_UNSPECIFIED';

export type MonetizedStatus = 'MONETIZED_STATUS_ACTIVE' | 'MONETIZED_STATUS_INACTIVE' | 'MONETIZED_STATUS_UNSPECIFIED';

export type RestrictionsSeverity =
  'VIDEO_RESTRICTIONS_SEVERITY_HIGH' | 'VIDEO_RESTRICTIONS_SEVERITY_LOW' |
  'VIDEO_RESTRICTIONS_SEVERITY_MEDIUM' | 'VIDEO_RESTRICTIONS_SEVERITY_UNSPECIFIED';

export type AutoGenMidrollsStatus = 'AUTO_GEN_MIDROLLS_STATUS_AVAILABLE' | 'AUTO_GEN_MIDROLLS_STATUS_FAILED' | 'AUTO_GEN_MIDROLLS_STATUS_PROCESSING';

export type VideoCopyrightSummaryStatus =
  'VIDEO_COPYRIGHT_SUMMARY_STATUS_BLOCKED' | 'VIDEO_COPYRIGHT_SUMMARY_STATUS_COPYRIGHT_CONTENT_FOUND' |
  'VIDEO_COPYRIGHT_SUMMARY_STATUS_COUNTER_REJECTED' | 'VIDEO_COPYRIGHT_SUMMARY_STATUS_DELAYED_TAKEDOWN' |
  'VIDEO_COPYRIGHT_SUMMARY_STATUS_EXPIRED_STRIKE_TAKEDOWN' | 'VIDEO_COPYRIGHT_SUMMARY_STATUS_LICENSED' |
  'VIDEO_COPYRIGHT_SUMMARY_STATUS_LIKENESS_CLAIM' | 'VIDEO_COPYRIGHT_SUMMARY_STATUS_LIKENESS_PENDING_REMOVAL' |
  'VIDEO_COPYRIGHT_SUMMARY_STATUS_LIKENESS_REMOVAL' | 'VIDEO_COPYRIGHT_SUMMARY_STATUS_MONETIZABLE_WITH_LICENSES' |
  'VIDEO_COPYRIGHT_SUMMARY_STATUS_MONETIZATION_CREATOR_REVSHARE' | 'VIDEO_COPYRIGHT_SUMMARY_STATUS_MONETIZATION_CREATOR_REVSHARE_ELIGIBLE' |
  'VIDEO_COPYRIGHT_SUMMARY_STATUS_MONETIZATION_ENABLED_WITH_LICENSES' | 'VIDEO_COPYRIGHT_SUMMARY_STATUS_MONETIZATION_RESTRICTED' |
  'VIDEO_COPYRIGHT_SUMMARY_STATUS_MONETIZATION_REVSHARE_ELIGIBLE' | 'VIDEO_COPYRIGHT_SUMMARY_STATUS_MONETIZATION_REVSHARE_ENABLED' |
  'VIDEO_COPYRIGHT_SUMMARY_STATUS_MONETIZATION_SHORTS_REVSHARE' | 'VIDEO_COPYRIGHT_SUMMARY_STATUS_MONETIZATION_SHORTS_REVSHARE_ELIGIBLE' |
  'VIDEO_COPYRIGHT_SUMMARY_STATUS_MONETIZATION_UNAVAILABLE' | 'VIDEO_COPYRIGHT_SUMMARY_STATUS_MULTIPLE_CLAIMS' |
  'VIDEO_COPYRIGHT_SUMMARY_STATUS_MULTIPLE_REMOVALS' | 'VIDEO_COPYRIGHT_SUMMARY_STATUS_NO_CLAIMS_FOUND' |
  'VIDEO_COPYRIGHT_SUMMARY_STATUS_PARTIALLY_BLOCKED_REVSHARE_ENABLED' | 'VIDEO_COPYRIGHT_SUMMARY_STATUS_SHORTS_NO_UPLOADER_CLAIM' |
  'VIDEO_COPYRIGHT_SUMMARY_STATUS_STRIKE_TAKEDOWN' | 'VIDEO_COPYRIGHT_SUMMARY_STATUS_TAKEDOWN' |
  'VIDEO_COPYRIGHT_SUMMARY_STATUS_TAKEDOWN_COUNTER' | 'VIDEO_COPYRIGHT_SUMMARY_STATUS_TAKEDOWN_NO_STRIKE' |
  'VIDEO_COPYRIGHT_SUMMARY_STATUS_TAKEDOWN_UNDER_REVIEW' | 'VIDEO_COPYRIGHT_SUMMARY_STATUS_VIDEO_APPEAL' |
  'VIDEO_COPYRIGHT_SUMMARY_STATUS_VIDEO_DISPUTE';

export type VideoCopyrightChannelImpact =
  'VIDEO_COPYRIGHT_CHANNEL_IMPACT_NO_CHANNEL_IMPACT' | 'VIDEO_COPYRIGHT_CHANNEL_IMPACT_NO_CHANNEL_IMPACT_WITH_LICENSES' |
  'VIDEO_COPYRIGHT_CHANNEL_IMPACT_NO_CHANNEL_IMPACT_WITHOUT_CLAIMS' | 'VIDEO_COPYRIGHT_CHANNEL_IMPACT_PENDING_STRIKE_REVIEW' |
  'VIDEO_COPYRIGHT_CHANNEL_IMPACT_STRIKE' | 'VIDEO_COPYRIGHT_CHANNEL_IMPACT_STRIKE_COUNTER' |
  'VIDEO_COPYRIGHT_CHANNEL_IMPACT_STRIKE_EXPIRED' | 'VIDEO_COPYRIGHT_CHANNEL_IMPACT_STRIKE_PENDING' |
  'VIDEO_COPYRIGHT_CHANNEL_IMPACT_STRIKE_RELEASED_DURING_COUNTER';

export type VideoCopyrightVisibilityImpact =
  'VIDEO_COPYRIGHT_VISIBILITY_IMPACT_APPEAL' | 'VIDEO_COPYRIGHT_VISIBILITY_IMPACT_CLAIM_BLOCK' |
  'VIDEO_COPYRIGHT_VISIBILITY_IMPACT_CLAIM_PARTIAL_BLOCK' | 'VIDEO_COPYRIGHT_VISIBILITY_IMPACT_COMMERCIAL_SHORTS_BLOCK' |
  'VIDEO_COPYRIGHT_VISIBILITY_IMPACT_DELAYED_TAKEDOWN' | 'VIDEO_COPYRIGHT_VISIBILITY_IMPACT_DISPUTE' |
  'VIDEO_COPYRIGHT_VISIBILITY_IMPACT_LICENSE_RESTRICTED_SHORTS_BLOCK' | 'VIDEO_COPYRIGHT_VISIBILITY_IMPACT_LIKENESS_BLOCK' |
  'VIDEO_COPYRIGHT_VISIBILITY_IMPACT_MULTIPLE_CLAIMS_BLOCK' | 'VIDEO_COPYRIGHT_VISIBILITY_IMPACT_NOT_AFFECTED' |
  'VIDEO_COPYRIGHT_VISIBILITY_IMPACT_PENDING_LIKENESS_REMOVAL' | 'VIDEO_COPYRIGHT_VISIBILITY_IMPACT_TAKEDOWN' |
  'VIDEO_COPYRIGHT_VISIBILITY_IMPACT_TAKEDOWN_COUNTER' | 'VIDEO_COPYRIGHT_VISIBILITY_IMPACT_UNKNOWN';

export type VideoCopyrightMonetizationImpact =
  'VIDEO_COPYRIGHT_MONETIZATION_IMPACT_CLAIM_BLOCK' | 'VIDEO_COPYRIGHT_MONETIZATION_IMPACT_CLAIM_PARTIAL_BLOCK' |
  'VIDEO_COPYRIGHT_MONETIZATION_IMPACT_CLAIM_PARTIAL_BLOCK_MONETIZED' | 'VIDEO_COPYRIGHT_MONETIZATION_IMPACT_CREATOR_REVSHARE' |
  'VIDEO_COPYRIGHT_MONETIZATION_IMPACT_CREATOR_REVSHARE_ELIGIBLE' | 'VIDEO_COPYRIGHT_MONETIZATION_IMPACT_DO_NOT_DISPLAY' |
  'VIDEO_COPYRIGHT_MONETIZATION_IMPACT_LIKENESS_REVSHARE_ELIGIBLE' | 'VIDEO_COPYRIGHT_MONETIZATION_IMPACT_LIKENESS_REVSHARE_ENABLED' |
  'VIDEO_COPYRIGHT_MONETIZATION_IMPACT_MONETIZABLE_WITH_LICENSES' | 'VIDEO_COPYRIGHT_MONETIZATION_IMPACT_MONETIZED_DURING_DISPUTE' |
  'VIDEO_COPYRIGHT_MONETIZATION_IMPACT_NOT_AFFECTED' | 'VIDEO_COPYRIGHT_MONETIZATION_IMPACT_NOT_AFFECTED_LICENSED' |
  'VIDEO_COPYRIGHT_MONETIZATION_IMPACT_RESTRICTED' | 'VIDEO_COPYRIGHT_MONETIZATION_IMPACT_REVSHARE_ELIGIBLE' |
  'VIDEO_COPYRIGHT_MONETIZATION_IMPACT_REVSHARE_ENABLED' | 'VIDEO_COPYRIGHT_MONETIZATION_IMPACT_SHORTS_NO_UPLOADER_CLAIM' |
  'VIDEO_COPYRIGHT_MONETIZATION_IMPACT_SHUNA_CLAIM_DEMONETIZATION' | 'VIDEO_COPYRIGHT_MONETIZATION_IMPACT_TAKEDOWN' |
  'VIDEO_COPYRIGHT_MONETIZATION_IMPACT_UNKNOWN';

export type TouPolicyVertical =
  'TOU_POLICY_VERTICAL_CHILD_SAFETY' | 'TOU_POLICY_VERTICAL_HARMFUL_DANGEROUS' | 'TOU_POLICY_VERTICAL_SUICIDE_SELF_HARM' |
  'TOU_POLICY_VERTICAL_UNKNOWN' | 'TOU_POLICY_VERTICAL_VIOLENT_GRAPHIC_SHOCKING';

export type HumanReviewState = 'HUMAN_REVIEW_STATE_DONE' | 'HUMAN_REVIEW_STATE_INELIGIBLE' | 'HUMAN_REVIEW_STATE_NOT_REQUESTED';

export type VideoMadeForKids = 'VIDEO_MADE_FOR_KIDS_MFK' | 'VIDEO_MADE_FOR_KIDS_NOT_MFK' | 'VIDEO_MADE_FOR_KIDS_UNKNOWN';

export type VideoMadeForKidsImposer =
  'VIDEO_MADE_FOR_KIDS_IMPOSER_SELF' | 'VIDEO_MADE_FOR_KIDS_IMPOSER_UNSPECIFIED' | 'VIDEO_MADE_FOR_KIDS_IMPOSER_YOUTUBE';

export type RemixSourceOptionEligibility =
  'REMIX_SOURCE_OPTION_ELIGIBILITY_BY_CLIENT' | 'REMIX_SOURCE_OPTION_ELIGIBILITY_ELIGIBLE' | 'REMIX_SOURCE_OPTION_ELIGIBILITY_INELIGIBLE';

export type RemixSourceShorts = 'REMIX_SOURCE_SHORTS_IS_SHORT' | 'REMIX_SOURCE_SHORTS_NOT_SHORT' | 'REMIX_SOURCE_SHORTS_PROCESSING';

export type VideoCommentsEnabledState =
  'VIDEO_COMMENTS_ENABLED_STATE_OFF' | 'VIDEO_COMMENTS_ENABLED_STATE_ON' |
  'VIDEO_COMMENTS_ENABLED_STATE_PAUSED' | 'VIDEO_COMMENTS_ENABLED_STATE_UNKNOWN';

export type AllowedCommenterMode =
  'ALLOWED_COMMENTER_MODE_ANYONE' | 'ALLOWED_COMMENTER_MODE_SUBSCRIBERS_MEMBERS_APPROVED_USERS' | 'ALLOWED_COMMENTER_MODE_UNKNOWN';

export type CommenterMinimumSubscriptionTime =
  'COMMENTER_MINIMUM_SUBSCRIPTION_TIME_ANY' | 'COMMENTER_MINIMUM_SUBSCRIPTION_TIME_ONE_DAY' |
  'COMMENTER_MINIMUM_SUBSCRIPTION_TIME_ONE_HOUR' | 'COMMENTER_MINIMUM_SUBSCRIPTION_TIME_ONE_WEEK' |
  'COMMENTER_MINIMUM_SUBSCRIPTION_TIME_UNKNOWN';

export type CreatorContentType =
  'CREATOR_CONTENT_TYPE_LIVE_STREAM' | 'CREATOR_CONTENT_TYPE_SHORTS' |
  'CREATOR_CONTENT_TYPE_UNSPECIFIED' | 'CREATOR_CONTENT_TYPE_VIDEO_ON_DEMAND';

export type CreatorVideoPermission =
  'CREATOR_VIDEO_PERMISSION_ANALYTICS_READ' | 'CREATOR_VIDEO_PERMISSION_BASIC_METADATA_READ' |
  'CREATOR_VIDEO_PERMISSION_CAPTIONS_READ' | 'CREATOR_VIDEO_PERMISSION_CAPTIONS_WRITE' |
  'CREATOR_VIDEO_PERMISSION_COLLABORATOR' | 'CREATOR_VIDEO_PERMISSION_COLLABORATOR_INVITEE' |
  'CREATOR_VIDEO_PERMISSION_COLLABORATOR_LIMITED' | 'CREATOR_VIDEO_PERMISSION_COLLABORATOR_LIMITED_INVITEE' |
  'CREATOR_VIDEO_PERMISSION_COMMENTS_MANAGER' | 'CREATOR_VIDEO_PERMISSION_COMMENTS_READ' |
  'CREATOR_VIDEO_PERMISSION_COMMENT_SETTINGS_READ' | 'CREATOR_VIDEO_PERMISSION_COMMENT_SETTINGS_WRITE' |
  'CREATOR_VIDEO_PERMISSION_DELETE' | 'CREATOR_VIDEO_PERMISSION_DOWNLOAD' |
  'CREATOR_VIDEO_PERMISSION_ENFORCEMENT_APPELLANT' | 'CREATOR_VIDEO_PERMISSION_ENFORCEMENT_READER' |
  'CREATOR_VIDEO_PERMISSION_MONETIZATION_SETTINGS_READ' | 'CREATOR_VIDEO_PERMISSION_MONETIZATION_WRITE' |
  'CREATOR_VIDEO_PERMISSION_PRIVACY_STATUS_PRIVATE_WRITE' | 'CREATOR_VIDEO_PERMISSION_PRIVACY_STATUS_PUBLIC_WRITE' |
  'CREATOR_VIDEO_PERMISSION_RATING_SETTINGS_WRITE' | 'CREATOR_VIDEO_PERMISSION_READ' |
  'CREATOR_VIDEO_PERMISSION_WATCH' | 'CREATOR_VIDEO_PERMISSION_WRITE';

export type CreatorEntityStatus = 'CREATOR_ENTITY_STATUS_FAILURE' | 'CREATOR_ENTITY_STATUS_OK' | 'CREATOR_ENTITY_STATUS_PARTIAL_FAILURE';

export type CreatorFeatureStatus =
  'CREATOR_FEATURE_STATUS_DISABLED' | 'CREATOR_FEATURE_STATUS_ELIGIBLE' |
  'CREATOR_FEATURE_STATUS_ENABLED' | 'CREATOR_FEATURE_STATUS_UNKNOWN';

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
  status_details?: 'CREATOR_FEATURE_STATUS_DETAILS_NOT_APPLICABLE';
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

function toInt(value: unknown): number | undefined {
  if (typeof value === 'number') return value;
  if (typeof value !== 'string' || value === '' || isNaN(Number(value))) return undefined;
  return parseInt(value, 10);
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
      this.privacy = data.privacy;
    }

    if (Reflect.has(data, 'status')) {
      this.status = data.status;
    }

    if (Reflect.has(data, 'draftStatus')) {
      this.draft_status = data.draftStatus;
    }

    if (Reflect.has(data, 'shareUrl')) {
      this.share_url = data.shareUrl;
    }

    if (Reflect.has(data, 'watchUrl')) {
      this.watch_url = data.watchUrl;
    }

    if (Reflect.has(data, 'lengthSeconds')) {
      this.length_seconds = toInt(data.lengthSeconds);
    }

    if (Reflect.has(data, 'videoDurationMs')) {
      this.video_duration_ms = toInt(data.videoDurationMs);
    }

    if (Reflect.has(data, 'timeCreatedSeconds')) {
      this.time_created_seconds = toInt(data.timeCreatedSeconds);
    }

    if (Reflect.has(data, 'timePublishedSeconds')) {
      this.time_published_seconds = toInt(data.timePublishedSeconds);
    }

    if (Reflect.has(data, 'thumbnailDetails')) {
      this.thumbnail_details = Thumbnail.fromResponse(data.thumbnailDetails);
    }

    if (Reflect.has(data, 'claimDetails')) {
      this.claim_details = parseObject<ClaimDetails>(data.claimDetails);
    }

    if (Reflect.has(data, 'permissions')) {
      this.permissions = parseObject<Permissions>(data.permissions);
    }

    if (Reflect.has(data, 'responseStatus')) {
      this.response_status = parseObject<ResponseStatus>(data.responseStatus);
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
      this.video_editor_project = parseObject<VideoEditorProject>(data.videoEditorProject);
    }

    if (Reflect.has(data, 'statusDetails')) {
      this.status_details = parseObject<StatusDetails>(data.statusDetails);
    }

    if (Reflect.has(data, 'tags')) {
      this.tags = parseAll<VideoTag>(data.tags);
    }

    if (Reflect.has(data, 'category')) {
      this.category = data.category;
    }

    if (Reflect.has(data, 'commentFilter')) {
      this.comment_filter = data.commentFilter;
    }

    if (Reflect.has(data, 'defaultCommentSortOrder')) {
      this.default_comment_sort_order = data.defaultCommentSortOrder;
    }

    if (Reflect.has(data, 'audioLanguage')) {
      this.audio_language = parseObject<AudioLanguage>(data.audioLanguage);
    }

    if (Reflect.has(data, 'allowRatings')) {
      this.allow_ratings = data.allowRatings;
    }

    if (Reflect.has(data, 'ageRestriction')) {
      this.age_restriction = data.ageRestriction;
    }

    if (Reflect.has(data, 'license')) {
      this.license = data.license;
    }

    if (Reflect.has(data, 'features')) {
      this.features = parseObject<Record<string, FeatureState>>(data.features);
    }

    if (Reflect.has(data, 'uncaptionedReason')) {
      this.uncaptioned_reason = data.uncaptionedReason;
    }

    if (Reflect.has(data, 'publishing')) {
      this.publishing = parseObject<Publishing>(data.publishing);
    }

    if (Reflect.has(data, 'paidProductPlacement')) {
      this.paid_product_placement = data.paidProductPlacement;
    }

    if (Reflect.has(data, 'allowEmbed')) {
      this.allow_embed = data.allowEmbed;
    }

    if (Reflect.has(data, 'music')) {
      this.music = parseObject<Music>(data.music);
    }

    if (Reflect.has(data, 'monetization')) {
      this.monetization = parseObject<Monetization>(data.monetization);
    }

    if (Reflect.has(data, 'visibility')) {
      this.visibility = parseObject<VideoVisibility>(data.visibility);
    }

    if (Reflect.has(data, 'origin')) {
      this.origin = data.origin;
    }

    if (Reflect.has(data, 'inlineEditProcessingStatus')) {
      this.inline_edit_processing_status = data.inlineEditProcessingStatus;
    }

    if (Reflect.has(data, 'copyrightSummary')) {
      this.copyright_summary = parseObject<CopyrightSummary>(data.copyrightSummary);
    }

    if (Reflect.has(data, 'sponsorsOnly')) {
      this.sponsors_only = parseObject<SponsorsOnly>(data.sponsorsOnly);
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
      this.audience_restriction = parseObject<AudienceRestriction>(data.audienceRestriction);
    }

    if (Reflect.has(data, 'ownedClaimDetails')) {
      this.owned_claim_details = parseObject<OwnedClaimDetails>(data.ownedClaimDetails);
    }

    if (Reflect.has(data, 'monetizedStatus')) {
      this.monetized_status = data.monetizedStatus;
    }

    if (Reflect.has(data, 'commentsDisabledInternally')) {
      this.comments_disabled_internally = data.commentsDisabledInternally;
    }

    if (Reflect.has(data, 'allRestrictions')) {
      this.all_restrictions = parseObject<AllRestrictions>(data.allRestrictions);
    }

    if (Reflect.has(data, 'videoResolutions')) {
      this.video_resolutions = parseObject<VideoResolutions>(data.videoResolutions);
    }

    if (Reflect.has(data, 'adSettings')) {
      this.ad_settings = parseObject<AdSettings>(data.adSettings);
    }

    if (Reflect.has(data, 'videoPrechecks')) {
      const raw_prechecks = data.videoPrechecks;
      this.video_prechecks = {
        copyright_prechecks_done: raw_prechecks.copyrightPrechecksDone,
        brand_safety_prechecks_done: raw_prechecks.brandSafetyPrechecksDone,
        video_upload_checks_monetized: Reflect.has(raw_prechecks, 'videoUploadChecksMonetized') ? new VideoUploadChecks(raw_prechecks.videoUploadChecksMonetized) : undefined,
        video_upload_checks_not_monetized: Reflect.has(raw_prechecks, 'videoUploadChecksNotMonetized') ? new VideoUploadChecks(raw_prechecks.videoUploadChecksNotMonetized) : undefined,
        additional_details: Reflect.has(raw_prechecks, 'additionalDetails') ? parseObject<AdditionalDetails>(raw_prechecks.additionalDetails) : undefined
      };
    }

    if (Reflect.has(data, 'viewCountIsHidden')) {
      this.view_count_is_hidden = data.viewCountIsHidden;
    }

    if (Reflect.has(data, 'notification')) {
      this.notification = parseObject<Notification>(data.notification);
    }

    if (Reflect.has(data, 'mfkSettings')) {
      this.mfk_settings = parseObject<MfkSettings>(data.mfkSettings);
    }

    if (Reflect.has(data, 'autoChapterSettings')) {
      this.auto_chapter_settings = parseObject<CreatorOptOutSetting>(data.autoChapterSettings);
    }

    if (Reflect.has(data, 'remix')) {
      this.remix = parseObject<Remix>(data.remix);
    }

    if (Reflect.has(data, 'contentOwnershipModelSettings')) {
      this.content_ownership_model_settings = parseObject<ContentOwnershipModelSettings>(data.contentOwnershipModelSettings);
    }

    if (Reflect.has(data, 'publicMetrics')) {
      const public_metrics = parseObject<PublicMetrics>(data.publicMetrics);
      for (const key of [ 'view_count', 'comment_count', 'like_count', 'external_view_count' ] as const) {
        if (Reflect.has(public_metrics, key)) {
          public_metrics[key] = toInt(public_metrics[key]);
        }
      }
      this.public_metrics = public_metrics;
    }

    if (Reflect.has(data, 'autoPlacesMentionedSettings')) {
      this.auto_places_mentioned_settings = parseObject<CreatorOptOutSetting>(data.autoPlacesMentionedSettings);
    }

    if (Reflect.has(data, 'shorts')) {
      this.shorts = parseObject<Shorts>(data.shorts);
    }

    if (Reflect.has(data, 'contentType')) {
      this.content_type = data.contentType;
    }

    if (Reflect.has(data, 'isPaygated')) {
      this.is_paygated = data.isPaygated;
    }

    if (Reflect.has(data, 'learningConceptSettings')) {
      this.learning_concept_settings = parseObject<CreatorOptOutSetting>(data.learningConceptSettings);
    }

    if (Reflect.has(data, 'commentSettings')) {
      this.comment_settings = parseObject<CommentSettings>(data.commentSettings);
    }

    if (Reflect.has(data, 'productAutotaggingSettings')) {
      this.product_autotagging_settings = parseObject<CreatorOptOutSetting>(data.productAutotaggingSettings);
    }

    if (Reflect.has(data, 'collaboration')) {
      this.collaboration = parseObject<Collaboration>(data.collaboration);
    }

    if (Reflect.has(data, 'paidPoliticalContent')) {
      this.paid_political_content = parseObject<PaidPoliticalContent>(data.paidPoliticalContent);
    }

    if (Reflect.has(data, 'superfansOnly')) {
      this.superfans_only = parseObject<SuperfansOnly>(data.superfansOnly);
    }
  }
}
