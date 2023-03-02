import { readFileSync, writeFileSync, existsSync } from 'fs';
import { Innertube, UniversalCache } from 'youtubei.js';

const creds_path = './my_yt_creds.json';
const creds = existsSync(creds_path) ? JSON.parse(readFileSync(creds_path).toString()) : undefined;

(async () => {
  const yt = await Innertube.create({ cache: new UniversalCache(false) });
  
  yt.session.on('auth-pending', (data: any) => {
    console.info(`Hello!\nOn your phone or computer, go to ${data.verification_url} and enter the code ${data.user_code}`);
  });

  yt.session.on('auth', (data: any) => {
    writeFileSync(creds_path, JSON.stringify(data.credentials));
    console.info('Successfully signed in!');
  });

  yt.session.on('update-credentials', (data: any) => {
    writeFileSync(creds_path, JSON.stringify(data.credentials));
    console.info('Credentials updated!', data);
  });

  await yt.session.signIn(creds);
  
  const file = readFileSync('./my_awesome_video.mp4');
  
  const upload = await yt.studio.upload(file.buffer, {
    title: 'Wow!',
    description: new Date().toString(),
    privacy: 'UNLISTED'
  });

  console.info('Done!', upload);
})();
