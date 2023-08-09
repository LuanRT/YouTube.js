import type Actions from '../core/Actions.js';
import type Player from '../core/Player.js';
import { StoryboardData } from '../parser/classes/PlayerStoryboardSpec.js';
import type { IStreamingData } from '../parser/index.js';
import type { Format } from '../parser/misc.js';
import { PlayerStoryboardSpec } from '../parser/nodes.js';
import * as DashUtils from './DashUtils.js';
import type { FormatFilter, URLTransformer } from './FormatUtils.js';
import { InnertubeError, Platform, getStringBetweenStrings } from './Utils.js';
import { Constants } from './index.js';

interface DashManifestProps {
  streamingData: IStreamingData;
  transformURL?: URLTransformer;
  rejectFormat?: FormatFilter;
  cpn?: string;
  player?: Player;
  actions?: Actions;
  storyboards?: PlayerStoryboardSpec;
}

interface OTFSegmentInfo {
  resolved_url: string,
  segment_durations: {
    duration: number,
    repeat_count?: number
  }[]
}

async function getOTFSegmentInfo(url: string, actions: Actions): Promise<OTFSegmentInfo> {
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
  attribute: 'audioSamplingRate' | 'frameRate',
  property: 'audio_sample_rate' | 'fps', 
  hoisted: string[]
) {
  if (formats.length > 1 && new Set(formats.map((format) => format.fps)).size === 1) {
    hoisted.push(attribute);
    return formats[0][property]?.toString();
  }
}

function getStoryboardInfo(
  actions: Actions,
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

function HoistAudioChannelsIfPossible({formats, hoisted}: {formats: Format[], hoisted: string[]}) {
  if (formats.length > 1 && new Set(formats.map((format) => format.audio_channels?.toString() || '2')).size === 1) {
    hoisted.push('AudioChannelConfiguration');
    return <audio-channel-configuration
      schemeIdUri="urn:mpeg:dash:23003:3:audio_channel_configuration:2011"
      value={formats[0].audio_channels?.toString() || '2'}
    />
  }
  return null;
}

async function OTFSegmentInfo({ format, url, actions }: { format: Format, url: string, actions?: Actions }) {
  if (!actions)
    throw new InnertubeError('Unable to get segment durations for this OTF stream without an Actions instance', { format });

  const { resolved_url, segment_durations } = await getOTFSegmentInfo(url, actions);

  return <segment-template
    startNumber="1"
    timescale="1000"
    initialization={`${resolved_url}&sq=0`}
    media={`${resolved_url}&sq=$Number$`}
  >
    <segment-timeline>
      {
        segment_durations.map((segment_duration) => (
          <s
            d={segment_duration.duration}
            r={segment_duration.repeat_count}
          />
        ))
      }
    </segment-timeline>
  </segment-template>;
}

function SegmentInfo({ format, url, actions }: { format: Format, url: string, actions?: Actions }) {
  if (format.is_type_otf) {
    return <OTFSegmentInfo format={format} url={url} actions={actions} />;
  }

  if (!format.index_range || !format.init_range)
    throw new InnertubeError('Index and init ranges not available', { format });

  return <>
    <base-url>
      {url}
    </base-url>
    <segment-base indexRange={`${format.index_range.start}-${format.index_range.end}`}>
      <initialization range={`${format.init_range.start}-${format.init_range.end}`} />
    </segment-base>
  </>;
}

function AudioRepresentation({
  format, transformURL, hoisted, actions, cpn, player
}: {
  format: Format, 
  transformURL?: URLTransformer, 
  hoisted: string[], 
  cpn?: string, 
  player?: Player, 
  actions?: Actions
}) {
  const url = new URL(format.decipher(player));
  url.searchParams.set('cpn', cpn || '');

  return <representation
    id={format.audio_track ? `${format.itag}-${format.audio_track.id}` : format.itag}
    bandwidth={format.bitrate}
    codecs={!hoisted.includes('codecs') ? getStringBetweenStrings(format.mime_type, 'codecs="', '"') : undefined}
    audioSamplingRate={!hoisted.includes('audioSamplingRate') ? format.audio_sample_rate : undefined}
  >
    {
      !hoisted.includes('AudioChannelConfiguration') &&
      <audio-channel-configuration
        schemeIdUri="urn:mpeg:dash:23003:3:audio_channel_configuration:2011"
        value={format.audio_channels || 2}
      />
    }
    <SegmentInfo format={format} actions={actions} url={transformURL ? transformURL(url).toString() : url.toString()} />
  </representation>;
}

function VideoRepresentation({ 
  format, player, cpn, actions, transformURL, hoisted
}: { 
  format: Format, 
  player?: Player, 
  cpn?: string, 
  actions?: Actions, 
  transformURL?: URLTransformer,
  hoisted: string[]
}) {

  const url = new URL(format.decipher(player));
  url.searchParams.set('cpn', cpn || '');

  return <representation
    id={format.itag}
    bandwidth={format.bitrate}
    width={format.width}
    height={format.height}
    codecs={!hoisted.includes('codecs') ? getStringBetweenStrings(format.mime_type, 'codecs="', '"') : undefined}
    frameRate={!hoisted.includes('frameRate') ? format.fps : undefined}
  >
    <SegmentInfo format={format} actions={actions} url={transformURL ? transformURL(url).toString() : url.toString()} />
  </representation>;
}

async function ImageRepresentation({
  storyboard, 
  duration,
  transformURL,
  currentMimeType,
  onMimeTypeConflict,
  actions
}: {
  storyboard: StoryboardData,
  duration: number,
  transformURL?: URLTransformer,
  actions: Actions,
  currentMimeType: string,
  onMimeTypeConflict: (type: string) => unknown
}) {
  const url = storyboard.template_url;

  const response_promises: Promise<Response>[] = [];

  // Set a limit so we don't take forever for long videos
  const requestLimit = storyboard.storyboard_count > 10 ? 10 : storyboard.storyboard_count;
  for (let i = 0; i < requestLimit; i++) {
    const response_promise = actions.session.http.fetch_function(new URL(url.replace('$M', i.toString())), {
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

    const content_type = response.headers.get('Content-Type');

    // Sometimes youtube returns webp instead of jpg despite the file extension being jpg
    // So we need to update the mime type to reflect the actual mime type of the response

    if (content_type && content_type.length > 0) {
      if (currentMimeType !== content_type) {
        onMimeTypeConflict(content_type)
      }
    }
  }

  // This is a rough estimate, so it probably won't reflect that actual peak bitrate
  // Hopefully it's close enough, because figuring out the actual peak bitrate would require downloading and analysing all storyboard tiles
  const bandwidth = Math.ceil((Math.max(...content_lengths) / (storyboard.rows * storyboard.columns)) * 8);

  const template_url = new URL(url.replace('$M', '$Number$'));

  return <representation
    id={`thumbnails_${storyboard.thumbnail_width}x${storyboard.thumbnail_height}`}
    bandwidth={bandwidth}
    width={storyboard.thumbnail_width * storyboard.columns}
    height={storyboard.thumbnail_height * storyboard.rows}
  >
    <essential-property
      schemeIdUri="http://dashif.org/thumbnail_tile"
      value={`${storyboard.columns}x${storyboard.rows}`}
    />
    <segment-template
      media={transformURL ? transformURL(template_url).toString() : template_url.toString()}
      duration={duration / storyboard.storyboard_count}
      startNumber="0"
    />
  </representation>
}

function MutiTrackSet({
  formats, type, player, cpn, actions, transformURL, getNextSetId
} : {
  formats: Format[], type: string, player?: Player, cpn?: string,
  actions?: Actions,
  transformURL?: URLTransformer, getNextSetId: () => number
}) {
  const tracks = new Map<string, Format[]>();
  for (const format of formats) {
    if (!format.audio_track) 
      continue;
    if (!tracks.has(format.audio_track.id)) {
      tracks.set(format.audio_track.id, []);
    }
    tracks.get(format.audio_track.id)?.push(format);
  }
  
  // The lang attribute has to go on the AdaptationSet element and the Role element goes inside the AdaptationSet too, so we need a separate adaptation set for each language and role
  return <>
    {
      Array.from(tracks.values()).map((formats) => {
        const first_format = formats[0];
        const { audio_track } = first_format;
        const set_id = getNextSetId();
        const hoisted: string[] = [];

        return (
          <adaptation-set
            id={set_id}
            mimeType={type.split(';').shift()}
            startWithSAP="1"
            subsegmentAlignment="true"
            lang={first_format.language}
            codecs={hoistCodecsIfPossible(formats, hoisted)}
            audioSamplingRate={hoistNumberAttributeIfPossible(formats, "audioSamplingRate", "audio_sample_rate", hoisted)}
          >
            {
              audio_track &&
              <role
                schemeIdUri="urn:mpeg:dash:role:2011"
                value={
                  audio_track.audio_is_default ? 'main' :
                    first_format.is_dubbed ? 'dub' :
                      first_format.is_descriptive ? 'description' :
                        'alternate'
                }
              />
            }
            {
              audio_track &&
              <label id={set_id}>
                {audio_track.display_name}
              </label>
            }
            <HoistAudioChannelsIfPossible hoisted={hoisted} formats={formats} />
            {
              formats.map((format) => (
                <AudioRepresentation
                  format={format}
                  hoisted={hoisted}
                  transformURL={transformURL}
                  actions={actions}
                  cpn={cpn}
                  player={player}
                />
              ))
            }
          </adaptation-set>
        )
      })
    }
  </>
}

function DashManifest({
  streamingData,
  transformURL,
  rejectFormat,
  cpn,
  player,
  actions,
  storyboards
}: DashManifestProps) {
  const formats = rejectFormat ?
    streamingData.adaptive_formats.filter((fmt) => !rejectFormat(fmt)) :
    streamingData.adaptive_formats;

  if (!formats.length)
    throw new InnertubeError('No adaptive formats found');

  const duration = formats[0].approx_duration_ms / 1000;

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

  let set_id = 0;

  return <mpd
    xmlns="urn:mpeg:dash:schema:mpd:2011"
    minBufferTime="PT1.500S"
    profiles="urn:mpeg:dash:profile:isoff-main:2011"
    type="static"
    mediaPresentationDuration={`PT${duration}S`}
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="urn:mpeg:dash:schema:mpd:2011 http://standards.iso.org/ittf/PubliclyAvailableStandards/MPEG-DASH_schema_files/DASH-MPD.xsd"
  >
    <period>
      {
        Array.from(group_info.entries()).map(([ group_id, formats ]) => {
          const first_format = formats[0];
          const mimeType = first_format.mime_type.split(';')[0];

          if (has_multiple_audio_tracks && first_format.has_audio && !first_format.audio_track) {
            // Some videos with multiple audio tracks, have a broken one, that doesn't have any audio track information
            // It seems to be the same as default audio track but broken
            // We want to ignore it, as it messes up audio track selection in players and YouTube ignores it too
            // At the time of writing, this video has a broken audio track: https://youtu.be/UJeSWbR6W04
    
            return null;
          }

          // When the video has multiple different audio tracks we want to include the extra information in the manifest
          if (formats[0].has_audio) {
            return <MutiTrackSet
              formats={formats} 
              type={mimeType} 
              player={player} 
              cpn={cpn} 
              actions={actions} 
              transformURL={transformURL} 
              getNextSetId={() => set_id++}
            />;
          }

          const color_info = first_format.color_info;
          const color_primaries = 
            color_info?.primaries && (
              color_info.primaries === 'BT709' ? '1' :
              color_info.primaries === 'BT2020' ? '9' :
              false
            );
          const color_transfer_characteristics =
            color_info?.transfer_characteristics && (
              color_info?.transfer_characteristics === 'BT709' ? '1' :
              color_info?.transfer_characteristics === 'BT2020_10' ? '14' :
              color_info?.transfer_characteristics === 'SMPTEST2084' ? '16' :
              color_info?.transfer_characteristics === 'ARIB_STD_B67' ? '18' :
              false
            );

          const color_matrix_coefficients = color_info !== undefined && 
            (() => {
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
                    const url = new URL(first_format.url as string);

                    const anonymisedFormat = JSON.parse(JSON.stringify(first_format));
                    anonymisedFormat.url = 'REDACTED';
                    anonymisedFormat.signature_cipher = 'REDACTED';
                    anonymisedFormat.cipher = 'REDACTED';

                    console.warn(`YouTube.js toDash(): Unknown matrix coefficients "${color_info.matrix_coefficients}", the DASH manifest is still usuable without this.\n`
                      + `Please report it at ${Platform.shim.info.bugs_url} so we can add support for it.\n`
                      + `Innertube client: ${url.searchParams.get('c')}\nformat:`, anonymisedFormat);
                  }
                }

                return matrix_coefficients;
              }
            })();

          const hoisted: string[] = [];

          return (
            <adaptation-set
              id={set_id++}
              mimeType={mimeType}
              startWithSAP="1"
              subsegmentAlignment="true"
              codecs={hoistCodecsIfPossible(formats, hoisted)}
              maxPlayoutRate="1"
              frameRate={hoistNumberAttributeIfPossible(formats, 'frameRate', 'fps', hoisted)}
            >
              {
                color_primaries &&
                <essential-property
                  schemeIdUri="urn:mpeg:mpegB:cicp:ColourPrimaries"
                  value={color_primaries}
                />
              }
              {
                color_transfer_characteristics &&
                <essential-property
                  schemeIdUri="urn:mpeg:mpegB:cicp:TransferCharacteristics"
                  value={color_transfer_characteristics}
                />
              }
              {
                color_matrix_coefficients &&
                <essential-property
                  schemeIdUri="urn:mpeg:mpegB:cicp:MatrixCoefficients"
                  value={color_matrix_coefficients}
                />
              }
              {
                formats.map((format) => (
                  <VideoRepresentation
                      format={format}
                      player={player}
                      cpn={cpn}
                      actions={actions}
                      transformURL={transformURL}
                      hoisted={hoisted}
                    />
                ))
              }
            </adaptation-set>
          )
        })
      }
      {
        storyboards && actions &&
        Array.from(getStoryboardInfo(actions, storyboards).entries()).map(async ([ type, storyboards ]) => {
          let mimeType = type;
          const boards = storyboards.map((storyboard) => (
            <ImageRepresentation
              storyboard={storyboard}
              duration={duration}
              transformURL={transformURL}
              currentMimeType={mimeType}
              onMimeTypeConflict={(type) => mimeType = type}
              actions={actions}
            />
          ));

          return <adaptation-set
            id={set_id++}
            mimeType={mimeType}
            contentType="image"
          >
            {
              boards
            }
          </adaptation-set>
        })
      }
    </period>
  </mpd>
} 

export function toDash(
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

  return DashUtils.renderToString(
    <DashManifest
      streamingData={streaming_data}
      transformURL={url_transformer}
      rejectFormat={format_filter}
      cpn={cpn}
      player={player}
      actions={actions}
      storyboards={storyboards}
    />
  );
}