import { YTNode } from '../helpers.js';

import type { RawNode } from '../types/index.js';

export default class ClipCreationScrubber extends YTNode {
  static type = 'ClipCreationScrubber';

  length_template: string;
  max_length_ms: number;
  min_length_ms: number;
  default_length_ms: number;
  window_size_ms: number;
  start_label?: string;
  end_label?: string;
  duration_label?: string;

  constructor(data: RawNode) {
    super();
    this.length_template = data.lengthTemplate;
    this.max_length_ms = data.maxLengthMs;
    this.min_length_ms = data.minLengthMs;
    this.default_length_ms = data.defaultLengthMs;
    this.window_size_ms = data.windowSizeMs;
    this.start_label = data.startAccessibility?.accessibilityData?.label;
    this.end_label = data.endAccessibility?.accessibilityData?.label;
    this.duration_label = data.durationAccessibility?.accessibilityData?.label;
  }
}