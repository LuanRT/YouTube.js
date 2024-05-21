import { Innertube, UniversalCache } from  'youtubei.js';

(async () => {
  const yt = await Innertube.create({
    // required if you wish to use OAuth#cacheCredentials
    cache: new UniversalCache(false)
  });

  // Fired when waiting for the user to authorize the sign in attempt.
  yt.session.on('auth-pending', (data) => {
    console.log(`Go to ${data.verification_url} in your browser and enter code ${data.user_code} to authenticate.`);
  });

  // Fired when authentication is successful.
  yt.session.on('auth', ({ credentials }) => {
    console.log('Sign in successful:', credentials);
  });

  // Fired when the access token expires.
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