# Studio

YouTube Studio class (WIP).

## API

* Studio 
  * [.setThumbnail(video_id, buffer)](#setthumbnail)
  * [.upload(file, metadata)](#upload)

<a name="setthumbnail"></a>
### setThumbnail(video_id, buffer)

Uploads a custom thumbnail and sets it for a video.

**Returns:** `Promise.<ActionsResponse>`

| Param | Type | Description |
| --- | --- | --- |
| video_id | `string` | Video id |
| buffer | `Uint8Array` | Thumbnail buffer |

<a name="upload"></a>
### upload(file, metadata)

Uploads a video to YouTube.

**Returns:** `Promise.<ActionsResponse>`

| Param | Type | Description |
| --- | --- | --- |
| file | `BodyInit` | Video file |
| metadata | `VideoMetadata` | Video metadata |