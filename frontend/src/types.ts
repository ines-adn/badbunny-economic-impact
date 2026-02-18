export interface TimeSeriesPoint {
  date: string;
  [key: string]: string | number;
}

export interface WikipediaData {
  article: string;
  source: string;
  source_url: string;
  daily: TimeSeriesPoint[];
}

export interface TrendsData {
  keywords: string[];
  source: string;
  source_url: string;
  daily: TimeSeriesPoint[];
}

export interface CulturalSummary {
  super_bowl_date: string;
  wikipedia: {
    baseline_daily_avg: number;
    peak_views: number;
    peak_date: string | null;
    multiplier: number;
    total_views_period: number;
  };
  google_trends: {
    baseline_avg: number;
    peak_interest: number;
    multiplier: number;
  };
}

export interface SpotifyTrack {
  name: string;
  popularity: number;
  album: string;
  album_image: string | null;
  preview_url: string | null;
  external_url: string | null;
}

export interface SpotifyData {
  source: string;
  source_url: string;
  error?: string;
  limited_access?: boolean;
  notice?: string;
  artist: {
    name: string;
    popularity: number;
    followers: number;
    genres: string[];
    image: string | null;
    spotify_url?: string | null;
  } | null;
  top_tracks: SpotifyTrack[];
}

export interface SpotifyAlbum {
  id: string;
  name: string;
  release_date: string;
  total_tracks: number;
  image: string | null;
  external_url: string | null;
}

export interface SpotifyAlbumsData {
  albums: SpotifyAlbum[];
  source: string;
  error?: string;
}

export interface YouTubeVideo {
  id: string;
  title: string;
  channel: string;
  published_at: string;
  views: number;
  likes: number;
  comments: number;
}

export interface YouTubeData {
  source: string;
  source_url: string;
  error?: string;
  videos: YouTubeVideo[];
}

export interface RelatedQuery {
  query: string;
  value: number | string;
}

export interface RelatedQueriesData {
  keyword: string;
  source: string;
  source_url?: string;
  top_queries: RelatedQuery[];
  rising_queries: RelatedQuery[];
  error?: string;
}

export interface TimelineEvent {
  date: string;
  event: string;
  category: string;
  source: string;
}
