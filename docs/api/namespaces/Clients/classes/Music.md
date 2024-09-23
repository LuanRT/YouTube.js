[youtubei.js](../../../README.md) / [Clients](../README.md) / Music

# Class: Music

## Constructors

### new Music()

> **new Music**(`session`): [`Music`](Music.md)

#### Parameters

• **session**: [`Session`](../../../classes/Session.md)

#### Returns

[`Music`](Music.md)

#### Defined in

[src/core/clients/Music.ts:40](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/clients/Music.ts#L40)

## Methods

### getAlbum()

> **getAlbum**(`album_id`): `Promise`\<[`Album`](../../YTMusic/classes/Album.md)\>

Retrieves album.

#### Parameters

• **album\_id**: `string`

The album id.

#### Returns

`Promise`\<[`Album`](../../YTMusic/classes/Album.md)\>

#### Defined in

[src/core/clients/Music.ts:209](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/clients/Music.ts#L209)

***

### getArtist()

> **getArtist**(`artist_id`): `Promise`\<[`Artist`](../../YTMusic/classes/Artist.md)\>

Retrieves artist's info & content.

#### Parameters

• **artist\_id**: `string`

The artist id.

#### Returns

`Promise`\<[`Artist`](../../YTMusic/classes/Artist.md)\>

#### Defined in

[src/core/clients/Music.ts:189](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/clients/Music.ts#L189)

***

### getExplore()

> **getExplore**(): `Promise`\<[`Explore`](../../YTMusic/classes/Explore.md)\>

Retrieves the Explore feed.

#### Returns

`Promise`\<[`Explore`](../../YTMusic/classes/Explore.md)\>

#### Defined in

[src/core/clients/Music.ts:159](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/clients/Music.ts#L159)

***

### getHomeFeed()

> **getHomeFeed**(): `Promise`\<[`HomeFeed`](../../YTMusic/classes/HomeFeed.md)\>

Retrieves the home feed.

#### Returns

`Promise`\<[`HomeFeed`](../../YTMusic/classes/HomeFeed.md)\>

#### Defined in

[src/core/clients/Music.ts:145](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/clients/Music.ts#L145)

***

### getInfo()

> **getInfo**(`target`): `Promise`\<[`TrackInfo`](../../YTMusic/classes/TrackInfo.md)\>

Retrieves track info. Passing a list item of type MusicTwoRowItem automatically starts a radio.

#### Parameters

• **target**: `string` \| [`NavigationEndpoint`](../../YTNodes/classes/NavigationEndpoint.md) \| [`MusicResponsiveListItem`](../../YTNodes/classes/MusicResponsiveListItem.md) \| [`MusicTwoRowItem`](../../YTNodes/classes/MusicTwoRowItem.md)

Video id or a list item.

#### Returns

`Promise`\<[`TrackInfo`](../../YTMusic/classes/TrackInfo.md)\>

#### Defined in

[src/core/clients/Music.ts:49](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/clients/Music.ts#L49)

***

### getLibrary()

> **getLibrary**(): `Promise`\<[`Library`](../../YTMusic/classes/Library.md)\>

Retrieves the library.

#### Returns

`Promise`\<[`Library`](../../YTMusic/classes/Library.md)\>

#### Defined in

[src/core/clients/Music.ts:174](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/clients/Music.ts#L174)

***

### getLyrics()

> **getLyrics**(`video_id`): `Promise`\<`undefined` \| [`MusicDescriptionShelf`](../../YTNodes/classes/MusicDescriptionShelf.md)\>

Retrieves song lyrics.

#### Parameters

• **video\_id**: `string`

The video id.

#### Returns

`Promise`\<`undefined` \| [`MusicDescriptionShelf`](../../YTNodes/classes/MusicDescriptionShelf.md)\>

#### Defined in

[src/core/clients/Music.ts:325](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/clients/Music.ts#L325)

***

### getPlaylist()

> **getPlaylist**(`playlist_id`): `Promise`\<[`Playlist`](../../YTMusic/classes/Playlist.md)\>

Retrieves playlist.

#### Parameters

• **playlist\_id**: `string`

The playlist id.

#### Returns

`Promise`\<[`Playlist`](../../YTMusic/classes/Playlist.md)\>

#### Defined in

[src/core/clients/Music.ts:229](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/clients/Music.ts#L229)

***

### getRecap()

> **getRecap**(): `Promise`\<[`Recap`](../../YTMusic/classes/Recap.md)\>

Retrieves recap.

#### Returns

`Promise`\<[`Recap`](../../YTMusic/classes/Recap.md)\>

#### Defined in

[src/core/clients/Music.ts:355](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/clients/Music.ts#L355)

***

### getRelated()

> **getRelated**(`video_id`): `Promise`\<[`SectionList`](../../YTNodes/classes/SectionList.md) \| [`Message`](../../YTNodes/classes/Message.md)\>

Retrieves related content.

#### Parameters

• **video\_id**: `string`

The video id.

#### Returns

`Promise`\<[`SectionList`](../../YTNodes/classes/SectionList.md) \| [`Message`](../../YTNodes/classes/Message.md)\>

#### Defined in

[src/core/clients/Music.ts:297](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/clients/Music.ts#L297)

***

### getSearchSuggestions()

> **getSearchSuggestions**(`query`): `Promise`\<[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`SearchSuggestionsSection`](../../YTNodes/classes/SearchSuggestionsSection.md)\>\>

Retrieves search suggestions for the given query.

#### Parameters

• **query**: `string`

The query.

#### Returns

`Promise`\<[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`SearchSuggestionsSection`](../../YTNodes/classes/SearchSuggestionsSection.md)\>\>

#### Defined in

[src/core/clients/Music.ts:370](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/clients/Music.ts#L370)

***

### getUpNext()

> **getUpNext**(`video_id`, `automix`): `Promise`\<[`PlaylistPanel`](../../YTNodes/classes/PlaylistPanel.md)\>

Retrieves up next.

#### Parameters

• **video\_id**: `string`

The video id.

• **automix**: `boolean` = `true`

Whether to enable automix.

#### Returns

`Promise`\<[`PlaylistPanel`](../../YTNodes/classes/PlaylistPanel.md)\>

#### Defined in

[src/core/clients/Music.ts:251](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/clients/Music.ts#L251)

***

### search()

> **search**(`query`, `filters`): `Promise`\<[`Search`](../../YTMusic/classes/Search.md)\>

Searches on YouTube Music.

#### Parameters

• **query**: `string`

Search query.

• **filters**: [`MusicSearchFilters`](../../Types/type-aliases/MusicSearchFilters.md) = `{}`

Search filters.

#### Returns

`Promise`\<[`Search`](../../YTMusic/classes/Search.md)\>

#### Defined in

[src/core/clients/Music.ts:116](https://github.com/LuanRT/YouTube.js/blob/eb21af33db708f0355f4fb15881f5d4fabc7b06c/src/core/clients/Music.ts#L116)
