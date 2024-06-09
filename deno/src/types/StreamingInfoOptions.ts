export interface StreamingInfoOptions {
  /**
   * The label to use for the non-DRC streams when a video has DRC and streams.
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
  label_drc_mutiple?: (audio_track_display_name: string) => string;
}