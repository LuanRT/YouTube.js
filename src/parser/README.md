# Parser

Sanitizes and standardizes InnerTube responses while maintaining the integrity of the data. 

Structure:

* [`/classes`](https://github.com/LuanRT/YouTube.js/blob/main/src/parser/classes) - InnerTube nodes.
* [`/types`](https://github.com/LuanRT/YouTube.js/blob/main/src/parser/types) - General response types.
* [`/youtube`](https://github.com/LuanRT/YouTube.js/blob/main/src/parser/youtube) - Contains the logic for parsing YouTube responses.
* [`/ytmusic`](https://github.com/LuanRT/YouTube.js/blob/main/src/parser/ytmusic) - Contains the logic for parsing YouTube Music responses.
* [`/ytkids`](https://github.com/LuanRT/YouTube.js/blob/main/src/parser/ytkids) - Contains the logic for parsing YouTube Kids responses.
* [`helpers.ts`](https://github.com/LuanRT/YouTube.js/blob/main/src/parser/helpers.ts) - Helper functions/classes for the parser.
* [`parser.ts`](https://github.com/LuanRT/YouTube.js/blob/main/src/parser/parser.ts) - The core of the parser.
* [`map.ts`](https://github.com/LuanRT/YouTube.js/blob/main/src/parser/map.ts) - A list of all InnerTube nodes, it is used to determine which node to use for a given renderer. Note that this file is auto-generated and should not be edited manually.

## Table of Contents

<ol>
  <li>
    <a href="#api">API</a>
  </li>
  <li>
    <a href="#usage">Usage</a>
    <ul>
      <li><a href="#observedarray">ObservedArray</a></li>
      <li><a href="#superparsedresponse">SuperParsedResponse</a></li>
      <li><a href="#ytnode">YTNode</a></li>
      <li><a href="#memo">Memo</a></li>
    </ul>
  </li>
  <li><a href="#adding-new-nodes">Adding new nodes</a></li>
  <li><a href="#generating-nodes-at-runtime">Generating nodes at runtime</a></li>
  <li><a href="#how-it-works">How it works</a></li>
</ol>

___

## API

* Parser
  * [.parse](#parse)
  * [.parseItem](#parse)
  * [.parseArray](#parse)
  * [.parseResponse](#parseresponse) 

<a name="parse"></a>

#### parse(data, requireArray, validTypes)

Responsible for parsing individual nodes.

| Param | Type | Description |
| --- | --- | --- |
| data | `any` | The data |
| requireArray | `?boolean` | Whether the response should be an array |
| validTypes | `YTNodeConstructor<T> \| YTNodeConstructor<T>[] \| undefined` | Types of `YTNode` allowed |

When `requireArray` is `true`, the response will be an `ObservedArray<YTNodes>`.

When `validTypes` is `undefined`, the response will be an array of YTNodes.

When `validTypes` is an array, the response will be an array of YTNodes that are of the types specified in the array.

When `validTypes` is a single type, the response will be an array of YTNodes that are of the type specified.

If you do not specify `requireArray`, the return type of the function will not be known at runtime, and therefore we return the response wrapped in a helper, `SuperParsedResponse`, to gain access to the response.

You may use the `Parser#parseArray` and `Parser#parseItem` methods to parse the response in a deterministic way.

<a name="parseresponse"></a>
#### parseResponse(data)

Unlike `parse`, this can be used to parse the entire response object.

| Param | Type | Description |
| --- | --- | --- |
| data | `object` | Raw InnerTube response |

## Usage

## ObservedArray
You may use `ObservedArray<T extends YTNode>` as a normal array, but it provides additional methods for typesafe access and casting.

```ts
// For example, we have a feed, and want all the videos:
const feed = new ObservedArray<YTNode>([...feed.contents]);
const videos = feed.filterType(GridVideo);
// This is now a GridVideo[]

// Or we want only the first video:
const firstVideo = feed.firstOfType(GridVideo);

// We may cast the whole array to a GridVideo[] and throw if we have any non-GridVideo elements:
const allVideos = feed.as(GridVideo);

// There are some extra methods for ObservedArray<T extends YTNode>
// which we use internally but not documented here (yet).
// see the source code for more details.
```

## SuperParsedResponse
Represents a parsed response in an unknown state. Either a `YTNode` or an `ObservedArray<YTNode>` or `null`.

You will need to assert the type and unwrap the response to get the actual value.

```ts
// We can assert we have a YTNode:
const response = Parser.parse(data);
if (response.is_item) {
  const node = response.item();
}

// We can assert we have an ObservedArray<YTNode>:
const response = Parser.parse(data);
if (response.is_array) {
  const nodes = response.array();
}

// Or lastly a null response:
const response = Parser.parse(data);
const is_null = response.is_null;
```

## YTNode
All renderers returned by InnerTube are converted to this generic class and then extended for the specific renderers.

This class is what allows us a typesafe way to use data returned by the InnerTube API.

Here's how to use this class to access returned data:

### Type Casting
```ts
// We can cast a YTNode to a child class of YTNode
const results = node.as(TwoColumnSearchResults);
// This will throw if the node is not a TwoColumnSearchResults
// We thus may want to check for the type of the node before casting
if (node.is(TwoColumnSearchResults)) {
  // We do not need to recast the node, it is already a TwoColumnSearchResults after calling is() and using it in the branch where is() returns true
  const results = node;
}

// Sometimes we can expect multiple types of nodes, we can just pass all possible types as params.
const results = node.as(TwoColumnSearchResults, VideoList);
// The type of `results` will now be `TwoColumnSearchResults | VideoList`

// Similarly, we can check if the node is of a certain type.
if (node.is(TwoColumnSearchResults, VideoList)) {
  // Again no casting is needed, the node is already of the correct type.
  const results = node;
}
```

### Accessing properties without casting
Sometimes multiple nodes have the same properties and we don't want to check the type of the node before accessing the property, for example, the property "contents" is used by many node types, and we may add more in the future, as such we want to only assert the property instead of casting to a specific type.

```ts
// Accessing a property on a node which you aren't sure if it exists.
const prop = node.key("contents");
// This returns the value wrapped into a `Maybe` type
// which you can use to find the type of the value
// note, however, this throws an error if the key doesn't exist
// we may want to check for the key before accessing it.
if (node.hasKey("contents")) {
  const prop = node.key("contents");
}

// We can assert the type of the value.
const prop = node.key("contents");
if (prop.isString()) {
  const value = prop.string();
}

// We can do more complex assertions too,
// like checking for instanceof.
const prop = node.key("contents");
if (prop.isInstanceof(Text)) {
  const text = prop.instanceof(Text);
  // and then use the value as the given type
  text.runs.forEach(run => {
    console.log(run.text);
  });
}

// There are some special methods for using with the parser —
// such as getting the value as a YTNode.
const prop = node.key("contents");
if (prop.isNode()) {
  const node = prop.node();
}

// Like with YTNode, keys can also be checked for YTNode child class types.
const prop = node.key("contents");
if (prop.isNodeOfType(TwoColumnSearchResults)) {
  const results = prop.nodeOfType(TwoColumnSearchResults);
}

// Or we can check for multiple types of nodes.
const prop = node.key("contents");
if (prop.isNodeOfType([TwoColumnSearchResults, VideoList])) {
  const results = prop.nodeOfType<TwoColumnSearchResults | VideoList>([TwoColumnSearchResults, VideoList]);
}

// Sometimes an ObservedArray is returned when working with parsed data.
// We've got a helper for that too;
const prop = node.key("contents");
if (prop.isObserved()) {
  const array = prop.observed();

  // Now we may use all the ObservedArray methods as normal,
  // like finding nodes of a certain type for example.
  const results = array.filterType(GridVideo);
}

// Other times a SuperParsedResult is returned, like when using the `Parser#parse` method.
const prop = node.key("contents");
if (prop.isParsed()) {
  const result = prop.parsed();

  // SuperParsedResult is another helper for typesafe access to the parsed data,
  // it is explained above with the `Parser#parse` method.
  const results = results.array();
  const videos = results.filterType(Video);
}

// Sometimes we just want to debug something and are not interested in finding the type.
// This will, however, warn you when being used.
const prop = node.key("contents");
const value = prop.any();

// Arrays are also a special case as every element may be of a different type,
// the `arrayOfMaybe` method will return an array of `Maybe`s.
const prop = node.key("contents");
if (prop.isArray()) {
  const array = prop.arrayOfMaybe(); 
  // This will return Maybe[]
}

// Or if you want zero type safety you can use the `array` method.
const prop = node.key("contents");
if (prop.isArray()) {
  const array = prop.array();
  // This will return any[]
}
```

## Memo
The `Memo` class is a helper class for memoizing values in the `Parser#parseResponse` method. It is useful for finding nodes after parsing the response.

Say we want all of the videos in a search result. We can use the `Memo` to find all of them quickly without recursing through the response.

```ts
const response = Parser.parseResponse(data);
const videos = response.contents_memo.getType(Video);
// This returns the nodes as a ObservedArray<Video>.
```

`Memo` extends `Map<string, YTNode[]>` and can be used as a normal `Map` too if you want.

## Adding new nodes
Instructions can be found [here](https://github.com/LuanRT/YouTube.js/blob/main/docs/updating-the-parser.md).

## Generating nodes at runtime
YouTube constantly updates their client, and sometimes they add new nodes to the response. The parser needs to know about these new nodes in order to parse them correctly. Once a new node is dicovered by the parser, it will attempt to generate a new node class for it.

Using our existing `YTNode` class, you may interact with these new nodes in a type-safe way, however will not be able to cast them to the node's specific type, as this requires the node to be defined at compile-time.

The current implementation recognises the following values:
- Renderers
- Renderer arrays
- Text
- Navigation endpoints
- Author (does not currently detect the author thumbnails)
- Thumbnails
- Objects (key-value pairs)
- Primatives (string, number, boolean, etc.)

This may be expanded in the future.

At runtime, these JIT generated nodes will revalidate themselves when constructed, so that when the types changes, the node will be re-generated.

You may also generate your own nodes ahead of time, given you have an example of one of the nodes.

```ts
import { Generator } from "youtube.js";

// Provided you have an example of the node `Example`
const example_data = {
  "title": {
    "runs": [
      {
        "text": "Example"
      }
    ]
  }
}

// The first argument is the name of the class, the second is the data you have for the node.
// It will return a class that extends YTNode.
const Example = Generator.YTNodeGenerator.generateRuntimeClass('Example', example_data);

// You may now use this class as you would any other node.
const example = new Example(example_data);

const title = example.key('title').instanceof(Text).toString();
```

## How it works

If you decompile a YouTube client and analyze it for a while you will notice that it has classes named `protos/youtube/api/innertube/MusicItemRenderer`, `protos/youtube/api/innertube/SectionListRenderer`, etc. 

These classes are used to parse objects from the response, map them into models and generate the UI. The website works similarly, the difference is that it uses plain JSON (likely converted from protobuf server-side, hence the weird structure of the response).

Here we're taking a similar approach, the parser goes through all the renderers and parses their inner element(s). The final result is a nicely structured JSON, and on top of that, it also parses navigation endpoints which allow us to make an API call with all required parameters in one line and even emulate client actions (eg; clicking a button).

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
