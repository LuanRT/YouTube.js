# FilterableFeed

Represents a feed that can be filtered. 

> **Note** 
> This class extends the [Feed](feed.md) class.

## API

* FilterableFeed
  * [.filter_chips](#filter_chips)
  * [.filters](#filters)
  * [.getFilteredFeed(filter: string | ChipCloudChip)](#getfilteredfeed)

<a name="filter_chips"></a>
### filter_chips

Returns the feed's filter chips.

**Returns:** `ObservedArray<ChipCloudChip>`

<a name="filters"></a>
### filters

Returns the feed's filter chips as an array of strings.

**Returns:** `string[]`

<a name="getfilteredfeed"></a>
### getFilteredFeed(filter: string | ChipCloudChip)

Returns a new [Feed](feed.md) with the given filter applied.

**Returns:** `Promise<Feed<T>>`

| Param | Type | Description |
| --- | --- | --- |
| filter | `string` \| `ChipCloudChip` | The filter to apply |