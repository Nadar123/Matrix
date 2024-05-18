import axios, { AxiosResponse } from 'axios';
import {
  Environment,
  SERVER_URLS,
  API_ENDPOINTS,
} from '../constants/api.constants';
import freeApps from '../freeApps.json';
import paidApps from '../paidApps.json';

export default class CrudService<T> {
  baseUrl: string;

  constructor() {
    this.baseUrl = SERVER_URLS[Environment.Development];
  }

  getFreeApps = async (): Promise<any> => {
    const url = `${this.baseUrl}${API_ENDPOINTS.GET_APPS}`;

    return freeApps.feed.results;
    // try {
    //   const response = await fetch(url, {
    //     headers: {
    //       Accept: 'application/json',
    //     },
    //     mode: 'no-cors',
    //   });
    //   console.log('Server response:', response); // log the server response
    //   return await response.text();
    // } catch (error) {
    //   console.error('GET Apps Error:', error);
    //   throw error;
    // }
  };
  getPaidApps = async (): Promise<any> => {
    const url = `${this.baseUrl}${API_ENDPOINTS.GET_APPS}`;

    return paidApps.feed.results;
    // try {
    //   const response = await fetch(url, {
    //     headers: {
    //       Accept: 'application/json',
    //     },
    //     mode: 'no-cors',
    //   });
    //   console.log('Server response:', response); // log the server response
    //   return await response.text();
    // } catch (error) {
    //   console.error('GET Apps Error:', error);
    //   throw error;
    // }
  };

  create = async (data: T): Promise<AxiosResponse<T>> => {
    const url = `${this.baseUrl}${API_ENDPOINTS.CREATE_APP}`; // replace CREATE_APP with the actual endpoint
    const response = await axios.post<T>(url, data);
    return response;
  };
}
