[youtubei.js](../../../README.md) / [Clients](../README.md) / Studio

# Class: Studio

## Constructors

### new Studio()

> **new Studio**(`session`): [`Studio`](Studio.md)

#### Parameters

• **session**: [`Session`](../../../classes/Session.md)

#### Returns

[`Studio`](Studio.md)

#### Defined in

[src/core/clients/Studio.ts:25](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/clients/Studio.ts#L25)

## Methods

### updateVideoMetadata()

> **updateVideoMetadata**(`video_id`, `metadata`): `Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

Updates the metadata of a video.

#### Parameters

• **video\_id**: `string`

• **metadata**: `Partial`\<`object`\>

#### Returns

`Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

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

#### Defined in

[src/core/clients/Studio.ts:47](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/clients/Studio.ts#L47)

***

### upload()

> **upload**(`file`, `metadata`): `Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

Uploads a video to YouTube.

#### Parameters

• **file**: `BodyInit`

• **metadata**: `Partial`\<`object`\> = `{}`

#### Returns

`Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

#### Example

```ts
const file = fs.readFileSync('./my_awesome_video.mp4');
const response = await yt.studio.upload(file.buffer, { title: 'Wow!' });
```

#### Defined in

[src/core/clients/Studio.ts:148](https://github.com/LuanRT/YouTube.js/blob/e54e499ff553dab51e6d9d1aebc090b50fec29ba/src/core/clients/Studio.ts#L148)
