import { Innertube, UniversalCache } from 'youtubei.js';

(async () => {
  const yt = await Innertube.create({ cache: new UniversalCache() });

  const comment_section = await yt.getComments('a-rqu-hjobc');

  console.info(`This video has ${comment_section.header?.comments_count.toString() || 'N/A'} comments.\n`);

  for (const thread of comment_section.contents) {
    const comment = thread.comment;

    if (comment) {
      console.info(
        `${comment.is_pinned ? '[Pinned]' : ''}`,
        `${comment.is_member ? `${comment.sponsor_comment_badge?.tooltip}` : ''}`,
        `${comment.author.name} • ${comment.published}\n`,
        `${comment.content.toString()}`, '\n',
        `Likes: ${comment.vote_count}`, '\n'
      );

      if (thread.has_replies) {
        console.info('Replies:', '\n');

        let comment_thread = await thread.getReplies();

        while (true) {
          for (const reply of comment_thread?.replies || []) {
            console.info(
              `> ${reply.author.name} • ${reply.published}\n`,
              `${reply.content.toString()}`, '\n',
              `Likes: ${reply.vote_count}`, '\n'
            );
          }

          try {
            comment_thread = await comment_thread.getContinuation();
          } catch { break; };
        }
      }
    }

    console.log('\n');
  }
})();