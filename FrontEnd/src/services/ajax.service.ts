import axios, { AxiosResponse } from 'axios';
import { Environment, SERVER_URLS } from '../constants/api.constants';

export default class CrudService<T> {
  baseUrl: string;

  constructor() {
    this.baseUrl = SERVER_URLS[Environment.Development];
  }
  getFreeApps = async (): Promise<any> => {
    const url = `${this.baseUrl}/free-apps`; // Make a request to your server's root endpoint

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('GET Apps Error:', error);
      throw error;
    }
  };

  getPaidApps = async (): Promise<any> => {
    const url = `${this.baseUrl}/paid-apps`; // replace with your server's endpoint for paid apps

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('GET Apps Error:', error);
      throw error;
    }
  };
}
