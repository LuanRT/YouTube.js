import { Innertube, UniversalCache, Utils } from 'youtubei.js';
import { existsSync, mkdirSync, createWriteStream } from 'fs';

(async () => {
  const yt = await Innertube.create({ cache: new UniversalCache(false), generate_session_locally: true });

  const search = await yt.music.search('No Copyright Background Music', { type: 'album' });

  if (!search.results)
    throw new Error('Filter "type" must be used');

  const album = await yt.music.getAlbum(search.results[0].id as string);

  if (!album.contents)
    throw new Error('Album appears to be empty');

  console.info(`Album "${album.header?.title.toString()}"`, '\n');

  for (const song of album.contents) {
    const stream = await yt.download(song.id as string, {
      type: 'audio', // audio, video or video+audio
      quality: 'best', // best, bestefficiency, 144p, 240p, 480p, 720p and so on.
      format: 'mp4', // media container format,
      client: 'YTMUSIC'
    });

    console.info(`Downloading ${song.title} (${song.id})`);

    const dir = `./${album.header?.title.toString()}`;

    if (!existsSync(dir)) {
      mkdirSync(dir);
    }

    const file = createWriteStream(`${dir}/${song.title?.replace(/\//g, '')}.m4a`);

    for await (const chunk of Utils.streamToIterable(stream)) {
      file.write(chunk);
    }

    console.info(`${song.id} - Done!`, '\n');
  }

  console.info(`Done!`);
})();