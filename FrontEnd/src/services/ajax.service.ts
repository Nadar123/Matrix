import { IApp } from './../constants/interfaces.constant';
import axios from 'axios';
import {
  Environment,
  SERVER_URLS,
  API_ENDPOINTS,
} from '../constants/api.constants';

export default class CrudService {
  baseUrl: string;

  constructor() {
    this.baseUrl = SERVER_URLS[Environment.Development];
  }

  // fetch free apps
  getFreeApps = async (): Promise<IApp> => {
    const url = `${this.baseUrl}/${API_ENDPOINTS.GET_FREE_APPS}`;

    try {
      const response = await axios.get<IApp>(url);
      return response.data;
    } catch (error) {
      console.error('GET Apps Error:', error);
      throw error;
    }
  };
  // fetch paid apps
  getPaidApps = async (): Promise<IApp> => {
    const url = `${this.baseUrl}/${API_ENDPOINTS.GET_PAID_APPS}`;

    try {
      const response = await axios.get<IApp>(url);
      return response.data;
    } catch (error) {
      console.error('GET Apps Error:', error);
      throw error;
    }
  };
}
