# TabbedFeed

Represents a feed with tabs. 

> **Note**
> This class extends the [Feed](feed.md) class.

## API

* TabbedFeed
  * [.tabs](#tabs)
  * [.getTabByName(title: string)](#gettabbyname)
  * [.getTabByURL(url: string)](#gettabbyurl)
  * [.hasTabWithURL(url: string)](#hastabwithurl)
  * [.title](#title)

<a name="tabs"></a>
### tabs

Returns the feed's tabs as an array of strings.

**Returns:** `string[]`

<a name="gettabbyname"></a>
### getTabByName(title: string)

Fetches a tab by its title.

**Returns:** `Promise<TabbedFeed<T>>`

| Param | Type | Description |
| --- | --- | --- |
| title | `string` | The title of the tab to get |

<a name="gettabbyurl"></a>
### getTabByURL(url: string)

Fetches a tab by its URL.

**Returns:** `Promise<TabbedFeed<T>>`

| Param | Type | Description |
| --- | --- | --- |
| url | `string` | The URL of the tab to get |

<a name="hastabwithurl"></a>
### hasTabWithURL(url: string)

Returns whether the feed has a tab with the given URL.

**Returns:** `boolean`

| Param | Type | Description |
| --- | --- | --- |
| url | `string` | The URL to check |

<a name="title"></a>
### title

Returns the currently selected tab's title.

**Returns:** `string | undefined`