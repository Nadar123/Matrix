export enum Environment {
  Development = 'development',
  Production = 'production',
}

export const SERVER_URLS = {
  [Environment.Development]: 'http://localhost:8080',
  [Environment.Production]: 'http://localhost:8080',
};

export enum API_ENDPOINTS {}

export const ERROR_CODE = {};
