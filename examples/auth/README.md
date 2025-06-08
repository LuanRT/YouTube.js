# Cookies

```js
const innertube = await Innertube.create({
  cookie: '...'
});
```

# YouTube TV OAuth2 (Limited)

Due to recent changes by Google, OAuth2 sign-in only works when using the TV client. This method is no longer recommended - please use cookies instead.

```js

// Fired when waiting for the user to authorize the sign in attempt.
innertube.session.on('auth-pending', (data) => {
  // data.verification_url contains the authorization URL.
  // data.user_code contains the code to enter on the website.
});

// Fired when authentication is successful.
innertube.session.on('auth', ({ credentials }) => {
  // Do something with the credentials, eg; save them in a database.
  console.log('Sign in successful');
});

// Fired when the access token expires.
innertube.session.on('update-credentials', ({ credentials }) => { /** do something with the updated credentials. */ });
  
await innertube.session.signIn(/* credentials */);
```

An example can be found [here](https://github.com/LuanRT/YouTube.js/blob/main/examples/auth/yttv-oauth2.js).

## Cache Credentials

If you don't want to start the sign in flow every time you initialize the session, you can cache the credentials. Note that this SHOULD NOT be used in production, save your credentials in a database/file instead and pass them to `Session#signIn(creds?)` when signing in.

```js
// If you use this, the next call to signIn won't fire 'auth-pending' instead just 'auth'
await innertube.session.oauth.cacheCredentials();
```

**Note:** When using cached credentials, you are still required to make a call to `Session#signIn()`.

## Sign Out

The sign-out method may be used to sign out of the current session. This removes and revokes the credentials.

```js
await innertube.session.signOut();

// if you don't want to sign out of the current session
// and only want to delete the cached credentials, use:
await innertube.session.oauth.removeCache();
```