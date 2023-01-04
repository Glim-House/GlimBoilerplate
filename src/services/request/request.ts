import Axios from 'axios';
import {Appconfig} from '../../config/config';

const request = Axios.create();

request.interceptors.request.use(async config => {
  config.headers = {
    Authorization: `Bearer ${Appconfig.BEARER_TOKEN}$`,
  };
  return config;
});

export {request};
