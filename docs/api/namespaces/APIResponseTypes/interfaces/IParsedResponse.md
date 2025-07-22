[youtubei.js](../../../README.md) / [APIResponseTypes](../README.md) / IParsedResponse

# Interface: IParsedResponse

## Properties

### actions?

> `optional` **actions**: [`SuperParsedResult`](../../Helpers/classes/SuperParsedResult.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

#### Defined in

[src/parser/types/ParsedResponse.ts:29](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/ParsedResponse.ts#L29)

***

### actions\_memo?

> `optional` **actions\_memo**: [`Memo`](../../Helpers/classes/Memo.md)

#### Defined in

[src/parser/types/ParsedResponse.ts:30](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/ParsedResponse.ts#L30)

***

### alerts?

> `optional` **alerts**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`Alert`](../../YTNodes/classes/Alert.md) \| [`AlertWithButton`](../../YTNodes/classes/AlertWithButton.md)\>

#### Defined in

[src/parser/types/ParsedResponse.ts:53](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/ParsedResponse.ts#L53)

***

### annotations?

> `optional` **annotations**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`PlayerAnnotationsExpanded`](../../YTNodes/classes/PlayerAnnotationsExpanded.md)\>

#### Defined in

[src/parser/types/ParsedResponse.ts:65](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/ParsedResponse.ts#L65)

***

### background?

> `optional` **background**: [`MusicThumbnail`](../../YTNodes/classes/MusicThumbnail.md)

#### Defined in

[src/parser/types/ParsedResponse.ts:26](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/ParsedResponse.ts#L26)

***

### bg\_challenge?

> `optional` **bg\_challenge**: [`IBotguardChallenge`](IBotguardChallenge.md)

#### Defined in

[src/parser/types/ParsedResponse.ts:28](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/ParsedResponse.ts#L28)

***

### captions?

> `optional` **captions**: [`PlayerCaptionsTracklist`](../../YTNodes/classes/PlayerCaptionsTracklist.md)

#### Defined in

[src/parser/types/ParsedResponse.ts:63](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/ParsedResponse.ts#L63)

***

### cards?

> `optional` **cards**: [`CardCollection`](../../YTNodes/classes/CardCollection.md)

#### Defined in

[src/parser/types/ParsedResponse.ts:68](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/ParsedResponse.ts#L68)

***

### challenge?

> `optional` **challenge**: `string`

#### Defined in

[src/parser/types/ParsedResponse.ts:27](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/ParsedResponse.ts#L27)

***

### contents?

> `optional` **contents**: [`SuperParsedResult`](../../Helpers/classes/SuperParsedResult.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

#### Defined in

[src/parser/types/ParsedResponse.ts:31](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/ParsedResponse.ts#L31)

***

### contents\_memo?

> `optional` **contents\_memo**: [`Memo`](../../Helpers/classes/Memo.md)

#### Defined in

[src/parser/types/ParsedResponse.ts:32](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/ParsedResponse.ts#L32)

***

### continuation?

> `optional` **continuation**: [`Continuation`](../../../classes/Continuation.md)

#### Defined in

[src/parser/types/ParsedResponse.ts:46](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/ParsedResponse.ts#L46)

***

### continuation\_contents?

> `optional` **continuation\_contents**: [`ItemSectionContinuation`](../../../classes/ItemSectionContinuation.md) \| [`SectionListContinuation`](../../../classes/SectionListContinuation.md) \| [`LiveChatContinuation`](../../../classes/LiveChatContinuation.md) \| [`MusicPlaylistShelfContinuation`](../../../classes/MusicPlaylistShelfContinuation.md) \| [`MusicShelfContinuation`](../../../classes/MusicShelfContinuation.md) \| [`GridContinuation`](../../../classes/GridContinuation.md) \| [`PlaylistPanelContinuation`](../../../classes/PlaylistPanelContinuation.md) \| [`ContinuationCommand`](../../../classes/ContinuationCommand.md)

#### Defined in

[src/parser/types/ParsedResponse.ts:47](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/ParsedResponse.ts#L47)

***

### continuation\_contents\_memo?

> `optional` **continuation\_contents\_memo**: [`Memo`](../../Helpers/classes/Memo.md)

#### Defined in

[src/parser/types/ParsedResponse.ts:49](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/ParsedResponse.ts#L49)

***

### continuation\_endpoint?

> `optional` **continuation\_endpoint**: [`YTNode`](../../Helpers/classes/YTNode.md)

#### Defined in

[src/parser/types/ParsedResponse.ts:81](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/ParsedResponse.ts#L81)

***

### cpn\_info?

> `optional` **cpn\_info**: `object`

#### cpn?

> `optional` **cpn**: `string`

#### cpn\_source?

> `optional` **cpn\_source**: `"CPN_SOURCE_TYPE_UNKNOWN"` \| `"CPN_SOURCE_TYPE_CLIENT"` \| `"CPN_SOURCE_TYPE_WATCH_SERVER"`

#### Defined in

[src/parser/types/ParsedResponse.ts:69](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/ParsedResponse.ts#L69)

***

### current\_video\_endpoint?

> `optional` **current\_video\_endpoint**: [`NavigationEndpoint`](../../YTNodes/classes/NavigationEndpoint.md)

#### Defined in

[src/parser/types/ParsedResponse.ts:61](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/ParsedResponse.ts#L61)

***

### endpoint?

> `optional` **endpoint**: [`NavigationEndpoint`](../../YTNodes/classes/NavigationEndpoint.md)

#### Defined in

[src/parser/types/ParsedResponse.ts:62](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/ParsedResponse.ts#L62)

***

### endscreen?

> `optional` **endscreen**: [`Endscreen`](../../YTNodes/classes/Endscreen.md)

#### Defined in

[src/parser/types/ParsedResponse.ts:67](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/ParsedResponse.ts#L67)

***

### engagement\_panels?

> `optional` **engagement\_panels**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`EngagementPanelSectionList`](../../YTNodes/classes/EngagementPanelSectionList.md)\>

#### Defined in

[src/parser/types/ParsedResponse.ts:76](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/ParsedResponse.ts#L76)

***

### entries?

> `optional` **entries**: [`NavigationEndpoint`](../../YTNodes/classes/NavigationEndpoint.md)[]

#### Defined in

[src/parser/types/ParsedResponse.ts:78](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/ParsedResponse.ts#L78)

***

### entries\_memo?

> `optional` **entries\_memo**: [`Memo`](../../Helpers/classes/Memo.md)

#### Defined in

[src/parser/types/ParsedResponse.ts:79](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/ParsedResponse.ts#L79)

***

### estimated\_results?

> `optional` **estimated\_results**: `number`

#### Defined in

[src/parser/types/ParsedResponse.ts:55](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/ParsedResponse.ts#L55)

***

### header?

> `optional` **header**: [`SuperParsedResult`](../../Helpers/classes/SuperParsedResult.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

#### Defined in

[src/parser/types/ParsedResponse.ts:33](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/ParsedResponse.ts#L33)

***

### header\_memo?

> `optional` **header\_memo**: [`Memo`](../../Helpers/classes/Memo.md)

#### Defined in

[src/parser/types/ParsedResponse.ts:34](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/ParsedResponse.ts#L34)

***

### items?

> `optional` **items**: [`SuperParsedResult`](../../Helpers/classes/SuperParsedResult.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

#### Defined in

[src/parser/types/ParsedResponse.ts:77](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/ParsedResponse.ts#L77)

***

### items\_memo?

> `optional` **items\_memo**: [`Memo`](../../Helpers/classes/Memo.md)

#### Defined in

[src/parser/types/ParsedResponse.ts:39](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/ParsedResponse.ts#L39)

***

### live\_chat\_item\_context\_menu\_supported\_renderers?

> `optional` **live\_chat\_item\_context\_menu\_supported\_renderers**: [`YTNode`](../../Helpers/classes/YTNode.md)

#### Defined in

[src/parser/types/ParsedResponse.ts:37](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/ParsedResponse.ts#L37)

***

### live\_chat\_item\_context\_menu\_supported\_renderers\_memo?

> `optional` **live\_chat\_item\_context\_menu\_supported\_renderers\_memo**: [`Memo`](../../Helpers/classes/Memo.md)

#### Defined in

[src/parser/types/ParsedResponse.ts:38](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/ParsedResponse.ts#L38)

***

### metadata?

> `optional` **metadata**: [`SuperParsedResult`](../../Helpers/classes/SuperParsedResult.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

#### Defined in

[src/parser/types/ParsedResponse.ts:50](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/ParsedResponse.ts#L50)

***

### microformat?

> `optional` **microformat**: [`YTNode`](../../Helpers/classes/YTNode.md)

#### Defined in

[src/parser/types/ParsedResponse.ts:51](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/ParsedResponse.ts#L51)

***

### on\_response\_received\_actions?

> `optional` **on\_response\_received\_actions**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`OpenPopupAction`](../../YTNodes/classes/OpenPopupAction.md) \| [`AppendContinuationItemsAction`](../../YTNodes/classes/AppendContinuationItemsAction.md) \| [`ReloadContinuationItemsCommand`](../../../classes/ReloadContinuationItemsCommand.md) \| [`NavigateAction`](../../../classes/NavigateAction.md) \| [`ShowMiniplayerCommand`](../../../classes/ShowMiniplayerCommand.md)\>

#### Defined in

[src/parser/types/ParsedResponse.ts:40](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/ParsedResponse.ts#L40)

***

### on\_response\_received\_actions\_memo?

> `optional` **on\_response\_received\_actions\_memo**: [`Memo`](../../Helpers/classes/Memo.md)

#### Defined in

[src/parser/types/ParsedResponse.ts:41](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/ParsedResponse.ts#L41)

***

### on\_response\_received\_commands?

> `optional` **on\_response\_received\_commands**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`OpenPopupAction`](../../YTNodes/classes/OpenPopupAction.md) \| [`AppendContinuationItemsAction`](../../YTNodes/classes/AppendContinuationItemsAction.md) \| [`ReloadContinuationItemsCommand`](../../../classes/ReloadContinuationItemsCommand.md) \| [`NavigateAction`](../../../classes/NavigateAction.md) \| [`ShowMiniplayerCommand`](../../../classes/ShowMiniplayerCommand.md)\>

#### Defined in

[src/parser/types/ParsedResponse.ts:44](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/ParsedResponse.ts#L44)

***

### on\_response\_received\_commands\_memo?

> `optional` **on\_response\_received\_commands\_memo**: [`Memo`](../../Helpers/classes/Memo.md)

#### Defined in

[src/parser/types/ParsedResponse.ts:45](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/ParsedResponse.ts#L45)

***

### on\_response\_received\_endpoints?

> `optional` **on\_response\_received\_endpoints**: [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`OpenPopupAction`](../../YTNodes/classes/OpenPopupAction.md) \| [`AppendContinuationItemsAction`](../../YTNodes/classes/AppendContinuationItemsAction.md) \| [`ReloadContinuationItemsCommand`](../../../classes/ReloadContinuationItemsCommand.md) \| [`NavigateAction`](../../../classes/NavigateAction.md) \| [`ShowMiniplayerCommand`](../../../classes/ShowMiniplayerCommand.md)\>

#### Defined in

[src/parser/types/ParsedResponse.ts:42](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/ParsedResponse.ts#L42)

***

### on\_response\_received\_endpoints\_memo?

> `optional` **on\_response\_received\_endpoints\_memo**: [`Memo`](../../Helpers/classes/Memo.md)

#### Defined in

[src/parser/types/ParsedResponse.ts:43](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/ParsedResponse.ts#L43)

***

### overlay?

> `optional` **overlay**: [`YTNode`](../../Helpers/classes/YTNode.md)

#### Defined in

[src/parser/types/ParsedResponse.ts:52](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/ParsedResponse.ts#L52)

***

### playability\_status?

> `optional` **playability\_status**: [`IPlayabilityStatus`](IPlayabilityStatus.md)

#### Defined in

[src/parser/types/ParsedResponse.ts:58](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/ParsedResponse.ts#L58)

***

### playback\_tracking?

> `optional` **playback\_tracking**: [`IPlaybackTracking`](IPlaybackTracking.md)

#### Defined in

[src/parser/types/ParsedResponse.ts:57](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/ParsedResponse.ts#L57)

***

### player\_config?

> `optional` **player\_config**: [`IPlayerConfig`](IPlayerConfig.md)

#### Defined in

[src/parser/types/ParsedResponse.ts:60](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/ParsedResponse.ts#L60)

***

### player\_overlays?

> `optional` **player\_overlays**: [`SuperParsedResult`](../../Helpers/classes/SuperParsedResult.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

#### Defined in

[src/parser/types/ParsedResponse.ts:56](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/ParsedResponse.ts#L56)

***

### player\_response?

> `optional` **player\_response**: [`IPlayerResponse`](../type-aliases/IPlayerResponse.md)

#### Defined in

[src/parser/types/ParsedResponse.ts:82](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/ParsedResponse.ts#L82)

***

### refinements?

> `optional` **refinements**: `string`[]

#### Defined in

[src/parser/types/ParsedResponse.ts:54](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/ParsedResponse.ts#L54)

***

### sidebar?

> `optional` **sidebar**: [`YTNode`](../../Helpers/classes/YTNode.md)

#### Defined in

[src/parser/types/ParsedResponse.ts:35](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/ParsedResponse.ts#L35)

***

### sidebar\_memo?

> `optional` **sidebar\_memo**: [`Memo`](../../Helpers/classes/Memo.md)

#### Defined in

[src/parser/types/ParsedResponse.ts:36](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/ParsedResponse.ts#L36)

***

### storyboards?

> `optional` **storyboards**: [`PlayerStoryboardSpec`](../../YTNodes/classes/PlayerStoryboardSpec.md) \| [`PlayerLiveStoryboardSpec`](../../YTNodes/classes/PlayerLiveStoryboardSpec.md)

#### Defined in

[src/parser/types/ParsedResponse.ts:66](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/ParsedResponse.ts#L66)

***

### streaming\_data?

> `optional` **streaming\_data**: [`IStreamingData`](IStreamingData.md)

#### Defined in

[src/parser/types/ParsedResponse.ts:59](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/ParsedResponse.ts#L59)

***

### target\_id?

> `optional` **target\_id**: `string`

#### Defined in

[src/parser/types/ParsedResponse.ts:80](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/ParsedResponse.ts#L80)

***

### video\_details?

> `optional` **video\_details**: [`VideoDetails`](../../Misc/classes/VideoDetails.md)

#### Defined in

[src/parser/types/ParsedResponse.ts:64](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/ParsedResponse.ts#L64)

***

### watch\_next\_response?

> `optional` **watch\_next\_response**: [`INextResponse`](../type-aliases/INextResponse.md)

#### Defined in

[src/parser/types/ParsedResponse.ts:83](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/types/ParsedResponse.ts#L83)
