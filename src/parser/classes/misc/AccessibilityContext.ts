import type { RawNode } from '../../types/index.js';

export default class AccessibilityContext {
  public label: string;

  constructor(data: RawNode) {
    this.label = data.label;
  }
} 