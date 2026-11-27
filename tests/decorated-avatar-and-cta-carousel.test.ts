import { describe, expect, test } from 'vitest';

import { Parser, YTNodes } from '../dist/src/platform/node.js';

const channel_command = {
  commandContext: {
    onTap: {
      innertubeCommand: {
        commandMetadata: { webCommandMetadata: { url: '/channel/UCL64gn1KZ1C-u87BGQv3b6w', webPageType: 'WEB_PAGE_TYPE_CHANNEL' } },
        browseEndpoint: { browseId: 'UCL64gn1KZ1C-u87BGQv3b6w' }
      }
    }
  }
};

const decorated_avatar = {
  decoratedAvatarViewModel: {
    avatar: {
      avatarViewModel: {
        image: { sources: [ { url: 'https://yt3.ggpht.com/example=s88-c-k-c0x00ffffff-no-rj', width: 68, height: 68 } ] },
        avatarImageSize: 'AVATAR_SIZE_XS'
      }
    },
    a11yLabel: 'Acessar o canal Jorge & Mateus Oficial',
    rendererContext: channel_command
  }
};

describe('DecoratedAvatarView', () => {
  test('is accepted in AvatarStackView', () => {
    // Channel row of a video lockup in the search results.
    const stack = Parser.parseItem({
      avatarStackViewModel: {
        avatars: [ decorated_avatar ],
        text: { content: 'Jorge & Mateus Oficial', commandRuns: [ { startIndex: 0, length: 22, onTap: channel_command.commandContext.onTap } ] },
        rendererContext: {}
      }
    }, YTNodes.AvatarStackView);

    expect(stack?.avatars).toHaveLength(1);
    expect(stack?.avatars[0]).toBeInstanceOf(YTNodes.DecoratedAvatarView);
    expect((stack?.avatars[0] as YTNodes.DecoratedAvatarView).avatar?.image[0].url).toContain('yt3.ggpht.com');
  });

  test('is accepted as the content image of a LockupView', () => {
    const lockup = Parser.parseItem({
      lockupViewModel: {
        contentImage: decorated_avatar,
        contentId: 'UCL64gn1KZ1C-u87BGQv3b6w',
        contentType: 'LOCKUP_CONTENT_TYPE_CHANNEL',
        rendererContext: {}
      }
    }, YTNodes.LockupView);

    expect(lockup?.content_image).toBeInstanceOf(YTNodes.DecoratedAvatarView);
  });
});

describe('CtaCarouselItemView', () => {
  test('is accepted in CarouselItemView', () => {
    const item = Parser.parseItem({
      carouselItemViewModel: {
        itemType: 'VIDEO_METADATA_CAROUSEL_PAGINATION_ITEM_TYPE_CTA',
        carouselItem: {
          ctaCarouselItemViewModel: {
            textCarousel: {
              textCarouselItemViewModel: {
                iconName: 'INFO',
                text: { content: 'Learn more' },
                onTap: {}
              }
            }
          }
        }
      }
    }, YTNodes.CarouselItemView);

    expect(item?.carousel_item).toBeInstanceOf(YTNodes.CtaCarouselItemView);
    expect((item?.carousel_item as YTNodes.CtaCarouselItemView).text_carousel?.text.toString()).toBe('Learn more');
  });
});
