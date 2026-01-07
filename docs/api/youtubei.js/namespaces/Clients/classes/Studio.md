[youtubei.js](../../../../README.md) / [Clients](../README.md) / Studio

# Class: Studio

Defined in: [src/core/clients/Studio.ts:22](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/clients/Studio.ts#L22)

## Constructors

### Constructor

> **new Studio**(`session`): `Studio`

Defined in: [src/core/clients/Studio.ts:25](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/clients/Studio.ts#L25)

#### Parameters

##### session

[`Session`](../../../../classes/Session.md)

#### Returns

`Studio`

## Methods

### updateVideoMetadata()

> **updateVideoMetadata**(`video_id`, `metadata`): `Promise`\<[`ApiResponse`](../../../../interfaces/ApiResponse.md)\>

Defined in: [src/core/clients/Studio.ts:47](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/clients/Studio.ts#L47)

Updates the metadata of a video.

#### Parameters

##### video\_id

`string`

##### metadata

[`UpdateVideoMetadataOptions`](../../Types/type-aliases/UpdateVideoMetadataOptions.md)

#### Returns

`Promise`\<[`ApiResponse`](../../../../interfaces/ApiResponse.md)\>

#### Example

```ts
const videoId = 'abcdefg';
const thumbnail = fs.readFileSync('./my_awesome_thumbnail.jpg');

const response = await yt.studio.updateVideoMetadata(videoId, {
  tags: [ 'astronomy', 'NASA', 'APOD' ],
  title: 'Artemis Mission',
  description: 'A nicely written description...',
  category: 27,
  license: 'creative_commons',
  thumbnail,
  // ...
});
```

***

### upload()

> **upload**(`file`, `metadata`): `Promise`\<[`ApiResponse`](../../../../interfaces/ApiResponse.md)\>

Defined in: [src/core/clients/Studio.ts:150](https://github.com/LuanRT/YouTube.js/blob/0733f60b57877f6b8b87dfd5cc6195b5085f5c09/src/core/clients/Studio.ts#L150)

Uploads a video to YouTube.

#### Parameters

##### file

`BodyInit`

##### metadata

[`UploadedVideoMetadataOptions`](../../Types/type-aliases/UploadedVideoMetadataOptions.md) = `{}`

#### Returns

`Promise`\<[`ApiResponse`](../../../../interfaces/ApiResponse.md)\>

#### Example

```ts
const file = fs.readFileSync('./my_awesome_video.mp4');
const response = await yt.studio.upload(file.buffer, { title: 'Wow!' });
```
