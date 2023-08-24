var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import * as DashUtils from "./DashUtils.ts";
import { getStreamingInfo } from "./StreamingInfo.ts";
import { InnertubeError } from "./Utils.ts";
async function OTFSegmentInfo({ info }) {
  if (!info.is_oft)
    return null;
  const template = await info.getSegmentTemplate();
  return /* @__PURE__ */ DashUtils.createElement("segment-template", {
    startNumber: "1",
    timescale: "1000",
    initialization: template.init_url,
    media: template.media_url
  }, /* @__PURE__ */ DashUtils.createElement("segment-timeline", null, template.timeline.map((segment_duration) => /* @__PURE__ */ DashUtils.createElement("s", {
    d: segment_duration.duration,
    r: segment_duration.repeat_count
  }))));
}
__name(OTFSegmentInfo, "OTFSegmentInfo");
function SegmentInfo({ info }) {
  if (info.is_oft) {
    return /* @__PURE__ */ DashUtils.createElement(OTFSegmentInfo, {
      info
    });
  }
  return /* @__PURE__ */ DashUtils.createElement(DashUtils.Fragment, null, /* @__PURE__ */ DashUtils.createElement("base-url", null, info.base_url), /* @__PURE__ */ DashUtils.createElement("segment-base", {
    indexRange: `${info.index_range.start}-${info.index_range.end}`
  }, /* @__PURE__ */ DashUtils.createElement("initialization", {
    range: `${info.init_range.start}-${info.init_range.end}`
  })));
}
__name(SegmentInfo, "SegmentInfo");
function DashManifest({
  streamingData,
  transformURL,
  rejectFormat,
  cpn,
  player,
  actions,
  storyboards
}) {
  const {
    duration,
    audio_sets,
    video_sets,
    image_sets
  } = getStreamingInfo(streamingData, transformURL, rejectFormat, cpn, player, actions, storyboards);
  return /* @__PURE__ */ DashUtils.createElement("mpd", {
    xmlns: "urn:mpeg:dash:schema:mpd:2011",
    minBufferTime: "PT1.500S",
    profiles: "urn:mpeg:dash:profile:isoff-main:2011",
    type: "static",
    mediaPresentationDuration: `PT${duration}S`,
    "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    "xsi:schemaLocation": "urn:mpeg:dash:schema:mpd:2011 http://standards.iso.org/ittf/PubliclyAvailableStandards/MPEG-DASH_schema_files/DASH-MPD.xsd"
  }, /* @__PURE__ */ DashUtils.createElement("period", null, audio_sets.map((set, index) => /* @__PURE__ */ DashUtils.createElement("adaptation-set", {
    id: index,
    mimeType: set.mime_type,
    startWithSAP: "1",
    subsegmentAlignment: "true",
    lang: set.language,
    codecs: set.codecs,
    audioSamplingRate: set.audio_sample_rate
  }, set.track_role && /* @__PURE__ */ DashUtils.createElement("role", {
    schemeIdUri: "urn:mpeg:dash:role:2011",
    value: set.track_role
  }), set.track_name && /* @__PURE__ */ DashUtils.createElement("label", {
    id: index
  }, set.track_name), set.channels && /* @__PURE__ */ DashUtils.createElement("audio-channel-configuration", {
    schemeIdUri: "urn:mpeg:dash:23003:3:audio_channel_configuration:2011",
    value: set.channels
  }), set.representations.map((rep) => /* @__PURE__ */ DashUtils.createElement("representation", {
    id: rep.uid,
    bandwidth: rep.bitrate,
    codecs: rep.codecs,
    audioSamplingRate: rep.audio_sample_rate
  }, rep.channels && /* @__PURE__ */ DashUtils.createElement("audio-channel-configuration", {
    schemeIdUri: "urn:mpeg:dash:23003:3:audio_channel_configuration:2011",
    value: rep.channels
  }), /* @__PURE__ */ DashUtils.createElement(SegmentInfo, {
    info: rep.segment_info
  }))))), video_sets.map((set, index) => /* @__PURE__ */ DashUtils.createElement("adaptation-set", {
    id: index + audio_sets.length,
    mimeType: set.mime_type,
    startWithSAP: "1",
    subsegmentAlignment: "true",
    codecs: set.codecs,
    maxPlayoutRate: "1",
    frameRate: set.fps
  }, set.color_info.primaries && /* @__PURE__ */ DashUtils.createElement("essential-property", {
    schemeIdUri: "urn:mpeg:mpegB:cicp:ColourPrimaries",
    value: set.color_info.primaries
  }), set.color_info.transfer_characteristics && /* @__PURE__ */ DashUtils.createElement("essential-property", {
    schemeIdUri: "urn:mpeg:mpegB:cicp:TransferCharacteristics",
    value: set.color_info.transfer_characteristics
  }), set.color_info.matrix_coefficients && /* @__PURE__ */ DashUtils.createElement("essential-property", {
    schemeIdUri: "urn:mpeg:mpegB:cicp:MatrixCoefficients",
    value: set.color_info.matrix_coefficients
  }), set.representations.map((rep) => /* @__PURE__ */ DashUtils.createElement("representation", {
    id: rep.uid,
    bandwidth: rep.bitrate,
    width: rep.width,
    height: rep.height,
    codecs: rep.codecs,
    frameRate: rep.fps
  }, /* @__PURE__ */ DashUtils.createElement(SegmentInfo, {
    info: rep.segment_info
  }))))), image_sets.map(async (set, index) => {
    return /* @__PURE__ */ DashUtils.createElement("adaptation-set", {
      id: index + audio_sets.length + video_sets.length,
      mimeType: await set.getMimeType(),
      contentType: "image"
    }, set.representations.map(async (rep) => /* @__PURE__ */ DashUtils.createElement("representation", {
      id: `thumbnails_${rep.thumbnail_width}x${rep.thumbnail_height}`,
      bandwidth: await rep.getBitrate(),
      width: rep.sheet_width,
      height: rep.sheet_height
    }, /* @__PURE__ */ DashUtils.createElement("essential-property", {
      schemeIdUri: "http://dashif.org/thumbnail_tile",
      value: `${rep.columns}x${rep.rows}`
    }), /* @__PURE__ */ DashUtils.createElement("segment-template", {
      media: rep.template_url,
      duration: rep.template_duration,
      startNumber: "0"
    }))));
  })));
}
__name(DashManifest, "DashManifest");
function toDash(streaming_data, url_transformer = (url) => url, format_filter, cpn, player, actions, storyboards) {
  if (!streaming_data)
    throw new InnertubeError("Streaming data not available");
  return DashUtils.renderToString(
    /* @__PURE__ */ DashUtils.createElement(DashManifest, {
      streamingData: streaming_data,
      transformURL: url_transformer,
      rejectFormat: format_filter,
      cpn,
      player,
      actions,
      storyboards
    })
  );
}
__name(toDash, "toDash");
export {
  toDash
};
