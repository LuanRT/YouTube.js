# OAuth2

## Custom OAuth2 Credentials
Just like the official Data API, YouTube.js supports using your own OAuth2 credentials. A working example can be found [here](https://github.com/LuanRT/YouTube.js/blob/main/examples/auth/custom-oauth2-creds).

## YouTube TV OAuth2

The library supports signing in using YouTube TV's client id. This is the recommended way to sign in as it doesn't require you to create your own OAuth2 credentials.

```js

// Fired when waiting for the user to authorize the sign in attempt.
yt.session.on('auth-pending', (data) => {
  // data.verification_url contains the authorization URL.
  // data.user_code contains the code to enter on the website.
});

// Fired when authentication is successful.
yt.session.on('auth', ({ credentials }) => {
  // Do something with the credentials, eg; save them in a database.
  console.log('Sign in successful');
});

// Fired when the access token expires.
yt.session.on('update-credentials', ({ credentials }) => { /** do something with the updated credentials. */ });
  
await yt.session.signIn(/* credentials */);
```

A working example can be found [here](https://github.com/LuanRT/YouTube.js/blob/main/examples/auth/yttv-oauth2.js).

## Cache Credentials

If you don't want to start the sign in flow every time you initialize the session, you can cache the credentials. Note that this SHOULD NOT be used in production, save your credentials in a database/file instead and pass them to `Session#signIn(creds?)` when signing in.

```js
// If you use this, the next call to signIn won't fire 'auth-pending' instead just 'auth'
await yt.session.oauth.cacheCredentials();
```

**Note:** When using cached credentials, you are still required to make a call to `Session#signIn()`.

## Sign Out

The sign out method may be used to sign out of the current session. This removes and revokes the credentials.

```js
await yt.session.signOut();

// if you don't want to sign out of the current session
// and only want to delete the cached credentials, use:
await yt.session.oauth.removeCache();
```

# Cookies

> **Note**
> This is not as reliable as OAuth2. Cookies can expire and are not very secure.

```js
const yt = await Innertube.create({
  cookie: '...'
});
```