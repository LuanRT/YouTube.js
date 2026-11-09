import type NavigationEndpoint from '../NavigationEndpoint.js';
import { observe, type ObservedArray, type YTNode } from '../../helpers.js';
import { Parser, type RawNode } from '../../index.js';
import Text, { type AttributedText } from './Text.js';
import Thumbnail from './Thumbnail.js';
import type TextRun from './TextRun.js';
import ShowDialogCommand from '../commands/ShowDialogCommand.js';
import DialogView from '../DialogView.js';
import ListView from '../ListView.js';
import ListItemView from '../ListItemView.js';

export default class Author {
  public id: string;
  public name: string;
  public thumbnails: Thumbnail[];
  public endpoint?: NavigationEndpoint;
  public badges: ObservedArray<YTNode>;
  public avatar_thumbnail_url?: string;
  public is_current_user?: boolean;
  public is_public_subscriber?: boolean;
  public is_creator?: boolean;
  public is_moderator?: boolean;
  public is_verified?: boolean;
  public is_verified_artist?: boolean;

  constructor(item: RawNode, badges?: any, thumbs?: any, id?: string) {
    let nav_text: Text | undefined;

    if (item) {
      if ('content' in item) {
        nav_text = Text.fromAttributed(item as AttributedText);
      } else {
        nav_text = new Text(item);
      }
    }

    this.id = id || (nav_text?.runs?.[0] as TextRun)?.endpoint?.payload?.browseId || nav_text?.endpoint?.payload?.browseId || badges?.channelId;
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

        if ('avatarThumbnailUrl' in badges) {
          this.avatar_thumbnail_url = badges.avatarThumbnailUrl;
        }

        if ('isCurrentUser' in badges) {
          this.is_current_user = !!badges.isCurrentUser;
        }

        if ('isPublicSubscriber' in badges) {
          this.is_public_subscriber = !!badges.isPublicSubscriber;
        }

        if ('isCreator' in badges) {
          this.is_creator = !!badges.isCreator;
        }

        if ('isVerified' in badges) {
          this.is_verified = !!badges.isVerified;
        }

        if ('isArtist' in badges) {
          this.is_verified_artist = !!badges.isArtist;
        }
      }
    } else {
      this.badges = observe([] as YTNode[]);
    }
  }

  get url(): string | undefined {
    return this.endpoint?.toURL();
  }

  get best_thumbnail(): Thumbnail | undefined {
    return this.thumbnails[0];
  }

  get collaborators(): ListItemView[] {
    if (this.endpoint?.command?.is(ShowDialogCommand) && this.endpoint.command.inline_content?.is(DialogView)) {
      const dialog = this.endpoint.command.inline_content;

      if (dialog.custom_content?.is(ListView)) {
        return dialog.custom_content.items.as(ListItemView)
          .filter((item) => item.renderer_context?.command_context?.on_tap?.metadata?.page_type === 'WEB_PAGE_TYPE_CHANNEL');
      }
    }

    return [];
  }
}