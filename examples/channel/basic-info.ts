import { Innertube, UniversalCache, YTNodes } from 'youtubei.js';

(async () => {
  const yt = await Innertube.create({ cache: new UniversalCache() });

  const channel = await yt.getChannel('UCX6OQ3DkcsbYNE6H8uQQuVA');

  if (channel.header?.is(YTNodes.C4TabbedHeader)) {
    console.info('Viewing channel:', channel?.header?.author.name);
    console.info('Family Safe:', channel.metadata.is_family_safe);
  }

  const about = await channel.getAbout();

  console.info('Country:', about.country.toString());

  console.info('\nLists the following videos:');
  const videos = await channel.getVideos();

  for (const video of videos.videos) {
    console.info('Video:', video.title.toString());
  }

  console.info('\nLists the following playlists:');
  const playlists = await channel.getPlaylists();

  for (const playlist of playlists.playlists) {
    console.info('Playlist:', playlist.title.toString());
  }

  console.info('\nLists the following channels:');
  const channels = await channel.getChannels();
 
  for (const channel of channels.channels) {
    console.info('Channel:', channel.author.name);
  }

  console.info('\nLists the following community posts:');
  const posts = await channel.getCommunity();
 
  for (const post of posts.posts) {
    console.info('Post:', post.content.toString().substring(0, 20) + '...');
  }
})();