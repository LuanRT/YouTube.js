# Changelog

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
