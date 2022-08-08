const { Innertube, UniversalCache } = require('../../dist/index');

(async () => {


const yt = await Innertube.create({
    // required if you wish to use OAuth#cacheCredentials
    cache: new UniversalCache()
});

// 'auth-pending' is fired with the info needed to sign in via OAuth.
yt.session.on('auth-pending', data => {
    console.log(`Go to ${data.verification_url} in your browser and enter code ${data.user_code} to authenticate.`);
});

// 'auth' is fired once the authentication is complete
yt.session.on('auth', () => {
    console.log('Sign in successful');
});

// Attempt to sign in
await yt.session.signIn();

// ... do something after sign in

// You may cache the session for later use
// If you use this, the next call to signIn won't fire 'auth-pending' instead just 'auth'
await yt.session.oauth.cacheCredentials();


// Sign out of the session
// this will also remove the cached credentials
await yt.session.signOut();

})();
