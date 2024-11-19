import { YTNode } from '../helpers.js';
import { type RawNode } from '../index.js';
import { Text, Thumbnail } from '../misc.js';
import NavigationEndpoint from './NavigationEndpoint.js';

export type Option = {
  title: Text;
  subtitle: Text;
  leading_image: Thumbnail;
  value: {
    privacy_status_value?: string;
  };
  on_tap: NavigationEndpoint;
  is_selected: boolean;
};

export default class DropdownView extends YTNode {
  static type = 'DropdownView';

  public label: Text;
  public placeholder_text: Text;
  public disabled: boolean;
  public options?: Option[];
  public dropdown_type: string;
  public id: string;

  constructor(data: RawNode) {
    super();
    this.label = new Text(data.label);
    this.placeholder_text = new Text(data.placeholderText);
    this.disabled = !!data.disabled;
    this.dropdown_type = data.type;
    this.id = data.id;

    if (Reflect.has(data, 'options')) {
      this.options = data.options.map((option: RawNode) => ({
        title: new Text(option.title),
        subtitle: new Text(option.subtitle),
        leading_image: Thumbnail.fromResponse(option.leadingImage),
        value: { privacy_status_value: option.value?.privacyStatusValue },
        on_tap: new NavigationEndpoint(option.onTap),
        is_selected: !!option.isSelected
      }));
    }
  }
}