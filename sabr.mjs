/* eslint-disable */

import { Proto, Innertube, UniversalCache, Endpoints, Utils, UMPParser } from './dist/src/platform/node.js';

// Here for testing purposes. Not needed at all.
const pot = 'Ilhfl1-UOQYOERzwK8IR3xn_Ct8NwzrAatM-7jb9MOQIpx39Fv4c8BXQCv8W9Br_OMQZ_xLbGdUKwBngKM4YxTD1F9Vv8hfga8cW1R7FGv4a8BPGeqQbsmzT';

const innertube = await Innertube.create({
  cache: new UniversalCache(true),
});

const playerResponse = await innertube.actions.execute('/player', {
  parse: false,
  ...Endpoints.PlayerEndpoint.build({
    video_id: 'JAs6WyK-Kr0',
    sts: innertube.session.player.sts
  })
});

const ustreamerConfig = Utils.base64ToU8(playerResponse.data.playerConfig.mediaCommonConfig.mediaUstreamerRequestConfig.videoPlaybackUstreamerConfig);

if (!ustreamerConfig)
  throw new Error('videoPlaybackUstreamerConfig is required');

const url = innertube.session.player.decipher(playerResponse.data.streamingData.serverAbrStreamingUrl);


const sabrRequest = Proto.encodeSabrRequest({
  mediaInfo: {
    j: 144,
    lastManualDirection: 0,
    timeSinceLastManualFormatSelectionMs: 205562899,
    iea: 144,
    r7: 557867.5452846892,
    B7: 1142,
    A7: 401,
    visibility: 0,
    yea: 4233,
    zea: 2300,
    d8: 29620,
    No: false,
    qj: 144,
    a8: true,
    sS: 4800,
    G7: 144
  },
  lo: [],
  formatIds: [],
  audioFormatIds: [
    {
      itag: 251,
      lastModified: '1714583453709660',
      xtags: ''
    },
    {
      itag: 250,
      lastModified: '1714583453652227',
      xtags: ''
    }
  ],
  videoFormatIds: [
    {
      itag: 248,
      lastModified: '1620250647854877',
      xtags: ''
    },
    {
      itag: 247,
      lastModified: '1620250654279853',
      xtags: ''
    },
    {
      itag: 244,
      lastModified: '1620250655622293',
      xtags: ''
    },
    {
      itag: 243,
      lastModified: '1620250654377143',
      xtags: ''
    },
    {
      itag: 242,
      lastModified: '1620250654173148',
      xtags: ''
    },
    {
      itag: 278,
      lastModified: '1620250654171356',
      xtags: ''
    }
  ],
  videoPlaybackUstreamerConfig: ustreamerConfig,
  sc: {
    field5: [],
    field6: [],
    poToken: Utils.base64ToU8(pot),
    clientInfo: {
      clientName: 1,
      clientVersion: '2.20240620.05.00',
      osName: 'Windows',
      osVersion: '10.0'
    }
  },
  ud: [],
  field1000: [],
});

const response = await fetch(url, {
  headers: { 
    'Accept': '*/*',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
   },
  referrer: 'https://www.youtube.com/',
  body: sabrRequest,
  method: 'POST',
});

const data = await response.arrayBuffer();
const ump = new UMPParser(new Uint8Array(data));
const parts = ump.parse();

for (const part of parts) {
  switch (part.type) {
    case 20:
      const mediaHeader = Proto.decodeMHeader(part.data);
      console.log('[MediaHeader]:', mediaHeader);
      break;
    case 21:
      const data = new DataView(part.data.buffer);
      const var1 = data.getUint8(0, true);
      console.log('[MediaData]: id=', var1, 'data-length=', part.data.length);
      break;
    case 22:
      const mediaDataId = new DataView(part.data.buffer).getUint8(0, true);
      console.log('[MediaEnd]: id=', mediaDataId);
      break;
    case 35:
      const nextRequestPolicy = Proto.decodeNextRequestPolicy(part.data);
      console.log('[NextRequestPolicy]:', nextRequestPolicy);
      break;
    case 42:
      const formatInitializationMetadata = Proto.decodeFormatInitializationMetadata(part.data);
      console.log('[FormatInitializationMetadata]:', formatInitializationMetadata);
      break;
    case 43:
      const sabrRedirect = Proto.decodeSABRRedirect(part.data);
      console.log('[SABRRedirect]:', sabrRedirect);
      break;
    case 44:
      const sabrError = Proto.decodeSABRError(part.data);
      console.log('[SABRError]:', sabrError);
      break;
    case 47:
      const playbackStartPolicy = Proto.decodePlaybackStartPolicy(part.data);
      console.log('[PlaybackStartPolicy]:', playbackStartPolicy);
      break;
    case 53:
      const requestCancellationPolicy = Proto.decodeRequestCancellationPolicy(part.data);
      console.log('[RequestCancellationPolicy]:', requestCancellationPolicy);
      break;
    case 58:
      const streamProtectionStatus = Proto.decodeStreamProtectionStatus(part.data);
      console.log('[StreamProtectionStatus]:', streamProtectionStatus);
      break;
    default:
      console.log('UMP part', part.type, Utils.u8ToBase64(part.data));
  }
}