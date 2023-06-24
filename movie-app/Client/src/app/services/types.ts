export interface Movie {
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  genres: Genre[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  runtime?: number;
}

export interface MovieDetail {
  movie: Movie;
  credit: Credit;
  backdrops: Image[];
  posters: Image[];
  videos: Video[];
  recommendations: Movie[];
}

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
  number_of_episodes?: number;
  number_of_seasons?: number;
  episode_run_time?: number;
}

export interface TvShowDetail {
  movie: TvShow;
  credit: Credit;
  backdrops: Image[];
  posters: Image[];
  videos: Video[];
  recommendations: TvShow[];
}

export interface Image {
  aspect_ratio: number;
  height: number;
  file_path: string;
  width: number;
}

export interface Video {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  type: string;
  id: string;
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  content: string;
}

export interface Person {
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
