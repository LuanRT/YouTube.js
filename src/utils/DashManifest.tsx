/** @jsxFactory DashUtils.createElement */
/** @jsxFragmentFactory DashUtils.Fragment */
import * as DashUtils from './DashUtils.js';
import { getStreamingInfo } from './StreamingInfo.js';
import { InnertubeError } from './Utils.js';

import type Actions from '../core/Actions.js';
import type Player from '../core/Player.js';
import type { IStreamingData } from '../parser/index.js';
import type { PlayerStoryboardSpec } from '../parser/nodes.js';
import type { SegmentInfo as FSegmentInfo } from './StreamingInfo.js';
import type { FormatFilter, URLTransformer } from '../types/index.js';
import type PlayerLiveStoryboardSpec from '../parser/classes/PlayerLiveStoryboardSpec.js';
import type { StreamingInfoOptions } from '../types/StreamingInfoOptions.js';
import type { CaptionTrackData } from '../parser/classes/PlayerCaptionsTracklist.js';

interface DashManifestProps {
  streamingData: IStreamingData;
  isPostLiveDvr: boolean;
  transformURL?: URLTransformer;
  rejectFormat?: FormatFilter;
  options?: StreamingInfoOptions,
  cpn?: string;
  player?: Player;
  actions?: Actions;
  storyboards?: PlayerStoryboardSpec | PlayerLiveStoryboardSpec;
  captionTracks?: CaptionTrackData[];
}

async function OTFPostLiveDvrSegmentInfo({ info }: { info: FSegmentInfo }) {
  if (!info.is_oft && !info.is_post_live_dvr) return null;

  const template = await info.getSegmentTemplate();

  return <segmentTemplate
    startNumber={template.init_url ? '1' : '0'}
    timescale="1000"
    initialization={template.init_url}
    media={template.media_url}
  >
    <segmentTimeline>
      {
        template.timeline.map((segment_duration) => (
          <s
            d={segment_duration.duration}
            r={segment_duration.repeat_count}
          />
        ))
      }
    </segmentTimeline>
  </segmentTemplate>;
}

function SegmentInfo({ info }: { info: FSegmentInfo }) {
  if (info.is_oft || info.is_post_live_dvr) {
    return <OTFPostLiveDvrSegmentInfo info={info} />;
  }
  return <>
    <baseURL>
      {info.base_url}
    </baseURL>
    <segmentBase indexRange={`${info.index_range.start}-${info.index_range.end}`}>
      <initialization range={`${info.init_range.start}-${info.init_range.end}`} />
    </segmentBase>
  </>;
}

async function DashManifest({
  streamingData,
  isPostLiveDvr,
  transformURL,
  rejectFormat,
  cpn,
  player,
  actions,
  storyboards,
  captionTracks,
  options
}: DashManifestProps) {
  const {
    getDuration,
    audio_sets,
    video_sets,
    image_sets,
    text_sets
  } = getStreamingInfo(streamingData, isPostLiveDvr, transformURL, rejectFormat, cpn, player, actions, storyboards, captionTracks, options);

  // XXX: DASH spec: https://standards.iso.org/ittf/PubliclyAvailableStandards/c083314_ISO_IEC%2023009-1_2022(en).zip

  return <mPD
    xmlns="urn:mpeg:dash:schema:mpd:2011"
    minBufferTime="PT1.500S"
    profiles="urn:mpeg:dash:profile:isoff-main:2011"
    type="static"
    mediaPresentationDuration={`PT${await getDuration()}S`}
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="urn:mpeg:dash:schema:mpd:2011 http://standards.iso.org/ittf/PubliclyAvailableStandards/MPEG-DASH_schema_files/DASH-MPD.xsd"
  >
    <period>
      {
        audio_sets.map((set, index) => (
          <adaptationSet
            id={index}
            mimeType={set.mime_type}
            startWithSAP="1"
            subsegmentAlignment="true"
            lang={set.language}
            codecs={set.codecs}
            audioSamplingRate={set.audio_sample_rate}
            contentType="audio"
          >
            {
              set.track_roles && set.track_roles.map((role) => (
                <role
                  schemeIdUri="urn:mpeg:dash:role:2011"
                  value={role}
                />
              ))
            }
            {
              set.track_name &&
              <label id={index}>
                {set.track_name}
              </label>
            }
            {
              set.channels &&
              <audioChannelConfiguration
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
                    <audioChannelConfiguration
                      schemeIdUri="urn:mpeg:dash:23003:3:audio_channel_configuration:2011"
                      value={rep.channels}
                    />
                  }
                  <SegmentInfo info={rep.segment_info} />
                </representation>
              ))
            }
          </adaptationSet>
        ))
      }
      {
        video_sets.map((set, index) => (
          <adaptationSet
            id={index + audio_sets.length}
            mimeType={set.mime_type}
            startWithSAP="1"
            subsegmentAlignment="true"
            codecs={set.codecs}
            maxPlayoutRate="1"
            frameRate={set.fps}
            contentType="video"
          >
            {
              set.color_info.primaries &&
              <supplementalProperty
                schemeIdUri="urn:mpeg:mpegB:cicp:ColourPrimaries"
                value={set.color_info.primaries}
              />
            }
            {
              set.color_info.transfer_characteristics &&
              <supplementalProperty
                schemeIdUri="urn:mpeg:mpegB:cicp:TransferCharacteristics"
                value={set.color_info.transfer_characteristics}
              />
            }
            {
              set.color_info.matrix_coefficients &&
              <supplementalProperty
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
          </adaptationSet>
        ))
      }
      {
        image_sets.map(async (set, index) => {
          return <adaptationSet
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
                  <essentialProperty
                    schemeIdUri="http://dashif.org/thumbnail_tile"
                    value={`${rep.columns}x${rep.rows}`}
                  />
                  <segmentTemplate
                    media={rep.template_url}
                    duration={rep.template_duration}
                    startNumber="0"
                  />
                </representation>
              ))
            }
          </adaptationSet>;
        })
      }
      {
        text_sets.map((set, index) => {
          return <adaptationSet
            id={index + audio_sets.length + video_sets.length + image_sets.length}
            mimeType={set.mime_type}
            lang={set.language}
            contentType="text"
          >
            {
              set.track_roles.map((role) => (
                <role
                  schemeIdUri="urn:mpeg:dash:role:2011"
                  value={role}
                />
              ))
            }
            <label id={index + audio_sets.length}>
              {set.track_name}
            </label>
            <representation
              id={set.representation.uid}
              bandwidth="0"
            >
              <baseURL>
                {set.representation.base_url}
              </baseURL>
            </representation>
          </adaptationSet>;
        })
      }
    </period>
  </mPD>;
}

export function toDash(
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

  return DashUtils.renderToString(
    <DashManifest
      streamingData={streaming_data}
      isPostLiveDvr={is_post_live_dvr}
      transformURL={url_transformer}
      options={options}
      rejectFormat={format_filter}
      cpn={cpn}
      player={player}
      actions={actions}
      storyboards={storyboards}
      captionTracks={caption_tracks}
    />
  );
}
