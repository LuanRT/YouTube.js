import { YTNode } from '../../helpers.js';
import { type RawNode } from '../../index.js';
import { parseObject } from '../../parser.js';
import DataFreshnessEntity from './DataFreshnessEntity.js';
import VideoUploadChecks from './VideoUploadChecks.js';

export interface TimedContinuationData {
  timeout_ms: number;
  continuation: string;
  click_tracking_params: string;
}

export interface UploadFeedbackRefreshContinuation {
  continuation: string;
  continue_in_ms: number;
  click_tracking_params: string;
}

export interface UploadFeedbackContinuation {
  timed_continuation_data?: TimedContinuationData;
  upload_feedback_refresh_continuation?: UploadFeedbackRefreshContinuation;
}

export interface TransferProgressBar {
  fraction_completed?: number;
  progress_message?: string;
}

export interface UploadChecksRenderer {
  checks_data_video_monetized?: VideoUploadChecks;
  checks_data_video_not_monetized?: VideoUploadChecks;
}

export default class UploadFeedbackItem extends YTNode {
  static type = 'UploadFeedbackItem';

  frontend_upload_id?: string;
  video_id?: string;
  continuations?: UploadFeedbackContinuation;
  data_freshness_entity?: DataFreshnessEntity;
  transfer_progress_bar?: TransferProgressBar;
  is_processing?: boolean;
  upload_checks?: UploadChecksRenderer;

  constructor(data: RawNode) {
    super();

    if (Reflect.has(data, 'id')) {
      this.frontend_upload_id = data.id.frontendUploadId;
      this.video_id = data.id.videoId;
    }

    this.is_processing = false;
    if (Reflect.has(data, 'contents') && Array.isArray(data.contents)) {
      data.contents.forEach((item: RawNode) => {
        if (Reflect.has(item, 'transferProgressBar')) {
          this.transfer_progress_bar = {
            fraction_completed: item.transferProgressBar.fractionCompleted,
            progress_message: item.transferProgressBar.progressMessage?.simpleText
          };
        }

        if (Reflect.has(item, 'uploadChecksRenderer')) {
          const renderer = item.uploadChecksRenderer;
          this.upload_checks = {
            checks_data_video_monetized: Reflect.has(renderer, 'checksDataVideoMonetized') ? new VideoUploadChecks(renderer.checksDataVideoMonetized) : undefined,
            checks_data_video_not_monetized: Reflect.has(renderer, 'checksDataVideoNotMonetized') ? new VideoUploadChecks(renderer.checksDataVideoNotMonetized) : undefined
          };
        }

        if (Reflect.has(item, 'processingResolutionsStatusRenderer')) {
          this.is_processing = true;
        }
      });
    }
    if (Reflect.has(data, 'continuations')) {
      this.continuations = {
        timed_continuation_data: parseObject(data.continuations[0]?.timedContinuationData),
        upload_feedback_refresh_continuation: parseObject(data.continuations[1]?.uploadFeedbackRefreshContinuation)
      };
    }
    if (Reflect.has(data, 'dataFreshnessEntity')) {
      this.data_freshness_entity = new DataFreshnessEntity(data.dataFreshnessEntity);
    }
  }

  get continuation_token(): string | null {
    const continuation = this.continuations;
    return this.continuations?.upload_feedback_refresh_continuation?.continuation ??
      this.continuations?.timed_continuation_data?.continuation ??
      null;
  }

  get continuation_delay_ms(): number | null {
    return this.continuations?.upload_feedback_refresh_continuation?.continue_in_ms ??
      this.continuations?.timed_continuation_data?.timeout_ms ??
      null;
  }
}
