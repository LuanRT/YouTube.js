import { type ObservedArray, YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import Button from './Button.js';
import MenuTitle from './MenuTitle.js';
import PlaylistAddToOption from './PlaylistAddToOption.js';

export default class AddToPlaylist extends YTNode {
  static type = 'AddToPlaylist';

  public actions: ObservedArray<MenuTitle | Button>;
  public playlists: ObservedArray<PlaylistAddToOption>;

  constructor(data: RawNode) {
    super();
    this.actions = Parser.parseArray(data.actions, [ MenuTitle, Button ]);
    this.playlists = Parser.parseArray(data.playlists, PlaylistAddToOption);
  }
}