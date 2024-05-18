import axios, { AxiosResponse } from 'axios';
import {
  Environment,
  SERVER_URLS,
  API_ENDPOINTS,
} from '../constants/api.constants';

export default class CrudService<T> {
  baseUrl: string;

  constructor() {
    this.baseUrl = SERVER_URLS[Environment.Development];
    this.baseUrl = SERVER_URLS[Environment.Development];
  }

  getAll = async (
    page: number,
    perPage: number
  ): Promise<AxiosResponse<T[]>> => {
    const url = `${this.baseUrl}${API_ENDPOINTS.GET_POSTS}?_page=${page}&_limit=${perPage}`;

    try {
      const response = await axios.get<T[]>(url);
      return response;
    } catch (error) {
      console.error('GET All Error:', error);
      throw error;
    }
  };

  getById = async (id: number): Promise<AxiosResponse<T>> => {
    const url = `${this.baseUrl}${API_ENDPOINTS.GET_POSTS}/${id}`;

    const response = await axios.get<T>(url);
    return response;
  };

  create = async (data: T): Promise<AxiosResponse<T>> => {
    const url = `${this.baseUrl}${API_ENDPOINTS}`;
    const response = await axios.post<T>(url, data);
    return response;
  };

  // update = async (id: number, data: T): Promise<AxiosResponse<T>> => {
  //   const url = `${this.baseUrl}${API_ENDPOINTS}/${id}`;
  //   const response = await axios.put<T>(url, data);
  //   return response;
  // };
  update = async (id: number, data: T): Promise<AxiosResponse<T>> => {
    const url = `${this.baseUrl}${API_ENDPOINTS.GET_POSTS}/${id}`;
    const response = await axios.put<T>(url, data);
    return response;
  };

  delete = async (id: number): Promise<number> => {
    const url = `${this.baseUrl}${API_ENDPOINTS.GET_POSTS}/${id}`;
    try {
      const response = await axios.delete(url);
      return response.status;
    } catch (error) {
      throw error;
    }
  };
}
