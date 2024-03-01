import * as Constants from '../../../utils/Constants.js';
import type { YTNode } from '../../helpers.js';
import { observe, type ObservedArray } from '../../helpers.js';
import { Parser, type RawNode } from '../../index.js';
import type NavigationEndpoint from '../NavigationEndpoint.js';
import Text from './Text.js';
import type TextRun from './TextRun.js';
import Thumbnail from './Thumbnail.js';

export default class Author {
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
    const nav_text = new Text(item);

    this.id = id || (nav_text?.runs?.[0] as TextRun)?.endpoint?.payload?.browseId || nav_text?.endpoint?.payload?.browseId || 'N/A';
    this.name = nav_text?.text || 'N/A';
    this.thumbnails = thumbs ? Thumbnail.fromResponse(thumbs) : [];
    this.endpoint = ((nav_text?.runs?.[0] as TextRun) as TextRun)?.endpoint || nav_text?.endpoint;

    if (badges) {
      if (Array.isArray(badges)) {
        this.badges = Parser.parseArray(badges);
        this.is_moderator = this.badges?.some((badge: any) => badge.icon_type == 'MODERATOR');
        this.is_verified = this.badges?.some((badge: any) => badge.style == 'BADGE_STYLE_TYPE_VERIFIED');
        this.is_verified_artist = this.badges?.some((badge: any) => badge.style == 'BADGE_STYLE_TYPE_VERIFIED_ARTIST');
      } else {
        this.badges = observe([] as YTNode[]);
        this.is_verified = !!badges.isVerified;
        this.is_verified_artist = !!badges.isArtist;
      }
    } else {
      this.badges = observe([] as YTNode[]);
    }

    // @TODO: Refactor this mess.
    this.url =
      (nav_text?.runs?.[0] as TextRun)?.endpoint?.metadata?.api_url === '/browse' &&
        `${Constants.URLS.YT_BASE}${(nav_text?.runs?.[0] as TextRun)?.endpoint?.payload?.canonicalBaseUrl || `/u/${(nav_text?.runs?.[0] as TextRun)?.endpoint?.payload?.browseId}`}` ||
        `${Constants.URLS.YT_BASE}${nav_text?.endpoint?.payload?.canonicalBaseUrl || `/u/${nav_text?.endpoint?.payload?.browseId}`}`;
  }

  get best_thumbnail(): Thumbnail | undefined {
    return this.thumbnails[0];
  }
}