import Thumbnail from './Thumbnail';

class EmojiRun {
  text: string;
  emoji: {
    emoji_id: string;
    shortcuts: string[];
    search_terms: string[];
    image: Thumbnail[];
  };

  constructor(data: any) {
    this.text =
      data.emoji?.emojiId ||
      data.emoji?.shortcuts?.[0] ||
      '';

    this.emoji = {
      emoji_id: data.emoji.emojiId,
      shortcuts: data.emoji.shortcuts,
      search_terms: data.emoji.searchTerms,
      image: Thumbnail.fromResponse(data.emoji.image)
    };
  }
}

export default EmojiRun;