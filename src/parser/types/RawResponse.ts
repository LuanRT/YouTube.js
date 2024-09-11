export type RawNode = Record<string, any>;
export type RawData = RawNode | RawNode[];

export type CpnSource = 'CPN_SOURCE_TYPE_CLIENT' | 'CPN_SOURCE_TYPE_WATCH_SERVER';

export interface IServiceTrackingParams {
  service: string;
  params?: {
    key: string;
    value: string;
  }[];
}

export interface IResponseContext {
  serviceTrackingParams: IServiceTrackingParams[];
  maxAgeSeconds: number;
}

export interface IRawPlayerConfig {
  audioConfig: {
    loudnessDb?: number;
    perceptualLoudnessDb?: number;
    enablePerFormatLoudness: boolean;
  };
  streamSelectionConfig: {
    maxBitrate: string;
  };
  mediaCommonConfig: {
    dynamicReadaheadConfig?: {
      maxReadAheadMediaTimeMs: number;
      minReadAheadMediaTimeMs: number;
      readAheadGrowthRateMs: number;
    };
    mediaUstreamerRequestConfig?: {
      videoPlaybackUstreamerConfig: string;
    }
  };
}

export interface IRawResponse {
  responseContext?: IResponseContext;
  background?: RawNode;
  contents?: RawData;
  onResponseReceivedActions?: RawNode[];
  onResponseReceivedEndpoints?: RawNode[];
  onResponseReceivedCommands?: RawNode[];
  continuationContents?: RawNode;
  actions?: RawNode[];
  liveChatItemContextMenuSupportedRenderers?: RawNode;
  header?: RawNode;
  sidebar?: RawNode;
  continuation?: RawNode;
  metadata?: RawNode;
  microformat?: RawNode;
  overlay?: RawNode;
  alerts?: RawNode[];
  refinements?: string[];
  estimatedResults?: string;
  playerOverlays?: RawNode;
  playbackTracking?: {
    videostatsWatchtimeUrl: {
      baseUrl: string;
    };
    videostatsPlaybackUrl: {
      baseUrl: string;
    };
  };
  playabilityStatus?: {
    status: string;
    reason?: string;
    errorScreen?: RawNode;
    audioOnlyPlayability?: RawNode;
    playableInEmbed?: boolean;
  };
  streamingData?: {
    expiresInSeconds: string;
    formats: RawNode[];
    adaptiveFormats: RawNode[];
    dashManifestUrl?: string;
    hlsManifestUrl?: string;
    serverAbrStreamingUrl?: string;
  };
  playerConfig?: IRawPlayerConfig;
  playerResponse?: IRawResponse;
  watchNextResponse?: IRawResponse;
  currentVideoEndpoint?: RawNode;
  unseenCount?: number;
  playlistId?: string;
  endpoint?: RawNode;
  captions?: RawNode;
  videoDetails?: RawNode;
  annotations?: RawNode[];
  storyboards?: RawNode;
  endscreen?: RawNode;
  cards?: RawNode;
  cpnInfo?: {
    cpn: string;
    cpnSource: CpnSource;
  },
  items?: RawNode[];
  frameworkUpdates?: any;
  engagementPanels?: RawNode[];
  entries?: RawNode[];
  [key: string]: any;
}
