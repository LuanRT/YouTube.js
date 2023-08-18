import type Player from '../core/Player.js';
import type Actions from '../core/Actions.js';

import type Format from '../parser/classes/misc/Format.js';

import * as Constants from './Constants.js';
import { InnertubeError, Platform, streamToIterable } from './Utils.js';
import type { IPlayabilityStatus, IStreamingData } from '../parser/index.js';
import type { DownloadOptions, FormatOptions } from '../types/FormatUtils.js';

export async function download(
  options: DownloadOptions,
  actions: Actions,
  playability_status?: IPlayabilityStatus,
  streaming_data?: IStreamingData,
  player?: Player,
  cpn?: string
): Promise<ReadableStream<Uint8Array>> {
  if (playability_status?.status === 'UNPLAYABLE')
    throw new InnertubeError('Video is unplayable', { error_type: 'UNPLAYABLE' });
  if (playability_status?.status === 'LOGIN_REQUIRED')
    throw new InnertubeError('Video is login required', { error_type: 'LOGIN_REQUIRED' });
  if (!streaming_data)
    throw new InnertubeError('Streaming data not available.', { error_type: 'NO_STREAMING_DATA' });

  const opts: DownloadOptions = {
    quality: '360p',
    type: 'video+audio',
    format: 'mp4',
    range: undefined,
    ...options
  };

  const format = chooseFormat(opts, streaming_data);
  const format_url = format.decipher(player);

  // If we're not downloading the video in chunks, we just use fetch once.
  if (opts.type === 'video+audio' && !options.range) {
    const response = await actions.session.http.fetch_function(`${format_url}&cpn=${cpn}`, {
      method: 'GET',
      headers: Constants.STREAM_HEADERS,
      redirect: 'follow'
    });

    // Throw if the response is not 2xx
    if (!response.ok)
      throw new InnertubeError('The server responded with a non 2xx status code', { error_type: 'FETCH_FAILED', response });

    const body = response.body;

    if (!body)
      throw new InnertubeError('Could not get ReadableStream from fetch Response.', { error_type: 'FETCH_FAILED', response });

    return body;
  }

  // We need to download in chunks.

  const chunk_size = 1048576 * 10; // 10MB

  let chunk_start = (options.range ? options.range.start : 0);
  let chunk_end = (options.range ? options.range.end : chunk_size);
  let must_end = false;

  let cancel: AbortController;

  const readable_stream = new Platform.shim.ReadableStream<Uint8Array>({
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    start() { },
    pull: async (controller) => {
      if (must_end) {
        controller.close();
        return;
      }

      if ((chunk_end >= (format.content_length ? format.content_length : 0)) || options.range) {
        must_end = true;
      }

      return new Promise(async (resolve, reject) => {
        try {
          cancel = new AbortController();

          const response = await actions.session.http.fetch_function(`${format_url}&cpn=${cpn}&range=${chunk_start}-${chunk_end || ''}`, {
            method: 'GET',
            headers: {
              ...Constants.STREAM_HEADERS
              // XXX: use YouTube's range parameter instead of a Range header.
              // Range: `bytes=${chunk_start}-${chunk_end}`
            },
            signal: cancel.signal
          });

          const body = response.body;

          if (!body)
            throw new InnertubeError('Could not get ReadableStream from fetch Response.', { error_type: 'FETCH_FAILED', response });

          for await (const chunk of streamToIterable(body)) {
            controller.enqueue(chunk);
          }

          chunk_start = chunk_end + 1;
          chunk_end += chunk_size;

          resolve();

        } catch (e: any) {
          reject(e);
        }
      });
    },
    async cancel(reason) {
      cancel.abort(reason);
    }
  }, {
    highWaterMark: 1, // TODO: better value?
    size(chunk) {
      return chunk.byteLength;
    }
  });

  return readable_stream;
}

/**
 * Selects the format that best matches the given options.
 * @param options - Options
 * @param streaming_data - Streaming data
 */
export function chooseFormat(options: FormatOptions, streaming_data?: IStreamingData): Format {
  if (!streaming_data)
    throw new InnertubeError('Streaming data not available');

  const formats = [
    ...(streaming_data.formats || []),
    ...(streaming_data.adaptive_formats || [])
  ];

  const requires_audio = options.type ? options.type.includes('audio') : true;
  const requires_video = options.type ? options.type.includes('video') : true;
  const language = options.language || 'original';
  const quality = options.quality || 'best';

  let best_width = -1;

  const is_best = [ 'best', 'bestefficiency' ].includes(quality);
  const use_most_efficient = quality !== 'best';

  let candidates = formats.filter((format) => {
    if (requires_audio && !format.has_audio)
      return false;
    if (requires_video && !format.has_video)
      return false;
    if (options.format !== 'any' && !format.mime_type.includes(options.format || 'mp4'))
      return false;
    if (!is_best && format.quality_label !== quality)
      return false;
    if (best_width < format.width)
      best_width = format.width;
    return true;
  });

  if (!candidates.length)
    throw new InnertubeError('No matching formats found', { options });

  if (is_best && requires_video)
    candidates = candidates.filter((format) => format.width === best_width);

  if (requires_audio && !requires_video) {
    const audio_only = candidates.filter((format) => {
      if (language !== 'original') {
        return !format.has_video && format.language === language;
      }
      return !format.has_video && format.is_original;

    });
    if (audio_only.length > 0) {
      candidates = audio_only;
    }
  }

  if (use_most_efficient) {
    // Sort by bitrate (lower is better)
    candidates.sort((a, b) => a.bitrate - b.bitrate);
  } else {
    // Sort by bitrate (higher is better)
    candidates.sort((a, b) => b.bitrate - a.bitrate);
  }

  return candidates[0];
}

export { toDash } from './DashManifest.js';
