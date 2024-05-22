export interface IResults {
  name: string;
  artistName: string;
  id: string;
  artworkUrl100: string;
  kind: string;
  releaseDate: string;
}

export interface ILink {
  self: string;
}

export interface IAuthor {
  name: string;
  url: string;
}

export interface IGenres {
  genres: [];
}

export interface IFeed {
  id: string;
  title: string;
  results: IResults[];
  author: IAuthor;
  links: ILink[];
  copyright: string;
  country: string;
  icon: string;
  updated: string;
  genres: IGenres[];
}

export interface IApp {
  feed: IFeed;
  loading: boolean;
  error: string;
  freeApps?: IResults[] | undefined;
  paidApps?: IResults[] | undefined;
}
