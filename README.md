<h1 align="center">YouTube.js</h1>
<p align="center"><i>An object-oriented wrapper around the Innertube API, which is what YouTube itself uses.</i><p>

<p align="center">
<img src="https://github.com/LuanRT/YouTube.js/actions/workflows/node.js.yml/badge.svg">
<img src="https://img.shields.io/npm/v/youtubei.js?color=%2335C757">
<img src="https://www.codefactor.io/repository/github/luanrt/youtube.js/badge">
</p>

Innertube is an API used across all YouTube clients, it was [made to simplify](https://gizmodo.com/how-project-innertube-helped-pull-youtube-out-of-the-gu-1704946491) the internal structure of the platform and make it easy to push updates. This library takes advantage of that API, therefore providing a simple & efficient way to interact with YouTube programmatically.

And big thanks to [@gatecrasher777](https://github.com/gatecrasher777/ytcog) for his research on the workings of the Innertube API!


#### What can it do?

As of now, this is one of the most advanced & stable YouTube libraries out there, here's a short summary of its features: 

- Search videos
- Get detailed info about any video
- Fetch live chat & live stats in real time
- Get notifications
- Get subscriptions/home feed
- Change notification preferences for a channel
- Subscribe/Unsubscribe/Like/Dislike/Comment etc
- Easily sign in to any Google Account
- Download videos

Do note that you must be signed-in to perform actions that involve an account, such as commenting, subscribing, sending messages to a live chat, etc.

#### Do I need an API key to use this?

No, YouTube.js does not use any official API so no API keys are required.

## Installation

```bash
npm install youtubei.js
```

## Usage

[1. Basic Usage](https://github.com/LuanRT/YouTube.js#usage)

[2. Interactions](https://github.com/LuanRT/YouTube.js#interactions)

[3. Live chats](https://github.com/LuanRT/YouTube.js#fetching-live-chats)

[4. Downloading videos](https://github.com/LuanRT/YouTube.js#downloading-videos)

[5. Signing-in](https://github.com/LuanRT/YouTube.js#signing-in)

[6. Disclaimer](https://github.com/LuanRT/YouTube.js#disclaimer)

First of all we're gonna start by initializing the Innertube instance.
And to make things faster, you should do this only once and reuse the Innertube object when needed.

```js
const youtube = await new Innertube(); 
```

Doing a simple search:

```js
// YouTube:
const search = await youtube.search('Looking for life on Mars - Documentary');

// YTMusic:
const search = await youtube.search('Never Gonna Give You Up', { client: 'YTMUSIC' });
```

<details>
<summary>YT Search Output</summary>
<p>

```js
{
   "search_metadata":{
      "query":"Looking for life on Mars - documentary",
      "corrected_query":"Looking for life on Mars - documentary",
      "estimated_results":17949539
   },
   "videos":[
      {
         "title":"Looking for Life on Mars | NOVA | PBS",
         "description":"Follow along as NASA launches the Mars 2020 Mission, perhaps the most ambitious hunt yet for signs of ancient life on Mars.",
         "author":"NOVA PBS Official",
         "id":"fhtw7Dpntb4",
         "url":"https://youtu.be/fhtw7Dpntb4",
         "channel_url":"https://www.youtube.com/user/NOVAonline",
         "metadata":{
            "view_count":"3,912,774 views",
            "short_view_count_text":{
               "simple_text":"3.9M views",
               "accessibility_label":"3.9 million views"
            },
            "thumbnails":[
               {
                  "url":"https://i.ytimg.com/vi/fhtw7Dpntb4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHHsKMNZtmzWn4t14vmmJbBotdQg",
                  "width":360,
                  "height":202
               },
               {
                  "url":"https://i.ytimg.com/vi/fhtw7Dpntb4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBHzmdEUoQM_Sl-6a-bwMOIm-mM7A",
                  "width":720,
                  "height":404
               }
            ],
            "duration":{
               "seconds":3243,
               "simple_text":"54:03",
               "accessibility_label":"54 minutes, 3 seconds"
            },
            "published":"7 months ago",
            "badges":[
               "CC"
            ],
            "owner_badges":[
               "Verified"
            ]
         }
      }
      //...
   ]
}
```

</p>
</details> 

<details>
<summary>YTMusic Search Output</summary>
<p>


```js
{
   "songs":[
      {
         "id":"AhCWdFBd_fM",
         "title":"Never Gonna Give You Up",
         "artist":"Barry White",
         "album":"Barry White - His Greatest Hits",
         "duration":"4:50",
         "thumbnail":{
            "thumbnails":[
               {
                  "url":"https://lh3.googleusercontent.com/S69XTGGI63L8rJJlCx7rJgp0decIo3EdDKGWR_y8B3SE9fEYp-VGu3ygZ3DrlS3tTTyqN8CUfpajjsA=w60-h60-l90-rj",
                  "width":60,
                  "height":60
               },
               {
                  "url":"https://lh3.googleusercontent.com/S69XTGGI63L8rJJlCx7rJgp0decIo3EdDKGWR_y8B3SE9fEYp-VGu3ygZ3DrlS3tTTyqN8CUfpajjsA=w120-h120-l90-rj",
                  "width":120,
                  "height":120
               }
            ]
         }
      },
      {
         "id":"C5ITdcx-wRA",
         "title":"Never Gonna Give You Up",
         "artist":"Home Free",
         "album":"Never Gonna Give You Up",
         "duration":"3:03",
         "thumbnail":{
            "thumbnails":[
               {
                  "url":"https://lh3.googleusercontent.com/isnABE6M8Dzq5WG7ZrJRGdKVmF8M8xJDJTM6aMf7d0C-XpqGIHFd1n7i6lgZM_K7LbHXuEuRaXhfnqc=w60-h60-l90-rj",
                  "width":60,
                  "height":60
               },
               {
                  "url":"https://lh3.googleusercontent.com/isnABE6M8Dzq5WG7ZrJRGdKVmF8M8xJDJTM6aMf7d0C-XpqGIHFd1n7i6lgZM_K7LbHXuEuRaXhfnqc=w120-h120-l90-rj",
                  "width":120,
                  "height":120
               }
            ]
         }
      },
      {
         "id":"XxWzZxuo6Vk",
         "title":"Never Gonna Give You Up",
         "artist":"Barry White",
         "album":"Dinah Washington",
         "duration":"The Unforgettable Voices: 30 Best Of Dinah Washington & Barry White",
         "thumbnail":{
            "thumbnails":[
               {
                  "url":"https://lh3.googleusercontent.com/KXnlog1Me9ONfcdtT1O4fHr2uRqYrhH1cHWksFmzNpJwzX8lNr_S5TlQsE8ICtihijkGCLp9y8ypI7BiOA=w60-h60-l90-rj",
                  "width":60,
                  "height":60
               },
               {
                  "url":"https://lh3.googleusercontent.com/KXnlog1Me9ONfcdtT1O4fHr2uRqYrhH1cHWksFmzNpJwzX8lNr_S5TlQsE8ICtihijkGCLp9y8ypI7BiOA=w120-h120-l90-rj",
                  "width":120,
                  "height":120
               }
            ]
         }
      }
   ],
   "videos":[
      {
         "id":"dMbZfdrzILA",
         "title":"Rick Astley - Never Gonna Give You Up • TopPop",
         "author":"TopPop",
         "views":"313K views",
         "duration":"3:25",
         "thumbnail":{
            "thumbnails":[
               {
                  "url":"https://i.ytimg.com/vi/dMbZfdrzILA/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3kLVbR-3q7t0AIjayar6gbsUe-OoQ",
                  "width":400,
                  "height":225
               }
            ]
         }
      },
      {
         "id":"IO9XlQrEt2Y",
         "title":"Never Gonna Give You Up",
         "author":"Rick Astley",
         "views":"7.1M views",
         "duration":"2:58",
         "thumbnail":{
            "thumbnails":[
               {
                  "url":"https://i.ytimg.com/vi/IO9XlQrEt2Y/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3mqRLVI-_NB9-t7Qy-j2J030ejrKA",
                  "width":400,
                  "height":225
               }
            ]
         }
      },
      {
         "id":"a9WHZ5M8I8w",
         "title":"Rick Astley - Never Gonna Give You Up - Festival de Viña del Mar 2016 HD",
         "author":"FESTIVALDEVINACHILE",
         "views":"2.8M views",
         "duration":"8:13",
         "thumbnail":{
            "thumbnails":[
               {
                  "url":"https://i.ytimg.com/vi/a9WHZ5M8I8w/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3mJDPxemHrcREbbK-9uBM3SIRm-Og",
                  "width":400,
                  "height":225
               }
            ]
         }
      }
   ],
   "albums":[
      {
         "title":"Never Gonna Give You Up",
         "author":"Royal Reggie",
         "year":"2022",
         "thumbnail":{
            "thumbnails":[
               {
                  "url":"https://lh3.googleusercontent.com/DeMUgtcPxCOye_JYJaywQjuJHZjdzSYqU-231p8ZADV1EmPC5w3poMQRfm3_U83wLQR0nUbXnJ_Ujyq8=w60-h60-l90-rj",
                  "width":60,
                  "height":60
               },
               {
                  "url":"https://lh3.googleusercontent.com/DeMUgtcPxCOye_JYJaywQjuJHZjdzSYqU-231p8ZADV1EmPC5w3poMQRfm3_U83wLQR0nUbXnJ_Ujyq8=w120-h120-l90-rj",
                  "width":120,
                  "height":120
               },
               {
                  "url":"https://lh3.googleusercontent.com/DeMUgtcPxCOye_JYJaywQjuJHZjdzSYqU-231p8ZADV1EmPC5w3poMQRfm3_U83wLQR0nUbXnJ_Ujyq8=w226-h226-l90-rj",
                  "width":226,
                  "height":226
               },
               {
                  "url":"https://lh3.googleusercontent.com/DeMUgtcPxCOye_JYJaywQjuJHZjdzSYqU-231p8ZADV1EmPC5w3poMQRfm3_U83wLQR0nUbXnJ_Ujyq8=w544-h544-l90-rj",
                  "width":544,
                  "height":544
               }
            ]
         }
      },
      {
         "title":"Never Gonna Give You Up",
         "author":"Carlos Marin",
         "year":"2020",
         "thumbnail":{
            "thumbnails":[
               {
                  "url":"https://lh3.googleusercontent.com/i6JslNpviVqPZfLCBvLvmDyscy8ZQ2CShRz38hGj-PUz_H4wLTR0gkKU6tQoREDoARwKBl1krytJdBQ=w60-h60-l90-rj",
                  "width":60,
                  "height":60
               },
               {
                  "url":"https://lh3.googleusercontent.com/i6JslNpviVqPZfLCBvLvmDyscy8ZQ2CShRz38hGj-PUz_H4wLTR0gkKU6tQoREDoARwKBl1krytJdBQ=w120-h120-l90-rj",
                  "width":120,
                  "height":120
               },
               {
                  "url":"https://lh3.googleusercontent.com/i6JslNpviVqPZfLCBvLvmDyscy8ZQ2CShRz38hGj-PUz_H4wLTR0gkKU6tQoREDoARwKBl1krytJdBQ=w226-h226-l90-rj",
                  "width":226,
                  "height":226
               },
               {
                  "url":"https://lh3.googleusercontent.com/i6JslNpviVqPZfLCBvLvmDyscy8ZQ2CShRz38hGj-PUz_H4wLTR0gkKU6tQoREDoARwKBl1krytJdBQ=w544-h544-l90-rj",
                  "width":544,
                  "height":544
               }
            ]
         }
      },
      {
         "title":"Never Gonna Give You Up",
         "author":"Magnus Carlsson",
         "year":"2021",
         "thumbnail":{
            "thumbnails":[
               {
                  "url":"https://lh3.googleusercontent.com/43cP--d3Eqj3L5FeBbYFkdsnisf7nYb5-Rq4yZDf1kvH6_pEk4RW4Nd004L4ZwG6VzzT4JzFDVPS-8w=w60-h60-l90-rj",
                  "width":60,
                  "height":60
               },
               {
                  "url":"https://lh3.googleusercontent.com/43cP--d3Eqj3L5FeBbYFkdsnisf7nYb5-Rq4yZDf1kvH6_pEk4RW4Nd004L4ZwG6VzzT4JzFDVPS-8w=w120-h120-l90-rj",
                  "width":120,
                  "height":120
               },
               {
                  "url":"https://lh3.googleusercontent.com/43cP--d3Eqj3L5FeBbYFkdsnisf7nYb5-Rq4yZDf1kvH6_pEk4RW4Nd004L4ZwG6VzzT4JzFDVPS-8w=w226-h226-l90-rj",
                  "width":226,
                  "height":226
               },
               {
                  "url":"https://lh3.googleusercontent.com/43cP--d3Eqj3L5FeBbYFkdsnisf7nYb5-Rq4yZDf1kvH6_pEk4RW4Nd004L4ZwG6VzzT4JzFDVPS-8w=w544-h544-l90-rj",
                  "width":544,
                  "height":544
               }
            ]
         }
      }
   ]
}
```

</p>
</details> 
<br>

Find lyrics for a song, directly from YTMusic!
```js
const search = await youtube.search('7 Years', { client: 'YTMUSIC' });
const lyrics = await search.songs[0].getLyrics();

// Or:
const lyrics = await youtube.getLyrics(search.songs[0].id);
```
Get video details:

```js
const video = await youtube.getDetails(search.videos[0].id);
```

<details>
<summary>Output</summary>
<p>

```js
{
   "title":"Looking for Life on Mars | NOVA | PBS",
   "description":"Follow along as NASA launches the Mars 2020 Mission, perhaps the most ambitious hunt yet for signs of ancient life on Mars. \n\nThe spacecraft will blaze into the Martian atmosphere at some 12,000 miles per hour and attempt to lower the Perseverance Rover in the rocky Jezero Crater, home to a dried-up river delta scientists think could have harbored life. Perseverance will comb the area for signs of life and collect samples for possible return to Earth. Traveling onboard is a four-pound helicopter that will conduct a series of test flights—the first on another planet. \n\nDuring its journey, Perseverance will also test technology designed to produce oxygen from the Martian atmosphere, in hopes that the gas could be used for fuel—or for humans to breathe—on future missions.\n\n© 2020 WGBH Educational Foundation\n\nAll rights reserved\n\nThis program was produced by GBH, which is solely responsible for its content. Some funders of NOVA also fund basic science research. Experts featured in this film may have received support from funders of this program.\n\nFunding for NOVA is provided by Draper, the David H. Koch Fund for Science, the NOVA Science Trust, the Corporation for Public Broadcasting, and PBS viewers.\n\nThis program is made possible by viewers like you. Support your local PBS station here: https://pbs.org/donate/",
   "thumbnail":{
      "url":"https://i.ytimg.com/vi/fhtw7Dpntb4/hq720.jpg?sqp=-oaymwEcCK4FEIIDSEbyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAJV-Cg2bHh4zs_svidj8fmaOQRng",
      "width":686,
      "height":386
   },
   "metadata":{
      "embed":{
         "iframeUrl":"https://www.youtube.com/embed/fhtw7Dpntb4",
         "flashUrl":"http://www.youtube.com/v/fhtw7Dpntb4?version=3&autohide=1",
         "width":1280,
         "height":720,
         "flashSecureUrl":"https://www.youtube.com/v/fhtw7Dpntb4?version=3&autohide=1"
      },
      "likes":22674,
      "dislikes":1771,
      "view_count":3913553,
      "average_rating":4.7102065,
      "length_seconds":"3243",
      "channel_id":"UCjHz5SVHeMT0AViCYZvsGDA",
      "channel_url":"http://www.youtube.com/user/NOVAonline",
      "external_channel_id":"UCjHz5SVHeMT0AViCYZvsGDA",
      "is_live_content":false,
      "is_family_safe":true,
      "is_unlisted":false,
      "is_private":false,
      "has_ypc_metadata":false,
      "category":"Science & Technology",
      "channel_name":"NOVA PBS Official",
      "publish_date":"2021-02-24",
      "upload_date":"2021-02-24",
      "keywords":[
         "mars",
         "nova",
         "pbs",
         "documentary",
         "science",
         "Perseverance",
         "space"
      ]
   }
}
```

</p>
</details>

Get comments:

```js
const video = await youtube.getDetails(VIDEO_ID_HERE);
const comments = await video.getComments();

// If you want to load more comments simply call:
const comments_continuation = await comments.getContinuation();
```

<details>
<summary>Output</summary>
<p>

```js
{
   "comments":[
      {
         "text":"The amazing thing to me is the engineering. It's truly remarkable that we can build machines like these.",
         "author":{
            "name":"Mark B",
            "thumbnail":[
               {
                  "url":"https://yt3.ggpht.com/ytc/AKedOLTKxmup9YqNEMvf-nSdOe7F6CwWhUtu4mpUsg=s48-c-k-c0x00ffffff-no-rj",
                  "width":48,
                  "height":48
               },
               {
                  "url":"https://yt3.ggpht.com/ytc/AKedOLTKxmup9YqNEMvf-nSdOe7F6CwWhUtu4mpUsg=s88-c-k-c0x00ffffff-no-rj",
                  "width":88,
                  "height":88
               },
               {
                  "url":"https://yt3.ggpht.com/ytc/AKedOLTKxmup9YqNEMvf-nSdOe7F6CwWhUtu4mpUsg=s176-c-k-c0x00ffffff-no-rj",
                  "width":176,
                  "height":176
               }
            ],
            "channel_id":"UClnPXUOtCLnKsbS2reuN7wg"
         },
         "metadata":{
            "published":"2 months ago",
            "is_liked":false,
            "is_channel_owner":false,
            "like_count":"54",
            "reply_count":3,
            "id":"Ugy-bGGepYil_2dAQUp4AaABAg"
         }
      },
      {
         "text":"May 25th,  2021 and everything has gone perfectly! Ingenuity,  moxy and perseverance all working to plan.  Unbelievable accomplishments!!!",
         "author":{
            "name":"cliff luebke",
            "thumbnail":[
               {
                  "url":"https://yt3.ggpht.com/ytc/AKedOLR1_6jvPZa_ycrkUEVxVxo0Alo25e7O8fOcm5v9ww=s48-c-k-c0x00ffffff-no-rj",
                  "width":48,
                  "height":48
               },
               {
                  "url":"https://yt3.ggpht.com/ytc/AKedOLR1_6jvPZa_ycrkUEVxVxo0Alo25e7O8fOcm5v9ww=s88-c-k-c0x00ffffff-no-rj",
                  "width":88,
                  "height":88
               },
               {
                  "url":"https://yt3.ggpht.com/ytc/AKedOLR1_6jvPZa_ycrkUEVxVxo0Alo25e7O8fOcm5v9ww=s176-c-k-c0x00ffffff-no-rj",
                  "width":176,
                  "height":176
               }
            ],
            "channel_id":"UCeVFeX4jCgaJpvNJ4f_I4RA"
         },
         "metadata":{
            "published":"4 months ago",
            "is_liked":false,
            "is_channel_owner":false,
            "like_count":"54",
            "reply_count":0,
            "id":"UgylkZHOe7v78hxHPpl4AaABAg"
         }
      },
      //...
   ],
   "comment_count":"3,231" // not available in continuations
}
```

</p>
</details>

Get home feed:
```js
const home_feed = await youtube.getHomeFeed();
```
<details>
<summary>Output</summary>
<p>

```js
[
   {
      "id":"TVcKu_c1C7E",
      "title":"The Things We Don't Know About the Universe",
      "channel":"Sciencephile the AI",
      "metadata":{
         "view_count":"233,835 views",
         "thumbnail":{
            "url":"https://i.ytimg.com/vi/TVcKu_c1C7E/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLByf2X2pKs1wbWyLIx-FnXFt1PVZw",
            "width":720,
            "height":404
         },
         "moving_thumbnail":{
            "url":"https://i.ytimg.com/an_webp/TVcKu_c1C7E/mqdefault_6s.webp?du=3000&sqp=COGe-48G&rs=AOn4CLDslQ2RYSgaF3aEY8pcuyIzvfLJbQ",
            "width":320,
            "height":180
         },
         "published":"3 months ago",
         "badges":[
            
         ],
         "owner_badges":[
            "Verified"
         ]
      }
   },
   {
      "id":"1Tdx9ZZuf_w",
      "title":"Life is Strange: Before The Storm Remastered Episode 1 Gameplay Walkthrough",
      "channel":"DomTheBomb",
      "metadata":{
         "view_count":"N/A",
         "thumbnail":{
            "url":"https://i.ytimg.com/vi/1Tdx9ZZuf_w/hq720_live.jpg?sqp=CMzD-48G-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC9N4GPouauc-Jw3Y69uCXWVEfBiQ",
            "width":720,
            "height":404
         },
         "moving_thumbnail":[
            
         ],
         "published":"N/A",
         "badges":[
            "LIVE NOW"
         ],
         "owner_badges":[
            "Verified"
         ]
      }
   },
   {
      "id":"C776bXWlgSk",
      "title":"Probably my Most BRUTAL BIRDEATER TARANTULA ever .",
      "channel":"Exotics Lair",
      "metadata":{
         "view_count":"346,246 views",
         "thumbnail":{
            "url":"https://i.ytimg.com/vi/C776bXWlgSk/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDgWQrLwmFTG-KzLUYRdR9KFA5bDw",
            "width":480,
            "height":270
         },
         "moving_thumbnail":{
            "url":"https://i.ytimg.com/an_webp/C776bXWlgSk/mqdefault_6s.webp?du=3000&sqp=COal-48G&rs=AOn4CLAfsyW-NUXvgFqAHBJr_3pJDZlfhA",
            "width":320,
            "height":180
         },
         "published":"5 months ago",
         "badges":[
            
         ],
         "owner_badges":[
            "Verified"
         ]
      }
   },
   {
      "id":"nrvnpFCcZeA",
      "title":"Run Windows 11 on phone! And play PC games?!!!",
      "channel":"Geekerwan",
      "metadata":{
         "view_count":"519,217 views",
         "thumbnail":{
            "url":"https://i.ytimg.com/vi/nrvnpFCcZeA/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA0ny_9_K9iLL_u7grHZ4PoAJkH4Q",
            "width":480,
            "height":270
         },
         "moving_thumbnail":{
            "url":"https://i.ytimg.com/an_webp/nrvnpFCcZeA/mqdefault_6s.webp?du=3000&sqp=CKCR-48G&rs=AOn4CLB9atuuBjdMCWTHgP-v4N75agxvPA",
            "width":320,
            "height":180
         },
         "published":"1 month ago",
         "badges":[
            
         ],
         "owner_badges":[
            
         ]
      }
   },
   {
      "id":"owtvGIQDdiU",
      "title":"This Is What The Clouds Of Titan Sound Like! Huygens Probe Sound Recording 2005 (4K UHD)",
      "channel":"V101 Science",
      "metadata":{
         "view_count":"744,350 views",
         "thumbnail":{
            "url":"https://i.ytimg.com/vi/owtvGIQDdiU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDbQLvaaOO3jW9bGY1SaQAdxIUJOQ",
            "width":720,
            "height":404
         },
         "moving_thumbnail":{
            "url":"https://i.ytimg.com/an_webp/owtvGIQDdiU/mqdefault_6s.webp?du=3000&sqp=CImy-48G&rs=AOn4CLDXD3UPQ6iix8orhjJs3yDPpJlckQ",
            "width":320,
            "height":180
         },
         "published":"1 year ago",
         "badges":[
            
         ],
         "owner_badges":[
            "Verified"
         ]
      }
   },
   {
      "id":"pI7ytZ1oyY4",
      "title":"My Pet Praying Mantis Passed Away. Goodbye, Kiwi..",
      "channel":"제발돼라 PleaseBee",
      "metadata":{
         "view_count":"3,311,251 views",
         "thumbnail":{
            "url":"https://i.ytimg.com/vi/pI7ytZ1oyY4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDisjK7ZecKov3aFUsE-Xe5x92VEQ",
            "width":720,
            "height":404
         },
         "moving_thumbnail":{
            "url":"https://i.ytimg.com/an_webp/pI7ytZ1oyY4/mqdefault_6s.webp?du=3000&sqp=CKbE-48G&rs=AOn4CLD_wWCno1Q6EqhLYp7kMkCPc0y0dg",
            "width":320,
            "height":180
         },
         "published":"3 weeks ago",
         "badges":[
            
         ],
         "owner_badges":[
            
         ]
      }
   },
   {
      "id":"dXdoim96v5A",
      "title":"8-bit CPU control logic: Part 1",
      "channel":"Ben Eater",
      "metadata":{
         "view_count":"718,780 views",
         "thumbnail":{
            "url":"https://i.ytimg.com/vi/dXdoim96v5A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBSzOjvO-0645gRSb8WezGKYSvUg",
            "width":720,
            "height":404
         },
         "moving_thumbnail":{
            "url":"https://i.ytimg.com/an_webp/dXdoim96v5A/mqdefault_6s.webp?du=3000&sqp=CKCO-48G&rs=AOn4CLArMCkZu073j8k_QRHCm_4IuB2Uyw",
            "width":320,
            "height":180
         },
         "published":"4 years ago",
         "badges":[
            
         ],
         "owner_badges":[
            "Verified"
         ]
      }
   },
   {
      "id":"AawLM81gIHo",
      "title":"playlist to study like a medieval philosopher having the truth revealed by divine grace",
      "channel":"Filosofia Acadêmica",
      "metadata":{
         "view_count":"3,182,206 views",
         "thumbnail":{
            "url":"https://i.ytimg.com/vi/AawLM81gIHo/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA_6jX1WlJ8JgjdzJ4vBdmajwkZmA",
            "width":480,
            "height":270
         },
         "moving_thumbnail":[
            
         ],
         "published":"4 months ago",
         "badges":[
            
         ],
         "owner_badges":[
            
         ]
      }
   },
   {
      "id":"ILyQ4A3ZYu8",
      "title":"LIGHTWEIGHT Mirrorless Macro Photography w/ 7Artisans 60mm f/2.8 mkII macro",
      "channel":"Thomas Shahan",
      "metadata":{
         "view_count":"26,594 views",
         "thumbnail":{
            "url":"https://i.ytimg.com/vi/ILyQ4A3ZYu8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYn-kG_hpBdu0BZ0QLeb9EdnkXfg",
            "width":720,
            "height":404
         },
         "moving_thumbnail":{
            "url":"https://i.ytimg.com/an_webp/ILyQ4A3ZYu8/mqdefault_6s.webp?du=3000&sqp=CMit-48G&rs=AOn4CLBdzzV12LamKVEyPdPUXeHqLwqOzg",
            "width":320,
            "height":180
         },
         "published":"5 months ago",
         "badges":[
            
         ],
         "owner_badges":[
            
         ]
      }
   },
   {
      "id":"8E2l4K0OvMc",
      "title":"Linkin Park & Eminem - Soldiers (2021) Official Music Video",
      "channel":"zwieR.Z.",
      "metadata":{
         "view_count":"2,949,402 views",
         "thumbnail":{
            "url":"https://i.ytimg.com/vi/8E2l4K0OvMc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAqJt07Iwc5IFmUv-HazVO9OZWzFw",
            "width":720,
            "height":404
         },
         "moving_thumbnail":[
            
         ],
         "published":"1 month ago",
         "badges":[
            
         ],
         "owner_badges":[
            "Verified"
         ]
      }
   },
   {
      "id":"XFqn3uy238E",
      "title":"...And We'll Do it Again",
      "channel":"Kurzgesagt – In a Nutshell",
      "metadata":{
         "view_count":"8,782,886 views",
         "thumbnail":{
            "url":"https://i.ytimg.com/vi/XFqn3uy238E/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATvhGBLlbbTmMV4aDwmsBRqlh3rQ",
            "width":720,
            "height":404
         },
         "moving_thumbnail":{
            "url":"https://i.ytimg.com/an_webp/XFqn3uy238E/mqdefault_6s.webp?du=3000&sqp=COGu-48G&rs=AOn4CLCghw3iwEHMhpOZU2Sd79eQAUZg9g",
            "width":320,
            "height":180
         },
         "published":"1 month ago",
         "badges":[
            
         ],
         "owner_badges":[
            "Verified"
         ]
      }
   },
   {
      "id":"Ks7mmrer37g",
      "title":"Using 5000 Minecarts to LAG a Pay-To-Win Server in Minecraft - Part 1",
      "channel":"The Horizon",
      "metadata":{
         "view_count":"3,351,437 views",
         "thumbnail":{
            "url":"https://i.ytimg.com/vi/Ks7mmrer37g/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA16Zi1QZ5YACpDMM0We5k5C6Cc0w",
            "width":720,
            "height":404
         },
         "moving_thumbnail":{
            "url":"https://i.ytimg.com/an_webp/Ks7mmrer37g/mqdefault_6s.webp?du=3000&sqp=COip-48G&rs=AOn4CLDY3tU8sodjfeSM61JtfSovZIcmww",
            "width":320,
            "height":180
         },
         "published":"13 days ago",
         "badges":[
            
         ],
         "owner_badges":[
            "Verified"
         ]
      }
   },
   {
      "id":"y7fMTCJaWjQ",
      "title":"2004 PC Power On",
      "channel":"hardrivethrutown",
      "metadata":{
         "view_count":"336,545 views",
         "thumbnail":{
            "url":"https://i.ytimg.com/vi/y7fMTCJaWjQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB2GeuZo6-IUkJKl6M0VYhtAowNqQ",
            "width":720,
            "height":404
         },
         "moving_thumbnail":{
            "url":"https://i.ytimg.com/an_webp/y7fMTCJaWjQ/mqdefault_6s.webp?du=3000&sqp=CKjB-48G&rs=AOn4CLAUUDj7VcH8uIysPlgcVZ7rx2AFaQ",
            "width":320,
            "height":180
         },
         "published":"1 month ago",
         "badges":[
            
         ],
         "owner_badges":[
            
         ]
      }
   },
   {
      "id":"oq2-RJH_3NE",
      "title":"What if we replace the Moon with other Space Objects?",
      "channel":"Sciencephile the AI",
      "metadata":{
         "view_count":"128,961 views",
         "thumbnail":{
            "url":"https://i.ytimg.com/vi/oq2-RJH_3NE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBuCNxw_LAFkvrGfnWZ5rI_fI2cuw",
            "width":720,
            "height":404
         },
         "moving_thumbnail":{
            "url":"https://i.ytimg.com/an_webp/oq2-RJH_3NE/mqdefault_6s.webp?du=3000&sqp=CNSk-48G&rs=AOn4CLAKV2gb8ZMH6_pEGroEC6FIZmyTjg",
            "width":320,
            "height":180
         },
         "published":"7 days ago",
         "badges":[
            
         ],
         "owner_badges":[
            "Verified"
         ]
      }
   },
   {
      "id":"pB-nGyqJMy0",
      "title":"for 4 years I thought PISSY was a boy ~ Maybe that’s why SHE’s always PISSED at me !!!",
      "channel":"Exotics Lair",
      "metadata":{
         "view_count":"974,222 views",
         "thumbnail":{
            "url":"https://i.ytimg.com/vi/pB-nGyqJMy0/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAf7vp-L054e_PSMrs5z_GSoIKC1w",
            "width":480,
            "height":270
         },
         "moving_thumbnail":{
            "url":"https://i.ytimg.com/an_webp/pB-nGyqJMy0/mqdefault_6s.webp?du=3000&sqp=CMqL-48G&rs=AOn4CLC-yzDWXwJo45NudEmzQBMQ_8nsNg",
            "width":320,
            "height":180
         },
         "published":"1 year ago",
         "badges":[
            
         ],
         "owner_badges":[
            "Verified"
         ]
      }
   },
   {
      "id":"RW4s2WtwoUY",
      "title":"This Is Why Crabs Hate Stingrays",
      "channel":"WATOP",
      "metadata":{
         "view_count":"4,329,223 views",
         "thumbnail":{
            "url":"https://i.ytimg.com/vi/RW4s2WtwoUY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD5iz1haM6niPfCZxeZFfublo_tPQ",
            "width":720,
            "height":404
         },
         "moving_thumbnail":{
            "url":"https://i.ytimg.com/an_webp/RW4s2WtwoUY/mqdefault_6s.webp?du=3000&sqp=CMS1-48G&rs=AOn4CLBkPjwEFtz6e6iNOpB13tWcuik4pw",
            "width":320,
            "height":180
         },
         "published":"8 months ago",
         "badges":[
            
         ],
         "owner_badges":[
            "Verified"
         ]
      }
   },
   {
      "id":"0wj8ueoUjt8",
      "title":"Rag’n’Bone Man & Calvin Harris - Giant (Live at BRITs 2019)",
      "channel":"Rag'n'Bone Man",
      "metadata":{
         "view_count":"5,636,727 views",
         "thumbnail":{
            "url":"https://i.ytimg.com/vi/0wj8ueoUjt8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDgmKnz4ilXGAdfU3zBBhZVPe9ERw",
            "width":720,
            "height":404
         },
         "moving_thumbnail":[
            
         ],
         "published":"2 years ago",
         "badges":[
            
         ],
         "owner_badges":[
            "Official Artist Channel"
         ]
      }
   }
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
   "today":[
      {
         "title":"Life As My P*nis",
         "id":"udDINILQH10",
         "channel":"penguinz0",
         "metadata":{
            "view_count":"220,432 views",
            "thumbnail":[
               {
                  "url":"https://i.ytimg.com/vi/udDINILQH10/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAQ7bbeUhCxRSg-g-CPek-soixUMQ",
                  "width":210,
                  "height":118
               },
               {
                  "url":"https://i.ytimg.com/vi/udDINILQH10/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB6fuvBJMeLtkM0TLkZwharsyojjA",
                  "width":246,
                  "height":138
               },
               {
                  "url":"https://i.ytimg.com/vi/udDINILQH10/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDd7BncH1QuZD-Hada_n6dAVRTnmg",
                  "width":336,
                  "height":188
               }
            ],
            "published":"2 hours ago",
            "badges":"N/A",
            "owner_badges":[
               "Verified"
            ]
         }
      },
      {
         "title":"Perseverance and Ingenuity went two weeks without contacting Earth",
         "id":"VsmYZMVCHuc",
         "channel":"Mars Guy",
         "metadata":{
            "view_count":"2,633 views",
            "thumbnail":[
               {
                  "url":"https://i.ytimg.com/vi/VsmYZMVCHuc/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA0-vwAgpFbMO1zG4HTzdHZey1kZQ",
                  "width":210,
                  "height":118
               },
               {
                  "url":"https://i.ytimg.com/vi/VsmYZMVCHuc/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBtM3W-RXsCfPnxgnrktaBkiL9zzg",
                  "width":246,
                  "height":138
               },
               {
                  "url":"https://i.ytimg.com/vi/VsmYZMVCHuc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDTil7At4FUVYeSNySOoFoKlPXWSA",
                  "width":336,
                  "height":188
               }
            ],
            "published":"15 hours ago",
            "badges":"N/A",
            "owner_badges":"N/A"
         }
      }
      //...
   ],
   "yesterday":[
      {
         "title":"Fortnite - S.T.A.R.S (Resident Evil) | PS5, PS4",
         "id":"-ZLEQOVbWD4",
         "channel":"PlayStation",
         "metadata":{
            "view_count":"157,197 views",
            "thumbnail":[
               {
                  "url":"https://i.ytimg.com/vi/-ZLEQOVbWD4/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAeA1fLzsEA0ZIouNJuMDJOqOc9Ng",
                  "width":210,
                  "height":118
               },
               {
                  "url":"https://i.ytimg.com/vi/-ZLEQOVbWD4/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDzvhxJ6m2ztykk2ezNH2Din33hEw",
                  "width":246,
                  "height":138
               },
               {
                  "url":"https://i.ytimg.com/vi/-ZLEQOVbWD4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDo67DvnaiKzOVfNm9lJg_Edd1UDQ",
                  "width":336,
                  "height":188
               }
            ],
            "published":"1 day ago",
            "badges":"N/A",
            "owner_badges":[
               "Verified"
            ]
         }
      },
      //...
   ],
   "this_week":[
      {
         "title":"Horrible $100 Million Gold Mansion",
         "id":"F-d3CEYJyrg",
         "channel":"penguinz0",
         "metadata":{
            "view_count":"693,041 views",
            "thumbnail":[
               {
                  "url":"https://i.ytimg.com/vi/F-d3CEYJyrg/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDdMMGG-50O4U5uIcoZ2FoiO6Mopg",
                  "width":210,
                  "height":118
               },
               {
                  "url":"https://i.ytimg.com/vi/F-d3CEYJyrg/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAwqMy1ekLaxWGnjWwCJl7z7Nw2aQ",
                  "width":246,
                  "height":138
               },
               {
                  "url":"https://i.ytimg.com/vi/F-d3CEYJyrg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLADaPBg0vh52e6clHvUf5otBZO9HA",
                  "width":336,
                  "height":188
               }
            ],
            "published":"2 days ago",
            "badges":"N/A",
            "owner_badges":[
               "Verified"
            ]
         }
      },
      {
         "title":"OOopsieeee",
         "id":"mJ2WOIhEPm8",
         "channel":"PewDiePie",
         "metadata":{
            "view_count":"1,953,970 views",
            "thumbnail":[
               {
                  "url":"https://i.ytimg.com/vi/mJ2WOIhEPm8/hqdefault.jpg?sqp=-oaymwEbCNIBEHZIVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCrJe2a6rasJICj_jchMquZ2YGVrQ",
                  "width":210,
                  "height":118
               },
               {
                  "url":"https://i.ytimg.com/vi/mJ2WOIhEPm8/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCpxERsiLJayuKegeb5mHw3Ok6wGA",
                  "width":246,
                  "height":138
               },
               {
                  "url":"https://i.ytimg.com/vi/mJ2WOIhEPm8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAlRLjypimzrE3GD_iGYDGwTlCGvA",
                  "width":336,
                  "height":188
               }
            ],
            "published":"2 days ago",
            "badges":"N/A",
            "owner_badges":[
               "Verified"
            ]
         }
      },
      //...
   ]
}
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
      "title":"PewDiePie uploaded: Spoiled Kids Needs To Be Stopped..",
      "sent_time":"2 hours ago",
      "channel_name":"PewDiePie",
      "channel_thumbnail":{
         "url":"https://yt3.ggpht.com/ytc/AKedOLTjRAMaQkJaABC59u63AB9s7UTyQ8enbSoo_TI8cA=s88-c-k-c0x00ffffff-no-rj",
         "width":96,
         "height":96
      },
      "video_thumbnail":{
         "url":"https://i.ytimg.com/vi/raspGsvKf48/hqdefault.jpg",
         "width":640,
         "height":360
      },
      "video_url":"https://youtu.be/raspGsvKf48",
      "read":false,
      "notification_id":"1633455444762970"
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

### Interactions:

---

* Subscribe/Unsubscribe:
```js
const video = await youtube.getDetails(VIDEO_ID_HERE);

await video.subscribe();
await video.unsubscribe();
```

* Like/Dislike:
```js
const video = await youtube.getDetails(VIDEO_ID_HERE);

await video.like();
await video.dislike();
await video.removeLike(); // removes either a like or dislike
```

* Comment:
```js
const video = await youtube.getDetails(VIDEO_ID_HERE);
await video.comment('Haha, nice!');
```

* Change notification preferences:
```js
const video = await youtube.getDetails(VIDEO_ID_HERE);

// Options: ALL | NONE | PERSONALIZED
await video.setNotificationPref('ALL'); 
```

All of the above interactions will return ```{ success: true, status_code: 200 }``` if everything goes alright.

### Fetching live chats:
---
YouTube.js isn't able to download live content yet, but it does allow you to fetch live chats plus you can also send messages!
```js
const Innertube = require('youtubei.js');

async function start() {
  const youtube = await new Innertube();

  const search = await youtube.search('Some random livestream');
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