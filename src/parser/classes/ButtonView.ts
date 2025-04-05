import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Thumbnail from './misc/Thumbnail.js';

export default class ButtonView extends YTNode {
  static type = 'ButtonView';

  public secondary_icon_image?: Thumbnail[];
  public icon_name?: string;
  public enable_icon_button?: boolean;
  public tooltip?: string;
  public icon_image_flip_for_rtl?: boolean;
  public button_size?: 'BUTTON_VIEW_MODEL_SIZE_UNKNOWN' | 'BUTTON_VIEW_MODEL_SIZE_DEFAULT' | 'BUTTON_VIEW_MODEL_SIZE_COMPACT' | 'BUTTON_VIEW_MODEL_SIZE_XSMALL' | 'BUTTON_VIEW_MODEL_SIZE_LARGE' | 'BUTTON_VIEW_MODEL_SIZE_XLARGE' | 'BUTTON_VIEW_MODEL_SIZE_XXLARGE';
  public icon_position?: 'BUTTON_VIEW_MODEL_ICON_POSITION_UNKNOWN' | 'BUTTON_VIEW_MODEL_ICON_POSITION_TRAILING' | 'BUTTON_VIEW_MODEL_ICON_POSITION_LEADING' | 'BUTTON_VIEW_MODEL_ICON_POSITION_ABOVE' | 'BUTTON_VIEW_MODEL_ICON_POSITION_LEADING_TRAILING';
  public is_full_width?: boolean;
  public state?: 'BUTTON_VIEW_MODEL_STATE_UNKNOWN' | 'BUTTON_VIEW_MODEL_STATE_ACTIVE' | 'BUTTON_VIEW_MODEL_STATE_INACTIVE' | 'BUTTON_VIEW_MODEL_STATE_DISABLED';
  public on_disabled_tap?: NavigationEndpoint;
  public custom_border_color?: number;
  public on_tap?: NavigationEndpoint;
  public style?: 'BUTTON_VIEW_MODEL_STYLE_UNKNOWN' | 'BUTTON_VIEW_MODEL_STYLE_CTA' | 'BUTTON_VIEW_MODEL_STYLE_BRAND' | 'BUTTON_VIEW_MODEL_STYLE_ADS_CTA' | 'BUTTON_VIEW_MODEL_STYLE_OVERLAY' | 'BUTTON_VIEW_MODEL_STYLE_CTA_THEMED' | 'BUTTON_VIEW_MODEL_STYLE_BLACK_CTA' | 'BUTTON_VIEW_MODEL_STYLE_CUSTOM' | 'BUTTON_VIEW_MODEL_STYLE_MONO' | 'BUTTON_VIEW_MODEL_STYLE_OVERLAY_DARK' | 'BUTTON_VIEW_MODEL_STYLE_CTA_OVERLAY' | 'BUTTON_VIEW_MODEL_STYLE_BRAND_AI' | 'BUTTON_VIEW_MODEL_STYLE_YT_GRADIENT' | 'BUTTON_VIEW_MODEL_STYLE_BRAND_GRADIENT';
  public icon_image?: object;
  public custom_dark_theme_border_color?: number;
  public title?: string;
  public target_id?: string;
  public enable_full_width_margins?: boolean;
  public custom_font_color?: number;
  public button_type?: 'BUTTON_VIEW_MODEL_TYPE_UNKNOWN' | 'BUTTON_VIEW_MODEL_TYPE_FILLED' | 'BUTTON_VIEW_MODEL_TYPE_OUTLINE' | 'BUTTON_VIEW_MODEL_TYPE_TEXT' | 'BUTTON_VIEW_MODEL_TYPE_TONAL';
  public enabled?: boolean;
  public accessibility_id?: string;
  public custom_background_color?: number;
  public on_long_press?: NavigationEndpoint;
  public title_formatted?: object;
  public on_visible?: object;
  public icon_trailing?: boolean;
  public accessibility_text?: string;

  constructor(data: RawNode) {
    super();
    if ('secondaryIconImage' in data)
      this.secondary_icon_image = Thumbnail.fromResponse(data.secondaryIconImage);

    if ('iconName' in data)
      this.icon_name = data.iconName;
    
    if ('enableIconButton' in data)
      this.enable_icon_button = data.enableIconButton;
    
    if ('tooltip' in data)
      this.tooltip = data.tooltip;
    
    if ('iconImageFlipForRtl' in data)
      this.icon_image_flip_for_rtl = data.iconImageFlipForRtl;
    
    if ('buttonSize' in data)
      this.button_size = data.buttonSize;
    
    if ('iconPosition' in data)
      this.icon_position = data.iconPosition;
    
    if ('isFullWidth' in data)
      this.is_full_width = data.isFullWidth;
    
    if ('state' in data)
      this.state = data.state;
    
    if ('onDisabledTap' in data)
      this.on_disabled_tap = new NavigationEndpoint(data.onDisabledTap);
    
    if ('customBorderColor' in data)
      this.custom_border_color = data.customBorderColor;
    
    if ('onTap' in data)
      this.on_tap = new NavigationEndpoint(data.onTap);
    
    if ('style' in data)
      this.style = data.style;
    
    if ('iconImage' in data)
      this.icon_image = data.iconImage;
    
    if ('customDarkThemeBorderColor' in data)
      this.custom_dark_theme_border_color = data.customDarkThemeBorderColor;
    
    if ('title' in data)
      this.title = data.title;
    
    if ('targetId' in data)
      this.target_id = data.targetId;
    
    if ('enableFullWidthMargins' in data)
      this.enable_full_width_margins = data.enableFullWidthMargins;
    
    if ('customFontColor' in data)
      this.custom_font_color = data.customFontColor;
    
    if ('type' in data)
      this.button_type = data.type;
    
    if ('enabled' in data)
      this.enabled = data.enabled;
    
    if ('accessibilityId' in data)
      this.accessibility_id = data.accessibilityId;
    
    if ('customBackgroundColor' in data)
      this.custom_background_color = data.customBackgroundColor;
    
    if ('onLongPress' in data)
      this.on_long_press = new NavigationEndpoint(data.onLongPress);
    
    if ('titleFormatted' in data)
      this.title_formatted = data.titleFormatted;
    
    if ('onVisible' in data)
      this.on_visible = data.onVisible;
    
    if ('iconTrailing' in data)
      this.icon_trailing = data.iconTrailing;
    
    if ('accessibilityText' in data)
      this.accessibility_text = data.accessibilityText;
  }
}