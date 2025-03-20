import type { RawNode } from '../../types/index.ts';

export default class AccessibilityContext {
  public label: string;

  constructor(data: RawNode) {
    this.label = data.label;
  }
} 