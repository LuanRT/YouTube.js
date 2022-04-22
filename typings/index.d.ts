interface AuthInfo {
  access_token: string;
  refresh_token: string;
  expires: Date;
}

interface AccountInfo {
  name: string;
  photo: Record<string, any>[];
  country: string;
  language: string;
}

interface SearchOptions {
  client: 'YTMUSIC' | 'YOUTUBE';
  period: 'any' | 'hour' | 'day' | 'week' | 'month' | 'year';
  order: 'relevance' | 'rating' | 'age' | 'views';
  duration: 'any' | 'short' | 'long';
}

interface YouTubeSearch {
  query: string;
  corrected_query: string;
  estimated_results: number;
  videos: any[];
  getContinuation: () => Promise<object>;
}

interface YouTubeMusicSearch {
  query: string;
  corrected_query: string;
  results: {
    top_result?: any[];
    songs?: any[];
    albums?: any[];
    videos?: any[];
    community_playlists?: any[];
    artists?: any[];
  }
}

type SearchResults = YouTubeSearch | YouTubeMusicSearch;

type ClientOption = Pick<SearchOptions, 'client'>;

type SortBy = 'TOP_COMMENTS' | 'NEWEST_FIRST';

interface Suggestion {
  text: string;
  bold_text: string;
}

interface ApiStatus {
  success: boolean;
  status_code: number;
  data: object;
  message?: string;
}

interface Comments {
  page_count: number,
  comment_count: number;
  items: any[];
  getContinuation: () => Promise<object>;
}

interface Video {
  title: string;
  description: string;
  thumbnail: object;
  metadata: Record<any, any>;
  like: () => Promise<ApiStatus>;
  dislike: () => Promise<ApiStatus>;
  removeLike: () => Promise<ApiStatus>;
  subscribe: () => Promise<ApiStatus>;
  unsubscribe: () => Promise<ApiStatus>;
  comment: (text: string) => Promise<ApiStatus>;
  getComments: () => Promise<Comments>;
  getLivechat: () => any; // TODO type LiveChat
  setNotificationPreferences: () => Promise<ApiStatus>;
}

interface Channel {
  title: string;
  description: string;
  metadata: object;
  content: object;
}

interface PlayList {
  description: string;
  items: any[];
  title: string;
  total_items: string | number;
  duration?: string;
  last_updated?: string;
  views?: string;
  year?: string;
}

interface History {
  items: {
    date: string;
    videos: any[];
  }[];
  getContinuation: () => Promise<object>;
}

interface SubscriptionFeed {
  items: { 
    date: string; 
    videos: any[];
  }[];
  getContinuation: () => Promise<object>;
}

interface HomeFeed {
  videos: {
    id: string;
    title: string;
    description: string;
    channel: string;
    metadata: Record<string, any>;
  }[];
  getContinuation: () => Promise<object>;
}

interface Trending {
  now: {
    content:  {
      title: string;
      videos: [];
    }[];
  };
  music: { getVideos: () => Promise<Array>; };
  gaming: { getVideos: () => Promise<Array>; };
  movies: { getVideos: () => Promise<Array>; };
}

interface Notifications {
  items: {
    title: string;
    sent_time: string;
    channel_name: string;
    channel_thumbnail: Record<string, any>;
    video_thumbnail: Record<string, any>;
    video_url: string;
    read: boolean;
    notification_id: string;
  }[];
  getContinuation: () => Promise<object>;
}

interface StreamingData {
  selected_format: Record<string, any>;
  formats: any[];
}
interface StreamingOptions {
  quality?: string;
  type?: string;
  format?: string;
}

interface Config {
  gl?: string;
  cookie?: string;
}

export default class Innertube {
  constructor(auth_info?: Config)

  public signIn(auth_info: AuthInfo): Promise<void>;
  public signOut(): Promise<ApiStatus>;
  public getAccountInfo(): Promise<AccountInfo>;
  public search(query: string, options: SearchOptions): Promise<SearchResults>;
  public getSearchSuggestions(query: string, options?: ClientOption): Promise<Suggestion>;
  public getDetails(video_id: string): Promise<ApiStatus>;
  public getChannel(id: string): Promise<Channel>;
  public getLyrics(video_id: string): Promise<string>;
  public getPlaylist(playlist_id: string, options?: ClientOption): Promise<PlayList>;
  public getComments(video_id: string, sort_by?: SortBy): Promise<Comments>;
  public getHistory(): Promise<History>;
  public getHomeFeed(): Promise<HomeFeed>;
  public getTrending(): Promise<Trending>;
  public getSubscriptionsFeed(): Promise<SubscriptionFeed>;
  public getNotifications(): Promise<Notifications>;
  public getUnseenNotificationsCount(): Promise<number>;
  public getStreamingData(id: string, options?: StreamingOptions): Promise<StreamingData>;
  public download(id: string, options?: StreamingOptions): ReadableStream;
}