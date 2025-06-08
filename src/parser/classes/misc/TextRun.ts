import NavigationEndpoint from '../NavigationEndpoint.js';
import { escape, type Run } from './Text.js';
import type { RawNode } from '../../index.js';

export default class TextRun implements Run {
  public text: string;
  public text_color?: number;
  public endpoint?: NavigationEndpoint;
  public bold: boolean;
  public bracket: boolean;
  public dark_mode_text_color?: number;
  public deemphasize: boolean;
  public italics: boolean;
  public strikethrough: boolean;
  public error_underline: boolean;
  public underline: boolean;
  public font_face?:
    | 'FONT_FACE_UNKNOWN'
    | 'FONT_FACE_YT_SANS_MEDIUM'
    | 'FONT_FACE_ROBOTO_MEDIUM'
    | 'FONT_FACE_YOUTUBE_SANS_LIGHT'
    | 'FONT_FACE_YOUTUBE_SANS_REGULAR'
    | 'FONT_FACE_YOUTUBE_SANS_MEDIUM'
    | 'FONT_FACE_YOUTUBE_SANS_SEMIBOLD'
    | 'FONT_FACE_YOUTUBE_SANS_BOLD'
    | 'FONT_FACE_YOUTUBE_SANS_EXTRABOLD'
    | 'FONT_FACE_YOUTUBE_SANS_BLACK'
    | 'FONT_FACE_YT_SANS_BOLD'
    | 'FONT_FACE_ROBOTO_REGULAR';
  public attachment;

  constructor(data: RawNode) {
    this.text = data.text;
    this.bold = Boolean(data.bold);
    this.bracket = Boolean(data.bracket);
    this.italics = Boolean(data.italics);
    this.strikethrough = Boolean(data.strikethrough);
    this.error_underline = Boolean(data.error_underline);
    this.underline = Boolean(data.underline);
    this.deemphasize = Boolean(data.deemphasize);

    if ('textColor' in data) {
      this.text_color = data.textColor;
    }
    
    if ('navigationEndpoint' in data) {
      this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    }

    if ('darkModeTextColor' in data) {
      this.dark_mode_text_color = data.darkModeTextColor;
    }
    
    if ('fontFace' in data) {
      this.font_face = data.fontFace;
    }

    this.attachment = data.attachment;
  }

  toString(): string {
    return this.text;
  }

  toHTML(): string {
    const tags: string[] = [];

    if (this.bold) tags.push('b');
    if (this.italics) tags.push('i');
    if (this.strikethrough) tags.push('s');
    if (this.deemphasize) tags.push('small');
    if (this.underline) tags.push('u');
    if (this.error_underline) tags.push('u');

    if (!this.text?.length)
      return '';

    const escaped_text = escape(this.text);
    const styled_text = tags.map((tag) => `<${tag}>`).join('') + escaped_text + tags.map((tag) => `</${tag}>`).join('');
    const wrapped_text = `<span style="white-space: pre-wrap;">${styled_text}</span>`;

    if (this.attachment) {
      if (this.attachment.element.type.imageType.image.sources.length) {
        if (this.endpoint) {
          const { url } = this.attachment.element.type.imageType.image.sources[0];

          let image_el = '';

          if (url) {
            image_el = `<img src="${url}" style="vertical-align: middle; height: ${this.attachment.element.properties.layoutProperties.height.value}px; width: ${this.attachment.element.properties.layoutProperties.width.value}px;" alt="">`;
          }

          const nav_url = this.endpoint.toURL();
          if (nav_url) return `<a href="${nav_url}" class="yt-ch-link">${image_el}${wrapped_text}</a>`;
        }
      }
    }

    if (this.endpoint) {
      const url = this.endpoint.toURL();
      if (url) return `<a href="${url}">${wrapped_text}</a>`;
    }

    return wrapped_text;
  }
}