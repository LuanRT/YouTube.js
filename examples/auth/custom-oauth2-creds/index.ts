import express from 'express';
import { Innertube, UniversalCache } from 'youtubei.js';
import { OAuth2Client } from 'google-auth-library';

const app = express();

let innertube: Innertube | undefined;
let oAuth2Client: OAuth2Client | undefined;

/**
 * To get your own client id and secret, visit https://console.developers.google.com/, create a new project,
 * and create an OAuth 2.0 Client ID (Web application) under the Credentials tab.
 * 
 * Don't forget to add http://localhost:3000/login as an authorized redirect URI.
 */
const clientId = 'YOUR_OAUTH2_CLIENT_ID';
const clientSecret = 'YOUR_OAUTH2_CLIENT_SECRET';
const redirectUri = 'http://localhost:3000/login';

const port = 3000;

let authorizationUrl: string | undefined;

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true, limit: '3mb' }))

const cache = new UniversalCache(true);

console.info("Cache dir:", cache.cache_dir);

app.get('/', async (_req, res) => {
  if (!innertube) {
    console.info('Creating innertube instance.');
    innertube = await Innertube.create({ cache });

    innertube.session.on("update-credentials", async (_credentials) => {
      console.info('Credentials updated.');
      await innertube?.session.oauth.cacheCredentials();
    });
  }

  if (await cache.get('youtubei_oauth_credentials'))
    await innertube.session.signIn();

  if (innertube.session.logged_in) {
    console.info('Innertube instance is logged in.');

    const userInfo = await innertube.account.getInfo();
    
    console.log(await innertube.getBasicInfo('R8vgwMYSQi8', 'ANDROID'));

    return res.send({ userInfo });
  }

  if (!oAuth2Client) {
    console.info('Creating OAuth2 client.');

    oAuth2Client = new OAuth2Client(
      clientId,
      clientSecret,
      redirectUri
    );

    authorizationUrl = oAuth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: [
        "http://gdata.youtube.com",
        "https://www.googleapis.com/auth/youtube",
        "https://www.googleapis.com/auth/youtube.force-ssl",
        "https://www.googleapis.com/auth/youtube-paid-content"
      ],
      include_granted_scopes: true,
      prompt: 'consent',
    });

    console.info('Redirecting to authorization URL...');

    res.redirect(authorizationUrl);
  } else if (authorizationUrl) {
    console.info('OAuth2 client already exists. Redirecting to authorization URL...');
    res.redirect(authorizationUrl);
  }
});

app.get('/login', async (req, res) => {
  const { code } = req.query;

  if (!code) {
    return res.send('No code provided.');
  }

  if (!oAuth2Client || !innertube) {
    return res.send('OAuth2 client or innertube instance is not initialized.');
  }

  const { tokens } = await oAuth2Client.getToken(code as string);

  if (tokens.access_token && tokens.refresh_token && tokens.expiry_date) {
    await innertube.session.signIn({
      access_token: tokens.access_token,
      refresh_token: tokens.refresh_token,
      expiry_date: new Date(tokens.expiry_date).toISOString(),
      client: {
        client_id: clientId,
        client_secret: clientSecret
      }
    });

    await innertube.session.oauth.cacheCredentials();

    console.log('Logged in successfully. Redirecting to home page...');

    res.redirect('/');
  }
});

app.get('/logout', async (_req, res) => {
  if (!innertube) {
    return res.send('Innertube instance is not initialized.');
  }

  await innertube.session.signOut();

  console.log('Logged out successfully. Redirecting to home page...');

  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});