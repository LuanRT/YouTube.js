import type Actions from '../core/Actions.js';
import type Player from '../core/Player.js';
import type { StoryboardData } from '../parser/classes/PlayerStoryboardSpec.js';
import type { IStreamingData } from '../parser/index.js';
import type { Format } from '../parser/misc.js';
import type { PlayerStoryboardSpec } from '../parser/nodes.js';
import type { FormatFilter, URLTransformer } from '../types/FormatUtils.js';
import { InnertubeError, Platform, getStringBetweenStrings } from './Utils.js';
import { Constants } from './index.js';

export interface StreamingInfo {
  duration: number;
  audio_sets: AudioSet[];
  video_sets: VideoSet[];
  image_sets: ImageSet[];
}

export interface AudioSet {
  mime_type: string;
  language?: string;
  codecs?: string;
  audio_sample_rate?: number;
  track_name?: string;
  track_role?: 'main' | 'dub' | 'description' | 'alternate';
  channels?: number;
  representations: AudioRepresentation[];
}

export interface Range {
  start: number;
  end: number;
}

export type SegmentInfo = {
  is_oft: false,
  base_url: string;
  index_range: Range;
  init_range: Range;
} | {
  is_oft: true,
  getSegmentTemplate(): Promise<SegmentTemplate>
}

export interface Segment {
  duration: number,
  repeat_count?: number
}

export interface SegmentTemplate {
  init_url: string,
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
  width: number;
  height: number;
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
   * Sometimes youtube returns webp instead of jpg despite the file extension being jpg
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

function getFormatGroupings(formats: Format[]) {
  const group_info = new Map<string, Format[]>();

  const has_multiple_audio_tracks = formats.some((fmt) => !!fmt.audio_track);

  for (const format of formats) {
    if ((!format.index_range || !format.init_range) && !format.is_type_otf) {
      continue;
    }
    const mime_type = format.mime_type.split(';')[0];

    // Codec without any profile or level information
    const just_codec = getStringBetweenStrings(format.mime_type, 'codecs="', '"')?.split('.')[0];

    // HDR videos have both SDR and HDR vp9 formats, so we want to stick them in different groups
    const color_info = format.color_info ? Object.values(format.color_info).join('-') : '';

    const audio_track_id = format.audio_track?.id || '';

    const group_id = `${mime_type}-${just_codec}-${color_info}-${audio_track_id}`;

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

function getSegmentInfo(
  format: Format,
  url_transformer: URLTransformer,
  actions?: Actions,
  player?: Player,
  cpn?: string
) {
  const url = new URL(format.decipher(player));
  url.searchParams.set('cpn', cpn || '');

  const transformed_url = url_transformer(url).toString();

  if (format.is_type_otf) {
    if (!actions)
      throw new InnertubeError('Unable to get segment durations for this OTF stream without an Actions instance', { format });

    const info: SegmentInfo = {
      is_oft: true,
      getSegmentTemplate() {
        return getOTFSegmentTemplate(transformed_url, actions);
      }
    };

    return info;
  }

  if (!format.index_range || !format.init_range)
    throw new InnertubeError('Index and init ranges not available', { format });

  const info: SegmentInfo = {
    is_oft: false,
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
  cpn?: string
) {
  const url = new URL(format.decipher(player));
  url.searchParams.set('cpn', cpn || '');

  const rep: AudioRepresentation = {
    uid: format.audio_track ? `${format.itag}-${format.audio_track.id}` : format.itag.toString(),
    bitrate: format.bitrate,
    codecs: !hoisted.includes('codecs') ? getStringBetweenStrings(format.mime_type, 'codecs="', '"') : undefined,
    audio_sample_rate: !hoisted.includes('audio_sample_rate') ? format.audio_sample_rate : undefined,
    channels: !hoisted.includes('AudioChannelConfiguration') ? format.audio_channels || 2 : undefined,
    segment_info: getSegmentInfo(format, url_transformer, actions, player, cpn)
  };

  return rep;
}

function getTrackRole(format: Format) {
  const { audio_track } = format;

  if (!audio_track)
    return;

  if (audio_track.audio_is_default)
    return 'main';

  if (format.is_dubbed)
    return 'dub';

  if (format.is_descriptive)
    return 'description';

  return 'alternate';
}

function getAudioSet(
  formats: Format[],
  url_transformer: URLTransformer,
  actions?: Actions,
  player?: Player,
  cpn?: string
) {
  const first_format = formats[0];
  const { audio_track } = first_format;
  const hoisted: string[] = [];

  const set: AudioSet = {
    mime_type: first_format.mime_type.split(';')[0],
    language: first_format.language ?? undefined,
    codecs: hoistCodecsIfPossible(formats, hoisted),
    audio_sample_rate: hoistNumberAttributeIfPossible(formats, 'audio_sample_rate', hoisted),
    track_name: audio_track?.display_name,
    track_role: getTrackRole(first_format),
    channels: hoistAudioChannelsIfPossible(formats, hoisted),
    representations: formats.map((format) => getAudioRepresentation(format, hoisted, url_transformer, actions, player, cpn))
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
  const primaries =
    color_info?.primaries ? COLOR_PRIMARIES[color_info.primaries] : undefined;

  const transfer_characteristics =
    color_info?.transfer_characteristics ? COLOR_TRANSFER_CHARACTERISTICS[color_info.transfer_characteristics] : undefined;

  const matrix_coefficients =
    color_info?.matrix_coefficients ? COLOR_MATRIX_COEFFICIENTS[color_info.matrix_coefficients] : undefined;

  if (color_info?.matrix_coefficients && !matrix_coefficients) {
    const url = new URL(format.url as string);

    const anonymisedFormat = JSON.parse(JSON.stringify(format));
    anonymisedFormat.url = 'REDACTED';
    anonymisedFormat.signature_cipher = 'REDACTED';
    anonymisedFormat.cipher = 'REDACTED';

    console.warn(`YouTube.js toDash(): Unknown matrix coefficients "${color_info.matrix_coefficients}", the DASH manifest is still usuable without this.\n`
      + `Please report it at ${Platform.shim.info.bugs_url} so we can add support for it.\n`
      + `Innertube client: ${url.searchParams.get('c')}\nformat:`, anonymisedFormat);
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
  cpn?: string
) {
  const rep: VideoRepresentation = {
    uid: format.itag.toString(),
    bitrate: format.bitrate,
    width: format.width,
    height: format.height,
    codecs: !hoisted.includes('codecs') ? getStringBetweenStrings(format.mime_type, 'codecs="', '"') : undefined,
    fps: !hoisted.includes('fps') ? format.fps : undefined,
    segment_info: getSegmentInfo(format, url_transformer, actions, player, cpn)
  };

  return rep;
}

function getVideoSet(
  formats: Format[],
  url_transformer: URLTransformer,
  player?: Player,
  actions?: Actions,
  cpn?: string
) {
  const first_format = formats[0];
  const color_info = getColorInfo(first_format);
  const hoisted: string[] = [];

  const set: VideoSet = {
    mime_type: first_format.mime_type.split(';')[0],
    color_info,
    codecs: hoistCodecsIfPossible(formats, hoisted),
    fps: hoistNumberAttributeIfPossible(formats, 'fps', hoisted),
    representations: formats.map((format) => getVideoRepresentation(format, url_transformer, hoisted, player, actions, cpn))
  };

  return set;
}

function getStoryboardInfo(
  storyboards: PlayerStoryboardSpec
) {
  const mime_info = new Map<string, StoryboardData[]>();

  for (const storyboard of storyboards.boards) {
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
  board: StoryboardData,
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
  board: StoryboardData,
  shared_response: SharedStoryboardResponse
) {
  const url = board.template_url;

  const response_promises: Promise<Response>[] = [];

  // Set a limit so we don't take forever for long videos
  const request_limit = Math.min(board.storyboard_count, 10);
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
  const bandwidth = Math.ceil((Math.max(...content_lengths) / (board.rows * board.columns)) * 8);

  return bandwidth;
}

function getImageRepresentation(
  duration: number,
  actions: Actions,
  board: StoryboardData,
  transform_url: URLTransformer,
  shared_response: SharedStoryboardResponse
) {
  const url = board.template_url;
  const template_url = new URL(url.replace('$M', '$Number$'));

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
    template_duration: duration / board.storyboard_count,
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
  storyboards: PlayerStoryboardSpec,
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

export function getStreamingInfo(
  streaming_data?: IStreamingData,
  url_transformer: URLTransformer = (url) => url,
  format_filter?: FormatFilter,
  cpn?: string,
  player?: Player,
  actions?: Actions,
  storyboards?: PlayerStoryboardSpec
) {
  if (!streaming_data)
    throw new InnertubeError('Streaming data not available');

  const formats = format_filter ?
    streaming_data.adaptive_formats.filter((fmt) => !format_filter(fmt)) :
    streaming_data.adaptive_formats;

  const duration = formats[0].approx_duration_ms / 1000;

  const {
    groups,
    has_multiple_audio_tracks
  } = getFormatGroupings(formats);

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

  const audio_sets = audio_groups.map((formats) => getAudioSet(formats, url_transformer, actions, player, cpn));

  const video_sets = video_groups.map((formats) => getVideoSet(formats, url_transformer, player, actions, cpn));

  // XXX: We need to make requests to get the image sizes, so we'll skip the storyboards if we don't have an Actions instance
  const image_sets = storyboards && actions ? getImageSets(duration, actions, storyboards, url_transformer) : [];

  const info : StreamingInfo = {
    duration,
    audio_sets,
    video_sets,
    image_sets
  };

  return info;
}
