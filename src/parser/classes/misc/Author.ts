import Parser, { RawNode } from '../../index.js';
import Text from './Text.js';
import NavigationEndpoint from '../NavigationEndpoint.js';
import TextRun from './TextRun.js';
import Thumbnail from './Thumbnail.js';
import Constants from '../../../utils/Constants.js';
import { observe, ObservedArray, YTNode } from '../../helpers.js';

class Author {
  #nav_text;

  id: string;
  name: string;
  thumbnails: Thumbnail[];
  endpoint: NavigationEndpoint | null;
  badges: ObservedArray<YTNode>;
  is_moderator?: boolean | null;
  is_verified?: boolean | null;
  is_verified_artist?: boolean | null;
  url: string | null;

  constructor(item: RawNode, badges?: any, thumbs?: any, id?: string) {
    this.#nav_text = new Text(item);

    this.id =
      id ||
      (this.#nav_text?.runs?.[0] as TextRun)?.endpoint?.payload?.browseId ||
      this.#nav_text?.endpoint?.payload?.browseId || 'N/A';

    this.name = this.#nav_text?.text || 'N/A';
    this.thumbnails = thumbs ? Thumbnail.fromResponse(thumbs) : [];
    this.endpoint = ((this.#nav_text?.runs?.[0] as TextRun) as TextRun)?.endpoint || this.#nav_text?.endpoint || null;
    this.badges = Array.isArray(badges) ? Parser.parseArray(badges) : observe([] as YTNode[]);
    this.is_moderator = this.badges?.some((badge: any) => badge.icon_type == 'MODERATOR') || null;
    this.is_verified = this.badges?.some((badge: any) => badge.style == 'BADGE_STYLE_TYPE_VERIFIED') || null;
    this.is_verified_artist = this.badges?.some((badge: any) => badge.style == 'BADGE_STYLE_TYPE_VERIFIED_ARTIST') || null;

    this.url =
      (this.#nav_text?.runs?.[0] as TextRun)?.endpoint?.metadata?.api_url === '/browse' &&
        `${Constants.URLS.YT_BASE}${(this.#nav_text?.runs?.[0] as TextRun)?.endpoint?.payload?.canonicalBaseUrl || `/u/${(this.#nav_text?.runs?.[0] as TextRun)?.endpoint?.payload?.browseId}`}` ||
        `${Constants.URLS.YT_BASE}${this.#nav_text?.endpoint?.payload?.canonicalBaseUrl || `/u/${this.#nav_text?.endpoint?.payload?.browseId}`}` ||
        null;
  }

  get best_thumbnail(): Thumbnail | undefined {
    return this.thumbnails[0];
  }
}

export default Author;