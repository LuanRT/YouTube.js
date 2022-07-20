import NavigationEndpoint from '../NavigationEndpoint';

class TextRun {
  constructor(data) {
    this.text = data.text;
    this.endpoint = data.navigationEndpoint ? new NavigationEndpoint(data.navigationEndpoint) : undefined;
  }
}
export default TextRun;
