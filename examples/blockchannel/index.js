import { Innertube, UniversalCache } from 'youtubei.js';

(async () => {
    const yt = await Innertube.create({ cache: new UniversalCache(true, './credcache') });

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

    // Block Channel for all kids / profiles on the signed-in account.
    const resp = await yt.kids.blockChannel('UCpbpfcZfo-hoDAx2m1blFhg');
    console.info('Blocked channel for ', resp.length, ' profiles.');    
})();