import Player from '../core/Player.ts';
import Actions from '../core/Actions.ts';

import type Format from '../parser/classes/misc/Format.ts';
import type AudioOnlyPlayability from '../parser/classes/AudioOnlyPlayability.ts';
import type { YTNode } from '../parser/helpers.ts';

import { Constants } from './index.ts';
import { getStringBetweenStrings, InnertubeError, Platform, streamToIterable } from './Utils.ts';

export type URLTransformer = (url: URL) => URL;
export type FormatFilter = (format: Format) => boolean;

export interface FormatOptions {
  /**
   * Video quality; 360p, 720p, 1080p, etc... also accepts 'best' and 'bestefficiency'.
   */
  quality?: string;
  /**
   * Download type, can be: video, audio or video+audio
   */
  type?: 'video' | 'audio' | 'video+audio';
  /**
   * Language code, defaults to 'original'.
   */
  language?: string;
  /**
   * File format, use 'any' to download any format
   */
  format?: string;
  /**
   * InnerTube client, can be ANDROID, WEB, YTMUSIC, YTMUSIC_ANDROID, YTSTUDIO_ANDROID or TV_EMBEDDED
   */
  client?: 'WEB' | 'ANDROID' | 'YTMUSIC_ANDROID' | 'YTMUSIC' | 'YTSTUDIO_ANDROID' | 'TV_EMBEDDED';
}

export interface DownloadOptions extends FormatOptions {
  /**
   * Download range, indicates which bytes should be downloaded.
   */
  range?: {
    start: number;
    end: number;
  }
}

class FormatUtils {
  static async download(options: DownloadOptions, actions: Actions, playability_status?: {
    status: string;
    error_screen: YTNode | null;
    audio_only_playablility: AudioOnlyPlayability | null;
    embeddable: boolean;
    reason: any;
  }, streaming_data?: {
    expires: Date;
    formats: Format[];
    adaptive_formats: Format[];
    dash_manifest_url: string | null;
    hls_manifest_url: string | null;
  }, player?: Player, cpn?: string): Promise<ReadableStream<Uint8Array>> {
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

    const format = this.chooseFormat(opts, streaming_data);
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

        if ((chunk_end >= format.content_length) || options.range) {
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
              throw new InnertubeError('Could not get ReadableStream from fetch Response.', { video: this, error_type: 'FETCH_FAILED', response });

            for await (const chunk of streamToIterable(body)) {
              controller.enqueue(chunk);
            }

            chunk_start = chunk_end + 1;
            chunk_end += chunk_size;

            resolve();
            return;
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
  static chooseFormat(options: FormatOptions, streaming_data?: {
    expires: Date;
    formats: Format[];
    adaptive_formats: Format[];
    dash_manifest_url: string | null;
    hls_manifest_url: string | null;
  }): Format {
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

  static toDash(streaming_data?: {
    expires: Date;
    formats: Format[];
    adaptive_formats: Format[];
    dash_manifest_url: string | null;
    hls_manifest_url: string | null;
  }, url_transformer: URLTransformer = (url) => url, format_filter?: FormatFilter, cpn?: string, player?: Player): string {
    if (!streaming_data)
      throw new InnertubeError('Streaming data not available');

    let filtered_streaming_data;

    if (format_filter) {
      filtered_streaming_data = {
        formats: streaming_data.formats.filter((fmt: Format) => !(format_filter(fmt))),
        adaptive_formats: streaming_data.adaptive_formats.filter((fmt: Format) => !(format_filter(fmt))),
        expires: streaming_data.expires,
        dash_manifest_url: streaming_data.dash_manifest_url,
        hls_manifest_url: streaming_data.hls_manifest_url
      };
    } else {
      filtered_streaming_data = streaming_data;
    }

    const { adaptive_formats } = filtered_streaming_data;

    if (!adaptive_formats.length)
      throw new InnertubeError('No adaptive formats found');

    const length = adaptive_formats[0].approx_duration_ms / 1000;

    const document = new Platform.shim.DOMParser().parseFromString('<?xml version="1.0" encoding="utf-8"?><MPD />', 'application/xml');
    const mpd = document.querySelector('MPD') as HTMLElement;
    const period = document.createElement('Period');

    mpd.replaceWith(this.#el(document, 'MPD', {
      xmlns: 'urn:mpeg:dash:schema:mpd:2011',
      minBufferTime: 'PT1.500S',
      profiles: 'urn:mpeg:dash:profile:isoff-main:2011',
      type: 'static',
      mediaPresentationDuration: `PT${length}S`,
      'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
      'xsi:schemaLocation': 'urn:mpeg:dash:schema:mpd:2011 http://standards.iso.org/ittf/PubliclyAvailableStandards/MPEG-DASH_schema_files/DASH-MPD.xsd'
    }, [
      period
    ]));

    this.#generateAdaptationSet(document, period, adaptive_formats, url_transformer, cpn, player);

    return Platform.shim.serializeDOM(document);
  }

  static #el(document: XMLDocument, tag: string, attrs: Record<string, string | undefined>, children: Node[] = []) {
    const el = document.createElement(tag);
    for (const [ key, value ] of Object.entries(attrs)) {
      value && el.setAttribute(key, value);
    }
    for (const child of children) {
      if (typeof child === 'undefined') continue;
      el.appendChild(child);
    }
    return el;
  }

  static #generateAdaptationSet(document: XMLDocument, period: Element, formats: Format[], url_transformer: URLTransformer, cpn?: string, player?: Player) {
    const mime_types: string[] = [];
    const mime_objects: Format[][] = [ [] ];

    formats.forEach((video_format) => {
      if (!video_format.index_range || !video_format.init_range) {
        return;
      }
      const mime_type = video_format.mime_type;
      const mime_type_index = mime_types.indexOf(mime_type);
      if (mime_type_index > -1) {
        mime_objects[mime_type_index].push(video_format);
      } else {
        mime_types.push(mime_type);
        mime_objects.push([]);
        mime_objects[mime_types.length - 1].push(video_format);
      }
    });

    let set_id = 0;
    for (let i = 0; i < mime_types.length; i++) {
      // When the video has multiple different audio tracks/langues we want to include the extra information in the manifest
      if (mime_objects[i][0].has_audio && mime_objects[i][0].language) {
        const languages: string[] = [];
        const language_objects: Format[][] = [ [] ];

        mime_objects[i].forEach((format) => {
          const language_index = languages.indexOf(format.language as string);
          if (language_index > -1) {
            language_objects[language_index].push(format);
          } else {
            languages.push(format.language as string);
            language_objects.push([]);
            language_objects[languages.length - 1].push(format);
          }
        });

        // The lang attribute has to go on the AdaptationSet element, so we need a separate adaptation set for each language
        for (let j = 0; j < languages.length; j++) {
          const first_format = language_objects[j][0];

          const children = [];

          if (first_format.audio_track) {
            let role;
            if (first_format.audio_track.audio_is_default) {
              role = 'main';
            } else if (first_format.is_dubbed) {
              role = 'dub';
            } else {
              role = 'alternate';
            }

            children.push(
              this.#el(document, 'Role', {
                schemeIdUri: 'urn:mpeg:dash:role:2011',
                value: role
              })
            );
          }

          const set = this.#el(document, 'AdaptationSet', {
            id: `${set_id++}`,
            mimeType: mime_types[i].split(';')[0],
            startWithSAP: '1',
            subsegmentAlignment: 'true',
            lang: languages[j]
          }, children);

          period.appendChild(set);

          language_objects[j].forEach((format) => {
            this.#generateRepresentationAudio(document, set, format, url_transformer, cpn, player);
          });
        }
      } else {
        const set = this.#el(document, 'AdaptationSet', {
          id: `${set_id++}`,
          mimeType: mime_types[i].split(';')[0],
          startWithSAP: '1',
          subsegmentAlignment: 'true'
        });

        period.appendChild(set);

        mime_objects[i].forEach((format) => {
          if (format.has_video) {
            this.#generateRepresentationVideo(document, set, format, url_transformer, cpn, player);
          } else {
            this.#generateRepresentationAudio(document, set, format, url_transformer, cpn, player);
          }
        });
      }
    }
  }

  static #generateRepresentationVideo(document: XMLDocument, set: Element, format: Format, url_transformer: URLTransformer, cpn?: string, player?: Player) {
    const codecs = getStringBetweenStrings(format.mime_type, 'codecs="', '"');

    if (!format.index_range || !format.init_range)
      throw new InnertubeError('Index and init ranges not available', { format });

    const url = new URL(format.decipher(player));
    url.searchParams.set('cpn', cpn || '');

    set.appendChild(this.#el(document, 'Representation', {
      id: format.itag?.toString(),
      codecs,
      bandwidth: format.bitrate?.toString(),
      width: format.width?.toString(),
      height: format.height?.toString(),
      maxPlayoutRate: '1',
      frameRate: format.fps?.toString()
    }, [
      this.#el(document, 'BaseURL', {}, [
        document.createTextNode(url_transformer(url)?.toString())
      ]),
      this.#el(document, 'SegmentBase', {
        indexRange: `${format.index_range.start}-${format.index_range.end}`
      }, [
        this.#el(document, 'Initialization', {
          range: `${format.init_range.start}-${format.init_range.end}`
        })
      ])
    ]));
  }

  static async #generateRepresentationAudio(document: XMLDocument, set: Element, format: Format, url_transformer: URLTransformer, cpn?: string, player?: Player) {
    const codecs = getStringBetweenStrings(format.mime_type, 'codecs="', '"');
    if (!format.index_range || !format.init_range)
      throw new InnertubeError('Index and init ranges not available', { format });

    const url = new URL(format.decipher(player));
    url.searchParams.set('cpn', cpn || '');

    set.appendChild(this.#el(document, 'Representation', {
      id: format.itag?.toString(),
      codecs,
      bandwidth: format.bitrate?.toString(),
      audioSamplingRate: format.audio_sample_rate?.toString()
    }, [
      this.#el(document, 'AudioChannelConfiguration', {
        schemeIdUri: 'urn:mpeg:dash:23003:3:audio_channel_configuration:2011',
        value: format.audio_channels?.toString() || '2'
      }),
      this.#el(document, 'BaseURL', {}, [
        document.createTextNode(url_transformer(url)?.toString())
      ]),
      this.#el(document, 'SegmentBase', {
        indexRange: `${format.index_range.start}-${format.index_range.end}`
      }, [
        this.#el(document, 'Initialization', {
          range: `${format.init_range.start}-${format.init_range.end}`
        })
      ])
    ]));
  }
}

export default FormatUtils;