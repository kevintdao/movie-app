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
