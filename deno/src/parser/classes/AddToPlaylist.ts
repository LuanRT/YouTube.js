import { type ObservedArray, YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import Button from './Button.ts';
import MenuTitle from './MenuTitle.ts';
import PlaylistAddToOption from './PlaylistAddToOption.ts';

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