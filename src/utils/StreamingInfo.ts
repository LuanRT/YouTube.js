import Actions from "../core/Actions.js";
import Player from "../core/Player.js";
import { StoryboardData } from "../parser/classes/PlayerStoryboardSpec.js";
import { IStreamingData } from "../parser/index.js";
import { Format } from "../parser/misc.js";
import { PlayerStoryboardSpec } from "../parser/nodes.js";
import { FormatFilter, URLTransformer } from "./FormatUtils.js";
import { InnertubeError, Platform, getStringBetweenStrings } from "./Utils.js";
import { Constants } from "./index.js";

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
};

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

  let has_multiple_audio_tracks = false;

  for (const format of formats) {
    if ((!format.index_range || !format.init_range) && !format.is_type_otf) {
      continue;
    }
    const mime_type = format.mime_type.split(';')[0];

    // Codec without any profile or level information
    const just_codec = getStringBetweenStrings(format.mime_type, 'codecs="', '"')?.split('.')[0];

    // HDR videos have both SDR and HDR vp9 formats, so we want to stick them in different groups
    const color_info = format.color_info ? `${format.color_info.primaries}-${format.color_info.transfer_characteristics}-${format.color_info.matrix_coefficients}` : '';

    has_multiple_audio_tracks = has_multiple_audio_tracks || !!format.audio_track;
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
  if (formats.length > 1 && new Set(formats.map((format) => format.audio_channels?.toString() || '2')).size === 1) {
    hoisted.push('AudioChannelConfiguration');
    return formats[0].audio_channels;
  }
}

const notrackid = Symbol('ytjs:notrackid');

function getAudioTrackGroups(formats: Format[]) {
  const tracks = new Map<string | symbol, Format[]>();
  for (const format of formats) {
    const tracks_id = !format.audio_track ? notrackid : format.audio_track.id;
    if (!tracks.has(tracks_id)) {
      tracks.set(tracks_id, []);
    }
    tracks.get(tracks_id)?.push(format);
  }
  return Array.from(tracks.values());
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
  cpn?: string,
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
      },
    }

    return info;
  }

  if (!format.index_range || !format.init_range)
    throw new InnertubeError('Index and init ranges not available', { format });

  const info: SegmentInfo = {
    is_oft: false,
    base_url: transformed_url,
    index_range: format.index_range,
    init_range: format.init_range
  }

  return info;
}

function getAudioRepresentation(
  format: Format,
  hoisted: string[],
  url_transformer: URLTransformer,
  actions?: Actions,
  player?: Player,
  cpn?: string,
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

function getTrackSet(
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
    track_role: 
      audio_track ?
        audio_track.audio_is_default ? 'main' :
        first_format.is_dubbed ? 'dub' :
        first_format.is_descriptive ? 'description' :
        'alternate' : undefined,
    channels: hoistAudioChannelsIfPossible(formats, hoisted),
    representations: formats.map((format) => getAudioRepresentation(format, hoisted, url_transformer, actions, player, cpn))
  }

  return set;
}

function getAudioTrackSets(
  formats: Format[],
  url_transformer: URLTransformer,
  actions?: Actions,
  player?: Player,
  cpn?: string
) {
  const track_groups = getAudioTrackGroups(formats);

  return track_groups.map((tracks) => getTrackSet(tracks, url_transformer, actions, player, cpn));
}

function getColorInfo(format: Format) {
  const color_info = format.color_info;
  const primaries =
    color_info?.primaries ? (
      color_info.primaries === 'BT709' ? '1' :
      color_info.primaries === 'BT2020' ? '9' :
      undefined
    ) : undefined;
  
  const transfer_characteristics =
    color_info?.transfer_characteristics ? (
      color_info?.transfer_characteristics === 'BT709' ? '1' :
      color_info?.transfer_characteristics === 'BT2020_10' ? '14' :
      color_info?.transfer_characteristics === 'SMPTEST2084' ? '16' :
      color_info?.transfer_characteristics === 'ARIB_STD_B67' ? '18' :
      undefined
    ) : undefined;

  let matrix_coefficients: '1' | '14' | undefined;
  if (color_info?.matrix_coefficients) {

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
  }

  const info: ColorInfo = {
    primaries,
    transfer_characteristics,
    matrix_coefficients
  }

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
    fps: !hoisted.includes('frameRate') ? format.fps : undefined,
    segment_info: getSegmentInfo(format, url_transformer, actions, player, cpn)
  }

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
  }

  return set;
}

function getStoryboardInfo(
  storyboards: PlayerStoryboardSpec
) {
  const mime_info = new Map<string, StoryboardData[]>();

  for (const storyboard of storyboards.boards) {
    const extension = new URL(storyboard.template_url).pathname.split('.').at(-1);

    let mime_type = '';

    switch (extension) {
      case 'jpg':
        mime_type = 'image/jpeg';
        break;
      case 'png':
        mime_type = 'image/png';
        break;
      case 'webp':
        mime_type = 'image/webp';
        break;
    }

    if (!mime_info.has(mime_type)) {
      mime_info.set(mime_type, []);
    }
    mime_info.get(mime_type)?.push(storyboard);
  }

  return mime_info;
}

async function getStoryboardMimeType(
  actions: Actions, 
  board: StoryboardData,  
  transform_url: URLTransformer,
  probable_mime_type: string
) {
  const url = board.template_url;

  const req_url = transform_url(new URL(url.replace('$M', '0')));

  const res = await actions.session.http.fetch_function(req_url, {
    method: 'HEAD',
    headers: Constants.STREAM_HEADERS
  });

  return res.headers.get('Content-Type') || probable_mime_type;
}

async function getStoryboardBitrate(
  actions: Actions, 
  board: StoryboardData,  
  transform_url: URLTransformer
) {
  const url = board.template_url;

  const response_promises: Promise<Response>[] = [];

  // Set a limit so we don't take forever for long videos
  const requestLimit = board.storyboard_count > 10 ? 10 : board.storyboard_count;
  for (let i = 0; i < requestLimit; i++) {
    const req_url = transform_url(new URL(url.replace('$M', i.toString())));

    const response_promise = actions.session.http.fetch_function(req_url, {
      method: 'HEAD',
      headers: Constants.STREAM_HEADERS
    });

    response_promises.push(response_promise);
  }

  // Run the requests in parallel to avoid causing too much delay
  const responses = await Promise.all(response_promises);

  const content_lengths = [];

  for (const response of responses) {
    content_lengths.push(parseInt(response.headers.get('Content-Length') || '0', 10));
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
  transform_url: URLTransformer
) {
  const url = board.template_url;
  const template_url = new URL(url.replace('$M', '$Number$')).toString();

  const rep: ImageRepresentation = {
    uid: `thumbnails_${board.thumbnail_width}x${board.thumbnail_height}`,
    getBitrate() {
      return getStoryboardBitrate(actions, board, transform_url)
    },
    sheet_width: board.thumbnail_width * board.columns,
    sheet_height: board.thumbnail_height * board.rows,
    thumbnail_height: board.thumbnail_height,
    thumbnail_width: board.thumbnail_width,
    rows: board.rows,
    columns: board.columns,
    template_duration: duration / board.storyboard_count,
    template_url,
    getURL(n) {
      return template_url.replace('$Number$', n.toString())
    }
  }

  return rep;
}

function getImageSets(
  duration: number,
  actions: Actions,
  storyboards: PlayerStoryboardSpec,
  transform_url: URLTransformer
) {
  const mime_info = getStoryboardInfo(storyboards);

  return Array.from(mime_info.entries()).map<ImageSet>(([ type, boards ]) => ({
    probable_mime_type: type,
    getMimeType() {
      return getStoryboardMimeType(actions, boards[0], transform_url, type)
    },
    representations: boards.map((board) => getImageRepresentation(duration, actions, board, transform_url))
  }))
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

  const audio_sets = audio_groups.map((formats) => getAudioTrackSets(formats, url_transformer, actions, player, cpn)).flat();

  const video_sets = video_groups.map((formats) => getVideoSet(formats, url_transformer, player, actions, cpn));

  const image_sets = storyboards && actions ? getImageSets(duration, actions, storyboards, url_transformer) : [];

  const info : StreamingInfo = {
    duration,
    audio_sets,
    video_sets,
    image_sets
  }

  return info;
}
