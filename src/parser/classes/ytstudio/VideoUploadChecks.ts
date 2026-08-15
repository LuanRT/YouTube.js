import { YTNode } from '../../helpers.js';
import { type RawNode } from '../../index.js';

export type UploadChecksSummaryStatus =
  'COMPLETED' | 'EXTENDED_CHECK_STARTED' |
  'INLINE_EDIT_IN_PROGRESS' | 'NOT_STARTED' |
  'OVERDUE' | 'SELF_CERTIFICATION_MISSING' |
  'SHORTS_NOT_ELIGIBLE' | 'STARTED' |
  'UNABLE_TO_RUN' | 'UNKNOWN';

export type UploadChecksCopyrightStatus =
  'COMPLETED' | 'INLINE_EDIT_IN_PROGRESS' |
  'NOT_STARTED' | 'OVERDUE' |
  'SHORTS_NOT_ELIGIBLE' | 'STARTED' |
  'UNABLE_TO_RUN' | 'UNKNOWN';

export type UploadChecksAdSuitabilityStatus =
  'CHANNEL_NOT_MONETIZED' | 'COMPLETED' |
  'EXTENDED_CHECK_STARTED' | 'NOT_STARTED' |
  'OVERDUE' | 'SELF_CERTIFICATION_MISSING' |
  'SHORTS_NOT_ELIGIBLE' | 'STARTED' |
  'UNABLE_TO_RUN' | 'UNKNOWN' |
  'VIDEO_NOT_MONETIZED';

export type UploadChecksCommunityGuidelinesStatus =
  'COMPLETED' | 'NOT_AVAILABLE_ON_PUBLISHED_VIDEO' |
  'NOT_ELIGIBLE' | 'NOT_STARTED' |
  'OVERDUE' | 'SHORTS_NOT_ELIGIBLE' |
  'STARTED' | 'UNABLE_TO_RUN' |
  'UNKNOWN';

export default class VideoUploadChecks extends YTNode {
  static type = 'VideoUploadChecks';

  checks_summary?: UploadChecksSummaryStatus;
  copyright_check?: UploadChecksCopyrightStatus;
  ad_suitability_check?: UploadChecksAdSuitabilityStatus;
  community_guidelines_check?: UploadChecksCommunityGuidelinesStatus;

  constructor(data: RawNode) {
    super();

    if (Reflect.has(data, 'checksSummary') && Reflect.has(data.checksSummary, 'status')) {
      this.checks_summary = data.checksSummary.status.replace('UPLOAD_CHECKS_DATA_SUMMARY_STATUS_', '');
    }

    if (Reflect.has(data, 'copyrightCheck') && Reflect.has(data.copyrightCheck, 'checkStatus')) {
      this.copyright_check = data.copyrightCheck.checkStatus.replace('UPLOAD_CHECKS_DATA_COPYRIGHT_STATUS_', '');
    }

    if (Reflect.has(data, 'adSuitabilityCheck') && Reflect.has(data.adSuitabilityCheck, 'checkStatus')) {
      this.ad_suitability_check = data.adSuitabilityCheck.checkStatus.replace('UPLOAD_CHECKS_DATA_AD_SUITABILITY_STATUS_', '');
    }

    if (Reflect.has(data, 'communityGuidelinesCheck') && Reflect.has(data.communityGuidelinesCheck, 'checkStatus')) {
      this.community_guidelines_check = data.communityGuidelinesCheck.checkStatus.replace('UPLOAD_CHECKS_DATA_COMMUNITY_GUIDELINES_STATUS_', '');
    }
  }
}
