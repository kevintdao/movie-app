import { Movie } from '../modules/movies/movie';
import { TvShow } from '../modules/tv-shows/tv-show';

export interface Person {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
}

export interface Cast extends Person {
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export interface Crew extends Person {
  credit_id: string;
  department: string;
  job: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface Credit {
  id: number;
  cast: Cast[];
  crew: Crew[];
}

export interface Image {
  aspect_ratio: number;
  height: number;
  iso_639_1: string | null;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface ImageResponse {
  id: number;
  backdrops: Image[];
  posters: Image[];
  logos: Image[];
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  content: string;
}

export type Media = 'tv' | 'movie';

export interface RecommendationResponse {
  page: number;
  results: Movie[] | TvShow[];
  total_pages: number;
  total_results: number;
}

export interface VideoResponse {
  id: number;
  results: Video[];
}

export interface Video {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}
