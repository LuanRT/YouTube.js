# Authentication via OAuth

## Usage

Before using any methods which require authentication, you have to authenticate the session:

```js
// 'auth-pending' is fired with the info needed to sign in via OAuth.
yt.session.on('auth-pending', (data) => {
    // data.verification_url contains the URL to visit to authenticate.
    // data.user_code contains the code to enter on the website.
});

// 'auth' is fired once the authentication is complete
yt.session.on('auth', ({ credentials }) => {
  // do something with the credentials, eg; save them in a database.
  console.log('Sign in successful');
});

// 'update-credentials' is fired when the access token expires, if you do not save the updated credentials any subsequent request will fail 
yt.session.on('update-credentials', ({ credentials }) => {
  // do something with the updated credentials
});
  
await yt.session.signIn(/* credentials */);
```

### Cache Credentials

If you don't wish to sign in every time you start the session, you can cache the credentials. Note that this SHOULD NOT be used in production, save your credentials in a database/file instead and pass them to `Session#signIn(creds?)` when signing in.

```js
// If you use this, the next call to signIn won't fire 'auth-pending' instead just 'auth'
await yt.session.oauth.cacheCredentials();
```

**Note:** When using cached credentials, you are still required to make a call to `Session#signIn()`.

### Sign Out

The sign out method may be used to sign out of the current session. This should also remove the cached credentials.

```js
await yt.session.signOut();

// if you don't want to sign out of the current session
// and only want to delete the cached credentials, use:
await yt.session.oauth.removeCache();
```
