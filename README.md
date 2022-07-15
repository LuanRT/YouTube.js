<!-- Hi there, fellow coder :) -->
  
<!-- BADGE LINKS -->
[npm]: https://www.npmjs.com/package/youtubei.js
[versions]: https://www.npmjs.com/package/youtubei.js?activeTab=versions
[codefactor]: https://www.codefactor.io/repository/github/luanrt/youtube.js
[actions]: https://github.com/LuanRT/YouTube.js/actions
[say-thanks]: https://saythanks.io/to/LuanRT
[ko-fi]:https://ko-fi.com/luanrt
[github-sponsors]:https://github.com/sponsors/LuanRT

<!-- OTHER LINKS -->
[project]: https://github.com/LuanRT/YouTube.js
[twitter]: https://twitter.com/lrt_nooneknows
[nodejs]: https://nodejs.org
[gatecrasher]: https://github.com/gatecrasher777/ytcog
[gizmodo]: https://gizmodo.com/how-project-innertube-helped-pull-youtube-out-of-the-gu-1704946491 

<!-- INTRODUCTION -->
<h1 align=center>
  YouTube.js
</h1>

<p align=center>
  <i>
    A full-featured wrapper around the Innertube API, which is what YouTube itself uses.
  </i>
</p>

<p align="center">
  <a href="https://github.com/LuanRT/YouTube.js/issues">
     Report Bug
  </a>
    ·
  <a href="https://github.com/LuanRT/YouTube.js/issues">
    Request Feature
  </a>
</p>

<!-- BADGES -->
<div align="center">
  
  [![Tests](https://github.com/LuanRT/YouTube.js/actions/workflows/node.js.yml/badge.svg)][actions]
  [![Latest version](https://img.shields.io/npm/v/youtubei.js?color=%2335C757)][versions]
  [![Codefactor](https://www.codefactor.io/repository/github/luanrt/youtube.js/badge)][codefactor]
  [![Monthly downloads](https://img.shields.io/npm/dm/youtubei.js)][npm]
  [![Say thanks](https://img.shields.io/badge/Say%20Thanks-!-1EAEDB.svg)][say-thanks] 
  [![Discord](https://img.shields.io/discord/996229661694627930.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2)](https://discord.gg/syDu7Yks54)

</div>

> **Note**: <br/><br/> We're currently in the process of rewriting some parts of the library to improve performance, maintainability and quality. While this might take a little while, most of this documentation will no longer be valid after v2 (see [#65](https://github.com/LuanRT/YouTube.js/issues/65)).

___

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about">About The Project</a>
      <ul>
        <li><a href="#features">Features</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li><a href="#interactions">Interactions</a></li>
        <li><a href="#live-chats">Livechats</a></li>
        <li><a href="#downloading-videos">Downloading videos</a></li>
        <li><a href="#signing-in">Signing in</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#disclaimer">Disclaimer</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About

Innertube is an API used across all YouTube clients, it was created [to simplify][gizmodo] the internal structure of the platform in a way that updates, tweaks, and experiments can be easily made. This library handles all the low-level communication with Innertube, providing a simple, fast, and efficient way to interact with YouTube programmatically.

And huge thanks to [@gatecrasher777][gatecrasher] for his research on the workings of the Innertube API!

If you have any questions or need help, feel free to contact us on our chat server [here](https://discord.gg/syDu7Yks54).

### Features

- Search videos, playlists, music, albums, artists, etc.
- Subscribe, unsubscribe, like, dislike, post comments, replies, and etc.
- Get subscriptions/home feed, notifications, watch history, and more.
- Easily sign in to any Google Account.
- Fetch live chat & live stats.
- Manage account settings.
- Manage playlists.
- Download videos.

~ And more!

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites
- [NodeJS][nodejs] v14 or greater

  To verify things are set up
properly, run this:
  ```bash
  node --version
  ```

### Installation
- NPM:
  ```bash
  npm install youtubei.js@latest
  ```
- Yarn:
  ```bash
  yarn add youtubei.js@latest
  ```
- Git (bleeding-edge version):
  ```bash
  npm install git+https://github.com/LuanRT/YouTube.js.git
  ```

<!-- USAGE -->
## Usage

Create an Innertube instance (or session):
```js
// const Innertube = require('youtubei.js'); 
import Innertube from 'youtubei.js';
const youtube = await new Innertube({ gl: 'US' });
```

### Search:

Options:
  * client: `YOUTUBE` | `YTMUSIC`
  
  * filters (WIP, youtube only):
    * upload_date: `any` | `last_hour` | `today` | `this_week` | `this_month` | `this_year`
    
    * type: `any` | `video` | `channel` | `playlist` | `movie`
    
    * duration: `any` | `short` | `medium` | `long`
    
    * sort_by: `relevance` | `rating` | `upload_date` | `view_count`

```js
const search = await youtube.search('QUERY', { client: 'YOUTUBE' });
```

<details>
<summary>YouTube Output</summary>
<p>

```js
{
  query: string,
  corrected_query: string,
  estimated_results: number,
  videos: [
    {
      id: string,
      url: string,
      title: string,
      description: string,
      metadata: {
        view_count: string,
        short_view_count_text: {
          simple_text: string,
          accessibility_label: string
        },
        thumbnails: object[],
        duration: {
          seconds: number,
          simple_text: string,
          accessibility_label: string
        },
        published: string,
        badges: string[],
        owner_badges: string[]
      }
    }
  ]
}
```

</p>
</details> 

<details>
<summary>YTMusic Output</summary>
<p>


```js
{
  query: string,
  corrected_query: string,
  results: {
    top_result: object[],  // <- Can be anything; video, playlist, artist etc..
    songs: [
      {
        id: string,
        title: string,
        artist: string,
        album: string,
        duration: string,
        thumbnails: object[]
      }
    ],
    videos: [
      {
        id: string,
        title: string,
        author: string,
        views: string,
        duration: string,
        thumbnails: object[]
      }
    ],
    albums: [
      {
        id: string,
        title: string,
        author: string,
        year: string,
        thumbnails: object[]
      }
    ],
    featured_playlists: [
      {
        id: string,
        title: string,
        author: string,
        channel_id: string,
        total_items:number
      }
    ],
    community_playlists: [
      {
        id: string,
        title: string,
        author: string,
        channel_id: string,
        total_items: number
      }
    ],
    artists: [
      {
        id: string,
        name: string,
        subscribers: string,
        thumbnails: object[]
      }
    ]
  }
}
```

</p>
</details> 
<br>

Search suggestions:
```js
const suggestions = await youtube.getSearchSuggestions('QUERY', { client: 'YOUTUBE' })
```

<details>
<summary>Output</summary>
<p>

```js
{
  query: string,
  results: string[]
}
```

</p>
</details> 

### Video info:

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
    likes: {
      count: number, 
      short_count_text: string
    },
    view_count: number,
    average_rating: number,
    length_seconds: number,
    channel_id: string,
    channel_url: string,
    external_channel_id: string,
    allow_ratings: boolean,
    is_live_content: boolean,
    is_family_safe: boolean,
    is_unlisted: boolean,
    is_private: boolean,
    is_liked: boolean,
    is_disliked: boolean,
    is_subscribed: boolean,
    subscriber_count: string,
    current_notification_preference: string,
    publish_date_text: string,
    has_ypc_metadata: boolean,
    category: string,
    channel_name: string,
    publish_date: string,
    upload_date: string,
    keywords: string[]
  }
}
```

</p>
</details>

### Comments:

Sorting options: `TOP_COMMENTS` | `NEWEST_FIRST`

```js
const comments = await youtube.getComments('VIDEO_ID', 'TOP_COMMENTS');
```
Alternatively, you can use:

```js
const video = await youtube.getDetails('VIDEO_ID');
const comments = await video.getComments(); 
```
<details>
<summary>Output</summary>
<p>

```js
{
  page_count: number,
  comment_count: number,
  items: [
    {
      text: string,
      author: {
        name: string,
        thumbnails: [
          {
            url: string,
            width: number,
            height: number
          }
        ],
        channel_id: string
      },
      metadata: {
        published: string,
        is_liked: boolean,
        is_disliked: boolean,
        is_pinned: boolean,
        is_channel_owner: boolean,
        is_reply: boolean,
        like_count: number,
        reply_count: number,
        id: string
      }
    }
  ]
}
```

</p>
</details>

Reply to, like/dislike, translate and report a comment:
```js
const top_comment = comments.items[0];

await top_comment.like();
await top_comment.dislike();
await top_comment.report();
await top_comment.reply('Nice comment!'); 

// Note: only ISO language codes are accepted
await top_comment.translate('ru');  
```

Comment replies:
```js
const replies = await top_comment.getReplies();
```

Comments/replies continuation:
```js
const continuation = await comments.getContinuation();
const replies_continuation = await replies.getContinuation();
```

### Home feed:
```js
const homefeed = await youtube.getHomeFeed();
```
<details>
<summary>Output</summary>
<p>

```js
{
  videos: [
    {
      id: string,
      title: string,
      description: string,
      channel: {
        id: string,
        name: string,
        url: string
      },
      metadata: {
        view_count: string,
        short_view_count_text: {
          simple_text: string,
          accessibility_label: string
        },
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
        badges: string[],
        owner_badges: string[]
      }
    }
  ]
}
```

</p>
</details>

Continuation:
```js
const continuation = await homefeed.getContinuation();
````

### Watch history:
```js
const history = await youtube.getHistory();
```

<details>
<summary>Output</summary>
<p>

```js
{
  items: [
    {
      date: string,
      videos: [
        {
          id: string,
          title: string,
          description: string,
          channel: {
            id: string,
            name: string,
            url: string
          },
          metadata: {
            view_count: string,
            short_view_count_text: {
              simple_text: string,
              accessibility_label: string
            },
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
            badges: string[],
            owner_badges: string[]
          }
        }
      ]
    }
  ]
}
```

</p>
</details>

Continuation:
```js
const continuation = await history.getContinuation();
````

### Subscriptions feed:
```js
const mysubsfeed = await youtube.getSubscriptionsFeed();
```

<details>
<summary>Output</summary>
<p>

```js
{
  items: [
    {
      date: string,
      videos: [
        {
          id: string,
          title: string,
          description: string,
          channel: {
            id: string,
            name: string,
            url: string
          },
          metadata: {
            view_count: string,
            short_view_count_text: {
              simple_text: string,
              accessibility_label: string
            },
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
            badges: string[],
            owner_badges: string[]
          }
        }
      ]
    }
  ]
}
```

</p>
</details>

Continuation:
```js
const continuation = await mysubsfeed.getContinuation();
````

### Trending content:

```js
const trending = await youtube.getTrending();
```

<details>
<summary>Output</summary>
<p>

```js
{
  now: {
    content: [
      {
        title: string,
        videos: object[]
      }
    ]
  },
  // Other categories require an additional call to fetch videos
  music: { getVideos: Promise.<Array.<object>> },
  gaming: { getVideos: Promise.<Array.<object>> },
  movies: { getVideos: Promise.<Array.<object>> }
}
```

</p>
</details>

### Song lyrics:
```js
const search = await youtube.search('Never give you up', { client: 'YTMUSIC' });
const lyrics = await youtube.getLyrics(search.results.songs[0].id); 
```

### Notifications:

```js
const notifications = await youtube.getNotifications();
```

<details>
<summary>Output</summary>
<p>

```js
{
  items: [
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
    }
  ]
}
```

</p>
</details>

Continuation:
```js
const continuation = await notifications.getContinuation();
````

Unseen notifications count:

```js
const unread_notis_count = await youtube.getUnseenNotificationsCount();
```

### Get playlist: 
Client: `YOUTUBE` | `YTMUSIC`

```js
const playlist = await youtube.getPlaylist('PLAYLIST_ID', { client: 'YOUTUBE' });
```

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
      thumbnails: object[]
    }
  ]
}
```

</p>
</details>

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
      duration: {
        seconds: number,
        simple_text: string
      },
      thumbnails: object[]
    }
  ]
}
```

</p>
</details>

### Interactions:

___

Don't forget that you must be signed in to use some of the following features!

* Subscribe/Unsubscribe:
  ```js
  await youtube.interact.subscribe('CHANNEL_ID');
  await youtube.interact.unsubscribe('CHANNEL_ID');
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

* Playlists:
  ```js
  const videos = [
    'VIDEO_ID1',
    'VIDEO_ID2',
    'VIDEO_ID3'
    //...
  ];

  // Create and delete a playlist:
  await youtube.playlist.create('My Awesome Playlist', videos);
  await youtube.playlist.delete('PLAYLIST_ID');
   
  // Add and remove videos from a playlist:
  await youtube.playlist.addVideos('PLAYLIST_ID', videos);
  await youtube.playlist.removeVideos('PLAYLIST_ID', videos);
  ```

* Translate (does not require sign in)
  ```js
  await youtube.interact.translate('Hi mom!', 'ru');
  ```

* Change notification preferences:
  
  Options: `ALL` | `NONE` | `PERSONALIZED`
  
  ```js
  await youtube.interact.setNotificationPreferences('CHANNEL_ID', 'ALL'); 
  ```

Response schema:
```js
{
  success: boolean, 
  status_code: number, 
  playlist_id?: string,
  translated_content?: string,
  data?: object
}
```

### Account

___

* Get account info:
  ```js
  await youtube.account.getInfo();
  ```

  <details>
  <summary>Output</summary>
  <p>

  ```js
  {
    name: string,
    email: string,
    channel_id: string,
    subscriber_count: string,
    photo: object[]
  }
  ```
  
  </p>
  </details>
  <br>
  
* Get basic channel analytics:
  ```js
  await youtube.account.getAnalytics();
  ```

  <details>
  <summary>Output</summary>
  <p>
  
  ```js
  {
    metrics: [
      {
        title: string,
        subtitle: string,
        metric_value: string,
        comparison_indicator: object,
        series_configuration: object
      }
    ],
    top_content: [
      {
        views: string,
        published: string,
        thumbnails: object[],
        duration: string,
        is_short: boolean
      }
    ]
  }
  ```
  
  </p>
  </details>
  <br>

* Get Time Watched stats:
  ```js
  await session.account.getTimeWatched();
  ```

  <details>
  <summary>Output</summary>
  <p>
  
  ```js
  [
    {
      title: string,
      time: string
    }
  ]
  ```

  </p>
  </details>
  <br>
  
#### Channel:

* Edit channel name:
  ```js
  await youtube.account.channel.editName('My new awesome name');
  ```

* Edit channel description:
  ```js
  await youtube.account.channel.editDescription('An awesome description');
  ```

#### Notification settings:

Options: `ON` | `OFF`

* Subscription notifications:
  ```js
  await youtube.account.settings.notifications.setSubscriptions('ON'); 
  ```

* Recommended content notifications:
  ```js
  await youtube.account.settings.notifications.setRecommendedVideos('ON'); 
  ```

* Channel activity notifications:
  ```js
  await youtube.account.settings.notifications.setChannelActivity('ON'); 
  ```

* Comment replies notifications:
  ```js
  await youtube.account.settings.notifications.setCommentReplies('ON'); 
  ```

* Channel mention notifications:
  ```js
  await youtube.account.settings.notifications.setSharedContent('ON'); 
  ```

#### Privacy settings:

Options: `ON` | `OFF`

* Subscriptions privacy:
  ```js
  await youtube.account.settings.privacy.setSubscriptionsPrivate('ON'); 
  ```

* Saved playlists privacy:
  ```js
  await youtube.account.settings.privacy.setSavedPlaylistsPrivate('ON'); 
  ```

### Live chats:
---

Currently, the library can retrieve the live chat, stats, and send messages.

Example:
```js
import Innertube from 'youtubei.js';

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
```js
const options = {
  format?: string,
  quality?: string,
  type?: string,
  range?: { start: number, end: number }
};

const stream = youtube.download('VIDEO_ID', options);
```

Options:

* format: 
  `mp4` | `webm` etc.. (note: only formats provided by YouTube are available) 

* quality: 
  `144p`, `240p`, `360p`, `480p`, `720p`, `1080p` etc..
   
* type:
  `video` | `audio` | `videoandaudio`

* range: indicates which bytes should be downloaded 
  * start: an integer indicating the beginning of the range
  * end: an integer indicating the end of the range

Cancel a download:
```js
stream.cancel();
```

Example:
```js
import fs from 'fs';
import Innertube from 'youtubei.js';

const youtube = await new Innertube();
const search = await youtube.search('Sound Coming From A Massive Black Hole - Anton Petrov');
  
const stream = youtube.download(search.videos[0].id, {
  format: 'mp4', // defaults to mp4
  quality: '720p', // falls back to 360p if a specific quality isn't available
  type: 'videoandaudio' 
});
  
stream.pipe(fs.createWriteStream(`./${search.videos[0].id}.mp4`));
 
stream.on('start', () => {
  console.info('[YOUTUBE.JS]', 'Starting now!');
});
  
stream.on('info', (info) => {
  console.info('[YOUTUBE.JS]', `Downloading ${info.video_details.title} by ${info.video_details.metadata.channel_name}`);
});
  
stream.on('progress', (info) => {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`[YOUTUBE.JS] Downloaded ${info.percentage}% (${info.downloaded_size}MB) of ${info.size}MB`);
});
  
stream.on('end', () => {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  console.info('[YOUTUBE.JS]', 'Done!');
});
  
stream.on('error', (err) => console.error('[ERROR]', err)); 
```

Alternatively, you can get the deciphered streaming data and handle the download yourself:

```js
await youtube.getStreamingData('VIDEO_ID', options);
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
  ]
}
  
```
</p>
</details>

### Signing in:
---

When signing in to a Google account, you have two options:

- OAuth 2.0; easy, simple & reliable.
- Cookies; usually complicated to extract and unreliable.

#### OAuth:

```js
import fs from 'fs';
import Innertube from 'youtubei.js';

const youtube = await new Innertube();

const creds_path = './yt_oauth_creds.json'; 
const creds = fs.existsSync(creds_path) ? JSON.parse(fs.readFileSync(creds_path).toString()) : {};

youtube.ev.on('auth', (data) => {
  switch (data.status) {
    case 'AUTHORIZATION_PENDING':
      console.info(`
        Hello! On your phone or computer,
        go to ${data.verification_url} and enter
        the code ${data.code}.
      `);
      break;
    case 'SUCCESS':
      fs.writeFileSync(creds_path, JSON.stringify(data.credentials));
      console.info('Successfully signed in, enjoy!');
      break;
  }
});

youtube.ev.on('update-credentials', (data) => {
  fs.writeFileSync(creds_path, JSON.stringify(data.credentials));
  console.info('Credentials updated!', data);
});
  
await youtube.signIn(creds);
  
//...
```

Sign out:
```js
const response = await youtube.signOut();
if (response.success) {
  console.log('You have successfully signed out');
}
```

#### Cookies:

```js
import Innertube from 'youtubei.js';
const youtube = await new Innertube({ cookie: '...' }); 
```

<!-- CONTRIBUTING -->
## Contributing
Contributions, issues and feature requests are welcome.
Feel free to check [issues page](https://github.com/LuanRT/YouTube.js/issues) if you want to contribute.

<!-- CONTRIBUTORS -->
## Contributors
<a href="https://github.com/LuanRT/YouTube.js/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=LuanRT/YouTube.js" />
</a>

<!-- CONTACT -->
## Contact

LuanRT  - [@lrt_nooneknows][twitter] - luan.lrt4@gmail.com

Project Link: [https://github.com/LuanRT/YouTube.js][project]

<!-- DISCLAIMER -->
## Disclaimer
This project is not affiliated with, endorsed, or sponsored by YouTube or any of their affiliates or subsidiaries. 
All trademarks, logos and brand names are the property of their respective owners, and are used only to directly describe the services being provided, as such, any usage of trademarks to refer to such services is considered nominative use.

Should you have any questions or concerns please contact me directly via email.

<!-- LICENSE -->
## License
Distributed under the [MIT](https://choosealicense.com/licenses/mit/) License.

<p align="right">
  (<a href="#top">back to top</a>)
</p>
