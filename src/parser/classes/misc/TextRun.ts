import NavigationEndpoint from '../NavigationEndpoint.js';
import { escape, type Run } from './Text.js';
import type { RawNode } from '../../index.js';

export default class TextRun implements Run {
  text: string;
  endpoint?: NavigationEndpoint;
  bold: boolean;
  italics: boolean;
  strikethrough: boolean;
  attachment;

  constructor(data: RawNode) {
    this.text = data.text;
    this.bold = Boolean(data.bold);
    this.italics = Boolean(data.italics);
    this.strikethrough = Boolean(data.strikethrough);

    if (Reflect.has(data, 'navigationEndpoint')) {
      this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
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

    const escaped_text = escape(this.text);
    const styled_text = tags.map((tag) => `<${tag}>`).join('') + escaped_text + tags.map((tag) => `</${tag}>`).join('');
    const wrapped_text = `<span style="white-space: pre-wrap;">${styled_text}</span>`;

    if (this.attachment) {
      if (this.attachment.element.type.imageType.image.sources.length) {
        const { url } = this.attachment.element.type.imageType.image.sources[0];
        if (this.endpoint) {
          const nav_url = this.endpoint.toURL();
          if (nav_url) return `<a href="${nav_url}" class="yt-ch-link" display: block; width: fit-content; font-size: small;><img src="${url}" style="vertical-align: middle; height: ${this.attachment.element.properties.layoutProperties.height.value}px; width: ${this.attachment.element.properties.layoutProperties.width.value}px;">${wrapped_text}</a>`;
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