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

[src/core/clients/Music.ts:37](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/clients/Music.ts#L37)

## Methods

### getAlbum()

> **getAlbum**(`album_id`): `Promise`\<[`Album`](../../YTMusic/classes/Album.md)\>

#### Parameters

• **album\_id**: `string`

#### Returns

`Promise`\<[`Album`](../../YTMusic/classes/Album.md)\>

#### Defined in

[src/core/clients/Music.ts:177](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/clients/Music.ts#L177)

***

### getArtist()

> **getArtist**(`artist_id`): `Promise`\<[`Artist`](../../YTMusic/classes/Artist.md)\>

#### Parameters

• **artist\_id**: `string`

#### Returns

`Promise`\<[`Artist`](../../YTMusic/classes/Artist.md)\>

#### Defined in

[src/core/clients/Music.ts:167](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/clients/Music.ts#L167)

***

### getExplore()

> **getExplore**(): `Promise`\<[`Explore`](../../YTMusic/classes/Explore.md)\>

#### Returns

`Promise`\<[`Explore`](../../YTMusic/classes/Explore.md)\>

#### Defined in

[src/core/clients/Music.ts:154](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/clients/Music.ts#L154)

***

### getHomeFeed()

> **getHomeFeed**(): `Promise`\<[`HomeFeed`](../../YTMusic/classes/HomeFeed.md)\>

#### Returns

`Promise`\<[`HomeFeed`](../../YTMusic/classes/HomeFeed.md)\>

#### Defined in

[src/core/clients/Music.ts:148](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/clients/Music.ts#L148)

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

[src/core/clients/Music.ts:46](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/clients/Music.ts#L46)

***

### getLibrary()

> **getLibrary**(): `Promise`\<[`Library`](../../YTMusic/classes/Library.md)\>

#### Returns

`Promise`\<[`Library`](../../YTMusic/classes/Library.md)\>

#### Defined in

[src/core/clients/Music.ts:161](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/clients/Music.ts#L161)

***

### getLyrics()

> **getLyrics**(`video_id`): `Promise`\<`undefined` \| [`MusicDescriptionShelf`](../../YTNodes/classes/MusicDescriptionShelf.md)\>

#### Parameters

• **video\_id**: `string`

#### Returns

`Promise`\<`undefined` \| [`MusicDescriptionShelf`](../../YTNodes/classes/MusicDescriptionShelf.md)\>

#### Defined in

[src/core/clients/Music.ts:258](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/clients/Music.ts#L258)

***

### getPlaylist()

> **getPlaylist**(`playlist_id`): `Promise`\<[`Playlist`](../../YTMusic/classes/Playlist.md)\>

#### Parameters

• **playlist\_id**: `string`

#### Returns

`Promise`\<[`Playlist`](../../YTMusic/classes/Playlist.md)\>

#### Defined in

[src/core/clients/Music.ts:187](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/clients/Music.ts#L187)

***

### getRecap()

> **getRecap**(): `Promise`\<[`Recap`](../../YTMusic/classes/Recap.md)\>

#### Returns

`Promise`\<[`Recap`](../../YTMusic/classes/Recap.md)\>

#### Defined in

[src/core/clients/Music.ts:284](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/clients/Music.ts#L284)

***

### getRelated()

> **getRelated**(`video_id`): `Promise`\<[`SectionList`](../../YTNodes/classes/SectionList.md) \| [`Message`](../../YTNodes/classes/Message.md)\>

#### Parameters

• **video\_id**: `string`

#### Returns

`Promise`\<[`SectionList`](../../YTNodes/classes/SectionList.md) \| [`Message`](../../YTNodes/classes/Message.md)\>

#### Defined in

[src/core/clients/Music.ts:237](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/clients/Music.ts#L237)

***

### getSearchSuggestions()

> **getSearchSuggestions**(`input`): `Promise`\<[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`SearchSuggestionsSection`](../../YTNodes/classes/SearchSuggestionsSection.md)\>\>

#### Parameters

• **input**: `string`

#### Returns

`Promise`\<[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`SearchSuggestionsSection`](../../YTNodes/classes/SearchSuggestionsSection.md)\>\>

#### Defined in

[src/core/clients/Music.ts:290](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/clients/Music.ts#L290)

***

### getUpNext()

> **getUpNext**(`video_id`, `automix`): `Promise`\<[`PlaylistPanel`](../../YTNodes/classes/PlaylistPanel.md)\>

#### Parameters

• **video\_id**: `string`

• **automix**: `boolean` = `true`

#### Returns

`Promise`\<[`PlaylistPanel`](../../YTNodes/classes/PlaylistPanel.md)\>

#### Defined in

[src/core/clients/Music.ts:197](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/clients/Music.ts#L197)

***

### search()

> **search**(`query`, `filters`): `Promise`\<[`Search`](../../YTMusic/classes/Search.md)\>

#### Parameters

• **query**: `string`

• **filters**: [`MusicSearchFilters`](../../Types/type-aliases/MusicSearchFilters.md) = `{}`

#### Returns

`Promise`\<[`Search`](../../YTMusic/classes/Search.md)\>

#### Defined in

[src/core/clients/Music.ts:126](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/clients/Music.ts#L126)
