# Changelog

## [4.1.1](https://github.com/LuanRT/YouTube.js/compare/v4.1.0...v4.1.1) (2023-03-29)


### Bug Fixes

* **PlayerCaptionsTracklist:** parse props only if they exist in the node ([470d8d9](https://github.com/LuanRT/YouTube.js/commit/470d8d94063f0159cd005c9eb15fd1a4a175bea0)), closes [#372](https://github.com/LuanRT/YouTube.js/issues/372)
* **Search:** Return search results even if there are ads ([#373](https://github.com/LuanRT/YouTube.js/issues/373)) ([2c5907f](https://github.com/LuanRT/YouTube.js/commit/2c5907f80fd76452afe87d1722fe35a4f45a22e0))

## [4.1.0](https://github.com/LuanRT/YouTube.js/compare/v4.0.1...v4.1.0) (2023-03-24)


### Features

* **Session:** allow setting a custom visitor data token ([#371](https://github.com/LuanRT/YouTube.js/issues/371)) ([13ebf0a](https://github.com/LuanRT/YouTube.js/commit/13ebf0a03973e7ba7b65e9f72c4333927e4254f6))
* **ShowingResultsFor:** parse all props ([1d9587e](https://github.com/LuanRT/YouTube.js/commit/1d9587e8c1ee0b11bb0e444c3d1e98162e9e1059))


### Bug Fixes

* **http:** android tv http client missing `clientName` ([#370](https://github.com/LuanRT/YouTube.js/issues/370)) ([cb8fafe](https://github.com/LuanRT/YouTube.js/commit/cb8fafe94b8ab330ae58211a892923321d65d890))
* **node:** Electron apps crashing ([#367](https://github.com/LuanRT/YouTube.js/issues/367)) ([e7eacd9](https://github.com/LuanRT/YouTube.js/commit/e7eacd974211c90e7fbddfbf8019388cda3dfa5a))
* **parser:** Make Video.is_live work on channel pages ([#368](https://github.com/LuanRT/YouTube.js/issues/368)) ([bd35faa](https://github.com/LuanRT/YouTube.js/commit/bd35faa5978f0b822e98d019523be1303374ddc0))
* **toDash:** Generate unique Representation ids ([#366](https://github.com/LuanRT/YouTube.js/issues/366)) ([a8b507e](https://github.com/LuanRT/YouTube.js/commit/a8b507ee65ccd8edc9aea2aef8a908fa272bb23c))
* **Utils:** Properly parse timestamps with thousands separators ([#363](https://github.com/LuanRT/YouTube.js/issues/363)) ([1c72a41](https://github.com/LuanRT/YouTube.js/commit/1c72a41675e47f711bd61ebb898bca5527406a79))

## [4.0.1](https://github.com/LuanRT/YouTube.js/compare/v4.0.0...v4.0.1) (2023-03-16)


### Bug Fixes

* **Channel:** type mismatch in `subscribe_button` prop ([573c864](https://github.com/LuanRT/YouTube.js/commit/573c8643aae16ec7b6be5b333619a5d8c91ca5c1))

## [4.0.0](https://github.com/LuanRT/YouTube.js/compare/v3.3.0...v4.0.0) (2023-03-15)


### ⚠ BREAKING CHANGES

* **Parser:** general refactoring of parsers ([#344](https://github.com/LuanRT/YouTube.js/issues/344))
* The `toDash` functions are now asynchronous, they now return a `Promise<string>` instead of a `string`, as we need to fetch the first sequence of the OTF format streams while building the manifest.

### Features

* Add support for OTF format streams ([3e4d41b](https://github.com/LuanRT/YouTube.js/commit/3e4d41bf06ba16232979977c705444f2032bcde6))
* **parser:** add `GridMix` ([#356](https://github.com/LuanRT/YouTube.js/issues/356)) ([a8e7e64](https://github.com/LuanRT/YouTube.js/commit/a8e7e644ec6df3b3c98a313f0321da27b4ca456e))
* **parser:** add `GridShow` and `ShowCustomThumbnail` ([8ef4b42](https://github.com/LuanRT/YouTube.js/commit/8ef4b42d444c4fbe5cd65a55c0e0e7aa31738755)), closes [#459](https://github.com/LuanRT/YouTube.js/issues/459)
* **parser:** add `MusicCardShelf` ([#358](https://github.com/LuanRT/YouTube.js/issues/358)) ([9b005d6](https://github.com/LuanRT/YouTube.js/commit/9b005d62d6590a2ddf6848dabfa33fce36e8df9c))
* **parser:** Add `play_all_button` to `Shelf` ([#345](https://github.com/LuanRT/YouTube.js/issues/345)) ([427db5b](https://github.com/LuanRT/YouTube.js/commit/427db5bbc2bf3e8ec60371d504c2ab1cdae6e918))
* **parser:** add `view_playlist` to `Playlist` ([#348](https://github.com/LuanRT/YouTube.js/issues/348)) ([9cb4530](https://github.com/LuanRT/YouTube.js/commit/9cb45302997771d909487b1ecba6f38655abef48))
* **parser:** add InfoPanelContent and InfoPanelContainer nodes ([4784dfa](https://github.com/LuanRT/YouTube.js/commit/4784dfa563a4dbeaee31811824d5aa37a67f5557)), closes [#326](https://github.com/LuanRT/YouTube.js/issues/326)
* **Parser:** just-in-time YTNode generation ([#310](https://github.com/LuanRT/YouTube.js/issues/310)) ([2cee590](https://github.com/LuanRT/YouTube.js/commit/2cee59024c730c34aa06052849ed6fb3f862ef33))
* **yt:** add support for movie items and trailers ([#349](https://github.com/LuanRT/YouTube.js/issues/349)) ([9f1c31d](https://github.com/LuanRT/YouTube.js/commit/9f1c31d7a09532e80a187b14acceff31c22579bf))


### Code Refactoring

* **Parser:** general refactoring of parsers ([#344](https://github.com/LuanRT/YouTube.js/issues/344)) ([b13bf6e](https://github.com/LuanRT/YouTube.js/commit/b13bf6e9926c19a1939e0f4b69cbd53d1af0f7c8))

## [3.3.0](https://github.com/LuanRT/YouTube.js/compare/v3.2.0...v3.3.0) (2023-03-09)


### Features

* **parser:** add `ConversationBar` node ([b2253df](https://github.com/LuanRT/YouTube.js/commit/b2253df8022217dc486155d8cacbf22db04dd9c2))
* **VideoInfo:** support get by endpoint + more info ([#342](https://github.com/LuanRT/YouTube.js/issues/342)) ([0d35fe0](https://github.com/LuanRT/YouTube.js/commit/0d35fe0ca5e87a877b76cbb6cf3c92843eac5a99))


### Bug Fixes

* **MultiMarkersPlayerBar:** avoid observing undefined objects ([f351770](https://github.com/LuanRT/YouTube.js/commit/f3517708ff34093a544c09d6f5f1ec806130d5cc))
* **SharedPost:** import `Menu` node directly (oops) ([3e3dc35](https://github.com/LuanRT/YouTube.js/commit/3e3dc351bb44faec87616d9b922924d14a95f29f))
* **ytmusic:** use static visitor id to avoid empty API responses ([f9754f5](https://github.com/LuanRT/YouTube.js/commit/f9754f5ac61d0f11b025f37f93783f971560268b)), closes [#279](https://github.com/LuanRT/YouTube.js/issues/279)

## [3.2.0](https://github.com/LuanRT/YouTube.js/compare/v3.1.1...v3.2.0) (2023-03-08)


### Features

* Add support for descriptive audio tracks ([#338](https://github.com/LuanRT/YouTube.js/issues/338)) ([574b67a](https://github.com/LuanRT/YouTube.js/commit/574b67a1f707a32378586dd2fe7b2f36f4ab6ddb))
* export `FormatUtils`' types ([2d774e2](https://github.com/LuanRT/YouTube.js/commit/2d774e26aae79f3d1b115e0e85c148ae80985529))
* **parser:** add `banner` to `PlaylistHeader` ([#337](https://github.com/LuanRT/YouTube.js/issues/337)) ([95033e7](https://github.com/LuanRT/YouTube.js/commit/95033e723ef912706e4d176de6b2760f017184e1))
* **parser:** SharedPost ([#332](https://github.com/LuanRT/YouTube.js/issues/332)) ([ce53ac1](https://github.com/LuanRT/YouTube.js/commit/ce53ac18435cbcb20d6d4c4ab52fd156091e7592))
* **VideoInfo:** add `game_info` and `category` ([#333](https://github.com/LuanRT/YouTube.js/issues/333)) ([214aa14](https://github.com/LuanRT/YouTube.js/commit/214aa147ce6306e37a6bf860a7bed5635db4797e))
* **YouTube/Search:** add `SearchSubMenu` node ([#340](https://github.com/LuanRT/YouTube.js/issues/340)) ([a511608](https://github.com/LuanRT/YouTube.js/commit/a511608f18b37b0d9f2c7958ed5128330fabcfa0))
* **yt:** add `getGuide()` ([#335](https://github.com/LuanRT/YouTube.js/issues/335)) ([2cc7b8b](https://github.com/LuanRT/YouTube.js/commit/2cc7b8bcd6938c7fb3af4f854a1d78b86d153873))


### Bug Fixes

* **SegmentedLikeDislikeButton:** like/dislike buttons can also be a simple `Button` ([9b2738f](https://github.com/LuanRT/YouTube.js/commit/9b2738f1285b278c3e83541857651be9a6248288))
* **YouTube:** fix warnings when retrieving members-only content ([#341](https://github.com/LuanRT/YouTube.js/issues/341)) ([95f1d40](https://github.com/LuanRT/YouTube.js/commit/95f1d4077ff3775f36967dca786139a09e2830a2))
* **ytmusic:** export search filters type ([cf8a33c](https://github.com/LuanRT/YouTube.js/commit/cf8a33c79f5432136b865d535fd0ecedc2393382))

## [3.1.1](https://github.com/LuanRT/YouTube.js/compare/v3.1.0...v3.1.1) (2023-03-01)


### Bug Fixes

* **Channel:** getting community continuations ([#329](https://github.com/LuanRT/YouTube.js/issues/329)) ([4c7b8a3](https://github.com/LuanRT/YouTube.js/commit/4c7b8a34030effa26c4ea186d3e9509128aec31c))

## [3.1.0](https://github.com/LuanRT/YouTube.js/compare/v3.0.0...v3.1.0) (2023-02-26)


### Features

* Add upcoming and live info to playlist videos ([#317](https://github.com/LuanRT/YouTube.js/issues/317)) ([a0bfe16](https://github.com/LuanRT/YouTube.js/commit/a0bfe164279ec27b0c49c6b0c32222c1a92df5c3))
* **VideoSecondaryInfo:** add support for attributed descriptions ([#325](https://github.com/LuanRT/YouTube.js/issues/325)) ([f933cb4](https://github.com/LuanRT/YouTube.js/commit/f933cb45bcb92c07b3bc063d63869a51cbff4eb0))


### Bug Fixes

* **parser:** export YTNodes individually so they can be used as types ([200632f](https://github.com/LuanRT/YouTube.js/commit/200632f374d5e0e105b600d579a2665a6fb36e38)), closes [#321](https://github.com/LuanRT/YouTube.js/issues/321)
* **PlayerMicroformat:** Make the embed field optional ([#320](https://github.com/LuanRT/YouTube.js/issues/320)) ([a0e6cef](https://github.com/LuanRT/YouTube.js/commit/a0e6cef00fb9e3f52593cec22704f7ddc1f7553e))
* send correct UA for Android requests ([f4e0f30](https://github.com/LuanRT/YouTube.js/commit/f4e0f30e6e94b347b28d67d9a86284ea2d23ee15)), closes [#322](https://github.com/LuanRT/YouTube.js/issues/322)

## [3.0.0](https://github.com/LuanRT/YouTube.js/compare/v2.9.0...v3.0.0) (2023-02-17)


### ⚠ BREAKING CHANGES

* cleanup platform support ([#306](https://github.com/LuanRT/YouTube.js/issues/306))

### Features

* add parser support for MultiImage community posts ([#298](https://github.com/LuanRT/YouTube.js/issues/298)) ([de61782](https://github.com/LuanRT/YouTube.js/commit/de61782f1a673cbe66ae9b410341e39b7501ba84))
* add support for hashtag feeds ([#312](https://github.com/LuanRT/YouTube.js/issues/312)) ([bf12740](https://github.com/LuanRT/YouTube.js/commit/bf12740333a82c26fe84e7c702c2fbb8859814fc))
* add support for YouTube Kids ([#291](https://github.com/LuanRT/YouTube.js/issues/291)) ([2bbefef](https://github.com/LuanRT/YouTube.js/commit/2bbefefbb7cb061f3e7b686158b7568c32f0da5d))
* allow checking whether a channel has optional tabs ([#296](https://github.com/LuanRT/YouTube.js/issues/296)) ([ceefbed](https://github.com/LuanRT/YouTube.js/commit/ceefbed98c70bb936e2d2df58c02834842acfdfc))
* **Channel:** Add getters for all optional tabs ([#303](https://github.com/LuanRT/YouTube.js/issues/303)) ([b2900f4](https://github.com/LuanRT/YouTube.js/commit/b2900f48a7aa4c22635e1819ba9f636e81964f2c))
* **Channel:** add support for sorting the playlist tab ([#295](https://github.com/LuanRT/YouTube.js/issues/295)) ([50ef712](https://github.com/LuanRT/YouTube.js/commit/50ef71284db41e5f94bb511892651d22a1d363a0))
* extract channel error alert ([0b99180](https://github.com/LuanRT/YouTube.js/commit/0b991800a5c67f0e702251982b52eb8531f36f19))
* **FormatUtils:** support multiple audio tracks in the DASH manifest ([#308](https://github.com/LuanRT/YouTube.js/issues/308)) ([a69e43b](https://github.com/LuanRT/YouTube.js/commit/a69e43bf3ae02f2428c4aa86f647e3e5e0db5ba6))
* improve support for dubbed content ([#293](https://github.com/LuanRT/YouTube.js/issues/293)) ([d6c5a9b](https://github.com/LuanRT/YouTube.js/commit/d6c5a9b971444d0cd746aaf5310d3389793680ea))
* parse isLive in CompactVideo ([#294](https://github.com/LuanRT/YouTube.js/issues/294)) ([2acb7da](https://github.com/LuanRT/YouTube.js/commit/2acb7da0198bfeca6ff911cf95cf06a220fccaa5))
* **parser:** add `ChannelAgeGate` node ([1cdf701](https://github.com/LuanRT/YouTube.js/commit/1cdf701c8403db6b681a26ecb1df2daa51add454))
* **parser:** Text#toHTML ([#300](https://github.com/LuanRT/YouTube.js/issues/300)) ([e82e23d](https://github.com/LuanRT/YouTube.js/commit/e82e23dfbb24dff3ddf45754c7319d783990e254))
* **ytkids:** add `getChannel()` ([#292](https://github.com/LuanRT/YouTube.js/issues/292)) ([0fc29f0](https://github.com/LuanRT/YouTube.js/commit/0fc29f0bbf965215146a6ae192494c74e6cefcbb))


### Bug Fixes

* assign MetadataBadge's label ([#311](https://github.com/LuanRT/YouTube.js/issues/311)) ([e37cf62](https://github.com/LuanRT/YouTube.js/commit/e37cf627322f688fcef18d41345f77cbccd58829))
* **ChannelAboutFullMetadata:** fix error when there are no primary links ([#299](https://github.com/LuanRT/YouTube.js/issues/299)) ([f62c66d](https://github.com/LuanRT/YouTube.js/commit/f62c66db396ba7d2f93007414101112b49d8375f))
* **TopicChannelDetails:** avatar and subtitle parsing ([#302](https://github.com/LuanRT/YouTube.js/issues/302)) ([d612590](https://github.com/LuanRT/YouTube.js/commit/d612590530f5fe590fee969810b1dd44c37f0457))
* **VideoInfo:** Gracefully handle missing watch next continuation ([#288](https://github.com/LuanRT/YouTube.js/issues/288)) ([13ad377](https://github.com/LuanRT/YouTube.js/commit/13ad3774c9783ed2a9f286aeee88110bd43b3a73))


### Code Refactoring

* cleanup platform support ([#306](https://github.com/LuanRT/YouTube.js/issues/306)) ([2ccbe2c](https://github.com/LuanRT/YouTube.js/commit/2ccbe2ce6260ace3bfac8b4b391e583fbcc4e286))
