<h1 align=center>YouTube.js</h1>
<p align=center><i>An object-oriented wrapper around the Innertube API, which is what YouTube itself uses.</i><p>

<p align=center>
   <a href=https://github.com/LuanRT/YouTube.js/issues>Report Bug</a>
    ·
    <a href=https://github.com/LuanRT/YouTube.js/issues>Request Feature
   </a>
   <br/>
   <br/>
<img src=https://github.com/LuanRT/YouTube.js/actions/workflows/node.js.yml/badge.svg>
<img src=https://img.shields.io/npm/v/youtubei.js?color=%2335C757>
<img src=https://www.codefactor.io/repository/github/luanrt/youtube.js/badge>
</p>


Innertube is an API used across all YouTube clients, it was [made to simplify](https://gizmodo.com/how-project-innertube-helped-pull-youtube-out-of-the-gu-1704946491) the internal structure of the platform and make it easy to push updates. This library takes advantage of that API, therefore providing a simple & efficient way to interact with YouTube programmatically.

And big thanks to [@gatecrasher777](https://github.com/gatecrasher777/ytcog) for his research on the workings of the Innertube API!


#### What can it do?

As of now, this is one of the most advanced & stable YouTube libraries out there, here's a short summary of its features: 

- Search videos, playlists, music, albums etc
- Get detailed info about any video or playlist
- Fetch live chat & live stats in real time
- Get notifications
- Get watch history
- Get subscriptions/home feed
- Change notification preferences for a channel
- Subscribe/Unsubscribe/Like/Dislike/Comment etc
- Easily sign in to any Google Account
- Change an account's settings.
- Download videos

Do note that you must be signed-in to perform actions that involve an account, such as commenting, subscribing, sending messages to a live chat, etc.

#### Do I need an API key to use this?

No, YouTube.js does not use any official API so no API keys are required.

## Installation

```bash
npm install youtubei.js
```

## Usage

[1. Getting Started](https://github.com/LuanRT/YouTube.js#usage)

[2. Interactions](https://github.com/LuanRT/YouTube.js#interactions)

[3. Live chats](https://github.com/LuanRT/YouTube.js#fetching-live-chats)

[4. Downloading videos](https://github.com/LuanRT/YouTube.js#downloading-videos)

[5. Signing-in](https://github.com/LuanRT/YouTube.js#signing-in)

[6. Disclaimer](https://github.com/LuanRT/YouTube.js#disclaimer)

First of all we're gonna start by initializing the Innertube instance.
And to make things faster, you should do this only once and reuse the Innertube object when needed.

```js
const Innertube = require('youtubei.js');
const youtube = await new Innertube();  
```

Doing a simple search:

```js
// YouTube:
const search = await youtube.search('Looking for life on Mars - Documentary');

// YTMusic:
const search = await youtube.search('Interstellar Main Theme', { client: 'YTMUSIC' });
```

<details>
<summary>YouTube Search Output</summary>
<p>

```js
{
   query: string,
   corrected_query: string,
   estimated_results: number,
   videos: [
      {
         title: string,
         description: string,
         id: string,
         url: string,
         metadata:{
            view_count: string,
            short_view_count_text: {
               simple_text: string,
               accessibility_label: string
            },
            thumbnails: [Array],
            duration: {
               seconds: number,
               simple_text: string,
               accessibility_label: string
            },
            published: string,
            badges:[Array],
            owner_badges:[Array]
         }
      }
      //...
   ]
}
```

</p>
</details> 

<details>
<summary>YouTube Music Search Output</summary>
<p>


```js
{
   songs: [
      {
         id: string,
         title: string,
         artist: string,
         album: string,
         duration: string,
         thumbnail: {
            thumbnails: [Array]
         }
      },
      //...
   ],
   videos: [
      {
         id: string,
         title: string,
         author: string,
         views: string,
         duration: string,
         thumbnail: {
            thumbnails: [Array]
         }
      }
      //...
   ],
   albums: [
      {
         title: string,
         author: string,
         year: string,
         thumbnail: {
            thumbnails: [Array]
         }
      },
      //...
   ],
   playlists: [
      {
         title: string,
         description: string,
         total_items: number,
         duration: string,
         year: string
         items: [
            {
               id: string,
               title: string,
               author: string,
               duration: string,
               thumbnail: [Array]
            }
         ]
      }
   ]
}
```

</p>
</details> 
<br>

Get search suggestions:
```js
const suggestions = await youtube.getSearchSuggestions('QUERY', {
   client: 'YOUTUBE' // Use YTMUSIC if you want music search suggestions 
})
```

<details>
<summary>Output</summary>
<p>

```js
[
  {
     text: string, bold_text: string
  },
  //...
]
```

</p>
</details> 

Get details about a specific video:

```js
const video = await youtube.getDetails('VIDEO_ID');
```

<details>
<summary>Output</summary>
<p>

```js
{
   title: string,
   description: string,
   thumbnail: {
      url: string,
      width: number,
      height: number
   },
   metadata: {
      embed: {
         iframeUrl: string,
         flashUrl: string,
         width: number,
         height: number,
         flashSecureUrl: string
      },
      likes: number,
      dislikes: number,
      view_count: number,
      average_rating: number,
      length_seconds: number,
      channel_id: string,
      channel_url: string,
      external_channel_id: string,
      is_live_content: boolean,
      is_family_safe: boolean,
      is_unlisted: boolean,
      is_private: boolean,
      has_ypc_metadata: boolean,
      category: string,
      channel_name: string,
      publish_date: string,
      upload_date: string,
      keywords: [Array]
   }
}
```

</p>
</details>

Get comments:

```js
const comments = await youtube.getComments('VIDEO_ID');

// Or:
const video = await youtube.getDetails('VIDEO_ID');
const comments = await video.getComments(); 

// Get comments continuation:
const continuation = await comments.getContinuation();
```

<details>
<summary>Output</summary>
<p>

```js
{
   comments: [
      {
         text: string,
         author: {
            name: string,
            thumbnail: [
               {
                  url: string,
                  width: number,
                  height: number
               }
            ],
            channel_id: string
         },
         metadata:{
            published: string,
            is_liked: boolean,
            is_channel_owner: boolean,
            like_count: number,
            reply_count: number,
            id: string
         }
      },
      //...
   ],
   comment_count: string // not available in continuations
}
```

</p>
</details>

Get home feed:
```js
const homefeed = await youtube.getHomeFeed();
```
<details>
<summary>Output</summary>
<p>

```js
[
   {
      id: string,
      title: string,
      channel: string,
      metadata: {
         view_count: string,
         thumbnail: {
            url: string,
            width: number,
            height: number
         },
         moving_thumbnail: {
            url: string,
            widt: number,
            height: number
         },
         published: string,
         badges: [Array],
         owner_badges: [Array]
      }
   }
   // ...
]
```

</p>
</details>

Get subscriptions feed:
```js
const mysubsfeed = await youtube.getSubscriptionsFeed();
```

<details>
<summary>Output</summary>
<p>

```js
{
   today: [
      {
         id: string,
         title: string,
         channel: string,
         metadata: {
            view_count: string,
            thumbnail: {
               url: string,
               width: number,
               height: number
            },
            moving_thumbnail: {
               url: string,
               width: number,
               height: number
            },
            published: string,
            badges: [Array],
            owner_badges: [Array]
      }
      //...
   ],
   yesterday: [
      {
         id: string,
         title: string,
         channel: string,
         metadata: {
            view_count: string,
            thumbnail: {
               url: string,
               width: number,
               height: number
            },
            moving_thumbnail: {
               url: string,
               width: number,
               height: number
            },
            published: string,
            badges: [Array],
            owner_badges: [Array]
      }
      //...
   ],
   this_week: [
      {
         id: string,
         title: string,
         channel: string,
         metadata: {
            view_count: string,
            thumbnail: {
               url: string,
               width: number,
               height: number
            },
            moving_thumbnail: {
               url: string,
               width: number,
               height: number
            },
            published: string,
            badges: [Array],
            owner_badges: [Array]
      }
      // ...
   ]
} 
```

</p>
</details>

Get watch history:
```js
const history = await youtube.getHistory();
```


<details>
<summary>Output</summary>
<p>

```js
[
   {
    id: string,
    title: string,
    channel: string,
    metadata: {
      view_count: string,
      thumbnail: {
         url: string,
         width: number,
         height: number
      },
      moving_thumbnail: {
         url: string,
         width: number,
         height: number
      },
      published: string,
      duration: string,
      badges: string,
      owner_badges: [Array]
    }
  }
]
```

</p>
</details>

Get notifications:

```js
const notifications = await youtube.getNotifications();
```

<details>
<summary>Output</summary>
<p>

```js
[
   {
      title: string,
      sent_time: string,
      channel_name: string,
      channel_thumbnail: {
         url: string,
         width: number,
         height: number
      },
      video_thumbnail: { 
         url: string,
         width: number,
         height: number
      },
      video_url: string,
      read: boolean,
      notification_id: string
   },
   //...
]
```

</p>
</details>

Get unseen notifications count:

```js
const notifications = await youtube.getUnseenNotificationsCount();
```

Get song lyrics:
```js
const search = await youtube.search('Never give you up', { client: 'YTMUSIC' });
const lyrics = await youtube.getLyrics(search.songs[0].id); 
```

Get playlist: 
```js
const search = await youtube.search('Interstellar Soundtrack', {
   client: 'YTMUSIC' 
});

// YouTube Music
const playlist = await youtube.getPlaylist(search.playlists[0].id, {
   client: 'YTMUSIC' 
});

// YouTube (default)
const playlist = await youtube.getPlaylist(search.playlists[0].id);
```


<details>
<summary>YouTube Music Output</summary>
<p>

```js
{
  title: string,
  description: string,
  total_items: number,
  duration: string,
  year: string,
  items: [
    {
      id: string,
      title: string,
      author: string,
      duration: string,
      thumbnail: [Array]
    },
    //...
}
```

</p>
</details>

<details>
<summary>YouTube Output</summary>
<p>

```js
{
  title: string,
  description: string,
  total_items: string,
  last_updated: string,
  views: string,
  items: [
    {
      id: string,
      title: string,
      author: string,
      duration: {
         seconds: number,
         simple_text: string,
         accessibility_label: string
      },
      thumbnail: [Array]
    },
    //...
  ]
}
```

</p>
</details>

### Interactions:
---

The library makes it easy to interact with YouTube programatically. However, don't forget that you must be signed in to use the following features!

* Subscribe/Unsubscribe:

```js
await youtube.interact.subscribe('CHANNEL_ID');
```

* Like/Dislike:
```js
await youtube.interact.like('VIDEO_ID');
await youtube.interact.dislike('VIDEO_ID');
await youtube.interact.removeLike('VIDEO_ID');
```

* Comment:
```js
await youtube.interact.comment('VIDEO_ID', 'Haha, nice video!');
```

* Change notification preferences:
```js
// Options: ALL | NONE | PERSONALIZED
await youtube.interact.changeNotificationPreferences('VIDEO_ID', 'ALL'); 
```

These methods will always return ```{ success: true, status_code: 200 }``` if successful.

### Account Settings
It is also possible to manage an account's settings:

* Get account info:
```js
await youtube.account.info();
```

<details>
<summary>Output</summary>
<p>

```js
{
    name: string,
    photo: [
       {
          url: string,
          width: number,
          height: number
       }
    ],
    country: string,
    language: string;
}
```
</p>
</details>

<br>

#### Notification settings:

* Subscription notifications:
```js
await youtube.account.settings.notifications.setSubscriptions(true); 
```

* Recommended content notifications:
```js
await youtube.account.settings.notifications.setRecommendedVideos(true); 
```

* Channel activity notifications:
```js
await youtube.account.settings.notifications.setChannelActivity(true); 
```

* Comment replies notifications:
```js
await youtube.account.settings.notifications.setCommentReplies(true); 
```

* Channel mention notifications:
```js
await youtube.account.settings.notifications.setSharedContent(true); 
```

#### Privacy settings:

* Subscriptions privacy:
```js
await youtube.account.settings.privacy.setSubscriptionsPrivate(true); 
```

* Saved playlists privacy:
```js
await youtube.account.settings.privacy.setSavedPlaylistsPrivate(true); 
```

### Fetching live chats:
---

YouTube.js isn't able to download live content yet, but it does allow you to fetch live chats plus you can also send messages!

```js
const Innertube = require('youtubei.js');

async function start() {
  const youtube = await new Innertube();

  const search = await youtube.search('Lofi girl live');
  const video = await youtube.getDetails(search.videos[0].id);
  
  const livechat = video.getLivechat();

  // Updated stats about the livestream
  livechat.on('update-metadata', (data) => {
    console.info('Info:', data);
  });
   
  // Fired whenever there is a new message or other chat events
  livechat.on('chat-update', (message) => {
    console.info(`- ${message.author.name}\n${message.text}\n\n`);
    
    if(message.text == '!info') {
      livechat.sendMessage('Hello! This message was sent from YouTube.js');
    }
  });
}

start();
```
Stop fetching the live chat:
```js
livechat.stop();
```

Delete a message:
```js
const msg = await livechat.sendMessage('Nice livestream!');
await msg.deleteMessage();
```

### Downloading videos:
---

YouTube.js provides an easy-to-use and simple downloader:

```js
const fs = require('fs');
const Innertube = require('youtubei.js');

async function start() {
  const youtube = await new Innertube();
 
  const search = await youtube.search('Looking for life on Mars - documentary');
  
  const stream = youtube.download(search.videos[0].id, {
    format: 'mp4', // Optional, ignored when type is set to audio and defaults to mp4, and I recommend to leave it as it is
    quality: '360p', // if a video doesn't have a specific quality it'll fall back to 360p, also ignored when type is set to audio
    type: 'videoandaudio' // can be “video”, “audio” and “videoandaudio”
  });
  
  stream.pipe(fs.createWriteStream(`./${search.videos[0].title}.mp4`));
 
  stream.on('start', () => {
    console.info('[DOWNLOADER]', 'Starting download now!');
  });
  
  stream.on('info', (info) => {
    // { video_details: {..}, selected_format: {..}, formats: {..} }
    console.info('[DOWNLOADER]', `Downloading ${info.video_details.title} by ${info.video_details.metadata.channel_name}`);
  });
  
  stream.on('progress', (info) => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`[DOWNLOADER] Downloaded ${info.percentage}% (${info.downloaded_size}MB) of ${info.size}MB`);
  });
  
  stream.on('end', () => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.info('[DOWNLOADER]', 'Done!');
  });
  
  stream.on('error', (err) => console.error('[ERROR]', err)); 
}

start();
```

You can also specify a range:
```js
const stream = youtube.download(VIDEO_ID, {
  //...
  type: 'videoandaudio',
  range: { start: 0, end: 1048576 * 5 }
});
  
```

Cancelling a download:
```js
stream.cancel();
```

Alternatively, you can get the deciphered streaming data and handle the download yourself:

```js
const streaming_data = await youtube.getStreamingData(search.videos[0].id, {
   format: 'mp4',
   quality: '360p',
   type: 'videoandaudio'
});
```

<details>
<summary>Output</summary>
<p>

```js
{
   selected_format: {
      itag: number,
      mimeType: string,
      bitrate: number,
      initRange: { start: string, end: string },
      indexRange: { start: string, end: string },
      lastModified: string,
      contentLength: string,
      quality: string,
      projectionType: string,
      averageBitrate: number,
      highReplication: boolean,
      audioQuality: string,
      approxDurationMs: string,
      audioSampleRate: string,
      audioChannels: number,
      loudnessDb: number,
      url: string, 
      has_audio: boolean,
      has_video: boolean
  },
  formats: [
    {
      itag: number,
      mimeType: string,
      bitrate: number,
      initRange: { start: string, end: string },
      indexRange: { start: string, end: string },
      lastModified: string,
      contentLength: string,
      quality: string,
      projectionType: string,
      averageBitrate: number,
      highReplication: boolean,
      audioQuality: string,
      approxDurationMs: string,
      audioSampleRate: string,
      audioChannels: number,
      loudnessDb: number,
      url: string, 
      has_audio: boolean,
      has_video: boolean
    }
    //...
  ]
}
```
</p>
</details>

### Signing-in:
---

When signing in to your account, you have two options:

- Use OAuth 2.0; easy, simple & reliable.
- Cookies; usually more complicated to get and unreliable.

OAuth:

```js
const fs = require('fs');
const Innertube = require('youtubei.js');
const creds_path = './yt_oauth_creds.json'; 

async function start() {
  const creds = fs.existsSync(creds_path) && JSON.parse(fs.readFileSync(creds_path).toString()) || {};
  const youtube = await new Innertube();
  
  youtube.ev.on('auth', (data) => {
    if (data.status === 'AUTHORIZATION_PENDING') {
      console.info(`Hello!\nOn your phone or computer, go to ${data.verification_url} and enter the code ${data.code}`);
    } else if (data.status === 'SUCCESS') {
      fs.writeFileSync(creds_path, JSON.stringify(data.credentials));
      console.info('Successfully signed-in, enjoy!');
    }
  });
  
  youtube.ev.on('update-credentials', (data) => {
    fs.writeFileSync(creds_path, JSON.stringify(data.credentials));
    console.info('Credentials updated!', data);
  });
  
  await youtube.signIn(creds);
  
  //...
}

start();
```

Cookies:

```js
const Innertube = require('youtubei.js');

async function start() {
  const youtube = await new Innertube(COOKIE_HERE); 
  //...
}

start();
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Disclaimer
This project is not affiliated with, endorsed, or sponsored by YouTube or any of their affiliates or subsidiaries. 
All trademarks, logos and brand names are the property of their respective owners. 

Should you have any questions or concerns please contact me directly via email.

## License
[MIT](https://choosealicense.com/licenses/mit/)