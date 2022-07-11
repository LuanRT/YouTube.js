# Parser

Sanitizes and standardizes InnerTube responses while maintaining the integrity of the data. Also [drastically improves](https://github.com/LuanRT/YouTube.js/blob/main/lib/parser/youtube/Library.js#L44) how API calls are made and handled. 

## API

* Parser
  * [.parse](#parse) ⇒ `function`
  * [.parseResponse](#parseresponse) ⇒ `function`

<a name="parse"></a>
#### parse(data)

Responsible for parsing specifically the `contents` property of the response object.

| Param | Type | Description |
| --- | --- | --- |
| data | `object` | The contents property |

**Returns:** `object`

<a name="parseresponse"></a>
#### parseResponse(data)

Unlike `parse`, this can be used to parse the entire response object.

| Param | Type | Description |
| --- | --- | --- |
| data | `object` | Raw InnerTube response |

**Returns:** `object`

## How it works

If you decompile a YouTube client and analize it for a while you will notice that it has classes named `protos/youtube/api/innertube/MusicItemRenderer`, `protos/youtube/api/innertube/SectionListRenderer`, etc. 

These classes are used to parse objects from the response (which consists of protobuf messages) and also build requests. The website works in a similar way, the difference is that it uses plain JSON (likely converted from protobuf server-side, hence the weird structure of the response).

Here we're taking a similar approach, the parser goes through all the renderers and parses their inner element(s). The final result is a nicely structured JSON, and on top of that it also parses navigation endpoints which allows us to make an API call with all required parameters in one line and even emulate client actions (eg; clicking a button).

Here is your average, arguably ugly InnerTube response:
<details>
<summary>Click to see</summary>
<p>

```js
{
  sidebar: {
    playlistSidebarRenderer: {
      items: [
        {
          playlistSidebarPrimaryInfoRenderer: {
            title: {
              simpleText: '..'
            },
            description: {
              runs: [
                {
                  text: '..'
                },
                //....
              ]
            },
            stats: [
              {
                simpleText: '..'
              },
              {
                runs: [
                  {
                    text: '..'
                  }
                ]
              }
            ]
          }
        }
      ]
    }
  }
}
```

</p>
</details> 

And what we get after parsing it:
<details>
<summary>Click to see</summary>
<p>

```js
{
  sidebar: {
    type: 'PlaylistSidebar',
    contents: [
      {
        type: 'PlaylistSidebarPrimaryInfo',
        title: { text: '..' },
        description: { text: '..' },
        stats: [
          {
            text: '..'
          },
          {
            text: '..'
          }
        ]
      }
    ]
  }
}
```

</p>
</details> 