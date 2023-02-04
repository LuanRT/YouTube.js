import NavigationEndpoint from '../NavigationEndpoint.js';

class TextRun {
  text: string;
  endpoint: NavigationEndpoint | undefined;
  bold: boolean;
  italics: boolean;
  strikethrough: boolean;

  constructor(data: any) {
    this.text = data.text;
    this.bold = Boolean(data.bold);
    this.italics = Boolean(data.italics);
    this.strikethrough = Boolean(data.strikethrough);
    this.endpoint = data.navigationEndpoint ? new NavigationEndpoint(data.navigationEndpoint) : undefined;
  }
}

export default TextRun;