const Innertube = require('..');

(async () => {

const session = await new Innertube();

const channel = await session.getChannel('UCX6OQ3DkcsbYNE6H8uQQuVA');

console.log('Viewing channel:', channel.title);
console.log('Family Safe:', channel.metadata.is_family_safe);
const about = await channel.getAbout();
console.log('Country:', about.country.toString());


console.log('\nLists the following videos:');
const videos = await channel.getVideos();
for (const video of videos.videos) {
    console.log('Video:', video.title);
}

console.log('\nLists the following playlists:');
const playlists = await channel.getPlaylists();
for (const playlist of playlists.playlists) {
    console.log('Playlist:', playlist.title);
}

console.log('\nLists the following channels:');
const channels = await channel.getChannels();
for (const channel of channels.channels) {
    console.log('Channel:', channel.author.name);
}

console.log('\nLists the following community posts:');
const posts = await channel.getCommunity();
for (const post of posts.backstage_posts) {
    console.log('Backstage post:', post.content.toString().substring(0, 20) + '...');
}

})();