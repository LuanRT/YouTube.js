# PlaylistManager

Playlist management class.

## API

* PlaylistManager
  * [.create(title, video_ids)](#create) 
  * [.delete(playlist_id)](#delete) 
  * [.addVideos(playlist_id, video_ids)](#addvideos) 
  * [.removeVideos(playlist_id, video_ids)](#removevideos) 
  * [.moveVideo(playlist_id, moved_video_id, predecessor_video_id)](#movevideo) 
  * [.setName(playlist_id, name)](#setname) 
  * [.setDescription(playlist_id, description)](#setdescription) 

<a name="create"></a>
### create(title, video_ids)

Creates a playlist.

**Returns:** `Promise.<ApiResponse>`

| Param | Type | Description |
| --- | --- | --- |
| title | `string` | Playlist name |
| video_ids | `string[]` | array of videos |

<a name="delete"></a>
### delete(playlist_id)

Deletes given playlist.

**Returns:** `Promise.<ApiResponse>`

| Param | Type | Description |
| --- | --- | --- |
| playlist_id | `string` | Playlist id |

<a name="addvideos"></a>
### addVideos(playlist_id, video_ids)

Adds videos to given playlist.

**Returns:** `Promise.<{ playlist_id: string; action_result: any[] }>`

| Param | Type | Description |
| --- | --- | --- |
| playlist_id | `string` | Playlist id |
| video_ids | `string` | array of videos |

<a name="removevideos"></a>
### removeVideos(playlist_id, video_ids)

Removes videos from given playlist.

**Returns:** `Promise.<{ playlist_id: string; action_result: any[] }>`

| Param | Type | Description |
| --- | --- | --- |
| playlist_id | `string` | Playlist id |
| video_ids | `string` | array of videos |

<a name="movevideo"></a>
### moveVideo(playlist_id, moved_video_id, predecessor_video_id)

Moves a video to a new position within a given playlist.

**Returns:** `Promise.<{ playlist_id: string; action_result: any[] }>`

| Param | Type | Description |
| --- | --- | --- |
| playlist_id | `string` | Playlist id |
| moved_video_id | `string` | the video to be moved |
| predecessor_video_id | `string` | the video present in the target position |

<a name="setname"></a>
### setName(playlist_id, name)

Sets the name / title for the given playlist.

**Returns:** `Promise.<ApiResponse>`

| Param | Type | Description |
| --- | --- | --- |
| playlist_id | `string` | Playlist id |
| name | `string` | Name / title |


<a name="setdescription"></a>
### setDescription(playlist_id, description)

Sets the description for the given playlist.

**Returns:** `Promise.<ApiResponse>`

| Param | Type | Description |
| --- | --- | --- |
| playlist_id | `string` | Playlist id |
| description | `string` | Description |
