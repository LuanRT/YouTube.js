# Changelog

## [13.4.0](https://github.com/LuanRT/YouTube.js/compare/v13.3.0...v13.4.0) (2025-04-23)


### Features

* **MultiPageMenuNotificationSection:** Add `notification_section_title` ([f869011](https://github.com/LuanRT/YouTube.js/commit/f8690118c3e4edbc22a6b9f59477a8e40e39d9a3))
* **Parser:** Add `OpenOnePickAddVideoModalCommand` node ([#901](https://github.com/LuanRT/YouTube.js/issues/901)) ([ff1aa67](https://github.com/LuanRT/YouTube.js/commit/ff1aa67b8bebd8e038ea77a124d0be0ed420bc55))
* **parser:** Parse `targetId` ([458c490](https://github.com/LuanRT/YouTube.js/commit/458c4900d78f9b16761faae421bcd8cb302f19b8))
* **RichRenderers:** Parse more UI elements ([d8f731b](https://github.com/LuanRT/YouTube.js/commit/d8f731b2fa4b755324b0ef4ad68be45f735b29a9))
* **RichShelf:** Add `icon_type` property ([dce51cd](https://github.com/LuanRT/YouTube.js/commit/dce51cdc4abad21812ee9e7ba02885dffde35d3a))
* **Session:** Add `deviceExperimentId` and `rolloutToken` to session data ([c704836](https://github.com/LuanRT/YouTube.js/commit/c7048368cc38a6a322c8006a4cfd208235d27caf))
* **Session:** Add `retrieve_innertube_config` option ([#949](https://github.com/LuanRT/YouTube.js/issues/949)) ([4808d2e](https://github.com/LuanRT/YouTube.js/commit/4808d2e13a90710cdea2c72332deb7809d5fdbdd))
* **Session:** Add option to override Player ID ([#951](https://github.com/LuanRT/YouTube.js/issues/951)) ([5e665e8](https://github.com/LuanRT/YouTube.js/commit/5e665e8f0ba6e68d689b42be852ec20597c6b6a6))
* **Text:** Parse accessibility data ([a95f52a](https://github.com/LuanRT/YouTube.js/commit/a95f52a4777ea158f3d3e85f4213aee364a2d38d))


### Bug Fixes

* **HTTPClient:** Use the correct constant for the iOS client OS name ([#938](https://github.com/LuanRT/YouTube.js/issues/938)) ([95d9211](https://github.com/LuanRT/YouTube.js/commit/95d9211eae51c2d47468cacbed8cd9bdaa2fcd33))
* **Player:** Use global var to find signature algorithm ([#953](https://github.com/LuanRT/YouTube.js/issues/953)) ([7f1eeb6](https://github.com/LuanRT/YouTube.js/commit/7f1eeb6b5bbae72d455609e8fd972ad936a69e27))

## [13.3.0](https://github.com/LuanRT/YouTube.js/compare/v13.2.0...v13.3.0) (2025-03-25)


### Features

* **MusicImmersiveHeader:** Parse buttons and menu ([cbb2535](https://github.com/LuanRT/YouTube.js/commit/cbb2535b2492777b0045be5fcf9bece03fe4f84e))


### Bug Fixes

* **Player:** Parse global variable used by nsig/sig ([#935](https://github.com/LuanRT/YouTube.js/issues/935)) ([edfd65f](https://github.com/LuanRT/YouTube.js/commit/edfd65f5e08a9155b8c31d8127a4e309313b39de))

## [13.2.0](https://github.com/LuanRT/YouTube.js/compare/v13.1.0...v13.2.0) (2025-03-20)


### Features

* Add AccessibilityContext and CommandContext classes + improve type definitions and parsing logic across multiple nodes ([923e9c2](https://github.com/LuanRT/YouTube.js/commit/923e9c28e34b00841413824d82d10bf644186edc))


### Bug Fixes

* **Constants:** Update the iOS client version ([#924](https://github.com/LuanRT/YouTube.js/issues/924)) ([219d88b](https://github.com/LuanRT/YouTube.js/commit/219d88b2005431c6697f04e1fa2c5e8528a9ce57))
* **Format:** Parse xtags from protobuf to support SABR-only responses ([#909](https://github.com/LuanRT/YouTube.js/issues/909)) ([00c199a](https://github.com/LuanRT/YouTube.js/commit/00c199ac69bc6d7be19aeae04a245f30b64272c2))

## [13.1.0](https://github.com/LuanRT/YouTube.js/compare/v13.0.0...v13.1.0) (2025-02-21)


### Features

* **Channel:** Add `getCourses` method ([#883](https://github.com/LuanRT/YouTube.js/issues/883)) ([b3a4862](https://github.com/LuanRT/YouTube.js/commit/b3a48621518f09d1ce309071499d9626cc1a8488))
* **CommentView:** Parse `prepareAccountCommand` ([d0d48bf](https://github.com/LuanRT/YouTube.js/commit/d0d48bf525cc2a95dd3397a3142bea113ea9782e))
* **CommentView:** Parse some extra tooltips ([32125c7](https://github.com/LuanRT/YouTube.js/commit/32125c704565f425806a0721edd96e01028e3fdd))
* **CompactLink:** Parse `subtitle`, `iconType`, and `iconType` ([6d57353](https://github.com/LuanRT/YouTube.js/commit/6d57353a8021430a5253e2fb2c974ca98d731791))
* **FormatUtils:** choose more specific format by itag or codec ([#884](https://github.com/LuanRT/YouTube.js/issues/884)) ([1c1577e](https://github.com/LuanRT/YouTube.js/commit/1c1577e85fd46cbfa15bcee6531d9aafdda787e5))
* **parser:** `Add AnimatedThumbnailOverlayView` ([#903](https://github.com/LuanRT/YouTube.js/issues/903)) ([0cb92d9](https://github.com/LuanRT/YouTube.js/commit/0cb92d9620c13bf6b719b384f917ad2a658e15b1))


### Bug Fixes

* **dependencies:** Update `jintr` to version 3.2.1 ([02dfcae](https://github.com/LuanRT/YouTube.js/commit/02dfcae612dd528ce4f1f3f6c62ceefd02a5c790))
* **DialogView:** Type mismatch ([#897](https://github.com/LuanRT/YouTube.js/issues/897)) ([b731db8](https://github.com/LuanRT/YouTube.js/commit/b731db86c51ba292c848272f28b5a9aa2e2a6956))
* **FormatUtils:** itag matching ([#886](https://github.com/LuanRT/YouTube.js/issues/886)) ([774b3a7](https://github.com/LuanRT/YouTube.js/commit/774b3a75244db85ceb7b00f658dc2dfeb2eb4e7e))
* **innertube:** Allowing `getStreamingData` to use client ([#895](https://github.com/LuanRT/YouTube.js/issues/895)) ([5aecd0a](https://github.com/LuanRT/YouTube.js/commit/5aecd0ace96c371f0b15cdc6e45ef09beb5696af))
* **Innertube:** Properly encoded params in getPost() ([#882](https://github.com/LuanRT/YouTube.js/issues/882)) ([7d5c972](https://github.com/LuanRT/YouTube.js/commit/7d5c972c98d7c69b0b687b241c652f3098907a9f))
* **LockupMetadataView:** Parse `menuButton` ([3ffdee9](https://github.com/LuanRT/YouTube.js/commit/3ffdee9554b06db137d93e43b33fac124becf31f))
* **LockupView:** Add overlay nodes used by `VIDEO` views ([424c653](https://github.com/LuanRT/YouTube.js/commit/424c65356c24d19a921e24aadcbbb3cd03ab103a))
* **LockupView:** Fix `content_image` parsing ([083aec1](https://github.com/LuanRT/YouTube.js/commit/083aec1c805cce6b04a75e4f017b5cdf0bb6108e))
* **music#getPlaylist:** Handle `ContinuationItem` nodes ([a3fafe2](https://github.com/LuanRT/YouTube.js/commit/a3fafe2f7979313906dbaf1a7f9779f411266d6b)), closes [#904](https://github.com/LuanRT/YouTube.js/issues/904)
* **Parser:** Add `UpdateEngagementPanelContentCommand` ([3f960ef](https://github.com/LuanRT/YouTube.js/commit/3f960effa24c3b14fa3c6aadf4c7badf0ac965c9))
* **Playlist:** is_editable ([#894](https://github.com/LuanRT/YouTube.js/issues/894)) ([2b42199](https://github.com/LuanRT/YouTube.js/commit/2b4219959cbbb27cd80788e66b608fdeed3a1f1e))


### Reverts

* "fix(toDash): Fix default audio stream for dubbed movie trailers ([#858](https://github.com/LuanRT/YouTube.js/issues/858))" ([#896](https://github.com/LuanRT/YouTube.js/issues/896)) ([4325717](https://github.com/LuanRT/YouTube.js/commit/432571769ebc6634c2c9a4c1b5e53cfbbd2a5f0a))

## [13.0.0](https://github.com/LuanRT/YouTube.js/compare/v12.2.0...v13.0.0) (2025-01-20)


### ⚠ BREAKING CHANGES

* Remove `web.bundle.min`

### Features

* **ContentMetadataView:** Parse `enableTruncation` ([#863](https://github.com/LuanRT/YouTube.js/issues/863)) ([0a3104b](https://github.com/LuanRT/YouTube.js/commit/0a3104bafc03ccd29420a835b420f628b380991d))
* **getSearchSuggestions:** Add optional `pq` param for better suggestions ([c61db19](https://github.com/LuanRT/YouTube.js/commit/c61db19f2e3bd44bc5bf2ebdf8de041f169d8fab))
* **Innertube:** Add `getAttestationChallenge` ([#869](https://github.com/LuanRT/YouTube.js/issues/869)) ([33c27dd](https://github.com/LuanRT/YouTube.js/commit/33c27ddcb5ea96241b2a0bf4ec14ec5937264998))
* **Innertube:** Add ability to get individual community posts and community post comments ([#861](https://github.com/LuanRT/YouTube.js/issues/861)) ([360b29e](https://github.com/LuanRT/YouTube.js/commit/360b29ee60af2cf803106ca5315c365ddacbe51b))
* **LiveChatPaidMessage:** Parse `headerOverlayImage` and `lowerBumper` ([#851](https://github.com/LuanRT/YouTube.js/issues/851)) ([ef37aa0](https://github.com/LuanRT/YouTube.js/commit/ef37aa0a5abb573f192f86d1accb88d90d707752))
* **Music:** Add continuation support for "Up next" tab in `TrackInfo` ([#770](https://github.com/LuanRT/YouTube.js/issues/770)) ([2913d5f](https://github.com/LuanRT/YouTube.js/commit/2913d5f43dd28b9146cf05607cbe28d727463d51))
* **PageHeaderView:** Parse `heroImage` ([a602a31](https://github.com/LuanRT/YouTube.js/commit/a602a317aaaffa575d2b03754f0625a6e5858162))
* **Parser:** Add `AvatarStackView` ([c631022](https://github.com/LuanRT/YouTube.js/commit/c6310228fee1ed01f93a0e4e0482d09a967ef1be))
* **Parser:** Add `HowThisWasMadeSectionView` node ([5da8a66](https://github.com/LuanRT/YouTube.js/commit/5da8a66551c85fa45a01713383e6f621db053b46))
* **parser:** Add `ReplaceLiveChatAction` ([#847](https://github.com/LuanRT/YouTube.js/issues/847)) ([342fdd1](https://github.com/LuanRT/YouTube.js/commit/342fdd1db30bc61de5f19fc4ed35db8931706903))
* **Parser:** Implement utility class to parse `rendererContext` ([3a11b99](https://github.com/LuanRT/YouTube.js/commit/3a11b99429ff9d8cc9aebc7bbee0b7645e30f7ff))
* **parser:** Parse `OpenPopupAction` in `onResponseReceivedEndpoints` arrays ([45b7342](https://github.com/LuanRT/YouTube.js/commit/45b734288e070ef5e347cec5bae445d0cf883eba))
* **Parser:** Parse YpcTrailer in VideoInfo ([#842](https://github.com/LuanRT/YouTube.js/issues/842)) ([c0043d0](https://github.com/LuanRT/YouTube.js/commit/c0043d0194f582c2ed85341291e2eace25dd78d8))
* **parser:** Update `Button` ([#857](https://github.com/LuanRT/YouTube.js/issues/857)) ([5f899fc](https://github.com/LuanRT/YouTube.js/commit/5f899fcdb30deefc189e8325e4358812c5b05800))
* **parser:** Update `LiveChatPaidMessage` ([#846](https://github.com/LuanRT/YouTube.js/issues/846)) ([73362c6](https://github.com/LuanRT/YouTube.js/commit/73362c68fbc8b966ff46cc8b145e1e8d9fbe32ee))
* **parser:** Update `LiveChatPaidSticker` ([#849](https://github.com/LuanRT/YouTube.js/issues/849)) ([3c28c0d](https://github.com/LuanRT/YouTube.js/commit/3c28c0d2c2b583a31fe0e49cce4cdfbfe380874d))
* **parser:** Update `LiveChatTextMessage` ([#864](https://github.com/LuanRT/YouTube.js/issues/864)) ([9025122](https://github.com/LuanRT/YouTube.js/commit/902512248417ae86e25082d429b13d8c57a5c5b1))
* **parser:** Update `LiveChatTickerPaidMessageItem` ([#845](https://github.com/LuanRT/YouTube.js/issues/845)) ([29e8d30](https://github.com/LuanRT/YouTube.js/commit/29e8d3015a3d17383a8be4e6f46b389d10f111f3))
* **parser:** Update `LiveChatTickerPaidStickerItem` ([#848](https://github.com/LuanRT/YouTube.js/issues/848)) ([5f83a74](https://github.com/LuanRT/YouTube.js/commit/5f83a7416d5dc3167e6af2767e9b90f4bf89f3dc))
* **parser:** Update `LiveChatViewerEngagementMessage` ([#856](https://github.com/LuanRT/YouTube.js/issues/856)) ([b4a947a](https://github.com/LuanRT/YouTube.js/commit/b4a947a9eb9dd1ae6e9d1da1a00083ac1afca03e))
* **Playlists:** Implement `addToLibrary` and `removeFromLibrary` ([#844](https://github.com/LuanRT/YouTube.js/issues/844)) ([48460e4](https://github.com/LuanRT/YouTube.js/commit/48460e4184bac0f6626550b80696f950f7626beb))
* **RichGrid:** Parse `targetId` ([e571ee2](https://github.com/LuanRT/YouTube.js/commit/e571ee2426c6003c1bc690cbf98b0ab72ebfaa10))
* **Session:** Allow using a fixed user agent for InnerTube requests ([#876](https://github.com/LuanRT/YouTube.js/issues/876)) ([4d36655](https://github.com/LuanRT/YouTube.js/commit/4d36655b2dad74aeb74e869ca8259e9d13dfb512))
* **SubscribeButton:** Add `unsubscribe_text` ([75b8964](https://github.com/LuanRT/YouTube.js/commit/75b89641805abada1498edebac5b72a40860b215))
* **ToggleButtonView:** Add `is_toggled` ([88af6d8](https://github.com/LuanRT/YouTube.js/commit/88af6d89a56907d6f2263c01fc158400788fb5b4))


### Bug Fixes

* **ButtonCardView:** Correct typo ([#855](https://github.com/LuanRT/YouTube.js/issues/855)) ([6536801](https://github.com/LuanRT/YouTube.js/commit/6536801ec2e4f9b93d1e272b7b04e2777b74abad))
* **DescriptionPreviewView:** Parsing errors when certain fields are missing ([c2dd803](https://github.com/LuanRT/YouTube.js/commit/c2dd803eeaeec3292d92bc0efaaa2404fb87355c))
* **getSearchSuggestions:** Allow empty queries ([523700b](https://github.com/LuanRT/YouTube.js/commit/523700b728e8b2f126b1b6266dc153ad683dcbcb))
* **LiveChatTextMessage:** Make some fields optional ([#877](https://github.com/LuanRT/YouTube.js/issues/877)) ([a035b71](https://github.com/LuanRT/YouTube.js/commit/a035b7169614ac92081b8cb377711d7da559e65b))
* **sendMessage:** Handle `RunAttestationCommand` in response actions ([#859](https://github.com/LuanRT/YouTube.js/issues/859)) ([826a954](https://github.com/LuanRT/YouTube.js/commit/826a9541a44121bafe4ce19f2cd4a68fcabb2384))
* **Text#fromAttributed:** Fix `StyleRun` assuming that the `startIndex` and `length` always exist ([#862](https://github.com/LuanRT/YouTube.js/issues/862)) ([732a30c](https://github.com/LuanRT/YouTube.js/commit/732a30c09f50a9d78d5d1686ffef88a3bde2e53e))
* **Text#toHTML:** Return empty string if the text is `undefined` ([f3c777b](https://github.com/LuanRT/YouTube.js/commit/f3c777b31638cc9c6ce7f4b7ba566ff0534b47dc))
* **TextRun:** Add `img` element only if an URL is available ([913dcc7](https://github.com/LuanRT/YouTube.js/commit/913dcc74eadf1a5df7878688d2c6cf434642f1b5))
* **toDash:** Fix default audio stream for dubbed movie trailers ([#858](https://github.com/LuanRT/YouTube.js/issues/858)) ([0054690](https://github.com/LuanRT/YouTube.js/commit/00546909c02841c7e404766b13f2c02e42e3f6fc))


### Performance Improvements

* **constants:** Move the client name IDs into their own CLIENT_NAME_IDS object ([#875](https://github.com/LuanRT/YouTube.js/issues/875)) ([06887e9](https://github.com/LuanRT/YouTube.js/commit/06887e99fb1c2546e74b5026cb1ae1ce0be2e3e9))
* Optimise DASH manifest generation ([#870](https://github.com/LuanRT/YouTube.js/issues/870)) ([1a3d663](https://github.com/LuanRT/YouTube.js/commit/1a3d663cc56a54b8517eb5f82e7892d37db3082e))


### Code Refactoring

* Remove `web.bundle.min` ([e54e499](https://github.com/LuanRT/YouTube.js/commit/e54e499ff553dab51e6d9d1aebc090b50fec29ba))

## [12.2.0](https://github.com/LuanRT/YouTube.js/compare/v12.1.0...v12.2.0) (2024-12-12)


### Features

* **Actions:** Allow auth check to be skipped ([67f13ff](https://github.com/LuanRT/YouTube.js/commit/67f13fffacec2c655a03d66c6d8016620d9abcf9))
* add `VideoMetadataCarouselView` ([#839](https://github.com/LuanRT/YouTube.js/issues/839)) ([9a9bb76](https://github.com/LuanRT/YouTube.js/commit/9a9bb76a928594c5c5f3e828c86081bf79c2562d))
* **parser:** Add `ActiveAccountHeader` ([5f233ae](https://github.com/LuanRT/YouTube.js/commit/5f233ae34e278e7f7a0c48e4ba762d9bac9e312f))
* **parser:** Add `ButtonCardView` ([#834](https://github.com/LuanRT/YouTube.js/issues/834)) ([eeaae62](https://github.com/LuanRT/YouTube.js/commit/eeaae6209f238b838b9b7fdd9bbef89f4f858fa3))
* **parser:** Add `ClientSideToggleMenuItem` ([#835](https://github.com/LuanRT/YouTube.js/issues/835)) ([0b2b0da](https://github.com/LuanRT/YouTube.js/commit/0b2b0da9577f8d6ad19393700071ea9f26d4da10))
* **parser:** Add `PlaylistThumbnailOverlay` ([c8173c8](https://github.com/LuanRT/YouTube.js/commit/c8173c88e0e17ec4bb4e93af1867c55d07611cc0))
* **parser:** Update `LiveChatBanner` ([#840](https://github.com/LuanRT/YouTube.js/issues/840)) ([69d42b2](https://github.com/LuanRT/YouTube.js/commit/69d42b291c927abb9d84f97ed03518c4ddd4506e))
* **parser:** Update `LiveChatMembershipItem` ([#836](https://github.com/LuanRT/YouTube.js/issues/836)) ([0c319aa](https://github.com/LuanRT/YouTube.js/commit/0c319aacdeba106d84b7f44505a7a296a154f97a))


### Bug Fixes

* **Player:** Fix signature algorithm extraction again ([#837](https://github.com/LuanRT/YouTube.js/issues/837)) ([13e7961](https://github.com/LuanRT/YouTube.js/commit/13e796123b87136f2d5d3b3c9b3ed079a014bf46))

## [12.1.0](https://github.com/LuanRT/YouTube.js/compare/v12.0.0...v12.1.0) (2024-12-10)


### Features

* Add `MWEB` client ([4bf125b](https://github.com/LuanRT/YouTube.js/commit/4bf125b6a53460f631410e1ab949a16cc0c7d095))
* **parser:** Add mobile guide nodes ([ad2ae51](https://github.com/LuanRT/YouTube.js/commit/ad2ae51b97d84dcb9d2547b4cfef7402f2410404))


### Bug Fixes

* **Player:** Bump cache version ([283172f](https://github.com/LuanRT/YouTube.js/commit/283172f22032d60b407cb0159a391a147b569432))
* **Player:** Fix signature algorithm extraction ([#832](https://github.com/LuanRT/YouTube.js/issues/832)) ([ce4996c](https://github.com/LuanRT/YouTube.js/commit/ce4996cea7b0607cb7f9aca7ae9c9e439d964a5a))

## [12.0.0](https://github.com/LuanRT/YouTube.js/compare/v11.0.1...v12.0.0) (2024-12-05)


### ⚠ BREAKING CHANGES

* **parser:** Remove old comment node
* **Log:** Convert Log class to module ([#814](https://github.com/LuanRT/YouTube.js/issues/814))
* **parser:** Remove getters that have been deprecated for a long time ([#815](https://github.com/LuanRT/YouTube.js/issues/815))
* **parser:** Implement endpoint/command parsers ([#812](https://github.com/LuanRT/YouTube.js/issues/812))

### Features

* **account:** Add missing property `channel_handle` ([#789](https://github.com/LuanRT/YouTube.js/issues/789)) ([677e1f0](https://github.com/LuanRT/YouTube.js/commit/677e1f08075a4a59274f89f3eb65967d7d0ab01b))
* Add `getCourses` ([#798](https://github.com/LuanRT/YouTube.js/issues/798)) ([cfb48fa](https://github.com/LuanRT/YouTube.js/commit/cfb48fab89792d87a7377eaf15a56d289d26769b))
* **EngagementPanelTitleHeader:** Add `contextual_info` and `menu` ([af3a916](https://github.com/LuanRT/YouTube.js/commit/af3a91645d84798e744519ec8f24e565cc1ecdb1))
* **Log:** Convert Log class to module ([#814](https://github.com/LuanRT/YouTube.js/issues/814)) ([fc55716](https://github.com/LuanRT/YouTube.js/commit/fc5571629eca037af7de03f4b903da6add1f300b))
* **NavigationEndpoint:** Add name property ([bdebb9f](https://github.com/LuanRT/YouTube.js/commit/bdebb9f741291d2f0640274454c90b5ccda8ea5d))
* **parser:** Add `AddToPlaylist` node ([2940f7b](https://github.com/LuanRT/YouTube.js/commit/2940f7b908ee720492994a41efdabb9fae08708c))
* **parser:** Add `animated_image` to `PageHeaderView` ([#819](https://github.com/LuanRT/YouTube.js/issues/819)) ([8e50ebd](https://github.com/LuanRT/YouTube.js/commit/8e50ebd92583ae76b080fed4c7599684370dc09d))
* **parser:** Add `ChangeEngagementPanelVisibilityAction` ([c2b2d7a](https://github.com/LuanRT/YouTube.js/commit/c2b2d7ad52d2cdd1d721ae4569fb6f8cb0540476))
* **parser:** Add `ChangeEngagementPanelVisibilityEndpoint` ([2824900](https://github.com/LuanRT/YouTube.js/commit/28249008521b4cb600756f8ff83e10ec3037ba69))
* **parser:** Add `LiveChatBannerChatSummary` node, update `TextRun` node ([#809](https://github.com/LuanRT/YouTube.js/issues/809)) ([7fb00fa](https://github.com/LuanRT/YouTube.js/commit/7fb00fa378574d1567d436f8a824fbb618db2373))
* **parser:** Add `LiveChatBannerRedirect` node ([#799](https://github.com/LuanRT/YouTube.js/issues/799)) ([ad302b8](https://github.com/LuanRT/YouTube.js/commit/ad302b8b17c0bfc1d81728130d4ba25a88ed241f))
* **parser:** add `LiveChatModeChangeMessage` node ([#811](https://github.com/LuanRT/YouTube.js/issues/811)) ([7156a58](https://github.com/LuanRT/YouTube.js/commit/7156a585c036a5000d0a50f3f4860a462762fdfe))
* **parser:** Add `LiveChatSponsorshipsGiftPurchaseAnnouncement` and `LiveChatSponsorshipsHeader` nodes ([#793](https://github.com/LuanRT/YouTube.js/issues/793)) ([4e9c2a5](https://github.com/LuanRT/YouTube.js/commit/4e9c2a585bf84751dd4e3964f70fba284c8b8e38))
* **parser:** Add `LiveChatSponsorshipsGiftRedemptionAnnouncement` node ([#795](https://github.com/LuanRT/YouTube.js/issues/795)) ([20f7971](https://github.com/LuanRT/YouTube.js/commit/20f797129973c6b91fa228e50d375b0c9d0226d2))
* **parser:** Add `MenuFlexibleItem` ([bc9a0ed](https://github.com/LuanRT/YouTube.js/commit/bc9a0ed6c1dd7aac280e0461823827d71ce0991f))
* **parser:** Add `NotificationAction` node ([d36ddb8](https://github.com/LuanRT/YouTube.js/commit/d36ddb804a03b7d22cd20c2b846f86dd49689c0c))
* **parser:** Add `PlayerOverlayVideoDetails` node ([dc2ed04](https://github.com/LuanRT/YouTube.js/commit/dc2ed046b8424134c675f30e7452fbd6bda0d228))
* **parser:** Add `RunAttestationCommand` ([4729016](https://github.com/LuanRT/YouTube.js/commit/4729016fb98e7045ee4043857be7eef780c01e35))
* **parser:** Add `ShowEngagementPanelEndpoint` ([ec85b0f](https://github.com/LuanRT/YouTube.js/commit/ec85b0f9421156c674c5c4d4a3a2e39eca7dbfbf))
* **parser:** Add `SignalAction` node ([feeb21b](https://github.com/LuanRT/YouTube.js/commit/feeb21b3ebb83772fcceb1f6b0a90c17db613451))
* **parser:** Add `UnifiedSharePanel` ([4a1397f](https://github.com/LuanRT/YouTube.js/commit/4a1397f1bcc2ad9964626b11c90831b90989b6af))
* **parser:** Add `UpdateSubscribeButtonAction` ([fdb7540](https://github.com/LuanRT/YouTube.js/commit/fdb754043b809223ae8938fbbdd5780f585b697e))
* **parser:** Add `VideoViewCount` node ([ad448f8](https://github.com/LuanRT/YouTube.js/commit/ad448f8106116e44e65eb5f5351c38fc4a31d809))
* **parser:** Add optional image property to LockupMetadataView ([#806](https://github.com/LuanRT/YouTube.js/issues/806)) ([0914299](https://github.com/LuanRT/YouTube.js/commit/091429921530d65daf8f5b281c7c54117ee9a474))
* **Parser:** add support for parsing subtitle for `RichShelf` ([#805](https://github.com/LuanRT/YouTube.js/issues/805)) ([038efff](https://github.com/LuanRT/YouTube.js/commit/038efff17f3b12d80619c8990ca880e919d2bfe5))
* **Parser:** Add support for parsing subtitle for `Shelf` ([#792](https://github.com/LuanRT/YouTube.js/issues/792)) ([34ae38c](https://github.com/LuanRT/YouTube.js/commit/34ae38cbf4aa0a42a6024fa99eb0fe553639c8ce))
* **SubscribeButton:** Parse more endpoints ([8bf9eb7](https://github.com/LuanRT/YouTube.js/commit/8bf9eb7044ad9a5de0892207690195f5646df288))
* **VideoViewCount:** Add `extra_short_view_count` field ([d10fe68](https://github.com/LuanRT/YouTube.js/commit/d10fe6834a0d063d94b65289d54a52ed3398eff4))


### Bug Fixes

* **ExpandableVideoDescriptionBody:** Parse attributed description ([360580e](https://github.com/LuanRT/YouTube.js/commit/360580ea6ea6fbdd7fbc0aa038d96b17de17e4f4))
* **parser:** The AvatarView.image_processor property is optional ([#807](https://github.com/LuanRT/YouTube.js/issues/807)) ([4b178e4](https://github.com/LuanRT/YouTube.js/commit/4b178e4bfbc4cb003ed098afcd0370f98dbf834b))
* **parser:** Update list of possible content_type in LockupView ([#808](https://github.com/LuanRT/YouTube.js/issues/808)) ([680da9f](https://github.com/LuanRT/YouTube.js/commit/680da9f501db02a9bed2fa8357df021e63024e5f))
* **Player:** Add more ways to find the nsig algo ([acfb0c5](https://github.com/LuanRT/YouTube.js/commit/acfb0c58bec25782aa92963cd590a56967229d62))
* **PlaylistAddToOption:** Use correct type for `contains_selected_videos` ([53d1c75](https://github.com/LuanRT/YouTube.js/commit/53d1c759b65ce9b6cb9f236c02828077d4f506cc))
* **ReelPlayerOverlay:** Update `subscribe_button_renderer` type to include SubscribeButton ([daa5a29](https://github.com/LuanRT/YouTube.js/commit/daa5a2982b24f107681050f2b534986b4d374c5d))
* **SignalAction:** Rename `action` to `signal` ([8ab760e](https://github.com/LuanRT/YouTube.js/commit/8ab760ea2e268a4f108b2b4a8d46193f5450bf4c))
* **SubscribeButton:** Parse endpoints using `NavigationEndpoint` ([126a66f](https://github.com/LuanRT/YouTube.js/commit/126a66f317da0c6b486202ad04483b9799bfaf4c))
* **UnifiedSharePanel:** Check if `thirdPartyNetworkSection` exists ([d3f6af0](https://github.com/LuanRT/YouTube.js/commit/d3f6af07754f75c578dc11e8ea4815ad91f0cac4))
* **VideoAttributeView:** Parse `secondarySubtitle` only if exists ([0a99342](https://github.com/LuanRT/YouTube.js/commit/0a99342ccbd6f8b1c611ef6b157a599ff5ae2247))
* **VideoCard:** fix parsing author, view count and published date ([#791](https://github.com/LuanRT/YouTube.js/issues/791)) ([a4394db](https://github.com/LuanRT/YouTube.js/commit/a4394dbb82203eeabcb8684ca9105f83e3b0fb1b))
* **VideoSecondaryInfo:** Parse `show_more_text` and `show_less_text` correctly ([790f817](https://github.com/LuanRT/YouTube.js/commit/790f8172fc2bbdbf17f16b04a2676fd9088d8878))


### Miscellaneous Chores

* **parser:** Remove getters that have been deprecated for a long time ([#815](https://github.com/LuanRT/YouTube.js/issues/815)) ([9cf0d3f](https://github.com/LuanRT/YouTube.js/commit/9cf0d3f3b3099af3dd59bc4ca99fefe217a91020))


### Code Refactoring

* **parser:** Implement endpoint/command parsers ([#812](https://github.com/LuanRT/YouTube.js/issues/812)) ([7397aa3](https://github.com/LuanRT/YouTube.js/commit/7397aa3f6425cb2f3dcc625502fd1ce5a5db6db3))
* **parser:** Remove old comment node ([2f087d4](https://github.com/LuanRT/YouTube.js/commit/2f087d47a0199870b313717f3d01598f8168be4b))

## [11.0.1](https://github.com/LuanRT/YouTube.js/compare/v11.0.0...v11.0.1) (2024-10-28)


### Bug Fixes

* **VideoInfo:** Fix like count being undefined ([#787](https://github.com/LuanRT/YouTube.js/issues/787)) ([182bf42](https://github.com/LuanRT/YouTube.js/commit/182bf42d3cdf5148c667e958cd4d4eaa091a6d68))

## [11.0.0](https://github.com/LuanRT/YouTube.js/compare/v10.5.0...v11.0.0) (2024-10-28)


### ⚠ BREAKING CHANGES

* Deprecate `account#getAnalytics`, `account#getTimeWatched` and `account#getAnalytics`

### Features

* Add `TVHTML5` InnerTube client ([b45609a](https://github.com/LuanRT/YouTube.js/commit/b45609aa0fcd801c379ffdafd04c6c3c2ed3deba))
* Add `WEB_CREATOR` client ([#757](https://github.com/LuanRT/YouTube.js/issues/757)) ([dd7f5cf](https://github.com/LuanRT/YouTube.js/commit/dd7f5cf778b8acca95cc6d9c6e379e3e87e0ee8a))
* **history:** Add ability to remove videos from watch history ([#706](https://github.com/LuanRT/YouTube.js/issues/706)) ([22dd71d](https://github.com/LuanRT/YouTube.js/commit/22dd71d7dad5029f2f7ed0deafbae3386ebe298d))
* **ProtoUtils:** Add support for creating NextParams ([#762](https://github.com/LuanRT/YouTube.js/issues/762)) ([910c979](https://github.com/LuanRT/YouTube.js/commit/910c9791e7aed9e28cd42f3bcf28b8b8d89edb21))
* Support auto-dubbed audio tracks ([#786](https://github.com/LuanRT/YouTube.js/issues/786)) ([a4ef224](https://github.com/LuanRT/YouTube.js/commit/a4ef2249ffbe14f5d5fa702b269dd0f61e14ada8))


### Bug Fixes

* fix deno usage of protobuf and jintr ([#776](https://github.com/LuanRT/YouTube.js/issues/776)) ([02513b7](https://github.com/LuanRT/YouTube.js/commit/02513b76ed66041044e80f8749df7f29379c424e))
* Include jinter in the cjs build ([305a398](https://github.com/LuanRT/YouTube.js/commit/305a398158a6cac82e6ef288fed4bf1661c89d52))
* **InteractionManager:** Use `WEB` for all actions ([d9ac99d](https://github.com/LuanRT/YouTube.js/commit/d9ac99d3324c2987aebb6b8e40317780478b7c19))
* **LiveChat#sendMessage:** Switch to `WEB` client ([bb3f114](https://github.com/LuanRT/YouTube.js/commit/bb3f114aa34dd50602da794dcb3aa3f28a5a2ed9))
* **package:** Use `jsr:@luanrt/jintr` on Deno ([d9ec23c](https://github.com/LuanRT/YouTube.js/commit/d9ec23c73ca4f370df45926206a2ff070bb6552f))
* **parser:** Fix ShortsLockupView assuming that the primary text always exists ([#775](https://github.com/LuanRT/YouTube.js/issues/775)) ([43cef9e](https://github.com/LuanRT/YouTube.js/commit/43cef9e67e9defbfc498b6381ae93f967622f83b))
* **toDash:** Fix dash.js 4.x compatibility ([#765](https://github.com/LuanRT/YouTube.js/issues/765)) ([5ff30e1](https://github.com/LuanRT/YouTube.js/commit/5ff30e12ded29afff5a758cbe96ac3418e6d20aa))


### Code Refactoring

* Deprecate `account#getAnalytics`, `account#getTimeWatched` and `account#getAnalytics` ([0081e11](https://github.com/LuanRT/YouTube.js/commit/0081e11ebcff8c719902d93edf8760d3e8702e00))

## [10.5.0](https://github.com/LuanRT/YouTube.js/compare/v10.4.0...v10.5.0) (2024-09-19)


### Features

* Add `WEB_EMBEDDED` client ([#756](https://github.com/LuanRT/YouTube.js/issues/756)) ([eaf218f](https://github.com/LuanRT/YouTube.js/commit/eaf218f5da758fc37d71f7d00ba9e42533194f8a))
* extend music getInfo to allow MusicResponsiveListItem and Nav Endpoints ([#751](https://github.com/LuanRT/YouTube.js/issues/751)) ([5db449c](https://github.com/LuanRT/YouTube.js/commit/5db449cc6d86b2df1e92302ec5c74e6d44d822fb))
* **parser:** Add `ShortsLockupView` and `BadgeView` nodes ([#746](https://github.com/LuanRT/YouTube.js/issues/746)) ([e1e76ee](https://github.com/LuanRT/YouTube.js/commit/e1e76ee61629f84f4b7de9579ae9f6d6bf97bab8))


### Bug Fixes

* **ItemSection:** FeedFilterChipBar parse error ([#741](https://github.com/LuanRT/YouTube.js/issues/741)) ([bf6cc00](https://github.com/LuanRT/YouTube.js/commit/bf6cc006997675010db61fcd776244b234be5611))
* **parser:** The icon_name property does not always exist in ThumbnailBadgeView ([#745](https://github.com/LuanRT/YouTube.js/issues/745)) ([094a96f](https://github.com/LuanRT/YouTube.js/commit/094a96fb5d8170d1f727ef6da84b258596b1a09a))
* **Session:** Set default values for `hl` and `gl` in context builder ([7a39326](https://github.com/LuanRT/YouTube.js/commit/7a3932682112a0d76c04f65ae35445fc35403a00))

## [10.4.0](https://github.com/LuanRT/YouTube.js/compare/v10.3.0...v10.4.0) (2024-08-27)


### Features

* **parser:** Add `VideoAttributesSectionView` node ([#732](https://github.com/LuanRT/YouTube.js/issues/732)) ([4b60b97](https://github.com/LuanRT/YouTube.js/commit/4b60b97132b0ee42b41838f3336c582a7f7f7aec))
* **Player:** Add support for Proof of Identity tokens ([#708](https://github.com/LuanRT/YouTube.js/issues/708)) ([c9f0ddd](https://github.com/LuanRT/YouTube.js/commit/c9f0ddd573de297c0b384e422e6c1737454926e2))
* **Utils:** Add `UMP` parser ([261f2ac](https://github.com/LuanRT/YouTube.js/commit/261f2ac12b6a9a5bd5f7a43557018de333f7bec3))


### Bug Fixes

* **examples:** Use BgUtils to generate pot [skip ci] ([d89909a](https://github.com/LuanRT/YouTube.js/commit/d89909a19a1486bee7e3275014725b4e3dc2cbe2))
* **FormatOptions:** `client` missing some values ([fcd00b0](https://github.com/LuanRT/YouTube.js/commit/fcd00b0fb0f88a16c27da1ed89e9a2c4887e5c52))
* **PlayerEndpoint:** Don't set `undefined` fields ([0e91a08](https://github.com/LuanRT/YouTube.js/commit/0e91a08ae2194a07defc4b1e12ff3edbe13b72df))
* **Search:** Fix it occasionally returning only a small number of results ([#720](https://github.com/LuanRT/YouTube.js/issues/720)) ([2c0bb23](https://github.com/LuanRT/YouTube.js/commit/2c0bb237e1d0eb160dc3f879f5cab2022d9b5b04))
* **Session:** `PoToken` not being set correctly ([#729](https://github.com/LuanRT/YouTube.js/issues/729)) ([bb6e647](https://github.com/LuanRT/YouTube.js/commit/bb6e647b8c88753669acde43d0d648aaf11caba6))
* **Session:** Fix remote visitor data not gettting used ([#731](https://github.com/LuanRT/YouTube.js/issues/731)) ([7afc3da](https://github.com/LuanRT/YouTube.js/commit/7afc3da80ee3b5aa6edd2a899be82c1a21e03556))
* **Session:** Visitor data not being used properly ([f1973c1](https://github.com/LuanRT/YouTube.js/commit/f1973c11d9a492898b5e72b1f2b79291b674e229))
* **ThumbnailOverlayResumePlayback:** Update `percent_duration_watched` type ([#737](https://github.com/LuanRT/YouTube.js/issues/737)) ([f9ccba4](https://github.com/LuanRT/YouTube.js/commit/f9ccba4af5268d67d8610a1a5d623964f56d170d))

## [10.3.0](https://github.com/LuanRT/YouTube.js/compare/v10.2.0...v10.3.0) (2024-08-01)


### Features

* **parser:** Add `EomSettingsDisclaimer` node ([#703](https://github.com/LuanRT/YouTube.js/issues/703)) ([a9bf225](https://github.com/LuanRT/YouTube.js/commit/a9bf225a62108e47a50316235a83a814c682d745))
* **PlaylistManager:** Add ability to remove videos by set ID ([#715](https://github.com/LuanRT/YouTube.js/issues/715)) ([d85fbc5](https://github.com/LuanRT/YouTube.js/commit/d85fbc56cf0fd7367b182ae36e65c1701bc5e62d))


### Bug Fixes

* **HTTPClient:** Adjust more context fields for the iOS client ([#705](https://github.com/LuanRT/YouTube.js/issues/705)) ([3153375](https://github.com/LuanRT/YouTube.js/commit/3153375bcaa6c03afba9da8474e6a9d37471ed29))

## [10.2.0](https://github.com/LuanRT/YouTube.js/compare/v10.1.0...v10.2.0) (2024-07-25)


### Features

* **Format:** Add `is_secondary` for detecting secondary audio tracks ([#697](https://github.com/LuanRT/YouTube.js/issues/697)) ([a352dde](https://github.com/LuanRT/YouTube.js/commit/a352ddeb9db001e99f49025048ad0942d84f1b3e))
* **parser:** add classdata to unhandled parse errors ([#691](https://github.com/LuanRT/YouTube.js/issues/691)) ([090539b](https://github.com/LuanRT/YouTube.js/commit/090539b28f9bc3387d01e37325ba5741b33b1765))
* **proto:** Add `comment_id` to commentSectionParams ([#693](https://github.com/LuanRT/YouTube.js/issues/693)) ([a5f6209](https://github.com/LuanRT/YouTube.js/commit/a5f62093a18705fc822abd86beaa81788b6535ce))


### Bug Fixes

* **parser:** ignore MiniGameCardView node ([#692](https://github.com/LuanRT/YouTube.js/issues/692)) ([6d0bc89](https://github.com/LuanRT/YouTube.js/commit/6d0bc89be18f27a8ce74517f5cab5020d6790328))
* **parser:** ThumbnailView background color ([#686](https://github.com/LuanRT/YouTube.js/issues/686)) ([0f8f92a](https://github.com/LuanRT/YouTube.js/commit/0f8f92a28a5b6143e890626b22ce570730a0cf09))
* **Player:** Bump cache version ([#702](https://github.com/LuanRT/YouTube.js/issues/702)) ([6765f4e](https://github.com/LuanRT/YouTube.js/commit/6765f4e0d791c657fc7411e9cdd2c0f9284e9982))
* **Player:** Fix extracting the n-token decipher algorithm again ([#701](https://github.com/LuanRT/YouTube.js/issues/701)) ([3048f70](https://github.com/LuanRT/YouTube.js/commit/3048f70f60756884bd7b591d770f7b6343cfa259))

## [10.1.0](https://github.com/LuanRT/YouTube.js/compare/v10.0.0...v10.1.0) (2024-07-10)


### Features

* **Session:** Add `configInfo` to InnerTube context ([5a8fd3a](https://github.com/LuanRT/YouTube.js/commit/5a8fd3ad37bce1decad28ec3727453ddd430a561))
* **toDash:** Add option to include WebVTT or TTML captions ([#673](https://github.com/LuanRT/YouTube.js/issues/673)) ([bd9f6ac](https://github.com/LuanRT/YouTube.js/commit/bd9f6ac64ca9ba96e856aabe5fcc175fd9c294dc))
* **toDash:** Add the "dub" role to translated captions ([#677](https://github.com/LuanRT/YouTube.js/issues/677)) ([858cdd1](https://github.com/LuanRT/YouTube.js/commit/858cdd197cb2bb1e1d7a7285966cb56043ad8961))


### Bug Fixes

* **FormatUtils:** Throw an error if download requests fails ([a19511d](https://github.com/LuanRT/YouTube.js/commit/a19511de24bb82007aab072844efe64bbb8698da))
* **InfoPanelContent:** Update InfoPanelContent node to also support `paragraphs` ([4cbaa79](https://github.com/LuanRT/YouTube.js/commit/4cbaa7983f35a82b9907197769672ac3b300bfbe))
* **Player:** Fix extracting the n-token decipher algorithm ([#682](https://github.com/LuanRT/YouTube.js/issues/682)) ([142a7d0](https://github.com/LuanRT/YouTube.js/commit/142a7d042885188605bdc0655d3733502d1e20fa))
* **proto:** Update `Context` message ([62ac2f6](https://github.com/LuanRT/YouTube.js/commit/62ac2f6f32d35fec3c31b5f5d556bd4569fa49f9)), closes [#681](https://github.com/LuanRT/YouTube.js/issues/681)
* **Session:** Round UTC offset minutes ([84f90aa](https://github.com/LuanRT/YouTube.js/commit/84f90aaf2908ecacb9dfb6ce5497c4c4d14a72c3))
* **toDash:** Fix image representations not being spec compliant ([#672](https://github.com/LuanRT/YouTube.js/issues/672)) ([e5aab9a](https://github.com/LuanRT/YouTube.js/commit/e5aab9a9b35f0752cd5ca50bfa25936dce4718c6))
* **YTMusic:** Add support for new header layouts ([14c3a06](https://github.com/LuanRT/YouTube.js/commit/14c3a06d402989e98a9d32c79b2dc26f74fb0219))

## [10.0.0](https://github.com/LuanRT/YouTube.js/compare/v9.4.0...v10.0.0) (2024-06-09)


### ⚠ BREAKING CHANGES

* **Innertube#getPlaylists:** Return a `Feed` instance instead of items
* **OAuth2:** Rewrite auth module ([#661](https://github.com/LuanRT/YouTube.js/issues/661))

### Features

* **Format:** Add `is_drc` ([#656](https://github.com/LuanRT/YouTube.js/issues/656)) ([6bb2086](https://github.com/LuanRT/YouTube.js/commit/6bb2086875d089f47c5f86ce94db9e32cb051319))
* **Platform:** Add support for `react-native` platform ([#593](https://github.com/LuanRT/YouTube.js/issues/593)) ([2980a60](https://github.com/LuanRT/YouTube.js/commit/2980a608b67f18416d7f73f1bdbcf4b897307b26))
* **Session:** Add `enable_session_cache` option ([#664](https://github.com/LuanRT/YouTube.js/issues/664)) ([7953296](https://github.com/LuanRT/YouTube.js/commit/795329658033652625d2d61b275ccf703573a437))
* **toDash:** Add support for stable volume/DRC ([#662](https://github.com/LuanRT/YouTube.js/issues/662)) ([031ffb6](https://github.com/LuanRT/YouTube.js/commit/031ffb696e3b7e160779e8b55a49b0cfa9f95620))


### Bug Fixes

* **ButtonView:** Rename `type` property to `button_type` ([15f3b5f](https://github.com/LuanRT/YouTube.js/commit/15f3b5fdba17f11cddada168de268546875e48f9))
* **Cache:** Use `TextEncoder` to encode compressed data ([384b80e](https://github.com/LuanRT/YouTube.js/commit/384b80ee41d7547a00d8dc17c50c8542629264b5))
* **FlexibleActionsView:** Update actions array type to include `ToggleButtonView` ([040a091](https://github.com/LuanRT/YouTube.js/commit/040a09163903b914f546d5083dbfdeab7175b24c))
* **InfoPanelContainer:** Use new attributed text prop ([5cdb9e1](https://github.com/LuanRT/YouTube.js/commit/5cdb9e1e2fa4ad5abdb3659bb35d0b3edc60123c))
* **ItemSection:** Fix `target_id` not being set because of a typo. ([#655](https://github.com/LuanRT/YouTube.js/issues/655)) ([8106654](https://github.com/LuanRT/YouTube.js/commit/810665407e91b2890a8e555fd759d67ccd800379))
* **MusicResponsiveHeader:** Add `Text` import ([583fd9f](https://github.com/LuanRT/YouTube.js/commit/583fd9f8d70735d071b34bd1d68faa62eeac593a))


### Performance Improvements

* **general:** Add session cache and LZW compression ([#663](https://github.com/LuanRT/YouTube.js/issues/663)) ([cf29664](https://github.com/LuanRT/YouTube.js/commit/cf29664d376ff792602400ef9a4ac301c676735c))


### Code Refactoring

* **Innertube#getPlaylists:** Return a `Feed` instance instead of items ([7660450](https://github.com/LuanRT/YouTube.js/commit/766045049d7154866e6fe32f6d965025d736d77d))
* **OAuth2:** Rewrite auth module ([#661](https://github.com/LuanRT/YouTube.js/issues/661)) ([b6ce5f9](https://github.com/LuanRT/YouTube.js/commit/b6ce5f903fa2285cb381d73aedf02cc5e2712478))

## [9.4.0](https://github.com/LuanRT/YouTube.js/compare/v9.3.0...v9.4.0) (2024-04-29)


### Features

* **Format:** Add `projection_type` and `stereo_layout` ([#643](https://github.com/LuanRT/YouTube.js/issues/643)) ([064436c](https://github.com/LuanRT/YouTube.js/commit/064436cef30e892d8f569d4f7b146557fd72b09f))
* **Format:** Add `spatial_audio_type` ([#647](https://github.com/LuanRT/YouTube.js/issues/647)) ([0ba8c54](https://github.com/LuanRT/YouTube.js/commit/0ba8c54257b068d7e4518c982396acb42f1dd41d))
* **Parser:** Add `MusicResponsiveHeader` node ([ea82bea](https://github.com/LuanRT/YouTube.js/commit/ea82beaa10f6c877d6dd3102e10f6ae382560e0f))

## [9.3.0](https://github.com/LuanRT/YouTube.js/compare/v9.2.1...v9.3.0) (2024-04-11)


### Features

* **CommentView:** Implement comment interaction methods ([1c08bfe](https://github.com/LuanRT/YouTube.js/commit/1c08bfe113804c69fbc4e49b42442d9a63d73be6))


### Bug Fixes

* **CommentThread:** Replies not being parsed correctly ([66e34f9](https://github.com/LuanRT/YouTube.js/commit/66e34f9388429a2088d5c5835d19eebdc881c957))

## [9.2.1](https://github.com/LuanRT/YouTube.js/compare/v9.2.0...v9.2.1) (2024-04-09)


### Bug Fixes

* **toDash:** Add missing transfer characteristics for h264 streams ([#631](https://github.com/LuanRT/YouTube.js/issues/631)) ([0107049](https://github.com/LuanRT/YouTube.js/commit/010704929fa4b737f68a5a1f10bf0b166cfbf905))

## [9.2.0](https://github.com/LuanRT/YouTube.js/compare/v9.1.0...v9.2.0) (2024-03-31)


### Features

* add support of cloudflare workers ([#596](https://github.com/LuanRT/YouTube.js/issues/596)) ([2029aec](https://github.com/LuanRT/YouTube.js/commit/2029aec90de3c0fdb022094d7b704a2feed4133b))
* **parser:** Support CommentView nodes ([#614](https://github.com/LuanRT/YouTube.js/issues/614)) ([900f557](https://github.com/LuanRT/YouTube.js/commit/900f5572021d348e7012909f2080e52eac06adae))
* **parser:** Support LockupView and it's child nodes ([#609](https://github.com/LuanRT/YouTube.js/issues/609)) ([7ca2a0c](https://github.com/LuanRT/YouTube.js/commit/7ca2a0c3e43ebd4b9443e69b7432f302b09e9c7a))
* **Text:** Support formatting and emojis in `fromAttributed` ([#615](https://github.com/LuanRT/YouTube.js/issues/615)) ([e6f1f07](https://github.com/LuanRT/YouTube.js/commit/e6f1f078a828f8ea5db1fe7aec9f677bc53694e3))


### Bug Fixes

* **Cache:** handle the value read from the db correctly according to its type ([#620](https://github.com/LuanRT/YouTube.js/issues/620)) ([3170659](https://github.com/LuanRT/YouTube.js/commit/317065988007c860bf6173b0ac3c3d685ed81d20))
* **PlayerEndpoint:** Workaround for "The following content is not available on this app" (Android) ([#624](https://github.com/LuanRT/YouTube.js/issues/624)) ([d589365](https://github.com/LuanRT/YouTube.js/commit/d589365ea27f540ff36e33a65362c932cd28c274))

## [9.1.0](https://github.com/LuanRT/YouTube.js/compare/v9.0.2...v9.1.0) (2024-02-23)


### Features

* **Format:** Support caption tracks in adaptive formats ([#598](https://github.com/LuanRT/YouTube.js/issues/598)) ([bff65f8](https://github.com/LuanRT/YouTube.js/commit/bff65f8889c32813ec05bd187f3a4386fc6127c0))


### Bug Fixes

* **Playlist:** `items` getter failing if a playlist contains Shorts ([89fa3b2](https://github.com/LuanRT/YouTube.js/commit/89fa3b27a839d98aaf8bd70dd75220ee309c2bea))
* **Session:** Don't try to extract api version from service worker ([2068dfb](https://github.com/LuanRT/YouTube.js/commit/2068dfb73eefc0e40157421d4e5b4096c0c8429c))

## [9.0.2](https://github.com/LuanRT/YouTube.js/compare/v9.0.1...v9.0.2) (2024-01-31)


### Bug Fixes

* **VideoInfo:** Fix error because of typo in getWatchNextContinuation ([#590](https://github.com/LuanRT/YouTube.js/issues/590)) ([b21eb9f](https://github.com/LuanRT/YouTube.js/commit/b21eb9f33d956e130bac98712384125ae04ace47))

## [9.0.1](https://github.com/LuanRT/YouTube.js/compare/v9.0.0...v9.0.1) (2024-01-26)


### Bug Fixes

* **build:** Circular imports causing issues with webpack ([81dd5d3](https://github.com/LuanRT/YouTube.js/commit/81dd5d3288771132e7fb904b620e58277f639ccc))

## [9.0.0](https://github.com/LuanRT/YouTube.js/compare/v8.2.0...v9.0.0) (2024-01-25)


### ⚠ BREAKING CHANGES

* **toDash:** Add support for generating manifests for Post Live DVR videos ([#580](https://github.com/LuanRT/YouTube.js/issues/580))

### Features

* **Channel:** Support getting about with PageHeader ([#581](https://github.com/LuanRT/YouTube.js/issues/581)) ([2e710dc](https://github.com/LuanRT/YouTube.js/commit/2e710dc9f7e206627f189df19be17009b270bc8b))
* **Channel:** Support PageHeader being used on user channels ([#577](https://github.com/LuanRT/YouTube.js/issues/577)) ([6082b4a](https://github.com/LuanRT/YouTube.js/commit/6082b4a52ee07a622735e6e9128a0531a5ae3bfb))
* **Format:** Add `max_dvr_duration_sec` and `target_duration_dec` ([#570](https://github.com/LuanRT/YouTube.js/issues/570)) ([586bb5f](https://github.com/LuanRT/YouTube.js/commit/586bb5f1398d68bfabfb9449f527e53c398c3767))
* **parser:** Add `ImageBannerView` ([#583](https://github.com/LuanRT/YouTube.js/issues/583)) ([2073aa9](https://github.com/LuanRT/YouTube.js/commit/2073aa910a0e441a8ec1a9ba0434051ec0e2e6a9))
* **toDash:** Add support for generating manifests for Post Live DVR videos ([#580](https://github.com/LuanRT/YouTube.js/issues/580)) ([6dd03e1](https://github.com/LuanRT/YouTube.js/commit/6dd03e1658036c2fba0696de81033b5e16abb379))
* **VideoDetails:** Add `is_live_dvr_enabled`, `is_low_latency_live_stream` and `live_chunk_readahead` ([#569](https://github.com/LuanRT/YouTube.js/issues/569)) ([254f779](https://github.com/LuanRT/YouTube.js/commit/254f77944fcd398cc19cb62b82b0fdfbe6ed70ed))
* **VideoInfo:** Add live stream `end_timestamp` ([#571](https://github.com/LuanRT/YouTube.js/issues/571)) ([562e6a2](https://github.com/LuanRT/YouTube.js/commit/562e6a20f06ef5302af427861355215630d91edc))


### Bug Fixes

* **DecoratedAvatarView:** Fix parsing and optional properties ([#584](https://github.com/LuanRT/YouTube.js/issues/584)) ([fed3512](https://github.com/LuanRT/YouTube.js/commit/fed3512461277b7fc41e26c770e2bd3d4a7d5eb5))
* **PlayerCaptionTracklist:** Fix `captions_tracks[].kind` type ([#586](https://github.com/LuanRT/YouTube.js/issues/586)) ([7fbc37f](https://github.com/LuanRT/YouTube.js/commit/7fbc37f9d1c109e448085d5736326dce82ca2c9a))
* **proto:** Fix visitor data base64url decoding ([#576](https://github.com/LuanRT/YouTube.js/issues/576)) ([3980f97](https://github.com/LuanRT/YouTube.js/commit/3980f97b8fca05f95cda1ab347db9402c55b8b3c))
* **toDash:** Add missing transfer characteristics for h264 streams ([#573](https://github.com/LuanRT/YouTube.js/issues/573)) ([59f4cfb](https://github.com/LuanRT/YouTube.js/commit/59f4cfb4db6184d47f0a6634832055e9ce71f644))

## [8.2.0](https://github.com/LuanRT/YouTube.js/compare/v8.1.0...v8.2.0) (2024-01-08)


### Features

* **OAuth:** Allow passing custom client identity ([#566](https://github.com/LuanRT/YouTube.js/issues/566)) ([7ffd0fc](https://github.com/LuanRT/YouTube.js/commit/7ffd0fc25edef99a938e7986b1c74af05b8f954e))


### Bug Fixes

* **Parser:** Add `SortFilterHeader` ([#563](https://github.com/LuanRT/YouTube.js/issues/563)) ([8f07e49](https://github.com/LuanRT/YouTube.js/commit/8f07e49512c59eb72debc80a9d9623ca62330858))

## [8.1.0](https://github.com/LuanRT/YouTube.js/compare/v8.0.0...v8.1.0) (2023-12-27)


### Features

* **generator:** add support for arrays ([#556](https://github.com/LuanRT/YouTube.js/issues/556)) ([e4f2a00](https://github.com/LuanRT/YouTube.js/commit/e4f2a00c843fe453cc7904f79e35597cc6e2e619))
* **generator:** Add support for generating view models ([#550](https://github.com/LuanRT/YouTube.js/issues/550)) ([f938c34](https://github.com/LuanRT/YouTube.js/commit/f938c34ee81186774096b3d24d06250211ce2851))
* **MediaInfo:** Parse player config ([5c9c231](https://github.com/LuanRT/YouTube.js/commit/5c9c231cc2f17c49da03daa8262043b985320e9a))
* **parser:** Support new like and dislike nodes ([#557](https://github.com/LuanRT/YouTube.js/issues/557)) ([fcd3044](https://github.com/LuanRT/YouTube.js/commit/fcd30449821763e9b5b57718dd02eff15d964d2b))
* **Thumbnail:** Support `sources` in `Thumbnail.fromResponse` ([#552](https://github.com/LuanRT/YouTube.js/issues/552)) ([48a5d4e](https://github.com/LuanRT/YouTube.js/commit/48a5d4e7c37b76f8980f9b68e8815aef7a6d91ab))
* **YouTube:** Add FEchannels feed ([#560](https://github.com/LuanRT/YouTube.js/issues/560)) ([14578ac](https://github.com/LuanRT/YouTube.js/commit/14578ac96af4b8bee652cce87d043173de964113))


### Bug Fixes

* **Format:** Extract correct audio language from captions ([#553](https://github.com/LuanRT/YouTube.js/issues/553)) ([5c83e99](https://github.com/LuanRT/YouTube.js/commit/5c83e999dfa00386d18369f42aa9aa10123ba578))
* **generator:** Output Parser.parseItem() calls with one valid type, without the array ([#551](https://github.com/LuanRT/YouTube.js/issues/551)) ([bd487f8](https://github.com/LuanRT/YouTube.js/commit/bd487f8befe7f62022c61ff3aae7f487104e81eb))
* **VideoInfo:** Restore `like`, `dislike` & `removeRating` methods ([9c503f4](https://github.com/LuanRT/YouTube.js/commit/9c503f4fa8a750558cedbeca974faf36e304147e))

## [8.0.0](https://github.com/LuanRT/YouTube.js/compare/v7.0.0...v8.0.0) (2023-12-01)


### ⚠ BREAKING CHANGES

* **Library:** Add support for the new layout and remove profile & stats info
* **Channel:** YouTube removed the "Channels" tab on channels, so this pull request removes the `getChannels()` method and `has_channels` getter from the `YT.Channel` class, as they are no longer useful. The featured channels are now shown on the channel home tab. To get them you can use the `channels` getter on the home tab of the channel. Please note that some channel owners might not have added that section to their home page yet, so you won't be able to get the featured channels for those channels. The home tab is the default tab that is returned when you call `InnerTube#getChannel()`, you can also access that tab by calling `getHome()` on a `YT.Channel` object.

### Features

* add `FeedNudge` ([#533](https://github.com/LuanRT/YouTube.js/issues/533)) ([e021395](https://github.com/LuanRT/YouTube.js/commit/e02139532b2c07aaf72dd1bd8610f63b6780001d))
* add `VideoAttributeView` ([#531](https://github.com/LuanRT/YouTube.js/issues/531)) ([ff4ab16](https://github.com/LuanRT/YouTube.js/commit/ff4ab1680e110fc32e09d09215fd3e05dbde2c85))
* Add Shorts endpoint ([#512](https://github.com/LuanRT/YouTube.js/issues/512)) ([a32aa8c](https://github.com/LuanRT/YouTube.js/commit/a32aa8c633b6f3c3bb0695ad1878cbb313867346))
* **Channel:** Support new about popup ([#537](https://github.com/LuanRT/YouTube.js/issues/537)) ([c66eb1f](https://github.com/LuanRT/YouTube.js/commit/c66eb1fecf0e66d9eca841be0ca56b39ad4466eb))
* **parser:** Add `ChannelOwnerEmptyState` ([#541](https://github.com/LuanRT/YouTube.js/issues/541)) ([b60930a](https://github.com/LuanRT/YouTube.js/commit/b60930a0c1ce419dddb753846c84d4e46ddf04e1))
* **Parser:** Add `ClipSection` ([#532](https://github.com/LuanRT/YouTube.js/issues/532)) ([9007b65](https://github.com/LuanRT/YouTube.js/commit/9007b652375e1ca3c3844bdf091fe3670f98dc2c))
* **toDash:** Add `contentType` to audio and video adaption sets ([#539](https://github.com/LuanRT/YouTube.js/issues/539)) ([4806fc6](https://github.com/LuanRT/YouTube.js/commit/4806fc6c112cb3cf0584f7d253f3c4aeaffa9927))
* Use `overrides` instead of `--legacy-peer-deps` ([#529](https://github.com/LuanRT/YouTube.js/issues/529)) ([db7f620](https://github.com/LuanRT/YouTube.js/commit/db7f6209b2329bf18b8b35aababfdb9b750c3b0f))


### Bug Fixes

* **Channel:** Remove `getChannels()` and `has_channels`, as YouTube removed the tab ([#542](https://github.com/LuanRT/YouTube.js/issues/542)) ([6a5a579](https://github.com/LuanRT/YouTube.js/commit/6a5a579e3947109af0e7c2a318aef40edb8484f8))
* **Library:** Add support for the new layout and remove profile & stats info ([4261915](https://github.com/LuanRT/YouTube.js/commit/4261915fd4aa84f7619a45d678910be0ae30e13e))
* **StructuredDescriptionContent:** Add `ReelShelf` to list of possible nodes ([f74ed5a](https://github.com/LuanRT/YouTube.js/commit/f74ed5a1cf352a7b57fa84b9373f9ed9ba1911fc))
* **VideoAttributeView:** Fix `image` and `overflow_menu_on_tap` props ([5ae15be](https://github.com/LuanRT/YouTube.js/commit/5ae15be63dee2a2393a1aa2a308ca5378140760a))


### Performance Improvements

* Use named Parser import, to allow bundlers to create direct function references ([#535](https://github.com/LuanRT/YouTube.js/issues/535)) ([95ed602](https://github.com/LuanRT/YouTube.js/commit/95ed60207a1219f4891f28d2b2b90cf816f11831))

## [7.0.0](https://github.com/LuanRT/YouTube.js/compare/v6.4.1...v7.0.0) (2023-10-28)


### ⚠ BREAKING CHANGES

* **music#getSearchSuggestions:** Return array of `SearchSuggestionsSection` instead of a single node

### Features

* **Kids:** Add `blockChannel` command to easily block channels ([#503](https://github.com/LuanRT/YouTube.js/issues/503)) ([9ab528e](https://github.com/LuanRT/YouTube.js/commit/9ab528ec823dcd527a97150009eed632c6d3eb6a))
* **music#getSearchSuggestions:** Return array of `SearchSuggestionsSection` instead of a single node ([beaa28f](https://github.com/LuanRT/YouTube.js/commit/beaa28f4c68de8366caa84ce5a026bf9e12e1b9d))
* **parser:** Add `PlayerOverflow` and `PlayerControlsOverlay` ([a45273f](https://github.com/LuanRT/YouTube.js/commit/a45273fec498df87eecd364ffb708c9f787793d5))
* **UpdateViewerShipAction:** Add `original_view_count` and `unlabeled_view_count_value` ([#527](https://github.com/LuanRT/YouTube.js/issues/527)) ([bc97e07](https://github.com/LuanRT/YouTube.js/commit/bc97e07ac6d1cdc45194e214c6001cf92190e1d5))


### Bug Fixes

* **build:** Inline package.json import to avoid runtime erros ([#509](https://github.com/LuanRT/YouTube.js/issues/509)) ([4c0de19](https://github.com/LuanRT/YouTube.js/commit/4c0de199e85dd5cc8b3719920b24dec9613acaab))

## [6.4.1](https://github.com/LuanRT/YouTube.js/compare/v6.4.0...v6.4.1) (2023-10-02)


### Bug Fixes

* **Feed:** Do not throw when multiple continuations are present ([8e372d5](https://github.com/LuanRT/YouTube.js/commit/8e372d5c67f148be288bb0485f2c70ec43fbecd0))
* **Playlist:** Throw a more helpful error when parsing empty responses ([987f506](https://github.com/LuanRT/YouTube.js/commit/987f50604a0163f9a07091ce787995c6f6fddb75))


### Performance Improvements

* Cache deciphered n-params by info response ([#505](https://github.com/LuanRT/YouTube.js/issues/505)) ([d2959b3](https://github.com/LuanRT/YouTube.js/commit/d2959b3a55a5081295da4754627913933bbaf1e7))
* **generator:** Remove duplicate checks in `isMiscType` ([#506](https://github.com/LuanRT/YouTube.js/issues/506)) ([68df321](https://github.com/LuanRT/YouTube.js/commit/68df3218580db10c9a0932c93ff2ce487526ff1e))

## [6.4.0](https://github.com/LuanRT/YouTube.js/compare/v6.3.0...v6.4.0) (2023-09-10)


### Features

* Add support for retrieving transcripts ([#500](https://github.com/LuanRT/YouTube.js/issues/500)) ([f94ea6c](https://github.com/LuanRT/YouTube.js/commit/f94ea6cf917f63f30dd66514b22a4cf43b948f07))
* **PlaylistManager:** add .setName() and .setDescription() functions for editing playlists ([#498](https://github.com/LuanRT/YouTube.js/issues/498)) ([86fb33e](https://github.com/LuanRT/YouTube.js/commit/86fb33ed03a127d9fd4caa695ca97642bffe61bd))


### Bug Fixes

* **BackstagePost:** `vote_button` type mismatch ([fba3fc9](https://github.com/LuanRT/YouTube.js/commit/fba3fc971454d66d80d4920fbd60889a221de381))

## [6.3.0](https://github.com/LuanRT/YouTube.js/compare/v6.2.0...v6.3.0) (2023-08-31)


### Features

* **ChannelMetadata:** Add `music_artist_name` ([#497](https://github.com/LuanRT/YouTube.js/issues/497)) ([91de6e5](https://github.com/LuanRT/YouTube.js/commit/91de6e5c0e5b27e6d12ce5db2f500c5ff78b9830))
* **Session:** Add on_behalf_of_user session option. ([#494](https://github.com/LuanRT/YouTube.js/issues/494)) ([8bc2aaa](https://github.com/LuanRT/YouTube.js/commit/8bc2aaa3587fcf79f69eedbc2bf422a4c6fa7eb1))


### Bug Fixes

* **CompactMovie:** Add missing import and remove unnecessary console.log ([#496](https://github.com/LuanRT/YouTube.js/issues/496)) ([c26972c](https://github.com/LuanRT/YouTube.js/commit/c26972c42a6368822ac254c00f1bbee5a1542486))

## [6.2.0](https://github.com/LuanRT/YouTube.js/compare/v6.1.0...v6.2.0) (2023-08-29)


### Features

* **Session:** Add fallback for session data retrieval ([#490](https://github.com/LuanRT/YouTube.js/issues/490)) ([10c15bf](https://github.com/LuanRT/YouTube.js/commit/10c15bfb9f131a2acea2f26ff3328993d8d8f4aa))


### Bug Fixes

* **Format:** Fix `is_original` always being `true` ([#492](https://github.com/LuanRT/YouTube.js/issues/492)) ([0412fa0](https://github.com/LuanRT/YouTube.js/commit/0412fa05ff1f00960b398c2f18d5ce39ce0cb864))

## [6.1.0](https://github.com/LuanRT/YouTube.js/compare/v6.0.2...v6.1.0) (2023-08-27)


### Features

* **parser:** Add `AlertWithButton` ([#486](https://github.com/LuanRT/YouTube.js/issues/486)) ([8b69587](https://github.com/LuanRT/YouTube.js/commit/8b6958778721ba274283f641779fb60bc6f42cd2))
* **parser:** Add `ChannelHeaderLinksView` ([#484](https://github.com/LuanRT/YouTube.js/issues/484)) ([ed7be2a](https://github.com/LuanRT/YouTube.js/commit/ed7be2a675cf1ec663e743e90db6260c97546739))
* **parser:** Add `CompactMovie` ([#487](https://github.com/LuanRT/YouTube.js/issues/487)) ([2eed172](https://github.com/LuanRT/YouTube.js/commit/2eed1726d5bde7648af09273cc14ab4a315cb23e))

## [6.0.2](https://github.com/LuanRT/YouTube.js/compare/v6.0.1...v6.0.2) (2023-08-24)


### Bug Fixes

* invalid set ids in dash manifest ([#480](https://github.com/LuanRT/YouTube.js/issues/480)) ([1c3ea2a](https://github.com/LuanRT/YouTube.js/commit/1c3ea2acd38652c6b40a0817a7836c672a776c4e))

## [6.0.1](https://github.com/LuanRT/YouTube.js/compare/v6.0.0...v6.0.1) (2023-08-22)


### Bug Fixes

* **SearchSubMenu:** Groups not being parsed due to a typo ([90be877](https://github.com/LuanRT/YouTube.js/commit/90be877d28e0ef013056eaeaa4f2765c91addd61))

## [6.0.0](https://github.com/LuanRT/YouTube.js/compare/v5.8.0...v6.0.0) (2023-08-18)


### ⚠ BREAKING CHANGES

* replace unnecessary classes with pure functions ([#468](https://github.com/LuanRT/YouTube.js/issues/468))

### Features

* **MusicResponsiveListItem:** Detect non music tracks properly ([815e54b](https://github.com/LuanRT/YouTube.js/commit/815e54b854fcda3f5423231c8495ce1fb69d8237))
* **parser:** add `MusicMultiRowListItem` ([494ee87](https://github.com/LuanRT/YouTube.js/commit/494ee8776af0839d3ee2cca3d2fd836680cfdb9e))
* **Session:** Add `IOS` to `ClientType` enum ([22a38c0](https://github.com/LuanRT/YouTube.js/commit/22a38c0762499de74f0aeb3ef01332f893518b08))
* **VideoInfo:** support iOS client ([#467](https://github.com/LuanRT/YouTube.js/issues/467)) ([46fe18b](https://github.com/LuanRT/YouTube.js/commit/46fe18b763e0c943b24ea10fdf25456ab9ade709))


### Bug Fixes

* **Format:** Extracting audio language from captions ([#470](https://github.com/LuanRT/YouTube.js/issues/470)) ([31d27b1](https://github.com/LuanRT/YouTube.js/commit/31d27b1bca489ee0053d2783f1a956609845a901))
* **parser:** Allow any property in the `RawResponse` interface ([3bc53a8](https://github.com/LuanRT/YouTube.js/commit/3bc53a8c12e65b22f19a3e337641196b692a94db))
* **parser:** Logger logging `classdata` as `[Object object]` ([bf1510b](https://github.com/LuanRT/YouTube.js/commit/bf1510b235e3ee7d13d51f092babd1105c3d6b9f))
* **Playlist:** Only try extracting the subtitle for the first page ([#465](https://github.com/LuanRT/YouTube.js/issues/465)) ([e370116](https://github.com/LuanRT/YouTube.js/commit/e3701160928e9e959b88ca215c6b0a44c70ca6e6))
* **toDash:** Format grouping into AdaptationSets ([#462](https://github.com/LuanRT/YouTube.js/issues/462)) ([1ff3e1a](https://github.com/LuanRT/YouTube.js/commit/1ff3e1a440389e71055d4b201c29021ca5b39254))


### Performance Improvements

* Cleanup some unnecessary uses of `YTNode#key` and `Maybe` ([#463](https://github.com/LuanRT/YouTube.js/issues/463)) ([0dda97e](https://github.com/LuanRT/YouTube.js/commit/0dda97e0b03171de52d7f11a5abf78911e74cead))


### Code Refactoring

* replace unnecessary classes with pure functions ([#468](https://github.com/LuanRT/YouTube.js/issues/468)) ([87ed396](https://github.com/LuanRT/YouTube.js/commit/87ed3960ffa1c738b6f3b5acaf423647db4d367e))

## [5.8.0](https://github.com/LuanRT/YouTube.js/compare/v5.7.1...v5.8.0) (2023-07-30)


### Features

* **YouTube Playlist:** Add subtitle and fix author optionality ([#458](https://github.com/LuanRT/YouTube.js/issues/458)) ([0fa5a85](https://github.com/LuanRT/YouTube.js/commit/0fa5a859ae15a35266297079e3e34fd9f3a5ebf4))

## [5.7.1](https://github.com/LuanRT/YouTube.js/compare/v5.7.0...v5.7.1) (2023-07-25)


### Bug Fixes

* **SearchHeader:** remove console.log ([d91695a](https://github.com/LuanRT/YouTube.js/commit/d91695a9ec6c55445cbeedba4ace4ac1e0a72eee))

## [5.7.0](https://github.com/LuanRT/YouTube.js/compare/v5.6.0...v5.7.0) (2023-07-24)


### Features

* **parser:** Add `PageHeader` ([#450](https://github.com/LuanRT/YouTube.js/issues/450)) ([18cbc8c](https://github.com/LuanRT/YouTube.js/commit/18cbc8c038ddddffa1ba1519e56a8054b2996e42))
* **parser:** Add `SearchHeader` ([6997982](https://github.com/LuanRT/YouTube.js/commit/6997982cf2db87edf4929e9a77e2690e7b630d3d)), closes [#452](https://github.com/LuanRT/YouTube.js/issues/452)

## [5.6.0](https://github.com/LuanRT/YouTube.js/compare/v5.5.0...v5.6.0) (2023-07-18)


### Features

* **parser:** Add `IncludingResultsFor` ([#447](https://github.com/LuanRT/YouTube.js/issues/447)) ([c477b82](https://github.com/LuanRT/YouTube.js/commit/c477b824c084552169062f72cde8890e77b31f59))
* **toDash:** Add option to include thumbnails in the manifest ([#446](https://github.com/LuanRT/YouTube.js/issues/446)) ([1a03473](https://github.com/LuanRT/YouTube.js/commit/1a034733f6bb641e2d97df12de81ae3516c1f703))

## [5.5.0](https://github.com/LuanRT/YouTube.js/compare/v5.4.0...v5.5.0) (2023-07-16)


### Features

* **Format:** Populate audio language from captions when available ([#445](https://github.com/LuanRT/YouTube.js/issues/445)) ([bdd98a3](https://github.com/LuanRT/YouTube.js/commit/bdd98a3b9be39c11942043a300a6ebce9a15efc6))
* **parser:** Add `CommentsSimplebox` parser ([#442](https://github.com/LuanRT/YouTube.js/issues/442)) ([555d257](https://github.com/LuanRT/YouTube.js/commit/555d257459b76d7c0158e9c6b189a75a82b10faf))
* **parser:** Add `HashtagTile` ([#440](https://github.com/LuanRT/YouTube.js/issues/440)) ([ae2557d](https://github.com/LuanRT/YouTube.js/commit/ae2557d15c9df09bb92e0dc6191670d72b36631a))
* **parser:** add `MacroMarkersList` ([#444](https://github.com/LuanRT/YouTube.js/issues/444)) ([708c5f7](https://github.com/LuanRT/YouTube.js/commit/708c5f7394b4ea140836b9483848cb61b97ea1af))
* **parser:** Add `ShowMiniplayerCommand` ([#443](https://github.com/LuanRT/YouTube.js/issues/443)) ([a9cdbf7](https://github.com/LuanRT/YouTube.js/commit/a9cdbf7010e7b9b9cfde5db645d51bdad51006c5))


### Bug Fixes

* **package:** Bump Jinter to fix bad export order ([#439](https://github.com/LuanRT/YouTube.js/issues/439)) ([2aef678](https://github.com/LuanRT/YouTube.js/commit/2aef67876ec19118b37d3cecd429ccf8239989e0))
* **StructuredDescriptionContent:** `items` can also be a `HorizontalCardList` ([b50d1ef](https://github.com/LuanRT/YouTube.js/commit/b50d1ef67d81276864818de10c61b5a7980cbc1a))

## [5.4.0](https://github.com/LuanRT/YouTube.js/compare/v5.3.0...v5.4.0) (2023-07-14)


### Features

* **Channel:** Add `getPodcasts()` method ([f267fcd](https://github.com/LuanRT/YouTube.js/commit/f267fcd8beccf237b8d1924463990273887cae28))
* **Channel:** Add `getReleases()` method ([f267fcd](https://github.com/LuanRT/YouTube.js/commit/f267fcd8beccf237b8d1924463990273887cae28))
* **parser:** Add `Quiz` ([#437](https://github.com/LuanRT/YouTube.js/issues/437)) ([cffa868](https://github.com/LuanRT/YouTube.js/commit/cffa868c6eeb579047653fac65da8e913fb3c621))


### Bug Fixes

* **Playlist:** Parse `PlaylistCustomThumbnail` for `thumbnail_renderer` ([f267fcd](https://github.com/LuanRT/YouTube.js/commit/f267fcd8beccf237b8d1924463990273887cae28))

## [5.3.0](https://github.com/LuanRT/YouTube.js/compare/v5.2.1...v5.3.0) (2023-07-11)


### Features

* **toDash:** Add color information ([#430](https://github.com/LuanRT/YouTube.js/issues/430)) ([3500e92](https://github.com/LuanRT/YouTube.js/commit/3500e926327d560b1db036bfe503c276b91922ac))


### Performance Improvements

* **Format:** Cleanup the xtags parsing ([#434](https://github.com/LuanRT/YouTube.js/issues/434)) ([1ca2083](https://github.com/LuanRT/YouTube.js/commit/1ca20836bf343c78461fab7ad3b71db2b96e65c3))
* **toDash:** Hoist duplicates from Representation to AdaptationSet ([#431](https://github.com/LuanRT/YouTube.js/issues/431)) ([5f058e6](https://github.com/LuanRT/YouTube.js/commit/5f058e69ae8594491133f7f96287bea4137f7822))

## [5.2.1](https://github.com/LuanRT/YouTube.js/compare/v5.2.0...v5.2.1) (2023-07-04)


### Bug Fixes

* incorrect node parser implementations ([#428](https://github.com/LuanRT/YouTube.js/issues/428)) ([222dfce](https://github.com/LuanRT/YouTube.js/commit/222dfce6bbd13b2cd80ae11540cbc0edd9053fc5))

## [5.2.0](https://github.com/LuanRT/YouTube.js/compare/v5.1.0...v5.2.0) (2023-06-28)


### Features

* **VideoDetails:** Add is_post_live_dvr property ([#411](https://github.com/LuanRT/YouTube.js/issues/411)) ([a11e596](https://github.com/LuanRT/YouTube.js/commit/a11e5962c6eb73b14623a9de1e6c8c2534146b1e))
* **ytmusic:** Add support for YouTube Music mood filters ([#404](https://github.com/LuanRT/YouTube.js/issues/404)) ([77b39c7](https://github.com/LuanRT/YouTube.js/commit/77b39c79ee0768eb203b7d47ea81286d470c21f2))


### Bug Fixes

* **OAuth:** client identity matching ([#421](https://github.com/LuanRT/YouTube.js/issues/421)) ([07c1b3e](https://github.com/LuanRT/YouTube.js/commit/07c1b3e0e57cb1fa42e4772775bfd1437bbc731f))
* **PlayerEndpoint:** Use different player params ([#419](https://github.com/LuanRT/YouTube.js/issues/419)) ([519be72](https://github.com/LuanRT/YouTube.js/commit/519be72445b7ff392b396e16bcb1dc05c7df8976))
* **Playlist:** Add thumbnail_renderer on Playlist when response includes it ([#424](https://github.com/LuanRT/YouTube.js/issues/424)) ([4f9427d](https://github.com/LuanRT/YouTube.js/commit/4f9427d752e89faec8dd1c4fd7a9607dca998c7a))
* **VideoInfo.ts:** reimplement `get music_tracks` ([#409](https://github.com/LuanRT/YouTube.js/issues/409)) ([e434bb2](https://github.com/LuanRT/YouTube.js/commit/e434bb2632fe2b20aab6f1e707a93ca76f9d5c91))


### Performance Improvements

* **Search:** Speed up results parsing ([#408](https://github.com/LuanRT/YouTube.js/issues/408)) ([1e07a18](https://github.com/LuanRT/YouTube.js/commit/1e07a184ffaff508ad5ba869cb5e7dc9f095f744))
* **toDash:** Speed up format filtering ([#405](https://github.com/LuanRT/YouTube.js/issues/405)) ([5de7b24](https://github.com/LuanRT/YouTube.js/commit/5de7b24dc55fca3eb8fccc6fa30d3c2cd60b8184))

## [5.1.0](https://github.com/LuanRT/YouTube.js/compare/v5.0.4...v5.1.0) (2023-05-14)


### Features

* **ReelItem:** Add accessibility label ([#401](https://github.com/LuanRT/YouTube.js/issues/401)) ([046103a](https://github.com/LuanRT/YouTube.js/commit/046103a4d8af09fafefab6e9f971184eeca75c2e))
* **toDash:** Add audio track labels to the manifest when available ([#402](https://github.com/LuanRT/YouTube.js/issues/402)) ([84b4f1e](https://github.com/LuanRT/YouTube.js/commit/84b4f1efd111321e4f3e5a87844790c4ec9b0b52))

## [5.0.4](https://github.com/LuanRT/YouTube.js/compare/v5.0.3...v5.0.4) (2023-05-10)


### Bug Fixes

* **bundles:** Use ESM tslib build for the browser bundles ([#397](https://github.com/LuanRT/YouTube.js/issues/397)) ([2673419](https://github.com/LuanRT/YouTube.js/commit/26734194ab0bc5a9f57e1c509d7646ce8903d0c6))
* **Utils:** Circular dependency introduced in 38a83c3c2aa814150d1d9b8ed99fca915c1d67fe ([#400](https://github.com/LuanRT/YouTube.js/issues/400)) ([66b026b](https://github.com/LuanRT/YouTube.js/commit/66b026bf493d71a39e12825938fe54dc63aefd16))
* **Utils:** Use instanceof in deepCompare instead of the constructor name ([#398](https://github.com/LuanRT/YouTube.js/issues/398)) ([38a83c3](https://github.com/LuanRT/YouTube.js/commit/38a83c3c2aa814150d1d9b8ed99fca915c1d67fe))

## [5.0.3](https://github.com/LuanRT/YouTube.js/compare/v5.0.2...v5.0.3) (2023-05-03)


### Bug Fixes

* **Video:** typo causing node parsing to fail ([3b0498b](https://github.com/LuanRT/YouTube.js/commit/3b0498b68b5378e63283e792bd45571c0b919e0b))

## [5.0.2](https://github.com/LuanRT/YouTube.js/compare/v5.0.1...v5.0.2) (2023-04-30)


### Bug Fixes

* **VideoInfo:** Use microformat view_count when videoDetails view_count is NaN ([#393](https://github.com/LuanRT/YouTube.js/issues/393)) ([7c0abfc](https://github.com/LuanRT/YouTube.js/commit/7c0abfccd78a6c291d898f898d73a4f16170e2a9))

## [5.0.1](https://github.com/LuanRT/YouTube.js/compare/v5.0.0...v5.0.1) (2023-04-30)


### Bug Fixes

* **web:** slow downloads due to visitor data ([#391](https://github.com/LuanRT/YouTube.js/issues/391)) ([4f7ec07](https://github.com/LuanRT/YouTube.js/commit/4f7ec07c3f689219b07e8291877c23b6fbf45fb1))

## [5.0.0](https://github.com/LuanRT/YouTube.js/compare/v4.3.0...v5.0.0) (2023-04-29)


### ⚠ BREAKING CHANGES

* overhaul core classes and remove redundant code ([#388](https://github.com/LuanRT/YouTube.js/issues/388))

### Features

* **NavigationEndpoint:** parse `content` prop ([dd21f8c](https://github.com/LuanRT/YouTube.js/commit/dd21f8c75ae1d76180faab4f0ef9ee40920966e3))


### Bug Fixes

* **android:** workaround streaming URLs returning 403 ([#390](https://github.com/LuanRT/YouTube.js/issues/390)) ([75ea09d](https://github.com/LuanRT/YouTube.js/commit/75ea09dde86b1bdf13b197d6e02701899300a371))


### Code Refactoring

* overhaul core classes and remove redundant code ([#388](https://github.com/LuanRT/YouTube.js/issues/388)) ([95e0294](https://github.com/LuanRT/YouTube.js/commit/95e0294eabfdb20bbee2a4bfb751fd101402c5d6))

## [4.3.0](https://github.com/LuanRT/YouTube.js/compare/v4.2.0...v4.3.0) (2023-04-13)


### Features

* **GridVideo:** add `upcoming`, `upcoming_text`, `is_reminder_set` and `buttons` ([05de3ec](https://github.com/LuanRT/YouTube.js/commit/05de3ec97a1fea92543b5e5f84933b86a07ab830)), closes [#380](https://github.com/LuanRT/YouTube.js/issues/380)
* **MusicResponsiveListItem:** make flex/fixed cols public ([#382](https://github.com/LuanRT/YouTube.js/issues/382)) ([096bf36](https://github.com/LuanRT/YouTube.js/commit/096bf362c9bd46a510ecb0d01623c70841e26e26))
* **ToggleMenuServiceItem:** parse default nav endpoint ([a056696](https://github.com/LuanRT/YouTube.js/commit/a0566969ba436f31ca3722d09442a0c6302235d7))
* **ytmusic:** add taste builder nodes ([#383](https://github.com/LuanRT/YouTube.js/issues/383)) ([a9cad49](https://github.com/LuanRT/YouTube.js/commit/a9cad49333aa85c98bbb96e5f2d5b57d9beeb0c7))

## [4.2.0](https://github.com/LuanRT/YouTube.js/compare/v4.1.1...v4.2.0) (2023-04-09)


### Features

* Enable importHelpers in tsconfig to reduce output size ([#378](https://github.com/LuanRT/YouTube.js/issues/378)) ([0b301de](https://github.com/LuanRT/YouTube.js/commit/0b301de6a1e1352a64881c1751a84360922a77cd))
* **parser:** ignore PrimetimePromo node ([ce9d9c5](https://github.com/LuanRT/YouTube.js/commit/ce9d9c56b4f45c0139d74edc95c295ecfd1ee4b1))
* **PlaylistVideo:** Extract video_info and accessibility_label texts ([#376](https://github.com/LuanRT/YouTube.js/issues/376)) ([c9135e6](https://github.com/LuanRT/YouTube.js/commit/c9135e66d3c9c72b8d063eedcf3cc2123800946d))

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
