export interface App {
  id: string;
  artworkUrl100: string;
  artistName: string;
}

export interface Feed {
  results: App[];
}

export interface FreeAppsData {
  feed: Feed;
}
export interface FreeAppItemProps {
  app: App;
}
export interface App {
  id: string;
  artworkUrl100: string;
  artistName: string;
}

export interface AppData {
  id: string;
  artworkUrl100: string;
  artistName: string;
}
export interface FreeAppItemProps {
  app: App;
}
export interface App {
  id: string;
  artworkUrl100: string;
  artistName: string;
}

export interface PaidAppItemProps {
  app: App;
}
export interface App {
  id: string;
  artworkUrl100: string;
  artistName: string;
}
export interface IApp {
  artistName: string;
  id: string;
  name: string;
  releaseDate: string;
  kind: string;
  artworkUrl100: string;
  genres: string[];
  url: string;
}

export interface IAppState {
  id: string;
  name: string;
  artworkUrl100: string;
  artistName: string;
}

export interface IAppsResponse {
  apps: IAppState[];
  totalApps: number;
  response: any;
}
