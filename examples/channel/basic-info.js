const { Innertube } = require('../../dist/index');

(async () => {

const session = await Innertube.create();

const channel = await session.getChannel('UCX6OQ3DkcsbYNE6H8uQQuVA');

console.log('Viewing channel:', channel.header.author.name);
console.log('Family Safe:', channel.metadata.is_family_safe);
const about = await channel.getAbout();
console.log('Country:', about.country.toString());


console.log('\nLists the following videos:');
const videos = await channel.getVideos();
for (const video of videos.videos) {
    console.log('Video:', video.title.toString());
}

console.log('\nLists the following playlists:');
const playlists = await channel.getPlaylists();
for (const playlist of playlists.playlists) {
    console.log('Playlist:', playlist.title.toString());
}

console.log('\nLists the following channels:');
const channels = await channel.getChannels();
for (const channel of channels.channels) {
    console.log('Channel:', channel.author.name);
}

console.log('\nLists the following community posts:');
const posts = await channel.getCommunity();
for (const post of posts.posts) {
    console.log('Post:', post.content.toString().substring(0, 20) + '...');
}

})();