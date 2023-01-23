# YouTube Music

YouTube Music is a music streaming service developed by YouTube, a subsidiary of Google. It provides a tailored interface for the service oriented towards music streaming, with a greater emphasis on browsing and discovery compared to its main service. This class allows you to interact with its API.

## API

* Music 
  * [.getInfo(target)](#getinfo)
  * [.search(query, filters?)](#search)
  * [.getHomeFeed()](#gethomefeed)
  * [.getExplore()](#getexplore)
  * [.getLibrary()](#getlibrary)
  * [.getArtist(artist_id)](#getartist)
  * [.getAlbum(album_id)](#getalbum)
  * [.getPlaylist(playlist_id)](#getplaylist)
  * [.getLyrics(video_id)](#getlyrics)
  * [.getUpNext(video_id, automix?)](#getupnext)
  * [.getRelated(video_id)](#getrelated)
  * [.getRecap()](#getrecap)
  * [.getSearchSuggestions(query)](#getsearchsuggestions)

<a name="getinfo"></a>
### getInfo(target)

Retrieves track info.

**Returns:** `Promise.<TrackInfo>`

| Param | Type | Description |
| --- | --- | --- |
| target | `string` or `MusicTwoRowItem` | video id or list item |

<details>
<summary>Methods & Getters</summary>
<p>

- `<info>#getTab(title)`
  - Retrieves contents of the given tab.

- `<info>#getUpNext(automix?)`
  - Retrieves up next.

- `<info>#getRelated()`
  - Retrieves related content.

- `<info>#getLyrics()`
  - Retrieves song lyrics.

- `<info>#available_tabs`
  - Returns available tabs.

- `<info>#page`
  - Returns the original InnerTube response(s), parsed and sanitized.

</p>
</details> 

<a name="search"></a>
### search(query, filters?)

Searches on YouTube Music.

**Returns:** `Promise.<Search>`

| Param | Type | Description |
| --- | --- | --- |
| query | `string` | Search query |
| filters? | `object` | Search filters |

<details>
<summary>Methods & Getters</summary>
<p>

- `<search>#getMore(shelf)`
  - Equivalent to clicking on the shelf to load more items.

- `<search>#getContinuation()`
  - Retrieves continuation, only works for individual sections or filtered results.

- `<search>#selectFilter(name)`
  - Applies given filter to the search.

- `<search>#has_continuation`
  - Checks if continuation is available.

- `<search>#filters`
  - Returns available filters.

- `<search>#songs`
  - Returns songs shelf.

- `<search>#videos`
  - Returns videos shelf.

- `<search>#albums`
  - Returns albums shelf.

- `<search>#artists`
  - Returns artists shelf.

- `<search>#playlists`
  - Returns songs shelf.

- `<search>#page`
  - Returns the original InnerTube response(s), parsed and sanitized.

</p>
</details> 

<a name="gethomefeed"></a>
### getHomeFeed()

Retrieves home feed.

**Returns:** `Promise.<HomeFeed>`

<details>
<summary>Methods & Getters</summary>
<p>

- `<homefeed>#getContinuation()`
  - Retrieves continuation, only works for individual sections or filtered results.

- `<homefeed>#has_continuation`
  - Checks if continuation is available.

- `<homefeed>#page`
  - Returns original InnerTube response (sanitized).

- `<homefeed>#page`
  - Returns the original InnerTube response(s), parsed and sanitized.

</p>
</details> 

<a name="getexplore"></a>
### getExplore()

Retrieves “Explore” feed.

**Returns:** `Promise.<Explore>`

<details>
<summary>Methods & Getters</summary>
<p>

- `<explore>#page`
  - Returns the original InnerTube response(s), parsed and sanitized.

</p>
</details> 

<a name="getlibrary"></a>
### getLibrary()

Retrieves library.

**Returns:** `Library`

<details>
<summary>Methods & Getters</summary>
<p>

- `<library>#applyFilter(filter)`
  - Applies given filter to the library.

- `<library>#applySort(sort_by)`
  - Applies given sort option to the library items.

- `<library>#getContinuation()`
  - Retrieves continuation of the library items.

- `<library>#has_continuation`
  - Checks if continuation is available.

- `<library>#filters`
  - Returns available filters.

- `<library>#sort_options`
  - Returns available sort options.

- `<library>#page`
  - Returns the original InnerTube response(s), parsed and sanitized.

</p>
</details> 

<a name="getartist"></a>
### getArtist(artist_id)

Retrieves artist's info & content.

**Returns:** `Promise.<Artist>`

| Param | Type | Description |
| --- | --- | --- |
| artist_id | `string` | Artist id |

<details>
<summary>Methods & Getters</summary>
<p>

- `<artist>#page`
  - Returns the original InnerTube response(s), parsed and sanitized.

</p>
</details> 

<a name="getalbum"></a>
### getAlbum(album_id)

Retrieves given album.

**Returns:** `Promise.<Album>`

| Param | Type | Description |
| --- | --- | --- |
| album_id | `string` | Album id |

<details>
<summary>Methods & Getters</summary>
<p>

- `<album>#page`
  - Returns the original InnerTube response(s), parsed and sanitized.

</p>
</details> 

<a name="getplaylist"></a>
### getPlaylist(playlist_id)

Retrieves given playlist.

**Returns:** `Promise.<Playlist>`

| Param | Type | Description |
| --- | --- | --- |
| playlist_id | `string` | Playlist id |

<details>
<summary>Methods & Getters</summary>
<p>

- `<playlist>#getRelated()`
  - Retrieves related playlists.

- `<playlist>#getSuggestions()`
  - Retrieves playlist suggestions.

- `<playlist>#getContinuation()`
  - Retrieves continuation.

- `<playlist>#has_continuation`
  - Checks if continuation is available.

- `<playlist>#page`
  - Returns the original InnerTube response(s), parsed and sanitized.

</p>
</details> 

<a name="getlyrics"></a>
### getLyrics(video_id)

Retrieves song lyrics.

**Returns:** `Promise.<MusicDescriptionShelf | undefined>`

| Param | Type | Description |
| --- | --- | --- |
| video_id | `string` | Video id |

<a name="getupnext"></a>
### getUpNext(video_id, automix?)

Retrieves up next content.

**Returns:** `Promise.<PlaylistPanel>`

| Param | Type | Description |
| --- | --- | --- |
| video_id | `string` | Video id |
| automix? | `boolean` | if automix should be fetched |

<a name="getrelated"></a>
### getRelated(video_id)

Retrieves related content.

**Returns:** `Promise.<Array.<MusicCarouselShelf | MusicDescriptionShelf>>`

| Param | Type | Description |
| --- | --- | --- |
| video_id | `string` | Video id |

<a name="getrecap"></a>
### getRecap()

Retrieves your YouTube Music recap.

**Returns:** `Promise.<Recap>`

<details>
<summary>Methods & Getters</summary>
<p>

- `<recap>#getPlaylist()`
  - Retrieves recap playlist.

- `<recap>#page`
  - Returns the original InnerTube response(s), parsed and sanitized.

</p>
</details> 

<a name="getsearchsuggestions"></a>
### getSearchSuggestions(query)

Retrieves search suggestions.

**Returns:** `Promise.<Array.<SearchSuggestion | HistorySuggestion>>`

| Param | Type | Description |
| --- | --- | --- |
| query | `string` | Search query |