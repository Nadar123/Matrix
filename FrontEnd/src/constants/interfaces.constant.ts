export interface App {
  id: string;
  artworkUrl100: string;
  artistName: string;
}

export interface IApp extends App {
  name: string;
  artistName: string;
}

export interface Feed {
  id: string;
  title: string;
  results: App[];
}

export interface GlobalState {
  response: { feed: Feed } | null;
  freeApps: App[] | any;
  paidApps: App[] | any;
  loading: boolean;
  error: string | null;
}

export interface RootState {
  global: GlobalState;
}

export interface AppData {
  id: string;
  artworkUrl100: string;
  artistName: string;
}
export interface FreeAppsData {
  feed: Feed;
}

export interface FreeAppItemProps {
  app: App;
}

export interface PaidAppItemProps {
  app: App;
}

export interface IAppState extends App {
  name: string;
}

export interface IAppsResponse {
  apps: IAppState[];
  response: any;
  responseData: any;
}
