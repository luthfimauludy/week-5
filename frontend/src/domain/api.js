import config from '@config/index';
import { merge } from 'lodash';

import request from '@utils/request';

const urls = {
  // ping: 'ping.json',
  register: 'register',
  login: 'login',
  getEvent: 'event',
  createEvent: 'event',
};

export const callAPI = async (endpoint, method, header = {}, params = {}, data = {}) => {
  const defaultHeader = {
    'Content-Type': 'application/json; charset=UTF-8',
  };

  const headers = merge(defaultHeader, header);
  const options = {
    url: config.api.host + endpoint,
    method,
    headers,
    data,
    params,
  };

  return request(options).then((response) => {
    const responseAPI = response.data;
    return responseAPI;
  });
};

export const ping = () => callAPI(urls.ping, 'get');

// Auth
export const register = (dataUser) => callAPI(urls.register, 'POST', {}, {}, dataUser);
export const login = (dataUser) => callAPI(urls.login, 'POST', {}, {}, dataUser);

export const getEvent = () => callAPI(urls.getEvent, 'GET');
export const createEvent = (dataEvent) =>
  callAPI(urls.createEvent, 'POST', { 'Content-Type': 'multipart/form-data' }, {}, dataEvent);
