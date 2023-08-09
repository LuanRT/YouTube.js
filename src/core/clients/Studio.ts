import * as Proto from '../../proto/index.js';
import * as Constants from '../../utils/Constants.js';
import { InnertubeError, MissingParamError, Platform } from '../../utils/Utils.js';

import type { UpdateVideoMetadataOptions, UploadedVideoMetadataOptions } from '../../types/Clients.js';
import type { ApiResponse } from '../Actions.js';
import type Session from '../Session.js';

import { CreateVideoEndpoint } from '../endpoints/upload/index.js';

interface UploadResult {
  status: string;
  scottyResourceId: string;
}

interface InitialUploadData {
  frontend_upload_id: string;
  upload_id: string;
  upload_url: string;
  scotty_resource_id: string;
  chunk_granularity: string;
}

export default class Studio {
  #session: Session;

  constructor(session: Session) {
    this.#session = session;
  }

  /**
   * Uploads a custom thumbnail and sets it for a video.
   * @example
   * ```ts
   * const buffer = fs.readFileSync('./my_awesome_thumbnail.jpg');
   * const response = await yt.studio.setThumbnail(video_id, buffer);
   * ```
   */
  async setThumbnail(video_id: string, buffer: Uint8Array): Promise<ApiResponse> {
    if (!this.#session.logged_in)
      throw new InnertubeError('You must be signed in to perform this operation.');

    if (!video_id || !buffer)
      throw new MissingParamError('One or more parameters are missing.');

    const payload = Proto.encodeCustomThumbnailPayload(video_id, buffer);

    const response = await this.#session.actions.execute('/video_manager/metadata_update', {
      protobuf: true,
      serialized_data: payload
    });

    return response;
  }

  /**
   * Updates a given video's metadata.
   * @example
   * ```ts
   * const response = await yt.studio.updateVideoMetadata('videoid', {
   *   tags: [ 'astronomy', 'NASA', 'APOD' ],
   *   title: 'Artemis Mission',
   *   description: 'A nicely written description...',
   *   category: 27,
   *   license: 'creative_commons'
   *   // ...
   * });
   * ```
   */
  async updateVideoMetadata(video_id: string, metadata: UpdateVideoMetadataOptions): Promise<ApiResponse> {
    if (!this.#session.logged_in)
      throw new InnertubeError('You must be signed in to perform this operation.');

    const payload = Proto.encodeVideoMetadataPayload(video_id, metadata);

    const response = await this.#session.actions.execute('/video_manager/metadata_update', {
      protobuf: true,
      serialized_data: payload
    });

    return response;
  }

  /**
   * Uploads a video to YouTube.
   * @example
   * ```ts
   * const file = fs.readFileSync('./my_awesome_video.mp4');
   * const response = await yt.studio.upload(file.buffer, { title: 'Wow!' });
   * ```
   */
  async upload(file: BodyInit, metadata: UploadedVideoMetadataOptions = {}): Promise<ApiResponse> {
    if (!this.#session.logged_in)
      throw new InnertubeError('You must be signed in to perform this operation.');

    const initial_data = await this.#getInitialUploadData();
    const upload_result = await this.#uploadVideo(initial_data.upload_url, file);

    if (upload_result.status !== 'STATUS_SUCCESS')
      throw new InnertubeError('Could not process video.');

    const response = await this.#setVideoMetadata(initial_data, upload_result, metadata);

    return response;
  }

  async #getInitialUploadData(): Promise<InitialUploadData> {
    const frontend_upload_id = `innertube_android:${Platform.shim.uuidv4()}:0:v=3,api=1,cf=3`;

    const payload = {
      frontendUploadId: frontend_upload_id,
      deviceDisplayName: 'Pixel 6 Pro',
      fileId: `goog-edited-video://generated?videoFileUri=content://media/external/video/media/${Platform.shim.uuidv4()}`,
      mp4MoovAtomRelocationStatus: 'UNSUPPORTED',
      transcodeResult: 'DISABLED',
      connectionType: 'WIFI'
    };

    const response = await this.#session.http.fetch('/upload/youtubei', {
      baseURL: Constants.URLS.YT_UPLOAD,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'x-goog-upload-command': 'start',
        'x-goog-upload-protocol': 'resumable'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok)
      throw new InnertubeError('Could not get initial upload data');

    return {
      frontend_upload_id,
      upload_id: response.headers.get('x-guploader-uploadid') as string,
      upload_url: response.headers.get('x-goog-upload-url') as string,
      scotty_resource_id: response.headers.get('x-goog-upload-header-scotty-resource-id') as string,
      chunk_granularity: response.headers.get('x-goog-upload-chunk-granularity') as string
    };
  }

  async #uploadVideo(upload_url: string, file: BodyInit): Promise<UploadResult> {
    const response = await this.#session.http.fetch_function(upload_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'x-goog-upload-command': 'upload, finalize',
        'x-goog-upload-file-name': `file-${Date.now()}`,
        'x-goog-upload-offset': '0'
      },
      body: file
    });

    if (!response.ok)
      throw new InnertubeError('Could not upload video');

    const data = await response.json();

    return data;
  }

  async #setVideoMetadata(initial_data: InitialUploadData, upload_result: UploadResult, metadata: UploadedVideoMetadataOptions) {
    const response = await this.#session.actions.execute(
      CreateVideoEndpoint.PATH, CreateVideoEndpoint.build({
        resource_id: {
          scotty_resource_id: {
            id: upload_result.scottyResourceId
          }
        },
        frontend_upload_id: initial_data.frontend_upload_id,
        initial_metadata: {
          title: {
            new_title: metadata.title || new Date().toDateString()
          },
          description: {
            new_description: metadata.description || '',
            should_segment: true
          },
          privacy: {
            new_privacy: metadata.privacy || 'PRIVATE'
          },
          draft_state: {
            is_draft: metadata.is_draft
          }
        },
        client: 'ANDROID'
      })
    );

    return response;
  }
}