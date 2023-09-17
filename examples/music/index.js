import { Innertube, UniversalCache } from  'youtubei.js';

(async () => {
  const yt = await Innertube.create({ cache: new UniversalCache(true, '~/ytjs-credcache') });

  yt.session.on('auth-pending', (data) => {
      console.log(`Go to ${data.verification_url} in your browser and enter code ${data.user_code} to authenticate.`);
  });
  yt.session.on('auth', async () => {
      console.log('Sign in successful');
      await yt.session.oauth.cacheCredentials();
  });
  yt.session.on('update-credentials', async () => {
      await yt.session.oauth.cacheCredentials();
  });

  // Attempt to sign in
  await yt.session.signIn();
  const account = await yt.music.getAccount();

  console.log(account.account_name, account.channel_handle, account.channel_id);

  const profile = await account.getProfile();
  console.debug(profile);
})();