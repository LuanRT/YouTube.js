# YouTube Kids

YouTube Kids is a modified version of the YouTube app, with a simplified interface and curated content. This class allows you to interact with its API.

## API
  
* Kids
  * [.search(query)](#search)
  * [.getInfo(video_id)](#getinfo)
  * [.getChannel(channel_id)](#getchannel)
  * [.getHomeFeed()](#gethomefeed)

<a name="search"></a>
### search(query)

Searches the given query on YouTube Kids.

**Returns:** `Promise.<Search>`

| Param | Type | Description |
| --- | --- | --- |
| query | `string` | The query to search |


<details>
<summary>Methods & Getters</summary>
<p>

- `<search>#page`
  - Returns the original InnerTube response(s), parsed and sanitized.

</p>
</details> 

<a name="getinfo"></a>
### getInfo(video_id)

Retrieves video info.

**Returns:** `Promise.<VideoInfo>`

| Param | Type | Description |
| --- | --- | --- |
| video_id | `string` | The video id |

<details>
<summary>Methods & Getters</summary>
<p>

- `<info>#toDash(url_transformer?)`
  - Generates a DASH manifest from the streaming data.

- `<info>#chooseFormat(options)`
  - Selects the format that best matches the given options. This method is used internally by `#download`.

- `<info>#download(options?)`
  - Downloads the video.

- `<info>#addToWatchHistory()`
  - Adds the video to the watch history.

- `<info>#page`
  - Returns the original InnerTube response(s), parsed and sanitized.

</p>
</details> 

<a name="getchannel"></a>
### getChannel(channel_id)

Retrieves channel info.

**Returns:** `Promise.<Channel>`

| Param | Type | Description |
| --- | --- | --- |
| channel_id | `string` | The channel id |

<details>
<summary>Methods & Getters</summary>
<p>

- `<channel>#getContinuation()`
  - Retrieves next batch of videos.

- `<channel>#has_continuation`
  - Returns whether there are more videos to retrieve.

- `<channel>#page`
  - Returns the original InnerTube response(s), parsed and sanitized.

</p>
</details>

<a name="gethomefeed"></a>
### getHomeFeed()

Retrieves the home feed.

**Returns:** `Promise.<HomeFeed>`

<details>
<summary>Methods & Getters</summary>
<p>

- `<feed>#selectCategoryTab(tab: string | KidsCategoryTab)`
  - Selects the given category tab.

- `<feed>#categories`
  - Returns available categories.

- `<feed>#page`
  - Returns the original InnerTube response(s), parsed and sanitized.