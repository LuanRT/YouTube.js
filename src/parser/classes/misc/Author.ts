import Parser from '../../index';
import NavigatableText from './NavigatableText';
import NavigationEndpoint from '../NavigationEndpoint';
import TextRun from './TextRun';
import Thumbnail from './Thumbnail';
import Constants from '../../../utils/Constants';

class Author {
  #nav_text;

  id: string;
  name: string;
  thumbnails: Thumbnail[];
  endpoint: NavigationEndpoint | null;
  badges?: any;
  is_verified?: boolean | null;
  is_verified_artist?: boolean | null;
  url: string | null;

  constructor(item: any, badges?: any, thumbs?: any) {
    this.#nav_text = new NavigatableText(item);

    this.id =
      (this.#nav_text.runs?.[0] as TextRun)?.endpoint?.payload?.browseId ||
      this.#nav_text?.endpoint?.payload?.browseId || 'N/A';

    this.name = this.#nav_text.text || 'N/A';
    this.thumbnails = thumbs ? Thumbnail.fromResponse(thumbs) : [];
    this.endpoint = ((this.#nav_text.runs?.[0] as TextRun) as TextRun)?.endpoint || this.#nav_text.endpoint;
    this.badges = Array.isArray(badges) ? Parser.parseArray(badges) : [];
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