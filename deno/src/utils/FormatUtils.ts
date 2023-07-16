import type Player from '../core/Player.ts';
import type Actions from '../core/Actions.ts';

import type Format from '../parser/classes/misc/Format.ts';
import type AudioOnlyPlayability from '../parser/classes/AudioOnlyPlayability.ts';
import type { YTNode } from '../parser/helpers.ts';

import * as Constants from './Constants.ts';
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
              throw new InnertubeError('Could not get ReadableStream from fetch Response.', { video: this, error_type: 'FETCH_FAILED', response });

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

  static async toDash(streaming_data?: {
    expires: Date;
    formats: Format[];
    adaptive_formats: Format[];
    dash_manifest_url: string | null;
    hls_manifest_url: string | null;
  }, url_transformer: URLTransformer = (url) => url, format_filter?: FormatFilter, cpn?: string, player?: Player, actions?: Actions): Promise<string> {
    if (!streaming_data)
      throw new InnertubeError('Streaming data not available');

    let adaptive_formats;

    if (format_filter) {
      adaptive_formats = streaming_data.adaptive_formats.filter((fmt: Format) => !(format_filter(fmt)));
    } else {
      adaptive_formats = streaming_data.adaptive_formats;
    }

    if (!adaptive_formats.length)
      throw new InnertubeError('No adaptive formats found');

    const length = adaptive_formats[0].approx_duration_ms / 1000;

    // DASH spec: https://standards.iso.org/ittf/PubliclyAvailableStandards/c083314_ISO_IEC%2023009-1_2022(en).zip

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

    await this.#generateAdaptationSet(document, period, adaptive_formats, url_transformer, cpn, player, actions);

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

  static async #generateAdaptationSet(document: XMLDocument, period: Element, formats: Format[], url_transformer: URLTransformer, cpn?: string, player?: Player, actions?: Actions) {
    const mime_types: string[] = [];
    const mime_objects: Format[][] = [ [] ];

    formats.forEach((video_format) => {
      if ((!video_format.index_range || !video_format.init_range) && !video_format.is_type_otf) {
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
      // When the video has multiple different audio tracks we want to include the extra information in the manifest
      if (mime_objects[i][0].has_audio && mime_objects[i][0].audio_track) {
        const track_ids: string[] = [];
        const track_objects: Format[][] = [ [] ];

        mime_objects[i].forEach((format) => {
          const id_index = track_ids.indexOf(format.audio_track?.id as string);
          if (id_index > -1) {
            track_objects[id_index].push(format);
          } else {
            track_ids.push(format.audio_track?.id as string);
            track_objects.push([]);
            track_objects[track_ids.length - 1].push(format);
          }
        });

        // The lang attribute has to go on the AdaptationSet element and the Role element goes inside the AdaptationSet too, so we need a separate adaptation set for each language and role
        for (let j = 0; j < track_ids.length; j++) {
          const first_format = track_objects[j][0];

          const children = [];

          let role;
          if (first_format.audio_track?.audio_is_default) {
            role = 'main';
          } else if (first_format.is_dubbed) {
            role = 'dub';
          } else if (first_format.is_descriptive) {
            role = 'description';
          } else {
            role = 'alternate';
          }

          children.push(
            this.#el(document, 'Role', {
              schemeIdUri: 'urn:mpeg:dash:role:2011',
              value: role
            }),
            this.#el(document, 'Label', {
              id: set_id.toString()
            }, [
              document.createTextNode(first_format.audio_track?.display_name as string)
            ])
          );

          const set = this.#el(document, 'AdaptationSet', {
            id: `${set_id++}`,
            mimeType: mime_types[i].split(';')[0],
            startWithSAP: '1',
            subsegmentAlignment: 'true',
            lang: first_format.language as string,
            // Non-standard attribute used by shaka instead of the standard Label element
            label: first_format.audio_track?.display_name as string
          }, children);

          const hoisted: string[] = [];

          this.#hoistCodecsIfPossible(set, track_objects[j], hoisted);
          this.#hoistNumberAttributeIfPossible(set, track_objects[j], 'audioSamplingRate', 'audio_sample_rate', hoisted);

          this.#hoistAudioChannelsIfPossible(document, set, track_objects[j], hoisted);

          period.appendChild(set);

          for (const format of track_objects[j]) {
            await this.#generateRepresentationAudio(document, set, format, url_transformer, hoisted, cpn, player, actions);
          }
        }
      } else {
        const set = this.#el(document, 'AdaptationSet', {
          id: `${set_id++}`,
          mimeType: mime_types[i].split(';')[0],
          startWithSAP: '1',
          subsegmentAlignment: 'true'
        });

        const color_info = mime_objects[i][0].color_info;
        if (typeof color_info !== 'undefined') {
          // Section 5.5 Video source metadata signalling https://dashif.org/docs/IOP-Guidelines/DASH-IF-IOP-Part7-v5.0.0.pdf
          // Section 8 Video code points https://www.itu.int/rec/T-REC-H.273-202107-I/en
          // The player.js file was also helpful

          if (color_info.primaries) {
            let primaries = '';

            switch (color_info.primaries) {
              case 'BT709':
                primaries = '1';
                break;
              case 'BT2020':
                primaries = '9';
                break;
            }

            if (primaries !== '') {
              set.appendChild(this.#el(document, 'EssentialProperty', {
                schemeIdUri: 'urn:mpeg:mpegB:cicp:ColourPrimaries',
                value: primaries
              }));
            }
          }

          if (color_info.transfer_characteristics) {
            let transfer_characteristics = '';

            switch (color_info.transfer_characteristics) {
              case 'BT709':
                transfer_characteristics = '1';
                break;
              case 'BT2020_10':
                transfer_characteristics = '14';
                break;
              case 'SMPTEST2084':
                transfer_characteristics = '16';
                break;
              case 'ARIB_STD_B67':
                transfer_characteristics = '18';
                break;
            }

            if (transfer_characteristics !== '') {
              set.appendChild(this.#el(document, 'EssentialProperty', {
                schemeIdUri: 'urn:mpeg:mpegB:cicp:TransferCharacteristics',
                value: transfer_characteristics
              }));
            }
          }


          if (color_info.matrix_coefficients) {
            let matrix_coefficients = '';

            // This list is incomplete, as the player.js doesn't currently have any code for matrix coefficients,
            // So it doesn't have a list like with the other two, so this is just based on what we've seen in responses
            switch (color_info.matrix_coefficients) {
              case 'BT709':
                matrix_coefficients = '1';
                break;
              case 'BT2020_NCL':
                matrix_coefficients = '14';
                break;
              default: {
                const format = mime_objects[i][0];
                const url = new URL(format.url as string);

                const anonymisedFormat = JSON.parse(JSON.stringify(format));
                anonymisedFormat.url = 'REDACTED';
                anonymisedFormat.signature_cipher = 'REDACTED';
                anonymisedFormat.cipher = 'REDACTED';

                console.warn(`YouTube.js toDash(): Unknown matrix coefficients "${color_info.matrix_coefficients}", the DASH manifest is still usuable without this.\n`
                  + `Please report it at ${Platform.shim.info.bugs_url} so we can add support for it.\n`
                  + `Innertube client: ${url.searchParams.get('c')}\nformat:`, anonymisedFormat);
              }
            }

            if (matrix_coefficients !== '') {
              set.appendChild(this.#el(document, 'EssentialProperty', {
                schemeIdUri: 'urn:mpeg:mpegB:cicp:MatrixCoefficients',
                value: matrix_coefficients
              }));
            }
          }
        }

        const hoisted: string[] = [];

        this.#hoistCodecsIfPossible(set, mime_objects[i], hoisted);

        if (mime_objects[i][0].has_audio) {
          this.#hoistNumberAttributeIfPossible(set, mime_objects[i], 'audioSamplingRate', 'audio_sample_rate', hoisted);

          this.#hoistAudioChannelsIfPossible(document, set, mime_objects[i], hoisted);

          const language = mime_objects[i][0].language;
          if (language) {
            set.setAttribute('lang', language);
          }
        } else {
          set.setAttribute('maxPlayoutRate', '1');

          this.#hoistNumberAttributeIfPossible(set, mime_objects[i], 'frameRate', 'fps', hoisted);
        }

        period.appendChild(set);

        for (const format of mime_objects[i]) {
          if (format.has_video) {
            await this.#generateRepresentationVideo(document, set, format, url_transformer, hoisted, cpn, player, actions);
          } else {
            await this.#generateRepresentationAudio(document, set, format, url_transformer, hoisted, cpn, player, actions);
          }
        }
      }
    }
  }

  static #hoistCodecsIfPossible(set: Element, formats: Format[], hoisted: string[]) {
    if (formats.length > 1 && new Set(formats.map((format) => getStringBetweenStrings(format.mime_type, 'codecs="', '"'))).size === 1) {
      set.setAttribute('codecs', getStringBetweenStrings(formats[0].mime_type, 'codecs="', '"') as string);
      hoisted.push('codecs');
    }
  }

  static #hoistNumberAttributeIfPossible(set: Element, formats: Format[], attribute: 'audioSamplingRate' | 'frameRate', property: 'audio_sample_rate' | 'fps', hoisted: string[]) {
    if (formats.length > 1 && new Set(formats.map((format) => format.fps)).size === 1) {
      set.setAttribute(attribute, formats[0][property]?.toString() as string);
      hoisted.push(attribute);
    }
  }

  static #hoistAudioChannelsIfPossible(document: XMLDocument, set: Element, formats: Format[], hoisted: string[]) {
    if (formats.length > 1 && new Set(formats.map((format) => format.audio_channels?.toString() || '2')).size === 1) {
      set.appendChild(
        this.#el(document, 'AudioChannelConfiguration', {
          schemeIdUri: 'urn:mpeg:dash:23003:3:audio_channel_configuration:2011',
          value: formats[0].audio_channels?.toString() || '2'
        })
      );
      hoisted.push('AudioChannelConfiguration');
    }
  }

  static async #generateRepresentationVideo(document: XMLDocument, set: Element, format: Format, url_transformer: URLTransformer, hoisted: string[], cpn?: string, player?: Player, actions?: Actions) {
    const url = new URL(format.decipher(player));
    url.searchParams.set('cpn', cpn || '');

    const representation = this.#el(document, 'Representation', {
      id: format.itag?.toString(),
      bandwidth: format.bitrate?.toString(),
      width: format.width?.toString(),
      height: format.height?.toString()
    });

    if (!hoisted.includes('codecs')) {
      const codecs = getStringBetweenStrings(format.mime_type, 'codecs="', '"');
      representation.setAttribute('codecs', codecs as string);
    }

    if (!hoisted.includes('frameRate')) {
      representation.setAttribute('frameRate', format.fps?.toString() as string);
    }

    set.appendChild(representation);

    await this.#generateSegmentInformation(document, representation, format, url_transformer(url)?.toString(), actions);
  }

  static async #generateRepresentationAudio(document: XMLDocument, set: Element, format: Format, url_transformer: URLTransformer, hoisted: string[], cpn?: string, player?: Player, actions?: Actions) {
    const url = new URL(format.decipher(player));
    url.searchParams.set('cpn', cpn || '');

    let id;
    if (format.audio_track) {
      id = `${format.itag?.toString()}-${format.audio_track.id}`;
    } else {
      id = format.itag?.toString();
    }

    const representation = this.#el(document, 'Representation', {
      id,
      bandwidth: format.bitrate?.toString()
    });

    if (!hoisted.includes('codecs')) {
      const codecs = getStringBetweenStrings(format.mime_type, 'codecs="', '"');
      representation.setAttribute('codecs', codecs as string);
    }

    if (!hoisted.includes('audioSamplingRate')) {
      representation.setAttribute('audioSamplingRate', format.audio_sample_rate?.toString() as string);
    }

    if (!hoisted.includes('AudioChannelConfiguration')) {
      representation.appendChild(
        this.#el(document, 'AudioChannelConfiguration', {
          schemeIdUri: 'urn:mpeg:dash:23003:3:audio_channel_configuration:2011',
          value: format.audio_channels?.toString() || '2'
        })
      );
    }

    set.appendChild(representation);

    await this.#generateSegmentInformation(document, representation, format, url_transformer(url)?.toString(), actions);
  }

  static async #generateSegmentInformation(document: XMLDocument, representation: Element, format: Format, url: string, actions?: Actions) {
    if (format.is_type_otf) {
      if (!actions) {
        throw new InnertubeError('Unable to get segment durations for this OTF stream without an Actions instance', { format });
      }

      const { resolved_url, segment_durations } = await this.#getOTFSegmentInformation(url, actions);
      const segment_elements = [];

      for (const segment_duration of segment_durations) {
        let attributes;

        if (typeof segment_duration.repeat_count === 'undefined') {
          attributes = {
            d: segment_duration.duration.toString()
          };
        } else {
          attributes = {
            d: segment_duration.duration.toString(),
            r: segment_duration.repeat_count.toString()
          };
        }
        segment_elements.push(this.#el(document, 'S', attributes));
      }

      representation.appendChild(
        this.#el(document, 'SegmentTemplate', {
          startNumber: '1',
          timescale: '1000',
          initialization: `${resolved_url}&sq=0`,
          media: `${resolved_url}&sq=$Number$`
        }, [
          this.#el(document, 'SegmentTimeline', {}, segment_elements)
        ])
      );
    } else {
      if (!format.index_range || !format.init_range)
        throw new InnertubeError('Index and init ranges not available', { format });

      representation.appendChild(
        this.#el(document, 'BaseURL', {}, [
          document.createTextNode(url)
        ])
      );
      representation.appendChild(
        this.#el(document, 'SegmentBase', {
          indexRange: `${format.index_range.start}-${format.index_range.end}`
        }, [
          this.#el(document, 'Initialization', {
            range: `${format.init_range.start}-${format.init_range.end}`
          })
        ])
      );
    }
  }

  static async #getOTFSegmentInformation(url: string, actions: Actions): Promise<{
    resolved_url: string,
    segment_durations: {
      duration: number,
      repeat_count?: number
    }[]
  }> {
    // Fetch the first segment as it contains the segment durations which we need to generate the manifest
    const response = await actions.session.http.fetch_function(`${url}&rn=0&sq=0`, {
      method: 'GET',
      headers: Constants.STREAM_HEADERS,
      redirect: 'follow'
    });

    // Example OTF video: https://www.youtube.com/watch?v=DJ8GQUNUXGM

    // There might have been redirects, if there were we want to write the resolved URL to the manifest
    // So that the player doesn't have to follow the redirects every time it requests a segment
    const resolved_url = response.url.replace('&rn=0', '').replace('&sq=0', '');

    // In this function we only need the segment durations and how often the durations are repeated
    // The segment count could be useful for other stuff though
    // The response body contains a lot of junk but the useful stuff looks like this:
    // Segment-Count: 922\r\n' +
    //   'Segment-Durations-Ms: 5120(r=920),3600,\r\n'
    const response_text = await response.text();

    const segment_duration_strings = getStringBetweenStrings(response_text, 'Segment-Durations-Ms:', '\r\n')?.split(',');

    if (!segment_duration_strings) {
      throw new InnertubeError('Failed to extract the segment durations from this OTF stream', { url });
    }

    const segment_durations = [];
    for (const segment_duration_string of segment_duration_strings) {
      const trimmed_segment_duration = segment_duration_string.trim();
      if (trimmed_segment_duration.length === 0) {
        continue;
      }

      let repeat_count;

      const repeat_count_string = getStringBetweenStrings(trimmed_segment_duration, '(r=', ')');
      if (repeat_count_string) {
        repeat_count = parseInt(repeat_count_string);
      }

      segment_durations.push({
        duration: parseInt(trimmed_segment_duration),
        repeat_count
      });
    }

    return {
      resolved_url,
      segment_durations
    };
  }
}

export default FormatUtils;