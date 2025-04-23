import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import AccessibilityData, { type AccessibilitySupportedDatas } from './misc/AccessibilityData.ts';

export default class MusicInlineBadge extends YTNode {
  static type = 'MusicInlineBadge';

  public icon_type: string;
  public accessibility?: AccessibilitySupportedDatas;

  constructor(data: RawNode) {
    super();
    this.icon_type = data.icon.iconType;
    
    if ('accessibilityData' in data
      && 'accessibilityData' in data.accessibilityData) {
      this.accessibility = {
        accessibility_data: new AccessibilityData(data.accessibilityData.accessibilityData)
      };
    }
  }
  
  get label(): string | undefined {
    return this.accessibility?.accessibility_data?.label;
  }
}