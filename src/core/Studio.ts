import Proto from '../proto';
import Session from './Session';
import { AxioslikeResponse } from './Actions';
import { MissingParamError } from '../utils/Utils';

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
  async setThumbnail(video_id: string, buffer: Uint8Array): Promise<AxioslikeResponse> {
    if (!video_id || !buffer)
      throw new MissingParamError('One or more parameters are missing.');

    const payload = Proto.encodeCustomThumbnailPayload(video_id, buffer);

    const response = await this.#session.actions.execute('/video_manager/metadata_update', {
      protobuf: true,
      serialized_data: payload
    });

    return response;
  }
}

export default Studio;
