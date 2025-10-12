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

[src/core/clients/Music.ts:37](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/core/clients/Music.ts#L37)

## Methods

### getAlbum()

> **getAlbum**(`album_id`): `Promise`\<[`Album`](../../YTMusic/classes/Album.md)\>

#### Parameters

• **album\_id**: `string`

#### Returns

`Promise`\<[`Album`](../../YTMusic/classes/Album.md)\>

#### Defined in

[src/core/clients/Music.ts:186](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/core/clients/Music.ts#L186)

***

### getArtist()

> **getArtist**(`artist_id`): `Promise`\<[`Artist`](../../YTMusic/classes/Artist.md)\>

#### Parameters

• **artist\_id**: `string`

#### Returns

`Promise`\<[`Artist`](../../YTMusic/classes/Artist.md)\>

#### Defined in

[src/core/clients/Music.ts:176](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/core/clients/Music.ts#L176)

***

### getExplore()

> **getExplore**(): `Promise`\<[`Explore`](../../YTMusic/classes/Explore.md)\>

#### Returns

`Promise`\<[`Explore`](../../YTMusic/classes/Explore.md)\>

#### Defined in

[src/core/clients/Music.ts:163](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/core/clients/Music.ts#L163)

***

### getHomeFeed()

> **getHomeFeed**(): `Promise`\<[`HomeFeed`](../../YTMusic/classes/HomeFeed.md)\>

#### Returns

`Promise`\<[`HomeFeed`](../../YTMusic/classes/HomeFeed.md)\>

#### Defined in

[src/core/clients/Music.ts:157](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/core/clients/Music.ts#L157)

***

### getInfo()

> **getInfo**(`target`, `options`?): `Promise`\<[`TrackInfo`](../../YTMusic/classes/TrackInfo.md)\>

Retrieves track info. Passing a list item of type MusicTwoRowItem automatically starts a radio.

#### Parameters

• **target**: `string` \| [`NavigationEndpoint`](../../YTNodes/classes/NavigationEndpoint.md) \| [`MusicResponsiveListItem`](../../YTNodes/classes/MusicResponsiveListItem.md) \| [`MusicTwoRowItem`](../../YTNodes/classes/MusicTwoRowItem.md)

Video id or a list item.

• **options?**: `Omit`\<[`GetVideoInfoOptions`](../../Types/interfaces/GetVideoInfoOptions.md), `"client"`\>

Options for fetching video info.

#### Returns

`Promise`\<[`TrackInfo`](../../YTMusic/classes/TrackInfo.md)\>

#### Defined in

[src/core/clients/Music.ts:47](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/core/clients/Music.ts#L47)

***

### getLibrary()

> **getLibrary**(): `Promise`\<[`Library`](../../YTMusic/classes/Library.md)\>

#### Returns

`Promise`\<[`Library`](../../YTMusic/classes/Library.md)\>

#### Defined in

[src/core/clients/Music.ts:170](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/core/clients/Music.ts#L170)

***

### getLyrics()

> **getLyrics**(`video_id`): `Promise`\<`undefined` \| [`MusicDescriptionShelf`](../../YTNodes/classes/MusicDescriptionShelf.md)\>

#### Parameters

• **video\_id**: `string`

#### Returns

`Promise`\<`undefined` \| [`MusicDescriptionShelf`](../../YTNodes/classes/MusicDescriptionShelf.md)\>

#### Defined in

[src/core/clients/Music.ts:267](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/core/clients/Music.ts#L267)

***

### getPlaylist()

> **getPlaylist**(`playlist_id`): `Promise`\<[`Playlist`](../../YTMusic/classes/Playlist.md)\>

#### Parameters

• **playlist\_id**: `string`

#### Returns

`Promise`\<[`Playlist`](../../YTMusic/classes/Playlist.md)\>

#### Defined in

[src/core/clients/Music.ts:196](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/core/clients/Music.ts#L196)

***

### getRecap()

> **getRecap**(): `Promise`\<[`Recap`](../../YTMusic/classes/Recap.md)\>

#### Returns

`Promise`\<[`Recap`](../../YTMusic/classes/Recap.md)\>

#### Defined in

[src/core/clients/Music.ts:293](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/core/clients/Music.ts#L293)

***

### getRelated()

> **getRelated**(`video_id`): `Promise`\<[`SectionList`](../../YTNodes/classes/SectionList.md) \| [`Message`](../../YTNodes/classes/Message.md)\>

#### Parameters

• **video\_id**: `string`

#### Returns

`Promise`\<[`SectionList`](../../YTNodes/classes/SectionList.md) \| [`Message`](../../YTNodes/classes/Message.md)\>

#### Defined in

[src/core/clients/Music.ts:246](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/core/clients/Music.ts#L246)

***

### getSearchSuggestions()

> **getSearchSuggestions**(`input`): `Promise`\<[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`SearchSuggestionsSection`](../../YTNodes/classes/SearchSuggestionsSection.md)\>\>

#### Parameters

• **input**: `string`

#### Returns

`Promise`\<[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`SearchSuggestionsSection`](../../YTNodes/classes/SearchSuggestionsSection.md)\>\>

#### Defined in

[src/core/clients/Music.ts:299](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/core/clients/Music.ts#L299)

***

### getUpNext()

> **getUpNext**(`video_id`, `automix`): `Promise`\<[`PlaylistPanel`](../../YTNodes/classes/PlaylistPanel.md)\>

#### Parameters

• **video\_id**: `string`

• **automix**: `boolean` = `true`

#### Returns

`Promise`\<[`PlaylistPanel`](../../YTNodes/classes/PlaylistPanel.md)\>

#### Defined in

[src/core/clients/Music.ts:206](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/core/clients/Music.ts#L206)

***

### search()

> **search**(`query`, `filters`): `Promise`\<[`Search`](../../YTMusic/classes/Search.md)\>

#### Parameters

• **query**: `string`

• **filters**: [`MusicSearchFilters`](../../Types/type-aliases/MusicSearchFilters.md) = `{}`

#### Returns

`Promise`\<[`Search`](../../YTMusic/classes/Search.md)\>

#### Defined in

[src/core/clients/Music.ts:135](https://github.com/LuanRT/YouTube.js/blob/af92984523f90200a18314b94478a2697c9deab0/src/core/clients/Music.ts#L135)
