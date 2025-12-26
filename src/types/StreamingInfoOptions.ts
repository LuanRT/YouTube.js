export interface StreamingInfoOptions {
  /**
   * The format to use for the captions, when the video has captions.
   * If this option is not set, the DASH manifest will not include the captions.
   *
   * Possible values:
   * * `vtt`: Tells YouTube to return the captions in the WebVTT format
   * * `ttml`: Tells YouTube to return the captions in the TTML format
   */
  captions_format?: 'vtt' | 'ttml';
  /**
   * The label to use for the non-DRC/VB streams when a video has DRC and Voice Boost streams.
   *
   * Defaults to `"Original"`
   */
  label_original?: string;
  /**
   * The label to use for the DRC streams when a video has DRC streams.
   *
   * Defaults to `"Stable Volume"`
   */
  label_drc?: string;
  /**
   * A function that generates the label to use for the DRC streams when a video has multiple audio tracks and DRC streams.
   * The non-DRC streams use the unmodified audio track label provided by YouTube.
   *
   * Defaults to `(audio_track_display_name) => audio_track_display_name + " (Stable Volume)"`
   */
  label_drc_multiple?: (audio_track_display_name: string) => string;
  /**
   * The label to use for the VB (Voice Boost) streams when a video has VB streams.
   *
   * Defaults to `"Voice Boost"`
   */
  label_vb?: string;
  /**
   * A function that generates the label to use for the Voice Boost streams when a video has multiple audio tracks and Voice Boost streams.
   * The non-Voice Boost streams use the unmodified audio track label provided by YouTube.
   *
   * Defaults to `(audio_track_display_name) => audio_track_display_name + " (Voice Boost)"`
   */
  label_vb_multiple?: (audio_track_display_name: string) => string;
  /**
   * If `true`, the generated manifest will contain URLs that are suitable for use with the SABR protocol.
   */
  is_sabr?: boolean;
}