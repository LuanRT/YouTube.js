import { Innertube, UniversalCache } from 'youtubei.js';

(async () => {
  const yt = await Innertube.create({ cache: new UniversalCache() });

  const comments = await yt.getComments('a-rqu-hjobc');
 
  console.info(`This video has ${comments.header?.comments_count.toString() || 'N/A'} comments.\n`);

  for (const thread of comments.contents) {
    const comment = thread.comment;
    
    if (comment) {
      console.info(
        `${comment.author.name} • ${comment.published}\n`,
        `${comment.content.toString()}`, '\n',
        `Likes: ${comment.vote_count.short_text}`, '\n'
      );
     
      if (comment.reply_count > 0) {
        console.info('Replies:', '\n');

        const comment_thread = await thread.getReplies();
       
        if (comment_thread.replies) {
          for (const reply of comment_thread.replies) {
            console.info(
              `> ${reply.author.name} • ${reply.published}\n`,
              `${reply.content.toString()}`, '\n',
              `Likes: ${reply.vote_count.short_text}`, '\n'
            );
          }
        }
      }
    }
    
    console.log('\n');
  }
})();