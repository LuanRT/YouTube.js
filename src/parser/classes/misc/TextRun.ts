import NavigationEndpoint from '../NavigationEndpoint';

class TextRun {
  text: string;
  endpoint: NavigationEndpoint | undefined;

  constructor(data: any) {
    this.text = data.text;
    this.endpoint = data.navigationEndpoint ? new NavigationEndpoint(data.navigationEndpoint) : undefined;
  }
}

export default TextRun;