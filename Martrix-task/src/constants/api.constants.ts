export enum Environment {
  Development = 'development',
  Production = 'production',
}

export const SERVER_URLS = {
  [Environment.Development]: 'http://localhost:8080',
  [Environment.Production]: 'http://localhost:8080',
};

export enum API_ENDPOINTS {
  GET_PAID_APPS = '/api/v2/us/apps/top-paid/10/apps.json',
  GET_APPS = '/api/v2/us/apps/top-paid/25/apps.json',
  CREATE_APP = '/api/v2/us/apps',
}

export const ERROR_CODE = {
  wrongInput: 400,
  unauthorized: 401,
  forbidden: 403,
  pageNotFound: 404,
  serverError: 500,
};
