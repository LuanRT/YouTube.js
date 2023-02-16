# Feed

Represents a YouTube feed. This class provides a set of utility methods for parsing and interacting with feeds.

## API 

* Feed
  * [.videos](#videos)
  * [.posts](#posts)
  * [.channels](#channels)
  * [.playlists](#playlists)
  * [.shelves](#shelves)
  * [.memo](#memo)
  * [.page_contents](#page_contents)
  * [.secondary_contents](#secondary_contents)
  * [.page](#page)
  * [.has_continuation](#has_continuation)
  * [.getContinuationData()](#getcontinuationdata)
  * [.getContinuation()](#getcontinuation)
  * [.getShelf(title)](#getshelf)

<a name="videos"></a>
### videos

Returns all videos in the feed.

**Returns:** `ObservedArray<Video | GridVideo | ReelItem | CompactVideo | PlaylistVideo | PlaylistPanelVideo | WatchCardCompactVideo>`

<a name="posts"></a>
### posts

Returns all posts in the feed.

**Returns:** `ObservedArray<Post | BackstagePost>`

<a name="channels"></a>
### channels

Returns all channels in the feed.

**Returns:** `ObservedArray<Channel | GridChannel>`

<a name="playlists"></a>
### playlists

Returns all playlists in the feed.

**Returns:** `ObservedArray<Playlist | GridPlaylist>`

<a name="shelves"></a>
### shelves

Returns all shelves in the feed.

**Returns:** `ObservedArray<Shelf | RichShelf | ReelShelf>`

<a name="memo"></a>
### memo

Returns the memoized feed contents.

**Returns:** `Memo`

<a name="page_contents"></a>
### page_contents

Returns the page contents.

**Returns:** `SectionList | MusicQueue | RichGrid | ReloadContinuationItemsCommand`

<a name="secondary_contents"></a>
### secondary_contents

Returns the secondary contents node.

**Returns:** `SuperParsedResult<YTNode> | undefined `

<a name="page"></a>
### page

Returns the original InnerTube response, parsed and sanitized.

**Returns:** `T extends IParsedResponse = IParsedResponse`

<a name="has_continuation"></a>
### has_continuation

Returns whether the feed has a continuation.

**Returns:** `boolean`

<a name="getcontinuationdata"></a>
### getContinuationData()

Returns the continuation data.

**Returns:** `Promise<T | undefined>`

<a name="getcontinuation"></a>
### getContinuation()

Retrieves the feed's continuation.

**Returns:** `Promise<Feed<T>>`

<a name="getshelf"></a>
### getShelf(title)

Gets a shelf by its title.

**Returns:** `Shelf | RichShelf | ReelShelf | undefined`

| Param | Type | Description |
| --- | --- | --- |
| title | `string` | The title of the shelf to get |