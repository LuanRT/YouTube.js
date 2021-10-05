# YouTube.js

An object-oriented wrapper around the Innertube API, which is what YouTube itself uses. This makes YouTube.js fast, simple & efficient. And big thanks to [@gatecrasher777](https://github.com/gatecrasher777/ytcog) for his research on the workings of the Innertube API!

#### What can it do?

Well currently this library is able to: search, get detailed info about videos, subscribe/unsubscribe/like/dislike/comment and fetch video notifications (Cookies required). Last but not least, you can also download videos.

#### Do I need an API key to use this?

No, since it's basically what YouTube itself uses to populate its app/website no API keys are required.

## Installation

```bash
Soon.
```

## Usage
First of all we're gonna start by initializing the Innertube class:

```js
const Innertube = require('youtube.js');
const COOKIE = 'YT_COOKIE_HERE'; // Optional, but highly recommended

async function start() {
  const youtube = await new Innertube(COOKIE); 
  //...
}

start();
```

After this you should be good to go, so let's dive into it!

Doing a simple search:

```js
const search = await youtube.search('Looking for life on Mars - Documentary');
```

<details>
<summary>Output</summary>
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
      },
      {
         "title":"The Search For Life On Mars | Space Science Documentary 2019",
         "description":"The possibility of life on Mars is a subject of significant interest to astrobiology due to its proximity and similarities to ...",
         "author":"Biological Science",
         "id":"BCNRVfk2edw",
         "url":"https://youtu.be/BCNRVfk2edw",
         "channel_url":"https://www.youtube.com/channel/UCF2ipIbOaSw39RgT-wTL7Aw",
         "metadata":{
            "view_count":"7,197 views",
            "short_view_count_text":{
               "simple_text":"7.1K views",
               "accessibility_label":"7.1K views"
            },
            "thumbnails":[
               {
                  "url":"https://i.ytimg.com/vi/BCNRVfk2edw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDkfu4hnuuFv7CoWyGCH9WuKr7Abw",
                  "width":360,
                  "height":202
               },
               {
                  "url":"https://i.ytimg.com/vi/BCNRVfk2edw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDzffJrXYnCV3jjG2xsbP9FA6nUUg",
                  "width":720,
                  "height":404
               }
            ],
            "duration":{
               "seconds":3006,
               "simple_text":"50:06",
               "accessibility_label":"50 minutes, 6 seconds"
            },
            "published":"2 years ago",
            "badges":"N/A",
            "owner_badges":"N/A "
         }
      },
      {
         "title":"Is There Life on Mars | Space Documentary 2020 Full HD 1080p",
         "description":"Is There Life on Mars | Space Documentary 2020 Full HD 1080p Some of our friends at the Lakeview Museum of Arts and ...",
         "author":"TL Documentary",
         "id":"jR7ZB63VF5s",
         "url":"https://youtu.be/jR7ZB63VF5s",
         "channel_url":"https://www.youtube.com/channel/UCm_F-N7ZC8l_wpGLbUXTY1A",
         "metadata":{
            "view_count":"122,195 views",
            "short_view_count_text":{
               "simple_text":"122K views",
               "accessibility_label":"122K views"
            },
            "thumbnails":[
               {
                  "url":"https://i.ytimg.com/vi/jR7ZB63VF5s/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIie5XOCknLvm8Raw6Rmo6vOVjgw",
                  "width":360,
                  "height":202
               },
               {
                  "url":"https://i.ytimg.com/vi/jR7ZB63VF5s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDW1-VZFHJgWuNELAHXwHAugan9OA",
                  "width":720,
                  "height":404
               }
            ],
            "duration":{
               "seconds":3356,
               "simple_text":"55:56",
               "accessibility_label":"55 minutes, 56 seconds"
            },
            "published":"1 year ago",
            "badges":"N/A",
            "owner_badges":"N/A "
         }
      },
      {
         "title":"Space Isn't What You Think It Is - Space Documentary",
         "description":"Buy us a coffee! buymeacoffee.com/factnomenal Deep space discoveries and space facts all in one stream! This space ...",
         "author":"Factnomenal",
         "id":"bMa2QI64uhA",
         "url":"https://youtu.be/bMa2QI64uhA",
         "channel_url":"https://www.youtube.com/channel/UC1pUFgoqKqy_sfzF0_rtQzQ",
         "metadata":{
            "short_view_count_text":{
               "accessibility_label":"N/A"
            },
            "thumbnails":[
               {
                  "url":"https://i.ytimg.com/vi/bMa2QI64uhA/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDv3Oh_IeyTYGEbINgNTSJbzEqlfQ",
                  "width":480,
                  "height":270
               }
            ],
            "duration":{
               "seconds":0,
               "simple_text":"N/A",
               "accessibility_label":"N/A"
            },
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
         "title":"History's Mysteries - The Search For Life on Mars (History Channel Documentary)",
         "description":"Narrated by David Ackroyd.",
         "author":"Alien Documentary",
         "id":"ZzR7YgxTLns",
         "url":"https://youtu.be/ZzR7YgxTLns",
         "channel_url":"https://www.youtube.com/channel/UCSnoNN2uMUuU52zNLwLAFTg",
         "metadata":{
            "view_count":"935 views",
            "short_view_count_text":{
               "simple_text":"935 views",
               "accessibility_label":"935 views"
            },
            "thumbnails":[
               {
                  "url":"https://i.ytimg.com/vi/ZzR7YgxTLns/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBBGqBoXlPNqq3sZN8ZfYgy3oJvHA",
                  "width":480,
                  "height":270
               }
            ],
            "duration":{
               "seconds":2526,
               "simple_text":"42:06",
               "accessibility_label":"42 minutes, 6 seconds"
            },
            "published":"1 year ago",
            "badges":"N/A",
            "owner_badges":"N/A "
         }
      },
      {
         "title":"Mars Making the New Earth | Full Documentary",
         "description":"In National Geographic Channel's “Mars: Making the New Earth”, award winning writer/producer Mark Davis and legendary Mars ...",
         "author":"space and astronomy",
         "id":"_50N5QoQoc4",
         "url":"https://youtu.be/_50N5QoQoc4",
         "channel_url":"https://www.youtube.com/channel/UC1-7mA0mKsCTyCMG4JNO3EQ",
         "metadata":{
            "view_count":"6,414,888 views",
            "short_view_count_text":{
               "simple_text":"6.4M views",
               "accessibility_label":"6.4 million views"
            },
            "thumbnails":[
               {
                  "url":"https://i.ytimg.com/vi/_50N5QoQoc4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBOZEjjn2hydUIxl5VnNr7JLoaEtg",
                  "width":360,
                  "height":202
               },
               {
                  "url":"https://i.ytimg.com/vi/_50N5QoQoc4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAL7FaRfHi6rYjIgd8U2YGWN7C87Q",
                  "width":720,
                  "height":404
               }
            ],
            "duration":{
               "seconds":3001,
               "simple_text":"50:01",
               "accessibility_label":"50 minutes, 1 second"
            },
            "published":"4 years ago",
            "badges":"N/A",
            "owner_badges":[
               "Verified"
            ]
         }
      },
      {
         "title":"NASA Searching for Signs of Ancient Life on Mars with Perseverance Rover Launch",
         "description":"According to NASA, the Perseverance rover will seek signs of ancient life and collect rock and soil samples for possible return to ...",
         "author":"Curiosity Stream",
         "id":"E1xiWgMX2xQ",
         "url":"https://youtu.be/E1xiWgMX2xQ",
         "channel_url":"https://www.youtube.com/channel/UCd7zlpSjvUuUwsQdqV3LF3w",
         "metadata":{
            "view_count":"24,042 views",
            "short_view_count_text":{
               "simple_text":"24K views",
               "accessibility_label":"24K views"
            },
            "thumbnails":[
               {
                  "url":"https://i.ytimg.com/vi/E1xiWgMX2xQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDqIaqzfBlb1XdOpaGggB2rfarCfw",
                  "width":360,
                  "height":202
               },
               {
                  "url":"https://i.ytimg.com/vi/E1xiWgMX2xQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDiGXMnhlKDamCUo1eMDDVL8G1csQ",
                  "width":720,
                  "height":404
               }
            ],
            "duration":{
               "seconds":1413,
               "simple_text":"23:33",
               "accessibility_label":"23 minutes, 33 seconds"
            },
            "published":"1 year ago",
            "badges":"N/A",
            "owner_badges":"N/A "
         }
      },
      {
         "title":"Searching for Life on Mars - KQED QUEST",
         "description":"After multiple unmanned missions to Mars, we still don't know if life has ever existed there. NASA scientists are hoping a new ...",
         "author":"KQED",
         "id":"iV5S1OSmYns",
         "url":"https://youtu.be/iV5S1OSmYns",
         "channel_url":"https://www.youtube.com/user/KQEDondemand",
         "metadata":{
            "view_count":"9,113 views",
            "short_view_count_text":{
               "simple_text":"9.1K views",
               "accessibility_label":"9.1K views"
            },
            "thumbnails":[
               {
                  "url":"https://i.ytimg.com/vi/iV5S1OSmYns/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB3SX8N5ovnFz57XyirGN1mXt2xMg",
                  "width":480,
                  "height":270
               }
            ],
            "duration":{
               "seconds":602,
               "simple_text":"10:02",
               "accessibility_label":"10 minutes, 2 seconds"
            },
            "published":"10 years ago",
            "badges":"N/A",
            "owner_badges":[
               "Verified"
            ]
         }
      },
      {
         "title":"Searching for Life on Mars",
         "description":"On August 2012, the one-ton NASA Curiosity rover descended onto a massive crater on Mars. Since its landing, the Curiosity ...",
         "author":"KQED QUEST",
         "id":"LHMQyQ_YwL8",
         "url":"https://youtu.be/LHMQyQ_YwL8",
         "channel_url":"https://www.youtube.com/user/QUESTScienceMedia",
         "metadata":{
            "view_count":"7,204 views",
            "short_view_count_text":{
               "simple_text":"7.2K views",
               "accessibility_label":"7.2K views"
            },
            "thumbnails":[
               {
                  "url":"https://i.ytimg.com/vi/LHMQyQ_YwL8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDMpYDrGTMNh1S1LtJEVSqcr2Rprw",
                  "width":360,
                  "height":202
               },
               {
                  "url":"https://i.ytimg.com/vi/LHMQyQ_YwL8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBP23wWbq0mhq3uxYuatHBdKS79GA",
                  "width":720,
                  "height":404
               }
            ],
            "duration":{
               "seconds":443,
               "simple_text":"7:23",
               "accessibility_label":"7 minutes, 23 seconds"
            },
            "published":"6 years ago",
            "badges":[
               "CC"
            ],
            "owner_badges":"N/A "
         }
      },
      {
         "title":"Promo: NOVA: Looking for Life on Mars",
         "description":"N/A",
         "author":"WOSU Public Media",
         "id":"Osl1VlikjBM",
         "url":"https://youtu.be/Osl1VlikjBM",
         "channel_url":"https://www.youtube.com/user/WOSUColumbus",
         "metadata":{
            "view_count":"971 views",
            "short_view_count_text":{
               "simple_text":"971 views",
               "accessibility_label":"971 views"
            },
            "thumbnails":[
               {
                  "url":"https://i.ytimg.com/vi/Osl1VlikjBM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCAggkvbtQPhtWPbwZgfvD-f-tWdQ",
                  "width":360,
                  "height":202
               },
               {
                  "url":"https://i.ytimg.com/vi/Osl1VlikjBM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDwab8LaEP-09ObvzKbno49nNpeBQ",
                  "width":720,
                  "height":404
               }
            ],
            "duration":{
               "seconds":31,
               "simple_text":"0:31",
               "accessibility_label":"31 seconds"
            },
            "published":"7 months ago",
            "badges":"N/A",
            "owner_badges":"N/A "
         }
      },
      {
         "title":"David Bowie – Life On Mars? (Official Video)",
         "description":"Official video for Life On Mars? by David Bowie. Stream David Bowie's greatest hits here ...",
         "author":"David Bowie",
         "id":"AZKcl4-tcuo",
         "url":"https://youtu.be/AZKcl4-tcuo",
         "channel_url":"https://www.youtube.com/channel/UC8YgWcDKi1rLbQ1OtrOHeDw",
         "metadata":{
            "view_count":"32,825,957 views",
            "short_view_count_text":{
               "simple_text":"32M views",
               "accessibility_label":"32 million views"
            },
            "thumbnails":[
               {
                  "url":"https://i.ytimg.com/vi/AZKcl4-tcuo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA0e_NS5xIi1mWV_pxKTQL478S7Pw",
                  "width":360,
                  "height":202
               },
               {
                  "url":"https://i.ytimg.com/vi/AZKcl4-tcuo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCb60te4rgCzCatEhZKV6Kc7Q6Xig",
                  "width":720,
                  "height":404
               }
            ],
            "duration":{
               "seconds":250,
               "simple_text":"4:10",
               "accessibility_label":"4 minutes, 10 seconds"
            },
            "published":"6 years ago",
            "badges":"N/A",
            "owner_badges":[
               "Official Artist Channel"
            ]
         }
      },
      {
         "title":"Looking for Life on Mars",
         "description":"One of the primary goals of the Mars Perseverance Rover is to look for life on the red planet. Learn about how they are going to do ...",
         "author":"Smithsonian National Air and Space Museum",
         "id":"WrVrPi_TeaM",
         "url":"https://youtu.be/WrVrPi_TeaM",
         "channel_url":"https://www.youtube.com/user/airandspace",
         "metadata":{
            "view_count":"390 views",
            "short_view_count_text":{
               "simple_text":"390 views",
               "accessibility_label":"390 views"
            },
            "thumbnails":[
               {
                  "url":"https://i.ytimg.com/vi/WrVrPi_TeaM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD9cZWMCOYAxIptsQHlOSsV2OK1Yg",
                  "width":360,
                  "height":202
               },
               {
                  "url":"https://i.ytimg.com/vi/WrVrPi_TeaM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAHmQWVCCYxcQ6qIqj9OMDS-qeyPQ",
                  "width":720,
                  "height":404
               }
            ],
            "duration":{
               "seconds":254,
               "simple_text":"4:14",
               "accessibility_label":"4 minutes, 14 seconds"
            },
            "published":"8 months ago",
            "badges":[
               "CC"
            ],
            "owner_badges":[
               "Verified"
            ]
         }
      },
      {
         "title":"Disney's Tomorrowland - Life on Mars [SCARY VERSION]",
         "description":"Science fiction bleeds into science fact with Disney's realistic look at life on Mars and beyond. A truly beautiful piece of lost ...",
         "author":"Laser Time",
         "id":"mQ-T5VEueW0",
         "url":"https://youtu.be/mQ-T5VEueW0",
         "channel_url":"https://www.youtube.com/user/LaserTimeNetwork",
         "metadata":{
            "view_count":"52,346 views",
            "short_view_count_text":{
               "simple_text":"52K views",
               "accessibility_label":"52K views"
            },
            "thumbnails":[
               {
                  "url":"https://i.ytimg.com/vi/mQ-T5VEueW0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDyC9Zm6CfRnh0kvpFHI8TawmKvcg",
                  "width":360,
                  "height":202
               },
               {
                  "url":"https://i.ytimg.com/vi/mQ-T5VEueW0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCkiB-XL_1l5MS5Xc9lwt2gnw3s-A",
                  "width":720,
                  "height":404
               }
            ],
            "duration":{
               "seconds":285,
               "simple_text":"4:45",
               "accessibility_label":"4 minutes, 45 seconds"
            },
            "published":"6 years ago",
            "badges":"N/A",
            "owner_badges":"N/A "
         }
      },
      {
         "title":"Looking for Life on Mars",
         "description":"Mars has changed since it formed 4.6 billion years ago. When life started on Earth ~4 billion years ago, Mars was habitable too, ...",
         "author":"Gresham College",
         "id":"ymQfqE3L09w",
         "url":"https://youtu.be/ymQfqE3L09w",
         "channel_url":"https://www.youtube.com/user/GreshamCollege",
         "metadata":{
            "view_count":"3,493 views",
            "short_view_count_text":{
               "simple_text":"3.4K views",
               "accessibility_label":"3.4K views"
            },
            "thumbnails":[
               {
                  "url":"https://i.ytimg.com/vi/ymQfqE3L09w/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC8gNkm5OTBZs8xqeVdu9i5nyFvZA",
                  "width":360,
                  "height":202
               },
               {
                  "url":"https://i.ytimg.com/vi/ymQfqE3L09w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBOmozAYVQ9t8i1tm3p168W4GFN5A",
                  "width":720,
                  "height":404
               }
            ],
            "duration":{
               "seconds":3632,
               "simple_text":"1:00:32",
               "accessibility_label":"1 hour, 32 seconds"
            },
            "published":"11 months ago",
            "badges":[
               "CC"
            ],
            "owner_badges":[
               "Verified"
            ]
         }
      },
      {
         "title":"MARS: The Search Begins (1974) -  NASA Documentary - Carl Sagan, Life on Mars",
         "description":"NASA documentary about the 1970's hopes for life on Mars and the (then) future Viking missions to search for it. The Mariner ...",
         "author":"Retro Space HD",
         "id":"zMTZ0nKMfdQ",
         "url":"https://youtu.be/zMTZ0nKMfdQ",
         "channel_url":"https://www.youtube.com/channel/UCZJgMAoS30yYoLOYUe_lAXQ",
         "metadata":{
            "view_count":"753 views",
            "short_view_count_text":{
               "simple_text":"753 views",
               "accessibility_label":"753 views"
            },
            "thumbnails":[
               {
                  "url":"https://i.ytimg.com/vi/zMTZ0nKMfdQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD8u3eXdHt-JTMhIipL6xc9NLKnqw",
                  "width":360,
                  "height":202
               },
               {
                  "url":"https://i.ytimg.com/vi/zMTZ0nKMfdQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDeg8_cb41r6RmnT8Lw-rcTt6JXLw",
                  "width":720,
                  "height":404
               }
            ],
            "duration":{
               "seconds":1726,
               "simple_text":"28:46",
               "accessibility_label":"28 minutes, 46 seconds"
            },
            "published":"1 year ago",
            "badges":"N/A",
            "owner_badges":"N/A "
         }
      },
      {
         "title":"Journey to the  Mars | Space Documentary | Mars documentary",
         "description":"Journey to the #Mars | #Space #Documentary #Marsdocumentary space brothers documentary space documentary channel 4 ...",
         "author":"Rovin karki",
         "id":"bz7JS_OPIOs",
         "url":"https://youtu.be/bz7JS_OPIOs",
         "channel_url":"https://www.youtube.com/channel/UC6EEJgTVlfIXPVfNnCTHpjQ",
         "metadata":{
            "view_count":"12,746 views",
            "short_view_count_text":{
               "simple_text":"12K views",
               "accessibility_label":"12K views"
            },
            "thumbnails":[
               {
                  "url":"https://i.ytimg.com/vi/bz7JS_OPIOs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA7PcjRkokQcFnVVzpzck2mg_Yr4g",
                  "width":360,
                  "height":202
               },
               {
                  "url":"https://i.ytimg.com/vi/bz7JS_OPIOs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCUKTTUao4CcYdfnK6ZbGi9eCifKQ",
                  "width":720,
                  "height":404
               }
            ],
            "duration":{
               "seconds":3001,
               "simple_text":"50:01",
               "accessibility_label":"50 minutes, 1 second"
            },
            "published":"8 months ago",
            "badges":"N/A",
            "owner_badges":"N/A "
         }
      },
      {
         "title":"Mars Pioneers | Space Documentary 2020 Full HD 1080p",
         "description":"Mars Pioneers | Space Documentary 2020 Full HD 1080p This film captures the spirit of Mars pioneers who refuse to let their ...",
         "author":"TL Documentary",
         "id":"cPpPKriqR1Y",
         "url":"https://youtu.be/cPpPKriqR1Y",
         "channel_url":"https://www.youtube.com/channel/UCm_F-N7ZC8l_wpGLbUXTY1A",
         "metadata":{
            "view_count":"19,998 views",
            "short_view_count_text":{
               "simple_text":"19K views",
               "accessibility_label":"19K views"
            },
            "thumbnails":[
               {
                  "url":"https://i.ytimg.com/vi/cPpPKriqR1Y/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB3k4zBaar5byu-eQI-p8leg6TWAw",
                  "width":360,
                  "height":202
               },
               {
                  "url":"https://i.ytimg.com/vi/cPpPKriqR1Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDDmBNYLntlnb-LcZlWACftp168Sg",
                  "width":720,
                  "height":404
               }
            ],
            "duration":{
               "seconds":4406,
               "simple_text":"1:13:26",
               "accessibility_label":"1 hour, 13 minutes, 26 seconds"
            },
            "published":"1 year ago",
            "badges":"N/A",
            "owner_badges":"N/A "
         }
      },
      {
         "title":"The Search for Life and Water on Mars | Space documentary",
         "description":"Since the dawn of the space age, several probes have been sent to the Red Planet, providing interesting facts and stunning ...",
         "author":"Sven Piper",
         "id":"A1aW02SMl_Q",
         "url":"https://youtu.be/A1aW02SMl_Q",
         "channel_url":"https://www.youtube.com/channel/UCapd-epIfx73sgVRLiu0kdQ",
         "metadata":{
            "view_count":"8,528 views",
            "short_view_count_text":{
               "simple_text":"8.5K views",
               "accessibility_label":"8.5K views"
            },
            "thumbnails":[
               {
                  "url":"https://i.ytimg.com/vi/A1aW02SMl_Q/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDzef7tTDKqI1H_yK4Zud67A4XoZw",
                  "width":360,
                  "height":202
               },
               {
                  "url":"https://i.ytimg.com/vi/A1aW02SMl_Q/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBmIdJlTV0j8H4P6OMSRv4-nlBCpg",
                  "width":720,
                  "height":404
               }
            ],
            "duration":{
               "seconds":421,
               "simple_text":"7:01",
               "accessibility_label":"7 minutes, 1 second"
            },
            "published":"11 months ago",
            "badges":[
               "4K",
               "CC"
            ],
            "owner_badges":"N/A "
         }
      },
      {
         "title":"Life on Mars Planet",
         "description":"From \"Cosmic Capers (1957)\" documentary. Directed by Ward Kimball and narrated by Paul Frees, made in 1957. This video is a ...",
         "author":"Leandro Machado Rocha",
         "id":"SQJ8loydnlA",
         "url":"https://youtu.be/SQJ8loydnlA",
         "channel_url":"https://www.youtube.com/user/lemaro1977",
         "metadata":{
            "view_count":"89,295 views",
            "short_view_count_text":{
               "simple_text":"89K views",
               "accessibility_label":"89K views"
            },
            "thumbnails":[
               {
                  "url":"https://i.ytimg.com/vi/SQJ8loydnlA/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCguSQHRYzEmVcQex3hunct2FNRbQ",
                  "width":480,
                  "height":270
               }
            ],
            "duration":{
               "seconds":285,
               "simple_text":"4:45",
               "accessibility_label":"4 minutes, 45 seconds"
            },
            "published":"13 years ago",
            "badges":"N/A",
            "owner_badges":"N/A "
         }
      },
      {
         "title":"Is there Life on Mars HD",
         "description":"N/A",
         "author":"Star Stuff",
         "id":"tPzlY5F1ejI",
         "url":"https://youtu.be/tPzlY5F1ejI",
         "channel_url":"https://www.youtube.com/user/thewonderroad",
         "metadata":{
            "view_count":"66,903 views",
            "short_view_count_text":{
               "simple_text":"66K views",
               "accessibility_label":"66K views"
            },
            "thumbnails":[
               {
                  "url":"https://i.ytimg.com/vi/tPzlY5F1ejI/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAr_y4W-jnZKHT8e4EHmB1y5lLmjA",
                  "width":480,
                  "height":270
               }
            ],
            "duration":{
               "seconds":3020,
               "simple_text":"50:20",
               "accessibility_label":"50 minutes, 20 seconds"
            },
            "published":"7 years ago",
            "badges":"N/A",
            "owner_badges":"N/A "
         }
      }
   ]
}
```

</p>
</details> 

Getting details about a specific video:

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


Fetching notifications:

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

### Interactions:

* Subscribing/Unsubscribing to channels:
```js
const video = await youtube.getDetails(VIDEO_ID_HERE); // this is equivalent to opening the watch page on YouTube

await video.subscribe();
await video.unsubscribe();
```

* Liking/Disliking:
```js
const video = await youtube.getDetails(VIDEO_ID_HERE); // this is equivalent to opening the watch page on YouTube

await video.like();
await video.dislike();
await video.removeLike(); // removes either a like or dislike
```

* Commenting:
```js
const video = await youtube.getDetails(VIDEO_ID_HERE);
await video.comment('Haha, nice!');
```

All of the interactions above will return ```{ success: true, status_code: 200 }``` if everything goes alright.

### Downloading videos:

```js
const fs = require('fs');
const Innertube = require('youtube.js');
const COOKIE = 'YT_COOKIE_HERE'; 

async function start() {
  const youtube = await new Innertube(COOKIE);
  const search = await youtube.search('Looking for life on Mars - documentary');
  const stream = youtube.download(search.videos[0].id, {
    format: 'mp4', // Optional, ignored when type is set to audio and defaults to mp4, and I recommend to leave it as it is
    quality: '360p', // if a video doesn't have a specific quality it'll fall back to 360p, this is ignored when type is set to audio
    type: 'videoandaudio' // can be “video”, “audio” and “videoandaudio”
  });
  
  stream.pipe(fs.createWriteStream(`./${search.videos[0].title}.mp4`));
 
  stream.on('start', () => {
    console.info('[DOWNLOADER]', 'Starting download now!');
  });
  
  stream.on('info', (info) => {
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

Cancelling a download:
```js
stream.cancel();
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