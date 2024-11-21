import type { StoryboardData } from '../parser/classes/PlayerStoryboardSpec.js';
import PlayerStoryboardSpec from '../parser/classes/PlayerStoryboardSpec.js';
import { getStringBetweenStrings, InnertubeError, Platform } from './Utils.js';
import * as Constants from './Constants.js';
import * as Log from './Log.js';

import type Actions from '../core/Actions.js';
import type Player from '../core/Player.js';
import type { LiveStoryboardData } from '../parser/classes/PlayerLiveStoryboardSpec.js';
import type { IStreamingData } from '../parser/index.js';
import type { Format } from '../parser/misc.js';
import type { PlayerLiveStoryboardSpec } from '../parser/nodes.js';
import type { FormatFilter, URLTransformer } from '../types/index.js';
import type { StreamingInfoOptions } from '../types/StreamingInfoOptions.js';
import type { CaptionTrackData } from '../parser/classes/PlayerCaptionsTracklist.js';

const TAG_ = 'StreamingInfo';

export interface StreamingInfo {
  getDuration(): Promise<number>;
  audio_sets: AudioSet[];
  video_sets: VideoSet[];
  image_sets: ImageSet[];
  text_sets: TextSet[];
}

export interface AudioSet {
  mime_type: string;
  language?: string;
  codecs?: string;
  audio_sample_rate?: number;
  track_name?: string;
  track_roles?: ('main' | 'dub' | 'description' | 'enhanced-audio-intelligibility' | 'alternate')[];
  channels?: number;
  representations: AudioRepresentation[];
}

export interface Range {
  start: number;
  end: number;
}

export type SegmentInfo = {
  is_oft: false,
  is_post_live_dvr: false
  base_url: string;
  index_range: Range;
  init_range: Range;
} | {
  is_oft: true,
  is_post_live_dvr: false
  getSegmentTemplate(): Promise<SegmentTemplate>
} | {
  is_oft: false,
  is_post_live_dvr: true,
  getSegmentTemplate(): Promise<SegmentTemplate>
}

export interface Segment {
  duration: number,
  repeat_count?: number
}

export interface SegmentTemplate {
  init_url?: string,
  media_url: string,
  timeline: Segment[]
}

export interface AudioRepresentation {
  uid: string;
  bitrate: number;
  codecs?: string;
  audio_sample_rate?: number;
  channels?: number;
  segment_info: SegmentInfo;
}

export interface VideoSet {
  mime_type: string;
  color_info: ColorInfo;
  codecs?: string;
  fps?: number;
  representations: VideoRepresentation[]
}

export interface VideoRepresentation {
  uid: string;
  bitrate: number;
  width?: number;
  height?: number;
  fps?: number;
  codecs?: string;
  segment_info: SegmentInfo;
}

export interface ColorInfo {
  primaries?: '1' | '9',
  transfer_characteristics?: '1' | '14' | '16' | '18',
  matrix_coefficients?: '1' | '14'
}

export interface ImageSet {
  probable_mime_type: string;
  /**
   * Sometimes YouTube returns webp instead of jpg despite the file extension being jpg
   * So we need to update the mime type to reflect the actual mime type of the response
   */
  getMimeType(): Promise<string>;
  representations: ImageRepresentation[]
}

export interface ImageRepresentation {
  uid: string;
  getBitrate(): Promise<number>;
  sheet_width: number;
  sheet_height: number;
  thumbnail_width: number;
  thumbnail_height: number;
  rows: number;
  columns: number;
  template_url: string;
  template_duration: number;
  getURL(n: number): string;
}

export interface TextSet {
  mime_type: string;
  language: string;
  track_name: string;
  track_roles: ('caption' | 'dub')[];
  representation: TextRepresentation;
}

export interface TextRepresentation {
  uid: string;
  base_url: string;
}

interface PostLiveDvrInfo {
  duration: number,
  segment_count: number
}

interface SharedPostLiveDvrInfo {
  item?: PostLiveDvrInfo
}

interface DrcLabels {
  label_original: string;
  label_drc: string;
  label_drc_multiple: (audio_track_display_name: string) => string;
}

function getFormatGroupings(formats: Format[], is_post_live_dvr: boolean) {
  const group_info = new Map<string, Format[]>();

  const has_multiple_audio_tracks = formats.some((fmt) => !!fmt.audio_track);

  for (const format of formats) {
    if ((!format.index_range || !format.init_range) && !format.is_type_otf && !is_post_live_dvr) {
      continue;
    }
    const mime_type = format.mime_type.split(';')[0];

    // Codec without any profile or level information
    const just_codec = getStringBetweenStrings(format.mime_type, 'codecs="', '"')?.split('.')[0];

    // HDR videos have both SDR and HDR vp9 formats, so we want to stick them in different groups
    const color_info = format.color_info ? Object.values(format.color_info).join('-') : '';

    const audio_track_id = format.audio_track?.id || '';

    const drc = format.is_drc ? 'drc' : '';

    const group_id = `${mime_type}-${just_codec}-${color_info}-${audio_track_id}-${drc}`;

    if (!group_info.has(group_id)) {
      group_info.set(group_id, []);
    }
    group_info.get(group_id)?.push(format);
  }

  return {
    groups: Array.from(group_info.values()),
    has_multiple_audio_tracks
  };
}

function hoistCodecsIfPossible(formats: Format[], hoisted: string[]) {
  if (
    formats.length > 1 &&
    new Set(formats.map((format) => getStringBetweenStrings(format.mime_type, 'codecs="', '"'))).size === 1
  ) {
    hoisted.push('codecs');
    return getStringBetweenStrings(formats[0].mime_type, 'codecs="', '"');
  }
}

function hoistNumberAttributeIfPossible(
  formats: Format[],
  property: 'audio_sample_rate' | 'fps',
  hoisted: string[]
) {
  if (formats.length > 1 && new Set(formats.map((format) => format.fps)).size === 1) {
    hoisted.push(property);
    return Number(formats[0][property]);
  }
}

function hoistAudioChannelsIfPossible(formats: Format[], hoisted: string[]) {
  if (formats.length > 1 && new Set(formats.map((format) => format.audio_channels || 2)).size === 1) {
    hoisted.push('AudioChannelConfiguration');
    return formats[0].audio_channels;
  }
}

async function getOTFSegmentTemplate(url: string, actions: Actions): Promise<SegmentTemplate> {
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
    init_url: `${resolved_url}&sq=0`,
    media_url: `${resolved_url}&sq=$Number$`,
    timeline: segment_durations
  };
}

async function getPostLiveDvrInfo(transformed_url: string, actions: Actions): Promise<PostLiveDvrInfo> {
  const response = await actions.session.http.fetch_function(`${transformed_url}&rn=0&sq=0`, {
    method: 'HEAD',
    headers: Constants.STREAM_HEADERS,
    redirect: 'follow'
  });

  const duration_ms = parseInt(response.headers.get('X-Head-Time-Millis') || '');
  const segment_count = parseInt(response.headers.get('X-Head-Seqnum') || '');

  if (isNaN(duration_ms) || isNaN(segment_count)) {
    throw new InnertubeError('Failed to extract the duration or segment count for this Post Live DVR video');
  }

  return {
    duration: duration_ms / 1000,
    segment_count
  };
}

async function getPostLiveDvrDuration(
  shared_post_live_dvr_info: SharedPostLiveDvrInfo,
  format: Format,
  url_transformer: URLTransformer,
  actions: Actions,
  player?: Player,
  cpn?: string
) {
  if (!shared_post_live_dvr_info.item) {
    const url = new URL(format.decipher(player));
    url.searchParams.set('cpn', cpn || '');

    const transformed_url = url_transformer(url).toString();

    shared_post_live_dvr_info.item = await getPostLiveDvrInfo(transformed_url, actions);
  }

  return shared_post_live_dvr_info.item.duration;
}

function getSegmentInfo(
  format: Format,
  url_transformer: URLTransformer,
  actions?: Actions,
  player?: Player,
  cpn?: string,
  shared_post_live_dvr_info?: SharedPostLiveDvrInfo
) {
  const url = new URL(format.decipher(player));
  url.searchParams.set('cpn', cpn || '');

  const transformed_url = url_transformer(url).toString();

  if (format.is_type_otf) {
    if (!actions)
      throw new InnertubeError('Unable to get segment durations for this OTF stream without an Actions instance', { format });

    const info: SegmentInfo = {
      is_oft: true,
      is_post_live_dvr: false,
      getSegmentTemplate() {
        return getOTFSegmentTemplate(transformed_url, actions);
      }
    };

    return info;
  }

  if (shared_post_live_dvr_info) {
    if (!actions) {
      throw new InnertubeError('Unable to get segment count for this Post Live DVR video without an Actions instance', { format });
    }

    const target_duration_dec = format.target_duration_dec;

    if (typeof target_duration_dec !== 'number') {
      throw new InnertubeError('Format is missing target_duration_dec', { format });
    }

    const info: SegmentInfo = {
      is_oft: false,
      is_post_live_dvr: true,
      async getSegmentTemplate(): Promise<SegmentTemplate> {
        if (!shared_post_live_dvr_info.item) {
          shared_post_live_dvr_info.item = await getPostLiveDvrInfo(transformed_url, actions);
        }

        return {
          media_url: `${transformed_url}&sq=$Number$`,
          timeline: [
            {
              duration: target_duration_dec * 1000,
              repeat_count: shared_post_live_dvr_info.item.segment_count
            }
          ]
        };
      }
    };

    return info;
  }

  if (!format.index_range || !format.init_range)
    throw new InnertubeError('Index and init ranges not available', { format });

  const info: SegmentInfo = {
    is_oft: false,
    is_post_live_dvr: false,
    base_url: transformed_url,
    index_range: format.index_range,
    init_range: format.init_range
  };

  return info;
}

function getAudioRepresentation(
  format: Format,
  hoisted: string[],
  url_transformer: URLTransformer,
  actions?: Actions,
  player?: Player,
  cpn?: string,
  shared_post_live_dvr_info?: SharedPostLiveDvrInfo
) {
  const url = new URL(format.decipher(player));
  url.searchParams.set('cpn', cpn || '');

  const uid_parts = [ format.itag.toString() ];

  if (format.audio_track) {
    uid_parts.push(format.audio_track.id);
  }

  if (format.is_drc) {
    uid_parts.push('drc');
  }

  const rep: AudioRepresentation = {
    uid: uid_parts.join('-'),
    bitrate: format.bitrate,
    codecs: !hoisted.includes('codecs') ? getStringBetweenStrings(format.mime_type, 'codecs="', '"') : undefined,
    audio_sample_rate: !hoisted.includes('audio_sample_rate') ? format.audio_sample_rate : undefined,
    channels: !hoisted.includes('AudioChannelConfiguration') ? format.audio_channels || 2 : undefined,
    segment_info: getSegmentInfo(format, url_transformer, actions, player, cpn, shared_post_live_dvr_info)
  };

  return rep;
}

function getTrackRoles(format: Format, has_drc_streams: boolean) {
  if (!format.audio_track && !has_drc_streams) {
    return;
  }

  const roles: ('main' | 'dub' | 'description' | 'enhanced-audio-intelligibility' | 'alternate')[] = [
    format.is_original ? 'main' : 'alternate'
  ];

  if (format.is_dubbed || format.is_auto_dubbed)
    roles.push('dub');

  if (format.is_descriptive)
    roles.push('description');

  if (format.is_drc)
    roles.push('enhanced-audio-intelligibility');

  return roles;
}

function getAudioSet(
  formats: Format[],
  url_transformer: URLTransformer,
  actions?: Actions,
  player?: Player,
  cpn?: string,
  shared_post_live_dvr_info?: SharedPostLiveDvrInfo,
  drc_labels?: DrcLabels
) {
  const first_format = formats[0];
  const { audio_track } = first_format;
  const hoisted: string[] = [];

  const has_drc_streams = !!drc_labels;

  let track_name;

  if (audio_track) {
    if (has_drc_streams && first_format.is_drc) {
      track_name = drc_labels.label_drc_multiple(audio_track.display_name);
    } else {
      track_name = audio_track.display_name;
    }
  } else if (has_drc_streams) {
    track_name = first_format.is_drc ? drc_labels.label_drc : drc_labels.label_original;
  }

  const set: AudioSet = {
    mime_type: first_format.mime_type.split(';')[0],
    language: first_format.language ?? undefined,
    codecs: hoistCodecsIfPossible(formats, hoisted),
    audio_sample_rate: hoistNumberAttributeIfPossible(formats, 'audio_sample_rate', hoisted),
    track_name,
    track_roles: getTrackRoles(first_format, has_drc_streams),
    channels: hoistAudioChannelsIfPossible(formats, hoisted),
    representations: formats.map((format) => getAudioRepresentation(format, hoisted, url_transformer, actions, player, cpn, shared_post_live_dvr_info))
  };

  return set;
}

const COLOR_PRIMARIES: Record<string, ColorInfo['primaries']> = {
  BT709: '1',
  BT2020: '9'
};

const COLOR_TRANSFER_CHARACTERISTICS: Record<string, ColorInfo['transfer_characteristics']> = {
  BT709: '1',
  BT2020_10: '14',
  SMPTEST2084: '16',
  ARIB_STD_B67: '18'
};

// This list is incomplete, as the player.js doesn't currently have any code for matrix coefficients,
// So it doesn't have a list like with the other two, so this is just based on what we've seen in responses
const COLOR_MATRIX_COEFFICIENTS: Record<string, ColorInfo['matrix_coefficients']> = {
  BT709: '1',
  BT2020_NCL: '14'
};

function getColorInfo(format: Format) {
  // Section 5.5 Video source metadata signalling https://dashif.org/docs/IOP-Guidelines/DASH-IF-IOP-Part7-v5.0.0.pdf
  // Section 8 Video code points https://www.itu.int/rec/T-REC-H.273-202107-I/en
  // The player.js file was also helpful

  const color_info = format.color_info;
  let primaries;
  let transfer_characteristics;
  let matrix_coefficients;

  if (color_info) {
    if (color_info.primaries) {
      primaries = COLOR_PRIMARIES[color_info.primaries];
    }

    if (color_info.transfer_characteristics) {
      transfer_characteristics = COLOR_TRANSFER_CHARACTERISTICS[color_info.transfer_characteristics];
    }

    if (color_info.matrix_coefficients) {
      matrix_coefficients = COLOR_MATRIX_COEFFICIENTS[color_info.matrix_coefficients];

      if (!matrix_coefficients) {
        const url = new URL(format.url as string);

        const anonymisedFormat = JSON.parse(JSON.stringify(format));
        anonymisedFormat.url = 'REDACTED';
        anonymisedFormat.signature_cipher = 'REDACTED';
        anonymisedFormat.cipher = 'REDACTED';

        Log.warn(TAG_, `Unknown matrix coefficients "${color_info.matrix_coefficients}". The DASH manifest is still usable without this.\n`
          + `Please report it at ${Platform.shim.info.bugs_url} so we can add support for it.\n`
          + `InnerTube client: ${url.searchParams.get('c')}\nformat:`, anonymisedFormat);
      }
    }
  } else if (getStringBetweenStrings(format.mime_type, 'codecs="', '"')?.startsWith('avc1')) {
    // YouTube's h264 streams always seem to be SDR, so this is a pretty safe bet.
    transfer_characteristics = COLOR_TRANSFER_CHARACTERISTICS.BT709;
  }

  const info: ColorInfo = {
    primaries,
    transfer_characteristics,
    matrix_coefficients
  };

  return info;
}

function getVideoRepresentation(
  format: Format,
  url_transformer: URLTransformer,
  hoisted: string[],
  player?: Player,
  actions?: Actions,
  cpn?: string,
  shared_post_live_dvr_info?: SharedPostLiveDvrInfo
) {
  const rep: VideoRepresentation = {
    uid: format.itag.toString(),
    bitrate: format.bitrate,
    width: format.width,
    height: format.height,
    codecs: !hoisted.includes('codecs') ? getStringBetweenStrings(format.mime_type, 'codecs="', '"') : undefined,
    fps: !hoisted.includes('fps') ? format.fps : undefined,
    segment_info: getSegmentInfo(format, url_transformer, actions, player, cpn, shared_post_live_dvr_info)
  };

  return rep;
}

function getVideoSet(
  formats: Format[],
  url_transformer: URLTransformer,
  player?: Player,
  actions?: Actions,
  cpn?: string,
  shared_post_live_dvr_info?: SharedPostLiveDvrInfo
) {
  const first_format = formats[0];
  const color_info = getColorInfo(first_format);
  const hoisted: string[] = [];

  const set: VideoSet = {
    mime_type: first_format.mime_type.split(';')[0],
    color_info,
    codecs: hoistCodecsIfPossible(formats, hoisted),
    fps: hoistNumberAttributeIfPossible(formats, 'fps', hoisted),
    representations: formats.map((format) => getVideoRepresentation(format, url_transformer, hoisted, player, actions, cpn, shared_post_live_dvr_info))
  };

  return set;
}

function getStoryboardInfo(
  storyboards: PlayerStoryboardSpec | PlayerLiveStoryboardSpec
) {
  // Can't seem to combine the types in the Map, so create an alias here
  type AnyStoryboardData = StoryboardData | LiveStoryboardData

  const mime_info = new Map<string, AnyStoryboardData[]>();

  const boards = storyboards.is(PlayerStoryboardSpec) ? storyboards.boards : [ storyboards.board ];

  for (const storyboard of boards) {
    const extension = new URL(storyboard.template_url).pathname.split('.').pop();

    const mime_type = `image/${extension === 'jpg' ? 'jpeg' : extension}`;

    if (!mime_info.has(mime_type)) {
      mime_info.set(mime_type, []);
    }
    mime_info.get(mime_type)?.push(storyboard);
  }

  return mime_info;
}

interface SharedStoryboardResponse {
  response?: Promise<Response>
}

async function getStoryboardMimeType(
  actions: Actions,
  board: StoryboardData | LiveStoryboardData,
  transform_url: URLTransformer,
  probable_mime_type: string,
  shared_response: SharedStoryboardResponse
) {
  const url = board.template_url;

  const req_url = transform_url(new URL(url.replace('$M', '0')));

  const res_promise = shared_response.response ? shared_response.response : actions.session.http.fetch_function(req_url, {
    method: 'HEAD',
    headers: Constants.STREAM_HEADERS
  });

  shared_response.response = res_promise;

  const res = await res_promise;

  return res.headers.get('Content-Type') || probable_mime_type;
}

async function getStoryboardBitrate(
  actions: Actions,
  board: StoryboardData | LiveStoryboardData,
  shared_response: SharedStoryboardResponse
) {
  const url = board.template_url;

  const response_promises: Promise<Response>[] = [];

  // Set a limit so we don't take forever for long videos
  const request_limit = Math.min(board.type === 'vod' ? board.storyboard_count : 5, 10);
  for (let i = 0; i < request_limit; i++) {
    const req_url = new URL(url.replace('$M', i.toString()));

    const response_promise =
      i === 0 && shared_response.response ?
        shared_response.response :
        actions.session.http.fetch_function(req_url, {
          method: 'HEAD',
          headers: Constants.STREAM_HEADERS
        });

    if (i === 0)
      shared_response.response = response_promise;

    response_promises.push(response_promise);
  }

  // Run the requests in parallel to avoid causing too much delay
  const responses = await Promise.all(response_promises);

  const content_lengths = [];

  for (const response of responses) {
    content_lengths.push(parseInt(response.headers.get('Content-Length') || '0'));
  }

  // This is a rough estimate, so it probably won't reflect that actual peak bitrate
  // Hopefully it's close enough, because figuring out the actual peak bitrate would require downloading and analysing all storyboard tiles
  return Math.ceil((Math.max(...content_lengths) / (board.rows * board.columns)) * 8);
}

function getImageRepresentation(
  duration: number,
  actions: Actions,
  board: StoryboardData | LiveStoryboardData,
  transform_url: URLTransformer,
  shared_response: SharedStoryboardResponse
) {
  const url = board.template_url;
  const template_url = new URL(url.replace('$M', '$Number$'));

  let template_duration;

  if (board.type === 'vod') {
    // Here duration is the duration of the video
    template_duration = duration / board.storyboard_count;
  } else {
    // Here duration is the duration of one of the video/audio segments,
    // As there is one tile per segment, we need to multiply it by the number of tiles
    template_duration = duration * board.columns * board.rows;
  }

  const rep: ImageRepresentation = {
    uid: `thumbnails_${board.thumbnail_width}x${board.thumbnail_height}`,
    getBitrate() {
      return getStoryboardBitrate(actions, board, shared_response);
    },
    sheet_width: board.thumbnail_width * board.columns,
    sheet_height: board.thumbnail_height * board.rows,
    thumbnail_height: board.thumbnail_height,
    thumbnail_width: board.thumbnail_width,
    rows: board.rows,
    columns: board.columns,
    template_duration: Math.round(template_duration),
    template_url: transform_url(template_url).toString(),
    getURL(n) {
      return template_url.toString().replace('$Number$', n.toString());
    }
  };

  return rep;
}

function getImageSets(
  duration: number,
  actions: Actions,
  storyboards: PlayerStoryboardSpec | PlayerLiveStoryboardSpec,
  transform_url: URLTransformer
) {
  const mime_info = getStoryboardInfo(storyboards);

  const shared_response: SharedStoryboardResponse = {};

  return Array.from(mime_info.entries()).map<ImageSet>(([ type, boards ]) => ({
    probable_mime_type: type,
    getMimeType() {
      return getStoryboardMimeType(actions, boards[0], transform_url, type, shared_response);
    },
    representations: boards.map((board) => getImageRepresentation(duration, actions, board, transform_url, shared_response))
  }));
}

function getTextSets(
  caption_tracks: CaptionTrackData[],
  format: 'vtt' | 'ttml',
  transform_url: URLTransformer
): TextSet[] {
  const mime_type = format === 'vtt' ? 'text/vtt' : 'application/ttml+xml';

  return caption_tracks.map((caption_track) => {
    const url = new URL(caption_track.base_url);
    url.searchParams.set('fmt', format);

    const track_roles: ('caption' | 'dub')[] = [ 'caption' ];

    if (url.searchParams.has('tlang')) {
      track_roles.push('dub');
    }

    return {
      mime_type,
      language: caption_track.language_code,
      track_name: caption_track.name.toString(),
      track_roles,
      representation: {
        uid: `text-${caption_track.vss_id}`,
        base_url: transform_url(url).toString()
      }
    };
  });
}

export function getStreamingInfo(
  streaming_data?: IStreamingData,
  is_post_live_dvr = false,
  url_transformer: URLTransformer = (url) => url,
  format_filter?: FormatFilter,
  cpn?: string,
  player?: Player,
  actions?: Actions,
  storyboards?: PlayerStoryboardSpec | PlayerLiveStoryboardSpec,
  caption_tracks?: CaptionTrackData[],
  options?: StreamingInfoOptions
) {
  if (!streaming_data)
    throw new InnertubeError('Streaming data not available');

  const formats = format_filter ?
    streaming_data.adaptive_formats.filter((fmt) => !format_filter(fmt)) :
    streaming_data.adaptive_formats;

  let getDuration;
  let shared_post_live_dvr_info: SharedPostLiveDvrInfo | undefined;

  if (is_post_live_dvr) {
    shared_post_live_dvr_info = {};

    if (!actions) {
      throw new InnertubeError('Unable to get duration or segment count for this Post Live DVR video without an Actions instance');
    }

    getDuration = () => {
      // Should never happen, as we set it just a few lines above, but this stops TypeScript complaining
      if (!shared_post_live_dvr_info) {
        return Promise.resolve(0);
      }

      return getPostLiveDvrDuration(shared_post_live_dvr_info, formats[0], url_transformer, actions, player, cpn);
    };
  } else {
    const duration = formats[0].approx_duration_ms / 1000;

    getDuration = () => Promise.resolve(duration);
  }

  const {
    groups,
    has_multiple_audio_tracks
  } = getFormatGroupings(formats, is_post_live_dvr);

  const {
    video_groups,
    audio_groups
  } = groups.reduce((acc, formats) => {
    if (formats[0].has_audio) {
      // Some videos with multiple audio tracks, have a broken one, that doesn't have any audio track information
      // It seems to be the same as default audio track but broken
      // We want to ignore it, as it messes up audio track selection in players and YouTube ignores it too
      // At the time of writing, this video has a broken audio track: https://youtu.be/UJeSWbR6W04
      if (has_multiple_audio_tracks && !formats[0].audio_track)
        return acc;

      acc.audio_groups.push(formats);
      return acc;
    }

    acc.video_groups.push(formats);

    return acc;
  }, {
    video_groups: [] as Format[][],
    audio_groups: [] as Format[][]
  });

  let drc_labels: DrcLabels | undefined;

  if (audio_groups.flat().some((format) => format.is_drc)) {
    drc_labels = {
      label_original: options?.label_original || 'Original',
      label_drc: options?.label_drc || 'Stable Volume',
      label_drc_multiple: options?.label_drc_multiple || ((display_name) => `${display_name} (Stable Volume)`)
    };
  }

  const audio_sets = audio_groups.map((formats) => getAudioSet(formats, url_transformer, actions, player, cpn, shared_post_live_dvr_info, drc_labels));

  const video_sets = video_groups.map((formats) => getVideoSet(formats, url_transformer, player, actions, cpn, shared_post_live_dvr_info));

  let image_sets: ImageSet[] = [];

  // XXX: We need to make requests to get the image sizes, so we'll skip the storyboards if we don't have an Actions instance
  if (storyboards && actions) {
    let duration;

    if (storyboards.is(PlayerStoryboardSpec)) {
      duration = formats[0].approx_duration_ms / 1000;
    } else {
      const target_duration_dec = formats[0].target_duration_dec;
      if (target_duration_dec === undefined)
        throw new InnertubeError('Format is missing target_duration_dec', { format: formats[0] });
      duration = target_duration_dec;
    }

    image_sets = getImageSets(duration, actions, storyboards, url_transformer);
  }

  let text_sets: TextSet[] = [];

  if (caption_tracks && options?.captions_format) {
    if ((options.captions_format as string) !== 'vtt' && (options.captions_format as string) !== 'ttml') {
      throw new InnertubeError('Invalid captions format', options.captions_format);
    }
    text_sets = getTextSets(caption_tracks, options.captions_format, url_transformer);
  }

  const info : StreamingInfo = {
    getDuration,
    audio_sets,
    video_sets,
    image_sets,
    text_sets
  };

  return info;
}
