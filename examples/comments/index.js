import Innertube from '../..';

const session = await new Innertube();

const comments = await session.getComments('a-rqu-hjobc');

console.info(`This video has ${comments.header.comments_count.toString()}`);

for (const thread of comments.contents) {
  const comment = thread.comment;

  console.info(
    `${comment.author.name} • ${comment.published}\n`,
    `${comment.content.toString()}`, '\n',
    `Likes: ${comment.vote_count.short_text}`, '\n'
  );

  if (comment.reply_count > 0) {
    console.info('Replies:', '\n');

    const comment_thread = await thread.getReplies();

    for (const reply of comment_thread.replies) {
      console.info(
        `> ${reply.author.name} • ${reply.published}\n`,
        `${reply.content.toString()}`, '\n',
        `Likes: ${reply.vote_count.short_text}`, '\n'
      );
    }
  }

  console.log('\n');
}