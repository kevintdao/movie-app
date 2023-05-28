export interface TvShow {
  adult: boolean;
  backdrop_path: string;
  id: number;
  name: string;
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  first_air_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  origin_country: string[];
  runtime?: number;
  genres?: Genre[];
}

export interface Genre {
  id: number;
  name: string;
}

export interface TvShowResponse {
  page: number;
  results: TvShow[];
  total_pages: number;
  total_results: number;
}
