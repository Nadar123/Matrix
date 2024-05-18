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
