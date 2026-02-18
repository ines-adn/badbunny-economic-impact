import type {
  WikipediaData,
  TrendsData,
  CulturalSummary,
  SpotifyData,
  SpotifyAlbumsData,
  YouTubeData,
  RelatedQueriesData,
} from '../types';

const BASE = '/api';

async function fetchJSON<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE}${path}`);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API ${res.status}: ${text}`);
  }
  return res.json();
}

export const api = {
  // Cultural (kept: 1 Google Trends + Wikipedia)
  getCulturalTrends: () => fetchJSON<TrendsData>('/cultural/google-trends'),
  getWikipedia: () => fetchJSON<WikipediaData>('/cultural/wikipedia'),
  getCulturalSummary: () => fetchJSON<CulturalSummary>('/cultural/summary'),
  getCulturalRelated: () => fetchJSON<RelatedQueriesData>('/cultural/related-queries'),

  // Musical / Spotify
  getSpotify: () => fetchJSON<SpotifyData>('/musical/spotify'),
  getSpotifyAlbums: () => fetchJSON<SpotifyAlbumsData>('/musical/spotify/albums'),
  getYouTube: () => fetchJSON<YouTubeData>('/musical/youtube'),
  getMusicalTrends: () => fetchJSON<TrendsData>('/musical/trends'),

  // Utils
  getHealth: () => fetchJSON('/health'),
};
