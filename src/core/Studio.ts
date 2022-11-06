import Proto from '../proto';
import Session from './Session';
import { ApiResponse } from './Actions';
import { InnertubeError, MissingParamError, uuidv4 } from '../utils/Utils';
import { Constants } from '../utils';

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

export interface VideoMetadata {
  title?: string;
  description?: string;
  tags?: string[];
  category?: number;
  license?: string;
  age_restricted?: boolean;
  made_for_kids?: boolean;
  privacy?: 'PUBLIC' | 'PRIVATE' | 'UNLISTED';
}

export interface UploadedVideoMetadata {
  title?: string;
  description?: string;
  privacy?: 'PUBLIC' | 'PRIVATE' | 'UNLISTED';
  is_draft?: boolean;
}

class Studio {
  #session;

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
      throw new InnertubeError('You are not signed in');

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
   * Updates given video's metadata.
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
  async updateVideoMetadata(video_id: string, metadata: VideoMetadata) {
    if (!this.#session.logged_in)
      throw new InnertubeError('You are not signed in');

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
  async upload(file: BodyInit, metadata: UploadedVideoMetadata = {}): Promise<ApiResponse> {
    if (!this.#session.logged_in)
      throw new InnertubeError('You are not signed in');

    const initial_data = await this.#getInitialUploadData();
    const upload_result = await this.#uploadVideo(initial_data.upload_url, file);

    if (upload_result.status !== 'STATUS_SUCCESS')
      throw new InnertubeError('Could not process video.');

    const response = await this.#setVideoMetadata(initial_data, upload_result, metadata);

    return response;
  }

  async #getInitialUploadData(): Promise<InitialUploadData> {
    const frontend_upload_id = `innertube_android:${uuidv4()}:0:v=3,api=1,cf=3`;

    const payload = {
      frontendUploadId: frontend_upload_id,
      deviceDisplayName: 'Pixel 6 Pro',
      fileId: `goog-edited-video://generated?videoFileUri=content://media/external/video/media/${uuidv4()}`,
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

  async #setVideoMetadata(initial_data: InitialUploadData, upload_result: UploadResult, metadata: UploadedVideoMetadata) {
    const metadata_payload = {
      resourceId: {
        scottyResourceId: {
          id: upload_result.scottyResourceId
        }
      },
      frontendUploadId: initial_data.frontend_upload_id,
      initialMetadata: {
        title: {
          newTitle: metadata.title || new Date().toDateString()
        },
        description: {
          newDescription: metadata.description || '',
          shouldSegment: true
        },
        privacy: {
          newPrivacy: metadata.privacy || 'PRIVATE'
        },
        draftState: {
          isDraft: metadata.is_draft || false
        }
      }
    };

    const response = await this.#session.actions.execute('/upload/createvideo', {
      client: 'ANDROID',
      ...metadata_payload
    });

    return response;
  }
}

export default Studio;