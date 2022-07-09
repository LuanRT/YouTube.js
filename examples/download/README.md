# Downloading Videos

With YouTube.js you can consume videos in your applications as Node Streams.

```js
import Innertube from 'youtubei.js';

const yt = await new Innertube();

// Downloading videos returns a Node Stream which you can consume
const stream = yt.download('VIDEO_ID');

// Alternatively, you may want more info before downloading
const info = await yt.getInfo('VIDEO_ID');

// Then you may request a download stream
const stream_from_info = yt.download();
```

## Download Methods

There are two options for downloading a video:
- `Innertube.download(video_id: string, options?: DownloadOptions)`
- `VideoInfo.download(options?: DownloadOptions)`

The download methods are identical, but the first one is a convenience method for the second one.

## Download Options

The `DownloadOptions` object is used to choose the format for download

- `format`: The format of the video to download. Use `'any'` to pick any format available. (default: `'mp4'`)
- `quality`: The quality of the video to download. (default: `'360p'`) There's some options:
    - `'best'`: The best quality available. Picks the highest dimensions and highest bitrate stream.
    - `'bestefficiency'`: The best quality available. Picks the highest dimensions and lowest bitrate stream.
    - You may also filter via quality labels such as `'720p'` or `'1080p'`.
- `type`: The type of the video to download. (default: `'videoandaudio'`)
    - `'videoandaudio'`: Download both video and audio.
    - `'video'`: Download only video.
    - `'audio'`: Download only audio.
- `range`: The range of the video to download. (default: `undefined`)
    - `range.start`: First byte to download.
    - `range.end`: Last byte to download.

## Download Events

In addition to the normal events emitted by Node Streams, YouTube.js also emits the following events on the stream:

- `info`: Emitted when the video metadata is available. (only emiited with `Innertube.download` not with `VideoInfo.download`)
- `progress`: Emitted when the video is downloading.
- `start`: Emitted when the video starts downloading.

```js
stream.on('info', (info) => {
  // `info` is an instance of VideoDetails as returned by Innertube.getBasicInfo() and is thus not complete with all the details.
});

stream.on('progress', (progress) => {
    // The progress object has the following properties
    // progress.size - size of the video in megabytes as string
    // progress.percent - percentage of the video downloaded as string
    // progress.chunk_size - size of the last chunk downloaded as bytes
    // progress.downloaded_size - size of the video downloaded in megabytes as string
    // progress.raw_data.chunk_size - size of the last chunk downloaded as bytes
    // progress.raw_data.downloaded_size - size of the video downloaded as bytes
    // progress.raw_data.size - size of the response range in bytes
});

stream.on('start', () => {
    // start does not have any data
});
```

## Aborting Downloads

The download stream may be aborted by calling `stream.cancel()`
