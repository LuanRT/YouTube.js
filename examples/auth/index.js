import { Innertube, UniversalCache } from  'youtubei.js';

(async () => {
  const yt = await Innertube.create({
    // required if you wish to use OAuth#cacheCredentials
    cache: new UniversalCache(false)
  });

  // 'auth-pending' is fired with the info needed to sign in via OAuth.
  yt.session.on('auth-pending', (data) => {
    console.log(`Go to ${data.verification_url} in your browser and enter code ${data.user_code} to authenticate.`);
  });

  // 'auth' is fired once the authentication is complete
  yt.session.on('auth', ({ credentials }) => {
    console.log('Sign in successful:', credentials);
  });

  // 'update-credentials' is fired when the access token expires, if you do not save the updated credentials any subsequent request will fail 
  yt.session.on('update-credentials', async ({ credentials }) => {
    console.log('Credentials updated:', credentials);
    await yt.session.oauth.cacheCredentials();
  });

  // Attempt to sign in
  await yt.session.signIn();

  // ... do something after sign in

  // You may cache the session for later use
  // If you use this, the next call to signIn won't fire 'auth-pending' instead just 'auth'.
  await yt.session.oauth.cacheCredentials();


  // Sign out of the session
  // this will also remove the cached credentials
  await yt.session.signOut();
})();