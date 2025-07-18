import { type RawNode } from '../index.ts';
import { YTNode } from '../helpers.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';

export default class ToggleFormField extends YTNode {
  static type = 'ToggleFormField';

  public label: Text;
  public toggled: boolean;
  public toggle_on_action?: NavigationEndpoint;
  public toggle_off_action?: NavigationEndpoint;

  constructor(data: RawNode) {
    super();
    this.label = new Text(data.label);
    this.toggled = data.toggled;

    if ('toggleOnAction' in data)
      this.toggle_on_action = new NavigationEndpoint(data.toggleOnAction);

    if ('toggleOffAction' in data)
      this.toggle_off_action = new NavigationEndpoint(data.toggleOffAction);
  }
}