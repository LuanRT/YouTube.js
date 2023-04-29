import Constants from '../../../utils/Constants.ts';
import type { YTNode} from '../../helpers.ts';
import { observe, type ObservedArray } from '../../helpers.ts';
import Parser, { type RawNode } from '../../index.ts';
import type NavigationEndpoint from '../NavigationEndpoint.ts';
import Text from './Text.ts';
import type TextRun from './TextRun.ts';
import Thumbnail from './Thumbnail.ts';

export default class Author {
  #nav_text;

  id: string;
  name: string;
  thumbnails: Thumbnail[];
  endpoint?: NavigationEndpoint;
  badges: ObservedArray<YTNode>;
  is_moderator?: boolean;
  is_verified?: boolean;
  is_verified_artist?: boolean;
  url: string;

  constructor(item: RawNode, badges?: any, thumbs?: any, id?: string) {
    this.#nav_text = new Text(item);

    this.id = id || (this.#nav_text?.runs?.[0] as TextRun)?.endpoint?.payload?.browseId || this.#nav_text?.endpoint?.payload?.browseId || 'N/A';
    this.name = this.#nav_text?.text || 'N/A';
    this.thumbnails = thumbs ? Thumbnail.fromResponse(thumbs) : [];
    this.endpoint = ((this.#nav_text?.runs?.[0] as TextRun) as TextRun)?.endpoint || this.#nav_text?.endpoint;
    this.badges = Array.isArray(badges) ? Parser.parseArray(badges) : observe([] as YTNode[]);
    this.is_moderator = this.badges?.some((badge: any) => badge.icon_type == 'MODERATOR');
    this.is_verified = this.badges?.some((badge: any) => badge.style == 'BADGE_STYLE_TYPE_VERIFIED');
    this.is_verified_artist = this.badges?.some((badge: any) => badge.style == 'BADGE_STYLE_TYPE_VERIFIED_ARTIST');

    // @TODO: Refactor this mess.
    this.url =
      (this.#nav_text?.runs?.[0] as TextRun)?.endpoint?.metadata?.api_url === '/browse' &&
        `${Constants.URLS.YT_BASE}${(this.#nav_text?.runs?.[0] as TextRun)?.endpoint?.payload?.canonicalBaseUrl || `/u/${(this.#nav_text?.runs?.[0] as TextRun)?.endpoint?.payload?.browseId}`}` ||
        `${Constants.URLS.YT_BASE}${this.#nav_text?.endpoint?.payload?.canonicalBaseUrl || `/u/${this.#nav_text?.endpoint?.payload?.browseId}`}`;
  }

  get best_thumbnail(): Thumbnail | undefined {
    return this.thumbnails[0];
  }
}