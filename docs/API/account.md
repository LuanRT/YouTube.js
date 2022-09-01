# Account

YouTube account manager.

## API

* Account 
  * [.channel](#channel)
  * [.getInfo()](#getinfo)
  * [.getTimeWatched()](#gettimewatched)
  * [.getSettings()](#getsettings)
  * [.getAnalytics](#getanalytics)

<a name="channel"></a>
### channel

Channel settings.

**Returns:** `object`

<details>
<summary>Methods & Getters</summary>
<p>

- `<channel>#editName(new_name)`
  - Edits the name of the channel.

- `<channel>#editDescription(new_description)`
  - Edits channel description.

- `<channel>#getBasicAnalytics()`
  - Alias for [`Account#getAnalytics()`](#getanalytics) — returns basic channel analytics.

</p>
</details>

<a name="getinfo"></a>
### getInfo()

Retrieves account information.

**Returns:** `Promise.<AccountInfo>`

<details>
<summary>Methods & Getters</summary>
<p>

- `<accountinfo>#page`
  - Returns original InnerTube response (sanitized).

</p>
</details>

<a name="gettimewatched"></a>
### getTimeWatched()

Retrieves time watched statistics.

**Returns:** `Promise.<TimeWatched>`

<details>
<summary>Methods & Getters</summary>
<p>

- `<timewatched>#page`
  - Returns original InnerTube response (sanitized).

</p>
</details>

<a name="getsettings"></a>
### getSettings()

Retrieves YouTube settings.

**Returns:** `Promise.<Settings>`

<details>
<summary>Methods & Getters</summary>
<p>

- `<settings>#selectSidebarItem(name)`
  - Selects an item from the sidebar menu. Use `settings#sidebar_items` to see available items.

- `<settings>#getSettingOption(name)`
  - Finds a setting by name and returns it. Use `settings#setting_options` to see available options.

- `<settings>#setting_options`
  - Returns settings available in the page.

- `<settings>#sidebar_items`
  - Returns options available in the sidebar menu.

</p>
</details>

<a name="getanalytics"></a>
### getAnalytics()

Retrieves basic channel analytics.

**Returns:** `Promise.<Analytics>`

<details>
<summary>Methods & Getters</summary>
<p>

- `<analytics>#page`
  - Returns original InnerTube response (sanitized).

</p>
</details>