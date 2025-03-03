import type { RawNode } from '../../types/index.js';
import NavigationEndpoint from '../NavigationEndpoint.js';

export default class CommandContext {
  public on_focus?: NavigationEndpoint;
  public on_hidden?: NavigationEndpoint;
  public on_touch_end?: NavigationEndpoint;
  public on_touch_move?: NavigationEndpoint;
  public on_long_press?: NavigationEndpoint;
  public on_tap?: NavigationEndpoint;
  public on_touch_start?: NavigationEndpoint;
  public on_visible?: NavigationEndpoint;
  public on_first_visible?: NavigationEndpoint;
  public on_hover?: NavigationEndpoint;
  
  constructor(data: RawNode) {
    if ('onFocus' in data)
      this.on_focus = new NavigationEndpoint(data.onFocus);
    
    if ('onHidden' in data)
      this.on_hidden = new NavigationEndpoint(data.onHidden);
    
    if ('onTouchEnd' in data)
      this.on_touch_end = new NavigationEndpoint(data.onTouchEnd);
    
    if ('onTouchMove' in data)
      this.on_touch_move = new NavigationEndpoint(data.onTouchMove);
    
    if ('onLongPress' in data)
      this.on_long_press = new NavigationEndpoint(data.onLongPress);
    
    if ('onTap' in data)
      this.on_tap = new NavigationEndpoint(data.onTap);
    
    if ('onTouchStart' in data)
      this.on_touch_start = new NavigationEndpoint(data.onTouchStart);
    
    if ('onVisible' in data)
      this.on_visible = new NavigationEndpoint(data.onVisible);
    
    if ('onFirstVisible' in data)
      this.on_first_visible = new NavigationEndpoint(data.onFirstVisible);
    
    if ('onHover' in data)
      this.on_hover = new NavigationEndpoint(data.onHover);
  }
}