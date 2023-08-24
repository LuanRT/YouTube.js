/* eslint-disable tsdoc/syntax */
/** @jsxFactory DashUtils.createElement */
/** @jsxFragmentFactory DashUtils.Fragment */
import type Actions from '../core/Actions.js';
import type Player from '../core/Player.js';
import type { IStreamingData } from '../parser/index.js';
import type { PlayerStoryboardSpec } from '../parser/nodes.js';
import * as DashUtils from './DashUtils.js';
import type { SegmentInfo as FSegmentInfo } from './StreamingInfo.js';
import { getStreamingInfo } from './StreamingInfo.js';
import type { FormatFilter, URLTransformer } from '../types/FormatUtils.js';
import { InnertubeError } from './Utils.js';

interface DashManifestProps {
  streamingData: IStreamingData;
  transformURL?: URLTransformer;
  rejectFormat?: FormatFilter;
  cpn?: string;
  player?: Player;
  actions?: Actions;
  storyboards?: PlayerStoryboardSpec;
}

async function OTFSegmentInfo({ info }: { info: FSegmentInfo }) {
  if (!info.is_oft) return null;

  const template = await info.getSegmentTemplate();

  return <segment-template
    startNumber="1"
    timescale="1000"
    initialization={template.init_url}
    media={template.media_url}
  >
    <segment-timeline>
      {
        template.timeline.map((segment_duration) => (
          <s
            d={segment_duration.duration}
            r={segment_duration.repeat_count}
          />
        ))
      }
    </segment-timeline>
  </segment-template>;
}

function SegmentInfo({ info }: { info: FSegmentInfo }) {
  if (info.is_oft) {
    return <OTFSegmentInfo info={info} />;
  }
  return <>
    <base-url>
      {info.base_url}
    </base-url>
    <segment-base indexRange={`${info.index_range.start}-${info.index_range.end}`}>
      <initialization range={`${info.init_range.start}-${info.init_range.end}`} />
    </segment-base>
  </>;
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
  const {
    duration,
    audio_sets,
    video_sets,
    image_sets
  } = getStreamingInfo(streamingData, transformURL, rejectFormat, cpn, player, actions, storyboards);

  // XXX: DASH spec: https://standards.iso.org/ittf/PubliclyAvailableStandards/c083314_ISO_IEC%2023009-1_2022(en).zip

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
        audio_sets.map((set, index) => (
          <adaptation-set
            id={index}
            mimeType={set.mime_type}
            startWithSAP="1"
            subsegmentAlignment="true"
            lang={set.language}
            codecs={set.codecs}
            audioSamplingRate={set.audio_sample_rate}
          >
            {
              set.track_role &&
              <role
                schemeIdUri="urn:mpeg:dash:role:2011"
                value={set.track_role}
              />
            }
            {
              set.track_name &&
              <label id={index}>
                {set.track_name}
              </label>
            }
            {
              set.channels &&
              <audio-channel-configuration
                schemeIdUri="urn:mpeg:dash:23003:3:audio_channel_configuration:2011"
                value={set.channels}
              />
            }
            {
              set.representations.map((rep) => (
                <representation
                  id={rep.uid}
                  bandwidth={rep.bitrate}
                  codecs={rep.codecs}
                  audioSamplingRate={rep.audio_sample_rate}
                >
                  {
                    rep.channels &&
                    <audio-channel-configuration
                      schemeIdUri="urn:mpeg:dash:23003:3:audio_channel_configuration:2011"
                      value={rep.channels}
                    />
                  }
                  <SegmentInfo info={rep.segment_info} />
                </representation>
              ))
            }
          </adaptation-set>
        ))
      }
      {
        video_sets.map((set, index) => (
          <adaptation-set
            id={index + audio_sets.length}
            mimeType={set.mime_type}
            startWithSAP="1"
            subsegmentAlignment="true"
            codecs={set.codecs}
            maxPlayoutRate="1"
            frameRate={set.fps}
          >
            {
              set.color_info.primaries &&
              <essential-property
                schemeIdUri="urn:mpeg:mpegB:cicp:ColourPrimaries"
                value={set.color_info.primaries}
              />
            }
            {
              set.color_info.transfer_characteristics &&
              <essential-property
                schemeIdUri="urn:mpeg:mpegB:cicp:TransferCharacteristics"
                value={set.color_info.transfer_characteristics}
              />
            }
            {
              set.color_info.matrix_coefficients &&
              <essential-property
                schemeIdUri="urn:mpeg:mpegB:cicp:MatrixCoefficients"
                value={set.color_info.matrix_coefficients}
              />
            }
            {
              set.representations.map((rep) => (
                <representation
                  id={rep.uid}
                  bandwidth={rep.bitrate}
                  width={rep.width}
                  height={rep.height}
                  codecs={rep.codecs}
                  frameRate={rep.fps}
                >
                  <SegmentInfo info={rep.segment_info} />
                </representation>
              ))
            }
          </adaptation-set>
        ))
      }
      {
        image_sets.map(async (set, index) => {
          return <adaptation-set
            id={index + audio_sets.length + video_sets.length}
            mimeType={await set.getMimeType()}
            contentType="image"
          >
            {
              set.representations.map(async (rep) => (
                <representation
                  id={`thumbnails_${rep.thumbnail_width}x${rep.thumbnail_height}`}
                  bandwidth={await rep.getBitrate()}
                  width={rep.sheet_width}
                  height={rep.sheet_height}
                >
                  <essential-property
                    schemeIdUri="http://dashif.org/thumbnail_tile"
                    value={`${rep.columns}x${rep.rows}`}
                  />
                  <segment-template
                    media={rep.template_url}
                    duration={rep.template_duration}
                    startNumber="0"
                  />
                </representation>
              ))
            }
          </adaptation-set>;
        })
      }
    </period>
  </mpd>;
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
