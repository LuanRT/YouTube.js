import { createWriteStream } from 'fs';
import { Innertube, UniversalCache } from 'youtubei.js';

(async () => {
  const yt = await Innertube.create({ cache: new UniversalCache() });
  
  const info = await yt.getBasicInfo('jLTOuvBTLxA');
  
  const stream = await info.download({
    type: 'audio',
    quality: 'best',
    format: 'mp4'
  });
  
  console.info(`Downloading ${info.basic_info.title}...`);

  const file = createWriteStream(`${info.basic_info.title}.m4a`);
  
  for await (const chunk of streamToIterable(stream)) {
    file.write(chunk);
  }
  
  console.info('Done!');
})();