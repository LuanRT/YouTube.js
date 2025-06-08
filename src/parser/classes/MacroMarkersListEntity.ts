import { YTNode, type ObservedArray, observe } from '../helpers.js';
import type { RawNode } from '../index.js';
import HeatMarker from './HeatMarker.js';
import TimedMarkerDecoration from './TimedMarkerDecoration.js';
import Heatmap from './Heatmap.js';
import * as Parser from '../parser.js';

/**
 * Represents a list of markers for a video. Can contain different types of markers:
 * - MARKER_TYPE_HEATMAP: Heat map markers showing audience engagement data
 * - Other marker types may exist but are not currently handled
 */
export default class MacroMarkersListEntity extends YTNode {
  static type = 'MacroMarkersListEntity';

  marker_entity_key: string;
  external_video_id: string;
  /** The type of markers in this entity (e.g., 'MARKER_TYPE_HEATMAP') */
  marker_type: string;
  markers: ObservedArray<HeatMarker>;
  max_height_dp: number;
  min_height_dp: number;
  show_hide_animation_duration_millis: number;
  timed_marker_decorations: ObservedArray<TimedMarkerDecoration>;

  // Store raw API data for use in toHeatmap
  private raw_api_markers: RawNode[];
  private raw_api_decorations: RawNode[];

  constructor(data: RawNode) {
    super();
    this.marker_entity_key = data.key;
    this.external_video_id = data.externalVideoId;
    this.marker_type = data.markersList?.markerType || '';

    // Store raw API data
    this.raw_api_markers = data.markersList?.markers || [];
    this.raw_api_decorations = data.markersList?.markersDecoration?.timedMarkerDecorations || [];

    // Parse markers array using the updated HeatMarker constructor
    this.markers = observe(
      this.raw_api_markers.map((marker: RawNode) => new HeatMarker(marker))
    );

    // Extract metadata
    const heatmapMetadata = data.markersList?.markersMetadata?.heatmapMetadata;
    this.max_height_dp = heatmapMetadata?.maxHeightDp || 40;
    this.min_height_dp = heatmapMetadata?.minHeightDp || 4;
    this.show_hide_animation_duration_millis =
      heatmapMetadata?.showHideAnimationDurationMillis || 200;

    // Parse timed marker decorations
    // Assuming TimedMarkerDecoration constructor handles raw API decoration objects correctly
    this.timed_marker_decorations = observe(
      this.raw_api_decorations.map(
        (decoration: RawNode) => new TimedMarkerDecoration(decoration)
      )
    );
  }

  /**
  * Checks if this MacroMarkersListEntity represents heatmap data.
  * Only heatmap markers can be converted to Heatmap objects.
  */
  isHeatmap(): boolean {
    return this.marker_type === 'MARKER_TYPE_HEATMAP';
  }

  /**
  * Converts this MacroMarkersListEntity to a Heatmap object
  * for compatibility with existing code. Only works for heatmap markers.
  * @returns Heatmap object if this entity contains heatmap data, null otherwise
  */
  toHeatmap(): Heatmap | null {
    if (!this.isHeatmap()) {
      return null;
    }

    const wrappedHeatMarkers = this.raw_api_markers.map((marker) => ({ HeatMarker: marker }));
    const wrappedDecorations = this.raw_api_decorations.map((decoration) => ({ TimedMarkerDecoration: decoration }));

    const heatmapRawPayload = {
      maxHeightDp: this.max_height_dp,
      minHeightDp: this.min_height_dp,
      showHideAnimationDurationMillis: this.show_hide_animation_duration_millis,
      heatMarkers: wrappedHeatMarkers,
      heatMarkersDecorations: wrappedDecorations
    };

    return Parser.parseItem({ Heatmap: heatmapRawPayload }, Heatmap);
  }
}
