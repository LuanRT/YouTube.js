[youtubei.js](../../../../README.md) / [Clients](../README.md) / Music

# Class: Music

Defined in: [src/core/clients/Music.ts:33](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/clients/Music.ts#L33)

## Constructors

### Constructor

> **new Music**(`session`): `Music`

Defined in: [src/core/clients/Music.ts:37](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/clients/Music.ts#L37)

#### Parameters

##### session

[`Session`](../../../../classes/Session.md)

#### Returns

`Music`

## Methods

### getAlbum()

> **getAlbum**(`album_id`): `Promise`\<[`Album`](../../YTMusic/classes/Album.md)\>

Defined in: [src/core/clients/Music.ts:186](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/clients/Music.ts#L186)

#### Parameters

##### album\_id

`string`

#### Returns

`Promise`\<[`Album`](../../YTMusic/classes/Album.md)\>

***

### getArtist()

> **getArtist**(`artist_id`): `Promise`\<[`Artist`](../../YTMusic/classes/Artist.md)\>

Defined in: [src/core/clients/Music.ts:176](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/clients/Music.ts#L176)

#### Parameters

##### artist\_id

`string`

#### Returns

`Promise`\<[`Artist`](../../YTMusic/classes/Artist.md)\>

***

### getExplore()

> **getExplore**(): `Promise`\<[`Explore`](../../YTMusic/classes/Explore.md)\>

Defined in: [src/core/clients/Music.ts:163](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/clients/Music.ts#L163)

#### Returns

`Promise`\<[`Explore`](../../YTMusic/classes/Explore.md)\>

***

### getHomeFeed()

> **getHomeFeed**(): `Promise`\<[`HomeFeed`](../../YTMusic/classes/HomeFeed.md)\>

Defined in: [src/core/clients/Music.ts:157](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/clients/Music.ts#L157)

#### Returns

`Promise`\<[`HomeFeed`](../../YTMusic/classes/HomeFeed.md)\>

***

### getInfo()

> **getInfo**(`target`, `options?`): `Promise`\<[`TrackInfo`](../../YTMusic/classes/TrackInfo.md)\>

Defined in: [src/core/clients/Music.ts:47](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/clients/Music.ts#L47)

Retrieves track info. Passing a list item of type MusicTwoRowItem automatically starts a radio.

#### Parameters

##### target

Video id or a list item.

`string` | [`NavigationEndpoint`](../../YTNodes/classes/NavigationEndpoint.md) | [`MusicResponsiveListItem`](../../YTNodes/classes/MusicResponsiveListItem.md) | [`MusicTwoRowItem`](../../YTNodes/classes/MusicTwoRowItem.md)

##### options?

`Omit`\<[`GetVideoInfoOptions`](../../Types/interfaces/GetVideoInfoOptions.md), `"client"`\>

Options for fetching video info.

#### Returns

`Promise`\<[`TrackInfo`](../../YTMusic/classes/TrackInfo.md)\>

***

### getLibrary()

> **getLibrary**(): `Promise`\<[`Library`](../../YTMusic/classes/Library.md)\>

Defined in: [src/core/clients/Music.ts:170](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/clients/Music.ts#L170)

#### Returns

`Promise`\<[`Library`](../../YTMusic/classes/Library.md)\>

***

### getLyrics()

> **getLyrics**(`video_id`): `Promise`\<[`MusicDescriptionShelf`](../../YTNodes/classes/MusicDescriptionShelf.md) \| `undefined`\>

Defined in: [src/core/clients/Music.ts:267](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/clients/Music.ts#L267)

#### Parameters

##### video\_id

`string`

#### Returns

`Promise`\<[`MusicDescriptionShelf`](../../YTNodes/classes/MusicDescriptionShelf.md) \| `undefined`\>

***

### getPlaylist()

> **getPlaylist**(`playlist_id`): `Promise`\<[`Playlist`](../../YTMusic/classes/Playlist.md)\>

Defined in: [src/core/clients/Music.ts:196](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/clients/Music.ts#L196)

#### Parameters

##### playlist\_id

`string`

#### Returns

`Promise`\<[`Playlist`](../../YTMusic/classes/Playlist.md)\>

***

### getRecap()

> **getRecap**(): `Promise`\<[`Recap`](../../YTMusic/classes/Recap.md)\>

Defined in: [src/core/clients/Music.ts:293](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/clients/Music.ts#L293)

#### Returns

`Promise`\<[`Recap`](../../YTMusic/classes/Recap.md)\>

***

### getRelated()

> **getRelated**(`video_id`): `Promise`\<[`SectionList`](../../YTNodes/classes/SectionList.md) \| [`Message`](../../YTNodes/classes/Message.md)\>

Defined in: [src/core/clients/Music.ts:246](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/clients/Music.ts#L246)

#### Parameters

##### video\_id

`string`

#### Returns

`Promise`\<[`SectionList`](../../YTNodes/classes/SectionList.md) \| [`Message`](../../YTNodes/classes/Message.md)\>

***

### getSearchSuggestions()

> **getSearchSuggestions**(`input`): `Promise`\<[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`SearchSuggestionsSection`](../../YTNodes/classes/SearchSuggestionsSection.md)\>\>

Defined in: [src/core/clients/Music.ts:299](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/clients/Music.ts#L299)

#### Parameters

##### input

`string`

#### Returns

`Promise`\<[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`SearchSuggestionsSection`](../../YTNodes/classes/SearchSuggestionsSection.md)\>\>

***

### getUpNext()

> **getUpNext**(`video_id`, `automix`): `Promise`\<[`PlaylistPanel`](../../YTNodes/classes/PlaylistPanel.md)\>

Defined in: [src/core/clients/Music.ts:206](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/clients/Music.ts#L206)

#### Parameters

##### video\_id

`string`

##### automix

`boolean` = `true`

#### Returns

`Promise`\<[`PlaylistPanel`](../../YTNodes/classes/PlaylistPanel.md)\>

***

### search()

> **search**(`query`, `filters`): `Promise`\<[`Search`](../../YTMusic/classes/Search.md)\>

Defined in: [src/core/clients/Music.ts:135](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/clients/Music.ts#L135)

#### Parameters

##### query

`string`

##### filters

[`MusicSearchFilters`](../../Types/type-aliases/MusicSearchFilters.md) = `{}`

#### Returns

`Promise`\<[`Search`](../../YTMusic/classes/Search.md)\>
