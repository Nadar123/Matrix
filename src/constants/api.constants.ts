export enum Environment {
  Development = "development",
  Production = "production",
}

export const SERVER_URLS = {
  [Environment.Development]: "https://jsonplaceholder.typicode.com",
  [Environment.Production]: "https://jsonplaceholder.typicode.com",
};

export enum API_ENDPOINTS {
  GET_POSTS = "/posts",
}

export const ERROR_CODE = {
  wrongInput: 400,
  unauthorized: 401,
  forbidden: 403,
  pageNotFound: 404,
  serverError: 500,
};
