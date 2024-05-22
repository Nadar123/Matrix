export enum Environment {
  Development = 'development',
  Production = 'production',
}

export const SERVER_URLS = {
  [Environment.Development]: 'http://localhost:8080',
  [Environment.Production]: 'http://localhost:8080',
};
export enum API_ENDPOINTS {
  GET_FREE_APPS = 'free-apps',
  GET_PAID_APPS = 'paid-apps',
  //GET_LIKED_APPS = '/api/liked-apps',
  //TOGGLE_LIKE = '/api/like',
}
